"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { Search, Star, Sparkles, Filter } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { aiToolCategories } from "@/lib/constants";

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

  const filteredTools = allTools.filter((tool) => {
    const matchesCategory = activeCategory === "all" || tool.category === activeCategory;
    const matchesSearch = tool.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.features.some(f => f.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      {/* Search & Filters */}
      <div className="mb-8 space-y-4 p-5 rounded-2xl border border-[var(--border)] bg-[var(--surface)]">
        {/* Search */}
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--foreground-subtle)]" />
          <input
            type="text"
            placeholder="Search AI tools or features..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full h-10 pl-10 pr-4 rounded-lg bg-[var(--background)] border border-[var(--border)] text-sm text-[var(--foreground)] placeholder:text-[var(--foreground-subtle)] focus:outline-none focus:ring-2 focus:ring-[var(--ring)]"
          />
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all cursor-pointer ${
              activeCategory === "all"
                ? "bg-[var(--primary)] text-white"
                : "bg-[var(--background)] text-[var(--foreground-muted)] hover:bg-[var(--surface-hover)] border border-[var(--border)]"
            }`}
          >
            All Tools
          </button>
          {aiToolCategories.map((cat) => (
            <button
              key={cat.slug}
              onClick={() => setActiveCategory(cat.slug)}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all cursor-pointer ${
                activeCategory === cat.slug
                  ? "bg-[var(--primary)] text-white"
                  : "bg-[var(--background)] text-[var(--foreground-muted)] hover:bg-[var(--surface-hover)] border border-[var(--border)]"
              }`}
            >
              {cat.icon} {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Tools Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filteredTools.map((tool, index) => (
          <motion.div
            key={tool.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.04, duration: 0.3 }}
          >
            <Link
              href={`/ai-tools/${tool.slug}`}
              className="group block p-5 rounded-2xl border border-[var(--border)] bg-[var(--surface)] hover:bg-[var(--surface-hover)] transition-all duration-300 card-hover h-full"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--primary)]/20 to-[var(--accent)]/20 flex items-center justify-center text-lg font-bold text-[var(--primary)]">
                  {tool.title[0]}
                </div>
                <div className="flex items-center gap-1 text-xs text-[var(--warning)] font-semibold">
                  <Star className="w-3 h-3 fill-current" />
                  {tool.rating.toFixed(1)}
                </div>
              </div>

              {/* Name & Pricing */}
              <h3 className="text-base font-semibold text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors">
                {tool.title}
              </h3>
              <div className="flex items-center gap-2 mt-1">
                <Badge variant={tool.pricing === "Free" ? "success" : tool.pricing === "Freemium" ? "info" : "secondary"} className="text-[10px]">
                  {tool.pricing}
                </Badge>
                <span className="text-xs text-[var(--foreground-subtle)] capitalize">{tool.category}</span>
              </div>

              {/* Description */}
              <p className="text-sm text-[var(--foreground-muted)] mt-3 line-clamp-2 leading-relaxed">
                {tool.description}
              </p>

              {/* Features */}
              {tool.features && tool.features.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {tool.features.slice(0, 3).map((feat) => (
                    <span key={feat} className="px-2 py-0.5 rounded-md bg-[var(--background)] text-[10px] text-[var(--foreground-subtle)] border border-[var(--border)] font-medium">
                      {feat}
                    </span>
                  ))}
                  {tool.features.length > 3 && (
                    <span className="text-[9px] text-[var(--foreground-subtle)] self-center ml-1">
                      +{tool.features.length - 3} more
                    </span>
                  )}
                </div>
              )}
            </Link>
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
