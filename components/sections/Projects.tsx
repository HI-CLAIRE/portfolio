"use client";

import { useState } from "react";
import FadeInSection from "@/components/ui/FadeInSection";
import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "@/data/projects";
import type { Role } from "@/data/projects";
import { useLanguage } from "@/contexts/LanguageContext";

type FilterType = "all" | Role;

export default function Projects() {
  const [filter, setFilter] = useState<FilterType>("all");
  const { t } = useLanguage();

  const FILTER_OPTIONS: { value: FilterType; label: string }[] = [
    { value: "all", label: t.projects.filter.all },
    { value: "new", label: t.projects.filter.new },
    { value: "maintenance", label: t.projects.filter.maintenance },
    { value: "redesign", label: t.projects.filter.redesign },
  ];

  const filtered =
    filter === "all" ? projects : projects.filter((p) => p.role === filter);

  return (
    <section id="projects" className="py-24 md:py-32 relative overflow-hidden">
      <div
        className="absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none"
        style={{ background: "var(--mesh-1)" }}
      />

      <div className="max-w-6xl mx-auto px-6">
        <FadeInSection>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-purple-400 font-mono text-sm">03.</span>
            <span
              className="uppercase tracking-widest text-xs font-medium"
              style={{ color: "var(--text-4)" }}
            >
              {t.projects.sectionLabel}
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "var(--text-1)" }}>
            {t.projects.heading}
          </h2>
          <p className="text-sm mb-10 max-w-lg" style={{ color: "var(--text-3)" }}>
            {t.projects.subheading}
          </p>
        </FadeInSection>

        {/* Filter */}
        <FadeInSection delay={0.1}>
          <div className="flex flex-wrap gap-2 mb-10">
            {FILTER_OPTIONS.map((opt) => (
              <button
                key={opt.value}
                onClick={() => setFilter(opt.value)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 border ${
                  filter === opt.value
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 border-transparent text-white shadow-lg shadow-purple-500/20"
                    : "glass-card hover:border-purple-500/30"
                }`}
                style={filter !== opt.value ? { color: "var(--text-3)" } : undefined}
              >
                {opt.label}
                <span className="ml-1.5 text-xs opacity-60">
                  (
                  {opt.value === "all"
                    ? projects.length
                    : projects.filter((p) => p.role === opt.value).length}
                  )
                </span>
              </button>
            ))}
          </div>
        </FadeInSection>

        {/* Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
