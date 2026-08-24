import React from "react";
import { roadmaps } from "#site/content";
import { Metadata } from "next";
import { Map } from "lucide-react";
import { siteConfig } from "@/lib/constants";
import RoadmapsHubClient from "./page-client";

export const metadata: Metadata = {
  title: "Learning Roadmaps — Step-by-Step Developer Paths",
  description:
    "Ordered, stage-by-stage learning roadmaps for frontend, backend, full stack, DevOps, AI, cloud, and data — check off each step and track your progress.",
  alternates: { canonical: `${siteConfig.url}/roadmaps` },
};

export default function RoadmapsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[var(--border)]">
        <div className="absolute inset-0 -z-10 grid-pattern" />
        <div className="absolute -top-20 right-0 w-[26rem] h-[26rem] rounded-full bg-[var(--primary)]/8 blur-[120px] -z-10" />

        <div className="container-tight py-16 sm:py-24 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[var(--border)] bg-[var(--surface)] text-sm text-[var(--foreground-muted)] shadow-[var(--shadow-sm)] mt-4 mb-1">
            <Map className="w-3.5 h-3.5 text-[var(--primary)]" />
            {roadmaps.length} guided pathways
          </div>
          <h1 className="font-display text-5xl sm:text-6xl text-[var(--foreground)] text-balance leading-[1.05]">
            Roadmaps that actually finish
          </h1>
          <p className="mt-5 text-lg text-[var(--foreground-muted)] max-w-2xl mx-auto leading-relaxed text-pretty">
            Ordered, stage-by-stage paths from beginner to job-ready — check off each step
            and watch your progress fill in.
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
