"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "@/hooks/use-in-view";

type AnimatedCounterProps = {
  target: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
};

export default function AnimatedCounter({ target, suffix = "", prefix = "", duration = 2000 }: AnimatedCounterProps) {
  const { ref, isInView } = useInView<HTMLSpanElement>();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isInView) {
      return;
    }

    const start = performance.now();
    const frame = (time: number) => {
      const progress = Math.min((time - start) / duration, 1);
      setValue(Math.round(target * progress));

      if (progress < 1) {
        requestAnimationFrame(frame);
      }
    };

    const id = requestAnimationFrame(frame);

    return () => cancelAnimationFrame(id);
  }, [duration, isInView, target]);

  return (
    <motion.span ref={ref} className="font-display text-2xl font-bold uppercase tracking-[-0.03em] text-white">
      {prefix}
      {isInView ? value : 0}
      {suffix}
    </motion.span>
  );
}
