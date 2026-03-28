import { HeroSection } from "@/components/HeroSection";
import { MissionSection } from "@/components/MissionSection";
import { EventsSection } from "@/components/EventsSection";
import { ResourcesSection } from "@/components/ResourcesSection";
import { ProgramsSection } from "@/components/ProgramsSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <MissionSection />
      <EventsSection />
      <ResourcesSection />
      <ProgramsSection />
      <Footer />
    </>
  );
}
