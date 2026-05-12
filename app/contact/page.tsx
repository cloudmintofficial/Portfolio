"use client";

import ContactSection from "../../components/ContactSection";
import Navbar from "../Navbar/page";
import CustomCursor from "../../components/CustomCursor";

export default function ContactPage() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main style={{ paddingTop: "80px" }}>
        <ContactSection />
      </main>
    </>
  );
}