"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";

const channels = [
  { icon: "◈", label: "EMAIL", value: "cloudmint.official.in@gmail.com", link: "mailto:cloudmint.official.in@gmail.com" },
  { icon: "⬡", label: "TWITTER", value: "@cloudmint", link: "#" },
  { icon: "◎", label: "GITHUB", value: "github.com/cloudmint", link: "https://github.com/CLOUD-MINT-CO" },
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
      style={{
        padding: "140px 0 80px",
        position: "relative",
        zIndex: 1,
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 40px" }}>
        {/* Header */}
        <div style={{ marginBottom: "80px" }}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}
          >
            <span style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "10px",
              color: "var(--accent-pink)",
              letterSpacing: "0.4em",
            }}>
              04 — CONNECT
            </span>
            <div style={{ flex: 1, height: "1px", background: "rgba(255,0,170,0.2)" }} />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              fontFamily: "'Orbitron', monospace",
              fontSize: "clamp(36px, 5vw, 64px)",
              fontWeight: 900,
              lineHeight: 1,
              color: "var(--text-primary)",
            }}
          >
            START A<br />
            <span style={{ color: "var(--accent-pink)" }}>TRANSMISSION</span>
          </motion.h2>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "80px",
          alignItems: "start",
        }}>
          {/* Left: Contact channels */}
          <div>
            <p style={{
              fontSize: "15px",
              color: "var(--text-secondary)",
              lineHeight: 1.8,
              marginBottom: "48px",
            }}>
              We&apos;re always looking for bold ideas and like-minded collaborators. Reach out through any channel and we&apos;ll respond within one rotation of the Earth.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
              {channels.map((ch, i) => (
                <motion.a
                  key={ch.label}
                  href={ch.link}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{ x: 10, borderLeftColor: "rgba(255,0,170,0.8)" }}
                  style={{
                    display: "flex",
                    gap: "20px",
                    alignItems: "center",
                    padding: "18px 20px",
                    borderLeft: "1px solid rgba(255,0,170,0.2)",
                    textDecoration: "none",
                    cursor: "none",
                    transition: "all 0.3s ease",
                  }}
                >
                  <span style={{ color: "var(--accent-pink)", fontSize: "18px", minWidth: "24px" }}>{ch.icon}</span>
                  <div>
                    <div style={{
                      fontFamily: "'Space Mono', monospace",
                      fontSize: "9px",
                      color: "var(--text-muted)",
                      letterSpacing: "0.3em",
                      marginBottom: "2px",
                    }}>
                      {ch.label}
                    </div>
                    <div style={{
                      fontFamily: "'Syne', sans-serif",
                      fontSize: "14px",
                      color: "var(--text-secondary)",
                      fontWeight: 500,
                    }}>
                      {ch.value}
                    </div>
                  </div>
                  <div style={{
                    marginLeft: "auto",
                    color: "rgba(255,0,170,0.4)",
                    fontSize: "12px",
                  }}>→</div>
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
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{
                  border: "1px solid rgba(0,245,255,0.3)",
                  padding: "60px 40px",
                  textAlign: "center",
                  background: "rgba(0,245,255,0.03)",
                }}
              >
                <div style={{
                  fontFamily: "'Orbitron', monospace",
                  fontSize: "32px",
                  color: "var(--accent-cyan)",
                  marginBottom: "12px",
                }}>✓</div>
                <div style={{
                  fontFamily: "'Orbitron', monospace",
                  fontSize: "14px",
                  color: "var(--accent-cyan)",
                  letterSpacing: "0.2em",
                  marginBottom: "8px",
                }}>
                  TRANSMISSION SENT
                </div>
                <div style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: "11px",
                  color: "var(--text-muted)",
                }}>
                  We&apos;ll be in touch soon.
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <div>
                  <label style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: "9px",
                    color: "var(--text-muted)",
                    letterSpacing: "0.3em",
                    display: "block",
                    marginBottom: "6px",
                  }}>
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
                  <label style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: "9px",
                    color: "var(--text-muted)",
                    letterSpacing: "0.3em",
                    display: "block",
                    marginBottom: "6px",
                  }}>
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
                  <label style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: "9px",
                    color: "var(--text-muted)",
                    letterSpacing: "0.3em",
                    display: "block",
                    marginBottom: "6px",
                  }}>
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
                  style={{
                    padding: "16px",
                    background: "transparent",
                    border: "1px solid rgba(255,0,170,0.6)",
                    color: "var(--accent-pink)",
                    fontFamily: "'Orbitron', monospace",
                    fontSize: "12px",
                    fontWeight: 700,
                    letterSpacing: "0.3em",
                    cursor: "none",
                    marginTop: "8px",
                    position: "relative",
                    overflow: "hidden",
                    transition: "all 0.3s ease",
                  }}
                >
                 {isSending ? "ENCRYPTING..." : "INITIATE CONTACT"}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>

        {/* Footer */}
        <div style={{
          marginTop: "100px",
          paddingTop: "32px",
          borderTop: "1px solid rgba(255,255,255,0.04)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}>
          <span style={{
            fontFamily: "'Orbitron', monospace",
            fontSize: "14px",
            fontWeight: 800,
            color: "var(--accent-cyan)",
            letterSpacing: "0.3em",
          }}>
            CLOUDMINT
          </span>
          <span style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: "10px",
            color: "var(--text-muted)",
            letterSpacing: "0.2em",
          }}>
            © 2026 TEAM CLOUDMINT — ALL SYSTEMS OPERATIONAL | ALL RIGHTS RESERVED
          </span>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <div style={{ width: "4px", height: "4px", background: "var(--accent-cyan)", borderRadius: "50%", boxShadow: "0 0 6px var(--accent-cyan)" }} />
            <span style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "9px",
              color: "var(--text-muted)",
              letterSpacing: "0.2em",
            }}>
              v1.0.0
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}