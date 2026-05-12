"use client";

import { useEffect, useRef } from "react";

export default function DataStreams() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();

    const columns = Math.floor(canvas.width / 22);
    const drops: number[] = new Array(columns).fill(0).map(() => Math.random() * -50);
    const chars = "01アイウエオカキクケコCLOUNDMINT∆∑∞⊗⊕▲◆".split("");

    let animId: number;

    const draw = () => {
      // Very subtle fade — keeps trails short
      ctx.fillStyle = "rgba(2, 4, 8, 0.06)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)];
        const opacity = Math.random() * 0.25 + 0.04;
        ctx.fillStyle = `rgba(0, 102, 255, ${opacity})`;
        ctx.font = "11px 'Courier New', monospace";
        ctx.fillText(char, i * 22, drops[i] * 22);

        if (drops[i] * 22 > canvas.height && Math.random() > 0.97) {
          drops[i] = 0;
        }
        drops[i] += 0.5;
      }

      animId = requestAnimationFrame(draw);
    };

    draw();

    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 1,          // stays behind all content (sections use zIndex 2+)
        opacity: 0.5,
        pointerEvents: "none",
      }}
    />
  );
}