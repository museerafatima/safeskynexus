import type { Metadata } from "next";
import AboutHero from "@/sections/AboutHero";
import StatsBar from "@/sections/StatsBar";
import MissionSection from "@/sections/MissionSection";
import VisionSection from "@/sections/VisionSection";
import HistorySection from "@/sections/HistorySection";
import HowWeWorkSection from "@/sections/HowWeWorkSection";
import FoundersMessageSection from "@/sections/FoundersMessageSection";
import CtaBand from "@/sections/CtaBand";

export const metadata: Metadata = {
  title: "About",
  description:
    "SafeSky Nexus is a Pakistan-based aerospace defense technology company building fully indigenous, GPS-free autonomous drone systems.",
};

export default function AboutPage() {
  return (
    <main id="content">
      <AboutHero />
      <StatsBar />
      <MissionSection />
      <VisionSection />
      <HistorySection />
      <HowWeWorkSection />
      <FoundersMessageSection />
      <CtaBand
        heading="Want to work with us?"
        body="We're open to defense, industrial and research partnerships. Tell us what you're trying to solve."
      />
    </main>
  );
}