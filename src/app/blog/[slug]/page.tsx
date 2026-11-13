import React from "react";
import { blog } from "#site/content";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, Clock, CalendarDays, ArrowUpRight } from "lucide-react";
import { MdxContent } from "@/components/mdx-content";
import { Badge } from "@/components/ui/badge";
import { BookmarkButton } from "@/components/ui/bookmark-button";
import { ReadingProgress } from "@/components/ui/reading-progress";
import { JsonLd } from "@/components/json-ld";
import { siteConfig } from "@/lib/constants";
import { formatDate } from "@/lib/utils";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return blog.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blog.find((p) => p.slug === slug);
  if (!post) return {};
  const path = `/blog/${post.slug}`;
  return {
    title: post.title,
    description: post.description,
    keywords: post.tags,
    alternates: { canonical: `${siteConfig.url}${path}` },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `${siteConfig.url}${path}`,
      siteName: siteConfig.name,
      type: "article",
      publishedTime: new Date(post.date).toISOString(),
      tags: post.tags,
    },
    twitter: { card: "summary_large_image", title: post.title, description: post.description },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blog.find((p) => p.slug === slug);
  if (!post) notFound();

  const path = `/blog/${post.slug}`;
  const related = blog
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 3);
  const fallbackRelated =
    related.length < 3
      ? blog.filter((p) => p.slug !== post.slug && !related.includes(p)).slice(0, 3 - related.length)
      : [];
  const relatedPosts = [...related, ...fallbackRelated];

  return (
    <div className="min-h-screen">
      <ReadingProgress />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          description: post.description,
          datePublished: new Date(post.date).toISOString(),
          dateModified: new Date(post.date).toISOString(),
          author: { "@type": "Organization", name: post.author, url: siteConfig.url },
          publisher: { "@id": `${siteConfig.url}#org` },
          mainEntityOfPage: `${siteConfig.url}${path}`,
          keywords: post.tags.join(", "),
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
            { "@type": "ListItem", position: 2, name: "Blog", item: `${siteConfig.url}/blog` },
            { "@type": "ListItem", position: 3, name: post.title, item: `${siteConfig.url}${path}` },
          ],
        }}
      />

      {/* Hero */}
      <section className="relative py-14 sm:py-20 overflow-hidden border-b border-[var(--border)]">
        <div className="absolute inset-0 grid-pattern" />
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-[var(--primary)]/10 rounded-full blur-[100px]" />
        <div className="relative container-tight max-w-3xl">
          <nav className="flex flex-wrap items-center gap-2 text-sm text-[var(--foreground-muted)] mb-7">
            <Link href="/blog" className="hover:text-[var(--primary)] transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-[var(--foreground-subtle)]">{post.category}</span>
          </nav>

          <Badge variant="secondary" className="mb-4">{post.category}</Badge>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[var(--foreground)] leading-tight text-balance">
            {post.title}
          </h1>
          <p className="mt-4 text-lg text-[var(--foreground-muted)] leading-relaxed">{post.description}</p>

          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-[var(--foreground-subtle)]">
            <span className="font-medium text-[var(--foreground-muted)]">{post.author}</span>
            <span className="inline-flex items-center gap-1.5">
              <CalendarDays className="w-4 h-4" />
              {formatDate(post.date)}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              {post.metadata.readingTime} min read
            </span>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="section-padding">
        <div className="container-tight max-w-3xl">
          <article className="prose max-w-none">
            <MdxContent code={post.content} />
          </article>

          {/* Tags + save */}
          <div className="mt-10 pt-6 border-t border-[var(--border)] flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-[10px]">{tag}</Badge>
              ))}
            </div>
            <BookmarkButton
              variant="labeled"
              item={{ type: "blog", slug: post.slug, title: post.title, url: path, category: post.category }}
            />
          </div>

          {/* CTA */}
          <div className="mt-10 rounded-2xl border border-[var(--border)] bg-[image:var(--gradient-card)] p-6 text-center">
            <h3 className="text-lg font-bold text-[var(--foreground)]">Ready to put this into practice?</h3>
            <p className="text-sm text-[var(--foreground-muted)] mt-1.5 max-w-lg mx-auto">
              Browse real AI training & evaluation jobs, or follow a guided roadmap to go from beginner to job-ready.
            </p>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
              <Link href="/ai-training-jobs" className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--primary)] hover:underline">
                Browse AI jobs <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link href="/roadmaps" className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--primary)] hover:underline">
                View roadmaps <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Related */}
          {relatedPosts.length > 0 && (
            <div className="mt-14">
              <h2 className="text-xl font-bold text-[var(--foreground)] mb-5">Keep reading</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {relatedPosts.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/blog/${p.slug}`}
                    className="flex flex-col h-full p-5 rounded-2xl border border-[var(--border)] bg-[var(--surface)] card-hover group"
                  >
                    <Badge variant="secondary" className="text-[10px] self-start mb-2">{p.category}</Badge>
                    <h3 className="text-sm font-semibold text-[var(--foreground)] leading-snug group-hover:text-[var(--primary)] transition-colors line-clamp-3">
                      {p.title}
                    </h3>
                    <span className="mt-3 text-xs text-[var(--foreground-subtle)]">{p.metadata.readingTime} min read</span>
                  </Link>
                ))}
              </div>
            </div>
          )}

          <div className="mt-12">
            <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-medium text-[var(--foreground-muted)] hover:text-[var(--primary)] transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to blog
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
