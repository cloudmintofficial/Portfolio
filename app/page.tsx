"use client";

import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import TeamSection from "../components/TeamSection";
import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import CustomCursor from "../components/CustomCursor";
import DataStreams from "../components/DataStreams";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <DataStreams />
      <Navbar />
      <main style={{ position: "relative", zIndex: 2 }}>
        <HeroSection />
        <TeamSection />
        <AboutSection />
        <ContactSection />
      </main>
    </>
  );
}