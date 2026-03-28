"use client";

import { HandHeart } from "@phosphor-icons/react";
import { EventPageLayout } from "@/components/EventPageLayout";
import { Footer } from "@/components/Footer";

export default function LeadersPage() {
  return (
    <>
      <EventPageLayout
        title="TSI Executive Team"
        image="https://images.squarespace-cdn.com/content/v1/55c3a641e4b01d44af64ae03/1516063336129-O9I3ZVGB90UU5U5IGGCE/13668848_1046287498791904_5684985052156607919_o.jpg"
        stats={[
          { label: "Role", value: "Executive Team" },
          { label: "Commitment", value: "Part-Time" },
          { label: "Impact", value: "National" },
          { label: "Community", value: "10,000+" },
        ]}
        description="The Sanga Initiative is honored by the rejuvenating and spiritually uplifting summer we had with all of you! As we prepare for the future of TSI, we are asking for help from YOU. We have opportunities for service as a TSI leader."
        highlights={[
          "Strengthen our community",
          "Organize powerful retreats",
          "Serve the next generation",
          "Meaningful teamwork",
          "Spiritual activism"
        ]}
        ctaLabel="Apply to be a Leader"
        ctaHref="https://www.sangainitiative.org/executive-team-application"
        note="Finding dedicated youth that are willing to put in meaningful time is crucial as we pave the way for the next wave of TSI."
        vibe="glass"
        heroLayout="cascade"
        themeColor="emerald"
        highlightIcon={<HandHeart weight="duotone" />}
      />
      <Footer />
    </>
  );
}
