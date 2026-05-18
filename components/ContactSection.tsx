"use client";

import { useState } from "react";
import { motion } from "framer-motion";

// Inline SVG icons — brand accurate, no library dependency
const IconMail = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const IconX = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.91-5.622Zm-1.161 17.52h1.833L7.084 4.126H5.117Z" />
  </svg>
);

const IconGithub = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
  </svg>
);

const IconLinkedin = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const channels = [
  { icon: <IconMail />, label: "EMAIL", value: "cloudmint.official.in@gmail.com", link: "mailto:cloudmint.official.in@gmail.com" },
  { icon: <IconX />, label: "TWITTER", value: "@cloudmint", link: "https://twitter.com/cloudmint" },
  { icon: <IconGithub />, label: "GITHUB", value: "github.com/cloudmintofficial", link: "https://github.com/cloudmintofficial" },
  { icon: <IconLinkedin />, label: "LINKEDIN", value: "/in/cloud-mint", link: "https://www.linkedin.com/in/cloud-mint-95964840a/" },
];

export default function ContactSection() {
  const [focused, setFocused] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isSending, setIsSending] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setFormError(null);

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
        const errorData = await response.json();
        setFormError(errorData.error || "Transmission failed. Please check your connection.");
      }
    } catch (err) {
      console.error(err);
      setFormError("Transmission failed. Please check your connection.");
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
                  <span className="text-[var(--accent-pink)] min-w-[24px] flex items-center justify-center">{ch.icon}</span>
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
                {formError && (
                  <div className="p-3 border border-[rgba(255,0,0,0.4)] bg-[rgba(255,0,0,0.05)] text-red-400 font-['Space_Mono'] text-[10px] uppercase tracking-[0.1em] mb-2">
                    {formError}
                  </div>
                )}
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