/* ============================================================
   Techoverxe — AI Training Jobs data
   ------------------------------------------------------------
   REAL, manually-curated micro1 opportunities, verified from the
   owner's micro1 referral dashboard on 2026-11-13.

   • Apply links use the owner's bundled micro1 referral link
     (configured in src/lib/jobs.ts → marketplaces.micro1.referralUrl),
     so referrals are attributed and earn the owner a reward.
   • Pay, skills, and opening counts are taken from the micro1 listing.
   • Country eligibility and full descriptions are NOT published on the
     listing, so they are intentionally left as "See listing" (never
     invented). Fill `countryEligibility` + `responsibilities` later
     (from each opportunity page) to enable JobPosting rich results.

   To add a job from another marketplace: add a record with its own
   marketplace, a unique id/slug, the real originalUrl, and (optionally)
   an applyUrl referral link + `referral: true`.
   ============================================================ */

import type { Job, JobCategory, CompensationType, ExperienceLevel, Commitment } from "@/lib/jobs";

const VERIFIED = "2026-11-13"; // date verified on the micro1 dashboard
const MICRO1_BOARD = "https://jobs.micro1.ai";

interface M1Input {
  slug: string;
  title: string;
  category: JobCategory;
  experienceLevel: ExperienceLevel;
  commitment: Commitment;
  compensationType: CompensationType;
  payMin: number;
  payMax: number;
  openings: number;
  skills: string[];
  postedAt: string;
  featured?: boolean;
}

function m1(j: M1Input): Job {
  const fmt = (n: number) => "$" + n.toLocaleString("en-US");
  const unit = j.compensationType === "yearly" ? "/year" : "/hour";
  const payLabel = `${fmt(j.payMin)}–${fmt(j.payMax)}${unit}`;
  return {
    id: `micro1-${j.slug}`,
    slug: j.slug,
    title: j.title,
    marketplace: "micro1",
    originalUrl: MICRO1_BOARD,
    referral: true,
    description: `${j.title} — an open contract opportunity on micro1 (${j.openings} ${
      j.openings === 1 ? "opening" : "openings"
    }). Compensation: ${payLabel}. Apply via micro1 to see the full role description, responsibilities, and eligibility.`,
    responsibilities: [],
    requirements: [],
    skills: j.skills,
    category: j.category,
    countryEligibility: ["OTHER"], // not published on the listing — see micro1
    workArrangement: "remote",
    commitment: j.commitment,
    experienceLevel: j.experienceLevel,
    payMin: j.payMin,
    payMax: j.payMax,
    payCurrency: "USD",
    compensationType: j.compensationType,
    postedAt: j.postedAt,
    lastVerifiedAt: VERIFIED,
    status: "open",
    featured: j.featured,
    demo: false,
  };
}

const micro1Jobs: Job[] = [
  m1({
    slug: "legal-expert-employment-labor-law",
    title: "Legal Expert (Employment & Labor Law)",
    category: "legal",
    experienceLevel: "expert",
    commitment: "hourly",
    compensationType: "hourly",
    payMin: 80,
    payMax: 130,
    openings: 20,
    skills: ["Employment attorney", "Labor & employment counsel", "Employment litigation attorney"],
    postedAt: "2026-11-13",
    featured: true,
  }),
  m1({
    slug: "legal-expert-antitrust-competition-law",
    title: "Legal Expert (Antitrust & Competition Law)",
    category: "legal",
    experienceLevel: "expert",
    commitment: "hourly",
    compensationType: "hourly",
    payMin: 80,
    payMax: 130,
    openings: 20,
    skills: ["Antitrust attorney", "Competition counsel", "Antitrust litigation attorney"],
    postedAt: "2026-11-13",
  }),
  m1({
    slug: "legal-expert-environmental-law",
    title: "Legal Expert (Environmental Law)",
    category: "legal",
    experienceLevel: "expert",
    commitment: "hourly",
    compensationType: "hourly",
    payMin: 80,
    payMax: 130,
    openings: 20,
    skills: ["Environmental attorney", "Environmental counsel", "Environmental litigation attorney"],
    postedAt: "2026-11-13",
  }),
  m1({
    slug: "legal-expert-civil-rights-law",
    title: "Legal Expert (Civil Rights Law)",
    category: "legal",
    experienceLevel: "expert",
    commitment: "hourly",
    compensationType: "hourly",
    payMin: 80,
    payMax: 130,
    openings: 20,
    skills: ["Civil rights attorney", "Civil rights litigation attorney", "Civil liberties attorney"],
    postedAt: "2026-11-13",
  }),
  m1({
    slug: "legal-expert-entertainment-law",
    title: "Legal Expert (Entertainment Law)",
    category: "legal",
    experienceLevel: "expert",
    commitment: "hourly",
    compensationType: "hourly",
    payMin: 80,
    payMax: 130,
    openings: 20,
    skills: ["Entertainment contract drafting", "Content licensing", "Talent agreements"],
    postedAt: "2026-11-13",
  }),
  m1({
    slug: "software-engineer-principal-eng-wide-architecture",
    title: "Software Engineer (Principal), Eng-wide Architecture",
    category: "software-engineering",
    experienceLevel: "expert",
    commitment: "full-time",
    compensationType: "yearly",
    payMin: 450000,
    payMax: 700000,
    openings: 1,
    skills: [
      "System architecture & distributed systems",
      "Agentic engineering & AI-driven development",
      "Technical leadership & engineering excellence",
    ],
    postedAt: "2026-11-12",
    featured: true,
  }),
  m1({
    slug: "software-engineer-staff-platform-engineering",
    title: "Software Engineer (Staff), Platform Engineering",
    category: "software-engineering",
    experienceLevel: "senior",
    commitment: "full-time",
    compensationType: "yearly",
    payMin: 350000,
    payMax: 600000,
    openings: 1,
    skills: [
      "Platform engineering & system architecture",
      "Agentic engineering & AI systems",
      "Data engineering & pipeline architecture",
    ],
    postedAt: "2026-11-12",
  }),
  m1({
    slug: "director-of-engineering-internal-platforms",
    title: "Director of Engineering, Internal Platforms",
    category: "software-engineering",
    experienceLevel: "expert",
    commitment: "full-time",
    compensationType: "yearly",
    payMin: 450000,
    payMax: 800000,
    openings: 1,
    skills: [
      "Platform engineering & system architecture",
      "AI engineering & agentic systems",
      "Quality engineering & test automation",
    ],
    postedAt: "2026-11-12",
  }),
  m1({
    slug: "go-to-market-revenue-operations-specialist",
    title: "Go-to-Market and Revenue Operations Specialist",
    category: "other",
    experienceLevel: "mid",
    commitment: "hourly",
    compensationType: "hourly",
    payMin: 50,
    payMax: 90,
    openings: 10,
    skills: ["Go-to-market strategy", "Revenue operations", "Sales operations"],
    postedAt: "2026-11-12",
  }),
  m1({
    slug: "sales-business-development-specialist",
    title: "Sales and Business Development Specialist",
    category: "other",
    experienceLevel: "mid",
    commitment: "hourly",
    compensationType: "hourly",
    payMin: 35,
    payMax: 65,
    openings: 10,
    skills: ["B2B sales", "Outbound prospecting", "Lead generation"],
    postedAt: "2026-11-12",
  }),
  m1({
    slug: "senior-commercial-underwriter",
    title: "Senior Commercial Underwriter",
    category: "finance",
    experienceLevel: "senior",
    commitment: "hourly",
    compensationType: "hourly",
    payMin: 50,
    payMax: 80,
    openings: 10,
    skills: ["Commercial insurance underwriting", "Risk assessment", "Insurance pricing and quoting"],
    postedAt: "2026-11-12",
  }),
  m1({
    slug: "junior-machine-learning-engineer",
    title: "Junior Machine Learning Engineer",
    category: "ai-ml",
    experienceLevel: "junior",
    commitment: "hourly",
    compensationType: "hourly",
    payMin: 60,
    payMax: 120,
    openings: 100,
    skills: ["Machine learning"],
    postedAt: "2026-11-12",
    featured: true,
  }),
  m1({
    slug: "student-loan-counselor",
    title: "Student Loan Counselor",
    category: "finance",
    experienceLevel: "mid",
    commitment: "hourly",
    compensationType: "hourly",
    payMin: 20,
    payMax: 60,
    openings: 10,
    skills: ["Federal student loan knowledge", "Repayment plans", "Forgiveness and relief programs"],
    postedAt: "2026-11-12",
  }),
  m1({
    slug: "passport-acceptance-agent",
    title: "Passport Acceptance Agent",
    category: "other",
    experienceLevel: "entry",
    commitment: "hourly",
    compensationType: "hourly",
    payMin: 20,
    payMax: 50,
    openings: 10,
    skills: ["Passport processing expertise", "Document authentication", "Identity verification"],
    postedAt: "2026-11-12",
  }),
  m1({
    slug: "medicare-counselor",
    title: "Medicare Counselor",
    category: "healthcare",
    experienceLevel: "mid",
    commitment: "hourly",
    compensationType: "hourly",
    payMin: 20,
    payMax: 50,
    openings: 10,
    skills: ["Medicare regulations knowledge", "Medicare counseling", "Regulatory compliance"],
    postedAt: "2026-11-12",
  }),
  m1({
    slug: "veterans-service-officer-vso",
    title: "Veterans Service Officer (VSO)",
    category: "other",
    experienceLevel: "mid",
    commitment: "hourly",
    compensationType: "hourly",
    payMin: 20,
    payMax: 50,
    openings: 10,
    skills: ["Veterans benefits expertise", "Claims process knowledge", "Regulatory compliance"],
    postedAt: "2026-11-12",
  }),
  m1({
    slug: "financial-aid-advisor",
    title: "Financial Aid Advisor",
    category: "finance",
    experienceLevel: "mid",
    commitment: "hourly",
    compensationType: "hourly",
    payMin: 20,
    payMax: 50,
    openings: 10,
    skills: ["Financial aid advising", "Federal and state financial aid regulations", "Written and verbal communication"],
    postedAt: "2026-11-12",
  }),
  m1({
    slug: "enterprise-client-partner-enterprise-ai",
    title: "Enterprise Client Partner, Enterprise AI",
    category: "other",
    experienceLevel: "senior",
    commitment: "full-time",
    compensationType: "yearly",
    payMin: 275000,
    payMax: 400000,
    openings: 1,
    skills: ["Client acquisition", "Outbound prospecting", "Enterprise partnerships"],
    postedAt: "2026-11-12",
  }),
  m1({
    slug: "ai-conversation-evaluator",
    title: "AI Conversation Evaluator",
    category: "ai-ml",
    experienceLevel: "junior",
    commitment: "hourly",
    compensationType: "hourly",
    payMin: 40,
    payMax: 70,
    openings: 50,
    skills: ["ChatGPT", "AI agents", "Attention to detail"],
    postedAt: "2026-11-12",
    featured: true,
  }),
  m1({
    slug: "paralegal",
    title: "Paralegal",
    category: "legal",
    experienceLevel: "mid",
    commitment: "hourly",
    compensationType: "hourly",
    payMin: 40,
    payMax: 80,
    openings: 20,
    skills: ["Legal research and verification", "Document review at volume", "Following detailed protocols consistently"],
    postedAt: "2026-11-11",
  }),
  m1({
    slug: "paralegal-law-student-legal-research",
    title: "Paralegal / Law Student — Legal Research",
    category: "legal",
    experienceLevel: "junior",
    commitment: "hourly",
    compensationType: "hourly",
    payMin: 50,
    payMax: 120,
    openings: 30,
    skills: ["NALA", "NFPA", "NALS"],
    postedAt: "2026-11-11",
    featured: true,
  }),
  m1({
    slug: "game-developer-godot-expert",
    title: "Game Developer (Godot Expert)",
    category: "software-engineering",
    experienceLevel: "mid",
    commitment: "hourly",
    compensationType: "hourly",
    payMin: 70,
    payMax: 130,
    openings: 10,
    skills: ["Godot", "Game development"],
    postedAt: "2026-11-11",
    featured: true,
  }),
  m1({
    slug: "digital-illustrator-krita-expert",
    title: "Digital Illustrator (Krita Expert)",
    category: "design",
    experienceLevel: "mid",
    commitment: "hourly",
    compensationType: "hourly",
    payMin: 21,
    payMax: 70,
    openings: 10,
    skills: ["Krita", "Illustration"],
    postedAt: "2026-11-11",
  }),
  m1({
    slug: "electronics-engineer-designspark-pcb-specialist",
    title: "Electronics Engineer (DesignSpark PCB Specialist)",
    category: "other",
    experienceLevel: "mid",
    commitment: "hourly",
    compensationType: "hourly",
    payMin: 63,
    payMax: 122,
    openings: 20,
    skills: ["DesignSpark PCB", "PCB design", "Electronics engineering"],
    postedAt: "2026-11-11",
  }),
];

/* ------------------------------------------------------------
   Turing — curated AI-training / evaluation roles, read from
   work.turing.com/jobs on 2026-11-13 (owner logged in as the
   referrer). A hand-picked selection (NOT a bulk scrape).

   • Apply uses the owner's Turing referral link (set in
     src/lib/jobs.ts → marketplaces.turing.referralUrl). Until that
     is set, Apply falls back to the Turing jobs board.
   • Turing cards show a REFERRAL bounty, not candidate pay — so pay
     is recorded only where the listing states it; otherwise omitted
     ("Undisclosed"). Country eligibility is set only where the title
     states it (e.g. "US-based" → USA); otherwise "See listing".
   ------------------------------------------------------------ */

const TURING_BOARD = "https://work.turing.com/jobs";

interface TurInput {
  slug: string;
  title: string;
  category: JobCategory;
  experienceLevel: ExperienceLevel;
  skills: string[];
  description: string;
  countryEligibility: Job["countryEligibility"];
  payMin?: number;
  payMax?: number;
  featured?: boolean;
  /** Per-job Turing referral link (work.turing.com/r/...) when captured. */
  applyUrl?: string;
}

function tur(j: TurInput): Job {
  return {
    id: `turing-${j.slug}`,
    slug: j.slug,
    title: j.title,
    marketplace: "turing",
    originalUrl: TURING_BOARD,
    applyUrl: j.applyUrl,
    referral: !!j.applyUrl,
    description: j.description,
    responsibilities: [],
    requirements: [],
    skills: j.skills,
    category: j.category,
    countryEligibility: j.countryEligibility,
    workArrangement: "remote",
    commitment: "contract",
    experienceLevel: j.experienceLevel,
    payMin: j.payMin,
    payMax: j.payMax,
    payCurrency: "USD",
    compensationType: "hourly",
    postedAt: VERIFIED,
    lastVerifiedAt: VERIFIED,
    status: "open",
    featured: j.featured,
    demo: false,
  };
}

const turingJobs: Job[] = [
  tur({
    slug: "turing-project-lead-ai-training",
    title: "Project Lead — AI Training",
    category: "data-annotation",
    experienceLevel: "senior",
    skills: ["AI Annotation", "Project Management", "Team Leadership"],
    description: "Lead large-scale AI annotation projects while managing clients and teams.",
    countryEligibility: ["OTHER"],
    featured: true,
  }),
  tur({
    slug: "turing-senior-software-engineer-ai-evaluation-coding-agents",
    title: "Senior Software Engineer — AI Evaluation / Coding Agents",
    category: "software-engineering",
    experienceLevel: "senior",
    skills: ["Code Review", "LLM Evaluation", "Software Engineering"],
    description: "Evaluate and improve AI coding models by reviewing generated code.",
    countryEligibility: ["OTHER"],
    payMin: 100,
    payMax: 150,
    featured: true,
  }),
  tur({
    slug: "turing-software-engineer-ai-model-training-python",
    title: "Software Engineer — AI Model Training (Python)",
    category: "software-engineering",
    experienceLevel: "senior",
    skills: ["Python", "AI Training", "Code Evaluation"],
    description: "Create and refine Python code for AI model training and evaluation.",
    countryEligibility: ["OTHER"],
    payMin: 200,
    payMax: 200,
    featured: true,
  }),
  tur({
    slug: "turing-software-engineer-ai-research-evaluation-us",
    title: "Software Engineer — AI Research & Evaluation (US-based)",
    category: "software-engineering",
    experienceLevel: "mid",
    skills: ["Python", "LLM Training", "Dataset Creation"],
    description: "Create and evaluate datasets for training large language models.",
    countryEligibility: ["USA"],
  }),
  tur({
    slug: "turing-go-developer-ai-training-code-evaluation",
    title: "Go (Golang) Developer — AI Training & Code Evaluation",
    category: "software-engineering",
    experienceLevel: "mid",
    skills: ["Go", "Code Evaluation", "AI Training"],
    description: "Create and evaluate code solutions primarily in Go for AI training.",
    countryEligibility: ["OTHER"],
  }),
  tur({
    slug: "turing-rust-developer-ai-training-code-evaluation",
    title: "Rust Developer — AI Training & Code Evaluation",
    category: "software-engineering",
    experienceLevel: "mid",
    skills: ["Rust", "Code Evaluation", "AI Training"],
    description: "Curate and evaluate code in Rust to enhance AI training datasets.",
    countryEligibility: ["OTHER"],
  }),
  tur({
    slug: "turing-java-developer-ai-training-code-evaluation",
    title: "Java Developer — AI Training & Code Evaluation",
    category: "software-engineering",
    experienceLevel: "mid",
    skills: ["Java", "Code Evaluation", "AI Training"],
    description: "Curate and evaluate Java code for AI training and performance benchmarks.",
    countryEligibility: ["OTHER"],
  }),
  tur({
    slug: "turing-ai-benchmark-red-teaming-specialist",
    title: "AI Benchmark & Red-Teaming Specialist",
    category: "ai-ml",
    experienceLevel: "senior",
    skills: ["Red Teaming", "Benchmarking", "LLM Evaluation"],
    description: "Research and build benchmark tasks to expose AI model weaknesses.",
    countryEligibility: ["OTHER"],
    featured: true,
  }),
  tur({
    slug: "turing-prompt-and-verifier",
    title: "Prompt & Verifier",
    category: "ai-ml",
    experienceLevel: "mid",
    skills: ["Prompt Engineering", "Verification", "LLM Evaluation"],
    description: "Design and refine prompts for AI interactions across various tools.",
    countryEligibility: ["OTHER"],
  }),
  tur({
    slug: "turing-llm-trainer-agent-function-call",
    title: "LLM Trainer — Agent Function Call",
    category: "ai-ml",
    experienceLevel: "mid",
    skills: ["Python", "Java", "JavaScript", "AI Agents"],
    description: "Train and evaluate LLMs on agent function-calling across languages.",
    countryEligibility: ["OTHER"],
  }),
  tur({
    slug: "turing-ai-quality-analyst-personalization-japanese",
    title: "AI Quality Analyst (Personalization) — Japanese",
    category: "language-audio",
    experienceLevel: "junior",
    skills: ["Japanese", "LLM Evaluation", "Annotation"],
    description: "Review and rate AI model outputs for quality and personalization in Japanese.",
    countryEligibility: ["OTHER"],
    applyUrl: "https://work.turing.com/r/W1XYZ1w5s_",
  }),
  tur({
    slug: "turing-personal-account-generalist-raters-android",
    title: "Personal Account Generalist Raters (Android Smartphone Users)",
    category: "data-annotation",
    experienceLevel: "entry",
    skills: ["Data Annotation", "Rating", "Android"],
    description: "Review AI-generated responses for accuracy and personalization using mobile data.",
    countryEligibility: ["OTHER"],
  }),
  tur({
    slug: "turing-image-editing-qa",
    title: "Image Editing QA",
    category: "data-annotation",
    experienceLevel: "entry",
    skills: ["Image QA", "Annotation", "Attention to Detail"],
    description: "Review image edits for accuracy and photorealism in AI training.",
    countryEligibility: ["OTHER"],
  }),
  tur({
    slug: "turing-illustrator-sketcher-cartoonist",
    title: "Illustrator / Sketcher / Cartoonist",
    category: "design",
    experienceLevel: "mid",
    skills: ["Illustration", "Digital Art"],
    description: "Create high-quality digital character illustrations from reference images.",
    countryEligibility: ["OTHER"],
  }),
  tur({
    slug: "turing-digital-imaging-specialist-digital-artist",
    title: "Digital Imaging Specialist / Digital Artist",
    category: "design",
    experienceLevel: "mid",
    skills: ["2D Art", "3D Art", "Digital Imaging"],
    description: "Create and edit high-quality 2D and 3D visual assets with precision.",
    countryEligibility: ["OTHER"],
    applyUrl: "https://work.turing.com/r/TJ7M98k9Rp",
  }),
  tur({
    slug: "turing-video-content-creator-us",
    title: "Video Content Creator (US based)",
    category: "design",
    experienceLevel: "mid",
    skills: ["Video", "Content Creation", "Critical Thinking"],
    description: "Create and evaluate video content for AI training projects.",
    countryEligibility: ["USA"],
  }),
  tur({
    slug: "turing-medical-expert-dermatology-usa",
    title: "Medical Expert — Dermatology (USA)",
    category: "healthcare",
    experienceLevel: "expert",
    skills: ["Dermatology", "Clinical Review", "Medical Writing"],
    description: "Evaluate AI-generated dermatology content for accuracy and safety.",
    countryEligibility: ["USA"],
  }),
  tur({
    slug: "turing-scientific-computing-research-earth-sciences",
    title: "Scientific Computing / Research Engineering Expert — Earth Sciences",
    category: "science-research",
    experienceLevel: "senior",
    skills: ["Scientific Computing", "Research", "Earth Science"],
    description: "Create computational workflows for Earth science tasks using diverse datasets.",
    countryEligibility: ["OTHER"],
  }),
  tur({
    slug: "turing-strategic-project-lead-software-engineering",
    title: "Strategic Project Lead — Software Engineering",
    category: "software-engineering",
    experienceLevel: "senior",
    skills: ["Program Management", "Software Engineering", "AI Data"],
    description: "Operate and manage software engineering data programs for AI models.",
    countryEligibility: ["OTHER"],
  }),
  tur({
    slug: "turing-engineering-manager-llm-data",
    title: "Engineering Manager (AI Data / LLM)",
    category: "software-engineering",
    experienceLevel: "senior",
    skills: ["Engineering Leadership", "LLM Training", "Team Management"],
    description: "Lead large teams to deliver high-quality datasets for LLM training.",
    countryEligibility: ["OTHER"],
  }),
  tur({
    slug: "turing-business-analyst-us",
    title: "Business Analyst — US",
    category: "other",
    experienceLevel: "mid",
    skills: ["Business Analysis", "Chatbot Evaluation"],
    description: "Analyze chatbot responses and evaluate them against business requirements.",
    countryEligibility: ["USA"],
  }),
  tur({
    slug: "turing-azure-devops-engineer-langgraph",
    title: "Azure DevOps Engineer (LangGraph)",
    category: "software-engineering",
    experienceLevel: "mid",
    skills: ["Azure", "CI/CD", "LangGraph"],
    description: "Build and optimize CI/CD pipelines for AI applications on Azure.",
    countryEligibility: ["OTHER"],
  }),
];

export const jobs: Job[] = [...micro1Jobs, ...turingJobs];
