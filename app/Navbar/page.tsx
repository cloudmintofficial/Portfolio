"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "HOME", href: "#hero", id: "01" },
  { label: "TEAM", href: "#team", id: "02" },
  { label: "ABOUT", href: "#about", id: "03" },
  { label: "CONTACT", href: "#contact", id: "04" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("01");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          padding: "20px 40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: scrolled
            ? "rgba(2, 4, 8, 0.9)"
            : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled
            ? "1px solid rgba(0, 245, 255, 0.08)"
            : "none",
          transition: "all 0.4s ease",
        }}
      >
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          style={{ display: "flex", alignItems: "center", gap: "10px", cursor: "none" }}
        >
          <div style={{
            width: "32px",
            height: "32px",
            border: "1px solid rgba(0, 245, 255, 0.6)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}>
            <div style={{
              width: "8px",
              height: "8px",
              background: "var(--accent-cyan)",
              boxShadow: "0 0 12px var(--accent-cyan)",
            }} />
            <div style={{
              position: "absolute",
              inset: "-4px",
              border: "1px solid rgba(0, 245, 255, 0.2)",
              animation: "spin 8s linear infinite",
            }} />
          </div>
          <span style={{
            fontFamily: "'Orbitron', monospace",
            fontSize: "14px",
            fontWeight: 700,
            letterSpacing: "0.3em",
            color: "var(--accent-cyan)",
            textShadow: "0 0 20px rgba(0,245,255,0.5)",
          }}>
            CLOUDMINT
          </span>
        </motion.div>

        {/* Desktop Nav */}
        <div style={{ display: "flex", gap: "40px", alignItems: "center" }}>
          {navLinks.map((link, i) => (
            <motion.a
              key={link.id}
              href={link.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i + 0.4 }}
              onClick={() => setActiveLink(link.id)}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "2px",
                textDecoration: "none",
                cursor: "none",
                position: "relative",
              }}
            >
              <span style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: "9px",
                color: activeLink === link.id ? "var(--accent-cyan)" : "var(--text-muted)",
                letterSpacing: "0.2em",
                transition: "color 0.3s",
              }}>
                {link.id}
              </span>
              <span style={{
                fontFamily: "'Orbitron', monospace",
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "0.25em",
                color: activeLink === link.id ? "var(--accent-cyan)" : "var(--text-secondary)",
                transition: "color 0.3s",
              }}>
                {link.label}
              </span>
              {activeLink === link.id && (
                <motion.div
                  layoutId="nav-indicator"
                  style={{
                    position: "absolute",
                    bottom: "-6px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "4px",
                    height: "4px",
                    background: "var(--accent-cyan)",
                    boxShadow: "0 0 8px var(--accent-cyan)",
                    borderRadius: "50%",
                  }}
                />
              )}
            </motion.a>
          ))}
        </div>

        {/* Status indicator */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <div style={{
            width: "6px",
            height: "6px",
            background: "#00ff88",
            borderRadius: "50%",
            boxShadow: "0 0 8px #00ff88",
            animation: "pulse 2s ease-in-out infinite",
          }} />
          <span style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: "10px",
            color: "#00ff88",
            letterSpacing: "0.15em",
          }}>
            ONLINE
          </span>
        </div>
      </motion.nav>

      {/* Mobile menu toggle — kept minimal */}
      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes pulse { 0%,100%{opacity:1}50%{opacity:0.4} }
      `}</style>
    </>
  );
}