import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "accent" | "outline" | "ghost" | "link";
  size?: "default" | "sm" | "lg";
  asChild?: boolean;
}

const variantStyles: Record<NonNullable<ButtonProps["variant"]>, string> = {
  accent:
    "border border-transparent bg-accent text-black hover:border-white hover:bg-transparent hover:text-white",
  outline:
    "border border-[#2a2a2a] bg-transparent text-foreground hover:border-white hover:bg-transparent hover:text-white",
  ghost: "bg-transparent text-foreground hover:bg-white/5 hover:text-white",
  link: "bg-transparent px-0 text-accent hover:text-white",
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
        "inline-flex items-center justify-center gap-2 rounded-[2px] font-medium tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent disabled:pointer-events-none disabled:opacity-50",
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
