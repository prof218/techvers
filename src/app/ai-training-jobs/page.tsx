import React from "react";
import type { Metadata } from "next";
import { Briefcase, ShieldCheck, Globe } from "lucide-react";
import { siteConfig } from "@/lib/constants";
import { JsonLd } from "@/components/json-ld";
import { parseFilters } from "@/lib/jobs";
import { getOpenJobs } from "@/lib/jobs-loader";
import JobsBoardClient from "./page-client";

const PATH = "/ai-training-jobs";

// ISR: Sheet edits go live within this window without a redeploy.
export const revalidate = 300;

export const metadata: Metadata = {
  title: "AI Training Jobs — Model Evaluation, Data Annotation & Expert Roles",
  description:
    "Discover curated AI training, model evaluation, coding evaluation, data annotation, and expert freelance opportunities from marketplaces like Mercor, Handshake, micro1 and more. Filter by country, pay, category and apply on the original platform.",
  keywords: [
    "AI training jobs",
    "LLM evaluation jobs",
    "data annotation jobs",
    "AI model evaluation",
    "coding evaluation jobs",
    "remote AI freelance",
    "Mercor jobs",
    "micro1 jobs",
  ],
  alternates: { canonical: `${siteConfig.url}${PATH}` },
  openGraph: {
    title: "AI Training Jobs — Curated AI Evaluation & Annotation Roles",
    description:
      "Browse AI training, evaluation, and annotation opportunities across top marketplaces. Filter by country, pay, and category.",
    url: `${siteConfig.url}${PATH}`,
    siteName: siteConfig.name,
    type: "website",
  },
};

export default async function AiTrainingJobsPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const sp = await searchParams;
  const initialFilters = parseFilters(sp);

  // Open listings from the Sheet (if configured) merged with code jobs.
  const openJobs = await getOpenJobs();
  const hasDemo = openJobs.some((j) => j.demo);

  return (
    <div className="min-h-screen">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "CollectionPage",
              "@id": `${siteConfig.url}${PATH}#page`,
              url: `${siteConfig.url}${PATH}`,
              name: "AI Training Jobs",
              description: metadata.description as string,
              isPartOf: { "@id": `${siteConfig.url}#site` },
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
                { "@type": "ListItem", position: 2, name: "AI Training Jobs", item: `${siteConfig.url}${PATH}` },
              ],
            },
          ],
        }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[var(--border)]">
        <div className="absolute inset-0 -z-10 grid-pattern" />
        <div className="absolute -top-20 -right-16 w-[26rem] h-[26rem] rounded-full bg-[var(--primary)]/10 blur-[120px] -z-10" />
        <div className="container-tight py-10 sm:py-12 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[var(--border)] bg-[var(--surface)] text-sm text-[var(--foreground-muted)] shadow-[var(--shadow-sm)] mb-4">
            <Briefcase className="w-3.5 h-3.5 text-[var(--primary)]" />
            {openJobs.length} opportunities across top marketplaces
          </div>
          <h1 className="font-display text-4xl sm:text-6xl text-[var(--foreground)] text-balance leading-[1.05]">
            AI training & evaluation jobs
          </h1>
          <p className="mt-5 text-lg text-[var(--foreground-muted)] max-w-2xl mx-auto leading-relaxed text-pretty">
            Curated AI model evaluation, coding evaluation, data annotation, research, and expert
            freelance roles. Filter by country, pay, and category — then apply on the original platform.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-[var(--foreground-subtle)]">
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[var(--success)]" />
              Source-attributed & last-verified
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5 text-[var(--primary)]" />
              Applications redirect to the original marketplace
            </span>
          </div>
        </div>
      </section>

      {/* Demo data notice */}
      {hasDemo && (
        <div className="container-wide pt-6">
          <div className="rounded-xl border border-[var(--warning)]/30 bg-[rgba(245,158,11,0.08)] px-4 py-3 text-sm text-[var(--foreground-muted)]">
            <span className="font-semibold text-[var(--warning)]">Demo listings:</span> some cards
            below are clearly-labeled sample data for layout preview and are not live vacancies.
            Real, manually-curated jobs replace these as they are added.
          </div>
        </div>
      )}

      {/* Board */}
      <section className="section-padding pt-8">
        <div className="container-wide">
          <JobsBoardClient allJobs={openJobs} initialFilters={initialFilters} />
        </div>
      </section>
    </div>
  );
}
