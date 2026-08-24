"use client";

import React from "react";
import Link from "next/link";
import { Bookmark, Trash2, ArrowUpRight, Compass } from "lucide-react";
import { useBookmarks } from "@/lib/bookmarks";
import { Button } from "@/components/ui/button";

const typeLabels: Record<string, string> = {
  technology: "Technology",
  "ai-tool": "AI Tool",
  roadmap: "Roadmap",
  project: "Project",
  interview: "Interview",
  career: "Career",
};

export function SavedClient() {
  const { items, remove, loaded } = useBookmarks();

  if (!loaded) {
    return <div className="py-20 text-center text-[var(--foreground-subtle)]">Loading your saved items…</div>;
  }

  if (items.length === 0) {
    return (
      <div className="py-16 text-center">
        <div className="w-14 h-14 rounded-2xl bg-[var(--secondary)] flex items-center justify-center mx-auto mb-5 text-[var(--foreground-subtle)]">
          <Bookmark className="w-6 h-6" />
        </div>
        <h2 className="text-xl font-semibold text-[var(--foreground)]">Nothing saved yet</h2>
        <p className="mt-2 text-[var(--foreground-muted)] max-w-md mx-auto">
          Tap the bookmark icon on any guide, tool, or roadmap to keep it here for later.
          It&apos;s stored on this device — no account needed.
        </p>
        <Button variant="ink" asChild className="mt-6 rounded-full">
          <Link href="/technologies">
            <Compass className="w-4 h-4" />
            Start exploring
          </Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {items.map((item) => (
        <div
          key={item.url}
          className="group relative rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-[var(--shadow-sm)] card-hover"
        >
          <Link href={item.url} className="block">
            <span className="text-xs font-semibold uppercase tracking-wider text-[var(--primary)]">
              {typeLabels[item.type] || item.type}
            </span>
            <h3 className="mt-2 text-base font-semibold text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors line-clamp-2">
              {item.title}
            </h3>
            {item.category && (
              <p className="mt-1 text-sm text-[var(--foreground-subtle)] capitalize">{item.category}</p>
            )}
            <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[var(--primary)]">
              Open <ArrowUpRight className="w-3.5 h-3.5" />
            </span>
          </Link>
          <button
            onClick={() => remove(item.url)}
            aria-label="Remove"
            className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center text-[var(--foreground-subtle)] hover:text-[var(--error)] hover:bg-[var(--error)]/10 transition-colors"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      ))}
    </div>
  );
}
