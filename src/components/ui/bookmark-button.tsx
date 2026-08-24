"use client";

import React from "react";
import { Bookmark, BookmarkCheck } from "lucide-react";
import { useBookmarks, type SavedItem } from "@/lib/bookmarks";
import { cn } from "@/lib/utils";

/**
 * Toggle a bookmark for any content item. Safe to place inside a Link card —
 * it stops the click from navigating. Persists to localStorage (no login).
 */
export function BookmarkButton({
  item,
  variant = "icon",
  className,
}: {
  item: SavedItem;
  variant?: "icon" | "labeled";
  className?: string;
}) {
  const { isSaved, toggle, loaded } = useBookmarks();
  const saved = loaded && isSaved(item.url);

  const onClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggle(item);
  };

  if (variant === "labeled") {
    return (
      <button
        type="button"
        onClick={onClick}
        aria-pressed={saved}
        className={cn(
          "inline-flex items-center gap-2 h-10 px-4 rounded-full border text-sm font-medium transition-colors",
          saved
            ? "border-[var(--primary)] bg-[var(--primary)]/10 text-[var(--primary)]"
            : "border-[var(--border)] bg-[var(--surface)] text-[var(--foreground-muted)] hover:border-[var(--border-hover)] hover:text-[var(--foreground)]",
          className
        )}
      >
        {saved ? <BookmarkCheck className="w-4 h-4" /> : <Bookmark className="w-4 h-4" />}
        {saved ? "Saved" : "Save"}
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={saved ? "Remove bookmark" : "Save for later"}
      aria-pressed={saved}
      className={cn(
        "inline-flex items-center justify-center w-9 h-9 rounded-full border transition-colors",
        saved
          ? "border-[var(--primary)] bg-[var(--primary)]/10 text-[var(--primary)]"
          : "border-[var(--border)] bg-[var(--surface)]/80 text-[var(--foreground-subtle)] hover:border-[var(--border-hover)] hover:text-[var(--foreground)]",
        className
      )}
    >
      {saved ? <BookmarkCheck className="w-[18px] h-[18px]" /> : <Bookmark className="w-[18px] h-[18px]" />}
    </button>
  );
}
