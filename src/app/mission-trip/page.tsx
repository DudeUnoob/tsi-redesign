"use client";

import { GlobeHemisphereWest } from "@phosphor-icons/react";
import { EventPageLayout } from "@/components/EventPageLayout";
import { Footer } from "@/components/Footer";

export default function MissionTripPage() {
  return (
    <>
      <EventPageLayout
        title="Mission Trip 2026"
        image="https://images.squarespace-cdn.com/content/v1/55c3a641e4b01d44af64ae03/717065c1-66c5-483e-be4f-431f468c862f/1200x675_cmsv2_f7b63a9e-9088-51de-9993-2ab692ff4780-8300702.jpg.webp"
        stats={[
          { label: "Who", value: "Ages 18\u201330" },
          { label: "When", value: "Nov 14\u201322" },
          { label: "Where", value: "Nova Gokula Farm, Brazil" },
          { label: "Cost", value: "Flight + $125" },
        ]}
        description="We are organizing an ISKCON Youth Mission Trip to Brazil for TSI youth ages 18\u201330. This will be a pure seva-based immersion at Nova Gokula Farm, including eco-building projects, trail and campus improvements, large-scale prasadam preparation, daily sadhana, and participation in a three-day kirtan festival. Participants will also visit Christ the Redeemer in Rio de Janeiro \u2014 one of the New Seven Wonders of the World \u2014 along with light sightseeing before heading to the farm."
        highlights={[
          "Deep Sanga",
          "Engaging seva projects",
          "Three-day kirtan festival",
          "Delicious prasadam",
          "Visit Christ the Redeemer in Rio",
          "Daily sadhana",
        ]}
        ctaLabel="Register Here"
        ctaHref="https://www.sangainitiative.org/tsi-regionals/tsi-mission-trip"
        note="Spots are first come, first serve \u2014 the first 20 youth who register and book flights secure their place. You must have a flight itinerary to reserve your spot. Arrive RIO (GIG) Nov 14th 8:30\u201311AM. Depart S\u00e3o Paulo (GRU) Nov 22nd 8:30\u201311:30PM."
        vibe="luxury"
        heroLayout="split-right"
        themeColor="tropical"
        highlightIcon={<GlobeHemisphereWest weight="duotone" />}
        bentoSpans={["md:col-span-7", "md:col-span-5", "md:col-span-12 lg:col-span-6", "md:col-span-12 lg:col-span-6"]}
      />
      <Footer />
    </>
  );
}
