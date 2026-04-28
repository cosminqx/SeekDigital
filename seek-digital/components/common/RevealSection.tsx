"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type RevealSectionProps = {
  children: ReactNode;
  className?: string;
  as?: "section" | "div";
  delay?: number;
};

export default function RevealSection({ children, className, as = "section", delay = 0 }: RevealSectionProps) {
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.18 });
  const Component = as === "section" ? motion.section : motion.div;

  return (
    <Component
      ref={ref as never}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={fadeInUp}
      transition={{ delay }}
      className={cn(className)}
    >
      {children}
    </Component>
  );
}
