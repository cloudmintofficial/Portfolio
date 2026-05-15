"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const duration = 1500;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const capabilities = [
  { icon: "◈", label: "Digital Design", desc: "From concept to pixel-perfect execution" },
  { icon: "⬡", label: "Engineering", desc: "Scalable systems built for the long run" },
  { icon: "◎", label: "AI Integration", desc: "Embedding intelligence into every layer" },
  { icon: "△", label: "Strategy", desc: "Data-driven decisions, human-centered outcomes" },
];

const achievements = [
  { value: 15, suffix: "+", label: "PROJECTS SHIPPED" },
  { value: 98, suffix: "%", label: "CLIENT SATISFACTION" },
  { value: 6, suffix: "M", label: "COLLECTIVE EXPERIENCE" },
  { value: 10, suffix: "K", label: "USER FEEDBACK" },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-24 md:py-32 relative z-[1]"
      style={{
        background: "linear-gradient(180deg, transparent 0%, rgba(0,102,255,0.02) 50%, transparent 100%)",
      }}
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="mb-12 md:mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-4"
          >
            <span className="font-['Space_Mono'] text-[10px] text-[var(--accent-purple)] tracking-[0.4em] uppercase">
              03 — ABOUT US
            </span>
            <div className="flex-1 h-[1px] bg-[rgba(123,47,255,0.2)]" />
          </motion.div>
        </div>

        {/* Two column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-16 md:mb-24">
          {/* Left: manifesto */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-['Orbitron'] text-[clamp(28px,4vw,48px)] font-black leading-[1.1] mb-7 text-[var(--text-primary)]"
            >
              WE DON&apos;T BUILD<br />
              <span className="text-[var(--accent-purple)]">PRODUCTS.</span><br />
              WE BUILD FUTURES.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-sm md:text-[15px] text-[var(--text-secondary)] leading-[1.8] mb-5"
            >
              We are a tight-knit team of creators and engineers who believe that the most powerful ideas exist at the intersection of disciplines. No silos. No handoffs. Pure collaboration.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-sm md:text-[15px] text-[var(--text-secondary)] leading-[1.8]"
            >
              Every line of code, every design choice, every strategic decision is made with one question in mind: does this make the future better?
            </motion.p>
          </div>

          {/* Right: capabilities */}
          <div className="flex flex-col gap-0.5">
            {capabilities.map((cap, i) => (
              <motion.div
                key={cap.label}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ x: 8, backgroundColor: "rgba(123,47,255,0.04)" }}
                className="flex gap-5 items-start p-5 border-l border-[rgba(123,47,255,0.2)] cursor-none transition-all duration-300"
              >
                <span className="text-xl text-[var(--accent-purple)] leading-none mt-0.5 min-w-[24px]">
                  {cap.icon}
                </span>
                <div>
                  <div className="font-['Orbitron'] text-[13px] font-bold text-[var(--text-primary)] tracking-[0.1em] mb-1 uppercase">
                    {cap.label}
                  </div>
                  <div className="text-[13px] text-[var(--text-secondary)]">
                    {cap.desc}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-[1px] bg-[rgba(0,245,255,0.06)] border border-[rgba(0,245,255,0.06)]">
          {achievements.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 md:p-[40px_32px] glass text-center relative overflow-hidden"
            >
              <div className="font-['Orbitron'] text-3xl md:text-[40px] font-black text-[var(--accent-cyan)] [text-shadow:0_0_30px_rgba(0,245,255,0.4)] leading-none mb-2">
                <AnimatedCounter target={item.value} suffix={item.suffix} />
              </div>
              <div className="font-['Space_Mono'] text-[9px] text-[var(--text-muted)] tracking-[0.25em] uppercase">
                {item.label}
              </div>
              {/* Decorative line */}
              <div className="absolute bottom-0 left-0 w-full h-[1px] opacity-30"
                style={{ background: `linear-gradient(to right, transparent, rgba(0,245,255,${0.1 + i * 0.03}), transparent)` }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}