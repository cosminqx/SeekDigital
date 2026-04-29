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
    "border border-blue-500 bg-gradient-to-r from-blue-600 to-blue-500 text-white hover:from-blue-500 hover:to-blue-400 hover:border-blue-400 shadow-lg hover:shadow-blue-500/30",
  outline:
    "border border-blue-400/40 bg-blue-500/10 text-blue-300 hover:border-blue-300/60 hover:bg-blue-500/20 hover:text-blue-200",
  ghost: "bg-transparent text-blue-300 hover:bg-blue-500/10 hover:text-blue-200",
  link: "bg-transparent px-0 text-blue-400 hover:text-blue-300",
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
        "inline-flex items-center justify-center gap-2 rounded-lg font-medium tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 disabled:pointer-events-none disabled:opacity-50",
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
