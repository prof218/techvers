import type { MetadataRoute } from "next";
import { siteConfig, careerPaths } from "@/lib/constants";
import { technologies, aiTools, roadmaps, projects } from "#site/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;
  const now = new Date();

  const entry = (
    route: string,
    priority: number,
    changeFrequency: "daily" | "weekly" | "monthly" = "weekly"
  ) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency,
    priority,
  });

  // Top-level hubs
  const hubs = [
    entry("", 1, "daily"),
    entry("/technologies", 0.9),
    entry("/ai-tools", 0.9),
    entry("/careers", 0.8),
    entry("/roadmaps", 0.8),
    entry("/projects", 0.8),
    entry("/interviews", 0.8),
  ];

  // Informational / legal pages (required for trust + AdSense)
  const infoPages = [
    entry("/about", 0.5, "monthly"),
    entry("/contact", 0.5, "monthly"),
    entry("/privacy", 0.3, "monthly"),
    entry("/terms", 0.3, "monthly"),
  ];

  // Category landing pages
  const techCategories = [
    "frontend", "backend", "databases", "cloud", "devops",
    "ai", "cybersecurity", "data", "mobile", "design",
  ].map((cat) => entry(`/technologies/${cat}`, 0.7));

  const interviewCategories = [
    "frontend", "backend", "cloud", "devops", "ai", "cybersecurity", "system-design",
  ].map((cat) => entry(`/interviews/${cat}`, 0.7));

  // Individual content detail pages (driven by Velite — stays in sync with content)
  const techPages = technologies.map((t) =>
    entry(`/technologies/${t.category}/${t.slug}`, 0.6)
  );
  const aiToolPages = aiTools.map((t) => entry(`/ai-tools/${t.slug}`, 0.6));
  const roadmapPages = roadmaps.map((r) => entry(`/roadmaps/${r.slug}`, 0.6));
  const projectPages = projects.map((p) => entry(`/projects/${p.slug}`, 0.6));
  const careerPages = careerPaths.map((c) => entry(`/careers/${c.slug}`, 0.6));

  return [
    ...hubs,
    ...infoPages,
    ...techCategories,
    ...interviewCategories,
    ...techPages,
    ...aiToolPages,
    ...roadmapPages,
    ...projectPages,
    ...careerPages,
  ];
}
