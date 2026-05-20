import type { Metadata } from "next";
import { Code2, Palette, BrainCircuit, Sparkles, TrendingUp, Shield } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import GlowingLineDivider from "@/components/ui/GlowingLineDivider";
import { services } from "@/lib/data/services";

export const metadata: Metadata = {
  title: "Services",
};

const iconMap: Record<string, React.ElementType> = {
  Code2, Palette, BrainCircuit, Sparkles, TrendingUp, Shield,
};

export default function ServicesPage() {
  return (
    <div style={{ backgroundColor: "var(--bg-base)" }}>
      <section className="pt-28 pb-6 relative z-[2]">
        <div className="section-container">
          <SectionLabel index="04" label="Capabilities" className="mb-4" />
          <h1 className="text-[clamp(40px,8vw,80px)] font-black leading-[0.95] tracking-[-0.03em] mb-6"
            style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}>
            End-to-End <span style={{ color: "transparent", WebkitTextStroke: "1.5px var(--mint-400)" }}>Excellence.</span>
          </h1>
          <p className="text-base leading-relaxed max-w-[540px]"
            style={{ fontFamily: "var(--font-body)", color: "var(--text-secondary)" }}>
            Everything your brand needs to grow, from deep systems engineering to high-converting user interfaces.
          </p>
        </div>
      </section>

      <GlowingLineDivider />

      <section className="pt-10 pb-24 relative z-[2]">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => {
              const Icon = iconMap[service.icon] ?? Code2;
              return (
                <div key={service.id} className="p-8 border h-full flex flex-col transition-all duration-300 card-hover-mint"
                  style={{ backgroundColor: "var(--bg-surface)", borderColor: "var(--border-dim)" }}>
                  <div className="w-12 h-12 flex items-center justify-center rounded-sm mb-6"
                    style={{ background: "var(--mint-glow-sm)", border: "1px solid var(--border-subtle)" }}>
                    <Icon size={22} strokeWidth={1.8} style={{ color: "var(--mint-400)" }} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 tracking-tight"
                    style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}>
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed mb-6 flex-grow"
                    style={{ fontFamily: "var(--font-body)", color: "var(--text-secondary)" }}>
                    {service.description}
                  </p>
                  
                  <div className="pt-6 border-t mt-auto" style={{ borderColor: "var(--border-dim)" }}>
                    <ul className="flex flex-col gap-2">
                      {service.tags.map((tag) => (
                        <li key={tag} className="flex items-center gap-2 text-xs"
                          style={{ fontFamily: "var(--font-mono)", color: "var(--text-muted)" }}>
                          <span style={{ color: "var(--mint-400)" }}>+</span> {tag}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
