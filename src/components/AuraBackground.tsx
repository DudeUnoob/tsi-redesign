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

  const backgroundGradient = useMotionTemplate`radial-gradient(100vmax at ${smoothX}px ${smoothY}px, rgba(255, 192, 116, 0.45) 0%, rgba(255, 75, 75, 0.15) 30%, rgba(248, 249, 250, 0) 80%)`;

  return (
    <>
      <div className="fixed inset-0 pointer-events-none z-[-1] bg-[#F8F9FA] overflow-hidden">
        {/* The moving aura */}
        <motion.div
          className="absolute inset-[-50%] w-[200%] h-[200%] opacity-80 mix-blend-multiply"
          style={{ background: backgroundGradient }}
        />
        {/* Subtle noise texture */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>
    </>
  );
}
