"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

const navItems: NavItem[] = [
  { label: "Our Mission", href: "#who-are-we" },
  {
    label: "Events",
    href: "#events",
    children: [
      { label: "TSI Summit", href: "/tsi-summit" },
      { label: "East Coast Retreat", href: "/east-coast-retreat" },
      { label: "Midwest Retreat", href: "/midwest-retreat" },
      { label: "West Coast Retreat", href: "https://www.sangainitiative.org/west-coast-retreat" },
      { label: "Mission Trip", href: "/mission-trip" },
      { label: "Camp Ignite", href: "/camp-ignite" },
    ],
  },
  { label: "Resources", href: "#resources" },
  {
    label: "Donate",
    href: "/donate",
    children: [
      { label: "One-Time Donation", href: "/donate" },
      { label: "Monthly Donors", href: "https://www.sangainitiative.org/monthly-donors" },
    ],
  },
  { label: "Contact", href: "/contact" },
  { label: "Merch", href: "https://www.sangainitiative.org/merch-store" },
];

// Desktop items shown in the pill bar (exclude Merch — it goes in mobile only)
const desktopItems = navItems.slice(0, 5);

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [expandedMobile, setExpandedMobile] = useState<string | null>(null);
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Close dropdown after a short delay (allows moving mouse to dropdown)
  const handleMouseEnter = (label: string) => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setActiveDropdown(label);
  };
  const handleMouseLeave = () => {
    dropdownTimeout.current = setTimeout(() => setActiveDropdown(null), 200);
  };

  // Close mobile menu on route change
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

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

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6 px-4">
            {desktopItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children ? handleMouseEnter(item.label) : undefined}
                onMouseLeave={item.children ? handleMouseLeave : undefined}
              >
                <Link
                  href={item.href}
                  className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#1A2A4A]/60 hover:text-[#1A2A4A] transition-colors interactive flex items-center gap-1"
                >
                  {item.label}
                  {item.children && (
                    <svg className="w-3 h-3 opacity-40" viewBox="0 0 12 12" fill="none">
                      <path d="M3 5L6 8L9 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                </Link>

                {/* Desktop Dropdown */}
                <AnimatePresence>
                  {item.children && activeDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.96 }}
                      transition={{ ease: [0.32, 0.72, 0, 1], duration: 0.3 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 pt-4 z-50"
                      onMouseEnter={() => handleMouseEnter(item.label)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className="bg-[#FDFBF7]/95 backdrop-blur-2xl border border-black/5 rounded-2xl p-3 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] min-w-[200px]">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            target={child.href.startsWith("http") ? "_blank" : undefined}
                            className="block px-4 py-2.5 text-[10px] uppercase tracking-[0.15em] font-bold text-[#1A2A4A]/60 hover:text-[#1A2A4A] hover:bg-[#1A2A4A]/5 rounded-xl transition-colors interactive whitespace-nowrap"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Hamburger */}
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

      {/* Mobile / Full-screen overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(40px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ ease: [0.32, 0.72, 0, 1], duration: 0.8 }}
            className="fixed inset-0 z-[90] bg-[#FDFBF7]/80 flex flex-col items-center justify-start pointer-events-auto overflow-y-auto pt-28 pb-16"
          >
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none mix-blend-multiply" />

            <div className="flex flex-col items-center gap-6 relative z-10">
              {navItems.map((item, idx) => (
                <div key={item.label} className="flex flex-col items-center">
                  <div className="overflow-hidden p-2">
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
                      {item.children ? (
                        <button
                          onClick={() => setExpandedMobile(expandedMobile === item.label ? null : item.label)}
                          className="text-4xl sm:text-5xl md:text-6xl font-serif font-medium text-[#1A2A4A] hover:text-[#B8A375] transition-colors interactive duration-500 tracking-tighter flex items-center gap-3"
                        >
                          {item.label}
                          <motion.svg
                            animate={{ rotate: expandedMobile === item.label ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                            className="w-6 h-6 opacity-40" viewBox="0 0 12 12" fill="none"
                          >
                            <path d="M3 5L6 8L9 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </motion.svg>
                        </button>
                      ) : (
                        <Link
                          href={item.href}
                          target={item.href.startsWith("http") ? "_blank" : undefined}
                          onClick={() => setIsOpen(false)}
                          className="text-4xl sm:text-5xl md:text-6xl font-serif font-medium text-[#1A2A4A] hover:text-[#B8A375] transition-colors interactive duration-500 tracking-tighter"
                        >
                          {item.label}
                        </Link>
                      )}
                    </motion.div>
                  </div>

                  {/* Expanded sub-items */}
                  <AnimatePresence>
                    {item.children && expandedMobile === item.label && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ ease: [0.32, 0.72, 0, 1], duration: 0.5 }}
                        className="overflow-hidden flex flex-col items-center gap-3 pt-2"
                      >
                        {item.children.map((child, childIdx) => (
                          <motion.div
                            key={child.label}
                            initial={{ y: 16, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: childIdx * 0.05, duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
                          >
                            <Link
                              href={child.href}
                              target={child.href.startsWith("http") ? "_blank" : undefined}
                              onClick={() => setIsOpen(false)}
                              className="text-xl sm:text-2xl font-sans text-[#1A2A4A]/60 hover:text-[#B8A375] transition-colors interactive tracking-tight"
                            >
                              {child.label}
                            </Link>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
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
                  href="/donate"
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
