import type { Metadata } from "next";
import { projects } from "@/lib/data/projects";
import Badge from "@/components/ui/Badge";
import SectionLabel from "@/components/ui/SectionLabel";
import GlowingLineDivider from "@/components/ui/GlowingLineDivider";

export const metadata: Metadata = {
  title: "Work",
};

const categoryColors: Record<string, string> = {
  Web: "var(--mint-400)",
  AI: "var(--teal-accent)",
  Design: "#b97fff",
  "Full Stack": "#ffdd60",
};

export default function WorkPage() {
  return (
    <div style={{ backgroundColor: "var(--bg-base)" }}>
      {/* Page Hero */}
      <section className="pt-28 pb-6 relative z-[2]">
        <div className="section-container">
          <SectionLabel index="01" label="Selected Work" className="mb-4" />
          <h1 className="text-[clamp(40px,8vw,80px)] font-black leading-[0.95] tracking-[-0.03em] mb-6"
            style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}>
            Digital <span style={{ color: "transparent", WebkitTextStroke: "1.5px var(--mint-400)" }}>Craft.</span>
          </h1>
          <p className="text-base leading-relaxed max-w-[540px]"
            style={{ fontFamily: "var(--font-body)", color: "var(--text-secondary)" }}>
            A selection of projects where we pushed boundaries, solved complex problems, and delivered measurable growth.
          </p>
        </div>
      </section>

      <GlowingLineDivider />

      {/* Projects Grid */}
      <section className="pt-10 pb-24 relative z-[2]">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => {
              const accentColor = categoryColors[project.category] ?? "var(--mint-400)";
              return (
                <div
                  key={project.id}
                  className="group relative border overflow-hidden card-hover-mint cursor-none flex flex-col h-full"
                  style={{ backgroundColor: "var(--bg-surface)", borderColor: "var(--border-dim)" }}
                >
                  <div className="h-48 flex items-center justify-center relative overflow-hidden"
                    style={{ backgroundColor: "var(--bg-elevated)" }}>
                    <span className="text-[clamp(40px,8vw,60px)] font-black tracking-tighter opacity-10 select-none"
                      style={{ fontFamily: "var(--font-display)", color: accentColor }}>
                      {project.id}
                    </span>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ backgroundColor: `${accentColor}14` }}>
                      <span className="text-[10px] font-bold tracking-[0.2em] uppercase"
                        style={{ fontFamily: "var(--font-mono)", color: accentColor }}>
                        View Details →
                      </span>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center justify-between mb-4">
                      <Badge label={project.category} color={accentColor} />
                      <span className="text-[9px] tracking-[0.2em]"
                        style={{ fontFamily: "var(--font-mono)", color: "var(--text-muted)" }}>
                        {project.year}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold mb-2 tracking-tight"
                      style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}>
                      {project.title}
                    </h3>
                    <p className="text-sm leading-relaxed mb-6 flex-grow"
                      style={{ fontFamily: "var(--font-body)", color: "var(--text-secondary)" }}>
                      {project.description}
                    </p>
                    <div className="flex gap-1.5 flex-wrap mt-auto pt-4 border-t" style={{ borderColor: "var(--border-dim)" }}>
                      {project.tags.map((tag) => (
                        <Badge key={tag} label={tag} color="var(--text-muted)" size="sm" />
                      ))}
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 h-[1px] w-0 group-hover:w-full transition-all duration-500"
                    style={{ background: `linear-gradient(to right, ${accentColor}, transparent)` }} />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
