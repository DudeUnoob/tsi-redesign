"use client";

import { motion } from "framer-motion";
import { EventPageLayout } from "@/components/EventPageLayout";
import { Footer } from "@/components/Footer";

const photos = [
  "https://images.squarespace-cdn.com/content/v1/55c3a641e4b01d44af64ae03/1772131613598-JI7G8HEMBQWNK1Y32ADD/DSC_0022.jpg?format=1500w",
  "https://images.squarespace-cdn.com/content/v1/55c3a641e4b01d44af64ae03/1772131616896-N2P9I3TAPWPA0M1LWZ84/DSC_0031.jpg?format=1500w",
  "https://images.squarespace-cdn.com/content/v1/55c3a641e4b01d44af64ae03/1772131621754-UDGMZDKVP6NLSSN2PQYR/DSC_0042.jpg?format=1500w",
  "https://images.squarespace-cdn.com/content/v1/55c3a641e4b01d44af64ae03/1772131622149-4Z1MN9YK1LM95XZC32ZH/DSC_0062.jpg?format=1500w",
  "https://images.squarespace-cdn.com/content/v1/55c3a641e4b01d44af64ae03/1772131631806-4CXEAWK306U4V0B7YWDO/DSC_0203.jpg?format=1500w",
  "https://images.squarespace-cdn.com/content/v1/55c3a641e4b01d44af64ae03/1772131637071-JYHM1ANV3KI2QPNR94EW/DSC_0259.jpg?format=1500w",
  "https://images.squarespace-cdn.com/content/v1/55c3a641e4b01d44af64ae03/1772131647714-MLQ6OY8ZSWE0BLWXPQ29/IMG_1277.jpg?format=1500w",
  "https://images.squarespace-cdn.com/content/v1/55c3a641e4b01d44af64ae03/1772131656116-P4XKBCX49ISIQ399SNC3/IMG_1423.jpg?format=1500w",
];

export default function TsiSummitPage() {
  return (
    <>
      <EventPageLayout
        title="TSI Summer Retreat 2026"
        image="https://images.squarespace-cdn.com/content/v1/55c3a641e4b01d44af64ae03/9c2de27b-70d6-4f71-84f1-7677ba1c4dd0/Summit26+Reg+Open+1x1.png"
        stats={[
          { label: "Who", value: "Ages 18\u201330" },
          { label: "When", value: "July 30 \u2013 Aug 3" },
          { label: "Where", value: "New Vrindaban" },
          { label: "Year", value: "12th Annual" },
        ]}
        description="Hare Krishna everyone! We are excited to announce that the 12th summer retreat will take place at New Vrindaban! We know the TSI community is looking forward to the association, kirtan, sanga discussions, and the unique atmosphere that makes this retreat so special every year. We look forward to seeing you all in the charming, vibrant, and peaceful community of New Vrindaban Dhama!"
        highlights={[
          "Deep association & sanga",
          "Kirtan & spiritual discussions",
          "Engaging guest speakers",
          "Delicious prasadam",
        ]}
        ctaLabel="Register Now"
        ctaHref="https://www.sangainitiative.org/retreat-registration/tsi-summit-2025"
        note="Last day to cancel and receive a full refund is June 30th, 2026. Contact info@sangainitiative.org with any questions."
      >
        {/* Photo Gallery */}
        <section className="max-w-[1400px] mx-auto px-4 md:px-8 xl:px-0 mb-24">
          <h2 className="font-serif text-3xl md:text-4xl text-[#1A2A4A] tracking-tighter mb-8">
            Highlights from <span className="text-[#B8A375] italic">2025</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {photos.map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
                className="group double-bezel-outer bg-white"
              >
                <div className="double-bezel-inner overflow-hidden aspect-square">
                  <img
                    src={src}
                    alt={`Summit 2025 photo ${i + 1}`}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2000ms] ease-out"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </EventPageLayout>
      <Footer />
    </>
  );
}
