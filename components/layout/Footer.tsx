import { Mail } from "lucide-react";

const footerNav = [
  { label: "Work",     href: "/work" },
  { label: "Team",     href: "/team" },
  { label: "Services", href: "/services" },
  { label: "About",    href: "/about" },
  { label: "FAQ",      href: "/faq" },
  { label: "Contact",  href: "/contact" },
];

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/cloudmintofficial",
    svg: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/cloud-mint-95964840a/",
    svg: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Twitter / X",
    href: "https://twitter.com/cloudmint",
    svg: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.91-5.622Zm-1.161 17.52h1.833L7.084 4.126H5.117Z" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:cloudmint.official.in@gmail.com",
    svg: <Mail size={16} />,
  },
];

export default function Footer() {
  return (
    <footer
      className="relative z-[2] border-t"
      style={{ backgroundColor: "var(--bg-dark-band)", borderColor: "var(--border-dim)" }}
    >
      <div className="section-container py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-12">
          {/* Brand */}
          <div>
            <a href="/" className="no-underline cursor-none inline-block mb-4">
              <span className="text-xl font-black tracking-[0.2em] glow-mint"
                style={{ fontFamily: "var(--font-display)", color: "var(--mint-400)" }}>
                CLOUDMINT
              </span>
            </a>
            <p className="text-sm leading-relaxed max-w-[260px]"
              style={{ fontFamily: "var(--font-body)", color: "var(--text-muted)" }}>
              A collective pushing the boundaries of design, engineering, and digital experiences.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-[9px] font-bold tracking-[0.4em] uppercase mb-5"
              style={{ fontFamily: "var(--font-mono)", color: "var(--text-muted)" }}>
              Navigate
            </p>
            <div className="flex flex-col gap-3">
              {footerNav.map((link) => (
                <a key={link.label} href={link.href}
                  className="no-underline cursor-none w-fit group">
                  <span className="text-sm transition-colors duration-200 text-[var(--text-secondary)] group-hover:text-[var(--mint-400)]"
                    style={{ fontFamily: "var(--font-body)" }}>
                    {link.label}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <p className="text-[9px] font-bold tracking-[0.4em] uppercase mb-5"
              style={{ fontFamily: "var(--font-mono)", color: "var(--text-muted)" }}>
              Connect
            </p>
            <div className="flex flex-col gap-3">
              {socials.map((s) => (
                <a key={s.label} href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 no-underline cursor-none group w-fit">
                  <span className="transition-colors duration-200 text-[var(--text-muted)] group-hover:text-[var(--mint-400)]">
                    {s.svg}
                  </span>
                  <span className="text-sm transition-colors duration-200 text-[var(--text-secondary)] group-hover:text-[var(--mint-400)]"
                    style={{ fontFamily: "var(--font-body)" }}>
                    {s.label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderColor: "var(--border-dim)" }}>
          <span className="text-[10px] tracking-[0.12em]"
            style={{ fontFamily: "var(--font-mono)", color: "var(--text-muted)" }}>
            © 2026 CLOUD MINT — ALL RIGHTS RESERVED
          </span>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full animate-[pulse_2s_ease-in-out_infinite]"
              style={{ background: "var(--mint-400)", boxShadow: "0 0 6px var(--mint-400)" }} />
            <span className="text-[10px] tracking-[0.15em]"
              style={{ fontFamily: "var(--font-mono)", color: "var(--text-muted)" }}>
              v2.0.0 · ALL SYSTEMS OPERATIONAL
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
