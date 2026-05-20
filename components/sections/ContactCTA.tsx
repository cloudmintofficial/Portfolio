"use client";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

export default function ContactCTA() {
  return (
    <section className="py-16 md:py-20 relative z-[2] overflow-hidden">
      <div className="section-container text-center relative">
        {/* Ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px]
                        rounded-full blur-[120px] pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(61,255,212,0.07) 0%, transparent 70%)" }} />

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[10px] font-bold tracking-[0.5em] uppercase mb-6"
          style={{ fontFamily: "var(--font-mono)", color: "var(--mint-400)" }}
        >
          Ready to start?
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-[clamp(36px,8vw,80px)] font-black leading-[0.95] tracking-[-0.03em] mb-8"
          style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
        >
          BUILD SOMETHING
          <br />
          <span style={{ color: "transparent", WebkitTextStroke: "1.5px var(--mint-400)" }}>
            EXCEPTIONAL.
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-base leading-relaxed mb-10 max-w-[440px] mx-auto"
          style={{ fontFamily: "var(--font-body)", color: "var(--text-secondary)" }}
        >
          Tell us about your project. We'll get back within 24 hours.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button variant="filled" href="/contact">Start a Project →</Button>
          <Button variant="ghost" href="mailto:cloudmint.official.in@gmail.com">Email Us Directly</Button>
        </motion.div>
      </div>
    </section>
  );
}
