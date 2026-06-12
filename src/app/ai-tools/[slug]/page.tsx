import React from "react";
import { aiTools } from "#site/content";
import { notFound } from "next/navigation";
import { MdxContent } from "@/components/mdx-content";
import Link from "next/link";
import { Metadata } from "next";
import { ArrowLeft, Star, ExternalLink, Check, X, Sparkles, Layers } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return aiTools.map((tool) => ({
    slug: tool.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const tool = aiTools.find((t) => t.slug === resolvedParams.slug);
  if (!tool) return {};
  return {
    title: `${tool.title} — AI Tool Review & Pricing | TechVerse`,
    description: tool.description,
  };
}

export default async function AIToolPage({ params }: Props) {
  const resolvedParams = await params;
  const tool = aiTools.find((t) => t.slug === resolvedParams.slug);

  if (!tool) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-16 sm:py-24 overflow-hidden border-b border-[var(--border)]">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--background-secondary)] to-[var(--background)]" />
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-[#06b6d4]/10 rounded-full blur-[100px]" />

        <div className="relative container-tight">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-sm text-[var(--foreground-muted)] mb-8">
            <Link href="/ai-tools" className="hover:text-[var(--primary)] transition-colors">AI Tools</Link>
            <span>/</span>
            <span className="text-capitalize text-[var(--foreground-subtle)]">{tool.category}</span>
            <span>/</span>
            <span className="text-[var(--foreground)]">{tool.title}</span>
          </nav>

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant={tool.pricing === "Free" ? "success" : tool.pricing === "Freemium" ? "info" : "secondary"}>
                  {tool.pricing}
                </Badge>
                <Badge variant="secondary" className="capitalize">
                  {tool.category}
                </Badge>
              </div>
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[var(--foreground)]">
                {tool.title}
              </h1>
              <p className="text-lg text-[var(--foreground-muted)] max-w-2xl leading-relaxed">
                {tool.description}
              </p>
              <div className="flex items-center gap-2 text-sm font-semibold text-[var(--warning)]">
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(tool.rating) ? "fill-current" : "opacity-30"
                      }`}
                    />
                  ))}
                </div>
                <span>{tool.rating} / 5.0</span>
              </div>
            </div>

            {tool.website && (
              <Button asChild size="lg" className="w-full md:w-auto gap-2 bg-[#06b6d4] hover:bg-[#06b6d4]/90 text-white cursor-pointer shadow-lg shadow-[#06b6d4]/20 hover:scale-[1.02] transition-all duration-300">
                <a href={tool.website} target="_blank" rel="noopener noreferrer">
                  Visit Official Site
                  <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
            )}
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="section-padding">
        <div className="container-tight">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left/Main content */}
            <div className="lg:col-span-2 space-y-8">
              <div className="prose prose-invert max-w-none">
                <MdxContent code={tool.content} />
              </div>

              {/* Alternatives Section */}
              {tool.alternatives && tool.alternatives.length > 0 && (
                <div className="pt-6 border-t border-[var(--border)]">
                  <h3 className="text-xl font-bold text-[var(--foreground)] mb-4 flex items-center gap-2">
                    <Layers className="w-5 h-5 text-[var(--accent)]" />
                    Alternatives to {tool.title}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {tool.alternatives.map((alt) => (
                      <div
                        key={alt}
                        className="p-4 rounded-xl border border-[var(--border)] bg-[var(--surface)] hover:bg-[var(--surface-hover)] transition-all flex items-center justify-between group"
                      >
                        <span className="font-semibold text-[var(--foreground)]">{alt}</span>
                        <Link
                          href={`/ai-tools/${alt.toLowerCase().replace(/\s+/g, "-")}`}
                          className="text-xs text-[var(--primary)] font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          View Tool
                          <ArrowLeft className="w-3 h-3 rotate-180" />
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Pros & Cons Card */}
              <div className="p-6 rounded-2xl border border-[var(--border)] bg-[var(--surface)] space-y-6">
                <div>
                  <h3 className="text-sm font-semibold text-[var(--foreground)] uppercase tracking-wider mb-4">
                    Pros & Cons
                  </h3>
                  <div className="space-y-4">
                    {/* Pros */}
                    {tool.pros && tool.pros.length > 0 && (
                      <div className="space-y-2.5">
                        <h4 className="text-xs font-bold text-[var(--success)] uppercase tracking-wider">Pros</h4>
                        <ul className="space-y-2">
                          {tool.pros.map((pro) => (
                            <li key={pro} className="flex items-start gap-2 text-sm text-[var(--foreground-muted)]">
                              <Check className="w-4 h-4 text-[var(--success)] mt-0.5 flex-shrink-0" />
                              <span>{pro}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Cons */}
                    {tool.cons && tool.cons.length > 0 && (
                      <div className="space-y-2.5 pt-4 border-t border-[var(--border)]">
                        <h4 className="text-xs font-bold text-[var(--error)] uppercase tracking-wider">Cons</h4>
                        <ul className="space-y-2">
                          {tool.cons.map((con) => (
                            <li key={con} className="flex items-start gap-2 text-sm text-[var(--foreground-muted)]">
                              <X className="w-4 h-4 text-[var(--error)] mt-0.5 flex-shrink-0" />
                              <span>{con}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Quick info metadata */}
              <div className="p-5 rounded-2xl border border-[var(--border)] bg-[var(--surface)] space-y-4 text-sm">
                <h3 className="text-xs font-bold text-[var(--foreground-subtle)] uppercase tracking-wider mb-2">
                  Specs & Features
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[var(--foreground-muted)]">Pricing Model</span>
                    <span className="font-medium text-[var(--foreground)]">{tool.pricing}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[var(--foreground-muted)]">Category</span>
                    <span className="font-medium text-[var(--foreground)] capitalize">{tool.category}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[var(--foreground-muted)]">Overall Rating</span>
                    <span className="font-semibold text-[var(--warning)]">{tool.rating} / 5.0</span>
                  </div>
                </div>

                {tool.features && tool.features.length > 0 && (
                  <div className="pt-4 border-t border-[var(--border)] space-y-2">
                    <span className="text-[var(--foreground-muted)] block mb-1">Key Tags</span>
                    <div className="flex flex-wrap gap-1.5">
                      {tool.features.map((feat) => (
                        <Badge key={feat} variant="secondary" className="text-[10px]">
                          {feat}
                        </Badge>
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
