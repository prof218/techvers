import React from "react";
import Link from "next/link";
import { ArrowRight, ExternalLink, ShieldCheck } from "lucide-react";
import { getOpenJobs } from "@/lib/jobs-loader";
import {
  compensationLabel,
  compensationTypeLabel,
  eligibilityLabel,
  getCategory,
} from "@/lib/jobs";
import { CategoryIcon } from "@/components/ui/category-icon";
import { MarketplaceBadge } from "@/components/jobs/marketplace-badge";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/ui/reveal";

export async function AiJobsSection() {
  const openJobs = await getOpenJobs();
  const featured = [...openJobs]
    .sort((a, b) => Number(!!b.featured) - Number(!!a.featured))
    .slice(0, 4);

  if (featured.length === 0) return null;

  return (
    <section className="relative section-padding">
      <div className="container-wide">
        <Reveal className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12 gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--primary)] mb-3">
              AI Training Jobs
            </p>
            <h2 className="font-display text-4xl sm:text-5xl text-[var(--foreground)] text-balance">
              Get paid to train
              <br className="hidden sm:block" /> and evaluate AI
            </h2>
            <p className="mt-4 text-[var(--foreground-muted)] max-w-xl leading-relaxed">
              Curated model evaluation, coding evaluation, data annotation, and expert freelance roles
              from marketplaces like Mercor, micro1, and Handshake.
            </p>
          </div>
          <Link
            href="/ai-training-jobs"
            className="flex items-center gap-2 text-sm font-medium text-[var(--foreground)] hover:text-[var(--primary)] transition-colors group"
          >
            Browse all jobs
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
          {featured.map((job, index) => {
            const cat = getCategory(job.category);
            return (
              <Reveal key={job.id} delay={(index % 4) * 0.06}>
                <Link
                  href={`/ai-training-jobs/${job.slug}`}
                  className="flex flex-col h-full p-5 rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow-sm)] card-hover group"
                >
                  <div className="flex items-center justify-between mb-3">
                    <MarketplaceBadge marketplace={job.marketplace} size="sm" />
                    {job.demo && <Badge variant="warning" className="text-[10px]">Demo</Badge>}
                  </div>
                  <h3 className="text-[0.975rem] font-semibold text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors line-clamp-2">
                    {job.title}
                  </h3>
                  <div className="mt-2 flex items-center gap-1.5 text-xs font-medium" style={{ color: cat.color }}>
                    <CategoryIcon slug={cat.icon} className="w-3.5 h-3.5" />
                    {cat.name}
                  </div>
                  <div className="mt-auto pt-4 flex items-center justify-between text-sm">
                    <span className="font-semibold text-[var(--foreground)]">{compensationLabel(job)}</span>
                    <span className="text-[10px] text-[var(--foreground-subtle)]">
                      {compensationTypeLabel(job.compensationType)}
                    </span>
                  </div>
                  <div className="mt-2 flex items-center gap-1.5 text-xs text-[var(--foreground-subtle)]">
                    <ShieldCheck className="w-3.5 h-3.5 text-[var(--success)]" />
                    {eligibilityLabel(job.countryEligibility)}
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-8 flex items-center justify-center gap-2 text-xs text-[var(--foreground-subtle)]">
          <ExternalLink className="w-3.5 h-3.5" />
          Applications redirect to the original marketplace — Techoverxe never collects your credentials.
        </Reveal>
      </div>
    </section>
  );
}
