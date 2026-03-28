"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Sparkle } from '@phosphor-icons/react';

const textRevealContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const textRevealChild = {
  hidden: { y: "110%", opacity: 0 },
  visible: { 
    y: "0%", 
    opacity: 1,
    transition: { ease: [0.32, 0.72, 0, 1] as const, duration: 1.4 } 
  },
};

export function HeroSection() {
  return (
    <section className="relative min-h-[100dvh] w-full flex flex-col items-center justify-center z-10 overflow-hidden pt-32 pb-16">
      <div className="w-full flex flex-col md:flex-row items-center justify-between z-20 gap-16 md:gap-8">
        
        {/* Left Content Column (The Editorial Split - 50%) */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-start space-y-12">
          
          <motion.div
            variants={textRevealContainer}
            initial="hidden"
            animate="visible"
            className="font-serif text-[clamp(4rem,8vw,8rem)] leading-[0.85] tracking-tighter text-[#1A2A4A] relative z-20"
          >
            <div className="overflow-hidden pb-4 flex items-center gap-4">
              <motion.h1 variants={textRevealChild} className="italic pr-4">Ancient</motion.h1> 
              {/* Animated Floating Accent */}
              <motion.div 
                variants={textRevealChild}
                className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#B8A375] flex items-center justify-center -rotate-12 mt-4 double-bezel-outer shadow-[0_12px_48px_-4px_rgba(184,163,117,0.4)]"
              >
                <div className="w-full h-full rounded-full bg-[#B8A375] border border-white/20 flex items-center justify-center shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)]">
                  <Sparkle weight="light" className="text-white w-8 h-8 md:w-10 md:h-10" />
                </div>
              </motion.div>
            </div>
            <div className="overflow-hidden pb-4">
              <motion.h1 variants={textRevealChild}>Wisdom.</motion.h1>
            </div>
            <div className="overflow-hidden pb-4">
              <motion.h1 variants={textRevealChild} className="font-sans font-medium text-[#8092B7] tracking-tight text-balance">
                Modern <span className="text-[#1A2A4A] italic">Meditation.</span>
              </motion.h1>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.8, ease: [0.32, 0.72, 0, 1] }}
            className="max-w-[42ch] text-[1.125rem] text-[#1A2A4A]/70 font-sans font-light leading-relaxed text-pretty ml-2 border-l border-[#B8A375]/30 pl-6"
          >
            Digital and physical sanctuaries for the conscious mind. Connect with a community that values depth, devotion, and growth.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 1, ease: [0.32, 0.72, 0, 1] }}
            className="ml-2"
          >
            {/* Button-in-Button Trailing Icon & Magnetic Effect */}
            <button className="group flex items-center bg-[#1A2A4A] rounded-full p-2 pl-8 cursor-none interactive active:scale-[0.98] shadow-[0_20px_40px_-15px_rgba(26,42,74,0.3)]">
              <span className="text-[#FDFBF7] font-sans uppercase tracking-[0.2em] text-[10px] md:text-xs font-bold mr-6">
                Join the Movement
              </span>
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:bg-[#B8A375] group-hover:scale-105 group-hover:-translate-y-[1px]">
                <ArrowUpRight weight="light" className="text-[#FDFBF7] w-5 h-5 group-hover:translate-x-[1px] group-hover:-translate-y-[1px] transition-transform duration-500" />
              </div>
            </button>
          </motion.div>
        </div>

        {/* Right Content Column (Staggered Interactive Cards inside Split) */}
        <div className="w-full md:w-1/2 h-[60vh] md:h-[80vh] relative flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 64, rotate: -2 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 1.4, delay: 0.4, ease: [0.32, 0.72, 0, 1] }}
            className="absolute right-0 md:right-8 top-1/2 -translate-y-1/2 w-[85%] max-w-[400px] aspect-[3/4] z-10"
          >
            <div className="w-full h-full double-bezel-outer bg-white origin-bottom hover:rotate-2 transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group">
              <div className="double-bezel-inner relative">
                <img 
                  src="/VrindavanYatra-451.webp"
                  onError={(e) => { e.currentTarget.src = 'https://picsum.photos/seed/sanga1/800/1000' }}
                  alt="Sanctuary architecture"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-[2000ms] ease-out"
                />
                <div className="absolute top-4 left-4 rounded-full bg-[#FDFBF7]/90 backdrop-blur-md px-4 py-2 shadow-sm border border-black/5">
                  <span className="font-sans text-[10px] uppercase tracking-[0.2em] font-bold text-[#1A2A4A]">Est. 2013</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 100, x: -40, rotate: -6 }}
            animate={{ opacity: 1, y: 40, x: -40, rotate: -6 }}
            transition={{ duration: 1.5, delay: 0.6, ease: [0.32, 0.72, 0, 1] }}
            className="absolute left-0 md:-left-8 bottom-12 w-[60%] max-w-[280px] aspect-square z-20"
          >
            <div className="w-full h-full double-bezel-outer shadow-[0_30px_60px_-20px_rgba(0,0,0,0.15)] origin-top-left hover:rotate-[-2deg] transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group">
              <div className="double-bezel-inner relative bg-[#1A2A4A]">
                <img 
                  src="https://picsum.photos/seed/sanga2/600/600"
                  alt="Community gathering"
                  className="w-full h-full object-cover mix-blend-luminosity opacity-60 group-hover:mix-blend-normal group-hover:opacity-100 transition-all duration-1000"
                />
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
