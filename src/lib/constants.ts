/* ============================================
   TechVerse — Constants & Navigation Structure
   ============================================ */

export const siteConfig = {
  name: "TechVerse",
  description:
    "The ultimate IT learning and discovery platform. Explore technologies, career paths, AI tools, roadmaps, and interview prep — all in one premium experience.",
  url: "https://techverse.dev",
  ogImage: "/og-default.png",
  creator: "TechVerse Team",
  keywords: [
    "technology learning",
    "IT career paths",
    "AI tools directory",
    "software engineering roadmaps",
    "interview preparation",
    "tech trends",
    "developer resources",
  ],
};

export type NavItem = {
  title: string;
  href: string;
  description?: string;
  icon?: string;
  children?: NavItem[];
};

export const mainNavigation: NavItem[] = [
  {
    title: "Technologies",
    href: "/technologies",
    description: "Explore 100+ technologies across 10 categories",
    children: [
      { title: "Frontend", href: "/technologies/frontend", icon: "🎨", description: "React, Next.js, Vue, Angular, Svelte" },
      { title: "Backend", href: "/technologies/backend", icon: "⚙️", description: "Node.js, Django, Spring Boot, Laravel" },
      { title: "Databases", href: "/technologies/databases", icon: "🗄️", description: "PostgreSQL, MongoDB, Redis, MySQL" },
      { title: "Cloud", href: "/technologies/cloud", icon: "☁️", description: "AWS, Azure, GCP, Cloudflare" },
      { title: "DevOps", href: "/technologies/devops", icon: "🔄", description: "Docker, Kubernetes, Terraform, CI/CD" },
      { title: "AI & ML", href: "/technologies/ai", icon: "🤖", description: "LLMs, AI Agents, LangChain, RAG" },
      { title: "Cybersecurity", href: "/technologies/cybersecurity", icon: "🔒", description: "Ethical Hacking, Zero Trust, IAM" },
      { title: "Data Science", href: "/technologies/data", icon: "📊", description: "ML, Deep Learning, MLOps" },
      { title: "Mobile", href: "/technologies/mobile", icon: "📱", description: "Flutter, React Native, Swift, Kotlin" },
      { title: "Design", href: "/technologies/design", icon: "✏️", description: "Figma, UX, UI, Design Systems" },
    ],
  },
  {
    title: "AI Tools",
    href: "/ai-tools",
    description: "Discover and compare 100+ AI tools",
    children: [
      { title: "Coding", href: "/ai-tools?category=coding", icon: "💻" },
      { title: "Writing", href: "/ai-tools?category=writing", icon: "✍️" },
      { title: "Design", href: "/ai-tools?category=design", icon: "🎨" },
      { title: "Video", href: "/ai-tools?category=video", icon: "🎬" },
      { title: "Automation", href: "/ai-tools?category=automation", icon: "⚡" },
      { title: "Research", href: "/ai-tools?category=research", icon: "🔬" },
      { title: "Productivity", href: "/ai-tools?category=productivity", icon: "📈" },
    ],
  },
  {
    title: "Careers",
    href: "/careers",
    description: "Explore career paths with roadmaps and salary data",
  },
  {
    title: "Roadmaps",
    href: "/roadmaps",
    description: "Interactive learning roadmaps for every level",
  },
  {
    title: "Projects",
    href: "/projects",
    description: "Real-world project architecture case studies",
  },
  {
    title: "Interviews",
    href: "/interviews",
    description: "500+ interview questions with detailed answers",
    children: [
      { title: "Frontend", href: "/interviews/frontend", icon: "🎨" },
      { title: "Backend", href: "/interviews/backend", icon: "⚙️" },
      { title: "Cloud", href: "/interviews/cloud", icon: "☁️" },
      { title: "DevOps", href: "/interviews/devops", icon: "🔄" },
      { title: "AI & ML", href: "/interviews/ai", icon: "🤖" },
      { title: "Cybersecurity", href: "/interviews/cybersecurity", icon: "🔒" },
      { title: "System Design", href: "/interviews/system-design", icon: "🏗️" },
    ],
  },
  {
    title: "News",
    href: "/news",
    description: "Latest tech trends and industry updates",
  },
];

export const technologyCategories = [
  { slug: "frontend", name: "Frontend", icon: "🎨", color: "#3b82f6", count: 10, description: "Build beautiful, interactive user interfaces" },
  { slug: "backend", name: "Backend", icon: "⚙️", color: "#22c55e", count: 10, description: "Power your applications with robust server-side logic" },
  { slug: "databases", name: "Databases", icon: "🗄️", color: "#f59e0b", count: 10, description: "Store, query, and manage your data efficiently" },
  { slug: "cloud", name: "Cloud", icon: "☁️", color: "#06b6d4", count: 10, description: "Deploy and scale applications in the cloud" },
  { slug: "devops", name: "DevOps", icon: "🔄", color: "#8b5cf6", count: 10, description: "Automate, deploy, and monitor with confidence" },
  { slug: "ai", name: "AI & ML", icon: "🤖", color: "#ec4899", count: 10, description: "Build intelligent systems with artificial intelligence" },
  { slug: "cybersecurity", name: "Cybersecurity", icon: "🔒", color: "#ef4444", count: 10, description: "Protect systems and data from threats" },
  { slug: "data", name: "Data Science", icon: "📊", color: "#14b8a6", count: 10, description: "Extract insights from data at scale" },
  { slug: "mobile", name: "Mobile", icon: "📱", color: "#f97316", count: 10, description: "Create native and cross-platform mobile apps" },
  { slug: "design", name: "Design", icon: "✏️", color: "#a855f7", count: 10, description: "Design systems, UX patterns, and visual tools" },
] as const;

export const interviewCategories = [
  { slug: "frontend", name: "Frontend", icon: "🎨", count: 75 },
  { slug: "backend", name: "Backend", icon: "⚙️", count: 75 },
  { slug: "cloud", name: "Cloud", icon: "☁️", count: 70 },
  { slug: "devops", name: "DevOps", icon: "🔄", count: 70 },
  { slug: "ai", name: "AI & ML", icon: "🤖", count: 75 },
  { slug: "cybersecurity", name: "Cybersecurity", icon: "🔒", count: 65 },
  { slug: "system-design", name: "System Design", icon: "🏗️", count: 70 },
] as const;

export const aiToolCategories = [
  { slug: "coding", name: "Coding", icon: "💻", count: 20 },
  { slug: "writing", name: "Writing", icon: "✍️", count: 15 },
  { slug: "design", name: "Design", icon: "🎨", count: 15 },
  { slug: "video", name: "Video", icon: "🎬", count: 15 },
  { slug: "automation", name: "Automation", icon: "⚡", count: 15 },
  { slug: "research", name: "Research", icon: "🔬", count: 10 },
  { slug: "productivity", name: "Productivity", icon: "📈", count: 10 },
] as const;

export const difficultyLevels = ["beginner", "intermediate", "advanced"] as const;
export type DifficultyLevel = (typeof difficultyLevels)[number];

export const difficultyConfig: Record<DifficultyLevel, { label: string; color: string; bgColor: string }> = {
  beginner: { label: "Beginner", color: "#22c55e", bgColor: "rgba(34, 197, 94, 0.1)" },
  intermediate: { label: "Intermediate", color: "#f59e0b", bgColor: "rgba(245, 158, 11, 0.1)" },
  advanced: { label: "Advanced", color: "#ef4444", bgColor: "rgba(239, 68, 68, 0.1)" },
};

export const careerPaths = [
  { slug: "frontend-developer", title: "Frontend Developer", salaryRange: "$70K - $150K", icon: "🎨", growth: "High" },
  { slug: "backend-developer", title: "Backend Developer", salaryRange: "$80K - $160K", icon: "⚙️", growth: "High" },
  { slug: "full-stack-developer", title: "Full Stack Developer", salaryRange: "$85K - $170K", icon: "🔥", growth: "Very High" },
  { slug: "ai-engineer", title: "AI Engineer", salaryRange: "$100K - $200K", icon: "🤖", growth: "Very High" },
  { slug: "ml-engineer", title: "ML Engineer", salaryRange: "$95K - $190K", icon: "🧠", growth: "Very High" },
  { slug: "cloud-engineer", title: "Cloud Engineer", salaryRange: "$90K - $170K", icon: "☁️", growth: "High" },
  { slug: "devops-engineer", title: "DevOps Engineer", salaryRange: "$85K - $165K", icon: "🔄", growth: "High" },
  { slug: "cybersecurity-engineer", title: "Cybersecurity Engineer", salaryRange: "$85K - $175K", icon: "🔒", growth: "Very High" },
  { slug: "product-manager", title: "Product Manager", salaryRange: "$90K - $180K", icon: "📋", growth: "High" },
  { slug: "ui-ux-designer", title: "UI/UX Designer", salaryRange: "$65K - $140K", icon: "✏️", growth: "High" },
  { slug: "data-engineer", title: "Data Engineer", salaryRange: "$90K - $175K", icon: "📊", growth: "High" },
] as const;
