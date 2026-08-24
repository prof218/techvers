"use client";

import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, ChevronUp, Search, CircleCheck, Circle, Trophy } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { MdxContent } from "@/components/mdx-content";
import { useKnown } from "@/lib/bookmarks";

export interface InterviewQuestion {
  title: string;
  slug: string;
  category: string;
  difficulty: "easy" | "medium" | "hard";
  company?: string;
  tags: string[];
  content: string;
}

const difficulties = ["all", "easy", "medium", "hard"] as const;
const views = [
  { key: "all", label: "All" },
  { key: "review", label: "To review" },
  { key: "known", label: "Known" },
] as const;
const difficultyColors = { easy: "#0f9d63", medium: "#c2790b", hard: "#d6412f" };

const pill = "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-colors cursor-pointer border capitalize";
const on = "bg-[var(--foreground)] text-[var(--background)] border-[var(--foreground)]";
const off = "bg-[var(--surface)] text-[var(--foreground-muted)] border-[var(--border)] hover:text-[var(--foreground)] hover:border-[var(--border-hover)]";

export function InterviewAccordion({ questions }: { questions: InterviewQuestion[] }) {
  const [difficulty, setDifficulty] = useState<string>("all");
  const [view, setView] = useState<string>("all");
  const [search, setSearch] = useState("");
  const [expanded, setExpanded] = useState<string | null>(null);
  const { isKnown, toggle, ids, loaded } = useKnown();

  const knownCount = useMemo(
    () => (loaded ? questions.filter((q) => ids.includes(q.slug)).length : 0),
    [questions, ids, loaded]
  );
  const pct = questions.length ? Math.round((knownCount / questions.length) * 100) : 0;

  const filtered = questions.filter((q) => {
    const matchDiff = difficulty === "all" || q.difficulty === difficulty;
    const q_ = search.toLowerCase();
    const matchSearch =
      q.title.toLowerCase().includes(q_) || q.tags.some((t) => t.toLowerCase().includes(q_));
    const known = loaded && isKnown(q.slug);
    const matchView = view === "all" || (view === "known" ? known : !known);
    return matchDiff && matchSearch && matchView;
  });

  return (
    <div className="space-y-6">
      {/* Progress */}
      <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-[var(--shadow-sm)]">
        <div className="flex items-center justify-between mb-3">
          <span className="flex items-center gap-2 text-sm font-semibold text-[var(--foreground)]">
            <Trophy className="w-4 h-4 text-[var(--primary)]" />
            Practice progress
          </span>
          <span className="text-sm font-semibold text-[var(--foreground)]">
            {knownCount}/{questions.length} known · {pct}%
          </span>
        </div>
        <div className="h-2 w-full rounded-full bg-[var(--secondary)] overflow-hidden">
          <div className="h-full rounded-full bg-[var(--primary)]" style={{ width: `${pct}%`, transition: "width 300ms ease" }} />
        </div>
      </div>

      {/* Controls */}
      <div className="flex flex-col lg:flex-row lg:items-center gap-4 justify-between">
        <div className="relative w-full lg:max-w-xs">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--foreground-subtle)]" />
          <input
            type="text"
            placeholder="Search questions or tags…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full h-11 pl-11 pr-4 rounded-full bg-[var(--surface)] border border-[var(--border)] text-sm text-[var(--foreground)] placeholder:text-[var(--foreground-subtle)] focus:outline-none focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--ring)]/20"
          />
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {views.map((v) => (
            <button key={v.key} onClick={() => setView(v.key)} className={`${pill} ${view === v.key ? on : off}`}>
              {v.label}
            </button>
          ))}
          <span className="w-px h-5 bg-[var(--border)] mx-1 hidden sm:block" />
          {difficulties.map((d) => (
            <button key={d} onClick={() => setDifficulty(d)} className={`${pill} ${difficulty === d ? on : off}`}>
              {d === "all" ? "All levels" : d}
            </button>
          ))}
        </div>
      </div>

      {/* List */}
      <div className="space-y-3">
        {filtered.map((q, index) => {
          const known = loaded && isKnown(q.slug);
          const open = expanded === q.slug;
          return (
            <motion.div
              key={q.slug}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: (index % 10) * 0.03, duration: 0.3 }}
              className={`rounded-2xl border bg-[var(--surface)] overflow-hidden transition-colors ${
                known ? "border-[var(--primary)]/30" : "border-[var(--border)] hover:border-[var(--border-hover)]"
              }`}
            >
              <div className="flex items-start gap-3 p-5">
                <button
                  onClick={() => setExpanded(open ? null : q.slug)}
                  className="flex-1 flex items-start gap-3 text-left cursor-pointer group min-w-0"
                >
                  <span className="text-sm font-bold text-[var(--foreground-subtle)] mt-0.5 w-6 flex-shrink-0">
                    {index + 1}.
                  </span>
                  <span className="min-w-0">
                    <span className="block text-base font-semibold text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors leading-relaxed">
                      {q.title}
                    </span>
                    <span className="flex flex-wrap items-center gap-2 mt-2.5">
                      <Badge className="text-[10px] capitalize" style={{ backgroundColor: `${difficultyColors[q.difficulty]}18`, color: difficultyColors[q.difficulty], borderColor: "transparent" }}>
                        {q.difficulty}
                      </Badge>
                      {q.company && <span className="text-[10px] text-[var(--foreground-subtle)] font-medium">Asked at {q.company}</span>}
                    </span>
                  </span>
                </button>
                <div className="flex items-center gap-1.5 flex-shrink-0">
                  <button
                    onClick={() => toggle(q.slug)}
                    aria-pressed={known}
                    className={`inline-flex items-center gap-1 h-8 px-2.5 rounded-full border text-xs font-medium transition-colors ${
                      known
                        ? "border-[var(--primary)] bg-[var(--primary)]/10 text-[var(--primary)]"
                        : "border-[var(--border)] text-[var(--foreground-subtle)] hover:text-[var(--foreground)]"
                    }`}
                  >
                    {known ? <CircleCheck className="w-3.5 h-3.5" /> : <Circle className="w-3.5 h-3.5" />}
                    <span className="hidden sm:inline">{known ? "Known" : "Mark known"}</span>
                  </button>
                  <button onClick={() => setExpanded(open ? null : q.slug)} className="w-8 h-8 flex items-center justify-center text-[var(--foreground-subtle)] hover:text-[var(--foreground)]" aria-label={open ? "Collapse" : "Expand"}>
                    {open ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              <AnimatePresence>
                {open && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }} className="overflow-hidden">
                    <div className="px-5 pb-5 pl-14">
                      <div className="p-5 rounded-xl bg-[var(--background)] border border-[var(--border)] prose max-w-none">
                        <MdxContent code={q.content} />
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16">
          <p className="text-[var(--foreground-muted)]">No questions match your filters.</p>
        </div>
      )}
    </div>
  );
}
