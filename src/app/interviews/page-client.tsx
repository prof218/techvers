"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, ChevronUp, Filter, Search } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { MdxContent } from "@/components/mdx-content";
import { interviewCategories } from "@/lib/constants";

interface InterviewQuestion {
  title: string;
  slug: string;
  category: string;
  difficulty: "easy" | "medium" | "hard";
  company?: string;
  tags: string[];
  content: string;
}

interface PageClientProps {
  allQuestions: InterviewQuestion[];
}

const difficulties = ["all", "easy", "medium", "hard"] as const;
const difficultyColors = { easy: "#22c55e", medium: "#f59e0b", hard: "#ef4444" };

export default function InterviewsHubClient({ allQuestions }: PageClientProps) {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [activeDifficulty, setActiveDifficulty] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedSlug, setExpandedSlug] = useState<string | null>(null);

  const filtered = allQuestions.filter((q) => {
    const matchCat = activeCategory === "all" || q.category === activeCategory;
    const matchDiff = activeDifficulty === "all" || q.difficulty === activeDifficulty;
    const matchSearch = q.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (q.company && q.company.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchCat && matchDiff && matchSearch;
  });

  return (
    <div className="space-y-6">
      {/* Search & Filter Controls */}
      <div className="space-y-4 p-5 rounded-2xl border border-[var(--border)] bg-[var(--surface)]">
        {/* Search */}
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--foreground-subtle)]" />
          <input
            type="text"
            placeholder="Search questions, companies, or tags..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full h-10 pl-10 pr-4 rounded-lg bg-[var(--background)] border border-[var(--border)] text-sm text-[var(--foreground)] placeholder:text-[var(--foreground-subtle)] focus:outline-none focus:ring-2 focus:ring-[var(--ring)]"
          />
        </div>

        {/* Categories Selector */}
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all cursor-pointer ${
              activeCategory === "all"
                ? "bg-[var(--primary)] text-white"
                : "bg-[var(--background)] text-[var(--foreground-muted)] hover:bg-[var(--surface-hover)] border border-[var(--border)]"
            }`}
          >
            All Categories
          </button>
          {interviewCategories.map((cat) => (
            <button
              key={cat.slug}
              onClick={() => setActiveCategory(cat.slug)}
              className={`px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all cursor-pointer ${
                activeCategory === cat.slug
                  ? "bg-[var(--primary)] text-white"
                  : "bg-[var(--background)] text-[var(--foreground-muted)] hover:bg-[var(--surface-hover)] border border-[var(--border)]"
              }`}
            >
              {cat.icon} {cat.name}
            </button>
          ))}
        </div>

        {/* Difficulty Selector */}
        <div className="flex items-center gap-2 pt-2 border-t border-[var(--border)]">
          <Filter className="w-4 h-4 text-[var(--foreground-subtle)]" />
          <span className="text-xs text-[var(--foreground-subtle)] font-medium mr-1">Difficulty:</span>
          {difficulties.map((d) => (
            <button
              key={d}
              onClick={() => setActiveDifficulty(d)}
              className={`px-3 py-1 rounded-md text-xs font-semibold transition-all cursor-pointer capitalize ${
                activeDifficulty === d
                  ? "bg-[var(--primary)] text-white"
                  : "bg-[var(--background)] text-[var(--foreground-muted)] hover:bg-[var(--surface-hover)] border border-[var(--border)]"
              }`}
            >
              {d === "all" ? "All" : d}
            </button>
          ))}
        </div>
      </div>

      {/* Questions list */}
      <div className="space-y-3">
        {filtered.map((q, index) => (
          <motion.div
            key={q.slug}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.03, duration: 0.3 }}
            className="rounded-xl border border-[var(--border)] bg-[var(--surface)] overflow-hidden transition-all duration-300 hover:border-[var(--border-hover)]"
          >
            {/* Header Accordion Trigger */}
            <button
              onClick={() => setExpandedSlug(expandedSlug === q.slug ? null : q.slug)}
              className="w-full flex items-start gap-3 p-5 text-left cursor-pointer group"
            >
              <span className="text-lg font-bold text-[var(--foreground-subtle)] mt-0.5 flex-shrink-0 w-6">
                {index + 1}.
              </span>
              <div className="flex-1 min-w-0">
                <h3 className="text-base font-semibold text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors leading-relaxed">
                  {q.title}
                </h3>
                <div className="flex flex-wrap items-center gap-2 mt-2.5">
                  <Badge
                    className="text-[10px] capitalize"
                    style={{
                      backgroundColor: `${difficultyColors[q.difficulty]}15`,
                      color: difficultyColors[q.difficulty],
                      borderColor: "transparent",
                    }}
                  >
                    {q.difficulty}
                  </Badge>
                  <Badge variant="secondary" className="text-[10px] capitalize">
                    {q.category}
                  </Badge>
                  {q.company && (
                    <span className="text-[10px] text-[var(--foreground-subtle)] font-medium">
                      Asked at {q.company}
                    </span>
                  )}
                  {q.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-1.5 py-0.5 rounded bg-[var(--background)] text-[9px] font-semibold text-[var(--foreground-subtle)] border border-[var(--border)]"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex-shrink-0 mt-1 text-[var(--foreground-subtle)]">
                {expandedSlug === q.slug ? (
                  <ChevronUp className="w-5 h-5" />
                ) : (
                  <ChevronDown className="w-5 h-5" />
                )}
              </div>
            </button>

            {/* Answer body */}
            <AnimatePresence>
              {expandedSlug === q.slug && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <div className="px-5 pb-5 pl-14">
                    <div className="p-5 rounded-lg bg-[var(--background)] border border-[var(--border)] prose prose-invert max-w-none">
                      <MdxContent code={q.content} />
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16">
          <p className="text-[var(--foreground-muted)]">No questions found matching your filters.</p>
        </div>
      )}
    </div>
  );
}
