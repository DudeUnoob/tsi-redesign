"use client";

import { motion } from "framer-motion";

const values = [
  "To empower individuals to take the next step in their spiritual journey.",
  "To create opportunities for the next generation to serve together through active community.",
  "To inspire lasting and meaningful relationships.",
  "To provide and promote a medium where youth feel empowered & willing to serve in their unique capacity."
];

export function ProgramsSection() {
  return (
    <section id="programs" className="py-32 md:py-64 relative z-10 w-full overflow-hidden bg-[#FCFBF2]">
      {/* Bolder & Colorize: Massive diagonal field cutting through */}
      <div className="absolute top-0 right-0 w-[80%] h-[150%] bg-[#EBE8E3]/50 -translate-y-1/4 translate-x-1/4 -rotate-6 transform pointer-events-none z-0" />

      <div className="max-w-[1400px] mx-auto px-4 md:px-8 xl:px-0 flex flex-col lg:flex-row gap-16 lg:gap-32 items-start relative z-10">
        
        {/* Left Side: Massive Typography (Typeset & Bolder) */}
        <motion.div
           initial={{ opacity: 0, x: -50, filter: "blur(10px)" }}
           whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
           transition={{ ease: [0.32, 0.72, 0, 1], duration: 1.2 }}
           viewport={{ once: true, margin: "-100px" }}
           className="w-full lg:w-1/2 lg:sticky lg:top-40"
        >
          <div className="flex flex-col space-y-8">
            <span className="inline-flex w-max items-center gap-3 rounded-full border border-[#B8A375] bg-transparent px-6 py-2 text-xs uppercase tracking-[0.2em] font-bold text-[#B8A375]">
              <span className="w-2 h-2 rounded-full bg-[#B8A375]" />
              Core Principles
            </span>
            <h2 className="font-serif text-fluid-h2 tracking-tighter text-[#1A2A4A] text-balance">
              OUR <br/>
              <span className="text-[#B8A375] italic pr-4">VALUES.</span>
            </h2>
            <p className="text-2xl text-[#1A2A4A]/80 max-w-sm leading-relaxed font-sans border-l-2 border-[#B8A375] pl-6 ml-2 mt-4 text-pretty">
              These shared pillars guide everything we do within the community.
            </p>
          </div>
        </motion.div>

        {/* Right Side: Staggered Interactive Cards (Colorize) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15, delayChildren: 0.2 },
            },
          }}
          className="w-full lg:w-1/2 flex flex-col gap-6 pt-12 md:pt-0"
        >
          {values.map((v, i) => (
             <motion.div 
               key={i}
               variants={{
                 hidden: { opacity: 0, y: 50, filter: "blur(20px)" },
                 visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { ease: [0.32, 0.72, 0, 1], duration: 1.2 } }
               }}
               className="group sanga-panel interactive cursor-none self-end max-w-xl w-full p-2 bg-white/20" 
             >
               {/* Colorize: Rich hover state flipping background to Navy */}
               <div className="w-full bg-[#FCFBF2] group-hover:bg-[#0D182E] group-hover:text-[#FCFBF2] transition-colors duration-[800ms] rounded-[calc(2rem-8px)] p-12 md:p-16 flex flex-col gap-8">
                 <div className="flex items-center justify-between">
                   <span className="font-serif text-4xl text-[#1A2A4A]/20 group-hover:text-[#B8A375] transition-colors duration-500">
                     0{i + 1}.
                   </span>
                   <div className="w-16 h-1 bg-[#1A2A4A]/10 group-hover:w-32 group-hover:bg-[#B8A375] transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]" />
                 </div>
                 <p className="text-2xl md:text-3xl text-[#1A2A4A] group-hover:text-[#FCFBF2] leading-tight font-serif tracking-tight">
                   {v}
                 </p>
               </div>
             </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
