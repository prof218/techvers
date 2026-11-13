"use client";

import React from "react";
import {
  commitments,
  countries,
  experienceLevels,
  jobCategories,
  marketplaceOptions,
  minPayOptions,
  postedOptions,
  workArrangements,
  type JobFilters,
} from "@/lib/jobs";
import { cn } from "@/lib/utils";

/** One selectable value (single-select per group; click active to clear). */
function OptionPill({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "px-3 py-1.5 rounded-full text-xs font-medium border transition-colors cursor-pointer",
        active
          ? "bg-[var(--foreground)] text-[var(--background)] border-[var(--foreground)]"
          : "bg-[var(--surface)] text-[var(--foreground-muted)] border-[var(--border)] hover:text-[var(--foreground)] hover:border-[var(--border-hover)]"
      )}
    >
      {children}
    </button>
  );
}

function Group({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="py-4 border-b border-[var(--border)] last:border-0">
      <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--foreground-subtle)] mb-3">
        {title}
      </h3>
      <div className="flex flex-wrap gap-2">{children}</div>
    </div>
  );
}

export function JobFiltersPanel({
  filters,
  onChange,
}: {
  filters: JobFilters;
  onChange: (patch: Partial<JobFilters>) => void;
}) {
  const toggle = <K extends keyof JobFilters>(key: K, value: JobFilters[K], cleared: JobFilters[K]) =>
    onChange({ [key]: filters[key] === value ? cleared : value, page: 1 } as Partial<JobFilters>);

  return (
    <div>
      <Group title="Country eligibility">
        {countries.map((c) => (
          <OptionPill
            key={c.code}
            active={filters.country === c.code}
            onClick={() => toggle("country", c.code, "all")}
          >
            {c.label}
          </OptionPill>
        ))}
      </Group>

      <Group title="Minimum hourly pay">
        {minPayOptions.map((p) => (
          <OptionPill key={p} active={filters.minPay === p} onClick={() => toggle("minPay", p, 0)}>
            ${p}+
          </OptionPill>
        ))}
      </Group>

      <Group title="Category">
        {jobCategories.map((c) => (
          <OptionPill
            key={c.slug}
            active={filters.category === c.slug}
            onClick={() => toggle("category", c.slug, "all")}
          >
            {c.name}
          </OptionPill>
        ))}
      </Group>

      <Group title="Experience">
        {experienceLevels.map((e) => (
          <OptionPill
            key={e.value}
            active={filters.experience === e.value}
            onClick={() => toggle("experience", e.value, "all")}
          >
            {e.label}
          </OptionPill>
        ))}
      </Group>

      <Group title="Commitment">
        {commitments.map((c) => (
          <OptionPill
            key={c.value}
            active={filters.commitment === c.value}
            onClick={() => toggle("commitment", c.value, "all")}
          >
            {c.label}
          </OptionPill>
        ))}
      </Group>

      <Group title="Work arrangement">
        {workArrangements.map((w) => (
          <OptionPill
            key={w.value}
            active={filters.work === w.value}
            onClick={() => toggle("work", w.value, "all")}
          >
            {w.label}
          </OptionPill>
        ))}
      </Group>

      <Group title="Marketplace">
        {marketplaceOptions.map((m) => (
          <OptionPill
            key={m.value}
            active={filters.marketplace === m.value}
            onClick={() => toggle("marketplace", m.value, "all")}
          >
            {m.label}
          </OptionPill>
        ))}
      </Group>

      <Group title="Date posted">
        {postedOptions.map((p) => (
          <OptionPill
            key={p.value}
            active={filters.posted === p.value}
            onClick={() => toggle("posted", p.value, 0)}
          >
            {p.label}
          </OptionPill>
        ))}
      </Group>
    </div>
  );
}
