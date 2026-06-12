import { defineConfig, defineCollection, s } from "velite";

const technologies = defineCollection({
  name: "Technology",
  pattern: "technologies/**/*.mdx",
  schema: s.object({
    title: s.string().max(100),
    slug: s.path().transform((p) => p.split("/").pop() || p),
    category: s.string(),
    description: s.string().max(500),
    icon: s.string().optional(),
    difficulty: s.enum(["beginner", "intermediate", "advanced"]).default("beginner"),
    tags: s.array(s.string()).default([]),
    features: s.array(s.string()).default([]),
    website: s.string().optional(),
    github: s.string().optional(),
    content: s.mdx(),
  }),
});

const aiTools = defineCollection({
  name: "AITool",
  pattern: "ai-tools/**/*.mdx",
  schema: s.object({
    title: s.string().max(100),
    slug: s.path().transform((p) => p.split("/").pop() || p),
    category: s.string(),
    description: s.string().max(500),
    pricing: s.enum(["Free", "Freemium", "Paid"]).default("Freemium"),
    rating: s.number().min(0).max(5).default(4),
    features: s.array(s.string()).default([]),
    pros: s.array(s.string()).default([]),
    cons: s.array(s.string()).default([]),
    alternatives: s.array(s.string()).default([]),
    website: s.string().optional(),
    content: s.mdx(),
  }),
});

const roadmaps = defineCollection({
  name: "Roadmap",
  pattern: "roadmaps/**/*.mdx",
  schema: s.object({
    title: s.string().max(100),
    slug: s.path().transform((p) => p.split("/").pop() || p),
    category: s.string(),
    level: s.enum(["beginner", "intermediate", "advanced"]).default("beginner"),
    description: s.string().max(500),
    estimatedTime: s.string().optional(),
    content: s.mdx(),
  }),
});

const projects = defineCollection({
  name: "Project",
  pattern: "projects/**/*.mdx",
  schema: s.object({
    title: s.string().max(100),
    slug: s.path().transform((p) => p.split("/").pop() || p),
    category: s.string(),
    description: s.string().max(500),
    techStack: s.array(s.string()).default([]),
    difficulty: s.enum(["beginner", "intermediate", "advanced"]).default("intermediate"),
    content: s.mdx(),
  }),
});

const interviews = defineCollection({
  name: "Interview",
  pattern: "interviews/**/*.mdx",
  schema: s.object({
    title: s.string().max(200),
    slug: s.path().transform((p) => p.split("/").pop() || p),
    category: s.string(),
    difficulty: s.enum(["easy", "medium", "hard"]).default("medium"),
    company: s.string().optional(),
    tags: s.array(s.string()).default([]),
    content: s.mdx(),
  }),
});

const news = defineCollection({
  name: "News",
  pattern: "news/**/*.mdx",
  schema: s.object({
    title: s.string().max(200),
    slug: s.path().transform((p) => p.split("/").pop() || p),
    category: s.string(),
    date: s.isodate(),
    summary: s.string().max(500),
    source: s.string().optional(),
    content: s.mdx(),
  }),
});

export default defineConfig({
  root: "content",
  output: {
    data: ".velite",
    assets: "public/static",
    base: "/static/",
    name: "[name]-[hash:6].[ext]",
    clean: true,
  },
  collections: { technologies, aiTools, roadmaps, projects, interviews, news },
});
