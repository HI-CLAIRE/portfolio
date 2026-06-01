"use client";

import FadeInSection from "@/components/ui/FadeInSection";
import { personalInfo, company, education, training } from "@/data/projects";
import { useLanguage } from "@/contexts/LanguageContext";

export default function About() {
  const { t, lang } = useLanguage();

  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      <div
        className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full blur-[120px] pointer-events-none"
        style={{ background: "var(--mesh-2)" }}
      />

      <div className="max-w-6xl mx-auto px-6">
        <FadeInSection>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-purple-400 font-mono text-sm">01.</span>
            <span
              className="uppercase tracking-widest text-xs font-medium"
              style={{ color: "var(--text-4)" }}
            >
              {t.about.sectionLabel}
            </span>
          </div>
          <h2
            className="text-3xl md:text-4xl font-bold mb-16"
            style={{ color: "var(--text-1)" }}
          >
            {t.about.heading}
            <span className="gradient-text ml-2">👋</span>
          </h2>
        </FadeInSection>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* Bio */}
          <FadeInSection delay={0.1} direction="left">
            <div
              className="space-y-5 leading-relaxed"
              style={{ color: "var(--text-2)" }}
            >
              {t.about.bio.map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>

            <div className="mt-8 flex gap-4 flex-wrap">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl glass-card text-sm font-medium transition-all duration-200 hover:border-purple-500/30"
                style={{ color: "var(--text-2)" }}
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
                {t.about.githubLabel}
              </a>
              {personalInfo.blog && (
                <a
                  href={personalInfo.blog}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl glass-card text-sm font-medium transition-all duration-200 hover:border-purple-500/30"
                  style={{ color: "var(--text-2)" }}
                >
                  {t.about.blogLabel}
                </a>
              )}
            </div>

            {/* Company */}
            <div className="mt-10">
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-3"
                style={{ color: "var(--text-4)" }}
              >
                {t.about.companyLabel}
              </p>
              <div className="glass-card rounded-xl px-4 py-3 flex items-center justify-between">
                <div>
                  <span
                    className="text-sm font-semibold"
                    style={{ color: "var(--text-1)" }}
                  >
                    {lang === "en" ? company.nameEn : company.name}
                  </span>
                  <span className="ml-2 text-xs px-1.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/25">
                    {t.about.presentLabel}
                  </span>
                </div>
                <span className="text-xs font-mono text-purple-400">
                  {lang === "en" ? company.periodEn : company.period}
                </span>
              </div>
            </div>

            {/* Education */}
            <div className="mt-8">
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-3"
                style={{ color: "var(--text-4)" }}
              >
                {t.about.educationLabel}
              </p>
              <ul className="space-y-3">
                {education.map((edu, i) => (
                  <li key={i} className="glass-card rounded-xl px-4 py-3">
                    <div
                      className="text-sm font-semibold"
                      style={{ color: "var(--text-1)" }}
                    >
                      {lang === "en" ? edu.institutionEn : edu.institution}
                    </div>
                    <div
                      className="text-xs mt-0.5"
                      style={{ color: "var(--text-3)" }}
                    >
                      {lang === "en" ? edu.majorEn : edu.major}
                    </div>
                    <div className="text-xs font-mono text-purple-400 mt-1">
                      {edu.period}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Training */}
            <div className="mt-8">
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-3"
                style={{ color: "var(--text-4)" }}
              >
                {t.about.trainingLabel}
              </p>
              <ul className="space-y-3">
                {training.map((item, i) => (
                  <li
                    key={i}
                    className="glass-card rounded-xl px-4 py-3 flex items-center justify-between gap-3"
                  >
                    <div>
                      <span
                        className="text-sm font-semibold"
                        style={{ color: "var(--text-1)" }}
                      >
                        {lang === "en" ? item.nameEn : item.name}
                      </span>
                      {item.detail && (
                        <span
                          className="ml-2 text-xs"
                          style={{ color: "var(--text-3)" }}
                        >
                          {lang === "en" ? item.detailEn : item.detail}
                        </span>
                      )}
                    </div>
                    <span className="text-xs font-mono text-purple-400 shrink-0">
                      {item.period}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeInSection>

          {/* Career Timeline */}
          <FadeInSection delay={0.2} direction="right">
            <h3
              className="text-lg font-semibold mb-6"
              style={{ color: "var(--text-1)" }}
            >
              {t.about.careerLabel}
            </h3>
            <div className="relative">
              <div className="absolute left-3 top-2 bottom-2 w-px bg-gradient-to-b from-purple-500/50 via-pink-500/30 to-transparent" />
              <ul className="space-y-6">
                {t.about.timeline.map((item, i) => (
                  <li key={i} className="pl-10 relative">
                    <div
                      className={`absolute left-0 top-1.5 w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                        i === 0 ? "border-purple-400" : ""
                      }`}
                      style={
                        i === 0
                          ? { background: "rgba(168,85,247,0.2)" }
                          : {
                              borderColor: "var(--border)",
                              background: "var(--bg-surface)",
                            }
                      }
                    >
                      {i === 0 && (
                        <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
                      )}
                    </div>
                    <div className="glass-card rounded-xl p-4 hover:border-purple-500/20 transition-colors duration-200">
                      <span className="text-xs text-purple-400 font-mono">
                        {item.period}
                      </span>
                      <div
                        className="text-sm font-semibold mt-0.5"
                        style={{ color: "var(--text-1)" }}
                      >
                        {item.company}
                      </div>
                      <div
                        className="text-xs mt-0.5"
                        style={{ color: "var(--text-2)" }}
                      >
                        {item.role}
                      </div>
                      <div
                        className="text-xs mt-1"
                        style={{ color: "var(--text-3)" }}
                      >
                        {item.desc}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
}
