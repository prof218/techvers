"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { Check, Circle, CircleCheck, Trophy, X, ExternalLink, BookOpen, Link2 } from "lucide-react";
import { useLocalStorage } from "@/lib/bookmarks";
import { cn } from "@/lib/utils";
import { allTopicIds, type InteractiveRoadmap, type RoadmapTopic } from "@/lib/roadmaps";

type DoneMap = Record<string, boolean>;

export function RoadmapFlow({ roadmap }: { roadmap: InteractiveRoadmap }) {
  const [done, setDone, loaded] = useLocalStorage<DoneMap>(
    `techverse:roadmap-nodes:${roadmap.slug}`,
    {}
  );
  const [selected, setSelected] = useState<RoadmapTopic | null>(null);

  const ids = useMemo(() => allTopicIds(roadmap), [roadmap]);
  const total = ids.length;
  const completed = loaded ? ids.filter((id) => done[id]).length : 0;
  const pct = total ? Math.round((completed / total) * 100) : 0;

  const toggle = (id: string) => setDone((p) => ({ ...p, [id]: !p[id] }));
  const isDone = (id: string) => loaded && !!done[id];

  return (
    <div>
      {/* Sticky progress header */}
      <div className="sticky top-16 lg:top-20 z-30 -mx-4 px-4 py-3 mb-10 bg-[color-mix(in_srgb,var(--background)_85%,transparent)] backdrop-blur-md border-b border-[var(--border)]">
        <div className="flex items-center justify-between gap-4 mb-2">
          <div className="flex items-center gap-2">
            <Trophy className="w-4 h-4 text-[var(--primary)]" />
            <span className="text-sm font-semibold text-[var(--foreground)]">
              {completed}/{total} topics · {pct}%
            </span>
          </div>
          {completed > 0 && (
            <button
              onClick={() => setDone({})}
              className="text-xs text-[var(--foreground-subtle)] hover:text-[var(--foreground)] transition-colors"
            >
              Reset progress
            </button>
          )}
        </div>
        <div className="h-1.5 w-full rounded-full bg-[var(--secondary)] overflow-hidden">
          <div
            className="h-full rounded-full bg-[image:var(--gradient-primary)]"
            style={{ width: `${pct}%`, transition: "width 300ms cubic-bezier(0.22,1,0.36,1)" }}
          />
        </div>
      </div>

      {/* Branch timeline */}
      <div className="relative">
        {/* central spine */}
        <div className="absolute top-0 bottom-0 left-4 md:left-1/2 w-0.5 bg-[var(--border)] md:-translate-x-1/2" />

        <div className="space-y-12">
          {roadmap.milestones.map((m, mi) => {
            const mDone = m.topics.length > 0 && m.topics.every((t) => isDone(t.id));
            return (
              <div key={m.id} className="relative">
                {/* Milestone card (number sits inside, card covers the spine) */}
                <div className="relative flex md:justify-center mb-6 pl-10 md:pl-0">
                  <div className="relative z-10 inline-flex items-center gap-3 rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 shadow-[var(--shadow-md)]">
                    <span
                      className={cn(
                        "flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border-2 transition-colors",
                        mDone
                          ? "bg-[var(--primary)] text-[var(--primary-foreground)] border-[var(--primary)]"
                          : "bg-[var(--background)] text-[var(--primary)] border-[var(--primary)]"
                      )}
                    >
                      {mDone ? <Check className="w-4 h-4" /> : mi + 1}
                    </span>
                    <div className="flex flex-col items-start text-left">
                      <h2 className="text-base font-bold text-[var(--foreground)] leading-tight">{m.title}</h2>
                      {m.summary && (
                        <p className="text-xs text-[var(--foreground-subtle)] mt-0.5 max-w-xs">{m.summary}</p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Topic branches */}
                <div className="space-y-3">
                  {m.topics.map((t, ti) => {
                    const left = ti % 2 === 0;
                    const d = isDone(t.id);
                    return (
                      <div key={t.id} className="relative md:grid md:grid-cols-2 items-center pl-12 md:pl-0">
                        {/* node dot */}
                        <span
                          className={cn(
                            "absolute left-4 md:left-1/2 top-1/2 -translate-y-1/2 md:-translate-x-1/2 z-10 w-3 h-3 rounded-full border-2",
                            d ? "bg-[var(--primary)] border-[var(--primary)]" : "bg-[var(--background)] border-[var(--border-hover)]"
                          )}
                        />
                        {/* connectors */}
                        <span className="md:hidden absolute top-1/2 left-4 w-8 h-px bg-[var(--border)]" />
                        <span className={cn("hidden md:block absolute top-1/2 h-px w-10 bg-[var(--border)]", left ? "right-1/2" : "left-1/2")} />

                        {/* card placement */}
                        {left ? (
                          <>
                            <div className="md:pr-12 md:flex md:justify-end">
                              <TopicCard topic={t} done={d} onOpen={() => setSelected(t)} onToggle={() => toggle(t.id)} align="right" />
                            </div>
                            <div className="hidden md:block" />
                          </>
                        ) : (
                          <>
                            <div className="hidden md:block" />
                            <div className="md:pl-12">
                              <TopicCard topic={t} done={d} onOpen={() => setSelected(t)} onToggle={() => toggle(t.id)} align="left" />
                            </div>
                          </>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {pct === 100 && (
        <p className="mt-10 text-center text-sm font-semibold text-[var(--success)] flex items-center justify-center gap-1.5">
          <Trophy className="w-4 h-4" /> Roadmap complete — outstanding work!
        </p>
      )}

      {/* Detail sheet */}
      <AnimatePresence>
        {selected && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/40"
              onClick={() => setSelected(null)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="fixed right-0 top-0 bottom-0 z-50 w-full max-w-md bg-[var(--background)] border-l border-[var(--border)] overflow-y-auto"
              role="dialog"
              aria-label={selected.title}
            >
              <div className="sticky top-0 flex items-center justify-between px-6 py-4 bg-[var(--background)] border-b border-[var(--border)]">
                <span className="text-xs font-semibold uppercase tracking-wider text-[var(--foreground-subtle)]">Topic</span>
                <button
                  onClick={() => setSelected(null)}
                  className="inline-flex items-center justify-center w-9 h-9 rounded-full hover:bg-[var(--surface-hover)]"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="px-6 py-6">
                <div className="flex items-start gap-2 mb-3">
                  <h3 className="text-xl font-bold text-[var(--foreground)]">{selected.title}</h3>
                  {selected.optional && (
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full border border-dashed border-[var(--border-hover)] text-[var(--foreground-subtle)] mt-1">
                      Optional
                    </span>
                  )}
                </div>
                {selected.summary && (
                  <p className="text-[var(--foreground-muted)] leading-relaxed">{selected.summary}</p>
                )}

                {selected.resources && selected.resources.length > 0 && (
                  <div className="mt-6">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--foreground-subtle)] mb-3 flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5" /> Resources
                    </h4>
                    <div className="space-y-2">
                      {selected.resources.map((r) =>
                        r.url.startsWith("/") ? (
                          <Link
                            key={r.url}
                            href={r.url}
                            className="flex items-center gap-2 p-3 rounded-xl border border-[var(--border)] bg-[var(--surface)] hover:border-[var(--border-hover)] text-sm font-medium text-[var(--foreground)] transition-colors"
                          >
                            <Link2 className="w-4 h-4 text-[var(--primary)]" /> {r.label}
                          </Link>
                        ) : (
                          <a
                            key={r.url}
                            href={r.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 p-3 rounded-xl border border-[var(--border)] bg-[var(--surface)] hover:border-[var(--border-hover)] text-sm font-medium text-[var(--foreground)] transition-colors"
                          >
                            <ExternalLink className="w-4 h-4 text-[var(--primary)]" /> {r.label}
                          </a>
                        )
                      )}
                    </div>
                  </div>
                )}

                <button
                  onClick={() => toggle(selected.id)}
                  className={cn(
                    "mt-8 w-full inline-flex items-center justify-center gap-2 h-11 rounded-full text-sm font-semibold transition-colors",
                    isDone(selected.id)
                      ? "bg-[var(--secondary)] text-[var(--foreground)]"
                      : "bg-[image:var(--gradient-primary)] text-[var(--primary-foreground)]"
                  )}
                >
                  {isDone(selected.id) ? (
                    <><CircleCheck className="w-4 h-4" /> Completed — mark as not done</>
                  ) : (
                    <><Check className="w-4 h-4" /> Mark as done</>
                  )}
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

function TopicCard({
  topic,
  done,
  onOpen,
  onToggle,
  align,
}: {
  topic: RoadmapTopic;
  done: boolean;
  onOpen: () => void;
  onToggle: () => void;
  align: "left" | "right";
}) {
  return (
    <div
      onClick={onOpen}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onOpen();
        }
      }}
      className={cn(
        "cursor-pointer inline-flex items-center gap-2.5 max-w-xs w-full md:w-auto rounded-xl border px-4 py-2.5 shadow-[var(--shadow-sm)] transition-colors text-left group",
        topic.optional ? "border-dashed" : "border-solid",
        done
          ? "bg-[var(--secondary)] border-[var(--primary)]/30"
          : "bg-[var(--surface)] border-[var(--border)] hover:border-[var(--border-hover)]",
        align === "right" && "md:flex-row-reverse md:text-right"
      )}
    >
      <button
        onClick={(e) => {
          e.stopPropagation();
          onToggle();
        }}
        aria-label={done ? "Mark as not done" : "Mark as done"}
        aria-pressed={done}
        className="flex-shrink-0"
      >
        {done ? (
          <CircleCheck className="w-5 h-5 text-[var(--primary)]" />
        ) : (
          <Circle className="w-5 h-5 text-[var(--foreground-subtle)] group-hover:text-[var(--primary)] transition-colors" />
        )}
      </button>
      <span
        className={cn(
          "text-sm font-medium",
          done ? "text-[var(--foreground-subtle)] line-through" : "text-[var(--foreground)]"
        )}
      >
        {topic.title}
      </span>
      {topic.resources && topic.resources.length > 0 && (
        <BookOpen className="w-3.5 h-3.5 text-[var(--foreground-subtle)] flex-shrink-0" />
      )}
    </div>
  );
}
