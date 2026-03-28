"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, BookOpen, Users, ChatCenteredText } from '@phosphor-icons/react';

const resources = [
  {
    title: "Icebreakers",
    desc: "Exercises to kickstart connection and break the ice in any gathering.",
    icon: <Sparkle weight="light" className="w-6 h-6" />,
    link: "https://docs.google.com/document/d/1buSUGiT-voofCDjLYUFBH5obrMgUoZAhY5tbPBd_GXQ/edit?usp=sharing",
    color: "bg-blue-500/10 text-blue-500"
  },
  {
    title: "Team Building",
    desc: "Collaborative activities designed to strengthen bonds and trust.",
    icon: <Users weight="light" className="w-6 h-6" />,
    link: "https://docs.google.com/document/d/1CWdqOWSBmeHYm3P8y_qPcnZWjYTIp0nx333TBoU-3Tg/edit?usp=sharing",
    color: "bg-emerald-500/10 text-emerald-500"
  },
  {
    title: "Discussion Topics",
    desc: "Thought-provoking prompts for deep spiritual and personal dialogue.",
    icon: <ChatCenteredText weight="light" className="w-6 h-6" />,
    link: "https://docs.google.com/document/d/1Jjg2j4tRrMb50y0roJdnrbLOgFh6_qA06KQolWPz64o/edit?usp=sharing",
    color: "bg-purple-500/10 text-purple-500"
  }
];

import { Sparkle } from "@phosphor-icons/react";

export function ResourcesSection() {
  return (
    <section id="resources" className="py-24 md:py-48 relative z-10 w-full overflow-hidden bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-24">
          <div className="max-w-2xl">
            <span className="inline-flex w-max items-center gap-3 rounded-full border border-black/5 bg-white px-6 py-2 text-[10px] md:text-xs uppercase tracking-[0.3em] font-bold text-[#8092B7] mb-8 shadow-sm">
              <BookOpen weight="light" className="w-4 h-4" />
              03 // Knowledge Hub
            </span>
            <h2 className="font-serif text-[clamp(2.5rem,8vw,5.5rem)] leading-[0.9] text-[#1A2A4A] tracking-tighter text-balance">
              Content for your <span className="text-[#B8A375] italic">growth.</span>
            </h2>
          </div>
          <p className="max-w-xs text-[#1A2A4A]/60 font-sans font-light leading-relaxed text-pretty border-l border-[#B8A375]/30 pl-6 mb-2">
            Free resources to help you facilitate sanga and deepen your personal practice.
          </p>
        </div>

        {/* The Asymmetrical Bento for Resources */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {resources.map((resource, i) => (
            <motion.a
              key={i}
              href={resource.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ease: [0.32, 0.72, 0, 1], duration: 1, delay: i * 0.1 }}
              className="group"
            >
              <div className="double-bezel-outer bg-white h-full transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:-translate-y-2 group-hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)]">
                <div className="double-bezel-inner p-10 flex flex-col h-full bg-white">
                  <div className={`w-14 h-14 rounded-2xl ${resource.color} flex items-center justify-center mb-8 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                    {resource.icon}
                  </div>
                  <h3 className="font-serif text-3xl text-[#1A2A4A] mb-4 tracking-tight group-hover:text-[#B8A375] transition-colors">
                    {resource.title}
                  </h3>
                  <p className="text-[#1A2A4A]/60 font-sans font-light leading-relaxed mb-12 flex-grow">
                    {resource.desc}
                  </p>
                  <div className="flex items-center gap-3 text-[#1A2A4A] group-hover:text-[#B8A375] transition-colors">
                    <span className="font-sans text-[10px] uppercase tracking-[0.2em] font-bold">View Resource</span>
                    <ArrowUpRight weight="light" className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Submission CTA - Floating Island style */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ease: [0.32, 0.72, 0, 1], duration: 1.2, delay: 0.4 }}
          className="mt-24 p-1.5 md:p-2 bg-[#1A2A4A]/5 rounded-[2.5rem] border border-[#1A2A4A]/10 max-w-4xl mx-auto"
        >
          <div className="bg-[#1A2A4A] rounded-[calc(2.5rem-0.375rem)] md:rounded-[calc(2.5rem-0.5rem)] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#B8A375] rounded-full blur-[100px] opacity-20 pointer-events-none" />
            
            <div className="relative z-10 text-center md:text-left">
              <h4 className="font-serif text-3xl text-white mb-2 tracking-tight">Have content to share?</h4>
              <p className="text-white/60 font-sans font-light">Submit your exercises and topics to the community.</p>
            </div>
            
            <button className="group relative z-10 bg-[#FDFBF7] text-[#1A2A4A] px-8 py-4 rounded-full font-sans font-bold uppercase tracking-[0.2em] text-xs transition-all hover:bg-[#B8A375] hover:text-white active:scale-[0.98] flex items-center gap-3">
              Submit Resource
              <ArrowUpRight weight="bold" className="w-4 h-4" />
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
