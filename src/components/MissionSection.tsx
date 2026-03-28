"use client";

import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, y: 100, filter: "blur(10px)" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { ease: [0.32, 0.72, 0, 1] as const, duration: 1.2, delay: i * 0.1 },
  }),
};

export function MissionSection() {
  return (
    <section id="who-are-we" className="py-24 md:py-48 px-4 md:px-8 xl:px-0 w-full max-w-[1400px] mx-auto z-10 relative">
      
      {/* Typeset & Bolder: Extreme scale and layout jump */}
      <div className="flex flex-col mb-24 md:mb-32 relative z-20">
        <span className="inline-flex w-max items-center gap-3 rounded-full border border-black/5 bg-white px-6 py-2 text-[10px] md:text-xs uppercase tracking-[0.3em] font-bold text-[#8092B7] mb-8 tabular-nums shadow-sm">
          <span className="w-2 h-2 rounded-full bg-[#8092B7] animate-pulse" />
          01 // Our Foundation
        </span>
        <h2 className="font-serif text-[clamp(2.5rem,8vw,6.5rem)] leading-[0.9] text-[#1A2A4A] max-w-4xl tracking-tighter text-balance">
          Bridging the profound <span className="text-[#B8A375] italic">past</span> and the dynamic <span className="italic underline decoration-[#B8A375] decoration-2 underline-offset-8">present.</span>
        </h2>
      </div>

      {/* Asymmetrical Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-min">
        
        {/* Large Feature Card - Col Span 7 */}
        <motion.div
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={variants}
          className="md:col-span-7 group relative sanga-panel flex flex-col"
        >
          <div className="w-full h-[500px] md:h-[800px] relative sanga-panel-content">
            <img 
              src="https://picsum.photos/seed/tsi-sanctuary/1200/800" 
              alt="Community Retreat"
              className="img-dramatic"
            />
            <div className="absolute inset-0 bg-[#0D182E]/20 group-hover:bg-[#0D182E]/40 transition-colors duration-1000" />
            
            {/* Massive double-bezel tag block inside image */}
            <div className="absolute bottom-4 md:bottom-8 left-4 md:left-8 right-4 md:right-8 double-bezel-outer bg-[#FDFBF7]/40 backdrop-blur-2xl">
               <div className="double-bezel-inner bg-[#FDFBF7]/90 p-6 md:p-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                 <div className="max-w-md">
                   <h3 className="font-serif font-medium text-3xl md:text-4xl mb-4 text-[#1A2A4A] leading-tight text-balance tracking-tighter">Authentic <br/>Connection.</h3>
                   <p className="max-w-[42ch] text-[0.875rem] md:text-[1.125rem] text-[#1A2A4A]/70 font-sans font-light leading-relaxed border-l border-[#B8A375]/30 pl-5 text-pretty">Fostering a global family rooted in shared ideals, beyond surface-level interactions.</p>
                 </div>
                 {/* Perpetual Micro-Interaction: Live Status Badge */}
                 <div className="flex flex-col items-start md:items-end gap-2 shrink-0">
                    <motion.div 
                      animate={{ scale: [1, 1.05, 1] }} 
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm border border-black/5"
                    >
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-[10px] font-bold uppercase tracking-widest text-[#1A2A4A]">Live Vision</span>
                    </motion.div>
                 </div>
               </div>
            </div>
          </div>
        </motion.div>

        {/* Vertical Stack - Col Span 5 */}
        <div className="md:col-span-5 flex flex-col gap-6">
          
          {/* Bolder Dark Navy Card inside Double Bezel */}
          <motion.div
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={variants}
            className="flex-none h-[400px] md:h-[350px] group sanga-panel-dark"
          >
            <div className="relative w-full h-full sanga-panel-dark-content p-6 md:p-10 flex flex-col justify-end">
              {/* Colorize: Bright accent gradient bleeding from corner */}
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#B8A375] rounded-full blur-[80px] opacity-40 group-hover:opacity-70 transition-opacity duration-1000" />
              
              {/* Perpetual Motion: Typewriter / Float */}
              <motion.h3 
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="font-sans text-[clamp(5rem,12vw,12rem)] font-black absolute -right-4 -top-8 text-white/5 select-none pointer-events-none group-hover:scale-105 transition-transform duration-[3000ms] ease-out tabular-nums"
              >
                10k
              </motion.h3>
              
              <div className="relative z-10 w-full">
                <div className="w-12 h-[1px] bg-[#B8A375] mb-8" />
                <h4 className="font-serif text-4xl md:text-5xl mb-4 text-[#FDFBF7] tracking-tighter">
                  Inner Growth
                </h4>
                <p className="text-[#FDFBF7]/60 font-sans text-[10px] md:text-xs leading-relaxed uppercase tracking-[0.2em] font-bold">10,000+ Youth Reached</p>
              </div>
            </div>
          </motion.div>

          {/* Colorize: Full-bleed solid Sand/Gold block inside Double Bezel */}
          <motion.div
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={variants}
            className="flex-1 min-h-[426px] group p-1.5 md:p-2 bg-[#F7DCA5]/30 rounded-[2rem] border border-[#B8A375]/10 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)]"
          >
             <div className="w-full h-full bg-[#F7DCA5] rounded-[calc(2rem-0.375rem)] md:rounded-[calc(2rem-0.5rem)] shadow-[inset_0_1px_1px_rgba(255,255,255,0.5)] p-6 md:p-10 flex flex-col justify-between overflow-hidden relative">
               <div className="w-full h-full absolute inset-0 bg-gradient-to-br from-white/20 to-transparent pointer-events-none" />
               <motion.div 
                 animate={{ rotate: 360 }}
                 transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                 className="w-16 h-16 rounded-full border border-[#3C2A00]/10 flex items-center justify-center mb-8 bg-[#FDFBF7] shadow-sm relative z-10"
               >
                 <span className="font-serif text-[#3C2A00] font-bold text-2xl">ॐ</span>
               </motion.div>
               <div className="relative z-10 mt-auto">
                  <h4 className="font-serif text-4xl md:text-5xl font-medium text-[#3C2A00] mb-6 tracking-tighter text-balance">Sacred Spaces.</h4>
                  <p className="max-w-[42ch] text-[0.875rem] md:text-[1.125rem] text-[#3C2A00]/70 font-sans font-light leading-relaxed border-l border-[#B8A375]/40 pl-5 text-pretty">
                    Creating environments where the soul can rest and the mind can focus. Both physically and digitally.
                  </p>
               </div>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
