"use client";

import FadeInSection from "@/components/ui/FadeInSection";
import { personalInfo } from "@/data/projects";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";

export default function Contact() {
  const { t } = useLanguage();

  const contactLinks = [
    {
      label: "Email",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
        </svg>
      ),
      href: `mailto:${personalInfo.email}`,
      value: personalInfo.email,
      gradientFrom: "rgba(168,85,247,0.1)",
      gradientTo: "rgba(236,72,153,0.05)",
      borderColor: "rgba(168,85,247,0.2)",
    },
    {
      label: "GitHub",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
        </svg>
      ),
      href: personalInfo.github,
      value: personalInfo.github.replace("https://", ""),
      gradientFrom: "rgba(100,116,139,0.1)",
      gradientTo: "rgba(71,85,105,0.05)",
      borderColor: "rgba(100,116,139,0.2)",
    },
  ];

  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full blur-[120px] pointer-events-none"
        style={{ background: "var(--mesh-1)" }}
      />

      <div className="max-w-6xl mx-auto px-6">
        <FadeInSection>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-purple-400 font-mono text-sm">04.</span>
            <span
              className="uppercase tracking-widest text-xs font-medium"
              style={{ color: "var(--text-4)" }}
            >
              {t.contact.sectionLabel}
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "var(--text-1)" }}>
            {t.contact.heading}
          </h2>
        </FadeInSection>

        <div className="max-w-2xl">
          <FadeInSection delay={0.1}>
            <p
              className="leading-relaxed mb-12 text-base whitespace-pre-line"
              style={{ color: "var(--text-3)" }}
            >
              {t.contact.subheading}
            </p>
          </FadeInSection>

          <div className="grid sm:grid-cols-2 gap-4">
            {contactLinks.filter((l) => !l.value.includes("example") && !l.value.includes("your@")).map((link, i) => (
              <FadeInSection key={link.label} delay={0.15 + i * 0.1}>
                <motion.a
                  href={link.href}
                  target={link.label !== "Email" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02, y: -2 }}
                  className="flex items-center gap-4 p-5 rounded-2xl border group transition-all duration-200"
                  style={{
                    background: `linear-gradient(135deg, ${link.gradientFrom}, ${link.gradientTo})`,
                    borderColor: link.borderColor,
                  }}
                >
                  <div
                    className="flex-shrink-0 transition-colors duration-200 group-hover:text-purple-400"
                    style={{ color: "var(--text-3)" }}
                  >
                    {link.icon}
                  </div>
                  <div className="min-w-0">
                    <div
                      className="text-xs mb-0.5 uppercase tracking-wide"
                      style={{ color: "var(--text-4)" }}
                    >
                      {link.label}
                    </div>
                    <div
                      className="text-sm font-medium truncate group-hover:text-purple-400 transition-colors duration-200"
                      style={{ color: "var(--text-2)" }}
                    >
                      {link.value}
                    </div>
                  </div>
                  <svg
                    className="w-4 h-4 ml-auto flex-shrink-0 transition-colors duration-200"
                    style={{ color: "var(--text-4)" }}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </motion.a>
              </FadeInSection>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div
        className="max-w-6xl mx-auto px-6 mt-24 pt-8 border-t"
        style={{ borderColor: "var(--border)" }}
      >
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm"
          style={{ color: "var(--text-4)" }}
        >
          <span>
            © 2026{" "}
            <span className="gradient-text font-medium">{personalInfo.nameEn}</span>. All rights reserved.
          </span>
          <span className="font-mono text-xs">{t.contact.builtWith}</span>
        </div>
      </div>
    </section>
  );
}
