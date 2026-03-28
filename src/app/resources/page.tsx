"use client";

import { ResourcesSection } from "@/components/ResourcesSection";
import { Footer } from "@/components/Footer";

export default function ResourcesPage() {
  return (
    <main className="flex min-h-screen flex-col bg-[#FDFBF7] pt-24">
      <ResourcesSection />
      <Footer />
    </main>
  );
}
