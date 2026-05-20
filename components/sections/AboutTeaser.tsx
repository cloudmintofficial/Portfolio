"use client";
import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";

export default function AboutTeaser() {
  return (
    <section id="about-teaser" className="py-16 md:py-20 relative z-[2]">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span
              className="text-[clamp(100px,20vw,200px)] font-black leading-none tracking-tighter select-none"
              style={{ fontFamily: "var(--font-display)", color: "transparent", WebkitTextStroke: "1px var(--border-glow)" }}
            >
              05
            </span>
            <span
              className="text-sm font-bold tracking-[0.2em] uppercase -mt-4 block"
              style={{ fontFamily: "var(--font-mono)", color: "var(--mint-400)" }}
            >
              Minds. One vision.
            </span>
            <div className="flex items-center gap-4 mt-8 md:mt-12 opacity-60">
              <div className="w-10 h-[1px]" style={{ background: "var(--mint-400)" }} />
              <span
                className="text-[9px] md:text-[11px] tracking-[0.45em] uppercase"
                style={{ fontFamily: "var(--font-mono)", color: "var(--mint-400)" }}
              >
                EST. 2026 — COLLECTIVE_001
              </span>
            </div>
          </motion.div>
          <div>
            <SectionLabel index="03" label="About Us" className="mb-5" />
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-[clamp(26px,4vw,44px)] font-black leading-[1.15] tracking-[-0.02em] mb-6"
              style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
            >
              Five minds.{" "}
              <span style={{ color: "var(--mint-400)" }}>One obsession.</span>
              <br />Infinite possibilities.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-sm md:text-base leading-[1.8] mb-8"
              style={{ fontFamily: "var(--font-body)", color: "var(--text-secondary)" }}
            >
              A tight-knit collective of designers, engineers, and strategists. No silos, no handoffs — pure collaboration at the intersection of disciplines.
            </motion.p>
            <motion.a
              href="/about"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="no-underline cursor-none group flex items-center gap-2 w-fit text-sm font-semibold tracking-[0.1em]"
              style={{ fontFamily: "var(--font-display)", color: "var(--text-muted)" }}
            >
              <span className="group-hover:text-[var(--mint-400)] transition-colors duration-200">Read Our Manifesto</span>
              <span className="group-hover:translate-x-1 transition-transform duration-200 group-hover:text-[var(--mint-400)]">→</span>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
