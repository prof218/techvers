import React from "react";

/** Loading placeholder matching JobCard dimensions. */
export function JobCardSkeleton() {
  return (
    <div className="h-full p-5 rounded-2xl border border-[var(--border)] bg-[var(--surface)] animate-pulse">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-[var(--surface-active)]" />
          <div className="h-3 w-20 rounded bg-[var(--surface-active)]" />
        </div>
        <div className="h-4 w-12 rounded-full bg-[var(--surface-active)]" />
      </div>
      <div className="h-4 w-4/5 rounded bg-[var(--surface-active)] mb-2" />
      <div className="h-4 w-3/5 rounded bg-[var(--surface-active)] mb-4" />
      <div className="h-3 w-1/2 rounded bg-[var(--surface-active)] mb-3" />
      <div className="h-3 w-full rounded bg-[var(--surface-active)] mb-2" />
      <div className="h-3 w-5/6 rounded bg-[var(--surface-active)] mb-5" />
      <div className="flex gap-3">
        <div className="h-3 w-24 rounded bg-[var(--surface-active)]" />
        <div className="h-3 w-16 rounded bg-[var(--surface-active)]" />
      </div>
    </div>
  );
}

export function JobCardSkeletonGrid({ count = 6 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
      {Array.from({ length: count }).map((_, i) => (
        <JobCardSkeleton key={i} />
      ))}
    </div>
  );
}
