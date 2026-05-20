import HeroSection from "@/components/sections/HeroSection";
import WorkPreview from "@/components/sections/WorkPreview";
import AboutTeaser from "@/components/sections/AboutTeaser";
import TeamPreview from "@/components/sections/TeamPreview";
import StatsBar from "@/components/sections/StatsBar";
import ServicesPreview from "@/components/sections/ServicesPreview";
import FAQTeaser from "@/components/sections/FAQTeaser";
import ContactCTA from "@/components/sections/ContactCTA";
import WordCycleDivider from "@/components/ui/WordCycleDivider";
import GlowingLineDivider from "@/components/ui/GlowingLineDivider";

const TICKER_ITEMS = ["Design", "Engineer", "Automate", "Scale"];

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WordCycleDivider words={TICKER_ITEMS} />
      <WorkPreview />
      <AboutTeaser />
      <ServicesPreview />
      <GlowingLineDivider />
      <TeamPreview />
      <StatsBar />
      <FAQTeaser />
      <ContactCTA />
    </>
  );
}