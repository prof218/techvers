import React from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Route } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/ui/reveal";
import { interactiveRoadmaps } from "@/data/roadmaps";
import { countTopics } from "@/lib/roadmaps";

const FEATURED = [
  "ai-engineer",
  "frontend-developer",
  "javascript",
  "backend-developer",
  "data-scientist",
  "devops-engineer",
];

const levelColors: Record<string, string> = {
  beginner: "#22c55e",
  intermediate: "#f59e0b",
  advanced: "#ef4444",
};

export function RoadmapsSection() {
  const featured = FEATURED.map((slug) => interactiveRoadmaps.find((r) => r.slug === slug)).filter(
    (r): r is NonNullable<typeof r> => !!r
  );

  if (featured.length === 0) return null;

  return (
    <section className="relative section-padding bg-[var(--background-secondary)] border-y border-[var(--border)]">
      <div className="container-wide">
        <Reveal className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12 gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--primary)] mb-3">
              Interactive roadmaps
            </p>
            <h2 className="font-display text-4xl sm:text-5xl text-[var(--foreground)] text-balance">
              Follow a path, not
              <br className="hidden sm:block" /> a playlist
            </h2>
            <p className="mt-4 text-[var(--foreground-muted)] max-w-xl leading-relaxed">
              Visual, clickable roadmaps with resources on every topic — and progress that saves as
              you go. {interactiveRoadmaps.length} paths and counting.
            </p>
          </div>
          <Link
            href="/roadmaps"
            className="flex items-center gap-2 text-sm font-medium text-[var(--foreground)] hover:text-[var(--primary)] transition-colors group"
          >
            All roadmaps
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {featured.map((r, index) => (
            <Reveal key={r.slug} delay={(index % 3) * 0.06}>
              <Link
                href={`/roadmaps/${r.slug}`}
                className="flex flex-col h-full p-6 rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow-sm)] card-hover group"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="w-11 h-11 rounded-xl bg-[var(--secondary)] flex items-center justify-center text-[var(--primary)]">
                    <Route className="w-5 h-5" />
                  </span>
                  <Badge
                    className="text-[10px] capitalize"
                    style={{
                      backgroundColor: `${levelColors[r.level]}15`,
                      color: levelColors[r.level],
                      borderColor: "transparent",
                    }}
                  >
                    {r.level}
                  </Badge>
                </div>
                <h3 className="text-lg font-semibold text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors">
                  {r.title.replace(" Roadmap", "")}
                </h3>
                <p className="text-sm text-[var(--foreground-muted)] mt-2 line-clamp-2 leading-relaxed flex-1">
                  {r.description}
                </p>
                <div className="mt-4 pt-3 border-t border-[var(--border)] flex items-center justify-between text-xs text-[var(--foreground-subtle)]">
                  <span>{countTopics(r)} topics · {r.estimatedTime}</span>
                  <ArrowUpRight className="w-4 h-4 text-[var(--primary)]" />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
