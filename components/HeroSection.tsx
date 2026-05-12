"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const stats = [
  { value: "04", label: "TEAM MEMBERS" },
  { value: "∞", label: "CREATIVITY" },
  { value: "01", label: "VISION" },
];

export default function HeroSection() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setReady(true);
  }, []);

  if (!ready) return null;

  return (
    <section
      id="hero"
      className="grid-bg"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        zIndex: 2,
        backgroundColor: "transparent",
      }}
    >
      {/* Ambient glow blobs */}
      <div style={{
        position: "absolute",
        top: "20%",
        left: "15%",
        width: "400px",
        height: "400px",
        background: "radial-gradient(circle, rgba(0,102,255,0.1) 0%, transparent 70%)",
        borderRadius: "50%",
        filter: "blur(60px)",
        pointerEvents: "none",
        zIndex: 0,
      }} />
      <div style={{
        position: "absolute",
        bottom: "20%",
        right: "15%",
        width: "300px",
        height: "300px",
        background: "radial-gradient(circle, rgba(123,47,255,0.1) 0%, transparent 70%)",
        borderRadius: "50%",
        filter: "blur(60px)",
        pointerEvents: "none",
        zIndex: 0,
      }} />

      {/* Orbit rings — right side decoration */}
      <div style={{
        position: "absolute",
        right: "6%",
        top: "50%",
        transform: "translateY(-50%)",
        width: "280px",
        height: "280px",
        pointerEvents: "none",
        zIndex: 1,
      }}>
        {[0, 1, 2].map((i) => (
          <div key={i} style={{
            position: "absolute",
            inset: `${i * 36}px`,
            border: `1px solid rgba(0,245,255,${0.14 - i * 0.04})`,
            borderRadius: "50%",
            animation: `spin ${8 + i * 5}s linear infinite ${i % 2 !== 0 ? "reverse" : ""}`,
          }}>
            <div style={{
              position: "absolute",
              width: "6px",
              height: "6px",
              background: i === 0 ? "var(--accent-cyan)" : i === 1 ? "var(--accent-purple)" : "var(--accent-pink)",
              borderRadius: "50%",
              top: "-3px",
              left: "50%",
              transform: "translateX(-50%)",
              boxShadow: `0 0 10px ${i === 0 ? "var(--accent-cyan)" : i === 1 ? "var(--accent-purple)" : "var(--accent-pink)"}`,
            }} />
          </div>
        ))}
        <div style={{
          position: "absolute",
          inset: "88px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "'Orbitron', monospace",
          fontSize: "10px",
          color: "rgba(0,245,255,0.45)",
          letterSpacing: "0.08em",
          textAlign: "center",
          lineHeight: 1.5,
        }}>
          TEAM<br />CLOUNDMINT
        </div>
      </div>

      {/* Main content */}
      <div style={{
        maxWidth: "860px",
        padding: "0 40px",
        position: "relative",
        zIndex: 3,
      }}>
        {/* Pre-label */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "28px" }}
        >
          <div style={{ width: "36px", height: "1px", background: "var(--accent-cyan)" }} />
          <span style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: "10px",
            letterSpacing: "0.35em",
            color: "var(--accent-cyan)",
          }}>
            EST. 2026 — COLLECTIVE.001
          </span>
        </motion.div>

        {/* Main headline */}
        <div style={{ marginBottom: "32px" }}>
          {["WE BUILD", "THE FUTURE"].map((line, i) => (
            <div key={i} style={{ overflow: "hidden" }}>
              <motion.h1
                data-text={line}
                className="glitch-wrapper"
                initial={{ y: 110, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.35 + i * 0.18, duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  fontFamily: "'Orbitron', monospace",
                  fontSize: "clamp(48px, 8vw, 96px)",
                  fontWeight: 900,
                  lineHeight: 1.0,
                  letterSpacing: "-0.02em",
                  color: i === 0 ? "var(--text-primary)" : "transparent",
                  WebkitTextStroke: i === 1 ? "2px var(--accent-cyan)" : "none",
                  marginBottom: "6px",
                }}
              >
                {line}
              </motion.h1>
            </div>
          ))}
        </div>

        {/* Sub-text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.6 }}
          style={{
            fontSize: "15px",
            color: "var(--text-secondary)",
            lineHeight: 1.8,
            maxWidth: "500px",
            marginBottom: "48px",
          }}
        >
          A collective of four minds pushing boundaries at the intersection of design, technology, and human experience.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.92, duration: 0.6 }}
          style={{ display: "flex", gap: "16px", alignItems: "center", marginBottom: "72px", flexWrap: "wrap" }}
        >
          <a href="#team" style={{ textDecoration: "none", cursor: "none" }}>
            <motion.button
              whileHover={{ scale: 1.03, boxShadow: "0 0 36px rgba(0,245,255,0.35)" }}
              whileTap={{ scale: 0.97 }}
              style={{
                padding: "14px 34px",
                background: "var(--accent-cyan)",
                border: "none",
                color: "#020408",
                fontFamily: "'Orbitron', monospace",
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.25em",
                cursor: "none",
              }}
            >
              MEET THE TEAM
            </motion.button>
          </a>
          <a href="#about" style={{ textDecoration: "none", cursor: "none" }}>
            <motion.button
              whileHover={{ borderColor: "rgba(0,245,255,0.7)", color: "var(--accent-cyan)" }}
              style={{
                padding: "14px 34px",
                background: "transparent",
                border: "1px solid rgba(0,245,255,0.25)",
                color: "var(--text-secondary)",
                fontFamily: "'Orbitron', monospace",
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.25em",
                cursor: "none",
                transition: "all 0.3s ease",
              }}
            >
              OUR STORY
            </motion.button>
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          style={{
            display: "flex",
            gap: "48px",
            paddingTop: "28px",
            borderTop: "1px solid rgba(0,245,255,0.08)",
          }}
        >
          {stats.map((stat, i) => (
            <div key={i}>
              <div style={{
                fontFamily: "'Orbitron', monospace",
                fontSize: "30px",
                fontWeight: 900,
                color: "var(--accent-cyan)",
                textShadow: "0 0 24px rgba(0,245,255,0.45)",
                lineHeight: 1,
                marginBottom: "5px",
              }}>
                {stat.value}
              </div>
              <div style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: "9px",
                color: "var(--text-muted)",
                letterSpacing: "0.25em",
              }}>
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
        transition={{ delay: 1.6 }}
        style={{
          position: "absolute",
          bottom: "36px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
          zIndex: 3,
        }}
      >
        <span style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: "8px",
          letterSpacing: "0.35em",
          color: "var(--text-muted)",
        }}>
          SCROLL
        </span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          style={{
            width: "1px",
            height: "36px",
            background: "linear-gradient(to bottom, var(--accent-cyan), transparent)",
          }}
        />
      </motion.div>
    </section>
  );
}