"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [isFinePointer, setIsFinePointer] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 420, damping: 32, mass: 0.2 });
  const springY = useSpring(y, { stiffness: 420, damping: 32, mass: 0.2 });

  useEffect(() => {
    const media = window.matchMedia("(pointer: fine)");

    const update = () => setIsFinePointer(media.matches);
    update();
    media.addEventListener("change", update);

    const handleMove = (event: MouseEvent) => {
      x.set(event.clientX - 10);
      y.set(event.clientY - 10);
    };

    window.addEventListener("mousemove", handleMove);

    return () => {
      media.removeEventListener("change", update);
      window.removeEventListener("mousemove", handleMove);
    };
  }, [x, y]);

  if (!isFinePointer) {
    return null;
  }

  return (
    <motion.div
      className="cursor-dot pointer-events-none fixed left-0 top-0 z-[75] hidden h-5 w-5 rounded-full border border-accent/60 bg-accent/25 md:block"
      style={{ x: springX, y: springY }}
      aria-hidden="true"
    />
  );
}
