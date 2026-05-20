"use client";
import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import { featuredProjects } from "@/lib/data/projects";
import Badge from "@/components/ui/Badge";

const categoryColors: Record<string, string> = {
  Web: "var(--mint-400)",
  AI: "var(--teal-accent)",
  Design: "#b97fff",
  "Full Stack": "#ffdd60",
};

export default function WorkPreview() {
  return (
    <section id="work-preview" className="py-16 md:py-20 relative z-[2]">
      <div className="section-container">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 md:mb-18">
          <div>
            <SectionLabel index="02" label="Selected Work" className="mb-4" />
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-[clamp(28px,5vw,52px)] font-black leading-tight tracking-[-0.02em]"
              style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
            >
              Work that moves
              <br />
              <span style={{ color: "var(--mint-400)" }}>the needle.</span>
            </motion.h2>
          </div>
          <motion.a
            href="/work"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="no-underline cursor-none shrink-0 group flex items-center gap-2
                       text-sm font-semibold tracking-[0.1em]"
            style={{ fontFamily: "var(--font-display)", color: "var(--text-muted)" }}
          >
            <span className="group-hover:text-[var(--mint-400)] transition-colors duration-200">
              See All Projects
            </span>
            <span className="group-hover:translate-x-1 transition-transform duration-200 group-hover:text-[var(--mint-400)]">→</span>
          </motion.a>
        </div>

        {/* Project cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {featuredProjects.map((project, i) => {
            const accentColor = categoryColors[project.category] ?? "var(--mint-400)";
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="group relative border overflow-hidden card-hover-mint cursor-none"
                style={{
                  backgroundColor: "var(--bg-surface)",
                  borderColor: "var(--border-dim)",
                }}
              >
                {/* Placeholder visual */}
                <div
                  className="h-44 flex items-center justify-center relative overflow-hidden"
                  style={{ backgroundColor: "var(--bg-elevated)" }}
                >
                  <span
                    className="text-[clamp(40px,8vw,60px)] font-black tracking-tighter opacity-10 select-none"
                    style={{ fontFamily: "var(--font-display)", color: accentColor }}
                  >
                    {project.id}
                  </span>
                  {/* Hover overlay */}
                  <div
                    className="absolute inset-0 flex items-center justify-center opacity-0
                               group-hover:opacity-100 transition-opacity duration-300"
                    style={{ backgroundColor: `${accentColor}14` }}
                  >
                    <span
                      className="text-[10px] font-bold tracking-[0.2em] uppercase"
                      style={{ fontFamily: "var(--font-mono)", color: accentColor }}
                    >
                      View Project →
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex items-center justify-between mb-3">
                    <Badge label={project.category} color={accentColor} />
                    <span
                      className="text-[9px] tracking-[0.2em]"
                      style={{ fontFamily: "var(--font-mono)", color: "var(--text-muted)" }}
                    >
                      {project.year}
                    </span>
                  </div>
                  <h3
                    className="text-base font-bold mb-1.5 tracking-tight"
                    style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
                  >
                    {project.title}
                  </h3>
                  <p
                    className="text-xs leading-relaxed"
                    style={{ fontFamily: "var(--font-body)", color: "var(--text-secondary)" }}
                  >
                    {project.shortDesc}
                  </p>
                </div>

                {/* Bottom accent line */}
                <div
                  className="absolute bottom-0 left-0 h-[1px] w-0 group-hover:w-full transition-all duration-500"
                  style={{ background: `linear-gradient(to right, ${accentColor}, transparent)` }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
