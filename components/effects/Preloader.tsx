"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { hasVisited, markVisited } from "@/lib/storage";

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (hasVisited()) {
      onComplete();
      return;
    }
    markVisited();

    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(containerRef.current, {
          yPercent: -100,
          duration: 0.7,
          ease: "power4.inOut",
          onComplete,
        });
      },
    });

    tl.fromTo(
      logoRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }
    )
      .fromTo(
        labelRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.4, ease: "power2.out" },
        "-=0.2"
      )
      .to(barRef.current, {
        scaleX: 1,
        duration: 1.2,
        ease: "power2.inOut",
      })
      .to([logoRef.current, labelRef.current], {
        opacity: 0,
        y: -10,
        duration: 0.3,
        stagger: 0.05,
      });

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[10000] flex flex-col items-center justify-center"
      style={{ backgroundColor: "var(--bg-base)" }}
    >
      {/* Grid backdrop */}
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />

      {/* Logo */}
      <div ref={logoRef} className="relative mb-8 opacity-0">
        <div
          className="text-[clamp(36px,8vw,72px)] font-black tracking-[0.15em] uppercase"
          style={{
            fontFamily: "var(--font-display)",
            color: "var(--text-primary)",
          }}
        >
          CLOUD
          <span
            style={{
              color: "transparent",
              WebkitTextStroke: "1.5px var(--mint-400)",
            }}
          >
            MINT
          </span>
        </div>
        {/* Mint glow behind logo */}
        <div
          className="absolute inset-x-[-20%] inset-y-[-30%] blur-[60px] -z-10 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(61,255,212,0.12) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Label */}
      <div
        ref={labelRef}
        className="mb-10 opacity-0"
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "10px",
          letterSpacing: "0.4em",
          color: "var(--text-muted)",
          textTransform: "uppercase",
        }}
      >
        INITIALISING EXPERIENCE
      </div>

      {/* Progress bar */}
      <div
        className="w-48 h-[1px] overflow-hidden"
        style={{ background: "var(--border-dim)" }}
      >
        <div
          ref={barRef}
          className="h-full origin-left"
          style={{
            background:
              "linear-gradient(to right, var(--mint-400), var(--teal-accent))",
            transform: "scaleX(0)",
          }}
        />
      </div>
    </div>
  );
}
