import React from "react";
import { projects } from "#site/content";
import { Metadata } from "next";
import { Layers } from "lucide-react";
import ProjectsHubClient from "./page-client";

export const metadata: Metadata = {
  title: "Project Architecture Library — Case Studies | TechVerse",
  description:
    "Explore detailed production-grade system architectures, database designs, API structures, and scaling strategies from popular software products.",
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-20 sm:py-28 overflow-hidden border-b border-[var(--border)]">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--background-secondary)] to-[var(--background)]" />
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="absolute top-1/3 -left-20 w-72 h-72 bg-[#22c55e]/10 rounded-full blur-[100px]" />

        <div className="relative container-wide text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#22c55e]/30 bg-[#22c55e]/5 text-sm text-[#22c55e] mb-6">
            <Layers className="w-3.5 h-3.5" />
            {projects.length} System Case Studies
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            <span className="text-[var(--foreground)]">Project </span>
            <span className="gradient-text">Architecture</span>
          </h1>
          <p className="mt-4 text-lg text-[var(--foreground-muted)] max-w-2xl mx-auto leading-relaxed">
            Deep-dive into database schema schemas, API layout designs, and microservice topologies from real-world, high-traffic systems.
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
