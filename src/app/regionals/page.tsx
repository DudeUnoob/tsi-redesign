"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Footer } from "@/components/Footer";

const regionals = [
  {
    title: "East Coast Retreat",
    price: "$285.00",
    desc: "Early Bird Registration. A deep sanga experience with engaging guest speakers, dynamic workshops, kirtan, and delicious prasadam.",
    img: "https://images.squarespace-cdn.com/content/v1/55c3a641e4b01d44af64ae03/42af22d1-ea73-4806-ba7b-17c7c415afa5/DSCF0624.jpeg",
    href: "/east-coast-retreat",
    color: "bg-[#0D182E]",
  },
  {
    title: "Midwest Retreat",
    price: "$100.00",
    desc: "A regional gathering to connect, reflect, and grow together through spiritual activism and meaningful relationships.",
    img: "https://images.squarespace-cdn.com/content/v1/55c3a641e4b01d44af64ae03/cb2418ed-47e3-4cc4-80db-e0f26530aaa1/MW26+Reg+Open+Post+45.png",
    href: "/midwest-retreat",
    color: "bg-[#1A2A4A]",
  },
  {
    title: "Brazil Mission Trip",
    price: "$125.00",
    desc: "A seva-based immersion at Nova Gokula Farm. Help with eco-building projects, daily sadhana, and a three-day kirtan festival.",
    img: "https://images.squarespace-cdn.com/content/v1/55c3a641e4b01d44af64ae03/717065c1-66c5-483e-be4f-431f468c862f/1200x675_cmsv2_f7b63a9e-9088-51de-9993-2ab692ff4780-8300702.jpg.webp",
    href: "/mission-trip",
    color: "bg-[#253A60]",
  }
];

export default function RegionalsPage() {
  return (
    <>
      <main className="min-h-screen bg-[#FDFBF7] pt-32 md:pt-48 pb-24 md:pb-32 relative overflow-hidden">
        {/* Subtle Grain Overlay */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none mix-blend-multiply" />
        
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 xl:px-0 relative z-10">
          <div className="flex flex-col items-center text-center mb-24 md:mb-32">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ease: [0.32, 0.72, 0, 1], duration: 1 }}
              className="inline-flex items-center gap-3 rounded-full border border-black/5 bg-white px-6 py-2 text-[10px] md:text-xs uppercase tracking-[0.3em] font-bold text-[#8092B7] mb-8 shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-[#8092B7] animate-pulse" />
              Regional Gatherings
            </motion.span>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ease: [0.32, 0.72, 0, 1], duration: 1, delay: 0.1 }}
              className="font-serif text-[clamp(3.5rem,8vw,6.5rem)] text-[#1A2A4A] tracking-tighter leading-[0.9] text-balance mb-6"
            >
              TSI <span className="text-[#B8A375] italic pr-4">Regionals.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ease: [0.32, 0.72, 0, 1], duration: 1, delay: 0.2 }}
              className="max-w-xl text-lg md:text-xl text-[#1A2A4A]/70 font-sans font-light leading-relaxed text-pretty"
            >
              Select your regional retreat below and register to secure your spot. Space is limited, and early bird pricing may apply.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {regionals.map((event, i) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ease: [0.32, 0.72, 0, 1], duration: 1, delay: 0.3 + (i * 0.1) }}
                className="group h-full"
              >
                <Link href={event.href} className="block h-full w-full">
                  <div className="double-bezel-outer bg-white h-full transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:-translate-y-2 group-hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)] flex flex-col">
                    
                    {/* Image Top Half */}
                    <div className="p-1.5 md:p-2 pb-0 flex-shrink-0">
                      <div className={`w-full aspect-[4/3] rounded-[calc(2rem-0.375rem)] md:rounded-[calc(2rem-0.5rem)] rounded-b-none overflow-hidden relative ${event.color}`}>
                        <img 
                          src={event.img} 
                          alt={event.title} 
                          className="w-full h-full object-cover mix-blend-luminosity opacity-80 transition-all duration-[2000ms] group-hover:scale-105 group-hover:opacity-100 group-hover:mix-blend-normal"
                        />
                        <div className="absolute inset-0 shadow-[inset_0_1px_3px_rgba(255,255,255,0.1)] pointer-events-none" />
                      </div>
                    </div>

                    {/* Content Bottom Half */}
                    <div className="double-bezel-inner border-t-0 rounded-t-none bg-white p-8 md:p-10 flex flex-col flex-grow">
                      <div className="flex justify-between items-start mb-6">
                        <h2 className="font-serif text-3xl text-[#1A2A4A] tracking-tighter group-hover:text-[#B8A375] transition-colors max-w-[70%]">
                          {event.title}
                        </h2>
                        <span className="font-sans font-bold text-[#1A2A4A] bg-[#1A2A4A]/5 px-4 py-2 rounded-full text-xs tracking-wider">
                          {event.price}
                        </span>
                      </div>
                      
                      <p className="text-[#1A2A4A]/60 font-sans font-light leading-relaxed mb-8 flex-grow">
                        {event.desc}
                      </p>
                      
                      <div className="mt-auto flex items-center gap-3 text-[#1A2A4A] font-bold uppercase tracking-[0.2em] text-[10px] group-hover:text-[#B8A375] transition-colors">
                        <span>Register Now</span>
                        <div className="w-6 h-6 rounded-full border border-black/10 flex items-center justify-center transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1">
                          →
                        </div>
                      </div>
                    </div>
                    
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
