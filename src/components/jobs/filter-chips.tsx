"use client";

import React from "react";
import { X } from "lucide-react";
import {
  commitments,
  countries,
  experienceLevels,
  jobCategories,
  marketplaceOptions,
  postedOptions,
  workArrangements,
  type JobFilters,
} from "@/lib/jobs";

type Chip = { key: keyof JobFilters; label: string; reset: Partial<JobFilters> };

function buildChips(f: JobFilters): Chip[] {
  const chips: Chip[] = [];
  if (f.q) chips.push({ key: "q", label: `“${f.q}”`, reset: { q: "", page: 1 } });
  if (f.country !== "all")
    chips.push({
      key: "country",
      label: countries.find((c) => c.code === f.country)?.label ?? f.country,
      reset: { country: "all", page: 1 },
    });
  if (f.minPay) chips.push({ key: "minPay", label: `$${f.minPay}+/hr`, reset: { minPay: 0, page: 1 } });
  if (f.category !== "all")
    chips.push({
      key: "category",
      label: jobCategories.find((c) => c.slug === f.category)?.name ?? f.category,
      reset: { category: "all", page: 1 },
    });
  if (f.experience !== "all")
    chips.push({
      key: "experience",
      label: experienceLevels.find((e) => e.value === f.experience)?.label ?? f.experience,
      reset: { experience: "all", page: 1 },
    });
  if (f.commitment !== "all")
    chips.push({
      key: "commitment",
      label: commitments.find((c) => c.value === f.commitment)?.label ?? f.commitment,
      reset: { commitment: "all", page: 1 },
    });
  if (f.work !== "all")
    chips.push({
      key: "work",
      label: workArrangements.find((w) => w.value === f.work)?.label ?? f.work,
      reset: { work: "all", page: 1 },
    });
  if (f.marketplace !== "all")
    chips.push({
      key: "marketplace",
      label: marketplaceOptions.find((m) => m.value === f.marketplace)?.label ?? f.marketplace,
      reset: { marketplace: "all", page: 1 },
    });
  if (f.posted)
    chips.push({
      key: "posted",
      label: postedOptions.find((p) => p.value === f.posted)?.label ?? `${f.posted} days`,
      reset: { posted: 0, page: 1 },
    });
  return chips;
}

export function FilterChips({
  filters,
  onChange,
  onClear,
}: {
  filters: JobFilters;
  onChange: (patch: Partial<JobFilters>) => void;
  onClear: () => void;
}) {
  const chips = buildChips(filters);
  if (chips.length === 0) return null;

  return (
    <div className="flex flex-wrap items-center gap-2">
      {chips.map((chip) => (
        <button
          key={chip.key}
          onClick={() => onChange(chip.reset)}
          className="inline-flex items-center gap-1.5 h-8 pl-3 pr-2 rounded-full border border-[var(--border)] bg-[var(--surface)] text-xs font-medium text-[var(--foreground-muted)] hover:text-[var(--foreground)] hover:border-[var(--border-hover)] transition-colors"
        >
          {chip.label}
          <X className="w-3.5 h-3.5" />
        </button>
      ))}
      <button
        onClick={onClear}
        className="inline-flex items-center h-8 px-3 rounded-full text-xs font-semibold text-[var(--primary)] hover:bg-[var(--secondary)] transition-colors"
      >
        Clear all
      </button>
    </div>
  );
}
