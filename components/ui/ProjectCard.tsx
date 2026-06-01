"use client";

import { motion } from "framer-motion";
import type { Project } from "@/data/projects";
import { useLanguage } from "@/contexts/LanguageContext";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const { t, lang } = useLanguage();
  const isPrivate = project.visibility === "private";

  const projectData = t.projectsData[project.id as keyof typeof t.projectsData];
  const title = projectData?.title ?? project.id;
  const subtitle = "subtitle" in (projectData ?? {}) ? (projectData as { subtitle?: string }).subtitle : undefined;
  const description = projectData?.description ?? "";
  const highlights = projectData?.highlights ?? [];

  const roleLabel = t.projects.card.roleLabel[project.role];

  const ROLE_COLOR: Record<string, string> = {
    new: "bg-purple-500/15 text-purple-400 border-purple-500/25",
    maintenance: "bg-cyan-500/15 text-cyan-400 border-cyan-500/25",
    redesign: "bg-pink-500/15 text-pink-400 border-pink-500/25",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -4 }}
      className="group relative rounded-2xl glass-card overflow-hidden hover:border-purple-500/25 transition-all duration-300 glow-purple"
    >
      {/* Top gradient bar */}
      <div className="h-1 w-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 opacity-50 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="p-6">
        {/* Badges */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span
            className={`text-xs font-medium px-2.5 py-0.5 rounded-full border ${ROLE_COLOR[project.role]}`}
          >
            {roleLabel}
          </span>
          {isPrivate && (
            <span className="text-xs font-medium px-2.5 py-0.5 rounded-full border bg-slate-500/15 text-slate-400 border-slate-500/25">
              🔒 {t.projects.card.private}
            </span>
          )}
          {project.status === "ongoing" && (
            <span className="inline-flex items-center gap-1 text-xs font-medium px-2.5 py-0.5 rounded-full border bg-emerald-500/15 text-emerald-400 border-emerald-500/25">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              {t.projects.card.ongoing}
            </span>
          )}
        </div>

        {/* Title */}
        <div className="mb-1">
          {subtitle && (
            <p className="text-xs mb-0.5" style={{ color: "var(--text-4)" }}>
              {subtitle}
            </p>
          )}
          <h3 className="text-lg font-bold transition-all duration-200" style={{ color: "var(--text-1)" }}>
            {title}
          </h3>
        </div>

        <p className="text-xs text-purple-400 font-mono mb-3">{project.period}</p>

        <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-2)" }}>
          {description}
        </p>

        {/* Highlights */}
        {highlights.length > 0 && (
          <ul className="space-y-1.5 mb-5">
            {highlights.map((h: string, i: number) => (
              <li key={i} className="flex items-start gap-2 text-xs" style={{ color: "var(--text-3)" }}>
                <span className="mt-0.5 w-1.5 h-1.5 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex-shrink-0" />
                {h}
              </li>
            ))}
          </ul>
        )}

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="text-xs px-2 py-0.5 rounded-md border"
              style={{
                background: "var(--bg-surface)",
                borderColor: "var(--border)",
                color: "var(--text-3)",
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Link */}
        {!isPrivate && project.liveUrl ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-purple-400 hover:text-purple-300 transition-colors duration-200"
          >
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            {t.projects.card.liveDemo}
          </a>
        ) : isPrivate ? (
          <span className="text-xs" style={{ color: "var(--text-4)" }}>
            {t.projects.card.privateMsg}
          </span>
        ) : null}

        {/* suppress unused lang warning */}
        <span className="hidden">{lang}</span>
      </div>
    </motion.div>
  );
}
