"use client";

import { Sun } from "@phosphor-icons/react";
import { EventPageLayout } from "@/components/EventPageLayout";
import { Footer } from "@/components/Footer";

export default function WestCoastRetreatPage() {
  return (
    <>
      <EventPageLayout
        title="TSI West Coast Retreat 2026"
        image="https://images.squarespace-cdn.com/content/v1/55c3a641e4b01d44af64ae03/29accca4-513e-42f9-903c-d5aac3933666/WC26+Reg+Open+Post+11+%281%29.png"
        stats={[
          { label: "Who", value: "Ages 18\u201330" },
          { label: "When", value: "Sept 9\u201313" },
          { label: "Where", value: "Waikiki Beach, HI" },
          { label: "Airport", value: "Daniel K. Inouye (HNL)" },
        ]}
        description="Stay at a premier beachfront resort in Waikiki for our 2026 West Coast Retreat. Our costs cover all-inclusive accommodations, prasadam, seminars, and all necessary supplies for this unforgettable experience."
        highlights={[
          "Beachfront resort stay",
          "Deep Sanga & connection",
          "Engaging guest speakers",
          "Water sports & activities",
          "Art & talent workshops",
          "Delicious prasadam",
        ]}
        ctaLabel="Register Now"
        ctaHref="https://www.sangainitiative.org/west-coast-retreat-registration"
        note="Retreat starts on Sept 9th at 4:00 PM and ends on Sept 13th at 1:00 PM."
        vibe="glass"
        heroLayout="split-right"
        themeColor="amber"
        highlightIcon={<Sun weight="duotone" />}
        bentoSpans={["md:col-span-12", "md:col-span-6", "md:col-span-6", "md:col-span-12"]}
      />
      <Footer />
    </>
  );
}
