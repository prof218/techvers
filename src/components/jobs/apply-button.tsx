import React from "react";
import { ExternalLink, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { resolveApply, marketplaces, type Job } from "@/lib/jobs";

/**
 * Apply button that redirects to the ORIGINAL marketplace.
 * Uses a referral link when configured (rel="sponsored") and shows a
 * transparent disclosure. Disabled for closed/expired listings.
 */
export function ApplyButton({ job, className }: { job: Job; className?: string }) {
  const isOpen = job.status === "open";
  const { href, isReferral } = resolveApply(job);
  const marketName = marketplaces[job.marketplace].name;

  if (!isOpen) {
    return (
      <div className={className}>
        <Button size="lg" variant="secondary" disabled className="w-full rounded-full">
          No longer accepting applications
        </Button>
        <p className="mt-2 text-xs text-[var(--foreground-subtle)] text-center">
          This listing is marked {job.status}. Browse open roles instead.
        </p>
      </div>
    );
  }

  return (
    <div className={className}>
      <Button asChild size="lg" variant="gradient" className="w-full gap-2 rounded-full">
        <a
          href={href}
          target="_blank"
          rel={isReferral ? "sponsored nofollow noopener noreferrer" : "noopener noreferrer"}
        >
          Apply on {marketName}
          <ExternalLink className="w-4 h-4" />
        </a>
      </Button>
      <p className="mt-2 flex items-start gap-1.5 text-xs text-[var(--foreground-subtle)]">
        <Info className="w-3.5 h-3.5 mt-px shrink-0" />
        <span>
          You&apos;ll be redirected to {marketName} to apply.
          {isReferral && " This is a referral link — Techoverxe may earn a commission at no cost to you."}
        </span>
      </p>
    </div>
  );
}
