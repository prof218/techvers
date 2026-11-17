import type { Metadata } from "next";
import { siteConfig } from "@/lib/constants";
import { TechnologiesPageClient } from "./page-client";

export const metadata: Metadata = {
  title: "Technology Guides — Frontend to AI",
  description:
    "Practical, code-first guides across frontend, backend, databases, cloud, DevOps, AI, cybersecurity, data science, mobile, and design.",
  alternates: { canonical: `${siteConfig.url}/technologies` },
  openGraph: {
    title: `Technology Guides — ${siteConfig.name}`,
    description: "Practical, code-first guides across 10 core tech categories.",
    url: `${siteConfig.url}/technologies`,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `Technology Guides — ${siteConfig.name}`,
    description: "Practical, code-first guides across 10 core tech categories.",
  },
};

export default function TechnologiesPage() {
  return <TechnologiesPageClient />;
}
