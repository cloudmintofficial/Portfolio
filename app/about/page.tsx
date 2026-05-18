"use client";

import AboutSection from "../../components/AboutSection";
import Navbar from "../../components/Navbar";
import CustomCursor from "../../components/CustomCursor";

export default function AboutPage() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main style={{ paddingTop: "80px" }}>
        <AboutSection />
      </main>
    </>
  );
}