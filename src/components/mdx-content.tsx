"use client";

import React from "react";
import * as runtime from "react/jsx-runtime";
import Link from "next/link";
import { Copy, Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";

function CodeBlock(props: React.HTMLAttributes<HTMLPreElement>) {
  const ref = React.useRef<HTMLPreElement>(null);
  const [copied, setCopied] = React.useState(false);
  const copy = async () => {
    const text = ref.current?.innerText ?? "";
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      /* ignore */
    }
  };
  return (
    <div className="relative group/code my-6">
      <button
        type="button"
        onClick={copy}
        aria-label="Copy code"
        className="absolute top-2.5 right-2.5 z-10 inline-flex items-center gap-1 h-7 px-2 rounded-md border border-[var(--border)] bg-[var(--surface)] text-[10px] font-medium text-[var(--foreground-subtle)] opacity-0 group-hover/code:opacity-100 hover:text-[var(--foreground)] transition-opacity"
      >
        {copied ? <Check className="w-3 h-3 text-[var(--success)]" /> : <Copy className="w-3 h-3" />}
        {copied ? "Copied" : "Copy"}
      </button>
      <pre
        ref={ref}
        className="overflow-x-auto rounded-xl border border-[var(--border)] bg-[var(--background-tertiary)] p-4 font-mono text-sm leading-relaxed [&_code]:bg-transparent [&_code]:border-0 [&_code]:p-0 [&_code]:text-[var(--foreground)]"
        {...props}
      />
    </div>
  );
}

// Hook to parse compiled MDX code string
const useMDXComponent = (code: string) => {
  return React.useMemo(() => {
    const fn = new Function(code);
    return fn(runtime).default;
  }, [code]);
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
      info: "border-[var(--info)]/25 bg-[var(--info)]/8 text-[var(--foreground-muted)]",
      warning: "border-[var(--warning)]/25 bg-[var(--warning)]/8 text-[var(--foreground-muted)]",
      success: "border-[var(--success)]/25 bg-[var(--success)]/8 text-[var(--foreground-muted)]",
      error: "border-[var(--error)]/25 bg-[var(--error)]/8 text-[var(--foreground-muted)]",
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
  pre: CodeBlock,
  code: (props: React.HTMLAttributes<HTMLElement>) => (
    <code className="rounded bg-[var(--surface-hover)] px-[0.4rem] py-[0.2rem] font-mono text-xs font-semibold text-[var(--foreground)] border border-[var(--border)]" {...props} />
  ),
};

interface MdxProps {
  code: string;
  components?: Record<string, React.ComponentType<any>>; // eslint-disable-line @typescript-eslint/no-explicit-any
}

export function MdxContent({ code, components = {} }: MdxProps) {
  // eslint-disable-next-line react-hooks/static-components
  const Component = useMDXComponent(code);
  return <Component components={{ ...sharedComponents, ...components }} />;
}
