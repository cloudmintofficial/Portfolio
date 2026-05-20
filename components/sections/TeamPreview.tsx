"use client";
import { motion } from "framer-motion";
import { teamMembers } from "@/lib/data/team";
import SectionLabel from "@/components/ui/SectionLabel";
import GlowCard from "@/components/ui/GlowCard";
import Badge from "@/components/ui/Badge";

export default function TeamPreview() {
  return (
    <section id="team" className="py-16 md:py-20 relative z-[2]">
      <div className="section-container">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <SectionLabel index="04" label="The Collective" className="mb-4" />
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-[clamp(28px,5vw,52px)] font-black leading-tight tracking-[-0.02em]"
              style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
            >
              Meet the{" "}
              <span style={{ color: "transparent", WebkitTextStroke: "1.5px var(--mint-400)" }}>
                architects.
              </span>
            </motion.h2>
          </div>
          <motion.a
            href="/team"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="no-underline cursor-none shrink-0 group flex items-center gap-2 text-sm font-semibold tracking-[0.1em]"
            style={{ fontFamily: "var(--font-display)", color: "var(--text-muted)" }}
          >
            <span className="group-hover:text-[var(--mint-400)] transition-colors">View All</span>
            <span className="group-hover:translate-x-1 transition-transform group-hover:text-[var(--mint-400)]">→</span>
          </motion.a>
        </div>

        <div className="flex flex-wrap justify-center gap-5">
          {teamMembers.map((member, i) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.08, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="w-full sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)] max-w-[360px]"
            >
              <GlowCard tilt glowColor={member.accent} className="p-6 h-full flex flex-col">
                {/* Top row */}
                <div className="flex justify-between items-center mb-5">
                  <span className="text-[9px] tracking-[0.2em] uppercase font-bold"
                    style={{ fontFamily: "var(--font-mono)", color: member.accent }}>
                    MEMBER_{member.id}
                  </span>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full animate-[pulse_2s_ease-in-out_infinite]"
                      style={{ background: "var(--mint-400)", boxShadow: "0 0 6px var(--mint-400)" }} />
                    <span className="text-[8px] tracking-[0.2em] uppercase"
                      style={{ fontFamily: "var(--font-mono)", color: "var(--mint-400)" }}>
                      {member.status}
                    </span>
                  </div>
                </div>

                {/* Avatar */}
                <div className="w-14 h-14 flex items-center justify-center mb-4 border-2 rounded-sm"
                  style={{ borderColor: member.accent, background: `${member.accent}12` }}>
                  <span className="text-lg font-black"
                    style={{ fontFamily: "var(--font-display)", color: member.accent }}>
                    {member.initials}
                  </span>
                </div>

                <h3 className="text-base font-bold mb-0.5"
                  style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}>
                  {member.name}
                </h3>
                <div className="text-[9px] tracking-[0.2em] uppercase mb-3"
                  style={{ fontFamily: "var(--font-mono)", color: member.accent }}>
                  {member.role}
                </div>

                <Badge label={member.specialty} color={member.accent} className="mb-4 self-start" />

                <p className="text-xs leading-relaxed flex-grow mb-4"
                  style={{ fontFamily: "var(--font-body)", color: "var(--text-secondary)" }}>
                  {member.bio}
                </p>

                <div className="flex gap-1.5 flex-wrap">
                  {member.skills.slice(0, 3).map((s) => (
                    <Badge key={s} label={s} color="var(--text-muted)" size="sm" />
                  ))}
                </div>

                <a href={`/team/${member.slug}`}
                  className="mt-4 no-underline cursor-none text-[9px] font-bold tracking-[0.2em] uppercase
                             transition-colors duration-200 flex items-center gap-1.5"
                  style={{ fontFamily: "var(--font-mono)", color: "var(--text-muted)" }}>
                  <span className="hover:text-[var(--mint-400)]">View Profile →</span>
                </a>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
