"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const teamMembers = [
  {
    id: "01",
    name: "Arjith",
    role: "Creative Director",
    specialty: "VISUAL SYSTEMS",
    bio: "Architect of visual experiences that blur the line between digital and physical reality.",
    skills: ["UI/UX", "Brand Identity", "Motion Design"],
    accent: "#00f5ff",
    status: "ACTIVE",
  },
  {
    id: "02",
    name: "Vixith",
    role: "Lead Engineer",
    specialty: "FULL-STACK DEV",
    bio: "Turns complex problems into elegant code. Obsessed with performance and clean architecture.",
    skills: ["React", "Node.js", "Cloud Infra"],
    accent: "#7b2fff",
    status: "ACTIVE",
  },
  {
    id: "03",
    name: "Rishi",
    role: "AI/ML Specialist",
    specialty: "NEURAL SYSTEMS",
    bio: "Builds intelligent systems that learn, adapt and evolve. Pushing the frontier of what machines can do.",
    skills: ["Python", "TensorFlow", "Data Viz"],
    accent: "#ff00aa",
    status: "ACTIVE",
  },
  {
    id: "04",
    name: "Chandradeep",
    role: "Product Strategist",
    specialty: "GROWTH SYSTEMS",
    bio: "Transforms user insight into product decisions that scale. Where research meets market reality.",
    skills: ["Strategy", "Research", "Analytics"],
    accent: "#00ff88",
    status: "ACTIVE",
  },
];

function MemberCard({ member, index }: { member: typeof teamMembers[0]; index: number }) {
  const [hovered, setHovered] = useState(false);
  const [rotX, setRotX] = useState(0);
  const [rotY, setRotY] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 16;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -16;
    setRotY(x);
    setRotX(y);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: index * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setHovered(false); setRotX(0); setRotY(0); }}
      onMouseMove={handleMouseMove}
      animate={{ rotateY: rotY, rotateX: rotX }}
      style={{
        transformStyle: "preserve-3d",
        position: "relative",
        cursor: "none",
        perspective: "800px",
      }}
    >
      {/* Animated holo border */}
      <div style={{
        position: "absolute",
        inset: "-1px",
        background: hovered
          ? `linear-gradient(135deg, ${member.accent}cc, transparent 45%, ${member.accent}44)`
          : "linear-gradient(135deg, rgba(255,255,255,0.04), transparent)",
        zIndex: 0,
        transition: "all 0.4s ease",
      }} />

      <div style={{
        position: "relative",
        zIndex: 1,
        background: "var(--bg-card)",
        border: "1px solid rgba(255,255,255,0.04)",
        padding: "28px",
        overflow: "hidden",
      }}>
        {/* Corner brackets */}
        {(["tl","tr","bl","br"] as const).map((c) => (
          <div key={c} style={{
            position: "absolute",
            width: "12px",
            height: "12px",
            top: c.startsWith("t") ? "10px" : "auto",
            bottom: c.startsWith("b") ? "10px" : "auto",
            left: c.endsWith("l") ? "10px" : "auto",
            right: c.endsWith("r") ? "10px" : "auto",
            borderTop: c.startsWith("t") ? `1px solid ${member.accent}` : "none",
            borderBottom: c.startsWith("b") ? `1px solid ${member.accent}` : "none",
            borderLeft: c.endsWith("l") ? `1px solid ${member.accent}` : "none",
            borderRight: c.endsWith("r") ? `1px solid ${member.accent}` : "none",
            opacity: hovered ? 1 : 0.3,
            transition: "opacity 0.3s",
          }} />
        ))}

        {/* Top row */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
          <span style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: "10px",
            color: member.accent,
            letterSpacing: "0.2em",
            opacity: 0.7,
          }}>
            MEMBER_{member.id}
          </span>
          <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
            <div style={{
              width: "5px", height: "5px", borderRadius: "50%",
              background: "#00ff88",
              boxShadow: "0 0 8px #00ff88",
              animation: "pulse 2s ease-in-out infinite",
            }} />
            <span style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "8px", color: "#00ff88", letterSpacing: "0.2em",
            }}>
              {member.status}
            </span>
          </div>
        </div>

        {/* Avatar */}
        <div style={{ position: "relative", width: "76px", height: "76px", marginBottom: "20px" }}>
          <div style={{
            width: "76px", height: "76px",
            border: `2px solid ${member.accent}`,
            display: "flex", alignItems: "center", justifyContent: "center",
            background: `linear-gradient(135deg, ${member.accent}12, ${member.accent}04)`,
            overflow: "hidden",
            position: "relative",
          }}>
            <svg width="44" height="44" viewBox="0 0 48 48" fill="none">
              <circle cx="24" cy="18" r="10" stroke={member.accent} strokeWidth="1.5" fill={`${member.accent}18`} />
              <path d="M8 44c0-8.837 7.163-16 16-16s16 7.163 16 16" stroke={member.accent} strokeWidth="1.5" fill={`${member.accent}18`} />
            </svg>
            {hovered && (
              <div style={{
                position: "absolute",
                left: 0, width: "100%", height: "2px",
                background: `linear-gradient(to right, transparent, ${member.accent}, transparent)`,
                animation: "scanline-anim 1.4s linear infinite",
              }} />
            )}
          </div>
          {hovered && (
            <div style={{
              position: "absolute",
              inset: "-8px",
              border: `1px solid ${member.accent}`,
              borderRadius: "1px",
              animation: "pulse-ring 1.8s ease-out infinite",
              opacity: 0,
            }} />
          )}
        </div>

        {/* Name */}
        <h3 style={{
          fontFamily: "'Orbitron', monospace",
          fontSize: "17px", fontWeight: 800,
          color: "var(--text-primary)",
          letterSpacing: "0.04em",
          marginBottom: "3px",
        }}>
          {member.name}
        </h3>
        <div style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: "9px", color: member.accent, letterSpacing: "0.25em",
          marginBottom: "14px",
        }}>
          {member.role}
        </div>

        {/* Badge */}
        <div style={{
          display: "inline-block",
          padding: "3px 10px",
          border: `1px solid ${member.accent}33`,
          background: `${member.accent}0a`,
          marginBottom: "14px",
        }}>
          <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "8px", color: member.accent, letterSpacing: "0.2em" }}>
            {member.specialty}
          </span>
        </div>

        {/* Bio */}
        <p style={{
          fontSize: "13px", color: "var(--text-secondary)",
          lineHeight: 1.65, marginBottom: "18px",
        }}>
          {member.bio}
        </p>

        {/* Skills */}
        <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
          {member.skills.map((s) => (
            <span key={s} style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "8px", padding: "3px 9px",
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.07)",
              color: "var(--text-muted)", letterSpacing: "0.1em",
            }}>
              {s}
            </span>
          ))}
        </div>

        {/* Bottom accent line on hover */}
        <motion.div
          animate={{ scaleX: hovered ? 1 : 0 }}
          transition={{ duration: 0.35 }}
          style={{
            position: "absolute", bottom: 0, left: 0,
            height: "2px", width: "100%",
            background: `linear-gradient(to right, ${member.accent}, transparent)`,
            transformOrigin: "left",
          }}
        />

        {/* Background glow */}
        {hovered && (
          <div style={{
            position: "absolute", inset: 0,
            background: `radial-gradient(ellipse at 40% 40%, ${member.accent}07 0%, transparent 65%)`,
            pointerEvents: "none",
          }} />
        )}
      </div>
    </motion.div>
  );
}

export default function TeamSection() {
  const ref = useRef(null);
  useInView(ref, { once: true });

  return (
    <section
      id="team"
      ref={ref}
      style={{ padding: "130px 0", position: "relative", zIndex: 2 }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 40px" }}>

        {/* Header */}
        <div style={{ marginBottom: "72px" }}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}
          >
            <span style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "10px", color: "var(--accent-cyan)", letterSpacing: "0.4em",
            }}>
              02 — THE COLLECTIVE
            </span>
            <div style={{ flex: 1, height: "1px", background: "rgba(0,245,255,0.1)" }} />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            style={{
              fontFamily: "'Orbitron', monospace",
              fontSize: "clamp(34px, 5vw, 60px)",
              fontWeight: 900,
              letterSpacing: "-0.02em",
              lineHeight: 1.05,
              color: "var(--text-primary)",
            }}
          >
            MEET THE<br />
            <span style={{ color: "transparent", WebkitTextStroke: "2px var(--accent-cyan)" }}>
              ARCHITECTS
            </span>
          </motion.h2>
        </div>

        {/* Cards */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(256px, 1fr))",
          gap: "18px",
        }}>
          {teamMembers.map((member, i) => (
            <MemberCard key={member.id} member={member} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}