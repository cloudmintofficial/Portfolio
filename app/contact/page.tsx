"use client";

import SectionLabel from "@/components/ui/SectionLabel";
import GlowingLineDivider from "@/components/ui/GlowingLineDivider";
import Button from "@/components/ui/Button";

export default function ContactPage() {
  return (
    <div style={{ backgroundColor: "var(--bg-base)" }}>
      <section className="pt-28 pb-6 relative z-[2]">
        <div className="section-container">
          <SectionLabel index="06" label="Start a Project" className="mb-4" />
          <h1 className="text-[clamp(40px,8vw,80px)] font-black leading-[0.95] tracking-[-0.03em] mb-6"
            style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}>
            Let's <span style={{ color: "transparent", WebkitTextStroke: "1.5px var(--mint-400)" }}>Build.</span>
          </h1>
          <p className="text-base leading-relaxed max-w-[540px]"
            style={{ fontFamily: "var(--font-body)", color: "var(--text-secondary)" }}>
            We're currently taking on new projects for Q4 2026. Fill out the form below, and we'll get back to you within 24 hours.
          </p>
        </div>
      </section>

      <GlowingLineDivider />

      <section className="pt-10 pb-24 relative z-[2]">
        <div className="section-container max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Form */}
          <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold tracking-[0.1em] uppercase" style={{ fontFamily: "var(--font-mono)", color: "var(--text-muted)" }}>Name</label>
              <input type="text" className="bg-[var(--bg-surface)] border border-[var(--border-dim)] p-4 text-sm outline-none focus:border-[var(--mint-400)] transition-colors" placeholder="John Doe" required />
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold tracking-[0.1em] uppercase" style={{ fontFamily: "var(--font-mono)", color: "var(--text-muted)" }}>Email</label>
              <input type="email" className="bg-[var(--bg-surface)] border border-[var(--border-dim)] p-4 text-sm outline-none focus:border-[var(--mint-400)] transition-colors" placeholder="john@example.com" required />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold tracking-[0.1em] uppercase" style={{ fontFamily: "var(--font-mono)", color: "var(--text-muted)" }}>Project Details</label>
              <textarea rows={5} className="bg-[var(--bg-surface)] border border-[var(--border-dim)] p-4 text-sm outline-none focus:border-[var(--mint-400)] transition-colors resize-none" placeholder="Tell us about your project..." required></textarea>
            </div>

            <Button variant="filled" className="w-full justify-center">Send Inquiry →</Button>
          </form>

          {/* Contact Info */}
          <div className="flex flex-col gap-8 md:pl-12 md:border-l" style={{ borderColor: "var(--border-dim)" }}>
            <div>
              <h3 className="text-sm font-bold tracking-[0.2em] uppercase mb-4" style={{ fontFamily: "var(--font-mono)", color: "var(--mint-400)" }}>Email</h3>
              <a href="mailto:cloudmint.official.in@gmail.com" className="text-lg no-underline hover:text-[var(--mint-400)] transition-colors" style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}>
                cloudmint.official.in@gmail.com
              </a>
            </div>

            <div>
              <h3 className="text-sm font-bold tracking-[0.2em] uppercase mb-4" style={{ fontFamily: "var(--font-mono)", color: "var(--mint-400)" }}>Location</h3>
              <p className="text-lg leading-relaxed" style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}>
                Remote First<br/>
                Global Collective
              </p>
            </div>

            <div className="mt-auto p-6 border" style={{ backgroundColor: "var(--bg-surface)", borderColor: "var(--border-dim)" }}>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-2 h-2 rounded-full bg-[var(--mint-400)] animate-pulse" />
                <span className="text-xs font-bold tracking-[0.1em] uppercase" style={{ fontFamily: "var(--font-mono)", color: "var(--text-primary)" }}>Available for Work</span>
              </div>
              <p className="text-xs" style={{ color: "var(--text-muted)" }}>We respond to all serious inquiries within 24 business hours.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}