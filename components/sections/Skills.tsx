"use client";

import FadeInSection from "@/components/ui/FadeInSection";
import { skills } from "@/data/projects";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";

const SKILL_ICONS: Record<string, string> = {
  React: "⚛️",
  TypeScript: "🔷",
  JavaScript: "🟡",
  "Next.js": "▲",
  "Vue.js": "💚",
  HTML5: "🟠",
  CSS3: "🔵",
  "Tailwind CSS": "🎨",
  Git: "🔀",
  GitHub: "🐙",
  Figma: "🎯",
  Vite: "⚡",
  Webpack: "📦",
  "REST API": "🔗",
  "Responsive Design": "📱",
  "Cross-browser Compatibility": "🌐",
};

export default function Skills() {
  const { t } = useLanguage();

  const categories = [
    {
      label: t.skills.categories.frontend,
      skills: skills.frontend,
      gradientFrom: "rgba(168,85,247,0.12)",
      gradientTo: "rgba(236,72,153,0.06)",
      borderColor: "rgba(168,85,247,0.2)",
    },
    {
      label: t.skills.categories.tools,
      skills: skills.tools,
      gradientFrom: "rgba(6,182,212,0.12)",
      gradientTo: "rgba(99,102,241,0.06)",
      borderColor: "rgba(6,182,212,0.2)",
    },
    {
      label: t.skills.categories.capabilities,
      skills: skills.etc,
      gradientFrom: "rgba(236,72,153,0.12)",
      gradientTo: "rgba(168,85,247,0.06)",
      borderColor: "rgba(236,72,153,0.2)",
    },
  ];

  return (
    <section id="skills" className="py-24 md:py-32 relative overflow-hidden">
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none"
        style={{ background: "var(--mesh-2)" }}
      />

      <div className="max-w-6xl mx-auto px-6">
        <FadeInSection>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-purple-400 font-mono text-sm">02.</span>
            <span
              className="uppercase tracking-widest text-xs font-medium"
              style={{ color: "var(--text-4)" }}
            >
              {t.skills.sectionLabel}
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-16" style={{ color: "var(--text-1)" }}>
            {t.skills.heading}
          </h2>
        </FadeInSection>

        <div className="grid md:grid-cols-3 gap-6">
          {categories.map((cat, ci) => (
            <FadeInSection key={cat.label} delay={ci * 0.1}>
              <div
                className="rounded-2xl p-6 h-full border"
                style={{
                  background: `linear-gradient(135deg, ${cat.gradientFrom}, ${cat.gradientTo})`,
                  borderColor: cat.borderColor,
                }}
              >
                <h3
                  className="text-sm font-semibold mb-5 uppercase tracking-wider"
                  style={{ color: "var(--text-1)" }}
                >
                  {cat.label}
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {cat.skills.map((skill, si) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.85 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: ci * 0.05 + si * 0.04, duration: 0.3 }}
                      whileHover={{ scale: 1.08, y: -2 }}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg glass-card text-xs font-medium cursor-default transition-colors duration-200 hover:border-purple-500/30"
                      style={{ color: "var(--text-2)" }}
                    >
                      <span>{SKILL_ICONS[skill] ?? "•"}</span>
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}
