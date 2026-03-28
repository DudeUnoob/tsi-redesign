"use client";

import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, y: 100, filter: "blur(10px)" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { ease: [0.32, 0.72, 0, 1], duration: 1.2, delay: i * 0.1 },
  }),
};

export function MissionSection() {
  return (
    <section id="who-are-we" className="py-24 md:py-48 px-4 md:px-8 xl:px-0 max-w-[1400px] mx-auto z-10 relative">
      
      {/* Typeset & Bolder: Extreme scale and layout jump */}
      <div className="flex flex-col mb-32 relative z-20">
        <span className="inline-block font-sans text-xs uppercase tracking-[0.3em] font-bold text-[#8092B7] mb-8 tabular-nums">
          01 // Our Foundation
        </span>
        <h2 className="font-serif text-fluid-h2 text-[#1A2A4A] max-w-4xl text-balance">
          Bridging the profound <span className="text-[#B8A375] italic">past</span> and the dynamic <span className="italic underline decoration-[#B8A375] decoration-2 underline-offset-8">present.</span>
        </h2>
      </div>

      {/* Asymmetric Bento Grid - Colorize & Bolder */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-min">
        
        {/* Large Feature Card - Col Span 7 (Offset proportion) */}
        <motion.div
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="md:col-span-7 group relative sanga-panel cursor-none flex flex-col p-2 bg-white"
        >
          <div className="w-full h-[600px] md:h-[800px] relative rounded-[calc(2rem-8px)] overflow-hidden">
            <img 
              src="https://picsum.photos/seed/tsi-sanctuary/1200/800" 
              alt="Community Retreat"
              className="img-dramatic"
            />
            <div className="absolute inset-0 bg-[#0D182E]/20 group-hover:bg-transparent transition-colors duration-1000" />
            
            {/* Massive colorized tag block inside image */}
            <div className="absolute bottom-8 left-8 right-8 p-8 bg-[#FCFBF2]/95 backdrop-blur-xl rounded-[1.5rem] shadow-2xl flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border border-[#B8A375]/20">
              <div className="max-w-md">
                <h3 className="font-serif font-medium text-4xl mb-4 text-[#1A2A4A] leading-tight text-balance">Authentic <br/>Connection.</h3>
                <p className="max-w-[42ch] text-[1rem] md:text-[1.125rem] text-sanga-navy/75 font-sans font-light leading-relaxed border-l-2 border-sanga-gold pl-5 text-pretty">Fostering a global family rooted in shared ideals, beyond surface-level interactions.</p>
              </div>
              <div className="w-16 h-16 rounded-full bg-[#B8A375] text-[#FCFBF2] flex items-center justify-center shrink-0">
                <span className="font-bold text-2xl font-serif">A</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Vertical Stack - Col Span 5 */}
        <div className="md:col-span-5 flex flex-col gap-6">
          
          {/* Bolder: Extreme Number Scale on Dark Navy Card */}
          <motion.div
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex-none h-[350px] group sanga-panel-dark cursor-none p-10 flex flex-col justify-end relative overflow-hidden"
          >
            {/* Colorize: Bright accent gradient bleeding from corner */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#B8A375] rounded-full blur-[80px] opacity-40 group-hover:opacity-60 transition-opacity duration-1000" />
            
            <h3 className="font-sans text-fluid-number font-black absolute -right-4 -top-12 text-white/5 select-none pointer-events-none group-hover:scale-110 transition-transform duration-[3000ms] ease-out tabular-nums">
              10k
            </h3>
            
            <div className="relative z-10 w-full">
              <div className="w-12 h-1 bg-[#B8A375] mb-8" />
              <h4 className="font-serif text-5xl mb-4 text-[#FCFBF2]">
                Inner Growth
              </h4>
              <p className="text-[#FCFBF2]/60 font-sans text-sm leading-relaxed uppercase tracking-widest">10,000+ Youth Reached Nationally</p>
            </div>
          </motion.div>

          {/* Colorize: Full-bleed solid Sand/Gold block */}
          <motion.div
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex-1 min-h-[426px] group sanga-panel-sand cursor-none p-10 flex flex-col justify-between overflow-hidden relative"
          >
             <div className="w-full h-full absolute inset-0 bg-[#B8A375]/10 pointer-events-none" />
             <div className="w-16 h-16 rounded-full border-2 border-[#3C2A00]/10 flex items-center justify-center mb-8 bg-[#FCFBF2]">
               <span className="font-serif text-[#3C2A00] font-bold text-2xl">ॐ</span>
             </div>
             <div>
                <h4 className="font-serif text-5xl font-medium text-[#3C2A00] mb-6 tracking-tight text-balance">Sacred Spaces.</h4>
                <p className="max-w-[42ch] text-[1rem] md:text-[1.125rem] text-sanga-brown/80 font-sans font-light leading-relaxed border-l-2 border-sanga-gold pl-5 text-pretty">
                  Creating environments where the soul can rest and the mind can focus. Both physically and digitally.
                </p>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
