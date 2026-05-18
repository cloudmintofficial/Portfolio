"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const channels = [
  { icon: "◈", label: "EMAIL", value: "cloudmint.official.in@gmail.com", link: "mailto:cloudmint.official.in@gmail.com" },
  { icon: "⬡", label: "TWITTER", value: "@cloudmint", link: "#" },
  { icon: "◎", label: "GITHUB", value: "github.com/cloudmintofficial", link: "https://github.com/cloudmintofficial" },
  { icon: "△", label: "LINKEDIN", value: "/company/cloudmint", link: "https://www.linkedin.com/in/cloud-mint-95964840a/" },
];

export default function ContactSection() {
  const [focused, setFocused] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setSubmitted(true);
        setForm({ name: "", email: "", message: "" }); // Reset form
        setTimeout(() => setSubmitted(false), 4000);
      } else {
        alert("Transmission failed. Please check your connection.");
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsSending(false);
    }
  };

  const inputStyle = (field: string) => ({
    width: "100%",
    background: focused === field ? "rgba(0,245,255,0.03)" : "rgba(255,255,255,0.02)",
    border: `1px solid ${focused === field ? "rgba(0,245,255,0.4)" : "rgba(255,255,255,0.06)"}`,
    padding: "14px 18px",
    color: "var(--text-primary)",
    fontFamily: "'Syne', sans-serif",
    fontSize: "14px",
    outline: "none",
    transition: "all 0.3s ease",
    cursor: "none",
    display: "block",
  } as React.CSSProperties);

  return (
    <section
      id="contact"
      className="py-24 md:py-32 relative z-[1]"
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="mb-12 md:mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-4"
          >
            <span className="font-['Space_Mono'] text-[10px] text-[var(--accent-pink)] tracking-[0.4em] uppercase">
              04 — CONNECT
            </span>
            <div className="flex-1 h-[1px] bg-[rgba(255,0,170,0.2)]" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-['Orbitron'] text-[clamp(32px,8vw,64px)] font-black leading-none text-[var(--text-primary)]"
          >
            START A<br />
            <span className="text-[var(--accent-pink)]">TRANSMISSION</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: Contact channels */}
          <div>
            <p className="text-sm md:text-[15px] text-[var(--text-secondary)] leading-[1.8] mb-10 md:mb-12">
              We&apos;re always looking for bold ideas and like-minded collaborators. Reach out through any channel and we&apos;ll respond within one rotation of the Earth.
            </p>

            <div className="flex flex-col gap-0.5">
              {channels.map((ch, i) => (
                <motion.a
                  key={ch.label}
                  href={ch.link}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{ x: 10, borderLeftColor: "rgba(255,0,170,0.8)" }}
                  className="flex gap-5 items-center p-4 md:p-[18px_20px] border-l border-[rgba(255,0,170,0.2)] no-underline cursor-none transition-all duration-300"
                >
                  <span className="text-[var(--accent-pink)] text-lg min-w-[24px]">{ch.icon}</span>
                  <div className="overflow-hidden">
                    <div className="font-['Space_Mono'] text-[9px] text-[var(--text-muted)] tracking-[0.3em] mb-0.5 uppercase">
                      {ch.label}
                    </div>
                    <div className="font-['Syne'] text-xs md:text-sm text-[var(--text-secondary)] font-medium truncate">
                      {ch.value}
                    </div>
                  </div>
                  <div className="ml-auto text-[rgba(255,0,170,0.4)] text-xs">→</div>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="w-full"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass p-12 md:p-[60px_40px] text-center"
              >
                <div className="font-['Orbitron'] text-[32px] text-[var(--accent-cyan)] mb-3">✓</div>
                <div className="font-['Orbitron'] text-sm text-[var(--accent-cyan)] tracking-[0.2em] mb-2 uppercase">
                  Transmission Sent
                </div>
                <div className="font-['Space_Mono'] text-[11px] text-[var(--text-muted)]">
                  We&apos;ll be in touch soon.
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <label className="font-['Space_Mono'] text-[9px] text-[var(--text-muted)] tracking-[0.3em] block mb-1.5 uppercase">
                    IDENTIFIER
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    required
                    value={form.name}
                    onChange={(e) => setForm(f => ({ ...f, name: e.target.value }))}
                    onFocus={() => setFocused("name")}
                    onBlur={() => setFocused(null)}
                    style={inputStyle("name")}
                  />
                </div>

                <div>
                  <label className="font-['Space_Mono'] text-[9px] text-[var(--text-muted)] tracking-[0.3em] block mb-1.5 uppercase">
                    CHANNEL
                  </label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    required
                    value={form.email}
                    onChange={(e) => setForm(f => ({ ...f, email: e.target.value }))}
                    onFocus={() => setFocused("email")}
                    onBlur={() => setFocused(null)}
                    style={inputStyle("email")}
                  />
                </div>

                <div>
                  <label className="font-['Space_Mono'] text-[9px] text-[var(--text-muted)] tracking-[0.3em] block mb-1.5 uppercase">
                    MESSAGE
                  </label>
                  <textarea
                    placeholder="Describe your project or idea..."
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm(f => ({ ...f, message: e.target.value }))}
                    onFocus={() => setFocused("message")}
                    onBlur={() => setFocused(null)}
                    style={{ ...inputStyle("message"), resize: "vertical" }}
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSending}
                  whileHover={{ boxShadow: "0 0 40px rgba(255,0,170,0.4)", scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  className="p-4 bg-transparent border border-[rgba(255,0,170,0.6)] text-[var(--accent-pink)] font-['Orbitron'] text-xs font-bold tracking-[0.3em] cursor-none mt-2 relative overflow-hidden transition-all duration-300 disabled:opacity-50"
                >
                  {isSending ? "ENCRYPTING..." : "INITIATE CONTACT"}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>

        {/* Footer */}
        <div className="mt-24 md:mt-32 pt-8 border-t border-[rgba(255,255,255,0.04)] flex flex-col md:flex-row gap-8 justify-between items-center text-center md:text-left">
          <span className="font-['Orbitron'] text-sm font-extrabold text-[var(--accent-cyan)] tracking-[0.3em]">
            CLOUDMINT
          </span>
          <span className="font-['Space_Mono'] text-[9px] md:text-[10px] text-[var(--text-muted)] tracking-[0.15em] max-w-[400px]">
            © 2026 TEAM CLOUDMINT — ALL SYSTEMS OPERATIONAL | ALL RIGHTS RESERVED
          </span>
          <div className="flex items-center gap-2">
            <div className="w-1 h-1 bg-[var(--accent-cyan)] rounded-full shadow-[0_0_6px_var(--accent-cyan)]" />
            <span className="font-['Space_Mono'] text-[9px] text-[var(--text-muted)] tracking-[0.2em]">
              v1.0.0
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}