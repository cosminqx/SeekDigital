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
    "border border-seek bg-seek-violet text-white hover:bg-seek-violet-glow hover:border-seek shadow-lg shadow-[0_0_30px_rgba(43,43,143,0.12)]",
  outline:
    "border border-seek/40 bg-seek-glass text-seek-plasma hover:border-seek hover:bg-[rgba(21,22,103,0.06)] hover:text-seek-violet",
  ghost: "bg-transparent text-seek-plasma hover:bg-[rgba(21,22,103,0.04)] hover:text-seek-violet",
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
        "inline-flex items-center justify-center gap-2 rounded-lg font-medium tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(43,43,143,0.18)] disabled:pointer-events-none disabled:opacity-50",
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
