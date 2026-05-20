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

    const columns = Math.floor(canvas.width / 24);
    const drops: number[] = new Array(columns).fill(0).map(() => Math.random() * -50);
    const chars = "01CLOUDMINT∆∑∞⊗⊕▲◆".split("");

    let animId: number;

    const draw = () => {
      // Mint-tinted fade — much subtler than the original blue
      ctx.fillStyle = "rgba(6, 13, 15, 0.14)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)];
        const opacity = Math.random() * 0.25 + 0.05;
        ctx.fillStyle = `rgba(61, 255, 212, ${opacity})`;
        ctx.font = "11px 'Courier New', monospace";
        ctx.fillText(char, i * 24, drops[i] * 24);

        if (drops[i] * 24 > canvas.height && Math.random() > 0.98) {
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
        zIndex: 1,
        opacity: 0.5,
        pointerEvents: "none",
      }}
    />
  );
}
