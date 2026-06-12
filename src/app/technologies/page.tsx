import type { Metadata } from "next";
import { TechnologiesPageClient } from "./page-client";

export const metadata: Metadata = {
  title: "Technology Hub — Explore 100+ Technologies",
  description:
    "Deep-dive into frontend, backend, databases, cloud, DevOps, AI, cybersecurity, data science, mobile, and design technologies with comprehensive guides.",
};

export default function TechnologiesPage() {
  return <TechnologiesPageClient />;
}
