"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Heart } from "@phosphor-icons/react";
import Link from "next/link";
import { Footer } from "@/components/Footer";

const amounts = [108, 250, 350, 500, 1008];

export default function DonatePage() {
  return (
    <>
      <div className="pt-32 pb-24 md:pb-48">
        <section className="max-w-[1400px] mx-auto px-4 md:px-8 xl:px-0">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: [0.32, 0.72, 0, 1], duration: 1.2 }}
            className="mb-24 max-w-3xl"
          >
            <span className="inline-flex w-max items-center gap-3 rounded-full border border-black/5 bg-white px-6 py-2 text-[10px] md:text-xs uppercase tracking-[0.3em] font-bold text-[#8092B7] mb-8 shadow-sm">
              <Heart weight="light" className="w-4 h-4" />
              Support TSI
            </span>
            <h1 className="font-serif text-[clamp(2.5rem,8vw,6.5rem)] leading-[0.9] text-[#1A2A4A] tracking-tighter mb-8 text-balance">
              Help keep the <span className="text-[#B8A375] italic">mission</span> going
            </h1>
            <p className="text-lg md:text-xl text-[#1A2A4A]/70 font-sans font-light leading-relaxed border-l border-[#B8A375]/30 pl-6 text-pretty">
              Welcome to the blossoming community that is the Sanga Initiative! We have an ambitious mission to become a far-reaching and impactful organization that furthers Srila Prabhupada's essential mission. We organize multiple retreats, camps, seminars, and more through fundraising efforts and kind contributions.
            </p>
          </motion.div>

          {/* Donation Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
            {/* One-Time Donation */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ease: [0.32, 0.72, 0, 1], duration: 1.2, delay: 0.1 }}
              className="sanga-panel-dark"
            >
              <div className="sanga-panel-dark-content p-8 md:p-12 flex flex-col relative overflow-hidden">
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#B8A375] rounded-full blur-[80px] opacity-30 pointer-events-none" />

                <h2 className="font-serif text-3xl md:text-4xl text-[#FDFBF7] tracking-tighter mb-4 relative z-10">
                  One-Time Donation
                </h2>
                <p className="text-[#FDFBF7]/60 font-sans font-light mb-8 relative z-10 text-pretty">
                  Any amount helps and directly contributes to our current and upcoming initiatives!
                </p>

                <div className="flex flex-wrap gap-3 mb-8 relative z-10">
                  {amounts.map((amt) => (
                    <span
                      key={amt}
                      className="px-5 py-2.5 rounded-full border border-white/10 text-white font-sans text-sm font-bold"
                    >
                      ${amt.toLocaleString()}
                    </span>
                  ))}
                </div>

                <Link
                  href="https://www.sangainitiative.org/donate"
                  target="_blank"
                  className="group bg-[#FDFBF7] text-[#1A2A4A] px-8 py-4 rounded-full font-sans font-bold uppercase tracking-[0.2em] text-xs transition-all hover:bg-[#B8A375] hover:text-white active:scale-[0.98] flex items-center gap-3 w-max interactive relative z-10 mt-auto"
                >
                  Donate Now
                  <ArrowUpRight weight="bold" className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            {/* Monthly Donor */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ease: [0.32, 0.72, 0, 1], duration: 1.2, delay: 0.2 }}
              className="p-1.5 md:p-2 bg-[#F7DCA5]/30 rounded-[2rem] border border-[#B8A375]/10 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)]"
            >
              <div className="w-full h-full bg-[#F7DCA5] rounded-[calc(2rem-0.375rem)] md:rounded-[calc(2rem-0.5rem)] shadow-[inset_0_1px_1px_rgba(255,255,255,0.5)] p-8 md:p-12 flex flex-col relative overflow-hidden">
                <div className="w-full h-full absolute inset-0 bg-gradient-to-br from-white/20 to-transparent pointer-events-none" />

                <h2 className="font-serif text-3xl md:text-4xl text-[#3C2A00] tracking-tighter mb-4 relative z-10">
                  Become a Monthly Donor
                </h2>
                <p className="text-[#3C2A00]/70 font-sans font-light mb-8 relative z-10 text-pretty">
                  In order to continue growing and spreading a sense of unity amongst numerous youth across multiple countries, we need your active support! Please join us on this wonderful journey of outreach and community building.
                </p>

                <Link
                  href="https://www.sangainitiative.org/monthly-donors"
                  target="_blank"
                  className="group bg-[#1A2A4A] text-white px-8 py-4 rounded-full font-sans font-bold uppercase tracking-[0.2em] text-xs transition-all hover:bg-[#B8A375] active:scale-[0.98] flex items-center gap-3 w-max interactive relative z-10 mt-auto"
                >
                  Monthly Giving
                  <ArrowUpRight weight="bold" className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Tax Info & Company Match */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ease: [0.32, 0.72, 0, 1], duration: 1.2 }}
            className="max-w-3xl mx-auto"
          >
            <div className="double-bezel-outer bg-white">
              <div className="double-bezel-inner p-8 md:p-12">
                <p className="text-[#1A2A4A]/70 font-sans font-light leading-relaxed mb-6 text-pretty italic">
                  The Sanga Initiative is a qualified 501(c)(3) tax-exempt organization and all donations are tax deductible to the full extent of the law.
                </p>
                <div className="w-12 h-[1px] bg-[#B8A375]/40 mb-6" />
                <h3 className="font-serif text-xl text-[#1A2A4A] mb-3">Does your company match?</h3>
                <p className="text-[#1A2A4A]/60 font-sans font-light text-sm">
                  If your company matches with non-profits please email us at{" "}
                  <a href="mailto:finance@sangainitiative.org" className="text-[#B8A375] hover:underline interactive">
                    finance@sangainitiative.org
                  </a>{" "}
                  so we can get you and your employer set up!
                </p>
              </div>
            </div>
          </motion.div>
        </section>
      </div>
      <Footer />
    </>
  );
}
