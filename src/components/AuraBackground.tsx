"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";

export function AuraBackground() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 50, stiffness: 100, mass: 1 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const backgroundGradient = useMotionTemplate`radial-gradient(100vmax at ${smoothX}px ${smoothY}px, rgba(184, 163, 117, 0.08) 0%, rgba(26, 42, 74, 0.03) 40%, rgba(253, 251, 247, 0) 80%)`;

  return (
    <>
      <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
        {/* The moving aura */}
        <motion.div
          className="absolute inset-[-50%] w-[200%] h-[200%] opacity-80 mix-blend-multiply"
          style={{ background: backgroundGradient }}
        />
      </div>
    </>
  );
}
