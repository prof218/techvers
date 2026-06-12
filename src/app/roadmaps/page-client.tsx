"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { ArrowRight, Search } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface Roadmap {
  title: string;
  slug: string;
  category: string;
  level: "beginner" | "intermediate" | "advanced";
  description: string;
}

interface PageClientProps {
  allRoadmaps: Roadmap[];
}

const levels = ["all", "beginner", "intermediate", "advanced"] as const;
const levelColors = { beginner: "#22c55e", intermediate: "#f59e0b", advanced: "#ef4444" };

export default function RoadmapsHubClient({ allRoadmaps }: PageClientProps) {
  const [activeLevel, setActiveLevel] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = allRoadmaps.filter((r) => {
    const matchLevel = activeLevel === "all" || r.level === activeLevel;
    const matchSearch = r.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchLevel && matchSearch;
  });

  return (
    <div>
      {/* Search & Level Filters */}
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between p-4 rounded-xl border border-[var(--border)] bg-[var(--surface)] mb-8">
        {/* Search */}
        <div className="relative w-full sm:max-w-xs">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--foreground-subtle)]" />
          <input
            type="text"
            placeholder="Search roadmaps..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full h-10 pl-10 pr-4 rounded-lg bg-[var(--background)] border border-[var(--border)] text-sm text-[var(--foreground)] placeholder:text-[var(--foreground-subtle)] focus:outline-none focus:ring-2 focus:ring-[var(--ring)]"
          />
        </div>

        {/* Level Filters */}
        <div className="flex flex-wrap gap-2 self-start sm:self-auto">
          {levels.map((level) => (
            <button
              key={level}
              onClick={() => setActiveLevel(level)}
              className={`px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all cursor-pointer capitalize ${
                activeLevel === level
                  ? "bg-[var(--primary)] text-white"
                  : "bg-[var(--background)] text-[var(--foreground-muted)] hover:bg-[var(--surface-hover)] border border-[var(--border)]"
              }`}
            >
              {level === "all" ? "All Levels" : level}
            </button>
          ))}
        </div>
      </div>

      {/* Roadmaps Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((roadmap, index) => (
          <motion.div
            key={roadmap.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.04, duration: 0.4 }}
          >
            <Link
              href={`/roadmaps/${roadmap.slug}`}
              className="group block p-6 rounded-2xl border border-[var(--border)] bg-[var(--surface)] hover:bg-[var(--surface-hover)] transition-all duration-300 card-hover h-full"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-3">
                <Badge variant="secondary" className="text-xs">{roadmap.category}</Badge>
                <Badge
                  className="text-[10px] capitalize"
                  style={{
                    backgroundColor: `${levelColors[roadmap.level as keyof typeof levelColors]}15`,
                    color: levelColors[roadmap.level as keyof typeof levelColors],
                    borderColor: "transparent",
                  }}
                >
                  {roadmap.level}
                </Badge>
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors">
                {roadmap.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-[var(--foreground-muted)] mt-2 line-clamp-2 leading-relaxed">
                {roadmap.description}
              </p>

              {/* Arrow */}
              <div className="mt-6 flex items-center gap-1 text-sm text-[var(--primary)] font-medium">
                Start roadmap
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16">
          <p className="text-[var(--foreground-muted)]">No roadmaps found matching your filters.</p>
        </div>
      )}
    </div>
  );
}
