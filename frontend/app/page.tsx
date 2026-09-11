import AboutHero from "@/sections/AboutHero";
import StatsBar from "@/sections/StatsBar";
import MissionSection from "@/sections/MissionSection";
import VisionSection from "@/sections/VisionSection";
import HistorySection from "@/sections/HistorySection";
import HowWeWorkSection from "@/sections/HowWeWorkSection";
import FoundersMessageSection from "@/sections/FoundersMessageSection";
import Footer from "@/sections/Footer";

export default function Home() {
  return (
    <main>
      <AboutHero />
      <StatsBar />
      <MissionSection />
      <VisionSection />
      <HistorySection />
      <HowWeWorkSection />
      <FoundersMessageSection />
      <Footer />
    </main>
  );
}