import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { blog } from "#site/content";
import { BookOpen, ArrowUpRight, Clock } from "lucide-react";
import { siteConfig } from "@/lib/constants";
import { JsonLd } from "@/components/json-ld";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/ui/reveal";
import { formatDate } from "@/lib/utils";

const PATH = "/blog";

export const metadata: Metadata = {
  title: "Blog — AI Careers, Learning & Training Jobs",
  description:
    "Practical, original guides on becoming an AI engineer, landing AI training and evaluation jobs, building a standout portfolio, and growing a career in AI — written for learners and freshers.",
  alternates: { canonical: `${siteConfig.url}${PATH}` },
  openGraph: {
    title: "TechVerse Blog — AI Careers & Learning",
    description:
      "Original guides on AI careers, model evaluation, data annotation, portfolios, and landing remote AI jobs.",
    url: `${siteConfig.url}${PATH}`,
    siteName: siteConfig.name,
    type: "website",
  },
};

export default function BlogPage() {
  const posts = [...blog].sort((a, b) => +new Date(b.date) - +new Date(a.date));
  const [lead, ...rest] = posts;

  return (
    <div className="min-h-screen">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Blog",
              "@id": `${siteConfig.url}${PATH}#blog`,
              url: `${siteConfig.url}${PATH}`,
              name: "TechVerse Blog",
              description: metadata.description as string,
              isPartOf: { "@id": `${siteConfig.url}#site` },
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
                { "@type": "ListItem", position: 2, name: "Blog", item: `${siteConfig.url}${PATH}` },
              ],
            },
          ],
        }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[var(--border)]">
        <div className="absolute inset-0 -z-10 grid-pattern" />
        <div className="absolute -top-20 -right-16 w-[26rem] h-[26rem] rounded-full bg-[var(--primary)]/10 blur-[120px] -z-10" />
        <div className="container-tight py-8 sm:py-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[var(--border)] bg-[var(--surface)] text-sm text-[var(--foreground-muted)] shadow-[var(--shadow-sm)] mb-4">
            <BookOpen className="w-3.5 h-3.5 text-[var(--primary)]" />
            {posts.length} articles
          </div>
          <h1 className="font-display text-4xl sm:text-6xl text-[var(--foreground)] text-balance leading-[1.05]">
            Learn AI. Get hired.
          </h1>
          <p className="mt-5 text-lg text-[var(--foreground-muted)] max-w-2xl mx-auto leading-relaxed text-pretty">
            Practical, no-fluff guides on becoming an AI engineer, landing AI training jobs, and
            building a career in AI — written for learners and freshers.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide space-y-10">
          {/* Lead article */}
          {lead && (
            <Reveal>
              <Link
                href={`/blog/${lead.slug}`}
                className="group grid md:grid-cols-2 gap-6 p-6 sm:p-8 rounded-3xl border border-[var(--border)] bg-[image:var(--gradient-card)] hover:border-[var(--border-hover)] transition-colors"
              >
                <div className="flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="gradient" className="text-[10px]">Featured</Badge>
                    <Badge variant="secondary" className="text-[10px]">{lead.category}</Badge>
                  </div>
                  <h2 className="font-display text-3xl sm:text-4xl text-[var(--foreground)] leading-tight group-hover:text-[var(--primary)] transition-colors text-balance">
                    {lead.title}
                  </h2>
                  <p className="mt-3 text-[var(--foreground-muted)] leading-relaxed line-clamp-3">
                    {lead.description}
                  </p>
                  <div className="mt-5 flex items-center gap-4 text-xs text-[var(--foreground-subtle)]">
                    <span>{formatDate(lead.date)}</span>
                    <span className="inline-flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      {lead.metadata.readingTime} min read
                    </span>
                  </div>
                </div>
                <div className="hidden md:flex items-center justify-center rounded-2xl bg-[var(--surface)] border border-[var(--border)] min-h-[14rem]">
                  <BookOpen className="w-16 h-16 text-[var(--primary)]/30" />
                </div>
              </Link>
            </Reveal>
          )}

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {rest.map((post, index) => (
              <Reveal key={post.slug} delay={(index % 3) * 0.06}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="flex flex-col h-full p-6 rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow-sm)] card-hover group"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="secondary" className="text-[10px]">{post.category}</Badge>
                  </div>
                  <h3 className="text-lg font-semibold text-[var(--foreground)] leading-snug group-hover:text-[var(--primary)] transition-colors">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-sm text-[var(--foreground-muted)] leading-relaxed line-clamp-3 flex-1">
                    {post.description}
                  </p>
                  <div className="mt-4 pt-3 border-t border-[var(--border)] flex items-center justify-between text-xs text-[var(--foreground-subtle)]">
                    <span>{formatDate(post.date)}</span>
                    <span className="inline-flex items-center gap-1 text-[var(--primary)] font-medium">
                      Read <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
