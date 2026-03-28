"use client";

import { EventPageLayout } from "@/components/EventPageLayout";
import { Footer } from "@/components/Footer";

export default function MidwestRetreatPage() {
  return (
    <>
      <EventPageLayout
        title="TSI Midwest 2026"
        image="https://images.squarespace-cdn.com/content/v1/55c3a641e4b01d44af64ae03/cb2418ed-47e3-4cc4-80db-e0f26530aaa1/MW26+Reg+Open+Post+45.png"
        stats={[
          { label: "Who", value: "Ages 14\u201330" },
          { label: "When", value: "April 10\u201312" },
          { label: "Schedule", value: "Fri Eve \u2013 Sun Afternoon" },
          { label: "Cost", value: "$100" },
        ]}
        description="Please note that this retreat is for ages 14-30 and will take place April 10th\u201312th, from Friday Evening to Sunday Afternoon. Our costs cover prasadam, seminars, and any supplies needed throughout the retreat. Please consider donating to help us do more retreats like this in the future!"
        highlights={[
          "Deep Sanga",
          "Engaging guest speakers",
          "Dynamic workshops",
          "Kirtan",
          "Delicious prasadam",
        ]}
        ctaLabel="Register Here"
        ctaHref="https://www.sangainitiative.org/tsi-regionals/tsi-midwest-2026"
        note="Full refunds will only be issued until March 30th, 2026."
      />
      <Footer />
    </>
  );
}
