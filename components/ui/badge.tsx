import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "outline" | "accent";
}

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  const variants = {
    default: "glass-effect-sm text-foreground",
    outline: "border border-blue-400/30 text-muted bg-transparent",
    accent: "bg-blue-500/20 text-blue-300 border border-blue-400/40",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-lg px-3 py-1.5 text-xs font-medium uppercase tracking-[0.18em] transition-all duration-300",
        variants[variant],
        className,
      )}
      {...props}
    />
  );
}
