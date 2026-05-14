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
      style={{
        padding: "140px 0",
        position: "relative",
        zIndex: 1,
        background: "linear-gradient(180deg, transparent 0%, rgba(0,102,255,0.02) 50%, transparent 100%)",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 40px" }}>
        {/* Header */}
        <div style={{ marginBottom: "80px" }}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}
          >
            <span style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "10px",
              color: "var(--accent-purple)",
              letterSpacing: "0.4em",
            }}>
              03 — ABOUT US
            </span>
            <div style={{ flex: 1, height: "1px", background: "rgba(123,47,255,0.2)" }} />
          </motion.div>
        </div>

        {/* Two column layout */}
        <div className="about-grid" style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "80px",
          alignItems: "start",
          marginBottom: "100px",
        }}>
          {/* Left: manifesto */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{
                fontFamily: "'Orbitron', monospace",
                fontSize: "clamp(28px, 3.5vw, 48px)",
                fontWeight: 900,
                lineHeight: 1.1,
                marginBottom: "28px",
                color: "var(--text-primary)",
              }}
            >
              WE DON&apos;T BUILD<br />
              <span style={{ color: "var(--accent-purple)" }}>PRODUCTS.</span><br />
              WE BUILD FUTURES.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              style={{
                fontSize: "15px",
                color: "var(--text-secondary)",
                lineHeight: 1.8,
                marginBottom: "20px",
              }}
            >
              We are a tight-knit team of creators and engineers who believe that the most powerful ideas exist at the intersection of disciplines. No silos. No handoffs. Pure collaboration.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              style={{
                fontSize: "15px",
                color: "var(--text-secondary)",
                lineHeight: 1.8,
              }}
            >
              Every line of code, every design choice, every strategic decision is made with one question in mind: does this make the future better?
            </motion.p>
          </div>

          {/* Right: capabilities */}
          <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
            {capabilities.map((cap, i) => (
              <motion.div
                key={cap.label}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ x: 8, backgroundColor: "rgba(123,47,255,0.04)" }}
                style={{
                  display: "flex",
                  gap: "20px",
                  alignItems: "flex-start",
                  padding: "20px",
                  border: "1px solid transparent",
                  borderLeft: "1px solid rgba(123,47,255,0.2)",
                  cursor: "none",
                  transition: "all 0.3s ease",
                }}
              >
                <span style={{
                  fontSize: "20px",
                  color: "var(--accent-purple)",
                  lineHeight: 1,
                  marginTop: "2px",
                  minWidth: "24px",
                }}>
                  {cap.icon}
                </span>
                <div>
                  <div style={{
                    fontFamily: "'Orbitron', monospace",
                    fontSize: "13px",
                    fontWeight: 700,
                    color: "var(--text-primary)",
                    letterSpacing: "0.1em",
                    marginBottom: "4px",
                  }}>
                    {cap.label}
                  </div>
                  <div style={{
                    fontSize: "13px",
                    color: "var(--text-secondary)",
                  }}>
                    {cap.desc}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats row */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "1px",
          background: "rgba(0,245,255,0.06)",
          border: "1px solid rgba(0,245,255,0.06)",
        }}>
          {achievements.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              style={{
                padding: "40px 32px",
                background: "var(--bg-card)",
                textAlign: "center",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div style={{
                fontFamily: "'Orbitron', monospace",
                fontSize: "40px",
                fontWeight: 900,
                color: "var(--accent-cyan)",
                textShadow: "0 0 30px rgba(0,245,255,0.4)",
                lineHeight: 1,
                marginBottom: "8px",
              }}>
                <AnimatedCounter target={item.value} suffix={item.suffix} />
              </div>
              <div style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: "9px",
                color: "var(--text-muted)",
                letterSpacing: "0.25em",
              }}>
                {item.label}
              </div>
              {/* Decorative corner */}
              <div style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "100%",
                height: "1px",
                background: `linear-gradient(to right, transparent, rgba(0,245,255,${0.1 + i * 0.03}), transparent)`,
              }} />
            </motion.div>
          ))}
        </div>
      </div>
      <style jsx>{`
        @media (max-width: 992px) {
          .about-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}