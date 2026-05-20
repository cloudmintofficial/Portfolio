"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface WordCycleDividerProps {
  words: string[];
}

export default function WordCycleDivider({ words }: WordCycleDividerProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2800);
    return () => clearInterval(timer);
  }, [words]);

  return (
    <div className="py-16 md:py-24 flex items-center justify-center overflow-hidden w-full px-6" style={{ backgroundColor: "var(--bg-base)" }}>
      {/* Left line */}
      <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent to-[var(--mint-400)] opacity-30" />
      
      {/* Central word container */}
      <div className="w-[280px] md:w-[450px] text-center relative h-[40px] md:h-[60px] flex-shrink-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, filter: "blur(10px)", scale: 0.95 }}
            animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
            exit={{ opacity: 0, filter: "blur(10px)", scale: 1.05 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <span
              className="text-2xl md:text-4xl font-black tracking-[0.2em] uppercase"
              style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
            >
              {words[index]}
            </span>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Right line */}
      <div className="flex-1 h-[1px] bg-gradient-to-l from-transparent to-[var(--mint-400)] opacity-30" />
    </div>
  );
}
