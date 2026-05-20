import type { Metadata } from "next";
import SectionLabel from "@/components/ui/SectionLabel";
import GlowingLineDivider from "@/components/ui/GlowingLineDivider";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <div style={{ backgroundColor: "var(--bg-base)" }}>
      <section className="pt-28 pb-6 relative z-[2]">
        <div className="section-container">
          <SectionLabel index="03" label="Our Story" className="mb-4" />
          <h1 className="text-[clamp(40px,8vw,80px)] font-black leading-[0.95] tracking-[-0.03em] mb-6"
            style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}>
            Built Different. <span style={{ color: "transparent", WebkitTextStroke: "1.5px var(--mint-400)" }}>Literally.</span>
          </h1>
          <div className="flex items-center gap-4 mb-6 opacity-60">
            <div className="w-10 h-[1px]" style={{ background: "var(--mint-400)" }} />
            <span
              className="text-[9px] md:text-[11px] tracking-[0.45em] uppercase"
              style={{ fontFamily: "var(--font-mono)", color: "var(--mint-400)" }}
            >
              EST. 2026 — COLLECTIVE_001
            </span>
          </div>
          <p className="text-base leading-relaxed max-w-[540px]"
            style={{ fontFamily: "var(--font-body)", color: "var(--text-secondary)" }}>
            We started Cloud Mint because we were tired of the agency status quo. No fluff, no handoffs. Just a unified team of experts executing at the highest level.
          </p>
        </div>
      </section>

      <GlowingLineDivider />

      <section className="pt-10 pb-24 relative z-[2]">
        <div className="section-container max-w-4xl">
          <div className="prose prose-invert prose-p:leading-relaxed prose-p:text-[var(--text-secondary)]">
            <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}>The Manifesto</h2>
            <p className="mb-6">
              We believe the best work happens at the intersection of disciplines. When designers understand code, and engineers care about typography, magic happens.
            </p>
            <p className="mb-10">
              Every line of code, every design decision, every strategic move is made with one question in mind: does this push the boundaries of what's possible on the web?
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-10 border-t" style={{ borderColor: "var(--border-dim)" }}>
              <div>
                <h3 className="text-xl font-bold mb-3" style={{ color: "var(--mint-400)" }}>01. Performance First</h3>
                <p className="text-sm">We don't compromise on speed. If it's not sub-second, it's not done. We optimize at every layer.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3" style={{ color: "var(--mint-400)" }}>02. Design Engineering</h3>
                <p className="text-sm">We don't do "handoffs". Our designers code, and our engineers design. It's a single continuous process.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}