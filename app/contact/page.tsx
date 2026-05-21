"use client";

import { useState, useEffect, useRef } from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import GlowingLineDivider from "@/components/ui/GlowingLineDivider";
import Button from "@/components/ui/Button";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [botField, setBotField] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);
  const [feedbackMsg, setFeedbackMsg] = useState("");
  
  const loadTimestampRef = useRef<number>(0);

  useEffect(() => {
    loadTimestampRef.current = Date.now();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    // Client-side quick checks
    if (!name.trim()) {
      setSubmitStatus("error");
      setFeedbackMsg("Please enter your name.");
      return;
    }

    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setSubmitStatus("error");
      setFeedbackMsg("Please enter a valid email address.");
      return;
    }

    if (message.trim().length < 10) {
      setSubmitStatus("error");
      setFeedbackMsg("Message details must be at least 10 characters.");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);
    setFeedbackMsg("");

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
          botField,
          timestamp: loadTimestampRef.current,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus("success");
        setFeedbackMsg("Your transmission has been sent successfully. We will connect with you shortly.");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setSubmitStatus("error");
        setFeedbackMsg(result.error || "Failed to send transmission. Please try again.");
      }
    } catch {
      setSubmitStatus("error");
      setFeedbackMsg("An unexpected network error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div style={{ backgroundColor: "var(--bg-base)" }}>
      <section className="pt-28 pb-6 relative z-[2]">
        <div className="section-container">
          <SectionLabel index="06" label="Start a Project" className="mb-4" />
          <h1 className="text-[clamp(40px,8vw,80px)] font-black leading-[0.95] tracking-[-0.03em] mb-6"
            style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}>
            Let&apos;s <span style={{ color: "transparent", WebkitTextStroke: "1.5px var(--mint-400)" }}>Build.</span>
          </h1>
          <p className="text-base leading-relaxed max-w-[540px]"
            style={{ fontFamily: "var(--font-body)", color: "var(--text-secondary)" }}>
            We&apos;re currently taking on new projects for Q4 2026. Fill out the form below, and we&apos;ll get back to you within 24 hours.
          </p>
        </div>
      </section>

      <GlowingLineDivider />

      <section className="pt-10 pb-24 relative z-[2]">
        <div className="section-container max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Form */}
          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            {/* Honeypot field for anti-spam */}
            <div style={{ position: "absolute", opacity: 0, zIndex: -1, pointerEvents: "none", height: 0, width: 0, overflow: "hidden" }}>
              <label htmlFor="botField">Do not fill this input</label>
              <input
                id="botField"
                type="text"
                name="botField"
                value={botField}
                onChange={(e) => setBotField(e.target.value)}
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold tracking-[0.1em] uppercase" style={{ fontFamily: "var(--font-mono)", color: "var(--text-muted)" }}>Name</label>
              <input
                type="text"
                className="bg-[var(--bg-surface)] border border-[var(--border-dim)] p-4 text-sm outline-none focus:border-[var(--mint-400)] transition-colors text-[var(--text-primary)]"
                placeholder="John Doe"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={isSubmitting}
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold tracking-[0.1em] uppercase" style={{ fontFamily: "var(--font-mono)", color: "var(--text-muted)" }}>Email</label>
              <input
                type="email"
                className="bg-[var(--bg-surface)] border border-[var(--border-dim)] p-4 text-sm outline-none focus:border-[var(--mint-400)] transition-colors text-[var(--text-primary)]"
                placeholder="john@example.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isSubmitting}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold tracking-[0.1em] uppercase" style={{ fontFamily: "var(--font-mono)", color: "var(--text-muted)" }}>Project Details</label>
              <textarea
                rows={5}
                className="bg-[var(--bg-surface)] border border-[var(--border-dim)] p-4 text-sm outline-none focus:border-[var(--mint-400)] transition-colors resize-none text-[var(--text-primary)]"
                placeholder="Tell us about your project..."
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                disabled={isSubmitting}
              ></textarea>
            </div>

            {submitStatus && (
              <div
                className={`p-4 text-xs font-bold border transition-all ${
                  submitStatus === "success"
                    ? "bg-[rgba(61,255,212,0.05)] border-[var(--mint-400)] text-[var(--mint-400)]"
                    : "bg-[rgba(255,100,100,0.05)] border-red-500 text-red-400"
                }`}
                style={{ fontFamily: "var(--font-mono)" }}
              >
                {feedbackMsg}
              </div>
            )}

            <Button
              variant="filled"
              className="w-full justify-center"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Inquiry →"}
            </Button>
          </form>

          {/* Contact Info */}
          <div className="flex flex-col gap-8 md:pl-12 md:border-l" style={{ borderColor: "var(--border-dim)" }}>
            <div>
              <h3 className="text-sm font-bold tracking-[0.2em] uppercase mb-4" style={{ fontFamily: "var(--font-mono)", color: "var(--mint-400)" }}>Email</h3>
              <a href="mailto:cloudmint.official.in@gmail.com" className="text-lg no-underline hover:text-[var(--mint-400)] transition-colors" style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}>
                cloudmint.official.in@gmail.com
              </a>
            </div>

            <div>
              <h3 className="text-sm font-bold tracking-[0.2em] uppercase mb-4" style={{ fontFamily: "var(--font-mono)", color: "var(--text-muted)" }}>Location</h3>
              <p className="text-lg leading-relaxed" style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}>
                Remote First<br/>
                Global Collective
              </p>
            </div>

            <div className="mt-auto p-6 border" style={{ backgroundColor: "var(--bg-surface)", borderColor: "var(--border-dim)" }}>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-2 h-2 rounded-full bg-[var(--mint-400)] animate-pulse" />
                <span className="text-xs font-bold tracking-[0.1em] uppercase" style={{ fontFamily: "var(--font-mono)", color: "var(--text-primary)" }}>Available for Work</span>
              </div>
              <p className="text-xs" style={{ color: "var(--text-muted)" }}>We respond to all serious inquiries within 24 business hours.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}