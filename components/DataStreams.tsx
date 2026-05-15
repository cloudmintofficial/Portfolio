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
      // Significantly lighter fade to avoid darkness
      ctx.fillStyle = "rgba(5, 11, 22, 0.12)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)];
        const opacity = Math.random() * 0.6 + 0.2; // Peak opacity 0.8
        ctx.fillStyle = `rgba(0, 160, 255, ${opacity})`;
        ctx.font = "12px 'Courier New', monospace";
        ctx.fillText(char, i * 22, drops[i] * 22);

        if (drops[i] * 22 > canvas.height && Math.random() > 0.98) {
          drops[i] = 0;
        }
        drops[i] += 0.6;
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
        opacity: 0.7,
        pointerEvents: "none",
      }}
    />
  );
}