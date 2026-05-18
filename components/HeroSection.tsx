"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const stats = [
  { value: "05", label: "TEAM MEMBERS" },
  { value: "∞", label: "CREATIVITY" },
  { value: "01", label: "VISION" },
];

export default function HeroSection() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  if (!ready) return null;

  return (
    <section
      id="hero"
      className="grid-bg min-h-screen flex items-center justify-center relative overflow-hidden z-[2] bg-transparent"
    >
      {/* Ambient glow blobs — Maximum brightness to remove darkness */}
      <div className="absolute top-[10%] left-[5%] w-[500px] md:w-[800px] h-[500px] md:h-[800px] bg-[radial-gradient(circle,rgba(0,102,255,0.18)_0%,transparent_75%)] rounded-full blur-[80px] pointer-events-none z-0 opacity-100" />
      <div className="absolute bottom-[10%] right-[5%] w-[450px] md:w-[700px] h-[450px] md:h-[700px] bg-[radial-gradient(circle,rgba(123,47,255,0.15)_0%,transparent_75%)] rounded-full blur-[80px] pointer-events-none z-0 opacity-90" />
      <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[600px] md:w-[1000px] h-[300px] bg-[radial-gradient(ellipse_at_center,rgba(0,245,255,0.08)_0%,transparent_80%)] rounded-full blur-[60px] pointer-events-none z-0" />

      {/* Orbit rings — Refined for a cleaner 'Proper' look */}
      <div className="absolute left-1/2 md:left-auto md:right-[10%] top-[40%] md:top-1/2 -translate-x-1/2 md:translate-x-0 -translate-y-1/2 w-[300px] md:w-[360px] h-[300px] md:h-[360px] pointer-events-none z-[1] opacity-50 md:opacity-80 scale-90 md:scale-100">
        {[0, 1, 2].map((i) => (
          <div key={i} className="absolute border rounded-full"
            style={{
              inset: `${i * 42}px`,
              borderWidth: "1px",
              borderColor: `rgba(0, 245, 255, ${0.2 - i * 0.05})`,
              animation: `spin ${10 + i * 6}s linear infinite ${i % 2 !== 0 ? "reverse" : ""}`,
            }}
          >
            <div className="absolute w-2 h-2 rounded-full top-[-4px] left-1/2 -translate-x-1/2"
              style={{
                background: i === 0 ? "var(--accent-cyan)" : i === 1 ? "var(--accent-purple)" : "var(--accent-pink)",
                boxShadow: `0 0 15px ${i === 0 ? "var(--accent-cyan)" : i === 1 ? "var(--accent-purple)" : "var(--accent-pink)"}`,
              }}
            />
          </div>
        ))}
        {/* Decorative label (Desktop only) */}
        <div className="hidden md:flex absolute inset-0 items-center justify-center font-['Orbitron'] text-[10px] text-[rgba(0,245,255,0.5)] tracking-[0.2em] text-center leading-[1.5] uppercase font-medium">
          COLLECTIVE<br />V1.0
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-[1000px] w-full px-8 md:px-12 relative z-[3] mt-16 md:mt-0">
        {/* Pre-label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="flex items-center gap-4 mb-8 md:mb-10"
        >
          <div className="w-12 h-[1px] bg-[var(--accent-cyan)] opacity-50" />
          <span className="font-['Space_Mono'] text-[9px] md:text-[11px] tracking-[0.4em] text-[var(--accent-cyan)] uppercase font-medium">
            EST. 2026 — UNIT_001
          </span>
        </motion.div>

        {/* Main headline with Spotlight to remove 'darkness' */}
        <div className="relative mb-8 md:mb-12">
          {/* Headline Brightness Booster — Stronger to remove darkness */}
          <div className="absolute inset-x-[-25%] inset-y-[-50%] bg-[radial-gradient(circle,rgba(0,245,255,0.12)_0%,transparent_75%)] blur-[60px] -z-10 pointer-events-none" />
          
          {["WE BUILD", "THE FUTURE"].map((line, i) => (
            <div key={i} className="overflow-hidden">
              <motion.h1
                data-text={line}
                className="glitch-wrapper font-['Orbitron'] text-[clamp(42px,11vw,100px)] font-black leading-[1.05] md:leading-[0.95] tracking-[-0.03em] mb-2"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.35 + i * 0.15, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  color: i === 0 ? "var(--text-primary)" : "transparent",
                  WebkitTextStroke: i === 1 ? "1px var(--accent-cyan)" : "none",
                }}
              >
                {line}
              </motion.h1>
            </div>
          ))}
        </div>

        {/* Sub-text with localized illumination */}
        <div className="relative">
          <div className="absolute inset-x-[-10%] inset-y-[-20%] bg-[radial-gradient(circle,rgba(0,102,255,0.06)_0%,transparent_70%)] blur-[30px] -z-10 pointer-events-none" />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.7 }}
            className="text-[15px] md:text-[17px] text-[var(--text-secondary)] leading-[1.7] max-w-[540px] mb-12 md:mb-14 font-medium"
          >
            A collective of innovative minds pushing the boundaries of design, engineering, and digital experiences.
          </motion.p>
        </div>

        {/* CTAs — Balanced & Refined */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.95, duration: 0.7 }}
          className="flex flex-col sm:flex-row gap-5 items-start sm:items-center mb-16 md:mb-24"
        >
          <a href="#team" className="no-underline cursor-none w-full sm:w-auto">
            <motion.button
              whileHover={{ scale: 1.02, boxShadow: "0 0 40px rgba(0,245,255,0.3)" }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-10 py-4 bg-[var(--accent-cyan)] border-none text-[#020408] font-['Orbitron'] text-[11px] font-black tracking-[0.25em] cursor-none uppercase transition-all"
            >
              PROJECTS
            </motion.button>
          </a>
          <a href="#about" className="no-underline cursor-none w-full sm:w-auto">
            <motion.button
              whileHover={{ borderColor: "rgba(0,245,255,0.6)", color: "var(--accent-cyan)", background: "rgba(0,245,255,0.02)" }}
              className="w-full sm:w-auto px-10 py-4 bg-transparent border border-[rgba(255,255,255,0.1)] text-[var(--text-secondary)] font-['Orbitron'] text-[11px] font-black tracking-[0.25em] cursor-none transition-all duration-300 uppercase"
            >
              MANIFESTO
            </motion.button>
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="flex gap-10 md:gap-16 pt-8 pb-12 border-t border-[rgba(255,255,255,0.05)] flex-wrap"
        >
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col gap-1.5">
              <div className="font-['Orbitron'] text-3xl md:text-[36px] font-black text-[var(--accent-cyan)] leading-none [text-shadow:0_0_25px_rgba(0,245,255,0.4)]">
                {stat.value}
              </div>
              <div className="font-['Space_Mono'] text-[9px] md:text-[11px] text-[var(--text-muted)] tracking-[0.35em] uppercase font-bold">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-[3]"
      >
        <span className="font-['Space_Mono'] text-[9px] tracking-[0.4em] text-[var(--text-muted)] uppercase font-bold">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-[1px] h-10 bg-[linear-gradient(to_bottom,var(--accent-cyan),transparent)] opacity-40"
        />
      </motion.div>
    </section>
  );
}