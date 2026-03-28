"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const menuItems = ["Merch Store", "Resources", "Events", "Contact Us"];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: [0.32, 0.72, 0, 1], duration: 1.2, delay: 0.1 }}
        className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] w-max px-4 md:px-0"
      >
        <div className="bg-[#FDFBF7]/60 backdrop-blur-2xl border border-black/5 rounded-full p-2 flex items-center justify-between gap-8 mx-auto shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)]">
          
          {/* Logo */}
          <Link href="/" className="interactive group relative overflow-hidden flex items-center justify-center bg-[#1A2A4A] text-white font-sans font-medium px-5 py-2.5 rounded-full ml-1">
            <span className="relative z-10 tracking-widest text-sm uppercase">TSI</span>
          </Link>

          {/* Hamburger Morph - fluid dynamics (Absolute Positioning) */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="interactive relative w-12 h-12 flex items-center justify-center rounded-full border border-black/5 hover:border-[#B8A375]/50 bg-white mr-1 shadow-sm active:scale-[0.96]"
          >
            <div className="relative w-5 h-5 flex items-center justify-center">
              <motion.span 
                animate={isOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="absolute w-5 h-[1.5px] bg-[#1A2A4A] rounded-full"
              />
              <motion.span 
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="absolute w-5 h-[1.5px] bg-[#1A2A4A] rounded-full"
              />
              <motion.span 
                animate={isOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="absolute w-5 h-[1.5px] bg-[#1A2A4A] rounded-full"
              />
            </div>
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(40px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ ease: [0.32, 0.72, 0, 1], duration: 0.8 }}
            className="fixed inset-0 z-[90] bg-[#FDFBF7]/80 flex flex-col items-center justify-center pointer-events-auto overflow-y-auto py-24"
          >
            {/* Minimal grain map overlay */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none mix-blend-multiply" />

            <div className="flex flex-col items-center gap-8 relative z-10">
              {menuItems.map((item, idx) => (
                <div key={item} className="overflow-hidden p-2">
                  <motion.div
                    initial={{ y: 48, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 24, opacity: 0 }}
                    transition={{ 
                      ease: [0.32, 0.72, 0, 1], 
                      duration: 0.8, 
                      delay: 0.1 + (idx * 0.05) 
                    }}
                  >
                    <Link 
                      href={`#${item.toLowerCase().replace(" ", "-")}`}
                      onClick={() => setIsOpen(false)}
                      className="text-4xl sm:text-5xl md:text-8xl font-serif font-medium text-[#1A2A4A] hover:text-[#B8A375] transition-colors interactive duration-500 tracking-tighter"
                    >
                      {item}
                    </Link>
                  </motion.div>
                </div>
              ))}
              
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 20, opacity: 0 }}
                transition={{ ease: [0.32, 0.72, 0, 1], duration: 0.8, delay: 0.35 }}
                className="mt-12"
              >
                <Link 
                  href="#donate" 
                  onClick={() => setIsOpen(false)}
                  className="interactive px-12 py-4 rounded-full bg-[#1A2A4A] text-white font-sans uppercase tracking-[0.2em] transition-all hover:bg-[#B8A375] duration-500 font-bold text-[10px] md:text-sm shadow-[0_20px_40px_-15px_rgba(26,42,74,0.3)]"
                >
                  Donate to TSI
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
