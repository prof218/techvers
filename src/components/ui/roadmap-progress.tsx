"use client";

import React, { useEffect, useState } from "react";
import { Circle, CircleCheck, Trophy } from "lucide-react";
import { useLocalStorage } from "@/lib/bookmarks";

/**
 * Reads the "## " stage headings from the rendered roadmap content (inside
 * .roadmap-content) and turns them into a checkable progress tracker that
 * persists per-roadmap in localStorage. Purely client-side, no login.
 */
export function RoadmapProgress({ slug }: { slug: string }) {
  const [stages, setStages] = useState<string[]>([]);
  const [done, setDone, loaded] = useLocalStorage<Record<number, boolean>>(
    `techverse:roadmap:${slug}`,
    {}
  );

  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>(".roadmap-content h2"));
    nodes.forEach((n, i) => {
      n.id = `stage-${i}`;
      n.style.scrollMarginTop = "6rem";
    });
    setStages(nodes.map((n, i) => (n.textContent || `Stage ${i + 1}`).trim()));
  }, []);

  // Dim completed headings in the article
  useEffect(() => {
    if (!loaded) return;
    stages.forEach((_, i) => {
      const el = document.getElementById(`stage-${i}`);
      if (el) el.style.opacity = done[i] ? "0.5" : "";
    });
  }, [done, stages, loaded]);

  const total = stages.length;
  if (total === 0) return null;

  const completed = stages.filter((_, i) => done[i]).length;
  const pct = Math.round((completed / total) * 100);

  const toggle = (i: number) => {
    setDone((prev) => ({ ...prev, [i]: !prev[i] }));
    document.getElementById(`stage-${i}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="not-prose mb-10 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-[var(--shadow-sm)]">
      <div className="flex items-center justify-between gap-4 mb-4">
        <div className="flex items-center gap-2">
          <Trophy className="w-4 h-4 text-[var(--primary)]" />
          <h3 className="text-sm font-semibold text-[var(--foreground)]">Your progress</h3>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-sm font-semibold text-[var(--foreground)]">
            {completed}/{total} · {pct}%
          </span>
          {completed > 0 && (
            <button
              onClick={() => setDone({})}
              className="text-xs text-[var(--foreground-subtle)] hover:text-[var(--foreground)] transition-colors"
            >
              Reset
            </button>
          )}
        </div>
      </div>

      <div className="h-2 w-full rounded-full bg-[var(--secondary)] overflow-hidden mb-4">
        <div
          className="h-full rounded-full bg-[var(--primary)]"
          style={{ width: `${pct}%`, transition: "width 300ms cubic-bezier(0.22,1,0.36,1)" }}
        />
      </div>

      <ul className="space-y-1">
        {stages.map((title, i) => (
          <li key={i}>
            <button
              onClick={() => toggle(i)}
              className="w-full flex items-center gap-2.5 text-left px-2 py-1.5 rounded-lg hover:bg-[var(--surface-hover)] transition-colors group"
            >
              {done[i] ? (
                <CircleCheck className="w-[18px] h-[18px] text-[var(--primary)] flex-shrink-0" />
              ) : (
                <Circle className="w-[18px] h-[18px] text-[var(--foreground-subtle)] flex-shrink-0" />
              )}
              <span
                className={`text-sm ${
                  done[i]
                    ? "text-[var(--foreground-subtle)] line-through"
                    : "text-[var(--foreground-muted)] group-hover:text-[var(--foreground)]"
                }`}
              >
                {title}
              </span>
            </button>
          </li>
        ))}
      </ul>
      {pct === 100 && (
        <p className="mt-4 text-sm font-medium text-[var(--success)] flex items-center gap-1.5">
          <Trophy className="w-4 h-4" /> Roadmap complete — nice work!
        </p>
      )}
    </div>
  );
}
