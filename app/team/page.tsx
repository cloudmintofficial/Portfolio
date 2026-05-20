import type { Metadata } from "next";
import { teamMembers } from "@/lib/data/team";
import SectionLabel from "@/components/ui/SectionLabel";
import GlowCard from "@/components/ui/GlowCard";
import Badge from "@/components/ui/Badge";
import GlowingLineDivider from "@/components/ui/GlowingLineDivider";

export const metadata: Metadata = {
  title: "Team",
};

export default function TeamPage() {
  return (
    <div style={{ backgroundColor: "var(--bg-base)" }}>
      <section className="pt-28 pb-6 relative z-[2]">
        <div className="section-container">
          <SectionLabel index="02" label="The Collective" className="mb-4" />
          <h1 className="text-[clamp(40px,8vw,80px)] font-black leading-[0.95] tracking-[-0.03em] mb-6"
            style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}>
            Five Minds. <span style={{ color: "transparent", WebkitTextStroke: "1.5px var(--mint-400)" }}>One Vision.</span>
          </h1>
          <p className="text-base leading-relaxed max-w-[540px]"
            style={{ fontFamily: "var(--font-body)", color: "var(--text-secondary)" }}>
            Meet the architects behind the code and design. A tight-knit collective focused on pure collaboration.
          </p>
        </div>
      </section>

      <GlowingLineDivider />

      <section className="pt-10 pb-24 relative z-[2]">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member) => (
              <div key={member.id} className="w-full">
                <GlowCard glowColor={member.accent} tilt className="p-8 flex flex-col h-full border border-[var(--border-dim)]">
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-[10px] tracking-[0.2em] uppercase font-bold"
                      style={{ fontFamily: "var(--font-mono)", color: member.accent }}>
                      MEMBER_{member.id}
                    </span>
                    <div className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full animate-[pulse_2s_ease-in-out_infinite]"
                        style={{ background: "var(--mint-400)", boxShadow: "0 0 6px var(--mint-400)" }} />
                      <span className="text-[9px] tracking-[0.2em] uppercase"
                        style={{ fontFamily: "var(--font-mono)", color: "var(--mint-400)" }}>
                        {member.status}
                      </span>
                    </div>
                  </div>

                  <div className="w-16 h-16 flex items-center justify-center mb-5 border-2 rounded-sm"
                    style={{ borderColor: member.accent, background: `${member.accent}12` }}>
                    <span className="text-xl font-black"
                      style={{ fontFamily: "var(--font-display)", color: member.accent }}>
                      {member.initials}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold mb-1 tracking-tight"
                    style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}>
                    {member.name}
                  </h3>
                  <div className="text-[10px] tracking-[0.2em] uppercase mb-4"
                    style={{ fontFamily: "var(--font-mono)", color: member.accent }}>
                    {member.role}
                  </div>

                  <Badge label={member.specialty} color={member.accent} className="mb-5 self-start" />

                  <p className="text-sm leading-relaxed flex-grow mb-6"
                    style={{ fontFamily: "var(--font-body)", color: "var(--text-secondary)" }}>
                    {member.longBio}
                  </p>

                  <div className="flex gap-1.5 flex-wrap pt-5 border-t mt-auto" style={{ borderColor: "var(--border-dim)" }}>
                    {member.skills.map((s) => (
                      <Badge key={s} label={s} color="var(--text-muted)" size="sm" />
                    ))}
                  </div>
                </GlowCard>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}