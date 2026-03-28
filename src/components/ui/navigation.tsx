"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { Buildings } from "@phosphor-icons/react";

export default function Navigation() {
  const { scrollY } = useScroll();
  
  // Condense the nav slightly when scrolled
  const paddingY = useTransform(scrollY, [0, 100], ["1.5rem", "1rem"]);
  
  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 flex justify-center px-6"
      style={{ paddingTop: paddingY, paddingBottom: paddingY }}
    >
      <nav className="w-full max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          {/* Sanga Logo Placeholder */}
          <div className="w-6 h-6 rounded-sm bg-secondary shrink-0 relative overflow-hidden flex items-center justify-center">
            <Buildings weight="fill" className="text-white w-4 h-4 z-10" />
            <div className="absolute inset-0 bg-primary opacity-20 mix-blend-overlay"></div>
          </div>
          <span className="font-display font-bold text-lg text-primary tracking-tight">
            Sanga <span className="text-secondary">Initiative</span>
          </span>
        </Link>
        
        <div className="hidden md:flex items-center gap-10 px-6 text-[13px] font-bold tracking-widest uppercase text-primary/60">
          <Link href="#" className="text-secondary border-b-2 border-secondary pb-1">Home</Link>
          <Link href="#events" className="hover:text-primary transition-colors pb-1">Events</Link>
          <Link href="#values" className="hover:text-primary transition-colors pb-1">Our Values</Link>
        </div>
        
        <div className="flex items-center bg-primary rounded-full px-6 py-2.5 hover:bg-primary/90 transition-colors cursor-pointer shadow-md shadow-primary/20">
           <span className="text-[11px] font-bold tracking-widest uppercase text-white">Donate</span>
        </div>
      </nav>
    </motion.header>
  );
}
