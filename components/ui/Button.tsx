"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";

type ButtonVariant = "filled" | "ghost" | "icon";

interface ButtonProps {
  variant?: ButtonVariant;
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  fullWidth?: boolean;
}

const base =
  "inline-flex items-center justify-center gap-2 font-bold tracking-[0.2em] uppercase transition-all duration-300 cursor-none select-none disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<ButtonVariant, string> = {
  filled: `px-8 py-3.5 text-[11px] bg-[var(--mint-400)] text-[#040a0c] hover:bg-[var(--mint-500)]
           shadow-[0_0_0_rgba(61,255,212,0)] hover:shadow-[0_0_30px_rgba(61,255,212,0.3)]`,
  ghost: `px-8 py-3.5 text-[11px] bg-transparent border border-[var(--border-glow)] text-[var(--text-secondary)]
          hover:border-[var(--mint-400)] hover:text-[var(--mint-400)] hover:bg-[var(--mint-glow-sm)]`,
  icon: `p-3 bg-transparent border border-[var(--border-dim)] text-[var(--text-muted)]
         hover:border-[var(--border-glow)] hover:text-[var(--mint-400)]`,
};

export default function Button({
  variant = "filled",
  children,
  onClick,
  href,
  className = "",
  disabled = false,
  type = "button",
  fullWidth = false,
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${fullWidth ? "w-full" : ""} ${className}`;

  if (href) {
    return (
      <motion.a
        href={href}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
        className={classes}
        style={{ fontFamily: "var(--font-display)" }}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      className={classes}
      style={{ fontFamily: "var(--font-display)" }}
    >
      {children}
    </motion.button>
  );
}
