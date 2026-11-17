import React from "react";
import { roadmaps } from "#site/content";
import { notFound } from "next/navigation";
import { MdxContent } from "@/components/mdx-content";
import Link from "next/link";
import { Metadata } from "next";
import { Clock, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { BookmarkButton } from "@/components/ui/bookmark-button";
import { ReadingProgress } from "@/components/ui/reading-progress";
import { RoadmapProgress } from "@/components/ui/roadmap-progress";
import { RoadmapFlow } from "@/components/roadmaps/roadmap-flow";
import { getInteractiveRoadmap, interactiveRoadmaps } from "@/data/roadmaps";
import { JsonLd } from "@/components/json-ld";
import { articleJsonLd, breadcrumbJsonLd, courseJsonLd, generateSEOMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/constants";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = new Set<string>([
    ...roadmaps.map((r) => r.slug),
    ...interactiveRoadmaps.map((r) => r.slug),
  ]);
  return [...slugs].map((slug) => ({ slug }));
}

/** Unified metadata from the interactive roadmap (preferred) or the MDX roadmap. */
function getMeta(slug: string) {
  const interactive = getInteractiveRoadmap(slug);
  const mdx = roadmaps.find((r) => r.slug === slug);
  if (!interactive && !mdx) return null;
  const src = interactive ?? mdx!;
  return {
    slug,
    title: src.title,
    description: src.description,
    category: src.category,
    level: src.level as "beginner" | "intermediate" | "advanced",
    estimatedTime: src.estimatedTime,
    interactive,
    mdx,
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const meta = getMeta(slug);
  if (!meta) return {};
  return generateSEOMetadata({
    title: `${meta.title} — Step-by-Step Learning Path`,
    description: meta.description,
    path: `/roadmaps/${meta.slug}`,
    tags: [meta.category, meta.level, "developer roadmap"],
    type: "article",
  });
}

const levelColors = {
  beginner: "#22c55e",
  intermediate: "#f59e0b",
  advanced: "#ef4444",
};

export default async function RoadmapDetailPage({ params }: Props) {
  const { slug } = await params;
  const meta = getMeta(slug);
  if (!meta) notFound();

  const { interactive, mdx } = meta;

  return (
    <div className="min-h-screen">
      <ReadingProgress />
      <JsonLd
        data={articleJsonLd({
          title: meta.title,
          description: meta.description,
          path: `/roadmaps/${meta.slug}`,
          section: meta.category,
        })}
      />
      <JsonLd
        data={courseJsonLd({
          title: meta.title,
          description: meta.description,
          path: `/roadmaps/${meta.slug}`,
        })}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "" },
          { name: "Roadmaps", path: "/roadmaps" },
          { name: meta.title, path: `/roadmaps/${meta.slug}` },
        ])}
      />
      {/* Hero */}
      <section className="relative hero-padding overflow-hidden border-b border-[var(--border)]">
        <div className="absolute inset-0 grid-pattern" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-[var(--primary)]/10 rounded-full blur-[100px]" />

        <div className="relative container-tight">
          {/* Breadcrumbs */}
          <nav className="flex flex-wrap items-center gap-2 text-sm text-[var(--foreground-muted)] mb-8">
            <Link href="/roadmaps" className="hover:text-[var(--primary)] transition-colors">Roadmaps</Link>
            <span>/</span>
            <span className="text-[var(--foreground)]">{meta.title}</span>
          </nav>

          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="secondary" className="capitalize">{meta.category}</Badge>
              <Badge
                className="text-xs capitalize"
                style={{
                  backgroundColor: `${levelColors[meta.level]}15`,
                  color: levelColors[meta.level],
                  borderColor: "transparent",
                }}
              >
                {meta.level}
              </Badge>
              {interactive && <Badge variant="gradient">Interactive</Badge>}
            </div>
            <h1 className="font-display text-4xl sm:text-5xl text-balance leading-[1.1] text-[var(--foreground)]">
              {meta.title}
            </h1>
            <p className="text-lg text-[var(--foreground-muted)] max-w-2xl leading-relaxed">
              {meta.description}
            </p>
            {meta.estimatedTime && (
              <div className="flex items-center gap-2 text-sm text-[var(--foreground-muted)] font-medium">
                <Clock className="w-4 h-4 text-[var(--primary)]" />
                Estimated time: <span className="text-[var(--foreground)] font-bold">{meta.estimatedTime}</span>
              </div>
            )}
            <BookmarkButton
              variant="labeled"
              item={{ type: "roadmap", slug: meta.slug, title: meta.title, url: `/roadmaps/${meta.slug}`, category: meta.category }}
            />
          </div>
        </div>
      </section>

      {/* Content: interactive node graph when available, else MDX timeline */}
      {interactive ? (
        <section className="section-padding pt-8">
          <div className="container-wide max-w-5xl">
            <div className="mb-8 p-4 rounded-xl border border-[var(--primary)]/20 bg-[var(--primary)]/5 flex items-start gap-3">
              <Sparkles className="w-5 h-5 text-[var(--primary)] mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="text-sm font-bold text-[var(--foreground)]">How to use this roadmap</h4>
                <p className="text-xs text-[var(--foreground-muted)] mt-1 leading-relaxed">
                  Click any topic to see what it covers and where to learn it. Tick topics off as you go —
                  your progress is saved on this device. Dashed nodes are optional.
                </p>
              </div>
            </div>
            <RoadmapFlow roadmap={interactive} />
          </div>
        </section>
      ) : mdx ? (
        <section className="section-padding">
          <div className="container-tight max-w-3xl">
            <RoadmapProgress slug={meta.slug} />

            <div className="mb-8 p-4 rounded-xl border border-[var(--primary)]/20 bg-[var(--primary)]/5 flex items-start gap-3">
              <Sparkles className="w-5 h-5 text-[var(--primary)] mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="text-sm font-bold text-[var(--foreground)]">How to use this roadmap</h4>
                <p className="text-xs text-[var(--foreground-muted)] mt-1 leading-relaxed">
                  Check off each stage in the tracker above as you finish it — your progress is saved on this device. Build something real for every stage before moving on.
                </p>
              </div>
            </div>

            <div className="roadmap-content prose max-w-none">
              <MdxContent code={mdx.content} />
            </div>
          </div>
        </section>
      ) : null}
    </div>
  );
}
