"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/data/projects";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background mesh */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full blur-[100px]"
          style={{ background: "var(--mesh-1)" }}
        />
        <div
          className="absolute top-1/3 -right-20 w-[500px] h-[500px] rounded-full blur-[100px]"
          style={{ background: "var(--mesh-2)" }}
        />
        <div
          className="absolute bottom-0 left-1/3 w-[400px] h-[400px] rounded-full blur-[100px]"
          style={{ background: "var(--mesh-3)" }}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(var(--grid-line) 1px, transparent 1px), linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card text-purple-500 text-sm font-medium mb-8 border-purple-500/20"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          {t.hero.badge}
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4"
        >
          <span className="gradient-text">{personalInfo.nameEn}</span>
        </motion.h1>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-xl md:text-2xl font-light mb-6"
          style={{ color: "var(--text-3)" }}
        >
          {t.hero.developerTitle}
        </motion.div>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="text-base md:text-lg max-w-xl mx-auto mb-12 leading-relaxed"
          style={{ color: "var(--text-3)" }}
        >
          {t.hero.bio}
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold text-sm hover:opacity-90 hover:scale-[1.03] transition-all duration-200 shadow-lg shadow-purple-500/20"
          >
            {t.hero.cta.projects}
          </a>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-full glass-card font-semibold text-sm hover:scale-[1.03] transition-all duration-200 hover:border-purple-500/30"
            style={{ color: "var(--text-2)" }}
          >
            {t.hero.cta.github}
          </a>
          <a
            href="#contact"
            className="px-8 py-3 rounded-full glass-card font-semibold text-sm hover:scale-[1.03] transition-all duration-200 hover:border-purple-500/30"
            style={{ color: "var(--text-2)" }}
          >
            {t.hero.cta.contact}
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          style={{ color: "var(--text-4)" }}
        >
          <span className="text-xs tracking-widest uppercase">{t.hero.scroll}</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-5 h-8 rounded-full flex items-start justify-center pt-1.5"
            style={{ border: "1px solid var(--border)" }}
          >
            <div className="w-1 h-2 rounded-full bg-gradient-to-b from-purple-400 to-transparent" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
