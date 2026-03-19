"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Sparkle } from "@phosphor-icons/react";
import { useEffect, useRef } from "react";

const textRevealContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const textRevealChild = {
  hidden: { y: "110%", skewY: 5, opacity: 0 },
  visible: { 
    y: "0%", 
    skewY: 0, 
    opacity: 1,
    transition: { ease: [0.32, 0.72, 0, 1] as any, duration: 1.4 } 
  },
};

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const smoothConfig = { damping: 40, stiffness: 100, mass: 1 };
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const xSmooth = useSpring(mouseX, smoothConfig);
  const ySmooth = useSpring(mouseY, smoothConfig);

  const rotateX = useTransform(ySmooth, [-800, 800], [15, -15]);
  const rotateY = useTransform(xSmooth, [-800, 800], [-15, 15]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      mouseX.set(e.clientX - innerWidth / 2);
      mouseY.set(e.clientY - innerHeight / 2);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[100dvh] w-full flex flex-col items-center justify-center px-4 md:px-8 xl:px-0 z-10 overflow-hidden pt-24"
    >
      {/* BACKGROUND TYPOGRAPHY (BOLDER) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none z-0 opacity-[0.03]">
        <h1 className="font-serif text-[clamp(10rem,30vw,35rem)] leading-none tracking-tighter text-[#1A2A4A] whitespace-nowrap">
          SANGA
        </h1>
      </div>

      <div className="w-full max-w-[1400px] flex flex-col lg:flex-row items-center justify-between z-20 gap-16">
        
        {/* Left Content Column */}
        <div className="w-full lg:w-[60%] flex flex-col justify-center items-start space-y-12">
          
          {/* Typeset & Bolder: Massive Fluid Typography */}
          <motion.div
            variants={textRevealContainer}
            initial="hidden"
            animate="visible"
            className="font-serif text-fluid-hero text-[#1A2A4A] relative z-20"
          >
            <div className="overflow-hidden pb-4">
              <motion.h1 variants={textRevealChild} className="flex items-center gap-4">
                <span className="italic pr-4">Ancient</span> 
                {/* Colorize: Bright Gold Pop out of nowhere */}
                <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-[#B8A375] flex items-center justify-center -rotate-12 shadow-2xl shadow-[#B8A375]/40 mt-4">
                  <Sparkle weight="fill" className="text-[#FCFBF2] text-3xl md:text-5xl" />
                </div>
              </motion.h1>
            </div>
            <div className="overflow-hidden pb-4">
              <motion.h1 variants={textRevealChild}>
                Wisdom.
              </motion.h1>
            </div>
            <div className="overflow-hidden pb-4">
              <motion.h1 variants={textRevealChild} className="font-sans font-bold text-[#8092B7] uppercase tracking-tighter">
                Modern <span className="text-[#1A2A4A]">Meditation.</span>
              </motion.h1>
            </div>
          </motion.div>

          {/* Typeset: Clean, tightened intro paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.8, ease: [0.32, 0.72, 0, 1] }}
            className="max-w-[36ch] text-[1rem] md:text-[1.125rem] text-sanga-navy/80 font-sans font-light leading-relaxed text-balance border-l-2 border-sanga-gold pl-5 ml-2"
          >
            Digital and physical sanctuaries for the conscious mind. Connect with a community that values depth, devotion, and growth.
          </motion.p>

          {/* Colorize & Bolder: Substantial Button Architecture */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 1, ease: [0.32, 0.72, 0, 1] }}
            className="flex items-center gap-8 ml-2"
          >
            <button className="interactive group flex items-center bg-[#1A2A4A] rounded-full p-2 pl-8 pr-2 cursor-none shadow-[0_8px_32px_-8px_rgba(26,42,74,0.3)]">
              <span className="text-[#FCFBF2] font-sans uppercase tracking-[0.2em] text-xs font-bold mr-8">
                Join the Movement
              </span>
              <div className="w-14 h-14 rounded-full bg-[#FCFBF2]/10 flex items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:bg-[#B8A375] group-hover:scale-105 group-active:scale-95 group-hover:-translate-y-1 group-hover:shadow-xl group-hover:shadow-[#B8A375]/40">
                <ArrowRight weight="bold" className="text-[#FCFBF2] text-lg group-hover:-rotate-45 transition-transform duration-500" />
              </div>
            </button>
          </motion.div>
        </div>

        {/* Right Floating Element - Bolder & Colorize */}
        <div className="w-full lg:w-[40%] h-[50vh] lg:h-[80vh] flex items-center justify-center perspective-1000 mt-12 lg:mt-0 z-10">
          <motion.div
            style={{ rotateX, rotateY }}
            initial={{ opacity: 0, scale: 0.8, filter: "blur(20px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.8, delay: 0.5, ease: [0.32, 0.72, 0, 1] }}
            className="relative w-full max-w-[400px] aspect-[4/5] lg:aspect-[3/4]"
          >
            {/* Colorize: Offset bold accent shape blocking out the space */}
            <div className="absolute -inset-6 bg-[#1A2A4A] rounded-[2rem] translate-x-12 translate-y-12 rotate-6 z-0" />
            
            <div className="absolute inset-0 sanga-panel p-2 z-10 transform origin-bottom hover:rotate-2 transition-transform duration-1000 ease-spring">
              <div className="w-full h-full relative group rounded-[calc(2rem-8px)] overflow-hidden">
                <img 
                  src="/VrindavanYatra-451.webp"
                  alt="Sanctuary architecture"
                  className="img-dramatic"
                />
                
                {/* Typeset: Clean inset badge */}
                <div className="absolute top-6 left-6 rounded-full bg-[#FCFBF2] px-4 py-1.5 shadow-xl">
                  <span className="font-sans text-[10px] uppercase tracking-[0.2em] font-bold text-[#1A2A4A]">Est. 2013</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
