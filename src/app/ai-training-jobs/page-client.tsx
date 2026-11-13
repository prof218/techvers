"use client";

import React, { useEffect, useMemo, useRef, useState, useTransition } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { SlidersHorizontal, X, ChevronLeft, ChevronRight, SearchX, Search } from "lucide-react";
import { JobCard } from "@/components/jobs/job-card";
import { JobCardSkeletonGrid } from "@/components/jobs/job-card-skeleton";
import { JobFiltersPanel } from "@/components/jobs/job-filters";
import { FilterChips } from "@/components/jobs/filter-chips";
import { Button } from "@/components/ui/button";
import {
  countActiveFilters,
  defaultFilters,
  filterJobs,
  paginate,
  parseFilters,
  serializeFilters,
  sortJobs,
  sortOptions,
  type Job,
  type JobFilters,
} from "@/lib/jobs";

export default function JobsBoardClient({
  allJobs,
  initialFilters,
}: {
  allJobs: Job[];
  initialFilters: JobFilters;
}) {
  const pathname = usePathname();
  const [filters, setFilters] = useState<JobFilters>(initialFilters);
  const [searchText, setSearchText] = useState(initialFilters.q);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  const listTopRef = useRef<HTMLDivElement>(null);

  const update = (patch: Partial<JobFilters>) =>
    startTransition(() => setFilters((f) => ({ ...f, ...patch })));
  const clearAll = () => {
    startTransition(() => setFilters({ ...defaultFilters }));
    setSearchText("");
  };

  // Debounced search → filters.q (keystrokes stay urgent; the filter is deferred)
  useEffect(() => {
    const t = setTimeout(() => {
      startTransition(() =>
        setFilters((f) => (f.q === searchText ? f : { ...f, q: searchText, page: 1 }))
      );
    }, 300);
    return () => clearTimeout(t);
  }, [searchText]);

  // filters → shareable, refresh-persistent URL (idempotent on first mount)
  useEffect(() => {
    const qs = serializeFilters(filters);
    window.history.replaceState(null, "", qs ? `${pathname}?${qs}` : pathname);
  }, [filters, pathname]);

  // browser back/forward → filters
  useEffect(() => {
    const onPop = () => {
      const f = parseFilters(new URLSearchParams(window.location.search));
      setFilters(f);
      setSearchText(f.q);
    };
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  const filtered = useMemo(
    () => sortJobs(filterJobs(allJobs, filters), filters.sort),
    [allJobs, filters]
  );
  const result = useMemo(() => paginate(filtered, filters.page), [filtered, filters.page]);
  const activeCount = countActiveFilters(filters);

  const goToPage = (page: number) => {
    update({ page });
    listTopRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[18rem_1fr] gap-8">
      {/* Desktop sidebar */}
      <aside className="hidden lg:block">
        <div className="sticky top-24 rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-5 shadow-[var(--shadow-sm)] max-h-[calc(100vh-7rem)] overflow-y-auto">
          <div className="flex items-center justify-between py-4 border-b border-[var(--border)]">
            <h2 className="text-sm font-semibold text-[var(--foreground)]">Filters</h2>
            {activeCount > 0 && (
              <button onClick={clearAll} className="text-xs font-medium text-[var(--primary)] hover:underline">
                Clear all
              </button>
            )}
          </div>
          <JobFiltersPanel filters={filters} onChange={update} />
        </div>
      </aside>

      {/* Main column */}
      <div ref={listTopRef}>
        {/* Search + sort */}
        <div className="flex flex-col sm:flex-row gap-3 mb-5">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--foreground-subtle)]" />
            <input
              type="text"
              placeholder="Search by title, skill, or marketplace…"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              aria-label="Search jobs"
              className="w-full h-11 pl-11 pr-4 rounded-full bg-[var(--surface)] border border-[var(--border)] text-sm text-[var(--foreground)] placeholder:text-[var(--foreground-subtle)] focus:outline-none focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--ring)]/20"
            />
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              className="lg:hidden rounded-full gap-2"
              onClick={() => setDrawerOpen(true)}
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
              {activeCount > 0 && (
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[var(--primary)] text-[var(--primary-foreground)] text-[10px]">
                  {activeCount}
                </span>
              )}
            </Button>
            <label className="sr-only" htmlFor="job-sort">Sort jobs</label>
            <select
              id="job-sort"
              value={filters.sort}
              onChange={(e) => update({ sort: e.target.value as JobFilters["sort"], page: 1 })}
              className="h-11 rounded-full bg-[var(--surface)] border border-[var(--border)] px-4 pr-8 text-sm text-[var(--foreground)] focus:outline-none focus:border-[var(--primary)] cursor-pointer"
            >
              {sortOptions.map((s) => (
                <option key={s.value} value={s.value}>{s.label}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Count + chips */}
        <div className="flex flex-col gap-3 mb-6">
          <p className="text-sm text-[var(--foreground-muted)]">
            <span className="font-semibold text-[var(--foreground)]">{filtered.length}</span>{" "}
            {filtered.length === 1 ? "job" : "jobs"} found
            {activeCount > 0 && " · filtered"}
          </p>
          <FilterChips filters={filters} onChange={update} onClear={clearAll} />
        </div>

        {/* Results */}
        {isPending ? (
          <JobCardSkeletonGrid count={6} />
        ) : result.items.length === 0 ? (
          <div className="text-center py-20 rounded-2xl border border-dashed border-[var(--border)] bg-[var(--surface)]">
            <SearchX className="w-10 h-10 mx-auto text-[var(--foreground-subtle)] mb-4" />
            <h3 className="text-lg font-semibold text-[var(--foreground)]">No jobs match your filters</h3>
            <p className="text-sm text-[var(--foreground-muted)] mt-1.5 max-w-sm mx-auto">
              Try widening your criteria — lower the minimum pay, change the country, or clear some filters.
            </p>
            {activeCount > 0 && (
              <Button variant="outline" className="rounded-full mt-5" onClick={clearAll}>
                Clear all filters
              </Button>
            )}
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
              {result.items.map((job, i) => (
                <JobCard key={job.id} job={job} index={i} />
              ))}
            </div>

            {/* Pagination */}
            {result.totalPages > 1 && (
              <nav className="flex items-center justify-center gap-1.5 mt-10" aria-label="Pagination">
                <button
                  onClick={() => goToPage(result.page - 1)}
                  disabled={result.page <= 1}
                  className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--foreground-muted)] disabled:opacity-40 disabled:pointer-events-none hover:border-[var(--border-hover)] transition-colors"
                  aria-label="Previous page"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                {Array.from({ length: result.totalPages }).map((_, i) => {
                  const page = i + 1;
                  const active = page === result.page;
                  return (
                    <button
                      key={page}
                      onClick={() => goToPage(page)}
                      aria-current={active ? "page" : undefined}
                      className={
                        "inline-flex items-center justify-center min-w-9 h-9 px-3 rounded-full text-sm font-medium transition-colors " +
                        (active
                          ? "bg-[var(--foreground)] text-[var(--background)]"
                          : "border border-[var(--border)] bg-[var(--surface)] text-[var(--foreground-muted)] hover:border-[var(--border-hover)]")
                      }
                    >
                      {page}
                    </button>
                  );
                })}
                <button
                  onClick={() => goToPage(result.page + 1)}
                  disabled={result.page >= result.totalPages}
                  className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--foreground-muted)] disabled:opacity-40 disabled:pointer-events-none hover:border-[var(--border-hover)] transition-colors"
                  aria-label="Next page"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </nav>
            )}
          </>
        )}
      </div>

      {/* Mobile filter drawer */}
      <AnimatePresence>
        {drawerOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/40 lg:hidden"
              onClick={() => setDrawerOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="fixed right-0 top-0 bottom-0 z-50 w-[88%] max-w-sm bg-[var(--background)] border-l border-[var(--border)] overflow-y-auto lg:hidden"
              role="dialog"
              aria-label="Filters"
            >
              <div className="sticky top-0 flex items-center justify-between px-5 py-4 bg-[var(--background)] border-b border-[var(--border)]">
                <div className="flex items-center gap-2">
                  <h2 className="text-base font-semibold text-[var(--foreground)]">Filters</h2>
                  {activeCount > 0 && (
                    <span className="text-xs text-[var(--foreground-subtle)]">({activeCount})</span>
                  )}
                </div>
                <button
                  onClick={() => setDrawerOpen(false)}
                  className="inline-flex items-center justify-center w-9 h-9 rounded-full hover:bg-[var(--surface-hover)]"
                  aria-label="Close filters"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="px-5 pb-28">
                <JobFiltersPanel filters={filters} onChange={update} />
              </div>
              <div className="fixed bottom-0 right-0 w-[88%] max-w-sm flex gap-3 px-5 py-4 bg-[var(--background)] border-t border-[var(--border)]">
                <Button variant="outline" className="flex-1 rounded-full" onClick={clearAll}>
                  Clear
                </Button>
                <Button variant="gradient" className="flex-1 rounded-full" onClick={() => setDrawerOpen(false)}>
                  Show {filtered.length} jobs
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
