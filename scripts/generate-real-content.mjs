/**
 * TechVerse — real content generator (build-time, one-off).
 *
 * Replaces placeholder MDX stubs with genuine, useful, human-sounding content
 * using the OpenAI API. Frontmatter is assembled deterministically by THIS script
 * (never by the model) so Velite's schema can never be violated.
 *
 * Usage:
 *   1. Put your key in .env.local:  OPENAI_API_KEY=sk-...
 *   2. node scripts/generate-real-content.mjs [--only=ai-tools,technologies,interviews,roadmaps,projects]
 *                                             [--limit=N] [--force] [--dry] [--model=gpt-4o-mini]
 *
 * Idempotent + resumable: already-generated files are tracked in
 * scripts/.content-manifest.json and skipped unless --force.
 *
 * The key is read from .env.local (git-ignored) and never written anywhere.
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const CONTENT = path.join(ROOT, "content");
const MANIFEST = path.join(__dirname, ".content-manifest.json");

/* ----------------------------- env + args ----------------------------- */

function loadEnvLocal() {
  const p = path.join(ROOT, ".env.local");
  if (!fs.existsSync(p)) return;
  for (const line of fs.readFileSync(p, "utf-8").split("\n")) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/i);
    if (!m) continue;
    let v = m[2].trim().replace(/^["']|["']$/g, "");
    if (!process.env[m[1]]) process.env[m[1]] = v;
  }
}
loadEnvLocal();

const args = Object.fromEntries(
  process.argv.slice(2).map((a) => {
    const [k, v] = a.replace(/^--/, "").split("=");
    return [k, v ?? true];
  })
);
const DRY = !!args.dry;
const FORCE = !!args.force;
const LIMIT = args.limit ? parseInt(args.limit, 10) : Infinity;
const ONLY = args.only ? String(args.only).split(",") : null;

const API_KEY = process.env.OPENAI_API_KEY;
if (!API_KEY && !DRY) {
  console.error(
    "\n✖ OPENAI_API_KEY not found.\n  Add it to .env.local:  OPENAI_API_KEY=sk-...\n  (.env.local is git-ignored — the key never enters the repo.)\n"
  );
  process.exit(1);
}

/* ----------------------------- model pick ----------------------------- */

async function pickModel() {
  if (args.model) return String(args.model);
  if (process.env.OPENAI_MODEL) return process.env.OPENAI_MODEL;
  // Decide based on what the key can actually access.
  const preferred = ["gpt-4o", "gpt-4o-mini", "gpt-4.1", "gpt-4.1-mini", "gpt-4-turbo"];
  try {
    const res = await fetch("https://api.openai.com/v1/models", {
      headers: { Authorization: `Bearer ${API_KEY}` },
    });
    if (res.ok) {
      const data = await res.json();
      const available = new Set((data.data || []).map((m) => m.id));
      for (const m of preferred) if (available.has(m)) return m;
    }
  } catch {
    /* fall through */
  }
  return "gpt-4o-mini";
}

/* ----------------------------- OpenAI call ---------------------------- */

async function chatJSON(model, system, user, { retries = 4 } = {}) {
  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      const res = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
        body: JSON.stringify({
          model,
          temperature: 0.7,
          response_format: { type: "json_object" },
          messages: [
            { role: "system", content: system },
            { role: "user", content: user },
          ],
        }),
      });
      if (res.status === 429 || res.status >= 500) {
        const wait = Math.min(2000 * 2 ** attempt, 20000);
        console.warn(`  ↻ ${res.status}, retrying in ${wait}ms...`);
        await new Promise((r) => setTimeout(r, wait));
        continue;
      }
      if (!res.ok) throw new Error(`OpenAI ${res.status}: ${await res.text()}`);
      const data = await res.json();
      return JSON.parse(data.choices[0].message.content);
    } catch (e) {
      if (attempt === retries) throw e;
      const wait = Math.min(2000 * 2 ** attempt, 20000);
      console.warn(`  ↻ ${e.message?.slice(0, 80)}, retrying in ${wait}ms...`);
      await new Promise((r) => setTimeout(r, wait));
    }
  }
}

/* -------------------------- shared style rules ------------------------ */

const STYLE = `You are a senior software engineer and technical writer for a developer education site.
Write in clear, direct, specific prose that a working developer would trust. Rules:
- Be concrete: name real versions, commands, competitors, actual prices, and trade-offs. Prefer specifics over adjectives.
- Facts must be current and accurate. Only reference products/tools that are actively maintained today — never discontinued ones (e.g. do NOT cite Kite).
- Do NOT end with an "In summary" / "In conclusion" / "Overall" wrap-up paragraph — stop when the content is done.
- Avoid these AI-tell words: seamless, robust, leverage, paramount, tailored, compelling, streamline, game-changer, cutting-edge, unlock, dive in, in today's fast-paced world.
- Vary sentence and paragraph length. Avoid generic lists of adjectives.
- It must read as written by an experienced human, not an AI. No hedging boilerplate.
- Use GitHub-flavored Markdown for the "body": ## / ### headings, short paragraphs, fenced code blocks with language tags where useful, and tables where they help. Do NOT include an H1 or frontmatter in the body.`;

/* ----------------------------- helpers -------------------------------- */

const readManifest = () =>
  fs.existsSync(MANIFEST) ? JSON.parse(fs.readFileSync(MANIFEST, "utf-8")) : {};
const writeManifest = (m) => fs.writeFileSync(MANIFEST, JSON.stringify(m, null, 2));

const yamlList = (arr) => `[${arr.map((s) => JSON.stringify(String(s))).join(", ")}]`;
const esc = (s) => String(s).replace(/"/g, '\\"');

function frontmatter(obj) {
  const lines = ["---"];
  for (const [k, v] of Object.entries(obj)) {
    if (v === undefined || v === null) continue;
    if (Array.isArray(v)) lines.push(`${k}: ${yamlList(v)}`);
    else if (typeof v === "number") lines.push(`${k}: ${v}`);
    else lines.push(`${k}: "${esc(v)}"`);
  }
  lines.push("---", "");
  return lines.join("\n");
}

// Parse existing frontmatter (used for interviews we enrich in-place).
function parseFrontmatter(raw) {
  // Tolerate both LF and CRLF (git on Windows may check files out as CRLF).
  const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!m) return {};
  const out = {};
  for (const line of m[1].split(/\r?\n/)) {
    const mm = line.match(/^([a-zA-Z0-9_]+):\s*(.*)$/);
    if (!mm) continue;
    let v = mm[2].trim();
    if (v.startsWith("[")) {
      try {
        out[mm[1]] = JSON.parse(v.replace(/'/g, '"'));
        continue;
      } catch {}
    }
    out[mm[1]] = v.replace(/^["']|["']$/g, "");
  }
  return out;
}

/* ----------------------------- generators ----------------------------- */

async function genAITool(model, item) {
  const out = await chatJSON(
    model,
    STYLE,
    `Write an honest, in-depth review of the AI tool "${item.title}" (category: ${item.category}).
Return a JSON object with these keys:
- "description": one factual sentence (<=155 chars) summarizing what ${item.title} is and who it's for.
- "features": array of 6 concrete capabilities (short noun phrases, specific to ${item.title}).
- "pros": array of 4 genuine strengths (specific, not generic).
- "cons": array of 3 honest limitations.
- "alternatives": array of 3 real, currently-active competing tools (no discontinued products).
- "body": 500-750 words of Markdown. Cover: what it is and how it works, standout features with concrete examples, real-world use cases, and who should (and should not) use it. Include actual pricing with real dollar amounts for paid tiers where known (e.g. "$20/month"). Include at least one "## " heading. Be specific to ${item.title}.`
  );
  const fm = frontmatter({
    title: item.title,
    category: item.category,
    description: out.description,
    pricing: item.pricing,
    rating: item.rating,
    features: out.features?.slice(0, 6) || [],
    pros: out.pros?.slice(0, 4) || [],
    cons: out.cons?.slice(0, 3) || [],
    alternatives: out.alternatives?.slice(0, 3) || [],
    website: item.website || undefined,
  });
  return fm + out.body.trim() + "\n";
}

async function genTechnology(model, item) {
  const out = await chatJSON(
    model,
    STYLE,
    `Write a practical guide to the technology "${item.title}" (category: ${item.category}, level: ${item.difficulty}).
Return a JSON object:
- "description": one factual sentence (<=155 chars).
- "features": array of 6 concrete features/capabilities.
- "tags": array of 5 short topical tags.
- "body": 550-800 words of Markdown. Cover: what it is and the problem it solves, a minimal real code example in a fenced block, core concepts a developer must know, when to use it vs alternatives, and how to get started. Be specific and technical.`
  );
  const fm = frontmatter({
    title: item.title,
    category: item.category,
    description: out.description,
    icon: item.icon || "⚡",
    difficulty: item.difficulty,
    tags: out.tags?.slice(0, 5) || [],
    features: out.features?.slice(0, 6) || [],
    website: item.website || undefined,
    github: item.github || undefined,
  });
  return fm + out.body.trim() + "\n";
}

async function genInterview(model, item) {
  const out = await chatJSON(
    model,
    STYLE,
    `An interview candidate is asked this ${item.category} question: "${item.title}".
Return JSON with one key "body": a thorough, correct answer in Markdown (350-600 words) that a strong candidate would give.
Structure it with: a crisp direct answer first, then "### Key points" with the important details, a short code or example where relevant, and "### Common follow-ups" the interviewer might ask. Be technically accurate and specific to this exact question.`
  );
  const newFm = frontmatter({
    title: item.title,
    category: item.category,
    difficulty: item.difficulty,
    company: item.company,
    tags: [item.category, "interview-prep"],
  });
  return newFm + out.body.trim() + "\n";
}

async function genRoadmap(model, item) {
  const out = await chatJSON(
    model,
    STYLE,
    `Write a learning roadmap: "${item.title}" (category: ${item.category}, level: ${item.level}).
Return JSON:
- "description": one sentence (<=155 chars) on what this roadmap gets you to.
- "estimatedTime": realistic duration string (e.g. "4-6 months").
- "body": Markdown roadmap. Use sequential "## Stage N — <name>" sections (5-7 stages). Under each: a short intro paragraph and a bullet list of the specific skills/tools to learn and a concrete milestone/project. Be realistic and ordered.`
  );
  const fm = frontmatter({
    title: item.title,
    category: item.category,
    level: item.level,
    description: out.description,
    estimatedTime: out.estimatedTime || "3-6 months",
  });
  return fm + out.body.trim() + "\n";
}

async function genProject(model, item) {
  const out = await chatJSON(
    model,
    STYLE,
    `Write a system-design / architecture case study for building "${item.title}" (${item.category}). Tech stack: ${item.techStack.join(", ")}.
Return JSON:
- "description": one sentence (<=155 chars).
- "body": 600-850 words of Markdown. Cover: core requirements (functional + non-functional), a high-level architecture (describe components and data flow), key design decisions and trade-offs, data model highlights, how it scales, and the main challenges. Reference the given tech stack concretely.`
  );
  const fm = frontmatter({
    title: `${item.title} Architecture`,
    category: item.category,
    description: out.description,
    techStack: item.techStack,
    difficulty: item.difficulty || "intermediate",
  });
  return fm + out.body.trim() + "\n";
}

/* --------------------------- curated targets -------------------------- */
// Only real, well-known items. Paths must match existing content files.

const p = (...s) => path.join(CONTENT, ...s);

const aiToolMeta = {
  "github-copilot": { pricing: "Paid", rating: 4.8, website: "https://github.com/features/copilot" },
  cursor: { pricing: "Freemium", rating: 4.7, website: "https://cursor.com" },
  windsurf: { pricing: "Freemium", rating: 4.6, website: "https://windsurf.com" },
  "v0-by-vercel": { pricing: "Freemium", rating: 4.7, website: "https://v0.dev" },
  codeium: { pricing: "Free", rating: 4.4, website: "https://codeium.com" },
  "replit-agent": { pricing: "Paid", rating: 4.5, website: "https://replit.com" },
  tabnine: { pricing: "Freemium", rating: 4.2, website: "https://tabnine.com" },
  chatgpt: { pricing: "Freemium", rating: 4.7, website: "https://chat.openai.com" },
  claude: { pricing: "Freemium", rating: 4.8, website: "https://claude.ai" },
  gemini: { pricing: "Freemium", rating: 4.4, website: "https://gemini.google.com" },
  jasper: { pricing: "Paid", rating: 4.5, website: "https://jasper.ai" },
  quillbot: { pricing: "Freemium", rating: 4.5, website: "https://quillbot.com" },
  "copy-ai": { pricing: "Freemium", rating: 4.3, website: "https://copy.ai" },
  midjourney: { pricing: "Paid", rating: 4.6, website: "https://midjourney.com" },
  "dall-e-3": { pricing: "Paid", rating: 4.5, website: "https://openai.com/dall-e-3" },
  "stable-diffusion": { pricing: "Free", rating: 4.4, website: "https://stability.ai" },
  "canva-ai": { pricing: "Freemium", rating: 4.3, website: "https://canva.com" },
  "adobe-firefly": { pricing: "Freemium", rating: 4.4, website: "https://firefly.adobe.com" },
  "runway-gen-2": { pricing: "Freemium", rating: 4.5, website: "https://runwayml.com" },
  "openai-sora": { pricing: "Paid", rating: 4.9, website: "https://openai.com/sora" },
  synthesia: { pricing: "Paid", rating: 4.5, website: "https://synthesia.io" },
  heygen: { pricing: "Freemium", rating: 4.6, website: "https://heygen.com" },
  descript: { pricing: "Freemium", rating: 4.5, website: "https://descript.com" },
  "zapier-ai": { pricing: "Freemium", rating: 4.2, website: "https://zapier.com" },
  "make-com": { pricing: "Freemium", rating: 4.4, website: "https://make.com" },
  "n8n-ai": { pricing: "Free", rating: 4.5, website: "https://n8n.io" },
  "perplexity-ai": { pricing: "Freemium", rating: 4.7, website: "https://perplexity.ai" },
  notebooklm: { pricing: "Free", rating: 4.8, website: "https://notebooklm.google.com" },
  "notion-ai": { pricing: "Paid", rating: 4.4, website: "https://notion.so" },
  grammarly: { pricing: "Freemium", rating: 4.5, website: "https://grammarly.com" },
};
const aiToolCat = {
  "github-copilot": "coding", cursor: "coding", windsurf: "coding", "v0-by-vercel": "coding",
  codeium: "coding", "replit-agent": "coding", tabnine: "coding",
  chatgpt: "writing", claude: "writing", gemini: "writing", jasper: "writing",
  quillbot: "writing", "copy-ai": "writing",
  midjourney: "design", "dall-e-3": "design", "stable-diffusion": "design",
  "canva-ai": "design", "adobe-firefly": "design",
  "runway-gen-2": "video", "openai-sora": "video", synthesia: "video", heygen: "video", descript: "video",
  "zapier-ai": "automation", "make-com": "automation", "n8n-ai": "automation",
  "perplexity-ai": "research", notebooklm: "research",
  "notion-ai": "productivity", grammarly: "productivity",
};
const titleize = (slug) =>
  slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

const aiToolTitles = {
  "github-copilot": "GitHub Copilot", "v0-by-vercel": "v0 by Vercel", chatgpt: "ChatGPT",
  "dall-e-3": "DALL·E 3", "openai-sora": "OpenAI Sora", "runway-gen-2": "Runway Gen-2",
  "make-com": "Make.com", "n8n-ai": "n8n", "perplexity-ai": "Perplexity AI",
  notebooklm: "NotebookLM", "notion-ai": "Notion AI", "copy-ai": "Copy.ai",
  "canva-ai": "Canva AI", "zapier-ai": "Zapier AI",
};

const aiToolTargets = Object.keys(aiToolCat).map((slug) => ({
  type: "ai-tool",
  slug,
  category: aiToolCat[slug],
  title: aiToolTitles[slug] || titleize(slug),
  file: p("ai-tools", aiToolCat[slug], `${slug}.mdx`),
  ...aiToolMeta[slug],
}));

const techList = [
  ["frontend", "react", "React", "beginner", "⚛️"],
  ["frontend", "nextjs", "Next.js", "intermediate", "▲"],
  ["frontend", "typescript", "TypeScript", "beginner", "🔷"],
  ["frontend", "vue", "Vue.js", "beginner", "💚"],
  ["frontend", "tailwind-css", "Tailwind CSS", "beginner", "🌊"],
  ["backend", "node-js", "Node.js", "intermediate", "💚"],
  ["backend", "django", "Django", "intermediate", "🐍"],
  ["backend", "fastapi", "FastAPI", "beginner", "⚡"],
  ["backend", "graphql", "GraphQL", "intermediate", "◈"],
  ["databases", "postgresql", "PostgreSQL", "intermediate", "🐘"],
  ["databases", "mongodb", "MongoDB", "beginner", "🍃"],
  ["databases", "redis", "Redis", "intermediate", "🔴"],
  ["cloud", "aws", "AWS", "intermediate", "☁️"],
  ["cloud", "vercel", "Vercel", "beginner", "▲"],
  ["devops", "docker", "Docker", "intermediate", "🐳"],
  ["devops", "kubernetes", "Kubernetes", "advanced", "☸️"],
  ["ai", "openai", "OpenAI", "beginner", "🟢"],
  ["ai", "langchain", "LangChain", "intermediate", "🔗"],
  ["data", "pandas", "Pandas", "beginner", "🐼"],
  ["mobile", "flutter", "Flutter", "beginner", "💙"],
  ["mobile", "react-native", "React Native", "intermediate", "⚛️"],
  ["design", "figma", "Figma", "beginner", "🎨"],
  ["design", "tailwind-ui", "Tailwind UI", "beginner", "🌊"],
  ["cybersecurity", "zero-trust", "Zero Trust", "intermediate", "🔒"],
  ["cybersecurity", "penetration-testing", "Penetration Testing", "advanced", "🔓"],
];
const techTargets = techList.map(([category, slug, title, difficulty, icon]) => ({
  type: "technology",
  category, slug, title, difficulty, icon,
  file: p("technologies", category, `${slug}.mdx`),
}));

// [category, slug, question, difficulty, company] — questions mirror the seed templates.
const interviewList = [
  ["frontend", "frontend-q-2", "Explain CSS specificity and inheritance.", "easy", "Meta"],
  ["frontend", "frontend-q-3", "What is the difference between useMemo and useCallback in React?", "medium", "Amazon"],
  ["backend", "backend-q-2", "Explain SQL join queries and index optimization.", "easy", "Meta"],
  ["backend", "backend-q-3", "How do transactions and ACID compliance work in PostgreSQL?", "medium", "Amazon"],
  ["system-design", "system-design-q-1", "How would you design a URL shortener like Bitly?", "hard", "Google"],
  ["system-design", "system-design-q-2", "Explain consistent hashing and its application in cache distribution.", "easy", "Meta"],
  ["system-design", "system-design-q-3", "How does a message queue like Kafka handle backpressure?", "medium", "Amazon"],
  ["ai", "ai-q-1", "What is tokenization and how do LLMs parse prompts?", "hard", "Google"],
  ["ai", "ai-q-2", "Explain the effect of the temperature parameter in LLM text generation.", "easy", "Meta"],
  ["ai", "ai-q-3", "What are vector embeddings and how does cosine similarity search work?", "medium", "Amazon"],
  ["devops", "devops-q-1", "What is the difference between git rebase and git merge?", "hard", "Google"],
  ["cloud", "cloud-q-1", "What is the AWS Well-Architected Framework?", "hard", "Google"],
  ["cybersecurity", "cybersecurity-q-1", "What is the OWASP Top 10 and how do you mitigate its risks?", "hard", "Google"],
];
const interviewTargets = interviewList
  .map(([category, slug, title, difficulty, company]) => ({
    type: "interview",
    category, slug, title, difficulty, company,
    file: p("interviews", category, `${slug}.mdx`),
  }))
  .filter((t) => fs.existsSync(t.file));

const roadmapList = [
  ["frontend-developer", "Frontend Developer Roadmap", "Frontend", "beginner"],
  ["backend-developer", "Backend Developer Roadmap", "Backend", "beginner"],
  ["fullstack-developer", "Full Stack Developer Roadmap", "Full Stack", "intermediate"],
  ["devops-engineer", "DevOps Engineer Roadmap", "DevOps", "intermediate"],
  ["ai-engineer", "AI Engineer Roadmap", "AI", "advanced"],
  ["cloud-engineer", "Cloud Engineer Roadmap", "Cloud", "intermediate"],
  ["system-design", "System Design Roadmap", "Architecture", "advanced"],
  ["data-scientist", "Data Scientist Roadmap", "Data", "intermediate"],
];
const roadmapTargets = roadmapList
  .map(([slug, title, category, level]) => ({
    type: "roadmap", slug, title, category, level,
    file: p("roadmaps", `${slug}.mdx`),
  }))
  .filter((t) => fs.existsSync(t.file));

const projectList = [
  ["netflix-clone", "Netflix Clone", "Streaming", ["React", "Node.js", "MongoDB", "Redis"]],
  ["uber-clone", "Uber Clone", "Ride-sharing", ["React Native", "Node.js", "PostgreSQL", "Redis"]],
  ["ecommerce-platform", "E-Commerce Platform", "E-Commerce", ["Next.js", "Stripe", "PostgreSQL", "Redis"]],
  ["whatsapp-clone", "WhatsApp Clone", "Messaging", ["React", "Socket.io", "MongoDB", "WebRTC"]],
  ["crm-system", "CRM System", "Enterprise", ["React", "Node.js", "PostgreSQL", "Elasticsearch"]],
  ["ai-saas", "AI SaaS Product", "AI/SaaS", ["Next.js", "Python", "PostgreSQL", "OpenAI"]],
  ["food-delivery", "Food Delivery App", "Delivery", ["Flutter", "Node.js", "PostgreSQL", "Redis"]],
  ["banking-platform", "Banking Platform", "FinTech", ["Java", "Spring Boot", "PostgreSQL", "Kafka"]],
  ["healthcare-platform", "Healthcare Platform", "Healthcare", ["React", "Django", "PostgreSQL", "FHIR"]],
  ["lms", "Learning Management System", "EdTech", ["Next.js", "Node.js", "PostgreSQL", "S3"]],
];
const projectTargets = projectList
  .map(([slug, title, category, techStack]) => ({
    type: "project", slug, title, category, techStack,
    file: p("projects", `${slug}.mdx`),
  }))
  .filter((t) => fs.existsSync(t.file));

const GENERATORS = {
  "ai-tools": { targets: aiToolTargets, run: genAITool },
  technologies: { targets: techTargets, run: genTechnology },
  interviews: { targets: interviewTargets, run: genInterview },
  roadmaps: { targets: roadmapTargets, run: genRoadmap },
  projects: { targets: projectTargets, run: genProject },
};

/* ------------------------------- main --------------------------------- */

async function main() {
  const model = DRY ? "(dry-run)" : await pickModel();
  const manifest = readManifest();
  const groups = ONLY || Object.keys(GENERATORS);

  let total = 0;
  const plan = [];
  for (const g of groups) {
    const gen = GENERATORS[g];
    if (!gen) {
      console.warn(`Unknown group: ${g}`);
      continue;
    }
    let count = 0;
    for (const t of gen.targets) {
      if (count >= LIMIT) break;
      const key = path.relative(ROOT, t.file);
      if (!FORCE && manifest[key]) continue;
      plan.push({ group: g, t, run: gen.run, key });
      count++;
      total++;
    }
  }

  console.log(`\nModel: ${model}`);
  console.log(`Planned: ${total} file(s)${DRY ? " (dry run — nothing written)" : ""}\n`);

  if (DRY) {
    for (const item of plan) console.log(`  • [${item.group}] ${item.key}`);
    console.log("\nAdd OPENAI_API_KEY to .env.local and re-run without --dry to generate.\n");
    return;
  }

  let done = 0;
  for (const item of plan) {
    process.stdout.write(`[${++done}/${total}] ${item.key} ... `);
    try {
      const mdx = await item.run(model, item.t);
      fs.mkdirSync(path.dirname(item.t.file), { recursive: true });
      fs.writeFileSync(item.t.file, mdx, "utf-8");
      manifest[item.key] = { model, at: new Date().toISOString() };
      writeManifest(manifest);
      console.log("✓");
    } catch (e) {
      console.log(`✖ ${e.message?.slice(0, 120)}`);
    }
  }

  console.log(`\nDone. Generated ${done} file(s). Run \`npx velite\` or \`npm run build\` to recompile.\n`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
