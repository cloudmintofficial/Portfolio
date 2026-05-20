"use client";
import { motion } from "framer-motion";

interface SectionLabelProps {
  index: string;       // e.g. "01"
  label: string;       // e.g. "THE COLLECTIVE"
  color?: string;      // CSS color — defaults to mint
  className?: string;
}

export default function SectionLabel({
  index,
  label,
  color = "var(--mint-400)",
  className = "",
}: SectionLabelProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`flex items-center gap-3 ${className}`}
    >
      <span
        className="font-mono text-[10px] tracking-[0.4em] uppercase font-bold"
        style={{ color, fontFamily: "var(--font-mono)" }}
      >
        {index} — {label}
      </span>
      <div className="flex-1 h-[1px]" style={{ background: `${color}22` }} />
    </motion.div>
  );
}
