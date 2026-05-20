"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import { featuredFaqs } from "@/lib/data/faq";

export default function FAQTeaser() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <section className="py-16 md:py-20 relative z-[2]"
      style={{ backgroundColor: "var(--bg-dark-band)" }}>
      <div className="section-container">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <SectionLabel index="06" label="Common Questions" className="mb-4" />
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-[clamp(28px,5vw,52px)] font-black leading-tight tracking-[-0.02em]"
              style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
            >
              Got{" "}
              <span style={{ color: "var(--mint-400)" }}>questions?</span>
            </motion.h2>
          </div>
          <motion.a
            href="/faq"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="no-underline cursor-none shrink-0 group flex items-center gap-2 text-sm font-semibold tracking-[0.1em]"
            style={{ fontFamily: "var(--font-display)", color: "var(--text-muted)" }}
          >
            <span className="group-hover:text-[var(--mint-400)] transition-colors">See All FAQs</span>
            <span className="group-hover:translate-x-1 transition-transform group-hover:text-[var(--mint-400)]">→</span>
          </motion.a>
        </div>

        <div className="max-w-[800px] flex flex-col gap-0.5">
          {featuredFaqs.map((faq, i) => {
            const isOpen = open === faq.id;
            return (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="border-b cursor-none"
                style={{ borderColor: "var(--border-dim)" }}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : faq.id)}
                  className="w-full flex items-center justify-between gap-4 py-5 text-left cursor-none group"
                >
                  <span className="text-sm md:text-base font-semibold transition-colors duration-200"
                    style={{
                      fontFamily: "var(--font-display)",
                      color: isOpen ? "var(--mint-400)" : "var(--text-primary)",
                    }}>
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="shrink-0"
                    style={{ color: isOpen ? "var(--mint-400)" : "var(--text-muted)" }}
                  >
                    <ChevronDown size={18} />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="pb-5 text-sm leading-[1.8]"
                        style={{
                          fontFamily: "var(--font-body)",
                          color: "var(--text-secondary)",
                          borderLeft: "2px solid var(--mint-400)",
                          paddingLeft: "1rem",
                        }}>
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
