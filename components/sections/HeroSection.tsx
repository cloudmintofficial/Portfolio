"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Button from "@/components/ui/Button";
import Preloader from "@/components/effects/Preloader";

const HEADLINE_LINES = ["CLOUD", "MINT"];

export default function HeroSection() {
  const [ready, setReady] = useState(false);
  const [preloaderDone, setPreloaderDone] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Parallax on blobs
  const { scrollY } = useScroll();
  const blobY1 = useTransform(scrollY, [0, 600], [0, -80]);
  const blobY2 = useTransform(scrollY, [0, 600], [0, -50]);

  useEffect(() => {
    const handle = requestAnimationFrame(() => setReady(true));
    return () => cancelAnimationFrame(handle);
  }, []);

  if (!ready) return null;

  return (
    <>
      {!preloaderDone && (
        <Preloader onComplete={() => setPreloaderDone(true)} />
      )}

      <section
        id="hero"
        ref={sectionRef}
        className="min-h-screen flex items-center relative overflow-hidden z-[2]"
        style={{ backgroundColor: "var(--bg-base)" }}
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-bg.png"
            alt="Abstract Background"
            fill
            priority
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--bg-base)]/60 to-[var(--bg-base)]" />
        </div>
        {/* Ambient glow blobs — parallax */}
        <motion.div
          style={{ y: blobY1 }}
          className="absolute top-[5%] left-[0%] w-[600px] md:w-[900px] h-[600px] md:h-[900px]
                     rounded-full pointer-events-none"
          aria-hidden
        >
          <div
            className="w-full h-full rounded-full blur-[100px]"
            style={{ background: "radial-gradient(circle, rgba(61,255,212,0.10) 0%, transparent 70%)" }}
          />
        </motion.div>
        <motion.div
          style={{ y: blobY2 }}
          className="absolute bottom-[0%] right-[0%] w-[500px] md:w-[700px] h-[500px] md:h-[700px]
                     rounded-full pointer-events-none"
          aria-hidden
        >
          <div
            className="w-full h-full rounded-full blur-[90px]"
            style={{ background: "radial-gradient(circle, rgba(15,188,249,0.08) 0%, transparent 70%)" }}
          />
        </motion.div>

        {/* Main content — left aligned */}
        <div className="section-container w-full relative z-[3] pt-20 pb-20 md:pt-28 md:pb-28">
          <div className="max-w-[700px]">

            {/* Headline */}
            <div className="mb-8 md:mb-10">
              {HEADLINE_LINES.map((line, i) => (
                <div key={line} className="overflow-hidden">
                  <motion.h1
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: preloaderDone ? 0 : 100, opacity: preloaderDone ? 1 : 0 }}
                    transition={{ delay: 0.2 + i * 0.12, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                    className="text-[clamp(56px,14vw,130px)] font-black leading-[0.9] tracking-[-0.03em]"
                    style={{
                      fontFamily: "var(--font-display)",
                      color: i === 0 ? "var(--text-primary)" : "transparent",
                      WebkitTextStroke: i === 1 ? "1.5px var(--mint-400)" : "none",
                    }}
                  >
                    {line}
                  </motion.h1>
                </div>
              ))}
            </div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: preloaderDone ? 1 : 0, y: preloaderDone ? 0 : 20 }}
              transition={{ delay: 0.55, duration: 0.7 }}
              className="text-base md:text-lg leading-[1.75] mb-10 md:mb-12 max-w-[480px]"
              style={{ fontFamily: "var(--font-body)", color: "var(--text-secondary)" }}
            >
              We craft digital experiences that grow. Design, engineering, and AI — working as one.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: preloaderDone ? 1 : 0, y: preloaderDone ? 0 : 16 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 mb-16 md:mb-20"
            >
              <Button variant="filled" href="/work">
                View Our Work →
              </Button>
              <Button variant="ghost" href="/team">
                Meet the Team
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: preloaderDone ? 1 : 0 }}
              transition={{ delay: 0.95, duration: 0.8 }}
              className="flex gap-10 md:gap-16 pt-8 flex-wrap border-t"
              style={{ borderColor: "var(--border-dim)" }}
            >
              {[
                { value: "05", label: "Team Members" },
                { value: "15+", label: "Projects Shipped" },
                { value: "∞", label: "Drive" },
              ].map((stat, i) => (
                <div key={i} className="flex flex-col gap-1.5">
                  <div
                    className="text-3xl md:text-4xl font-black leading-none glow-mint"
                    style={{ fontFamily: "var(--font-display)", color: "var(--mint-400)" }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="text-[9px] md:text-[10px] tracking-[0.3em] uppercase"
                    style={{ fontFamily: "var(--font-mono)", color: "var(--text-muted)" }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: preloaderDone ? 1 : 0 }}
          transition={{ delay: 1.4 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-[3]"
        >
          <span
            className="text-[8px] tracking-[0.4em] uppercase"
            style={{ fontFamily: "var(--font-mono)", color: "var(--text-muted)" }}
          >
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-[1px] h-8"
            style={{ background: "linear-gradient(to bottom, var(--mint-400), transparent)", opacity: 0.4 }}
          />
        </motion.div>
      </section>
    </>
  );
}
