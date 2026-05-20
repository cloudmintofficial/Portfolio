"use client";
import { motion } from "framer-motion";

export default function GlowingLineDivider() {
  return (
    <div className="w-full py-4 md:py-6 flex justify-center items-center relative overflow-hidden" style={{ backgroundColor: "var(--bg-base)" }}>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[var(--mint-400)] to-transparent opacity-20" />
      </div>
      <motion.div
        initial={{ left: "-10%" }}
        animate={{ left: "110%" }}
        transition={{ duration: 3, ease: "easeInOut", repeat: Infinity, repeatDelay: 1 }}
        className="absolute h-[2px] w-[20%] bg-gradient-to-r from-transparent via-[var(--mint-400)] to-transparent"
        style={{ boxShadow: "0 0 20px var(--mint-400), 0 0 40px var(--mint-400)" }}
      />
    </div>
  );
}
