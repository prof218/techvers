import React from "react";
import Link from "next/link";
import { blog } from "#site/content";
import { ArrowRight, ArrowUpRight, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/ui/reveal";
import { formatDate } from "@/lib/utils";

export function BlogSection() {
  const posts = [...blog]
    .sort((a, b) => +new Date(b.date) - +new Date(a.date))
    .slice(0, 3);

  if (posts.length === 0) return null;

  return (
    <section className="relative section-padding">
      <div className="container-wide">
        <Reveal className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12 gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--primary)] mb-3">
              From the blog
            </p>
            <h2 className="font-display text-4xl sm:text-5xl text-[var(--foreground)] text-balance">
              Guides to learn AI
              <br className="hidden sm:block" /> and get hired
            </h2>
          </div>
          <Link
            href="/blog"
            className="flex items-center gap-2 text-sm font-medium text-[var(--foreground)] hover:text-[var(--primary)] transition-colors group"
          >
            Read the blog
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {posts.map((post, index) => (
            <Reveal key={post.slug} delay={(index % 3) * 0.06}>
              <Link
                href={`/blog/${post.slug}`}
                className="flex flex-col h-full p-6 rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow-sm)] card-hover group"
              >
                <Badge variant="secondary" className="text-[10px] self-start mb-3">{post.category}</Badge>
                <h3 className="text-lg font-semibold text-[var(--foreground)] leading-snug group-hover:text-[var(--primary)] transition-colors">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm text-[var(--foreground-muted)] leading-relaxed line-clamp-3 flex-1">
                  {post.description}
                </p>
                <div className="mt-4 pt-3 border-t border-[var(--border)] flex items-center justify-between text-xs text-[var(--foreground-subtle)]">
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    {post.metadata.readingTime} min
                  </span>
                  <span className="inline-flex items-center gap-1 text-[var(--primary)] font-medium">
                    {formatDate(post.date)} <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
