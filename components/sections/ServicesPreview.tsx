"use client";
import { motion } from "framer-motion";
import { Code2, Palette, BrainCircuit, Sparkles, TrendingUp, Shield } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import { featuredServices } from "@/lib/data/services";
import type { Service } from "@/lib/data/types";

const iconMap: Record<string, React.ElementType> = {
  Code2, Palette, BrainCircuit, Sparkles, TrendingUp, Shield,
};

export default function ServicesPreview() {
  return (
    <section id="services-preview" className="py-16 md:py-20 relative z-[2]"
      style={{ backgroundColor: "var(--bg-surface)" }}>
      <div className="section-container">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <SectionLabel index="05" label="What We Do" className="mb-4" />
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-[clamp(28px,5vw,52px)] font-black leading-tight tracking-[-0.02em]"
              style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
            >
              Everything your brand
              <br />
              <span style={{ color: "var(--mint-400)" }}>needs to grow.</span>
            </motion.h2>
          </div>
          <motion.a
            href="/services"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="no-underline cursor-none shrink-0 group flex items-center gap-2 text-sm font-semibold tracking-[0.1em]"
            style={{ fontFamily: "var(--font-display)", color: "var(--text-muted)" }}
          >
            <span className="group-hover:text-[var(--mint-400)] transition-colors">All Services</span>
            <span className="group-hover:translate-x-1 transition-transform group-hover:text-[var(--mint-400)]">→</span>
          </motion.a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {featuredServices.map((service: Service, i) => {
            const Icon = iconMap[service.icon] ?? Code2;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.07, duration: 0.6 }}
                className="group p-6 border transition-all duration-300 cursor-none card-hover-mint"
                style={{ backgroundColor: "var(--bg-elevated)", borderColor: "var(--border-dim)" }}
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-sm mb-5 transition-colors duration-300"
                  style={{ background: "var(--mint-glow-sm)", border: "1px solid var(--border-subtle)" }}>
                  <Icon size={18} strokeWidth={1.8} style={{ color: "var(--mint-400)" }} />
                </div>
                <h3 className="text-sm font-bold mb-2 tracking-tight"
                  style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}>
                  {service.title}
                </h3>
                <p className="text-xs leading-relaxed"
                  style={{ fontFamily: "var(--font-body)", color: "var(--text-secondary)" }}>
                  {service.shortDesc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
