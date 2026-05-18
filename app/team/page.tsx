"use client";

import TeamSection from "../../components/TeamSection";
import Navbar from "../../components/Navbar";
import CustomCursor from "../../components/CustomCursor";
export default function TeamPage() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main style={{ paddingTop: "80px" }}>
        <TeamSection />
      </main>
    </>
  );
}