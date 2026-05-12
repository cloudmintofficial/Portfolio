"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let trailX = 0, trailY = 0;
    let mouseX = 0, mouseY = 0;

    const moveCursor = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (cursorRef.current) {
        cursorRef.current.style.left = `${mouseX}px`;
        cursorRef.current.style.top = `${mouseY}px`;
      }
    };

    const animateTrail = () => {
      trailX += (mouseX - trailX) * 0.12;
      trailY += (mouseY - trailY) * 0.12;
      if (trailRef.current) {
        trailRef.current.style.left = `${trailX}px`;
        trailRef.current.style.top = `${trailY}px`;
      }
      requestAnimationFrame(animateTrail);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === "A" || target.tagName === "BUTTON" || target.closest("button") || target.closest("a")) {
        if (cursorRef.current) {
          cursorRef.current.style.width = "20px";
          cursorRef.current.style.height = "20px";
          cursorRef.current.style.background = "transparent";
          cursorRef.current.style.border = "2px solid var(--accent-cyan)";
        }
      }
    };

    const handleMouseOut = () => {
      if (cursorRef.current) {
        cursorRef.current.style.width = "12px";
        cursorRef.current.style.height = "12px";
        cursorRef.current.style.background = "var(--accent-cyan)";
        cursorRef.current.style.border = "none";
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mouseout", handleMouseOut);
    animateTrail();

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="cursor" />
      <div ref={trailRef} className="cursor-trail" />
    </>
  );
}