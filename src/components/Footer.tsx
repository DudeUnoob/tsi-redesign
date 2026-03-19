"use client";

import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="w-full bg-[#0D182E] text-[#FCFBF2] px-8 pt-24 pb-8 overflow-hidden shadow-[0_-20px_40px_-20px_rgba(26,42,74,0.1)] relative mt-24 rounded-t-[32px] rounded-b-none border border-[#FCFBF2]/10">
      {/* Colorize: Subtle gold glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[150%] bg-[radial-gradient(circle_at_center,rgba(184,163,117,0.08)_0%,transparent_60%)] pointer-events-none" />
      
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 border-b border-[#FCFBF2]/10 pb-24 relative z-10">
        
        {/* Left Side */}
        <div className="md:col-span-7 flex flex-col gap-12">
          <h2 className="font-serif text-fluid-h2 text-[#FCFBF2] leading-[0.9] tracking-tighter">
            EMPOWER <br/>
            <span className="text-[#B8A375] italic pr-2">Next</span>Gen.
          </h2>
          <p className="max-w-[36ch] text-[1rem] md:text-[1.125rem] text-[#FCFBF2]/75 font-sans font-light leading-relaxed border-l-2 border-sanga-gold pl-5 mt-4">
            Supporting each other to become leaders for the future of our movement.
          </p>
          <div className="mt-8 flex">
            <button className="interactive group px-12 py-6 rounded-full bg-[#B8A375] text-[#3C2A00] font-sans uppercase tracking-[0.2em] text-sm font-bold transition-all duration-500 hover:bg-[#FCFBF2] hover:text-[#0D182E] shadow-2xl shadow-[#B8A375]/20 flex items-center gap-4">
              Donate to TSI
            </button>
          </div>
        </div>

        {/* Right Side Links */}
        <div className="md:col-span-5 grid grid-cols-2 gap-8 md:mt-12">
          <div className="flex flex-col gap-6 text-[#FCFBF2]/60 font-sans text-sm uppercase tracking-[0.2em] font-bold">
            <h4 className="text-[#B8A375] mb-4 text-xs font-black">Explore</h4>
            <a href="#" className="interactive w-max hover:text-[#B8A375] hover:translate-x-2 transition-all duration-300">Camp Ignite</a>
            <a href="#" className="interactive w-max hover:text-[#B8A375] hover:translate-x-2 transition-all duration-300">Mentorship</a>
            <a href="#" className="interactive w-max hover:text-[#B8A375] hover:translate-x-2 transition-all duration-300">Merch Store</a>
            <a href="#" className="interactive w-max hover:text-[#B8A375] hover:translate-x-2 transition-all duration-300">Events</a>
          </div>

          <div className="flex flex-col gap-6 text-[#FCFBF2]/60 font-sans text-sm uppercase tracking-[0.2em] font-bold">
            <h4 className="text-[#B8A375] mb-4 text-xs font-black">Connect</h4>
            <a href="#" className="interactive w-max hover:text-[#B8A375] hover:translate-x-2 transition-all duration-300">Instagram</a>
            <a href="#" className="interactive w-max hover:text-[#B8A375] hover:translate-x-2 transition-all duration-300">Facebook</a>
            <a href="#" className="interactive w-max hover:text-[#B8A375] hover:translate-x-2 transition-all duration-300">YouTube</a>
            <a href="#" className="interactive w-max hover:text-[#B8A375] hover:translate-x-2 transition-all duration-300">Contact</a>
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto flex flex-col sm:flex-row items-center justify-between pt-8 text-xs text-[#FCFBF2]/40 font-sans tracking-widest uppercase font-bold relative z-10">
        <p>&copy; {new Date().getFullYear()} The Sanga Initiative.</p>
        <div className="flex gap-8 mt-6 sm:mt-0">
          <a href="#" className="interactive hover:text-[#B8A375] transition-colors duration-300">Privacy & Terms</a>
        </div>
      </div>
    </footer>
  );
}
