"use client";

import { motion } from "framer-motion";

const values = [
  "To empower individuals to take the next step in their Krishna Consciousness.",
  "To create opportunities for ISKCON’s next generation to serve together through spiritual activism.",
  "To inspire lasting and meaningful spiritual relationships.",
  "To provide a medium where Krishna conscious youth feel empowered to serve in their unique capacity."
];

export function ProgramsSection() {
  return (
    <section id="programs" className="py-32 md:py-64 relative z-10 w-full overflow-hidden bg-[#FDFBF7]">
      {/* Massive diagonal field cutting through */}
      <div className="absolute top-0 right-0 w-[80%] h-[150%] bg-[#EBE8E3]/30 -translate-y-1/4 translate-x-1/4 -rotate-3 transform pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 md:px-0 flex flex-col lg:flex-row gap-16 lg:gap-32 items-start relative z-10">
        
        {/* Left Side: Massive Typography */}
        <motion.div
           initial={{ opacity: 0, x: -50, filter: "blur(10px)" }}
           whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
           transition={{ ease: [0.32, 0.72, 0, 1], duration: 1.2 }}
           viewport={{ once: true, margin: "-100px" }}
           className="w-full lg:w-1/2 lg:sticky lg:top-40"
        >
          <div className="flex flex-col space-y-8">
            <span className="inline-flex w-max items-center gap-3 rounded-full border border-black/5 bg-white shadow-sm px-6 py-2 text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold text-[#1A2A4A]">
              <span className="w-2 h-2 rounded-full bg-[#B8A375]" />
              Core Principles
            </span>
            <h2 className="font-serif text-[clamp(3.5rem,10vw,8rem)] leading-[0.85] tracking-tighter text-[#1A2A4A] text-balance">
              OUR <br/>
              <span className="text-[#B8A375] italic pr-4">VALUES.</span>
            </h2>
            <p className="text-xl md:text-2xl text-[#1A2A4A]/70 max-w-sm leading-relaxed font-sans border-l border-[#B8A375]/30 pl-6 ml-2 mt-4 text-pretty font-light">
              These shared pillars guide everything we do within the community.
            </p>
          </div>
        </motion.div>

        {/* Right Side: The Z-Axis Cascade */}
        <div className="w-full lg:w-1/2 flex flex-col pt-12 md:pt-0 pb-32">
          {values.map((v, i) => {
            // Apply unique rotation to break the digital grid on desktop using Tailwind responsive utilities
            const rotations = ["md:-rotate-2", "md:rotate-1", "md:-rotate-1", "md:rotate-2"];
            const desktopRotateClass = rotations[i % rotations.length];
            
            return (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ ease: [0.32, 0.72, 0, 1], duration: 1.2, delay: i * 0.1 }}
                // On mobile, cancel extreme margins and rotations. On desktop, apply Z-Axis Cascade
                className={`group double-bezel-outer self-end max-w-xl w-full relative transform rotate-0 ${desktopRotateClass} transition-all hover:!rotate-0 duration-[800ms] ${i !== 0 ? 'mt-6 md:-mt-16' : ''}`} 
                style={{ zIndex: i + 1 }}
              >
                {/* Double Bezel Inner Core */}
                <div className="double-bezel-inner bg-white group-hover:bg-[#1A2A4A] group-hover:text-white transition-colors duration-[800ms] p-6 md:p-14 flex flex-col gap-8">
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-3xl md:text-4xl text-[#1A2A4A]/20 group-hover:text-[#B8A375] transition-colors duration-500">
                      0{i + 1}.
                    </span>
                    <div className="w-12 h-[1px] bg-[#1A2A4A]/10 group-hover:w-24 group-hover:bg-[#B8A375] transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]" />
                  </div>
                  <p className="text-lg md:text-xl text-[#1A2A4A] group-hover:text-[#FDFBF7] leading-relaxed font-sans font-light tracking-tight">
                    {v}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
