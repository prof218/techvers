import React from "react";
import { marketplaces, type Marketplace } from "@/lib/jobs";
import { cn } from "@/lib/utils";

/**
 * Brand-colored monogram + name for a marketplace.
 * We render a styled monogram (not a fabricated logo file) to avoid
 * using marketplace brand assets we don't have rights to.
 */
export function MarketplaceBadge({
  marketplace,
  size = "md",
  showName = true,
  className,
}: {
  marketplace: Marketplace;
  size?: "sm" | "md" | "lg";
  showName?: boolean;
  className?: string;
}) {
  const m = marketplaces[marketplace];
  const box =
    size === "sm" ? "w-6 h-6 text-[10px]" : size === "lg" ? "w-11 h-11 text-sm" : "w-8 h-8 text-xs";

  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      <span
        aria-hidden="true"
        className={cn("rounded-lg flex items-center justify-center font-bold text-white shrink-0", box)}
        style={{ backgroundColor: m.color }}
      >
        {m.monogram}
      </span>
      {showName && (
        <span className="text-sm font-medium text-[var(--foreground)] truncate">{m.name}</span>
      )}
    </span>
  );
}
