import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "outline" | "accent";
}

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  const variants = {
    default: "bg-nocturn/10 text-parchment border border-[#222222]",
    outline: "border border-[#222222] text-muted bg-transparent",
    accent: "bg-accent text-parchment border border-accent",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-[2px] px-3 py-1 text-xs font-medium uppercase tracking-[0.18em]",
        variants[variant],
        className,
      )}
      {...props}
    />
  );
}
