import type { Metadata } from "next";
import { siteConfig } from "@/lib/constants";
import { TechnologiesPageClient } from "./page-client";

export const metadata: Metadata = {
  title: "Technology Guides — Frontend to AI",
  description:
    "Practical, code-first guides across frontend, backend, databases, cloud, DevOps, AI, cybersecurity, data science, mobile, and design.",
  alternates: { canonical: `${siteConfig.url}/technologies` },
};

export default function TechnologiesPage() {
  return <TechnologiesPageClient />;
}
