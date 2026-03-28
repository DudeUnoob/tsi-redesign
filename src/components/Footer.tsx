"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { InstagramLogo, FacebookLogo, EnvelopeSimple, MapPin } from '@phosphor-icons/react';

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Events", href: "#events" },
  { label: "Resources", href: "#resources" },
  { label: "Donate", href: "https://www.sangainitiative.org/donate" },
  { label: "Contact", href: "mailto:info@sangainitiative.org" },
];

export function Footer() {
  return (
    <footer className="bg-[#1A2A4A] text-[#FDFBF7] py-24 md:py-32 relative overflow-hidden">
      {/* Editorial Grain Overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none mix-blend-overlay" />
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8">
          
          {/* Brand Column */}
          <div className="md:col-span-5 flex flex-col items-start">
            <Link href="/" className="font-serif text-4xl mb-8 tracking-tighter interactive">
              The <span className="text-[#B8A375] italic">Sanga</span> Initiative
            </Link>
            <p className="text-[#FDFBF7]/60 font-sans font-light leading-relaxed max-w-xs mb-12 text-pretty">
              Connecting and empowering Krishna Conscious youth across North America since 2013.
            </p>
            
            <div className="flex items-center gap-4">
              <a href="https://www.instagram.com/thesangainitiative/" target="_blank" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center interactive hover:bg-[#B8A375] transition-colors">
                <InstagramLogo weight="light" className="w-5 h-5" />
              </a>
              <a href="https://www.facebook.com/sangainitiative" target="_blank" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center interactive hover:bg-[#B8A375] transition-colors">
                <FacebookLogo weight="light" className="w-5 h-5" />
              </a>
              <a href="mailto:info@sangainitiative.org" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center interactive hover:bg-[#B8A375] transition-colors">
                <EnvelopeSimple weight="light" className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div className="md:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12">
            
            <div className="flex flex-col gap-6">
              <span className="font-sans text-[10px] uppercase tracking-[0.3em] font-bold text-[#B8A375]">Navigation</span>
              <ul className="flex flex-col gap-4">
                {footerLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-[#FDFBF7]/60 hover:text-[#FDFBF7] transition-colors font-sans text-sm interactive">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-6 md:col-span-2">
              <span className="font-sans text-[10px] uppercase tracking-[0.3em] font-bold text-[#B8A375]">Headquarters</span>
              <div className="flex items-start gap-4 text-[#FDFBF7]/60">
                <MapPin weight="light" className="w-5 h-5 shrink-0 mt-0.5" />
                <address className="not-italic font-sans text-sm leading-relaxed max-w-[200px]">
                  4906 Live Oak Street Unit 9,<br />
                  Dallas, TX, 75206,<br />
                  United States
                </address>
              </div>
              <div className="mt-4">
                 <p className="text-[10px] font-sans text-[#FDFBF7]/30 uppercase tracking-widest font-bold">Powered by Krishna</p>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-sans text-[#FDFBF7]/30 uppercase tracking-[0.2em] font-bold">
            © 2026 THE SANGA INITIATIVE. ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center gap-8">
            <Link href="#" className="text-[10px] font-sans text-[#FDFBF7]/30 hover:text-[#FDFBF7]/60 uppercase tracking-[0.2em] font-bold interactive transition-colors">Privacy</Link>
            <Link href="#" className="text-[10px] font-sans text-[#FDFBF7]/30 hover:text-[#FDFBF7]/60 uppercase tracking-[0.2em] font-bold interactive transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
