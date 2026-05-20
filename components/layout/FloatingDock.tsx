"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, Briefcase, Users, Zap, HelpCircle, Mail } from "lucide-react";

const dockLinks = [
  { label: "Home",     href: "/",         icon: Home },
  { label: "Work",     href: "/work",     icon: Briefcase },
  { label: "Team",     href: "/team",     icon: Users },
  { label: "Services", href: "/services", icon: Zap },
  { label: "FAQ",      href: "/faq",      icon: HelpCircle },
];

export default function FloatingDock() {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="fixed bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 z-[900]
                     flex items-center gap-0.5 md:gap-1 px-3 py-2.5 md:px-4 md:py-3 rounded-full glass-mint max-w-[95vw] overflow-x-auto no-scrollbar"
          style={{ boxShadow: "0 8px 40px rgba(61,255,212,0.1)" }}
        >
          {dockLinks.map((link) => {
            const Icon = link.icon;
            const isHovered = hovered === link.label;
            return (
              <div key={link.label} className="relative group">
                <motion.a
                  href={link.href}
                  onMouseEnter={() => setHovered(link.label)}
                  onMouseLeave={() => setHovered(null)}
                  whileHover={{ scale: 1.2, y: -4 }}
                  whileTap={{ scale: 0.9 }}
                  className="flex items-center justify-center w-8 h-8 md:w-9 md:h-9 rounded-full
                             transition-colors duration-200 cursor-none no-underline shrink-0"
                  style={{
                    color: isHovered ? "var(--mint-400)" : "var(--text-muted)",
                    backgroundColor: isHovered ? "var(--mint-glow-sm)" : "transparent",
                  }}
                  aria-label={link.label}
                >
                  <Icon className="w-4 h-4 md:w-[18px] md:h-[18px]" strokeWidth={isHovered ? 2.5 : 1.8} />
                </motion.a>

                {/* Tooltip */}
                <AnimatePresence>
                  {isHovered && (
                    <motion.span
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 4 }}
                      className="absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap
                                 text-[9px] font-bold tracking-[0.15em] uppercase px-2 py-1
                                 rounded pointer-events-none"
                      style={{
                        fontFamily: "var(--font-mono)",
                        color: "var(--mint-400)",
                        background: "var(--bg-elevated)",
                        border: "1px solid var(--border-subtle)",
                      }}
                    >
                      {link.label}
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>
            );
          })}

          {/* Divider */}
          <div className="w-[1px] h-5 mx-1" style={{ background: "var(--border-subtle)" }} />

          {/* Contact CTA */}
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-1.5 px-3 py-2 md:px-4 md:py-2 rounded-full text-[9px] md:text-[10px]
                       font-black tracking-[0.15em] uppercase no-underline cursor-none shrink-0"
            style={{
              fontFamily: "var(--font-display)",
              backgroundColor: "var(--mint-400)",
              color: "#040a0c",
            }}
          >
            <Mail className="w-3 h-3 md:w-3.5 md:h-3.5" strokeWidth={2.5} />
            <span className="hidden sm:inline">Contact</span>
            <span className="sm:hidden">Hire</span>
          </motion.a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
