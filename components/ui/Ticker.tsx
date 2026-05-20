"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface TickerProps {
  items: string[];
  speed?: number;       // pixels per second — lower = slower
  separator?: string;
  className?: string;
  itemClassName?: string;
  style?: React.CSSProperties;
}

export default function Ticker({
  items,
  speed = 60,
  separator = "✦",
  className = "",
  itemClassName = "",
  style,
}: TickerProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const totalWidth = track.scrollWidth / 2;
    const duration = totalWidth / speed;

    tweenRef.current = gsap.to(track, {
      x: `-${totalWidth}px`,
      duration,
      ease: "none",
      repeat: -1,
    });

    return () => {
      tweenRef.current?.kill();
    };
  }, [speed]);

  const doubled = [...items, ...items];

  return (
    <div
      className={`overflow-hidden whitespace-nowrap select-none ${className}`}
      style={style}
    >
      <div ref={trackRef} className="inline-flex items-center gap-0">
        {doubled.map((item, i) => (
          <span
            key={i}
            className={`font-bold tracking-[0.3em] uppercase ${itemClassName}`}
            style={{ fontFamily: "var(--font-display)" }}
          >
            <span className="mx-6 opacity-30">{separator}</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
