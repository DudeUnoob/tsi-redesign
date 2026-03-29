"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Sparkle, GlobeHemisphereWest, UsersThree, ArrowsOut, HandHeart } from "@phosphor-icons/react";
import Link from "next/link";
import { Footer } from "@/components/Footer";

export default function LeadersPage() {
  const stats = [
    { label: "Role", value: "Executive Team", col: "md:col-span-7" },
    { label: "Commitment", value: "Part-Time", col: "md:col-span-5" },
    { label: "Impact", value: "National", col: "md:col-span-5" },
    { label: "Community", value: "10,000+", col: "md:col-span-7" },
  ];

  const highlights = [
    { text: "Strengthen our community", icon: <UsersThree weight="duotone" className="w-6 h-6 text-[#1A2A4A]" /> },
    { text: "Organize powerful retreats", icon: <GlobeHemisphereWest weight="duotone" className="w-6 h-6 text-[#1A2A4A]" /> },
    { text: "Serve the next generation", icon: <HandHeart weight="duotone" className="w-6 h-6 text-[#1A2A4A]" /> },
    { text: "Meaningful teamwork", icon: <ArrowsOut weight="duotone" className="w-6 h-6 text-[#1A2A4A]" /> },
    { text: "Spiritual activism", icon: <Sparkle weight="duotone" className="w-6 h-6 text-[#1A2A4A]" /> }
  ];

  return (
    <>
      <div className="bg-[#FDFBF7] text-[#1A2A4A] min-h-screen selection:bg-[#1A2A4A] selection:text-white pb-24 md:pb-0">
        
        {/* Editorial Split Hero (min-h: 100dvh for proper mobile scaling) */}
        <section className="relative min-h-[100dvh] flex flex-col md:flex-row pt-32">
          
          <div className="w-full md:w-1/2 flex flex-col justify-center px-6 md:px-12 lg:px-24 mb-16 md:mb-0 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 90, damping: 20, delay: 0.1 }}
            >
              <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-[#1A2A4A]/10 bg-white shadow-sm mb-12 group hover:border-[#1A2A4A]/30 transition-colors">
                <span className="w-2 h-2 rounded-full bg-[#1A2A4A] animate-pulse" />
                <span className="text-[10px] md:text-xs font-sans font-bold uppercase tracking-[0.2em] text-[#1A2A4A]/80">Currently Accepting Applications</span>
              </div>
              
              <h1 className="font-serif text-[clamp(3.5rem,7vw,6.5rem)] leading-[0.9] tracking-tighter text-balance text-[#0A0A0A] mb-8">
                Lead the
                <br />
                <span className="italic text-[#1e3a8a] block -ml-2">Next Gen.</span>
              </h1>
              
              <p className="font-sans text-lg md:text-xl font-light leading-relaxed max-w-[45ch] text-[#1A2A4A]/70 text-pretty">
                The Sanga Initiative is honoring the rejuvenating and spiritually uplifting summer we had internally. As we prepare for the future of TSI, we are asking for help from YOU.
              </p>
            </motion.div>
          </div>

          <div className="w-full md:w-1/2 relative h-[50vh] md:h-auto overflow-hidden">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ type: "spring", stiffness: 80, damping: 20, delay: 0.2 }}
              className="absolute inset-4 md:inset-8 lg:inset-12 lg:left-0 rounded-2xl md:rounded-[2rem] overflow-hidden"
            >
              <img 
                src="https://images.squarespace-cdn.com/content/v1/55c3a641e4b01d44af64ae03/1516063336129-O9I3ZVGB90UU5U5IGGCE/13668848_1046287498791904_5684985052156607919_o.jpg"
                className="w-full h-full object-cover origin-center transition-transform duration-[3000ms] ease-out hover:scale-105"
                alt="TSI Executive Team in action"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A2A4A]/40 to-transparent pointer-events-none mix-blend-multiply" />
            </motion.div>
          </div>

        </section>

        {/* Asymmetrical Data Grid */}
        <section className="py-24 max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-y-12 gap-x-6 relative">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="md:col-span-4 lg:col-span-3 lg:col-start-2 pt-8"
          >
            <h2 className="font-serif text-3xl md:text-4xl text-[#0A0A0A] leading-tight mb-6">
              The Engine <br/> <i className="text-[#1A2A4A]/50">of TSI</i>
            </h2>
            <p className="font-sans text-[#1A2A4A]/70 text-sm leading-relaxed text-pretty">
              Finding dedicated youth that are willing to put in meaningful time is crucial as we pave the way for the next wave of our community. 
            </p>
          </motion.div>

          <div className="md:col-span-8 lg:col-span-7 lg:col-start-6 grid grid-cols-1 md:grid-cols-12 gap-4 group/bento">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 200, damping: 20, delay: i * 0.1 }}
                className={`bg-white border border-[#1A2A4A]/5 p-8 flex flex-col justify-end min-h-[160px] md:min-h-[200px] shadow-sm relative overflow-hidden group/card ${stat.col}`}
              >
                <div className="absolute top-6 right-6 w-1.5 h-1.5 rounded-full bg-[#1e3a8a] opacity-0 translate-y-2 group-hover/card:opacity-100 group-hover/card:translate-y-0 transition-all duration-300 shadow-[0_0_10px_rgba(30,58,138,0.5)]" />
                <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-[#1e3a8a] mb-2 block transition-colors duration-300">
                  {stat.label}
                </span>
                <span className="font-serif text-3xl md:text-4xl lg:text-5xl tracking-tighter text-[#0A0A0A] leading-[0.9]">
                  {stat.value}
                </span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Highlight Architecture */}
        <section className="py-24 md:py-32 relative border-t border-[#1A2A4A]/5 overflow-hidden">
          {/* Ambient Blue Blur for Royal Vibe */}
          <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[120%] bg-gradient-to-br from-[#1e3a8a]/[0.03] to-transparent blur-[120px] pointer-events-none rounded-[100%]" />
          
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-y-16 gap-x-6 relative z-10">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 90, damping: 20 }}
              className="md:col-span-5 lg:col-span-4 lg:col-start-2"
            >
              <h2 className="font-serif text-[clamp(2.5rem,4vw,4rem)] text-[#0A0A0A] leading-[0.9] tracking-tighter mb-8 text-balance">
                Impact <br/> <i className="text-[#1A2A4A]/50">Opportunities</i>
              </h2>
              <p className="font-sans text-lg text-[#1A2A4A]/70 leading-relaxed font-light text-pretty">
                We have opportunities for service across the board. Whether you excel at event logistics, marketing, community building, or financial planning—your skills are needed.
              </p>
            </motion.div>

            <div className="md:col-span-7 lg:col-span-6 lg:col-start-7 flex flex-col gap-4">
              {highlights.map((h, i) => (
                <motion.div
                  key={h.text}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ type: "spring", stiffness: 100, damping: 20, delay: i * 0.1 }}
                  className="group flex flex-col gap-6"
                >
                  <div className="flex items-center gap-6 p-6 border-b border-[#1A2A4A]/10 hover:border-[#1e3a8a]/30 transition-colors duration-500 cursor-default relative overflow-hidden">
                    <div className="w-12 h-12 rounded-full border border-[#1A2A4A]/10 bg-white shadow-sm flex items-center justify-center shrink-0 origin-center group-hover:bg-[#1e3a8a]/5 group-hover:scale-110 transition-all duration-500 z-10">
                       {h.icon}
                    </div>
                    <span className="font-sans text-xl md:text-2xl text-[#1A2A4A] font-medium tracking-tight z-10 group-hover:translate-x-2 transition-transform duration-500 ease-out">
                      {h.text}
                    </span>

                    {/* Reveal hover effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#1e3a8a]/[0.02] to-transparent translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] pointer-events-none" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Full-Bleed Application Takeover CTA */}
        <section className="mt-12 md:mt-32 w-full px-4 md:px-8 xl:px-12 pb-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 80, damping: 20 }}
            className="w-full bg-[#0A0A0A] rounded-[2rem] md:rounded-[3rem] p-12 md:p-24 lg:p-32 flex flex-col items-center justify-center text-center relative overflow-hidden border border-white/5"
          >
            {/* Ambient Meshes inside Dark Container */}
            <div className="absolute top-[-50%] left-[-20%] w-[60%] h-[200%] bg-gradient-to-br from-[#1e3a8a]/20 to-transparent blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[-50%] right-[-20%] w-[50%] h-[150%] bg-gradient-to-tl from-[#B8A375]/10 to-transparent blur-[120px] pointer-events-none" />

            <div className="relative z-10 max-w-2xl">
              <span className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-white/80 mb-8 backdrop-blur-md">
                Build The Future
              </span>
              <h2 className="font-serif text-[clamp(2.5rem,6vw,5.5rem)] text-white tracking-tighter leading-[0.9] text-balance mb-12">
                Ready to step <br/> <i className="text-[#B8A375]">up?</i>
              </h2>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }} transition={{ type: "spring", stiffness: 400, damping: 12 }}>
                <Link
                  href="https://www.sangainitiative.org/executive-team-application"
                  target="_blank"
                  className="group relative inline-flex z-10 bg-white text-[#0A0A0A] pl-8 pr-2 py-2 rounded-full font-sans font-bold uppercase tracking-[0.2em] text-[13px] md:text-sm items-center gap-8 shadow-[0_20px_40px_-15px_rgba(255,255,255,0.15)]"
                >
                  <span className="py-4">Apply to be a Leader</span>
                  <motion.div 
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                    className="w-14 h-14 rounded-full bg-[#1e3a8a]/5 flex items-center justify-center group-hover:bg-[#1e3a8a]/10 group-hover:scale-110 origin-center group-hover:rotate-45 transition-colors"
                  >
                    <ArrowUpRight weight="bold" className="w-5 h-5 text-[#0A0A0A]" />
                  </motion.div>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </section>

      </div>
      
      {/* Footer handles its own color but we wrap it out of the container if needed */}
      <Footer />
    </>
  );
}
