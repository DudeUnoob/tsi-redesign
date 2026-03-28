"use client";

import { motion } from "framer-motion";
import { EventPageLayout } from "@/components/EventPageLayout";
import { Footer } from "@/components/Footer";

const counselors = [
  {
    name: "Sruthi Echarry Diaz",
    img: "https://images.squarespace-cdn.com/content/v1/55c3a641e4b01d44af64ae03/1584910405641-9NDNR56JANCWAEQ815ZV/LA-20200311.jpg",
    bio: "Hare Krishna! My previous experience as a camp counselor and camp organizer has an extremely positive impact in many aspects of my life and I would love to carry out this service as an attempt to give back. I love working with people, building new friendships, and creating an atmosphere of comfort and fun for those around me. Also, I absolutely love Gulab Jamuns :0)",
  },
  {
    name: "Anisha Aggarwal",
    img: "https://images.squarespace-cdn.com/content/v1/55c3a641e4b01d44af64ae03/ff828eb1-1f12-4ed9-abce-7decefe0f802/IMG_9225.jpg",
    bio: "Haribol! I\u2019m from Pennsylvania, 20 years old studying Industrial Engineering at the University of Pittsburgh. Camp Ignite was one of the most impactful experiences of my life \u2014 spiritual life can be so much fun when you share it with friends!",
  },
  {
    name: "Gaurang Vasadi",
    img: "https://images.squarespace-cdn.com/content/v1/55c3a641e4b01d44af64ae03/0b47918e-30f0-41f2-8728-8ba0ffa85272/IMG_7657.jpg",
    bio: "Hare Krishna! I\u2019m from ISKCON of Delaware, a Pre-Med student at the University of Delaware. I\u2019ve attended Camp Ignite for two years as an attendee and it was an amazing experience that helped me connect and grow with others!",
  },
  {
    name: "Kapiduach Echarry Diaz",
    img: "https://images.squarespace-cdn.com/content/v1/55c3a641e4b01d44af64ae03/1583107813543-PHZ5QTEFJX2M2I99BERH/image-asset.jpeg",
    bio: "Hare Krishna! I have been an organizer for Camp Ignite for the last 2 years and I strive to continue to make this camping trip a memorable experience that positively impacts everyone present.",
  },
];

export default function CampIgnitePage() {
  return (
    <>
      <EventPageLayout
        title="Camp Ignite 2026"
        image="https://images.squarespace-cdn.com/content/v1/55c3a641e4b01d44af64ae03/1752071425850-I8MCAXI0LAW4EPAVB1Y9/IMG_8842.jpg?format=2500w"
        stats={[
          { label: "Who", value: "Ages 11\u201317" },
          { label: "When", value: "June 24\u201328" },
          { label: "Where", value: "GreenBrier State Park, MD" },
          { label: "Cost", value: "$235" },
        ]}
        description="Our goal is to provide a safe and nurturing environment where youth have the opportunity to deepen their faith in our spiritual path, strengthen former friendships and create new ones, imbibe values that can be carried through daily life, develop a positive service attitude, and have unforgettable fun throughout the whole journey."
        highlights={[
          "Water sports & swimming",
          "Group discussions",
          "Team building activities",
          "Late night bonfires",
          "Epic kirtans",
          "Best prasadam ever",
          "Hikes through nature",
          "Friendships that last a lifetime",
        ]}
        ctaLabel="Register Now"
        ctaHref="https://www.sangainitiative.org/camp-registration09/camp-ignite-2025"
        note="Limited spots available. Step 1: Registration, Step 2: Payment, Step 3: Liability Form."
      >
        {/* Registration Steps */}
        <section className="max-w-4xl mx-auto px-4 md:px-8 mb-24">
          <h2 className="font-serif text-3xl md:text-4xl text-[#1A2A4A] tracking-tighter mb-8">
            How to Register
          </h2>
          <div className="flex flex-col gap-6">
            {[
              { step: "01", title: "Fill out Registration", note: "Limited Spots Available" },
              { step: "02", title: "Submit Payment", note: "$235 per camper" },
              { step: "03", title: "Complete Liability Form", note: "Required for all participants" },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 1, ease: [0.32, 0.72, 0, 1] }}
                className="double-bezel-outer bg-white"
              >
                <div className="double-bezel-inner p-6 md:p-8 flex items-start gap-6">
                  <span className="font-serif text-3xl text-[#B8A375]/40 shrink-0">{item.step}.</span>
                  <div>
                    <h3 className="font-serif text-xl text-[#1A2A4A] mb-1">{item.title}</h3>
                    <p className="text-sm text-[#1A2A4A]/60 font-sans font-light">{item.note}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Counselors */}
        <section className="max-w-[1400px] mx-auto px-4 md:px-8 xl:px-0 mb-24">
          <div className="mb-12">
            <span className="inline-flex w-max items-center gap-3 rounded-full border border-black/5 bg-white px-6 py-2 text-[10px] md:text-xs uppercase tracking-[0.3em] font-bold text-[#8092B7] mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#8092B7] animate-pulse" />
              Organizers & Counselors
            </span>
            <h2 className="font-serif text-[clamp(2rem,5vw,4rem)] leading-[0.9] text-[#1A2A4A] tracking-tighter">
              Meet the <span className="text-[#B8A375] italic">Team</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {counselors.map((c, i) => (
              <motion.div
                key={c.name}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 1.2, ease: [0.32, 0.72, 0, 1] }}
                className="group double-bezel-outer bg-white"
              >
                <div className="double-bezel-inner overflow-hidden">
                  <div className="h-[280px] relative overflow-hidden">
                    <img
                      src={c.img}
                      alt={c.name}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-[2000ms] ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D182E]/60 to-transparent" />
                    <h3 className="absolute bottom-4 left-6 font-serif text-2xl text-white tracking-tight">
                      {c.name}
                    </h3>
                  </div>
                  <div className="p-6 md:p-8">
                    <p className="text-[#1A2A4A]/70 font-sans font-light leading-relaxed text-sm text-pretty">
                      {c.bio}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <p className="mt-8 text-sm text-[#1A2A4A]/50 font-sans font-light text-center">
            All counselors undergo CPO training and background checks before the commencement of camp.
          </p>
        </section>
      </EventPageLayout>
      <Footer />
    </>
  );
}
