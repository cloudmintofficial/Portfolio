"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

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
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Scroll spy logic
      const sections = ["hero", "team", "about", "contact"];
      const scrollPos = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el && scrollPos >= el.offsetTop && scrollPos < el.offsetTop + el.offsetHeight) {
          const id = navLinks.find(link => link.href === `#${section}`)?.id;
          if (id) setActiveLink(id);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-[1000] flex items-center justify-between transition-all duration-400 ${
          scrolled || menuOpen ? "py-4 px-6 md:px-12 glass shadow-2xl" : "py-6 px-6 md:px-12 bg-transparent"
        }`}
      >
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-2.5 cursor-none"
        >
          <div className="w-8 h-8 border border-[rgba(0,245,255,0.6)] flex items-center justify-center relative">
            <div className="w-2 h-2 bg-[var(--accent-cyan)] shadow-[0_0_12px_var(--accent-cyan)]" />
            <div className="absolute -inset-1 border border-[rgba(0,245,255,0.2)] animate-[spin_8s_linear_infinite]" />
          </div>
          <span className="font-['Orbitron'] text-sm font-bold tracking-[0.3em] text-[var(--accent-cyan)] [text-shadow:0_0_20px_rgba(0,245,255,0.5)]">
            CLOUDMINT
          </span>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-10 items-center">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.id}
              href={link.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i + 0.4 }}
              onClick={() => setActiveLink(link.id)}
              className="flex flex-col items-center gap-0.5 no-underline cursor-none relative"
            >
              <span className={`font-['Space_Mono'] text-[9px] tracking-[0.2em] transition-colors duration-300 ${activeLink === link.id ? "text-[var(--accent-cyan)]" : "text-[var(--text-muted)]"}`}>
                {link.id}
              </span>
              <span className={`font-['Orbitron'] text-[11px] font-semibold tracking-[0.25em] transition-all duration-300 ${activeLink === link.id ? "text-[var(--accent-cyan)] [text-shadow:0_0_12px_rgba(0,245,255,0.7)] scale-105" : "text-[var(--text-secondary)]"}`}>
                {link.label}
              </span>
              {activeLink === link.id && (
                <motion.div
                  layoutId="nav-indicator"
                  className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-[var(--accent-cyan)] shadow-[0_0_8px_var(--accent-cyan)] rounded-full"
                />
              )}
            </motion.a>
          ))}
        </div>

        {/* Status indicator (Desktop) */}
        <div className="hidden md:flex items-center gap-2">
          <div className="w-1.5 h-1.5 bg-[#00ff88] rounded-full shadow-[0_0_8px_#00ff88] animate-[pulse_2s_ease-in-out_infinite]" />
          <span className="font-['Space_Mono'] text-[10px] text-[#00ff88] tracking-[0.15em]">
            ONLINE
          </span>
        </div>

        {/* Mobile Toggle */}
        <button
          className="flex md:hidden text-[var(--accent-cyan)] p-2 z-[1001]"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[999] bg-[var(--bg-primary)] flex flex-col pt-32 px-10 md:hidden"
          >
            <div className="absolute inset-0 grid-bg opacity-10 pointer-events-none" />
            <div className="flex flex-col gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.id}
                  href={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * i }}
                  onClick={() => {
                    setActiveLink(link.id);
                    setMenuOpen(false);
                  }}
                  className="flex items-center gap-6 no-underline group"
                >
                  <span className="font-['Space_Mono'] text-xs text-[var(--accent-cyan)] opacity-50">
                    {link.id}
                  </span>
                  <span className="font-['Orbitron'] text-2xl font-bold tracking-[0.1em] text-[var(--text-primary)] group-hover:text-[var(--accent-cyan)] transition-colors">
                    {link.label}
                  </span>
                </motion.a>
              ))}
            </div>

            <div className="mt-auto mb-10 pt-10 border-t border-[rgba(0,245,255,0.1)] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[#00ff88] rounded-full shadow-[0_0_10px_#00ff88] animate-[pulse_2s_ease-in-out_infinite]" />
                <span className="font-['Space_Mono'] text-xs text-[#00ff88] tracking-[0.2em]">SYSTEM_STABLE</span>
              </div>
              <span className="font-['Space_Mono'] text-[10px] text-[var(--text-muted)]">v0.1.0</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes pulse { 0%,100%{opacity:1}50%{opacity:0.4} }
      `}</style>
    </>
  );
}