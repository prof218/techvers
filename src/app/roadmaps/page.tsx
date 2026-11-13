import React from "react";
import { roadmaps } from "#site/content";
import { Metadata } from "next";
import { Map } from "lucide-react";
import { siteConfig } from "@/lib/constants";
import { interactiveRoadmaps } from "@/data/roadmaps";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbJsonLd } from "@/lib/seo";
import RoadmapsHubClient from "./page-client";

export const metadata: Metadata = {
  title: "Learning Roadmaps — Step-by-Step Developer Paths",
  description:
    "Ordered, stage-by-stage learning roadmaps for frontend, backend, full stack, DevOps, AI, cloud, and data — check off each step and track your progress.",
  alternates: { canonical: `${siteConfig.url}/roadmaps` },
};

// Merge interactive roadmaps (preferred) with MDX roadmaps that have no interactive version.
function getAllRoadmaps() {
  const interactiveSlugs = new Set(interactiveRoadmaps.map((r) => r.slug));
  const merged = [
    ...interactiveRoadmaps.map((r) => ({
      title: r.title,
      slug: r.slug,
      category: r.category,
      level: r.level,
      description: r.description,
    })),
    ...roadmaps
      .filter((r) => !interactiveSlugs.has(r.slug))
      .map((r) => ({
        title: r.title,
        slug: r.slug,
        category: r.category,
        level: r.level as "beginner" | "intermediate" | "advanced",
        description: r.description,
      })),
  ];
  return merged.sort((a, b) => a.title.localeCompare(b.title));
}

export default function RoadmapsPage() {
  const allRoadmaps = getAllRoadmaps();
  return (
    <div className="min-h-screen">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Learning Roadmaps",
          description: metadata.description as string,
          url: `${siteConfig.url}/roadmaps`,
          isPartOf: { "@id": `${siteConfig.url}#site` },
          mainEntity: {
            "@type": "ItemList",
            numberOfItems: allRoadmaps.length,
            itemListElement: allRoadmaps.map((r, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: r.title,
              url: `${siteConfig.url}/roadmaps/${r.slug}`,
            })),
          },
        }}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "" },
          { name: "Roadmaps", path: "/roadmaps" },
        ])}
      />
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[var(--border)]">
        <div className="absolute inset-0 -z-10 grid-pattern" />
        <div className="absolute -top-20 right-0 w-[26rem] h-[26rem] rounded-full bg-[var(--primary)]/8 blur-[120px] -z-10" />

        <div className="container-tight py-16 sm:py-24 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[var(--border)] bg-[var(--surface)] text-sm text-[var(--foreground-muted)] shadow-[var(--shadow-sm)] mt-4 mb-1">
            <Map className="w-3.5 h-3.5 text-[var(--primary)]" />
            {allRoadmaps.length} guided pathways
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
          <RoadmapsHubClient
            allRoadmaps={allRoadmaps}
            interactiveSlugs={interactiveRoadmaps.map((r) => r.slug)}
          />
        </div>
      </section>
    </div>
  );
}
