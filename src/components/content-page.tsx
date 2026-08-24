import React from "react";

interface ContentPageProps {
  title: string;
  subtitle?: string;
  updated?: string;
  children: React.ReactNode;
}

/**
 * Shared layout for static, prose-heavy pages (About, Privacy, Terms, Contact).
 * Keeps typography and spacing consistent across the site's informational pages.
 */
export function ContentPage({ title, subtitle, updated, children }: ContentPageProps) {
  return (
    <div className="min-h-screen">
      <section className="relative pt-10 pb-14 sm:pt-14 sm:pb-16 overflow-hidden border-b border-[var(--border)]">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--background-secondary)] to-[var(--background)]" />
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="relative container-tight">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[var(--foreground)]">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-4 text-lg text-[var(--foreground-muted)] max-w-2xl leading-relaxed">
              {subtitle}
            </p>
          )}
          {updated && (
            <p className="mt-4 text-sm text-[var(--foreground-subtle)]">Last updated: {updated}</p>
          )}
        </div>
      </section>

      <section className="section-padding">
        <div className="container-tight">
          <div className="doc max-w-none">
            {children}
          </div>
        </div>
      </section>
    </div>
  );
}
