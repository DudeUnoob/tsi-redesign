"use client";

import { useEffect } from "react";
import { useMotionValue, useSpring, motion } from "framer-motion";

export default function DotCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const scale = useMotionValue(1);

  // Fast spring physics for lag-free responsiveness
  const springConfig = { damping: 20, stiffness: 300, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);
  const scaleSpring = useSpring(scale, { damping: 15, stiffness: 200, mass: 0.5 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 12);
      cursorY.set(e.clientY - 12);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Expand cursor if hovering over an interactive element
      if (
        target.tagName.toLowerCase() === "button" ||
        target.tagName.toLowerCase() === "a" ||
        target.closest("button") ||
        target.closest("a")
      ) {
        scale.set(3);
      } else {
        scale.set(1);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY, scale]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-6 h-6 rounded-full bg-secondary pointer-events-none z-[9999]"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
        scale: scaleSpring,
        mixBlendMode: "difference",
      }}
    />
  );
}
