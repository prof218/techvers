import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowRight, ExternalLink, BookOpen, Star, Check, Globe, Code2 } from "lucide-react";
import { technologies } from "#site/content";
import { technologyCategories, siteConfig } from "@/lib/constants";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookmarkButton } from "@/components/ui/bookmark-button";
import { ReadingProgress } from "@/components/ui/reading-progress";
import { JsonLd } from "@/components/json-ld";
import { articleJsonLd, breadcrumbJsonLd } from "@/lib/seo";
import { MdxContent } from "@/components/mdx-content";

interface Props {
  params: Promise<{ category: string; slug: string }>;
}

const difficultyColors = { beginner: "#22c55e", intermediate: "#f59e0b", advanced: "#ef4444" };

export function generateStaticParams() {
  return technologies.map((t) => ({ category: t.category, slug: t.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category, slug } = await params;
  const tech = technologies.find((t) => t.category === category && t.slug === slug);
  if (!tech) return {};
  return {
    title: `${tech.title} — Guide, Features & How to Get Started`,
    description: tech.description,
    alternates: { canonical: `${siteConfig.url}/technologies/${category}/${tech.slug}` },
  };
}

export default async function TechDetailPage({ params }: Props) {
  const { category, slug } = await params;
  const tech = technologies.find((t) => t.category === category && t.slug === slug);

  if (!tech) {
    notFound();
  }

  const categoryInfo = technologyCategories.find((c) => c.slug === category);
  const related = technologies
    .filter((t) => t.category === category && t.slug !== slug)
    .slice(0, 4);
  const diffColor = difficultyColors[tech.difficulty as keyof typeof difficultyColors];

  return (
    <div className="min-h-screen">
      <ReadingProgress />
      <JsonLd
        data={articleJsonLd({
          type: "TechArticle",
          title: tech.title,
          description: tech.description,
          path: `/technologies/${category}/${tech.slug}`,
          section: categoryInfo?.name || category,
        })}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "" },
          { name: "Technologies", path: "/technologies" },
          { name: categoryInfo?.name || category, path: `/technologies/${category}` },
          { name: tech.title, path: `/technologies/${category}/${tech.slug}` },
        ])}
      />
      {/* Hero */}
      <section className="relative py-16 sm:py-24 overflow-hidden border-b border-[var(--border)]">
        <div className="absolute inset-0 grid-pattern" />

        <div className="relative container-tight">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-[var(--foreground-muted)] mb-8">
            <Link href="/technologies" className="hover:text-[var(--primary)] transition-colors">
              Technologies
            </Link>
            <span>/</span>
            <Link
              href={`/technologies/${category}`}
              className="hover:text-[var(--primary)] transition-colors capitalize"
            >
              {categoryInfo?.name || category}
            </Link>
            <span>/</span>
            <span className="text-[var(--foreground)]">{tech.title}</span>
          </nav>

          <div className="flex flex-col sm:flex-row items-start gap-6">
            <div className="w-16 h-16 rounded-2xl bg-[var(--secondary)] flex items-center justify-center text-2xl font-bold text-[var(--primary)] flex-shrink-0">
              {tech.title[0]}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2 flex-wrap">
                <h1 className="text-3xl sm:text-4xl font-bold text-[var(--foreground)]">
                  {tech.title}
                </h1>
                <Badge
                  className="capitalize"
                  style={{ backgroundColor: `${diffColor}15`, color: diffColor, borderColor: "transparent" }}
                >
                  {tech.difficulty}
                </Badge>
              </div>
              <p className="text-lg text-[var(--foreground-muted)] leading-relaxed">{tech.description}</p>
              {tech.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {tech.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
                  ))}
                </div>
              )}
              <div className="flex flex-wrap items-center gap-4 mt-4">
                {tech.website && (
                  <a
                    href={tech.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-[var(--primary)] hover:underline"
                  >
                    <Globe className="w-3.5 h-3.5" /> Official Website <ExternalLink className="w-3 h-3" />
                  </a>
                )}
                {tech.github && (
                  <a
                    href={tech.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-[var(--foreground-muted)] hover:text-[var(--primary)]"
                  >
                    <Code2 className="w-3.5 h-3.5" /> GitHub
                  </a>
                )}
              </div>
              <div className="mt-5">
                <BookmarkButton
                  variant="labeled"
                  item={{ type: "technology", slug: tech.slug, title: tech.title, url: `/technologies/${category}/${tech.slug}`, category }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-tight">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main content */}
            <div className="lg:col-span-2">
              <div className="prose prose-invert max-w-none">
                <MdxContent code={tech.content} />
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="p-5 rounded-2xl border border-[var(--border)] bg-[var(--surface)] sticky top-24">
                <h3 className="text-sm font-semibold text-[var(--foreground)] mb-4 uppercase tracking-wider">
                  Quick Info
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-[var(--foreground-muted)]">Category</span>
                    <Badge variant="secondary" className="capitalize">{categoryInfo?.name || category}</Badge>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-[var(--foreground-muted)]">Difficulty</span>
                    <Badge
                      className="capitalize"
                      style={{ backgroundColor: `${diffColor}15`, color: diffColor, borderColor: "transparent" }}
                    >
                      {tech.difficulty}
                    </Badge>
                  </div>
                </div>

                {tech.features.length > 0 && (
                  <div className="mt-5 pt-4 border-t border-[var(--border)]">
                    <h4 className="text-xs font-semibold text-[var(--foreground-subtle)] uppercase tracking-wider mb-3 flex items-center gap-1.5">
                      <Star className="w-3.5 h-3.5" /> Key Features
                    </h4>
                    <ul className="space-y-2">
                      {tech.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-sm text-[var(--foreground-muted)]">
                          <Check className="w-4 h-4 text-[var(--success)] mt-0.5 flex-shrink-0" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="mt-6">
                  <Button variant="outline" className="w-full" size="sm" asChild>
                    <Link href="/roadmaps">
                      <BookOpen className="w-3.5 h-3.5" />
                      View Learning Roadmaps
                    </Link>
                  </Button>
                </div>

                {related.length > 0 && (
                  <div className="mt-6 pt-4 border-t border-[var(--border)]">
                    <h4 className="text-xs font-semibold text-[var(--foreground-subtle)] uppercase tracking-wider mb-3">
                      Related in {categoryInfo?.name || category}
                    </h4>
                    <div className="space-y-2">
                      {related.map((r) => (
                        <Link
                          key={r.slug}
                          href={`/technologies/${category}/${r.slug}`}
                          className="flex items-center justify-between p-2 rounded-lg hover:bg-[var(--surface-hover)] transition-colors group"
                        >
                          <span className="text-sm text-[var(--foreground)]">{r.title}</span>
                          <ArrowRight className="w-3 h-3 text-[var(--foreground-subtle)] group-hover:text-[var(--primary)] transition-colors" />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
