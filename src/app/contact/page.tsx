"use client";

import { motion } from "framer-motion";
import { EnvelopeSimple, MapPin, InstagramLogo, FacebookLogo } from "@phosphor-icons/react";
import { Footer } from "@/components/Footer";

export default function ContactPage() {
  return (
    <>
      <div className="pt-32 pb-24 md:pb-48">
        <section className="max-w-[1400px] mx-auto px-4 md:px-8 xl:px-0">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: [0.32, 0.72, 0, 1], duration: 1.2 }}
            className="mb-24"
          >
            <span className="inline-flex w-max items-center gap-3 rounded-full border border-black/5 bg-white px-6 py-2 text-[10px] md:text-xs uppercase tracking-[0.3em] font-bold text-[#8092B7] mb-8 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#8092B7] animate-pulse" />
              Get in Touch
            </span>
            <h1 className="font-serif text-[clamp(2.5rem,8vw,6.5rem)] leading-[0.9] text-[#1A2A4A] tracking-tighter text-balance">
              Contact <span className="text-[#B8A375] italic">Us</span>
            </h1>
          </motion.div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Email Cards */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ease: [0.32, 0.72, 0, 1], duration: 1.2, delay: 0.1 }}
              className="flex flex-col gap-8"
            >
              <div className="double-bezel-outer bg-white">
                <div className="double-bezel-inner p-8">
                  <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#B8A375] block mb-4">
                    Summer Retreat Email
                  </span>
                  <a
                    href="mailto:info@sangainitiative.org"
                    className="font-serif text-2xl text-[#1A2A4A] hover:text-[#B8A375] transition-colors interactive tracking-tight"
                  >
                    info@sangainitiative.org
                  </a>
                </div>
              </div>

              <div className="double-bezel-outer bg-white">
                <div className="double-bezel-inner p-8">
                  <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#B8A375] block mb-4">
                    Camp Ignite Email
                  </span>
                  <a
                    href="mailto:campignite.tsi@gmail.com"
                    className="font-serif text-2xl text-[#1A2A4A] hover:text-[#B8A375] transition-colors interactive tracking-tight"
                  >
                    campignite.tsi@gmail.com
                  </a>
                </div>
              </div>

              <div className="double-bezel-outer bg-white">
                <div className="double-bezel-inner p-8">
                  <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#B8A375] block mb-4">
                    Headquarters
                  </span>
                  <div className="flex items-start gap-4 text-[#1A2A4A]/70">
                    <MapPin weight="light" className="w-5 h-5 shrink-0 mt-1" />
                    <address className="not-italic font-sans text-base leading-relaxed">
                      4906 Live Oak Street Unit 9,<br />
                      Dallas, TX, 75206,<br />
                      United States
                    </address>
                  </div>
                </div>
              </div>

              <div className="double-bezel-outer bg-white">
                <div className="double-bezel-inner p-8">
                  <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#B8A375] block mb-4">
                    Social
                  </span>
                  <div className="flex items-center gap-4">
                    <a
                      href="https://www.instagram.com/thesangainitiative/"
                      target="_blank"
                      className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center interactive hover:bg-[#B8A375] hover:text-white hover:border-[#B8A375] transition-colors"
                    >
                      <InstagramLogo weight="light" className="w-5 h-5" />
                    </a>
                    <a
                      href="https://www.facebook.com/sangainitiative"
                      target="_blank"
                      className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center interactive hover:bg-[#B8A375] hover:text-white hover:border-[#B8A375] transition-colors"
                    >
                      <FacebookLogo weight="light" className="w-5 h-5" />
                    </a>
                    <a
                      href="mailto:info@sangainitiative.org"
                      className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center interactive hover:bg-[#B8A375] hover:text-white hover:border-[#B8A375] transition-colors"
                    >
                      <EnvelopeSimple weight="light" className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ease: [0.32, 0.72, 0, 1], duration: 1.2, delay: 0.2 }}
            >
              <div className="sanga-panel-dark h-full">
                <div className="sanga-panel-dark-content p-8 md:p-12 flex flex-col h-full relative overflow-hidden">
                  <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#B8A375] rounded-full blur-[80px] opacity-30 pointer-events-none" />

                  <h2 className="font-serif text-3xl text-[#FDFBF7] tracking-tighter mb-2 relative z-10">
                    General Inquiries
                  </h2>
                  <p className="text-[#FDFBF7]/60 font-sans font-light mb-8 relative z-10">
                    Send us a message and we'll get back to you.
                  </p>

                  <form className="flex flex-col gap-5 relative z-10 flex-1" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="First Name"
                        className="bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-sm text-white placeholder:text-white/30 font-sans focus:outline-none focus:border-[#B8A375]/50 transition-colors"
                      />
                      <input
                        type="text"
                        placeholder="Last Name"
                        className="bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-sm text-white placeholder:text-white/30 font-sans focus:outline-none focus:border-[#B8A375]/50 transition-colors"
                      />
                    </div>
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-sm text-white placeholder:text-white/30 font-sans focus:outline-none focus:border-[#B8A375]/50 transition-colors"
                    />
                    <input
                      type="text"
                      placeholder="Subject"
                      className="bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-sm text-white placeholder:text-white/30 font-sans focus:outline-none focus:border-[#B8A375]/50 transition-colors"
                    />
                    <textarea
                      placeholder="Message"
                      rows={6}
                      className="bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-sm text-white placeholder:text-white/30 font-sans focus:outline-none focus:border-[#B8A375]/50 transition-colors resize-none flex-1"
                    />
                    <button
                      type="submit"
                      className="bg-[#FDFBF7] text-[#1A2A4A] px-8 py-4 rounded-full font-sans font-bold uppercase tracking-[0.2em] text-xs transition-all hover:bg-[#B8A375] hover:text-white active:scale-[0.98] interactive mt-2"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
