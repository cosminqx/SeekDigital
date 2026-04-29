import React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "accent" | "outline" | "ghost" | "link";
  size?: "default" | "sm" | "lg";
  asChild?: boolean;
}

const variantStyles: Record<NonNullable<ButtonProps["variant"]>, string> = {
  accent:
    "border border-seek bg-gradient-to-r from-[rgba(79,70,229,0.95)] to-[rgba(124,58,237,0.95)] text-white hover:from-[rgba(79,70,229,0.9)] hover:to-[rgba(124,58,237,0.9)] hover:border-seek shadow-lg hover:shadow-[rgba(124,58,237,0.24)]",
  outline:
    "border border-seek/40 bg-seek-glass text-seek-plasma hover:border-seek hover:bg-[rgba(124,58,237,0.06)] hover:text-seek-violet",
  ghost: "bg-transparent text-seek-plasma hover:bg-[rgba(124,58,237,0.04)] hover:text-seek-violet",
  link: "bg-transparent px-0 text-seek-violet hover:text-seek-violet",
};

const sizeStyles: Record<NonNullable<ButtonProps["size"]>, string> = {
  default: "h-12 px-5 text-sm",
  sm: "h-10 px-4 text-sm",
  lg: "h-14 px-6 text-base",
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { className, asChild = false, variant = "accent", size = "default", ...props },
  ref,
) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-lg font-medium tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(124,58,237,0.18)] disabled:pointer-events-none disabled:opacity-50",
        variantStyles[variant],
        sizeStyles[size],
        className,
      )}
      {...props}
    />
  );
});

Button.displayName = "Button";

export { Button };
