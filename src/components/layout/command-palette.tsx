"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { Search, Sparkles, Map, Layers, HelpCircle, Laptop, ArrowRight } from "lucide-react";
import Fuse from "fuse.js";

// Import compiled data from Velite
import { technologies, aiTools, roadmaps, projects, interviews } from "#site/content";

interface SearchItem {
  title: string;
  slug: string;
  category: string;
  type: "technology" | "ai-tool" | "roadmap" | "project" | "interview";
  description?: string;
  url: string;
}

export function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState<SearchItem[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  
  const router = useRouter();
  const modalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Flatten and prepare search items
  const searchIndex: SearchItem[] = [
    ...technologies.map((t) => ({
      title: t.title,
      slug: t.slug,
      category: t.category,
      type: "technology" as const,
      description: t.description,
      url: `/technologies/${t.category}/${t.slug}`,
    })),
    ...aiTools.map((tool) => ({
      title: tool.title,
      slug: tool.slug,
      category: tool.category,
      type: "ai-tool" as const,
      description: tool.description,
      url: `/ai-tools/${tool.slug}`,
    })),
    ...roadmaps.map((r) => ({
      title: r.title,
      slug: r.slug,
      category: r.category,
      type: "roadmap" as const,
      description: r.description,
      url: `/roadmaps/${r.slug}`,
    })),
    ...projects.map((p) => ({
      title: p.title,
      slug: p.slug,
      category: p.category,
      type: "project" as const,
      description: p.description,
      url: `/projects/${p.slug}`,
    })),
    ...interviews.slice(0, 100).map((q) => ({
      title: q.title,
      slug: q.slug,
      category: q.category,
      type: "interview" as const,
      description: `Prepare for ${q.category} interviews. Asked at ${q.company || "various companies"}.`,
      url: `/interviews/${q.category}`,
    })),
  ];

  // Initialize Fuse.js
  const fuse = new Fuse(searchIndex, {
    keys: ["title", "description", "category", "type"],
    threshold: 0.3,
  });

  // Toggle Command Palette on Cmd+K / Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Set default initial results
  useEffect(() => {
    if (searchQuery.trim() === "") {
      // Show first 6 featured items initially
      setResults(searchIndex.slice(0, 6));
    } else {
      const fuseResults = fuse.search(searchQuery).map((r) => r.item);
      setResults(fuseResults.slice(0, 8));
    }
    setSelectedIndex(0);
  }, [searchQuery]);

  // Focus input when modal opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      setSearchQuery("");
    }
  }, [isOpen]);

  // Handle outside clicks
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      window.addEventListener("mousedown", handleOutsideClick);
    }
    return () => window.removeEventListener("mousedown", handleOutsideClick);
  }, [isOpen]);

  // Keyboard navigation inside list
  const handleListKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % Math.max(1, results.length));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + results.length) % Math.max(1, results.length));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (results[selectedIndex]) {
        handleSelect(results[selectedIndex].url);
      }
    } else if (e.key === "Escape") {
      setIsOpen(false);
    }
  };

  const handleSelect = (url: string) => {
    setIsOpen(false);
    router.push(url);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-[10vh] px-4 bg-black/60 backdrop-blur-sm transition-opacity duration-300">
      <div
        ref={modalRef}
        className="w-full max-w-xl glass-strong rounded-2xl border border-[var(--border)] shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150"
        onKeyDown={handleListKeyDown}
      >
        {/* Search Input Box */}
        <div className="flex items-center gap-3 px-4 border-b border-[var(--border)] h-14 bg-[var(--surface)]">
          <Search className="w-5 h-5 text-[var(--foreground-subtle)]" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Type a command or search term..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 h-full bg-transparent text-sm text-[var(--foreground)] placeholder:text-[var(--foreground-subtle)] focus:outline-none"
          />
          <kbd className="hidden sm:inline-flex h-5 items-center rounded border border-[var(--border)] bg-[var(--background)] px-1.5 font-mono text-[9px] text-[var(--foreground-subtle)]">
            ESC
          </kbd>
        </div>

        {/* Results List */}
        <div className="max-h-[360px] overflow-y-auto p-2 space-y-1 bg-[var(--background)]">
          {results.length > 0 ? (
            results.map((item, idx) => {
              const Icon = 
                item.type === "technology" ? Laptop :
                item.type === "ai-tool" ? Sparkles :
                item.type === "roadmap" ? Map :
                item.type === "project" ? Layers : HelpCircle;

              const labelColors = {
                technology: "bg-blue-500/10 text-blue-400 border-blue-500/20",
                "ai-tool": "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
                roadmap: "bg-purple-500/10 text-purple-400 border-purple-500/20",
                project: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
                interview: "bg-amber-500/10 text-amber-400 border-amber-500/20",
              };

              return (
                <button
                  key={`${item.type}-${item.slug}`}
                  onClick={() => handleSelect(item.url)}
                  className={`w-full flex items-start gap-3.5 p-3 rounded-xl text-left transition-colors cursor-pointer ${
                    idx === selectedIndex
                      ? "bg-[var(--primary)]/10 border border-[var(--primary)]/30"
                      : "border border-transparent hover:bg-[var(--surface-hover)]"
                  }`}
                >
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 bg-[var(--surface)] border border-[var(--border)] ${idx === selectedIndex ? "text-[var(--primary)]" : "text-[var(--foreground-muted)]"}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="flex-grow min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-sm font-semibold text-[var(--foreground)] truncate">
                        {item.title}
                      </span>
                      <span className={`px-1.5 py-0.5 rounded text-[8px] font-bold border capitalize flex-shrink-0 ${labelColors[item.type]}`}>
                        {item.type.replace("-", " ")}
                      </span>
                    </div>
                    {item.description && (
                      <p className="text-xs text-[var(--foreground-subtle)] line-clamp-1 mt-0.5">
                        {item.description}
                      </p>
                    )}
                  </div>
                </button>
              );
            })
          ) : (
            <div className="text-center py-12">
              <p className="text-sm text-[var(--foreground-muted)]">No results found for "{searchQuery}"</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
