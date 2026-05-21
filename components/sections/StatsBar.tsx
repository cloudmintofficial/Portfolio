"use client";
import { motion } from "framer-motion";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

const stats = [
  { target: 15, suffix: "+", label: "Projects Shipped" },
  { target: 98, suffix: "%", label: "Client Satisfaction" },
  { target: 5,  suffix: "",  label: "Team Members" },
  { target: 6,  suffix: "M+",label: "Months Experience" },
];

export default function StatsBar() {
  return (
    <section
      className="py-20 md:py-24 relative z-[2]"
      style={{ backgroundColor: "var(--bg-dark-band)" }}
    >
      <div className="section-container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-[1px]"
          style={{ background: "var(--border-dim)" }}
        >
          {stats.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="py-10 px-8 text-center relative overflow-hidden"
              style={{ backgroundColor: "var(--bg-dark-band)" }}
            >
              <div
                className="text-4xl md:text-5xl font-black leading-none mb-2 glow-mint"
                style={{ fontFamily: "var(--font-display)", color: "var(--mint-400)" }}
              >
                <AnimatedCounter target={item.target} suffix={item.suffix} />
              </div>
              <div
                className="text-[9px] tracking-[0.3em] uppercase"
                style={{ fontFamily: "var(--font-mono)", color: "var(--text-muted)" }}
              >
                {item.label}
              </div>

              {/* Subtle top line */}
              <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-[1px]"
                style={{ background: "var(--mint-400)", opacity: 0.3 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
