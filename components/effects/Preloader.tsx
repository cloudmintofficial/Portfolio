"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import logoIcon from "@/icon.png";

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    // Phase 1: Central vertical line appears (grows height-wise)
    // Phase 2: Line splits left/right, logo + rotating sci-fi rings reveal
    // Phase 3: Vault door unlocks (Left/Right split screen exit)
    const timers = [
      setTimeout(() => setPhase(1), 100),
      setTimeout(() => setPhase(2), 800),
      setTimeout(() => setPhase(3), 2000),
      setTimeout(() => onComplete(), 2500),
    ];
    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase < 3 && (
        <div className="fixed inset-0 z-[10000] pointer-events-none overflow-hidden">

          {/* Left Vault Door */}
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 1.0, ease: [0.76, 0, 0.24, 1] }}
            className="absolute top-0 left-0 w-1/2 h-full flex justify-end items-center"
            style={{
              backgroundColor: "var(--bg-base)",
              borderRight: "1px solid rgba(61, 255, 212, 0.15)"
            }}
          >
            {/* Left Gate Line */}
            <motion.div
              initial={{ scaleY: 0, opacity: 0 }}
              animate={{
                scaleY: phase >= 1 ? 1 : 0,
                opacity: phase >= 1 ? 1 : 0,
                x: phase >= 2 ? -180 : 0
              }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="w-[1px] h-[320px] md:h-[520px] origin-center"
              style={{
                background: "linear-gradient(180deg, transparent, var(--mint-400), transparent)",
                boxShadow: "0 0 15px var(--mint-400)"
              }}
            />
          </motion.div>

          {/* Right Vault Door */}
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 1.0, ease: [0.76, 0, 0.24, 1] }}
            className="absolute top-0 right-0 w-1/2 h-full flex justify-start items-center"
            style={{
              backgroundColor: "var(--bg-base)",
              borderLeft: "1px solid rgba(61, 255, 212, 0.15)"
            }}
          >
            {/* Right Gate Line */}
            <motion.div
              initial={{ scaleY: 0, opacity: 0 }}
              animate={{
                scaleY: phase >= 1 ? 1 : 0,
                opacity: phase >= 1 ? 1 : 0,
                x: phase >= 2 ? 180 : 0
              }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="w-[1px] h-[320px] md:h-[520px] origin-center"
              style={{
                background: "linear-gradient(180deg, transparent, var(--mint-400), transparent)",
                boxShadow: "0 0 15px var(--mint-400)"
              }}
            />
          </motion.div>

          {/* Central Content Container (Hologram Reveal) */}
          <motion.div
            className="absolute inset-0 flex flex-col items-center justify-center z-20"
            exit={{ opacity: 0, scale: 0.9, filter: "blur(15px)" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Sci-Fi Outer Dashed Ring (Clockwise) */}
            <motion.div
              initial={{ rotate: 0, opacity: 0, scale: 0.8 }}
              animate={{
                rotate: phase >= 2 ? 360 : 0,
                opacity: phase >= 2 ? 0.25 : 0,
                scale: phase >= 2 ? 1 : 0.8
              }}
              transition={{
                rotate: { duration: 12, ease: "linear", repeat: Infinity },
                opacity: { duration: 1.0 },
                scale: { duration: 1.0 }
              }}
              className="absolute rounded-full"
              style={{
                width: "280px",
                height: "280px",
                border: "2px dashed var(--mint-400)",
                boxShadow: "0 0 20px rgba(61, 255, 212, 0.08)"
              }}
            />

            {/* Sci-Fi Inner Dashed Ring (Counter-Clockwise) */}
            <motion.div
              initial={{ rotate: 0, opacity: 0, scale: 0.85 }}
              animate={{
                rotate: phase >= 2 ? -360 : 0,
                opacity: phase >= 2 ? 0.35 : 0,
                scale: phase >= 2 ? 1 : 0.85
              }}
              transition={{
                rotate: { duration: 8, ease: "linear", repeat: Infinity },
                opacity: { duration: 1.0 },
                scale: { duration: 1.0 }
              }}
              className="absolute rounded-full"
              style={{
                width: "240px",
                height: "240px",
                border: "1px dashed var(--mint-400)",
                borderStyle: "double dashed",
                boxShadow: "0 0 15px rgba(61, 255, 212, 0.05)"
              }}
            />

            {/* The Literal Logo (Sized Up) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, filter: "blur(15px)" }}
              animate={{
                opacity: phase >= 2 ? 1 : 0,
                scale: phase >= 2 ? 1 : 0.8,
                filter: phase >= 2 ? "blur(0px)" : "blur(15px)"
              }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
              className="relative z-10 flex flex-col items-center justify-center"
            >
              <Image
                src={logoIcon}
                alt="Cloud Mint Logo"
                width={120}
                height={120}
                className="object-contain mix-blend-screen drop-shadow-[0_0_25px_rgba(61,255,212,0.65)]"
                priority
              />

              {/* Logo Text (Sized Up) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: phase >= 2 ? 1 : 0, y: phase >= 2 ? 0 : 20 }}
                transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
                className="mt-8 text-[15px] md:text-[18px] font-black tracking-[0.5em] uppercase"
                style={{
                  fontFamily: "var(--font-display)",
                  color: "var(--mint-400)",
                  textShadow: "0 0 15px rgba(61, 255, 212, 0.5)"
                }}
              >
                CLOUDMINT
              </motion.div>
            </motion.div>
          </motion.div>

        </div>
      )}
    </AnimatePresence>
  );
}
