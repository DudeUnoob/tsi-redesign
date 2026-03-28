"use client";

import { MapPin } from "@phosphor-icons/react";
import { EventPageLayout } from "@/components/EventPageLayout";
import { Footer } from "@/components/Footer";

export default function EastCoastRetreatPage() {
  return (
    <>
      <EventPageLayout
        title="TSI East Coast Retreat 2026"
        image="https://images.squarespace-cdn.com/content/v1/55c3a641e4b01d44af64ae03/42af22d1-ea73-4806-ba7b-17c7c415afa5/DSCF0624.jpeg"
        stats={[
          { label: "Who", value: "Ages 16\u201330" },
          { label: "When", value: "June 4\u20137" },
          { label: "Where", value: "ISKCON of DC, Potomac, MD" },
          { label: "Cost", value: "$285 Early Bird" },
        ]}
        description="Please note that this retreat is for ages 16-30 and will take place June 4th\u20137th, from Thursday Evening to Sunday Afternoon. Our costs cover accommodation, prasadam, seminars, and any supplies needed throughout the retreat."
        highlights={[
          "Deep Sanga",
          "Engaging guest speakers",
          "Dynamic workshops",
          "Kirtan",
          "Delicious prasadam",
        ]}
        ctaLabel="Register Here"
        ctaHref="https://www.sangainitiative.org/tsi-regionals/tsi-east-coast-2026"
        note="Full refunds will only be issued until May 1st, 2026."
        vibe="structural"
        heroLayout="split-left"
        themeColor="sky"
        highlightIcon={<MapPin weight="duotone" />}
        bentoSpans={["md:col-span-8", "md:col-span-4", "md:col-span-12", "md:col-span-12"]}
      />
      <Footer />
    </>
  );
}
