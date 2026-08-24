"use client";

import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { Search, Star, LayoutGrid } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { aiToolCategories } from "@/lib/constants";
import { CategoryIcon } from "@/components/ui/category-icon";
import { BookmarkButton } from "@/components/ui/bookmark-button";

interface AITool {
  title: string;
  slug: string;
  category: string;
  description: string;
  pricing: "Free" | "Freemium" | "Paid";
  rating: number;
  features: string[];
  website?: string;
}

interface PageClientProps {
  allTools: AITool[];
}

export default function AIToolsHubClient({ allTools }: PageClientProps) {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const cat = new URLSearchParams(window.location.search).get("category");
    if (cat && aiToolCategories.some((c) => c.slug === cat)) setActiveCategory(cat);
  }, []);

  const filteredTools = allTools.filter((tool) => {
    const matchesCategory = activeCategory === "all" || tool.category === activeCategory;
    const q = searchQuery.toLowerCase();
    const matchesSearch =
      tool.title.toLowerCase().includes(q) ||
      tool.description.toLowerCase().includes(q) ||
      tool.features.some((f) => f.toLowerCase().includes(q));
    return matchesCategory && matchesSearch;
  });

  const tabBase =
    "inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer border";
  const tabOn = "bg-[var(--foreground)] text-[var(--background)] border-[var(--foreground)]";
  const tabOff =
    "bg-[var(--surface)] text-[var(--foreground-muted)] border-[var(--border)] hover:text-[var(--foreground)] hover:border-[var(--border-hover)]";

  return (
    <div>
      {/* Search & filters */}
      <div className="mb-8 space-y-5">
        <div className="relative max-w-md">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--foreground-subtle)]" />
          <input
            type="text"
            placeholder="Search AI tools or features…"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full h-11 pl-11 pr-4 rounded-full bg-[var(--surface)] border border-[var(--border)] text-sm text-[var(--foreground)] placeholder:text-[var(--foreground-subtle)] focus:outline-none focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--ring)]/20"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          <button onClick={() => setActiveCategory("all")} className={`${tabBase} ${activeCategory === "all" ? tabOn : tabOff}`}>
            <LayoutGrid className="w-4 h-4" />
            All Tools
          </button>
          {aiToolCategories.map((cat) => (
            <button
              key={cat.slug}
              onClick={() => setActiveCategory(cat.slug)}
              className={`${tabBase} ${activeCategory === cat.slug ? tabOn : tabOff}`}
            >
              <CategoryIcon slug={cat.slug} className="w-4 h-4" />
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filteredTools.map((tool, index) => (
          <motion.div
            key={tool.slug}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: (index % 8) * 0.04, duration: 0.35 }}
            className="relative group h-full"
          >
            <Link
              href={`/ai-tools/${tool.slug}`}
              className="block h-full p-5 rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow-sm)] card-hover"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="w-11 h-11 rounded-xl bg-[var(--secondary)] flex items-center justify-center text-base font-bold text-[var(--primary)]">
                  {tool.title[0]}
                </div>
                <div className="flex items-center gap-1 text-xs text-[var(--warning)] font-semibold pr-10">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  {tool.rating.toFixed(1)}
                </div>
              </div>
              <h3 className="text-base font-semibold text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors">
                {tool.title}
              </h3>
              <div className="flex items-center gap-2 mt-1.5">
                <Badge variant={tool.pricing === "Free" ? "success" : tool.pricing === "Freemium" ? "info" : "secondary"} className="text-[10px]">
                  {tool.pricing}
                </Badge>
                <span className="text-xs text-[var(--foreground-subtle)] capitalize">{tool.category}</span>
              </div>
              <p className="text-sm text-[var(--foreground-muted)] mt-3 line-clamp-2 leading-relaxed">
                {tool.description}
              </p>
            </Link>
            <div className="absolute top-4 right-4">
              <BookmarkButton
                item={{ type: "ai-tool", slug: tool.slug, title: tool.title, url: `/ai-tools/${tool.slug}`, category: tool.category }}
              />
            </div>
          </motion.div>
        ))}
      </div>

      {filteredTools.length === 0 && (
        <div className="text-center py-16">
          <p className="text-[var(--foreground-muted)]">No tools found matching your criteria.</p>
        </div>
      )}
    </div>
  );
}
