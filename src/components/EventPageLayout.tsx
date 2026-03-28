"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "@phosphor-icons/react";
import Link from "next/link";

type Stat = { label: string; value: string };
type Highlight = string;

export function EventPageLayout({
  title,
  image,
  stats,
  description,
  highlights,
  ctaLabel,
  ctaHref,
  note,
  children,
}: {
  title: string;
  image: string;
  stats: Stat[];
  description: string;
  highlights?: Highlight[];
  ctaLabel: string;
  ctaHref: string;
  note?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="pt-32 pb-24 md:pb-48">
      {/* Hero */}
      <section className="max-w-[1400px] mx-auto px-4 md:px-8 xl:px-0 mb-24 md:mb-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: [0.32, 0.72, 0, 1], duration: 1.2 }}
        >
          <div className="double-bezel-outer bg-white">
            <div className="double-bezel-inner relative overflow-hidden">
              <div className="w-full h-[300px] md:h-[500px] relative">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D182E]/80 via-[#0D182E]/30 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <h1 className="font-serif text-[clamp(2.5rem,8vw,5.5rem)] leading-[0.9] text-white tracking-tighter text-balance">
                    {title}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ease: [0.32, 0.72, 0, 1], duration: 1, delay: 0.2 + i * 0.1 }}
              className="double-bezel-outer bg-white"
            >
              <div className="double-bezel-inner p-6 text-center">
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#B8A375] block mb-2">
                  {stat.label}
                </span>
                <span className="font-serif text-xl md:text-2xl text-[#1A2A4A] tracking-tight">
                  {stat.value}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Description */}
      <section className="max-w-4xl mx-auto px-4 md:px-8 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ease: [0.32, 0.72, 0, 1], duration: 1.2 }}
        >
          <div className="sanga-panel">
            <div className="sanga-panel-content p-8 md:p-12">
              <p className="text-lg md:text-xl text-[#1A2A4A]/80 font-sans font-light leading-relaxed text-pretty">
                {description}
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Highlights */}
      {highlights && highlights.length > 0 && (
        <section className="max-w-4xl mx-auto px-4 md:px-8 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ease: [0.32, 0.72, 0, 1], duration: 1.2 }}
          >
            <h2 className="font-serif text-3xl md:text-4xl text-[#1A2A4A] tracking-tighter mb-8">
              Highlights
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((h, i) => (
                <motion.div
                  key={h}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
                  className="double-bezel-outer bg-white"
                >
                  <div className="double-bezel-inner p-6 flex items-center gap-4">
                    <span className="w-2 h-2 rounded-full bg-[#B8A375] shrink-0" />
                    <span className="font-sans text-[#1A2A4A] font-light">{h}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>
      )}

      {/* Extra content (counselors, etc.) */}
      {children}

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 md:px-8 mt-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ease: [0.32, 0.72, 0, 1], duration: 1.2 }}
        >
          <div className="p-1.5 md:p-2 bg-[#1A2A4A]/5 rounded-[2.5rem] border border-[#1A2A4A]/10">
            <div className="bg-[#1A2A4A] rounded-[calc(2.5rem-0.375rem)] md:rounded-[calc(2.5rem-0.5rem)] p-8 md:p-16 flex flex-col items-center text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#B8A375] rounded-full blur-[100px] opacity-20 pointer-events-none" />
              <h3 className="font-serif text-3xl md:text-4xl text-white mb-4 tracking-tight relative z-10">
                Ready to join?
              </h3>
              {note && (
                <p className="text-white/60 font-sans font-light mb-8 max-w-md relative z-10 text-pretty">
                  {note}
                </p>
              )}
              <Link
                href={ctaHref}
                target="_blank"
                className="group relative z-10 bg-[#FDFBF7] text-[#1A2A4A] px-10 py-4 rounded-full font-sans font-bold uppercase tracking-[0.2em] text-xs transition-all hover:bg-[#B8A375] hover:text-white active:scale-[0.98] flex items-center gap-3 interactive mt-4"
              >
                {ctaLabel}
                <ArrowUpRight weight="bold" className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
