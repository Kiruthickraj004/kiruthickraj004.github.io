import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { personalInfo, skillsData, experienceTimeline, educationHistory } from '../data/portfolioData';

export default function AboutPage({ setActivePage }) {
  const backendSkills = skillsData.filter((s) => s.category === 'Backend');
  const dbSkills = skillsData.filter((s) => s.category === 'Databases & Cache');
  const frontendSkills = skillsData.filter((s) => s.category === 'Frontend');
  const devopsSkills = skillsData.filter((s) => s.category === 'DevOps & Tooling');

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-16 space-y-12">

      {/* Header & Bio */}
      <section className="space-y-4">
        <p className="text-xs font-mono uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
          The Lore
        </p>
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
          The origin story &amp; engineering philosophy.
        </h1>
        <div className="space-y-3 text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed pt-1">
          <p>
            I am <strong className="font-semibold text-zinc-900 dark:text-zinc-100">{personalInfo.name}</strong>, a Full-Stack Engineer who enjoys solving structural problems behind web platforms — building clean RESTful APIs in Python (Django/DRF) and PHP (Laravel), pairing them with reactive React interfaces, and optimizing database and caching layers.
          </p>
          <p>
            I focus on architecting maintainable, performant systems with clear boundaries: structured relational models in PostgreSQL and MySQL, low-latency in-memory acceleration with Redis, and containerized deployment workflows with Docker.
          </p>
        </div>
      </section>

      {/* Experience History */}
      <section className="space-y-4 pt-4 border-t border-zinc-200/80 dark:border-zinc-800/80">
        <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
          Experience &amp; Level Ups
        </h2>
        <div className="space-y-3">
          {experienceTimeline.map((item, index) => (
            <div
              key={index}
              className="p-4 rounded-xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white/70 dark:bg-zinc-900/30 space-y-1.5"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                  {item.title} <span className="font-normal text-zinc-500">· {item.company}</span>
                </h3>
                <span className="text-xs font-mono text-zinc-400">
                  {item.period}
                </span>
              </div>
              {Array.isArray(item.bullets) && item.bullets.length > 0 ? (
                <ul className="text-xs text-zinc-600 dark:text-zinc-400 space-y-1 list-none pt-0.5">
                  {item.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2 leading-relaxed">
                      <span className="text-orange-500 font-bold text-xs shrink-0 select-none">·</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {item.description}
                </p>
              )}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {item.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-2 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-800 text-[11px] font-mono text-zinc-600 dark:text-zinc-400"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Technical Skills (Traditional Design - Name Only) */}
      <section className="space-y-4 pt-4 border-t border-zinc-200/80 dark:border-zinc-800/80">
        <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
          Weapons of Choice (Tech Stack)
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {/* Backend */}
          <div className="p-4 rounded-xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white/70 dark:bg-zinc-900/30 space-y-2.5">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
              Backend
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {backendSkills.map((skill) => (
                <span
                  key={skill.id}
                  className="px-2.5 py-1 rounded-lg bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200/50 dark:border-zinc-700/50 text-xs font-medium text-zinc-800 dark:text-zinc-200"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>

          {/* Frontend */}
          <div className="p-4 rounded-xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white/70 dark:bg-zinc-900/30 space-y-2.5">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
              Frontend
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {frontendSkills.map((skill) => (
                <span
                  key={skill.id}
                  className="px-2.5 py-1 rounded-lg bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200/50 dark:border-zinc-700/50 text-xs font-medium text-zinc-800 dark:text-zinc-200"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>

          {/* Databases & Caching */}
          <div className="p-4 rounded-xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white/70 dark:bg-zinc-900/30 space-y-2.5">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
              Databases &amp; Caching
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {dbSkills.map((skill) => (
                <span
                  key={skill.id}
                  className="px-2.5 py-1 rounded-lg bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200/50 dark:border-zinc-700/50 text-xs font-medium text-zinc-800 dark:text-zinc-200"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>

          {/* DevOps & Tooling */}
          <div className="p-4 rounded-xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white/70 dark:bg-zinc-900/30 space-y-2.5">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
              DevOps &amp; Tooling
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {devopsSkills.map((skill) => (
                <span
                  key={skill.id}
                  className="px-2.5 py-1 rounded-lg bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200/50 dark:border-zinc-700/50 text-xs font-medium text-zinc-800 dark:text-zinc-200"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="space-y-4 pt-4 border-t border-zinc-200/80 dark:border-zinc-800/80">
        <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
          Academics &amp; Foundation
        </h2>
        <div className="space-y-3">
          {educationHistory.map((item, index) => (
            <div
              key={index}
              className="p-4 rounded-xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white/70 dark:bg-zinc-900/30"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <div>
                  <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                    {item.degree}
                  </h3>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 font-medium mt-0.5">
                    {item.institution}
                  </p>
                </div>
                <div className="flex sm:flex-col items-baseline sm:items-end justify-between sm:justify-start gap-2 sm:gap-0.5 shrink-0">
                  <span className="text-xs font-mono text-zinc-400">
                    {item.period}
                  </span>
                  <span className="text-[11px] font-mono font-medium text-orange-600 dark:text-orange-400">
                    {item.score}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Route */}
      <section className="pt-4 border-t border-zinc-200/80 dark:border-zinc-800/80">
        <button
          onClick={() => { setActivePage('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="text-xs font-medium text-zinc-800 dark:text-zinc-200 hover:text-orange-600 dark:hover:text-orange-400 hover:underline inline-flex items-center gap-1 transition-colors"
        >
          <span>Need someone to cook up clean code? Slide into my inbox</span>
          <ArrowUpRight size={13} />
        </button>
      </section>

    </div>
  );
}
