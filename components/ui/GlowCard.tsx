"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { type ReactNode } from "react";

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: string;
  tilt?: boolean;
  onClick?: () => void;
}

export default function GlowCard({
  children,
  className = "",
  glowColor = "var(--mint-400)",
  tilt = false,
  onClick,
}: GlowCardProps) {
  const [hovered, setHovered] = useState(false);
  const [rotX, setRotX] = useState(0);
  const [rotY, setRotY] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!tilt || !cardRef.current || window.innerWidth < 1024) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 14;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -14;
    setRotY(x);
    setRotX(y);
  };

  const handleMouseLeave = () => {
    setHovered(false);
    setRotX(0);
    setRotY(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      onClick={onClick}
      animate={{ rotateY: rotY, rotateX: rotX }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className={`relative bg-[var(--bg-surface)] border border-[var(--border-dim)] overflow-hidden
                  transition-all duration-300 cursor-none
                  ${hovered ? "border-[var(--border-glow)]" : ""}
                  ${className}`}
      style={{
        transformStyle: "preserve-3d",
        perspective: "1000px",
        boxShadow: hovered
          ? `0 0 40px rgba(61,255,212,0.08), inset 0 0 40px rgba(61,255,212,0.02)`
          : "none",
      }}
    >
      {/* Top accent line on hover */}
      <motion.div
        animate={{ scaleX: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute top-0 left-0 h-[1px] w-full origin-left"
        style={{
          background: `linear-gradient(to right, ${glowColor}, transparent)`,
        }}
      />

      {/* Inner glow on hover */}
      {hovered && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse at 30% 30%, ${glowColor}06 0%, transparent 65%)`,
          }}
        />
      )}

      {children}
    </motion.div>
  );
}
