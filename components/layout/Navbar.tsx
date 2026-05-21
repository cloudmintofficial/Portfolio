"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import logoIcon from "@/icon.png";

const navLinks = [
  { label: "Work",     href: "/work",     id: "01" },
  { label: "Team",     href: "/team",     id: "02" },
  { label: "Services", href: "/services", id: "03" },
  { label: "About",    href: "/about",    id: "04" },
  { label: "FAQ",      href: "/faq",      id: "05" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0, x: "-50%" }}
        animate={{ y: 0, opacity: 1, x: "-50%" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed z-[1000] flex items-center justify-between transition-all duration-500 left-1/2
          ${scrolled || menuOpen 
            ? "top-4 w-[95%] md:w-[80%] max-w-6xl rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-surface)]/75 backdrop-blur-md shadow-2xl py-3 px-6 md:px-8 opacity-90 hover:opacity-100" 
            : "top-0 w-full rounded-none border-b border-transparent bg-transparent py-6 px-6 md:px-12 opacity-100"
          }`}
      >
        {/* Logo */}
        <motion.div whileHover={{ scale: 1.04 }}>
          <Link
            href="/"
            className="flex items-center gap-3 cursor-none no-underline"
          >
            <Image 
              src={logoIcon} 
              alt="Cloud Mint" 
              width={38} 
              height={38} 
              className="object-contain mix-blend-screen" 
              priority
            />
            <span
              className="text-sm font-black tracking-[0.25em] glow-mint"
              style={{ fontFamily: "var(--font-display)", color: "var(--mint-400)" }}
            >
              CLOUDMINT
            </span>
          </Link>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.div
              key={link.id}
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i + 0.35 }}
            >
              <Link
                href={link.href}
                className="relative group no-underline cursor-none"
              >
                <span
                  className="text-[11px] font-semibold tracking-[0.2em] uppercase transition-colors duration-300
                             text-[var(--text-secondary)] group-hover:text-[var(--mint-400)]"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {link.label}
                </span>
                {/* Underline on hover */}
                <span
                  className="absolute -bottom-0.5 left-0 h-[1px] w-0 group-hover:w-full transition-all duration-300"
                  style={{ background: "var(--mint-400)" }}
                />
              </Link>
            </motion.div>
          ))}

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            whileHover={{ scale: 1.03 }}
          >
            <Link
              href="/contact"
              className="px-5 py-2.5 text-[10px] font-black tracking-[0.2em] uppercase no-underline cursor-none
                         bg-[var(--mint-400)] text-[#040a0c] hover:bg-[var(--mint-500)]
                         hover:shadow-[0_0_24px_rgba(61,255,212,0.3)] transition-all duration-300"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Let&apos;s Talk
            </Link>
          </motion.div>
        </div>

        {/* Mobile hamburger */}
        <button
          className="flex md:hidden text-[var(--mint-400)] p-2 z-[1001] cursor-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 220 }}
            className="fixed inset-0 z-[999] flex flex-col pt-28 px-10 md:hidden"
            style={{ backgroundColor: "var(--bg-base)" }}
          >
            <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />

            <div className="flex flex-col gap-6 relative z-10">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.id}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="group flex items-baseline gap-5 no-underline cursor-none"
                  >
                    <span
                      className="text-[10px] opacity-40"
                      style={{ fontFamily: "var(--font-mono)", color: "var(--mint-400)" }}
                    >
                      {link.id}
                    </span>
                    <span
                      className="text-3xl font-black tracking-tight transition-colors duration-200
                                 text-[var(--text-primary)] group-hover:text-[var(--mint-400)]"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {link.label}
                    </span>
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.07 }}
              >
                <Link
                  href="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="mt-4 px-8 py-4 block text-center text-[11px] font-black tracking-[0.25em] uppercase
                             bg-[var(--mint-400)] text-[#040a0c] no-underline cursor-none"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  LET&apos;S TALK
                </Link>
              </motion.div>
            </div>

            {/* Footer of mobile menu */}
            <div
              className="mt-auto mb-10 pt-8 border-t flex items-center justify-between"
              style={{ borderColor: "var(--border-subtle)" }}
            >
              <div className="flex items-center gap-2">
                <div
                  className="w-1.5 h-1.5 rounded-full animate-[pulse_2s_ease-in-out_infinite]"
                  style={{ background: "var(--mint-400)", boxShadow: "0 0 8px var(--mint-400)" }}
                />
                <span
                  className="text-[10px] tracking-[0.2em] uppercase"
                  style={{ fontFamily: "var(--font-mono)", color: "var(--mint-400)" }}
                >
                  ONLINE
                </span>
              </div>
              <span
                className="text-[10px]"
                style={{ fontFamily: "var(--font-mono)", color: "var(--text-muted)" }}
              >
                v2.0.0
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
