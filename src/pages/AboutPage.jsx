import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { personalInfo, skillsData, experienceTimeline } from '../data/portfolioData';

export default function AboutPage({ setActivePage }) {
  const backendSkills = skillsData.filter(s => s.category === 'Backend');
  const dbSkills = skillsData.filter(s => s.category === 'Databases & Cache');
  const frontendDevOpsSkills = skillsData.filter(s => s.category === 'Frontend' || s.category === 'DevOps & Tooling');

  const principles = [
    {
      title: "API-First & Strict Contracts",
      description: "Designing RESTful routes, status codes, and serialization models with Postman before writing backend logic."
    },
    {
      title: "Relational Data Integrity",
      description: "Normalized schemas, foreign keys, selective B-Tree indexing, and query tuning in PostgreSQL and MySQL."
    },
    {
      title: "Low-Latency In-Memory Caching",
      description: "Strategic cache-aside patterns, session stores, and rate-limiting using Redis to protect database throughput."
    },
    {
      title: "Isolated & Reproducible Stacks",
      description: "Docker multi-stage builds and Docker Compose workflows ensuring identical environments across stages."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-16">
      
      {/* Page Heading */}
      <section className="space-y-4">
        <p className="text-xs font-mono uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
          About & Background
        </p>
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
          Engineering reliable systems from database to browser.
        </h1>
        <div className="space-y-4 text-base text-zinc-600 dark:text-zinc-300 leading-relaxed pt-2">
          <p>
            I am <strong className="font-semibold text-zinc-900 dark:text-zinc-100">{personalInfo.name}</strong>, a Full-Stack Developer specializing in server-side architecture, relational databases, and clean modern interfaces.
          </p>
          <p>
            My engineering foundation is built around <strong className="font-semibold text-zinc-900 dark:text-zinc-100">Python (Django & Django REST Framework)</strong> and <strong className="font-semibold text-zinc-900 dark:text-zinc-100">PHP (Laravel)</strong>. I focus on creating structured, maintainable RESTful services that follow clear architectural boundaries and clean code principles.
          </p>
          <p>
            For persistence, I work with <strong className="font-semibold text-zinc-900 dark:text-zinc-100">PostgreSQL</strong> and <strong className="font-semibold text-zinc-900 dark:text-zinc-100">MySQL</strong>, and integrate <strong className="font-semibold text-zinc-900 dark:text-zinc-100">Redis</strong> for sub-millisecond in-memory caching and request throttling. On the client side, I engineer reactive applications with <strong className="font-semibold text-zinc-900 dark:text-zinc-100">ReactJS</strong> and Tailwind CSS, standardizing all services via <strong className="font-semibold text-zinc-900 dark:text-zinc-100">Docker</strong>.
          </p>
        </div>
      </section>

      {/* Engineering Principles */}
      <section className="space-y-6 pt-8 border-t border-zinc-200/80 dark:border-zinc-800/80">
        <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
          Engineering Approach
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {principles.map((item, idx) => (
            <div key={idx} className="space-y-1.5 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/30">
              <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                {item.title}
              </h3>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Redesigned Technical Stack Section */}
      <section className="space-y-8 pt-8 border-t border-zinc-200/80 dark:border-zinc-800/80">
        <div className="space-y-1">
          <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
            Technical Stack & Production Skills
          </h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            Core technologies and architectures I design, build, and deploy.
          </p>
        </div>

        <div className="space-y-8">
          {/* Backend */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
              Backend Frameworks & Languages
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {backendSkills.map(skill => (
                <div
                  key={skill.id}
                  className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/30 space-y-1.5 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-sm text-zinc-900 dark:text-zinc-100">{skill.name}</span>
                    <span className="text-[11px] font-mono text-zinc-400">{skill.experience}</span>
                  </div>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">{skill.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Databases & Caching */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
              Databases & In-Memory Layer
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {dbSkills.map(skill => (
                <div
                  key={skill.id}
                  className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/30 space-y-1.5 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-sm text-zinc-900 dark:text-zinc-100">{skill.name}</span>
                    <span className="text-[11px] font-mono text-zinc-400">{skill.experience}</span>
                  </div>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">{skill.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Frontend & DevOps Tooling */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
              Frontend & DevOps Tooling
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {frontendDevOpsSkills.map(skill => (
                <div
                  key={skill.id}
                  className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/30 space-y-1.5 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-sm text-zinc-900 dark:text-zinc-100">{skill.name}</span>
                    <span className="text-[11px] font-mono text-zinc-400">{skill.experience}</span>
                  </div>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">{skill.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="space-y-6 pt-8 border-t border-zinc-200/80 dark:border-zinc-800/80">
        <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
          Experience History
        </h2>
        <div className="space-y-5">
          {experienceTimeline.map((item, index) => (
            <div key={index} className="space-y-1.5 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/30">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                  {item.title} <span className="font-normal text-zinc-500">· {item.company}</span>
                </h3>
                <span className="text-xs font-mono text-zinc-400">
                  {item.period}
                </span>
              </div>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {item.description}
              </p>
              <div className="flex flex-wrap gap-1 pt-1 text-xs font-mono text-zinc-500">
                {item.skills.join(' · ')}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Link */}
      <section className="pt-6 border-t border-zinc-200/80 dark:border-zinc-800/80">
        <button
          onClick={() => { setActivePage('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="text-sm font-medium text-zinc-900 dark:text-zinc-100 hover:underline inline-flex items-center gap-1"
        >
          <span>Have an opportunity? View contact details</span>
          <ArrowUpRight size={14} />
        </button>
      </section>

    </div>
  );
}
