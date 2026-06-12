import React from "react";
import { roadmaps } from "#site/content";
import { Metadata } from "next";
import { Map } from "lucide-react";
import RoadmapsHubClient from "./page-client";

export const metadata: Metadata = {
  title: "Interactive Learning Roadmaps — Developer Paths | TechVerse",
  description:
    "Explore step-by-step visual learning roadmaps for frontend, backend, full stack, DevOps, AI, cloud engineering, cybersecurity, and data science.",
};

export default function RoadmapsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-20 sm:py-28 overflow-hidden border-b border-[var(--border)]">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--background-secondary)] to-[var(--background)]" />
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#8b5cf6]/10 rounded-full blur-[100px]" />

        <div className="relative container-wide text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#8b5cf6]/30 bg-[#8b5cf6]/5 text-sm text-[#8b5cf6] mb-6">
            <Map className="w-3.5 h-3.5" />
            {roadmaps.length} Guided Pathways
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            <span className="text-[var(--foreground)]">Interactive </span>
            <span className="gradient-text">Roadmaps</span>
          </h1>
          <p className="mt-4 text-lg text-[var(--foreground-muted)] max-w-2xl mx-auto leading-relaxed">
            Visual, node-based pathways to guide your learning from absolute beginner to industry expert. Track your steps and master technologies.
          </p>
        </div>
      </section>

      {/* Grid Section */}
      <section className="section-padding">
        <div className="container-wide">
          <RoadmapsHubClient allRoadmaps={roadmaps} />
        </div>
      </section>
    </div>
  );
}
