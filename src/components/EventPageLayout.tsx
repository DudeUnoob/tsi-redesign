"use client";

import { motion } from "framer-motion";
import { 
  ArrowUpRight, UsersThree, MusicNotes, BowlFood, 
  Campfire, Waves, HandHeart, Sparkle, Chats, Student, Mountains, Tent
} from "@phosphor-icons/react";
import Link from "next/link";
import React, { useRef } from "react";

type Stat = { label: string; value: string };
type Highlight = string;

export type EventPageLayoutProps = {
  title: string;
  image: string;
  stats: Stat[];
  description: string;
  highlights?: Highlight[];
  highlightIcon?: React.ReactNode;
  bentoSpans?: string[]; 
  ctaLabel: string;
  ctaHref: string;
  note?: string;
  vibe?: "luxury" | "glass" | "structural";
  heroLayout?: "split-right" | "split-left" | "cascade";
  themeColor?: "default" | "orange" | "sky" | "emerald" | "purple" | "rose" | "tropical";
  children?: React.ReactNode;
};

const THEMES = {
  default: { text: "text-[#B8A375]", bg: "bg-[#B8A375]", shadow: "shadow-[#B8A375]/30", rgb: "184, 163, 117", gradient: "from-[#B8A375]" },
  orange: { text: "text-orange-500", bg: "bg-orange-500", shadow: "shadow-orange-500/30", rgb: "249, 115, 22", gradient: "from-orange-500" },
  sky: { text: "text-sky-500", bg: "bg-sky-500", shadow: "shadow-sky-500/30", rgb: "14, 165, 233", gradient: "from-sky-500" },
  emerald: { text: "text-emerald-500", bg: "bg-emerald-500", shadow: "shadow-emerald-500/30", rgb: "16, 185, 129", gradient: "from-emerald-500" },
  purple: { text: "text-purple-500", bg: "bg-purple-500", shadow: "shadow-purple-500/30", rgb: "168, 85, 247", gradient: "from-purple-500" },
  rose: { text: "text-rose-500", bg: "bg-rose-500", shadow: "shadow-rose-500/30", rgb: "244, 63, 94", gradient: "from-rose-500" },
  tropical: { text: "text-[#0F5132]", bg: "bg-[#0F5132]", shadow: "shadow-[#FFD700]/50", rgb: "15, 81, 50", gradient: "from-[#0F5132] via-[#FFD700]" },
};

export function EventPageLayout({
  title,
  image,
  stats,
  description,
  highlights,
  highlightIcon,
  bentoSpans,
  ctaLabel,
  ctaHref,
  note,
  vibe = "luxury",
  heroLayout = "split-right",
  themeColor = "default",
  children,
}: EventPageLayoutProps) {
  const Icon = highlightIcon || <ArrowUpRight weight="duotone" />;
  const activeTheme = THEMES[themeColor] || THEMES.default;
  
  // Theme resolution
  const isDark = vibe === "glass";
  const isStructural = vibe === "structural";

  const outerBezel = isDark ? "double-bezel-outer-dark bg-white/5" : "double-bezel-outer bg-black/5";
  const innerBezel = isDark ? "double-bezel-inner-dark border border-white/10" : "double-bezel-inner border border-black/5";
  
  const textColor = isDark ? "text-white" : "text-[#1A2A4A]";
  const mutedTextColor = isDark ? "text-white/70" : "text-[#1A2A4A]/70";
  const accentColor = activeTheme.text;
  
  const ctaBtnBg = isDark ? "bg-white text-[#0D182E]" : "bg-[#1A2A4A] text-white";
  const ctaIconBg = isDark ? "bg-black/5" : "bg-white/10";
  const ctaIconColor = isDark ? "text-[#0D182E]" : "text-white";

  // Layout resolution
  const isReverseSplit = heroLayout === "split-left";
  const isCascade = heroLayout === "cascade";

  return (
    <div className={`pt-32 pb-24 md:pb-48 overflow-hidden relative ${isDark ? "bg-[#050505]" : ""}`}>
      
      {/* Delight: Animated Ambient Background Blobs matched to Theme */}
      <div className="absolute top-0 inset-x-0 w-full h-[800px] overflow-hidden pointer-events-none -z-10">
        <motion.div 
          animate={{ x: [0, 100, 0], y: [0, -50, 0], scale: [1, 1.1, 1] }} 
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className={`absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-gradient-to-br ${activeTheme.gradient}/[0.08] to-transparent blur-[120px] rounded-[100%]`} 
        />
        <motion.div 
          animate={{ x: [0, -80, 0], y: [0, 60, 0], scale: [1, 1.2, 1] }} 
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className={`absolute top-[10%] right-[-10%] w-[50%] h-[50%] bg-gradient-to-bl ${isDark ? "from-white/[0.03]" : "from-[#1A2A4A]/[0.05]"} to-transparent blur-[120px] rounded-[100%]`} 
        />
      </div>

      {/* Hero Section */}
      <section className="max-w-[1400px] mx-auto px-4 md:px-8 xl:px-0 mb-24 md:mb-32">
        {isCascade ? (
          // CASCADE Z-AXIS LAYOUT
          <div className="flex flex-col items-center relative gap-8 z-10 pt-12 md:pt-24 pb-12">
            <motion.div
              initial={{ opacity: 0, y: 50, rotate: -2 }}
              animate={{ opacity: 1, y: 0, rotate: -2 }}
              transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.1 }}
              className="absolute top-0 right-0 left-0 bottom-32 -z-10 opacity-30 md:opacity-50 xl:opacity-60 blur-sm mix-blend-overlay pointer-events-none"
            >
              <img src={image} className="w-full h-full object-cover rounded-3xl" alt="" />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
              className={`w-full max-w-4xl text-center z-10 p-8 md:p-16 rounded-[2.5rem] backdrop-blur-2xl border ${isDark ? "bg-white/5 border-white/10" : "bg-white/80 border-black/10 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)]"}`}
            >
              <h1 className={`font-serif text-[clamp(3.5rem,7vw,6.5rem)] ${textColor} tracking-tighter leading-[0.9] text-balance mb-6 mx-auto`}>
                {title}
              </h1>
              <p className={`text-lg md:text-xl ${mutedTextColor} font-sans font-light leading-relaxed max-w-[55ch] text-pretty mx-auto`}>
                {description}
              </p>
              
              {/* Delight: Spring-loaded CTA */}
              <div className="flex justify-center mt-8">
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.94 }} transition={{ type: "spring", stiffness: 400, damping: 12 }}>
                  <Link
                    href={ctaHref}
                    target="_blank"
                    className={`group relative z-10 ${ctaBtnBg} pl-6 pr-2 py-2 rounded-full font-sans font-bold uppercase tracking-[0.2em] text-xs flex items-center gap-6 shadow-xl w-max`}
                  >
                    <span className="py-2.5">{ctaLabel}</span>
                    <motion.div 
                      transition={{ type: "spring", stiffness: 300, damping: 10 }}
                      className={`w-10 h-10 rounded-full ${ctaIconBg} flex items-center justify-center group-hover:bg-[#1A2A4A]/20 transition-colors group-hover:scale-105 origin-center group-hover:rotate-45`}
                    >
                      <ArrowUpRight weight="bold" className={`w-4 h-4 ${ctaIconColor}`} />
                    </motion.div>
                  </Link>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 40, rotate: 2 }}
              animate={{ opacity: 1, scale: 1, y: 0, rotate: 2 }}
              transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.3 }}
              className="w-full max-w-3xl mt-[-60px] md:mt-[-100px] z-20 origin-center"
            >
              <div className={`${outerBezel} shadow-[0_30px_60px_-15px_rgba(0,0,0,0.4)]`}>
                <div className={`${innerBezel} h-[300px] md:h-[450px] relative group overflow-hidden`}>
                  <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-[3000ms] ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 shadow-[inset_0_1px_3px_rgba(255,255,255,0.2)] pointer-events-none" />
                </div>
              </div>
            </motion.div>
          </div>
        ) : (
          // SPLIT LAYOUT
          <div className={`flex flex-col md:flex-row gap-12 md:gap-16 items-stretch ${isReverseSplit ? "md:flex-row-reverse" : ""}`}>
            <div className="w-full md:w-[45%] lg:w-1/2 flex flex-col pt-8 md:pt-16">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.1 }}
                className="mb-8"
              >
                <h1 className={`font-serif text-[clamp(4rem,7vw,6.5rem)] ${textColor} tracking-tighter leading-[0.9] text-balance mb-6`}>
                  {title}
                </h1>
                <p className={`text-lg md:text-xl ${mutedTextColor} font-sans font-light leading-relaxed max-w-[55ch] text-pretty`}>
                  {description}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
                className="mt-auto hidden md:block pt-8"
              >
                <div className="flex flex-col gap-4 items-start">
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.94 }} transition={{ type: "spring", stiffness: 400, damping: 12 }}>
                    <Link
                      href={ctaHref}
                      target="_blank"
                      className={`group relative z-10 ${ctaBtnBg} pl-6 pr-2 py-2 rounded-full font-sans font-bold uppercase tracking-[0.2em] text-xs flex items-center gap-6 shadow-xl`}
                    >
                      <span className="py-2.5">{ctaLabel}</span>
                      <motion.div 
                        transition={{ type: "spring", stiffness: 300, damping: 10 }}
                        className={`w-10 h-10 rounded-full ${ctaIconBg} flex items-center justify-center transition-colors group-hover:scale-105 origin-center group-hover:translate-x-1 group-hover:-translate-y-1`}
                      >
                        <ArrowUpRight weight="bold" className={`w-4 h-4 ${ctaIconColor}`} />
                      </motion.div>
                    </Link>
                  </motion.div>
                  {note && (
                    <p className={`${mutedTextColor} font-sans font-light text-[11px] uppercase tracking-[0.1em] max-w-[40ch] leading-relaxed text-pretty`}>
                      {note}
                    </p>
                  )}
                </div>
              </motion.div>
            </div>

            <div className="w-full md:w-[55%] lg:w-1/2 min-h-[450px]">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
                className="w-full h-full"
              >
                <div className={`${outerBezel} h-full`}>
                  <div className={`${innerBezel} relative overflow-hidden h-full min-h-[450px] group`}>
                    <img
                      src={image}
                      alt={title}
                      className="absolute inset-0 w-full h-full object-cover origin-center transition-transform duration-[3000ms] ease-out group-hover:scale-105"
                    />
                    <div className={`absolute inset-0 ${isDark ? "shadow-[inset_0_1px_3px_rgba(255,255,255,0.1)]" : "shadow-[inset_0_1px_3px_rgba(0,0,0,0.1)]"} pointer-events-none`} />
                  </div>
                </div>
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.3 }}
              className="md:hidden w-full mt-4"
            >
              <div className="flex flex-col gap-4 items-start w-full">
                <motion.div className="w-full" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.96 }} transition={{ type: "spring", stiffness: 400, damping: 12 }}>
                  <Link
                    href={ctaHref}
                    target="_blank"
                    className={`group w-full justify-between z-10 ${ctaBtnBg} pl-6 pr-2 py-2 rounded-full font-sans font-bold uppercase tracking-[0.2em] text-xs flex items-center gap-4 shadow-xl`}
                  >
                    <span className="py-2.5">{ctaLabel}</span>
                    <motion.div 
                      transition={{ type: "spring", stiffness: 300, damping: 10 }}
                      className={`w-10 h-10 rounded-full ${ctaIconBg} flex items-center justify-center transition-colors group-hover:scale-105 origin-center group-hover:translate-x-1 group-hover:-translate-y-1`}
                    >
                      <ArrowUpRight weight="bold" className={`w-4 h-4 ${ctaIconColor}`} />
                    </motion.div>
                  </Link>
                </motion.div>
                {note && (
                  <p className={`${mutedTextColor} font-sans font-light text-[11px] uppercase tracking-[0.1em] text-pretty`}>
                    {note}
                  </p>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </section>

      {/* Asymmetrical Bento Grid (Stats) */}
      <section className="max-w-[1400px] mx-auto px-4 md:px-8 xl:px-0 mb-24 md:mb-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 group/bento">
          {stats.map((stat, i) => {
            let colSpanClass = "md:col-span-12"; 
            let heightClass = "min-h-[140px]";
            
            if (bentoSpans && bentoSpans[i]) {
              colSpanClass = bentoSpans[i];
              heightClass = "min-h-[160px] md:min-h-[200px]";
            } else if (stats.length === 4) {
              if (i === 0) colSpanClass = "md:col-span-4";
              if (i === 1) colSpanClass = "md:col-span-8";
              if (i === 2) colSpanClass = "md:col-span-7";
              if (i === 3) colSpanClass = "md:col-span-5";
              heightClass = i === 1 || i === 2 ? "min-h-[160px] md:min-h-[220px]" : "min-h-[140px] md:min-h-[180px]";
            } else if (stats.length === 3) {
              if (i === 0) colSpanClass = "md:col-span-12 lg:col-span-6";
              if (i === 1) colSpanClass = "md:col-span-6 lg:col-span-3";
              if (i === 2) colSpanClass = "md:col-span-6 lg:col-span-3";
              heightClass = "min-h-[160px] md:min-h-[200px]";
            }

            return (
              <TrackedBentoCard 
                key={stat.label}
                stat={stat} 
                i={i}
                colSpanClass={colSpanClass}
                heightClass={heightClass}
                outerBezel={outerBezel}
                innerBezel={innerBezel}
                isStructural={isStructural}
                isDark={isDark}
                textColor={textColor}
                accentColor={accentColor}
                activeTheme={activeTheme}
              />
            );
          })}
        </div>
      </section>

      {/* Highlights */}
      {highlights && highlights.length > 0 && (
        <section className="max-w-[1400px] mx-auto px-4 md:px-8 xl:px-0 mb-24 md:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="mb-12"
          >
            <h2 className={`font-serif text-[clamp(2.5rem,5vw,4.5rem)] ${textColor} tracking-tighter leading-none mb-4`}>
              <span className={`${accentColor} italic pr-2`}>The</span> Experience
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {highlights.map((h, i) => {
              const HL_SPANS = ["lg:col-span-8", "lg:col-span-4", "lg:col-span-5", "lg:col-span-7", "lg:col-span-12", "lg:col-span-6", "lg:col-span-6", "lg:col-span-4", "lg:col-span-8"];
              const colSpan = HL_SPANS[i % HL_SPANS.length];
              return (
              <motion.div
                key={h}
                initial={{ opacity: 0, scale: 0.98, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 300, damping: 20, delay: i * 0.05 }}
                className={`${outerBezel} ${isStructural ? "bg-white border-[#1A2A4A]/5 shadow-none" : "bg-white/50"} col-span-1 md:col-span-12 ${colSpan} group relative overflow-hidden cursor-default`}
              >
                <div className={`${innerBezel} p-8 md:p-12 lg:p-16 flex flex-col gap-8 h-full min-h-[300px] md:min-h-[400px] relative overflow-hidden ${isStructural ? "bg-white border-[#1A2A4A]/5" : ""}`}>
                  
                  {/* Watermark Icon */}
                  <WatermarkIcon text={h} isDark={isDark} />
                  
                  {/* Animated gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${isDark ? "from-white/[0.04]" : "from-[#1A2A4A]/[0.04]"} to-transparent translate-y-[100%] group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] pointer-events-none`} />

                  <motion.div 
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                    whileHover={{ rotate: 15, scale: 1.1 }}
                    className={`w-16 h-16 lg:w-20 lg:h-20 rounded-full border ${isDark ? "border-white/10 bg-white/5 shadow-inner" : "border-[#1A2A4A]/10 bg-[#1A2A4A]/[0.02] shadow-sm"} flex items-center justify-center shrink-0 origin-center relative z-10 backdrop-blur-md`}
                  >
                     <DynamicHighlightIcon text={h} fallbackIcon={Icon} activeTheme={activeTheme} />
                  </motion.div>
                  
                  <h3 className={`font-serif ${isDark ? "text-white" : "text-[#1A2A4A]"} tracking-tighter text-[clamp(2rem,4vw,3.5rem)] leading-[0.9] mt-auto relative z-10 text-balance`}>
                    {h}
                  </h3>
                </div>
              </motion.div>
            )})}
          </div>
        </section>
      )}

      {children}

      {/* Final CTA Section */}
      <section className="max-w-[1400px] mx-auto px-4 md:px-8 xl:px-0 mt-32 md:mt-48 relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        >
          <div className="double-bezel-outer-dark bg-white/5 overflow-hidden">
            <div className="double-bezel-inner-dark p-12 md:p-24 lg:p-32 flex flex-col md:flex-row items-center justify-between text-center md:text-left relative border border-white/10">
              
              {/* Delight: Ambient Animated Mesh Gradients explicitly matching the event theme */}
              <motion.div 
                animate={{ x: [0, 40, 0], scale: [1, 1.2, 1] }} 
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className={`absolute top-[-20%] left-[-10%] w-[50%] h-[120%] bg-gradient-to-tr ${activeTheme.gradient}/[0.15] to-transparent blur-[80px] md:blur-[120px] pointer-events-none rounded-full`} 
              />
              <motion.div 
                animate={{ x: [0, -30, 0], scale: [1, 1.1, 1] }} 
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                className={`absolute bottom-[-20%] right-[-10%] w-[40%] h-[120%] bg-gradient-to-bl ${isDark ? "from-black/50" : "from-white/10"} to-transparent blur-[80px] md:blur-[120px] pointer-events-none rounded-full`} 
              />

              <div className="relative z-10 max-w-xl mb-12 md:mb-0 md:pr-12">
                <span className={`inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[10px] md:text-xs uppercase tracking-[0.3em] font-medium text-white mb-8 shadow-lg`}>
                  <motion.span 
                    animate={{ scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }} 
                    transition={{ duration: 2, repeat: Infinity }}
                    className={`w-2 h-2 rounded-full ${activeTheme.bg} ${activeTheme.shadow}`} 
                  />
                  Join Us
                </span>
                <h3 className="font-serif text-[clamp(2.5rem,5vw,5.5rem)] text-white tracking-tighter leading-[0.9] text-balance mb-6">
                  Ready to lock your spot?
                </h3>
                {note && (
                  <p className="text-white/60 font-sans font-light text-lg md:text-xl text-pretty max-w-md mx-auto md:mx-0 leading-relaxed">
                    {note}
                  </p>
                )}
              </div>

              <div className="relative z-10 shrink-0">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 400, damping: 15 }}>
                  <Link
                    href={ctaHref}
                    target="_blank"
                    className="group relative inline-flex z-10 bg-white text-[#1A2A4A] pl-8 pr-2 py-2 rounded-full font-sans font-bold uppercase tracking-[0.2em] text-[13px] md:text-sm items-center gap-6 shadow-[0_30px_60px_-15px_rgba(255,255,255,0.15)]"
                  >
                    <span className="py-3.5">{ctaLabel}</span>
                    <motion.div 
                      transition={{ type: "spring", stiffness: 300, damping: 10 }}
                      className="w-12 h-12 rounded-full bg-black/5 flex items-center justify-center group-hover:bg-[#1A2A4A]/5 group-hover:scale-105 origin-center group-hover:rotate-12 transition-colors"
                    >
                      <ArrowUpRight weight="bold" className="w-5 h-5 text-[#1A2A4A]" />
                    </motion.div>
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

// Delight component: Mouse Tracking Glow Bento Card
function TrackedBentoCard({ stat, i, colSpanClass, heightClass, outerBezel, innerBezel, isStructural, isDark, textColor, accentColor, activeTheme }: any) {
  const cardRef = React.useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty("--mouse-x", `${x}px`);
    cardRef.current.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4, scale: 1.01 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 200, damping: 20, delay: i * 0.1 }}
      className={`${outerBezel} ${isStructural ? "bg-white border-[#1A2A4A]/5 shadow-none" : "bg-white/50"} col-span-1 ${colSpanClass} group/card relative`}
    >
      <div className={`${innerBezel} p-8 flex flex-col justify-end relative overflow-hidden ${heightClass} ${isStructural ? "bg-white border-[#1A2A4A]/5" : ""}`}>
        
        {/* Glow overlay mapped to Mouse position and Active Theme color */}
        <div 
          className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover/card:opacity-100 z-0" 
          style={{ 
            background: `radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), rgba(${activeTheme.rgb}, 0.15), transparent 40%)` 
          }} 
        />
        
        {/* Animated dot */}
        <div className={`absolute top-6 right-6 md:top-8 md:right-8 w-2.5 h-2.5 rounded-full ${activeTheme.bg} transition-all duration-300 group-hover/card:scale-150 ${activeTheme.shadow} animate-pulse/20 z-10`} />
        
        <div className="relative z-10 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover/card:translate-x-1">
          <span className={`text-[10px] md:text-xs uppercase tracking-[0.3em] font-bold ${accentColor} block mb-3 transition-colors duration-300`}>
            {stat.label}
          </span>
          <span className={`font-serif text-[clamp(2rem,4vw,3.5rem)] ${textColor} tracking-tighter block leading-none`}>
            {stat.value}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

// Bolder component: Dynamic Highlight Icons Matcher
function DynamicHighlightIcon({ text, fallbackIcon, activeTheme }: any) {
  const l = text.toLowerCase();
  let IconCmp = null;
  if (l.includes("sanga") || l.includes("association") || l.includes("friend") || l.includes("team") || l.includes("group") || l.includes("counselor")) IconCmp = UsersThree;
  else if (l.includes("kirtan") || l.includes("music") || l.includes("chant")) IconCmp = MusicNotes;
  else if (l.includes("prasadam") || l.includes("food") || l.includes("eat") || l.includes("meal")) IconCmp = BowlFood;
  else if (l.includes("speaker") || l.includes("discussion") || l.includes("seminar") || l.includes("talk") || l.includes("class") || l.includes("topic")) IconCmp = Chats;
  else if (l.includes("workshop") || l.includes("activity") || l.includes("build") || l.includes("project")) IconCmp = HandHeart;
  else if (l.includes("water") || l.includes("swim") || l.includes("beach") || l.includes("lake") || l.includes("sport")) IconCmp = Waves;
  else if (l.includes("hike") || l.includes("nature") || l.includes("camp") || l.includes("fire") || l.includes("outdoor") || l.includes("bonfire")) IconCmp = Campfire;
  else if (l.includes("mountain") || l.includes("peak")) IconCmp = Mountains;
  else if (l.includes("study") || l.includes("learn") || l.includes("student")) IconCmp = Student;
  else if (l.includes("retreat")) IconCmp = Tent;
  
  if (IconCmp) {
    return <IconCmp weight="duotone" className={`w-8 h-8 lg:w-10 lg:h-10 ${activeTheme.text}`} />;
  }
  
  if (React.isValidElement(fallbackIcon)) {
    return React.cloneElement(fallbackIcon as React.ReactElement<any>, { className: `w-8 h-8 lg:w-10 lg:h-10 ${activeTheme.text}`});
  }
  
  return <Sparkle weight="duotone" className={`w-8 h-8 lg:w-10 lg:h-10 ${activeTheme.text}`} />;
}

// Bolder component: Massive Watermark Behind Highlights
function WatermarkIcon({ text, isDark }: any) {
  const l = text.toLowerCase();
  let IconCmp = Sparkle;
  if (l.includes("sanga") || l.includes("association") || l.includes("friend") || l.includes("team") || l.includes("group") || l.includes("counselor")) IconCmp = UsersThree;
  else if (l.includes("kirtan") || l.includes("music") || l.includes("chant")) IconCmp = MusicNotes;
  else if (l.includes("prasadam") || l.includes("food") || l.includes("eat") || l.includes("meal")) IconCmp = BowlFood;
  else if (l.includes("speaker") || l.includes("discussion") || l.includes("seminar") || l.includes("talk") || l.includes("class") || l.includes("topic")) IconCmp = Chats;
  else if (l.includes("workshop") || l.includes("activity") || l.includes("build") || l.includes("project")) IconCmp = HandHeart;
  else if (l.includes("water") || l.includes("swim") || l.includes("beach") || l.includes("lake") || l.includes("sport")) IconCmp = Waves;
  else if (l.includes("hike") || l.includes("nature") || l.includes("camp") || l.includes("fire") || l.includes("outdoor") || l.includes("bonfire")) IconCmp = Campfire;
  else if (l.includes("mountain") || l.includes("peak")) IconCmp = Mountains;
  else if (l.includes("study") || l.includes("learn") || l.includes("student")) IconCmp = Student;
  else if (l.includes("retreat")) IconCmp = Tent;

  return <IconCmp weight="fill" className={`w-[250px] h-[250px] lg:w-[350px] lg:h-[350px] absolute -bottom-16 -right-16 md:-bottom-24 md:-right-24 ${isDark ? 'text-white/[0.03]' : 'text-[#1A2A4A]/[0.03]'} pointer-events-none group-hover:scale-110 group-hover:-rotate-12 transition-transform duration-[1500ms] ease-out`} />;
}
