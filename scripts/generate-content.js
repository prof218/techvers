const fs = require("fs");
const path = require("path");

const CONTENT_DIR = path.join(__dirname, "../content");

// 1. Technologies (100 total, 10 per category)
const technologiesData = {
  frontend: [
    { title: "React", difficulty: "beginner" }, // Already exists
    { title: "Next.js", difficulty: "intermediate" }, // Already exists
    { title: "Vue", difficulty: "beginner" },
    { title: "Angular", difficulty: "intermediate" },
    { title: "Svelte", difficulty: "beginner" },
    { title: "Tailwind CSS", difficulty: "beginner" },
    { title: "Vite", difficulty: "beginner" },
    { title: "Webpack", difficulty: "intermediate" },
    { title: "TypeScript", difficulty: "beginner" },
    { title: "HTML5", difficulty: "beginner" }
  ],
  backend: [
    { title: "Node.js", difficulty: "intermediate" },
    { title: "Django", difficulty: "intermediate" },
    { title: "Spring Boot", difficulty: "advanced" },
    { title: "Express", difficulty: "beginner" },
    { title: "NestJS", difficulty: "intermediate" },
    { title: "FastAPI", difficulty: "beginner" },
    { title: "Rails", difficulty: "intermediate" },
    { title: "Laravel", difficulty: "beginner" },
    { title: "Go", difficulty: "intermediate" },
    { title: "GraphQL", difficulty: "intermediate" }
  ],
  databases: [
    { title: "PostgreSQL", difficulty: "intermediate" },
    { title: "MongoDB", difficulty: "beginner" },
    { title: "Redis", difficulty: "intermediate" },
    { title: "MySQL", difficulty: "beginner" },
    { title: "SQLite", difficulty: "beginner" },
    { title: "Elasticsearch", difficulty: "advanced" },
    { title: "Cassandra", difficulty: "advanced" },
    { title: "DynamoDB", difficulty: "intermediate" },
    { title: "MariaDB", difficulty: "beginner" },
    { title: "Neo4j", difficulty: "intermediate" }
  ],
  cloud: [
    { title: "AWS", difficulty: "intermediate" },
    { title: "Azure", difficulty: "intermediate" },
    { title: "GCP", difficulty: "intermediate" },
    { title: "Cloudflare", difficulty: "beginner" },
    { title: "Vercel", difficulty: "beginner" },
    { title: "Netlify", difficulty: "beginner" },
    { title: "Heroku", difficulty: "beginner" },
    { title: "DigitalOcean", difficulty: "beginner" },
    { title: "Supabase", difficulty: "beginner" },
    { title: "Firebase", difficulty: "beginner" }
  ],
  devops: [
    { title: "Docker", difficulty: "intermediate" },
    { title: "Kubernetes", difficulty: "advanced" },
    { title: "Terraform", difficulty: "intermediate" },
    { title: "Ansible", difficulty: "intermediate" },
    { title: "Jenkins", difficulty: "intermediate" },
    { title: "GitLab CI", difficulty: "intermediate" },
    { title: "GitHub Actions", difficulty: "beginner" },
    { title: "Prometheus", difficulty: "intermediate" },
    { title: "Grafana", difficulty: "beginner" },
    { title: "Helm", difficulty: "advanced" }
  ],
  ai: [
    { title: "OpenAI", difficulty: "beginner" },
    { title: "LangChain", difficulty: "intermediate" },
    { title: "LlamaIndex", difficulty: "intermediate" },
    { title: "Hugging Face", difficulty: "intermediate" },
    { title: "PyTorch", difficulty: "advanced" },
    { title: "TensorFlow", difficulty: "advanced" },
    { title: "Pinecone", difficulty: "beginner" },
    { title: "Chroma", difficulty: "beginner" },
    { title: "Ollama", difficulty: "beginner" },
    { title: "CrewAI", difficulty: "intermediate" }
  ],
  cybersecurity: [
    { title: "Zero Trust", difficulty: "intermediate" },
    { title: "IAM", difficulty: "intermediate" },
    { title: "OAuth2", difficulty: "intermediate" },
    { title: "SAML", difficulty: "advanced" },
    { title: "Penetration Testing", difficulty: "advanced" },
    { title: "Kali Linux", difficulty: "intermediate" },
    { title: "Wireshark", difficulty: "beginner" },
    { title: "Nmap", difficulty: "beginner" },
    { title: "HashiCorp Vault", difficulty: "advanced" },
    { title: "SSL-TLS", difficulty: "intermediate" }
  ],
  data: [
    { title: "Pandas", difficulty: "beginner" },
    { title: "NumPy", difficulty: "beginner" },
    { title: "Scikit-Learn", difficulty: "intermediate" },
    { title: "Apache Spark", difficulty: "advanced" },
    { title: "Hadoop", difficulty: "advanced" },
    { title: "Tableau", difficulty: "beginner" },
    { title: "Power BI", difficulty: "beginner" },
    { title: "Snowflake", difficulty: "intermediate" },
    { title: "Databricks", difficulty: "advanced" },
    { title: "Apache Airflow", difficulty: "advanced" }
  ],
  mobile: [
    { title: "Flutter", difficulty: "beginner" },
    { title: "React Native", difficulty: "intermediate" },
    { title: "Swift", difficulty: "beginner" },
    { title: "Kotlin", difficulty: "beginner" },
    { title: "Ionic", difficulty: "beginner" },
    { title: "Xamarin", difficulty: "intermediate" },
    { title: "Android SDK", difficulty: "intermediate" },
    { title: "iOS SDK", difficulty: "intermediate" },
    { title: "Expo", difficulty: "beginner" },
    { title: "Unity", difficulty: "intermediate" }
  ],
  design: [
    { title: "Figma", difficulty: "beginner" },
    { title: "Sketch", difficulty: "beginner" },
    { title: "Adobe XD", difficulty: "beginner" },
    { title: "Framer", difficulty: "beginner" },
    { title: "Tailwind UI", difficulty: "beginner" },
    { title: "Bootstrap", difficulty: "beginner" },
    { title: "Shadcn UI", difficulty: "beginner" },
    { title: "Material UI", difficulty: "beginner" },
    { title: "Chakra UI", difficulty: "beginner" },
    { title: "Radix UI", difficulty: "intermediate" }
  ]
};

// 2. AI Tools (100 total)
const aiToolsData = {
  coding: [
    { name: "GitHub Copilot", rating: 4.8, pricing: "Paid" }, // Already exists
    { name: "Cursor", rating: 4.7, pricing: "Freemium" },
    { name: "Windsurf", rating: 4.6, pricing: "Freemium" },
    { name: "v0 by Vercel", rating: 4.7, pricing: "Freemium" },
    { name: "Tabnine", rating: 4.2, pricing: "Freemium" },
    { name: "Replit Agent", rating: 4.5, pricing: "Paid" },
    { name: "Amazon Q", rating: 4.1, pricing: "Freemium" },
    { name: "Codeium", rating: 4.4, pricing: "Free" },
    { name: "Blackbox AI", rating: 4.0, pricing: "Freemium" },
    { name: "Sourcegraph Cody", rating: 4.3, pricing: "Freemium" },
    { name: "GitLab Duo", rating: 4.1, pricing: "Paid" },
    { name: "Mutable AI", rating: 3.9, pricing: "Paid" },
    { name: "Sweep", rating: 4.2, pricing: "Freemium" },
    { name: "Phind", rating: 4.5, pricing: "Free" },
    { name: "Warp AI", rating: 4.4, pricing: "Freemium" }
  ],
  writing: [
    { name: "ChatGPT", rating: 4.7, pricing: "Freemium" },
    { name: "Claude", rating: 4.8, pricing: "Freemium" },
    { name: "Gemini", rating: 4.4, pricing: "Freemium" },
    { name: "Copy AI", rating: 4.3, pricing: "Freemium" },
    { name: "Jasper", rating: 4.5, pricing: "Paid" },
    { name: "Writesonic", rating: 4.4, pricing: "Freemium" },
    { name: "Rytr", rating: 4.2, pricing: "Freemium" },
    { name: "Peppertype AI", rating: 4.1, pricing: "Paid" },
    { name: "Wordtune", rating: 4.3, pricing: "Freemium" },
    { name: "Quillbot", rating: 4.5, pricing: "Freemium" },
    { name: "Sudowrite", rating: 4.4, pricing: "Paid" },
    { name: "Hemingway Editor AI", rating: 4.2, pricing: "Freemium" },
    { name: "Novel AI", rating: 4.3, pricing: "Paid" },
    { name: "WordAI", rating: 3.8, pricing: "Paid" },
    { name: "Scribe", rating: 4.5, pricing: "Freemium" }
  ],
  design: [
    { name: "Midjourney", rating: 4.6, pricing: "Paid" },
    { name: "DALL-E 3", rating: 4.5, pricing: "Paid" },
    { name: "Stable Diffusion", rating: 4.4, pricing: "Free" },
    { name: "Canva AI", rating: 4.3, pricing: "Freemium" },
    { name: "Adobe Firefly", rating: 4.4, pricing: "Freemium" },
    { name: "Photoroom", rating: 4.5, pricing: "Freemium" },
    { name: "Remove bg", rating: 4.6, pricing: "Freemium" },
    { name: "Uizard", rating: 4.2, pricing: "Freemium" },
    { name: "Looka", rating: 4.1, pricing: "Paid" },
    { name: "Khroma", rating: 4.0, pricing: "Free" },
    { name: "AutoDraw", rating: 4.1, pricing: "Free" },
    { name: "Clipdrop", rating: 4.3, pricing: "Freemium" },
    { name: "Lets Enhance", rating: 4.2, pricing: "Paid" },
    { name: "Deep Dream Generator", rating: 3.9, pricing: "Freemium" }
  ],
  video: [
    { name: "Runway Gen-2", rating: 4.5, pricing: "Freemium" },
    { name: "OpenAI Sora", rating: 4.9, pricing: "Paid" },
    { name: "Pika Labs", rating: 4.4, pricing: "Freemium" },
    { name: "HeyGen", rating: 4.6, pricing: "Freemium" },
    { name: "Synthesia", rating: 4.5, pricing: "Paid" },
    { name: "Deepbrain AI", rating: 4.2, pricing: "Paid" },
    { name: "Descript", rating: 4.5, pricing: "Freemium" },
    { name: "Pictory", rating: 4.3, pricing: "Paid" },
    { name: "InVideo AI", rating: 4.4, pricing: "Freemium" },
    { name: "Luma Dream Machine", rating: 4.6, pricing: "Free" },
    { name: "CapCut AI", rating: 4.5, pricing: "Free" },
    { name: "Veed io", rating: 4.3, pricing: "Freemium" },
    { name: "Kaiber", rating: 4.2, pricing: "Paid" },
    { name: "FlexClip", rating: 4.0, pricing: "Freemium" }
  ],
  automation: [
    { name: "Zapier AI", rating: 4.2, pricing: "Freemium" },
    { name: "Make com", rating: 4.4, pricing: "Freemium" },
    { name: "n8n AI", rating: 4.5, pricing: "Free" },
    { name: "Bardeen", rating: 4.3, pricing: "Freemium" },
    { name: "UiPath AI", rating: 4.1, pricing: "Paid" },
    { name: "AutoGPT", rating: 4.0, pricing: "Free" },
    { name: "BabyAGI", rating: 3.9, pricing: "Free" },
    { name: "Semantic Kernel", rating: 4.2, pricing: "Free" },
    { name: "Flowise", rating: 4.5, pricing: "Free" },
    { name: "Botpress", rating: 4.3, pricing: "Freemium" },
    { name: "Voiceflow", rating: 4.6, pricing: "Freemium" },
    { name: "Relevance AI", rating: 4.4, pricing: "Freemium" },
    { name: "Activepieces", rating: 4.3, pricing: "Free" },
    { name: "Taskade AI", rating: 4.5, pricing: "Freemium" }
  ],
  research: [
    { name: "Perplexity AI", rating: 4.7, pricing: "Freemium" },
    { name: "Consensus", rating: 4.5, pricing: "Freemium" },
    { name: "Elicit", rating: 4.4, pricing: "Freemium" },
    { name: "Scite AI", rating: 4.3, pricing: "Paid" },
    { name: "SciSpace", rating: 4.4, pricing: "Freemium" },
    { name: "Research Rabbit", rating: 4.6, pricing: "Free" },
    { name: "Genei", rating: 4.1, pricing: "Paid" },
    { name: "ChatPDF", rating: 4.5, pricing: "Freemium" },
    { name: "Lateral", rating: 4.2, pricing: "Freemium" },
    { name: "NotebookLM", rating: 4.8, pricing: "Free" },
    { name: "Semantic Scholar", rating: 4.5, pricing: "Free" },
    { name: "Explainpaper", rating: 4.3, pricing: "Freemium" }
  ],
  productivity: [
    { name: "Notion AI", rating: 4.4, pricing: "Paid" },
    { name: "Otter AI", rating: 4.3, pricing: "Freemium" },
    { name: "Fireflies AI", rating: 4.4, pricing: "Freemium" },
    { name: "Goblin Tools", rating: 4.7, pricing: "Free" },
    { name: "Zoom AI Companion", rating: 4.1, pricing: "Paid" },
    { name: "Grammarly", rating: 4.5, pricing: "Freemium" },
    { name: "Superhuman", rating: 4.6, pricing: "Paid" },
    { name: "Xembly", rating: 4.2, pricing: "Paid" },
    { name: "Taskwarrior AI", rating: 4.0, pricing: "Free" },
    { name: "Dewo", rating: 4.1, pricing: "Free" }
  ]
};

// 3. Roadmaps (50 total)
const roadmapsData = [
  { slug: "frontend-developer", title: "Frontend Developer Roadmap", level: "beginner", category: "Frontend" }, // exists
  { slug: "backend-developer", title: "Backend Developer Roadmap", level: "beginner", category: "Backend" }, // exists
  { slug: "fullstack-developer", title: "Full Stack Developer Roadmap", level: "intermediate", category: "Full Stack" },
  { slug: "devops-engineer", title: "DevOps Engineer Roadmap", level: "intermediate", category: "DevOps" },
  { slug: "ai-engineer", title: "AI Engineer Roadmap", level: "advanced", category: "AI" },
  { slug: "cloud-engineer", title: "Cloud Engineer Roadmap", level: "intermediate", category: "Cloud" },
  { slug: "cybersecurity", title: "Cybersecurity Roadmap", level: "beginner", category: "Security" },
  { slug: "data-scientist", title: "Data Scientist Roadmap", level: "intermediate", category: "Data" },
  { slug: "react-mastery", title: "React Mastery Roadmap", level: "beginner", category: "Frontend" },
  { slug: "system-design", title: "System Design Roadmap", level: "advanced", category: "Architecture" },
  { slug: "mobile-developer", title: "Mobile Developer Roadmap", level: "beginner", category: "Mobile" },
  { slug: "ml-engineer", title: "ML Engineer Roadmap", level: "advanced", category: "AI" }
];
// Generate another 38 stubs
for (let i = 1; i <= 38; i++) {
  roadmapsData.push({
    slug: `roadmap-stub-${i}`,
    title: `Specialized Track Path ${i}`,
    level: i % 3 === 0 ? "advanced" : i % 2 === 0 ? "intermediate" : "beginner",
    category: i % 4 === 0 ? "Data" : i % 3 === 0 ? "DevOps" : i % 2 === 0 ? "Cloud" : "Mobile"
  });
}

// 4. Projects (50 total)
const projectsData = [
  { slug: "netflix-clone", title: "Netflix Clone", category: "Streaming", techStack: ["React", "Node.js", "MongoDB", "Redis"] }, // exists
  { slug: "uber-clone", title: "Uber Clone", category: "Ride-sharing", techStack: ["React Native", "Node.js", "PostgreSQL", "Redis"] }, // exists
  { slug: "ecommerce-platform", title: "E-Commerce Platform", category: "E-Commerce", techStack: ["Next.js", "Stripe", "PostgreSQL", "Redis"] },
  { slug: "whatsapp-clone", title: "WhatsApp Clone", category: "Messaging", techStack: ["React", "Socket.io", "MongoDB", "WebRTC"] },
  { slug: "crm-system", title: "CRM System", category: "Enterprise", techStack: ["React", "Node.js", "PostgreSQL", "Elasticsearch"] },
  { slug: "food-delivery", title: "Food Delivery App", category: "Delivery", techStack: ["Flutter", "Node.js", "PostgreSQL", "Redis"] },
  { slug: "ai-saas", title: "AI SaaS Product", category: "AI/SaaS", techStack: ["Next.js", "Python", "PostgreSQL", "OpenAI"] },
  { slug: "healthcare-platform", title: "Healthcare Platform", category: "Healthcare", techStack: ["React", "Django", "PostgreSQL", "FHIR"] },
  { slug: "banking-platform", title: "Banking Platform", category: "FinTech", techStack: ["Java", "Spring Boot", "PostgreSQL", "Kafka"] },
  { slug: "lms", title: "Learning Management System", category: "EdTech", techStack: ["Next.js", "Node.js", "PostgreSQL", "S3"] }
];
// Generate another 40 stubs
for (let i = 1; i <= 40; i++) {
  projectsData.push({
    slug: `project-stub-${i}`,
    title: `Enterprise Architecture Study ${i}`,
    category: "System Design",
    techStack: ["React", "Express", "PostgreSQL", "Docker"]
  });
}

// 5. Interviews (500 total, 7 categories)
const interviewCategories = ["frontend", "backend", "cloud", "devops", "ai", "cybersecurity", "system-design"];
const companyList = ["Google", "Meta", "Amazon", "Apple", "Netflix", "Microsoft", "OpenAI", "Stripe", "Airbnb", "Uber"];

const sampleInterviewTemplates = {
  frontend: [
    "How does the Event Loop work in JavaScript?",
    "Explain CSS specificity and inheritance.",
    "What is the difference between useMemo and useCallback in React?",
    "How would you optimize a slow React application?",
    "Explain Web Accessibility (a11y) and keyboard navigation.",
    "What is cross-site scripting (XSS) and how do you prevent it in the UI?",
    "Explain the Box Model in CSS."
  ],
  backend: [
    "What is database normalization and when should you denormalize?",
    "Explain SQL Join queries and index optimizations.",
    "How do transactions and ACID compliance work in PostgreSQL?",
    "Explain session-based vs token-based authentication (JWT).",
    "What is rate limiting and how do you implement it with Redis?",
    "Explain the difference between thread-based and event-driven concurrency.",
    "How does connection pooling improve database performance?"
  ],
  cloud: [
    "What is the AWS Well-Architected Framework?",
    "Explain the differences between S3 Storage Classes.",
    "How do VPC peering and transit gateways connect subnets?",
    "What is a serverless cold start and how do you mitigate it?",
    "Explain IAM roles vs resource-based policies.",
    "How does CloudFront routing edge caching function?",
    "Explain Multi-Region disaster recovery strategies (Active-Active vs Active-Passive)."
  ],
  devops: [
    "What is git rebase vs git merge?",
    "How does Docker container namespace isolation work?",
    "Explain Kubernetes pod scheduling and affinity constraints.",
    "What is GitOps and how does it integrate with ArgoCD?",
    "Explain declarative vs imperative Infrastructure as Code.",
    "How do blue-green deployments differ from canary rollouts?",
    "Explain Prometheus metrics scraping and Alertmanager routing."
  ],
  ai: [
    "What is tokenization and how do LLMs parse prompts?",
    "Explain temperature parameter effects in GPT generations.",
    "What is Vector embedding and cosine similarity search?",
    "How does Retrieval-Augmented Generation (RAG) limit model hallucinations?",
    "Explain Fine-Tuning vs Few-Shot learning.",
    "What is reinforcement learning from human feedback (RLHF)?",
    "Explain neural network feedforward backpropagation."
  ],
  cybersecurity: [
    "What is the OWASP Top 10 vulnerabilities list?",
    "Explain SQL Injection attacks and prepared statement prevention.",
    "What is Cross-Site Request Forgery (CSRF) and how do anti-csrf tokens work?",
    "Explain Zero Trust architecture guidelines.",
    "How does RSA asymmetric key generation function?",
    "What is a Man-in-the-Middle (MitM) attack and how does TLS prevent it?",
    "Explain Role-Based Access Control (RBAC) vs Attribute-Based Access Control (ABAC)."
  ],
  "system-design": [
    "How would you design a URL Shortener like Bitly?",
    "Explain Consistent Hashing and its application in cache distribution.",
    "How does a Message Queue (Kafka) handle backpressure?",
    "Explain Horizontal Scaling vs Vertical Scaling.",
    "What is Database Sharding and what are the primary partition keys?",
    "How do you design a real-time Notification System?",
    "Explain CDN caching strategies for high-frequency assets."
  ]
};

// Generate 500 interview questions
const interviewsData = [];
// Core questions (already exists)
interviewsData.push(
  { slug: "react-virtual-dom", title: "What is the Virtual DOM in React and how does it improve performance?", category: "frontend", difficulty: "easy", company: "Meta", tags: ["React", "JavaScript", "Virtual DOM"] },
  { slug: "sql-vs-nosql", title: "Explain the difference between SQL and NoSQL databases. When would you choose one over the other?", category: "backend", difficulty: "medium", company: "Amazon", tags: ["Databases", "SQL", "NoSQL"] }
);

let qCount = 3;
for (const cat of interviewCategories) {
  const templates = sampleInterviewTemplates[cat];
  for (let idx = 0; idx < 72; idx++) {
    const templateTitle = templates[idx % templates.length];
    const difficulty = idx % 3 === 0 ? "hard" : idx % 2 === 0 ? "medium" : "easy";
    const company = companyList[idx % companyList.length];
    const slug = `${cat}-q-${idx + 1}`;
    
    // Skip if matching existing
    if (slug === "frontend-q-1" || slug === "backend-q-1") continue;

    interviewsData.push({
      slug,
      title: `${templateTitle} (Variant ${idx + 1})`,
      category: cat,
      difficulty,
      company,
      tags: [cat, "interview-prep", `topic-${idx % 5}`]
    });
  }
}

// ----------------------------------------------------
// Write Helper
// ----------------------------------------------------
function ensureDir(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

console.log("Generating Technologies...");
Object.entries(technologiesData).forEach(([cat, techs]) => {
  const dir = path.join(CONTENT_DIR, "technologies", cat);
  ensureDir(dir);
  techs.forEach((tech) => {
    const slug = tech.title.toLowerCase().replace(/[^a-z0-9]/g, "-").replace(/-+/g, "-");
    const filePath = path.join(dir, `${slug}.mdx`);
    
    // Don't overwrite if it exists
    if (fs.existsSync(filePath)) {
      console.log(`Skipping existing tech: ${filePath}`);
      return;
    }

    const frontmatter = `---
title: "${tech.title}"
category: "${cat}"
description: "A comprehensive guide to ${tech.title}. Explore features, specifications, and learning paths."
icon: "⚡"
difficulty: "${tech.difficulty}"
tags: ["${cat.toUpperCase()}", "${tech.title}"]
features: ["Feature 1", "Feature 2", "Feature 3"]
website: "https://example.com"
github: "https://github.com"
---

# ${tech.title}

Detailed content stubs for ${tech.title} will be filled in soon. This placeholder serves as a guide for category learning.

## Key Takeaways
- Industry standard for ${cat} operations.
- Strong community support and documentation.
`;
    fs.writeFileSync(filePath, frontmatter, "utf-8");
  });
});

console.log("Generating AI Tools...");
Object.entries(aiToolsData).forEach(([cat, tools]) => {
  const dir = path.join(CONTENT_DIR, "ai-tools", cat);
  ensureDir(dir);
  tools.forEach((tool) => {
    const slug = tool.name.toLowerCase().replace(/[^a-z0-9]/g, "-").replace(/-+/g, "-");
    const filePath = path.join(dir, `${slug}.mdx`);

    if (fs.existsSync(filePath)) {
      console.log(`Skipping existing AI tool: ${filePath}`);
      return;
    }

    const frontmatter = `---
title: "${tool.name}"
category: "${cat}"
description: "Review of ${tool.name}. Explore features, pros/cons, and pricing models."
pricing: "${tool.pricing}"
rating: ${tool.rating}
features: ["Feature A", "Feature B", "Feature C"]
pros: ["Saves time", "Easy to use", "Good results"]
cons: ["Cost", "Slight learning curve"]
alternatives: ["Alternative 1", "Alternative 2"]
website: "https://example.com"
---

# ${tool.name} Review

Detailed review and overview of ${tool.name} for ${cat} workflows.

## Features
- Dynamic workspace capabilities.
- Advanced AI models support.
`;
    fs.writeFileSync(filePath, frontmatter, "utf-8");
  });
});

console.log("Generating Roadmaps...");
const roadmapsDir = path.join(CONTENT_DIR, "roadmaps");
ensureDir(roadmapsDir);
roadmapsData.forEach((roadmap) => {
  const filePath = path.join(roadmapsDir, `${roadmap.slug}.mdx`);

  if (fs.existsSync(filePath)) {
    console.log(`Skipping existing roadmap: ${filePath}`);
    return;
  }

  const frontmatter = `---
title: "${roadmap.title}"
category: "${roadmap.category}"
level: "${roadmap.level}"
description: "Step-by-step path for ${roadmap.title} competency. Learn basic to advanced concepts."
estimatedTime: "3 months"
---

# ${roadmap.title}

Visual path for ${roadmap.title}.

<RoadmapNode title="Core Basics" time="2 weeks">
  Learn foundational building blocks for this track.
</RoadmapNode>

<RoadmapNode title="Intermediate Integration" time="3 weeks">
  Build practical integrations and understand core patterns.
</RoadmapNode>
`;
  fs.writeFileSync(filePath, frontmatter, "utf-8");
});

console.log("Generating Projects...");
const projectsDir = path.join(CONTENT_DIR, "projects");
ensureDir(projectsDir);
projectsData.forEach((project) => {
  const filePath = path.join(projectsDir, `${project.slug}.mdx`);

  if (fs.existsSync(filePath)) {
    console.log(`Skipping existing project: ${filePath}`);
    return;
  }

  const frontmatter = `---
title: "${project.title} Architecture"
category: "${project.category}"
description: "Production architecture breakdown of ${project.title}."
techStack: ${JSON.stringify(project.techStack)}
difficulty: "intermediate"
---

# ${project.title} Production Architecture

Case study overview of the ${project.title} system architecture.

## Scaling
- Vertical database replication.
- Horizontal application server clusters.
`;
  fs.writeFileSync(filePath, frontmatter, "utf-8");
});

console.log("Generating Interviews...");
interviewCategories.forEach((cat) => {
  ensureDir(path.join(CONTENT_DIR, "interviews", cat));
});

interviewsData.forEach((interview) => {
  const filePath = path.join(CONTENT_DIR, "interviews", interview.category, `${interview.slug}.mdx`);

  if (fs.existsSync(filePath)) {
    console.log(`Skipping existing interview: ${filePath}`);
    return;
  }

  const frontmatter = `---
title: "${interview.title}"
category: "${interview.category}"
difficulty: "${interview.difficulty}"
company: "${interview.company || "General"}"
tags: ${JSON.stringify(interview.tags)}
---

Detailed answer for: **${interview.title}**

### Key Details
- Focus on practical trade-offs.
- Illustrate with architectural diagrams where applicable.
`;
  fs.writeFileSync(filePath, frontmatter, "utf-8");
});

console.log("Content Generation Script Completed!");
