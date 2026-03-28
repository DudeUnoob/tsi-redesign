"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  // Raw mouse coordinates
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Inner dot (fast, tight spring)
  const dotSpringConfig = { damping: 25, stiffness: 400, mass: 0.1 };
  const dotX = useSpring(mouseX, dotSpringConfig);
  const dotY = useSpring(mouseY, dotSpringConfig);

  // Outer ring (slow, loose spring for lag effect)
  const ringSpringConfig = { damping: 28, stiffness: 280, mass: 0.5 };
  const ringX = useSpring(mouseX, ringSpringConfig);
  const ringY = useSpring(mouseY, ringSpringConfig);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    setIsVisible(true);

    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("button") ||
        target.closest("a") ||
        (target.hasAttribute("role") && target.getAttribute("role") === "button") ||
        target.classList.contains("interactive")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [mouseX, mouseY]);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer Ring */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 rounded-full border pointer-events-none z-[100] transform -translate-x-1/2 -translate-y-1/2 hidden md:block mix-blend-multiply"
        style={{
          x: ringX,
          y: ringY,
          scale: isHovering ? 2 : 1,
          backgroundColor: isHovering ? "rgba(184, 163, 117, 0.1)" : "transparent",
          borderColor: isHovering ? "transparent" : "rgba(184, 163, 117, 0.4)",
        }}
        transition={{ 
          scale: { type: "spring", stiffness: 300, damping: 20 },
          backgroundColor: { duration: 0.3 }
        }}
      />
      
      {/* Inner Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-[100] transform -translate-x-1/2 -translate-y-1/2 hidden md:block mix-blend-multiply"
        style={{
          x: dotX,
          y: dotY,
          backgroundColor: "rgba(184, 163, 117, 1)",
          scale: isHovering ? 0 : 1, // Disappear when hovering
        }}
        transition={{ scale: { duration: 0.2 } }}
      />
    </>
  );
}
