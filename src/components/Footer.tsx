"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "@phosphor-icons/react";

export function Footer() {
  return (
    <footer className="w-full bg-[#1A2A4A] text-[#FDFBF7] px-4 md:px-8 pt-32 pb-8 overflow-hidden relative">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-end gap-16 lg:gap-8 border-b border-[#FDFBF7]/10 pb-24 relative z-10">
        
        {/* Left Side: Massive Typography */}
        <div className="flex flex-col gap-8 w-full lg:w-2/3">
          <motion.h2 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ease: [0.32, 0.72, 0, 1], duration: 1.4 }}
            className="font-serif text-[clamp(4.5rem,10vw,12rem)] leading-[0.8] tracking-tighter text-[#FDFBF7]"
          >
            JOIN <br/>
            <span className="text-[#B8A375] italic pr-2">The</span> Sanga.
          </motion.h2>
          <p className="max-w-[42ch] text-[1rem] md:text-[1.25rem] text-[#FDFBF7]/70 font-sans font-light leading-relaxed border-l border-[#B8A375]/40 pl-6 mt-4 text-pretty">
            Supporting each other to become leaders for the future of our movement.
          </p>
        </div>

        {/* Right Side: Links */}
        <div className="flex flex-col sm:flex-row gap-16 lg:gap-24 w-full lg:w-auto">
          <div className="flex flex-col gap-6 font-sans text-sm tracking-wide">
            <h4 className="text-[#B8A375] mb-2 text-[10px] uppercase tracking-widest font-bold">Explore</h4>
            <a href="#" className="interactive group w-max flex items-center justify-between gap-4 text-[#FDFBF7]/80 hover:text-white transition-colors duration-300">
              Camp Ignite <ArrowUpRight className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
            </a>
            <a href="#" className="interactive group w-max flex items-center justify-between gap-4 text-[#FDFBF7]/80 hover:text-white transition-colors duration-300">
              Mentorship <ArrowUpRight className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
            </a>
            <a href="#" className="interactive group w-max flex items-center justify-between gap-4 text-[#FDFBF7]/80 hover:text-white transition-colors duration-300">
              Merch Store <ArrowUpRight className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
            </a>
          </div>

          <div className="flex flex-col gap-6 font-sans text-sm tracking-wide">
            <h4 className="text-[#B8A375] mb-2 text-[10px] uppercase tracking-widest font-bold">Connect</h4>
            <a href="#" className="interactive w-max text-[#FDFBF7]/80 hover:text-[#B8A375] transition-colors duration-300">Instagram</a>
            <a href="#" className="interactive w-max text-[#FDFBF7]/80 hover:text-[#B8A375] transition-colors duration-300">Facebook</a>
            <a href="#" className="interactive w-max text-[#FDFBF7]/80 hover:text-[#B8A375] transition-colors duration-300">YouTube</a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between pt-8 text-[10px] text-[#FDFBF7]/40 font-sans tracking-widest uppercase font-bold relative z-10">
        <p>&copy; {new Date().getFullYear()} The Sanga Initiative.</p>
        <div className="flex gap-8 mt-6 sm:mt-0">
          <a href="#" className="interactive hover:text-white transition-colors duration-300">Privacy & Terms</a>
        </div>
      </div>
    </footer>
  );
}
