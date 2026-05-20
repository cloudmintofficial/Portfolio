"use client";

import dynamic from "next/dynamic";
import type React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingDock from "@/components/layout/FloatingDock";
import SmoothScroll from "@/components/effects/SmoothScroll";

// Lazy-load heavy ambient effects — never SSR'd
const DataStreams = dynamic(
  () => import("@/components/effects/DataStreams"),
  { ssr: false }
);
const CustomCursor = dynamic(
  () => import("@/components/ui/CustomCursor"),
  { ssr: false }
);

export default function GlobalLayout({ children }: { children: React.ReactNode }) {
  return (
    <SmoothScroll>
      {/* Fixed/ambient layers */}
      <CustomCursor />
      <DataStreams />

      {/* Navigation */}
      <Navbar />

      {/* Page content */}
      <main style={{ position: "relative", zIndex: 2, minHeight: "100vh" }}>
        {children}
      </main>

      {/* Footer & persistent dock */}
      <Footer />
      <FloatingDock />
    </SmoothScroll>
  );
}
