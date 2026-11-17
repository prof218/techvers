import React from "react";
import { projects } from "#site/content";
import { Metadata } from "next";
import { Layers } from "lucide-react";
import { siteConfig } from "@/lib/constants";
import ProjectsHubClient from "./page-client";

export const metadata: Metadata = {
  title: "Project Case Studies — System Architecture Breakdowns",
  description:
    "Production-grade system architecture case studies — components, data flow, database design, and scaling strategies from products you know. Great for system-design practice.",
  alternates: { canonical: `${siteConfig.url}/projects` },
  openGraph: {
    title: `Project Case Studies — ${siteConfig.name}`,
    description: "Production-grade system architecture case studies and system-design breakdowns.",
    url: `${siteConfig.url}/projects`,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `Project Case Studies — ${siteConfig.name}`,
    description: "Production-grade system architecture case studies and system-design breakdowns.",
  },
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[var(--border)]">
        <div className="absolute inset-0 -z-10 grid-pattern" />
        <div className="absolute -top-20 -left-16 w-[26rem] h-[26rem] rounded-full bg-[var(--primary)]/8 blur-[120px] -z-10" />

        <div className="container-tight hero-padding text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[var(--border)] bg-[var(--surface)] text-sm text-[var(--foreground-muted)] shadow-[var(--shadow-sm)] mt-4 mb-1">
            <Layers className="w-3.5 h-3.5 text-[var(--primary)]" />
            {projects.length} system case studies
          </div>
          <h1 className="font-display text-4xl sm:text-6xl text-[var(--foreground)] text-balance leading-[1.05]">
            How real products are built
          </h1>
          <p className="mt-5 text-lg text-[var(--foreground-muted)] max-w-2xl mx-auto leading-relaxed text-pretty">
            Architecture breakdowns of products you know — the components, data flow, trade-offs,
            and how each one scales. Perfect for system-design practice.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding">
        <div className="container-wide">
          <ProjectsHubClient allProjects={projects} />
        </div>
      </section>
    </div>
  );
}
