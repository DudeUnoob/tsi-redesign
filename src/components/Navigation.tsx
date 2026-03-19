"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { List, X } from "@phosphor-icons/react";

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
        <div className="bg-[#FCFBF2]/60 backdrop-blur-2xl border border-[#1A2A4A]/10 rounded-full p-2 flex items-center justify-between gap-8 mx-auto shadow-[0_8px_32px_-8px_rgba(26,42,74,0.1)]">
          
          {/* Logo */}
          <Link href="/" className="interactive group relative overflow-hidden flex items-center justify-center bg-[#1A2A4A] text-[#FCFBF2] font-sans font-medium px-5 py-2.5 rounded-full cursor-none ml-1">
            <span className="relative z-10 tracking-widest text-sm uppercase">TSI</span>
          </Link>

          {/* Hamburger Morph - fluid dynamics */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="interactive group relative w-12 h-12 flex flex-col items-center justify-center gap-1.5 rounded-full border border-[#1A2A4A]/10 hover:border-[#B8A375]/50 bg-white mr-1 shadow-sm"
          >
            <motion.span 
              animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="block w-5 h-[1.5px] bg-[#1A2A4A] rounded-full origin-center"
            />
            <motion.span 
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.2 }}
              className="block w-5 h-[1.5px] bg-[#1A2A4A] rounded-full"
            />
            <motion.span 
              animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="block w-5 h-[1.5px] bg-[#1A2A4A] rounded-full origin-center"
            />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, filter: "blur(20px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 0.98, filter: "blur(20px)" }}
            transition={{ ease: [0.32, 0.72, 0, 1], duration: 0.8 }}
            className="fixed inset-0 z-[90] bg-[#FCFBF2]/90 backdrop-blur-3xl flex flex-col items-center justify-center pointer-events-auto"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-[#EBE8E3]/50 to-transparent pointer-events-none" />

            <div className="flex flex-col items-center gap-8 relative z-10">
              {menuItems.map((item, idx) => (
                <div key={item} className="overflow-hidden">
                  <motion.div
                    initial={{ y: "150%", opacity: 0, rotate: 5 }}
                    animate={{ y: "0%", opacity: 1, rotate: 0 }}
                    exit={{ y: "100%", opacity: 0 }}
                    transition={{ 
                      ease: [0.32, 0.72, 0, 1], 
                      duration: 0.8, 
                      delay: 0.1 + (idx * 0.1) 
                    }}
                  >
                    <Link 
                      href={`#${item.toLowerCase().replace(" ", "-")}`}
                      onClick={() => setIsOpen(false)}
                      className="text-5xl md:text-8xl font-serif font-medium text-[#1A2A4A] hover:text-[#B8A375] transition-colors interactive duration-500 tracking-tighter"
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
                transition={{ ease: [0.32, 0.72, 0, 1], duration: 0.8, delay: 0.6 }}
                className="mt-12"
              >
                <Link 
                  href="#donate" 
                  onClick={() => setIsOpen(false)}
                  className="interactive px-12 py-4 rounded-full bg-[#B8A375] text-[#1A2A4A] font-sans uppercase tracking-widest hover:bg-[#1A2A4A] hover:text-[#FCFBF2] transition-colors duration-500 font-bold text-sm shadow-xl shadow-[#B8A375]/20"
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
