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
import { JsonLd } from "@/components/json-ld";
import { articleJsonLd } from "@/lib/seo";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return roadmaps.map((roadmap) => ({
    slug: roadmap.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const roadmap = roadmaps.find((r) => r.slug === resolvedParams.slug);
  if (!roadmap) return {};
  return {
    title: `${roadmap.title} — Step-by-Step Learning Path | TechVerse`,
    description: roadmap.description,
  };
}

const levelColors = {
  beginner: "#22c55e",
  intermediate: "#f59e0b",
  advanced: "#ef4444",
};

export default async function RoadmapDetailPage({ params }: Props) {
  const resolvedParams = await params;
  const roadmap = roadmaps.find((r) => r.slug === resolvedParams.slug);

  if (!roadmap) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      <ReadingProgress />
      <JsonLd
        data={articleJsonLd({
          title: roadmap.title,
          description: roadmap.description,
          path: `/roadmaps/${roadmap.slug}`,
          section: roadmap.category,
        })}
      />
      {/* Hero */}
      <section className="relative py-16 sm:py-24 overflow-hidden border-b border-[var(--border)]">
        <div className="absolute inset-0 grid-pattern" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-[var(--primary)]/10 rounded-full blur-[100px]" />

        <div className="relative container-tight">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-sm text-[var(--foreground-muted)] mb-8">
            <Link href="/roadmaps" className="hover:text-[var(--primary)] transition-colors">Roadmaps</Link>
            <span>/</span>
            <span className="text-[var(--foreground)]">{roadmap.title}</span>
          </nav>

          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="secondary" className="capitalize">{roadmap.category}</Badge>
              <Badge
                className="text-xs capitalize"
                style={{
                  backgroundColor: `${levelColors[roadmap.level as keyof typeof levelColors]}15`,
                  color: levelColors[roadmap.level as keyof typeof levelColors],
                  borderColor: "transparent",
                }}
              >
                {roadmap.level}
              </Badge>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[var(--foreground)]">
              {roadmap.title}
            </h1>
            <p className="text-lg text-[var(--foreground-muted)] max-w-2xl leading-relaxed">
              {roadmap.description}
            </p>
            {roadmap.estimatedTime && (
              <div className="flex items-center gap-2 text-sm text-[var(--foreground-muted)] font-medium">
                <Clock className="w-4 h-4 text-[var(--primary)]" />
                Estimated time: <span className="text-[var(--foreground)] font-bold">{roadmap.estimatedTime}</span>
              </div>
            )}
            <BookmarkButton
              variant="labeled"
              item={{ type: "roadmap", slug: roadmap.slug, title: roadmap.title, url: `/roadmaps/${roadmap.slug}`, category: roadmap.category }}
            />
          </div>
        </div>
      </section>

      {/* Timeline Content */}
      <section className="section-padding">
        <div className="container-tight max-w-3xl">
          <RoadmapProgress slug={roadmap.slug} />

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
            <MdxContent code={roadmap.content} />
          </div>
        </div>
      </section>
    </div>
  );
}
