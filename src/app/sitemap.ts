import type { MetadataRoute } from "next";
import { siteConfig, careerPaths } from "@/lib/constants";
import { technologies, aiTools, roadmaps, projects, blog } from "#site/content";
import { getOpenJobs } from "@/lib/jobs-loader";
import { interactiveRoadmaps } from "@/data/roadmaps";

export const revalidate = 300;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
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
    entry("/ai-training-jobs", 0.9, "daily"),
    entry("/blog", 0.8, "daily"),
  ];

  // Blog posts (Velite-driven — stays in sync with content)
  const blogPages = blog.map((p) => entry(`/blog/${p.slug}`, 0.7, "weekly"));

  // Individual job detail pages — only OPEN listings (never index closed/expired as active).
  const jobPages = (await getOpenJobs()).map((j) =>
    entry(`/ai-training-jobs/${j.slug}`, 0.6, "daily")
  );

  // Informational / legal pages (required for trust + AdSense)
  const infoPages = [
    entry("/about", 0.5, "monthly"),
    entry("/contact", 0.5, "monthly"),
    entry("/privacy", 0.4, "monthly"),
    entry("/terms", 0.4, "monthly"),
    entry("/disclaimer", 0.4, "monthly"),
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
  const roadmapSlugs = new Set<string>([
    ...roadmaps.map((r) => r.slug),
    ...interactiveRoadmaps.map((r) => r.slug),
  ]);
  const roadmapPages = [...roadmapSlugs].map((slug) => entry(`/roadmaps/${slug}`, 0.6));
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
    ...jobPages,
    ...blogPages,
  ];
}
