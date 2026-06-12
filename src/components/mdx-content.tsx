"use client";

import React from "react";
import * as runtime from "react/jsx-runtime";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

// Hook to parse compiled MDX code string
const useMDXComponent = (code: string) => {
  const fn = new Function(code);
  return fn(runtime).default;
};

// Custom MDX Components mapping
const sharedComponents = {
  Link: ({ href, children, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
    if (href?.startsWith("/")) {
      return (
        <Link href={href} className="text-[var(--primary)] hover:underline" {...props}>
          {children}
        </Link>
      );
    }
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="text-[var(--primary)] hover:underline inline-flex items-center gap-0.5" {...props}>
        {children}
      </a>
    );
  },
  Badge,
  // Custom Callout component inside MDX
  Callout: ({ children, type = "info" }: { children: React.ReactNode; type?: "info" | "warning" | "success" | "error" }) => {
    const borders = {
      info: "border-blue-500/30 bg-blue-500/5 text-blue-200",
      warning: "border-amber-500/30 bg-amber-500/5 text-amber-200",
      success: "border-emerald-500/30 bg-emerald-500/5 text-emerald-200",
      error: "border-red-500/30 bg-red-500/5 text-red-200",
    };
    return (
      <div className={`p-4 my-6 rounded-xl border ${borders[type]} leading-relaxed`}>
        {children}
      </div>
    );
  },
  // Custom RoadmapNode component inside MDX
  RoadmapNode: ({ title, time, resources, children }: { title: string; time?: string; resources?: string; children: React.ReactNode }) => {
    return (
      <div className="relative pl-8 pb-8 border-l border-[var(--border)] last:pb-0 last:border-l-0 ml-3">
        {/* Node indicator */}
        <div className="absolute -left-[9px] top-1.5 w-4.5 h-4.5 rounded-full bg-[var(--background)] border-2 border-[var(--primary)] flex items-center justify-center">
          <div className="w-1.5 h-1.5 rounded-full bg-[var(--primary)]" />
        </div>
        
        {/* Node content */}
        <div className="p-5 rounded-xl border border-[var(--border)] bg-[var(--surface)] hover:border-[var(--border-hover)] transition-all">
          <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
            <h3 className="text-base font-bold text-[var(--foreground)] mt-0">{title}</h3>
            {time && <Badge variant="secondary" className="text-xs font-semibold">{time}</Badge>}
          </div>
          <div className="text-sm text-[var(--foreground-muted)] leading-relaxed">
            {children}
          </div>
          {resources && (
            <div className="mt-3 pt-3 border-t border-[var(--border)] text-xs text-[var(--primary)] font-medium flex flex-wrap gap-1 items-center">
              <span className="text-[var(--foreground-subtle)]">Resources:</span>
              <span className="text-[var(--foreground-muted)]">{resources}</span>
            </div>
          )}
        </div>
      </div>
    );
  },
  // Table style helpers
  table: (props: React.TableHTMLAttributes<HTMLTableElement>) => (
    <div className="my-6 overflow-x-auto rounded-xl border border-[var(--border)]">
      <table className="w-full text-sm border-collapse" {...props} />
    </div>
  ),
  thead: (props: React.HTMLAttributes<HTMLTableSectionElement>) => (
    <thead className="bg-[var(--surface)] border-b border-[var(--border)]" {...props} />
  ),
  th: (props: React.ThHTMLAttributes<HTMLTableCellElement>) => (
    <th className="px-4 py-3 text-left font-semibold text-[var(--foreground)]" {...props} />
  ),
  td: (props: React.TdHTMLAttributes<HTMLTableCellElement>) => (
    <td className="px-4 py-3 border-t border-[var(--border)] text-[var(--foreground-muted)]" {...props} />
  ),
  tr: (props: React.HTMLAttributes<HTMLTableRowElement>) => (
    <tr className="hover:bg-[var(--surface-hover)]/50 transition-colors" {...props} />
  ),
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1 className="text-3xl font-extrabold tracking-tight mt-8 mb-4 text-[var(--foreground)]" {...props} />
  ),
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className="text-2xl font-bold tracking-tight mt-8 mb-4 text-[var(--foreground)] border-b border-[var(--border)] pb-2" {...props} />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className="text-xl font-semibold tracking-tight mt-6 mb-3 text-[var(--foreground)]" {...props} />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="leading-7 [&:not(:first-child)]:mt-4 text-[var(--foreground-muted)]" {...props} />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="my-5 ml-6 list-disc [&>li]:mt-2 text-[var(--foreground-muted)]" {...props} />
  ),
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className="my-5 ml-6 list-decimal [&>li]:mt-2 text-[var(--foreground-muted)]" {...props} />
  ),
  li: (props: React.LiHTMLAttributes<HTMLLIElement>) => (
    <li className="leading-7" {...props} />
  ),
  blockquote: (props: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote className="mt-6 border-l-2 border-[var(--primary)] pl-6 italic text-[var(--foreground-muted)]" {...props} />
  ),
  pre: (props: React.HTMLAttributes<HTMLPreElement>) => (
    <pre className="mb-4 mt-6 overflow-x-auto rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4 font-mono text-sm leading-relaxed" {...props} />
  ),
  code: (props: React.HTMLAttributes<HTMLElement>) => (
    <code className="rounded bg-[var(--surface-hover)] px-[0.4rem] py-[0.2rem] font-mono text-xs font-semibold text-[var(--foreground)] border border-[var(--border)]" {...props} />
  ),
};

interface MdxProps {
  code: string;
  components?: Record<string, React.ComponentType<any>>;
}

export function MdxContent({ code, components = {} }: MdxProps) {
  const Component = useMDXComponent(code);
  return <Component components={{ ...sharedComponents, ...components }} />;
}
