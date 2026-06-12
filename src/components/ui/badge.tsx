import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--ring)] focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-[var(--primary)] text-[var(--primary-foreground)]",
        secondary:
          "border-transparent bg-[var(--secondary)] text-[var(--secondary-foreground)]",
        destructive:
          "border-transparent bg-[var(--destructive)] text-white",
        outline: "border-[var(--border)] text-[var(--foreground)]",
        success:
          "border-transparent bg-[rgba(34,197,94,0.1)] text-[var(--success)]",
        warning:
          "border-transparent bg-[rgba(245,158,11,0.1)] text-[var(--warning)]",
        info: "border-transparent bg-[rgba(59,130,246,0.1)] text-[var(--info)]",
        gradient:
          "border-transparent bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] text-white",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
