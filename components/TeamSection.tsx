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
    name: "Vexith",
    role: "Lead Engineer",
    specialty: "FRONT-END DEV",
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
  {
    id: "05",
    name: "Surya",
    role: "Operations Manager",
    specialty: "BACKEND DEV",
    bio: "Optimizes backend system latency, handles infrastructure scaling, and secures communication pipelines.",
    skills: ["Backend", "Optimization", "Next.js"],
    accent: "#ffdd00",
    status: "ACTIVE",
  },
];

function MemberCard({ member, index }: { member: typeof teamMembers[0]; index: number }) {
  const [hovered, setHovered] = useState(false);
  const [rotX, setRotX] = useState(0);
  const [rotY, setRotY] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current || window.innerWidth < 1024) return;
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
      className="relative cursor-none h-full"
      style={{ transformStyle: "preserve-3d", perspective: "800px" }}
    >
      {/* Animated holo border */}
      <div className="absolute -inset-[1px] transition-all duration-400 z-0"
        style={{
          background: hovered
            ? `linear-gradient(135deg, ${member.accent}cc, transparent 45%, ${member.accent}44)`
            : "linear-gradient(135deg, rgba(255,255,255,0.04), transparent)",
        }}
      />

      <div className="relative z-[1] bg-[var(--bg-card)] border border-[rgba(255,255,255,0.04)] p-6 md:p-7 overflow-hidden h-full flex flex-col">
        {/* Corner brackets */}
        {(["tl", "tr", "bl", "br"] as const).map((c) => (
          <div key={c} className="absolute w-3 h-3 transition-opacity duration-300"
            style={{
              top: c.startsWith("t") ? "10px" : "auto",
              bottom: c.startsWith("b") ? "10px" : "auto",
              left: c.endsWith("l") ? "10px" : "auto",
              right: c.endsWith("r") ? "10px" : "auto",
              borderTop: c.startsWith("t") ? `1px solid ${member.accent}` : "none",
              borderBottom: c.startsWith("b") ? `1px solid ${member.accent}` : "none",
              borderLeft: c.endsWith("l") ? `1px solid ${member.accent}` : "none",
              borderRight: c.endsWith("r") ? `1px solid ${member.accent}` : "none",
              opacity: hovered ? 1 : 0.3,
            }}
          />
        ))}

        {/* Top row */}
        <div className="flex justify-between items-center mb-5">
          <span className="font-['Space_Mono'] text-[9px] md:text-[10px] tracking-[0.2em] opacity-70" style={{ color: member.accent }}>
            MEMBER_{member.id}
          </span>
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-[#00ff88] shadow-[0_0_8px_#00ff88] animate-[pulse_2s_ease-in-out_infinite]" />
            <span className="font-['Space_Mono'] text-[8px] text-[#00ff88] tracking-[0.2em] uppercase">
              {member.status}
            </span>
          </div>
        </div>

        {/* Avatar */}
        <div className="relative w-16 h-16 md:w-[76px] md:h-[76px] mb-5">
          <div className="w-full h-full border-2 flex items-center justify-center overflow-hidden relative"
            style={{
              borderColor: member.accent,
              background: `linear-gradient(135deg, ${member.accent}12, ${member.accent}04)`,
            }}
          >
            <svg width="40" height="40" viewBox="0 0 48 48" fill="none">
              <circle cx="24" cy="18" r="10" stroke={member.accent} strokeWidth="1.5" fill={`${member.accent}18`} />
              <path d="M8 44c0-8.837 7.163-16 16-16s16 7.163 16 16" stroke={member.accent} strokeWidth="1.5" fill={`${member.accent}18`} />
            </svg>
            {hovered && (
              <div className="absolute left-0 w-full h-[2px] animate-[scanline-anim_1.4s_linear_infinite]"
                style={{ background: `linear-gradient(to right, transparent, ${member.accent}, transparent)` }}
              />
            )}
          </div>
          {hovered && (
            <div className="absolute -inset-2 border rounded-[1px] animate-[pulse-ring_1.8s_ease-out_infinite] opacity-0"
              style={{ borderColor: member.accent }}
            />
          )}
        </div>

        {/* Name */}
        <h3 className="font-['Orbitron'] text-base md:text-[17px] font-extrabold text-[var(--text-primary)] tracking-[0.04em] mb-1">
          {member.name}
        </h3>
        <div className="font-['Space_Mono'] text-[9px] tracking-[0.25em] mb-4 uppercase" style={{ color: member.accent }}>
          {member.role}
        </div>

        {/* Badge */}
        <div className="inline-block px-2.5 py-1 border mb-4 self-start"
          style={{ borderColor: `${member.accent}33`, background: `${member.accent}0a` }}
        >
          <span className="font-['Space_Mono'] text-[8px] tracking-[0.2em] uppercase" style={{ color: member.accent }}>
            {member.specialty}
          </span>
        </div>

        {/* Bio */}
        <p className="text-xs md:text-[13px] text-[var(--text-secondary)] leading-[1.65] mb-6 flex-grow">
          {member.bio}
        </p>

        {/* Skills */}
        <div className="flex gap-1.5 flex-wrap">
          {member.skills.map((s) => (
            <span key={s} className="font-['Space_Mono'] text-[8px] px-2 py-0.5 bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.07)] text-[var(--text-muted)] tracking-[0.1em] uppercase">
              {s}
            </span>
          ))}
        </div>

        {/* Bottom accent line on hover */}
        <motion.div
          animate={{ scaleX: hovered ? 1 : 0 }}
          transition={{ duration: 0.35 }}
          className="absolute bottom-0 left-0 h-[2px] w-full origin-left"
          style={{ background: `linear-gradient(to right, ${member.accent}, transparent)` }}
        />

        {/* Background glow */}
        {hovered && (
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: `radial-gradient(ellipse at 40% 40%, ${member.accent}07 0%, transparent 65%)` }}
          />
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
      className="py-24 md:py-32 relative z-[2]"
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">

        {/* Header */}
        <div className="mb-14 md:mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-4"
          >
            <span className="font-['Space_Mono'] text-[10px] text-[var(--accent-cyan)] tracking-[0.4em] uppercase">
              02 — THE COLLECTIVE
            </span>
            <div className="flex-1 h-[1px] bg-[rgba(0,245,255,0.1)]" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-['Orbitron'] text-[clamp(32px,6vw,60px)] font-black tracking-[-0.02em] leading-tight text-[var(--text-primary)]"
          >
            MEET THE<br />
            <span className="text-transparent" style={{ WebkitTextStroke: "2px var(--accent-cyan)" }}>
              ARCHITECTS
            </span>
          </motion.h2>
        </div>

        {/* Cards — Centered for uneven counts */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          {teamMembers.map((member, i) => (
            <div key={member.id} className="w-full sm:w-[calc(50%-16px)] lg:w-[calc(33.333%-22px)] max-w-[380px]">
              <MemberCard member={member} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}