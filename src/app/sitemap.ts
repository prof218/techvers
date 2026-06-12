import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  // Static pages
  const staticPages = [
    "",
    "/technologies",
    "/ai-tools",
    "/careers",
    "/roadmaps",
    "/projects",
    "/interviews",
    "/news",
    "/learn",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  // Technology categories
  const techCategories = [
    "frontend", "backend", "databases", "cloud", "devops",
    "ai", "cybersecurity", "data", "mobile", "design",
  ].map((cat) => ({
    url: `${baseUrl}/technologies/${cat}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  // Interview categories
  const interviewCategories = [
    "frontend", "backend", "cloud", "devops", "ai", "cybersecurity", "system-design",
  ].map((cat) => ({
    url: `${baseUrl}/interviews/${cat}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...techCategories, ...interviewCategories];
}
