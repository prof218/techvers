"use client";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { MapPin, Clock, BadgeCheck, Briefcase } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { BookmarkButton } from "@/components/ui/bookmark-button";
import { CategoryIcon } from "@/components/ui/category-icon";
import { MarketplaceBadge } from "./marketplace-badge";
import { formatDate } from "@/lib/utils";
import {
  compensationLabel,
  compensationTypeLabel,
  eligibilityLabel,
  getCategory,
  statusLabel,
  type Job,
} from "@/lib/jobs";

const workLabel: Record<Job["workArrangement"], string> = {
  remote: "Remote",
  hybrid: "Hybrid",
  onsite: "On-site",
};

export function JobCard({ job, index = 0 }: { job: Job; index?: number }) {
  const cat = getCategory(job.category);
  const verified = job.status === "open";

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: (index % 10) * 0.03, duration: 0.3 }}
      className="relative group h-full"
    >
      <Link
        href={`/ai-training-jobs/${job.slug}`}
        className="flex flex-col h-full p-5 rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow-sm)] card-hover"
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <MarketplaceBadge marketplace={job.marketplace} />
          <div className="flex items-center gap-1.5 pr-10">
            {job.demo && (
              <Badge variant="warning" className="text-[10px]">Demo</Badge>
            )}
            {job.featured && job.status === "open" && (
              <Badge variant="gradient" className="text-[10px]">Featured</Badge>
            )}
            {job.status !== "open" && (
              <Badge variant="destructive" className="text-[10px]">{statusLabel(job.status)}</Badge>
            )}
          </div>
        </div>

        {/* Title */}
        <h3 className="text-base font-semibold text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors line-clamp-2">
          {job.title}
        </h3>

        {/* Category + compensation */}
        <div className="mt-2 flex flex-wrap items-center gap-2">
          <span
            className="inline-flex items-center gap-1.5 text-xs font-medium"
            style={{ color: cat.color }}
          >
            <CategoryIcon slug={cat.icon} className="w-3.5 h-3.5" />
            {cat.name}
          </span>
          <span className="text-[var(--border-hover)]">•</span>
          <span className="text-sm font-semibold text-[var(--foreground)]">
            {compensationLabel(job)}
          </span>
          <Badge variant="secondary" className="text-[10px]">
            {compensationTypeLabel(job.compensationType)}
          </Badge>
        </div>

        {/* Description */}
        <p className="text-sm text-[var(--foreground-muted)] mt-3 line-clamp-2 leading-relaxed flex-1">
          {job.description}
        </p>

        {/* Meta row */}
        <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-[var(--foreground-subtle)]">
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5" />
            {workLabel[job.workArrangement]} · {eligibilityLabel(job.countryEligibility)}
          </span>
          <span className="inline-flex items-center gap-1.5 capitalize">
            <Briefcase className="w-3.5 h-3.5" />
            {job.experienceLevel}
          </span>
        </div>

        {/* Footer */}
        <div className="mt-4 pt-3 border-t border-[var(--border)] flex items-center justify-between text-xs">
          <span className="inline-flex items-center gap-1.5 text-[var(--foreground-subtle)]">
            <Clock className="w-3.5 h-3.5" />
            {formatDate(job.postedAt)}
          </span>
          {verified && (
            <span className="inline-flex items-center gap-1 text-[var(--success)] font-medium">
              <BadgeCheck className="w-3.5 h-3.5" />
              Verified {formatDate(job.lastVerifiedAt)}
            </span>
          )}
        </div>
      </Link>

      {/* Bookmark (outside Link to avoid nested interactive) */}
      <div className="absolute top-4 right-4">
        <BookmarkButton
          item={{
            type: "job",
            slug: job.slug,
            title: job.title,
            url: `/ai-training-jobs/${job.slug}`,
            category: job.category,
          }}
        />
      </div>
    </motion.div>
  );
}
