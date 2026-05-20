"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import GlowingLineDivider from "@/components/ui/GlowingLineDivider";
import { faqs } from "@/lib/data/faq";

export default function FAQPage() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <div style={{ backgroundColor: "var(--bg-base)" }}>
      <section className="pt-28 pb-6 relative z-[2]">
        <div className="section-container">
          <SectionLabel index="05" label="Knowledge Base" className="mb-4" />
          <h1 className="text-[clamp(40px,8vw,80px)] font-black leading-[0.95] tracking-[-0.03em] mb-6"
            style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}>
            Clear <span style={{ color: "transparent", WebkitTextStroke: "1.5px var(--mint-400)" }}>Answers.</span>
          </h1>
          <p className="text-base leading-relaxed max-w-[540px]"
            style={{ fontFamily: "var(--font-body)", color: "var(--text-secondary)" }}>
            Everything you need to know about how we work, how we bill, and what to expect when partnering with Cloud Mint.
          </p>
        </div>
      </section>

      <GlowingLineDivider />

      <section className="pt-10 pb-24 relative z-[2]">
        <div className="section-container max-w-3xl">
          <div className="flex flex-col gap-1">
            {faqs.map((faq) => {
              const isOpen = open === faq.id;
              return (
                <div key={faq.id} className="border-b" style={{ borderColor: "var(--border-dim)" }}>
                  <button
                    onClick={() => setOpen(isOpen ? null : faq.id)}
                    className="w-full flex items-center justify-between gap-4 py-6 text-left cursor-none group"
                  >
                    <span className="text-base md:text-lg font-semibold transition-colors duration-200"
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
                      <ChevronDown size={20} />
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
                        <p className="pb-6 text-sm md:text-base leading-[1.8]"
                          style={{
                            fontFamily: "var(--font-body)",
                            color: "var(--text-secondary)",
                            borderLeft: "2px solid var(--mint-400)",
                            paddingLeft: "1.25rem",
                          }}>
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
