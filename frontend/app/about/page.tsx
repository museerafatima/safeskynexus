import AboutHero from "@/sections/AboutHero";
import StatsBar from "@/sections/StatsBar";
import MissionSection from "@/sections/MissionSection";
import VisionSection from "@/sections/VisionSection";
import HistorySection from "@/sections/HistorySection";
import HowWeWorkSection from "@/sections/HowWeWorkSection";
import FoundersMessageSection from "@/sections/FoundersMessageSection";

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <StatsBar />
      <MissionSection />
      <VisionSection />
      <HistorySection />
      <HowWeWorkSection />
      <FoundersMessageSection />
    </main>
  );
}