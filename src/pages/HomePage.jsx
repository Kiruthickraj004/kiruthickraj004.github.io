import React from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { personalInfo, skillsData, projectsData } from '../data/portfolioData';

export default function HomePage({ setActivePage }) {
  const featuredProjects = projectsData.filter(p => p.featured);

  const skillsByCategory = {
    "Backend": skillsData.filter(s => s.category === 'Backend'),
    "Databases & Cache": skillsData.filter(s => s.category === 'Databases & Cache'),
    "Frontend": skillsData.filter(s => s.category === 'Frontend'),
    "DevOps & APIs": skillsData.filter(s => s.category === 'DevOps & Tooling'),
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-16 sm:space-y-20">
      
      {/* Minimalist Hero */}
      <section className="space-y-6">
        <div className="space-y-3">
          <p className="text-xs font-mono uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
            Full-Stack Developer · API Architect
          </p>
          <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 leading-tight">
            Hi, I'm {personalInfo.name}.
          </h1>
          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 max-w-2xl leading-relaxed">
            I build resilient backend systems, RESTful microservices, and clean, responsive web applications. 
            Focused on <strong className="font-medium text-zinc-900 dark:text-zinc-100">Python (Django/DRF)</strong>, <strong className="font-medium text-zinc-900 dark:text-zinc-100">PHP (Laravel)</strong>, and <strong className="font-medium text-zinc-900 dark:text-zinc-100">ReactJS</strong>, paired with <strong className="font-medium text-zinc-900 dark:text-zinc-100">PostgreSQL</strong>, <strong className="font-medium text-zinc-900 dark:text-zinc-100">MySQL</strong>, <strong className="font-medium text-zinc-900 dark:text-zinc-100">Redis</strong>, and <strong className="font-medium text-zinc-900 dark:text-zinc-100">Docker</strong>.
          </p>
        </div>

        {/* Minimal Actions */}
        <div className="flex flex-wrap items-center gap-4 pt-2 text-sm">
          <button
            onClick={() => { setActivePage('projects'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-zinc-900 dark:bg-zinc-100 text-zinc-50 dark:text-zinc-900 font-medium hover:opacity-90 transition-opacity"
          >
            <span>View Projects</span>
            <ArrowRight size={14} />
          </button>

          <button
            onClick={() => { setActivePage('about'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-zinc-300 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 font-medium hover:bg-zinc-100 dark:hover:bg-zinc-800/60 transition-colors"
          >
            <span>About Me</span>
          </button>

          <a
            href="./Kiruthickraj_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 font-medium px-2 py-2 transition-colors"
          >
            <span>Resume (PDF)</span>
            <ArrowUpRight size={14} />
          </a>
        </div>
      </section>

      {/* Core Technical Arsenal (Minimal Grid) */}
      <section className="space-y-6 pt-4 border-t border-zinc-200/80 dark:border-zinc-800/80">
        <div className="flex items-baseline justify-between">
          <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
            Skills & Technologies
          </h2>
          <button
            onClick={() => { setActivePage('about'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="text-xs text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
          >
            Detailed Breakdown &rarr;
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {Object.entries(skillsByCategory).map(([category, items]) => (
            <div key={category} className="space-y-2.5">
              <h3 className="text-xs font-semibold text-zinc-900 dark:text-zinc-100">
                {category}
              </h3>
              <ul className="space-y-1.5 text-sm text-zinc-600 dark:text-zinc-400">
                {items.map(item => (
                  <li key={item.id} className="flex items-center justify-between">
                    <span>{item.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Projects (Minimal List) */}
      <section className="space-y-6 pt-4 border-t border-zinc-200/80 dark:border-zinc-800/80">
        <div className="flex items-baseline justify-between">
          <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
            Selected Work
          </h2>
          <button
            onClick={() => { setActivePage('projects'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="text-xs text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
          >
            All Projects &rarr;
          </button>
        </div>

        <div className="space-y-6">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="p-5 sm:p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/40 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors space-y-3"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <h3 className="text-base sm:text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                  {project.title}
                </h3>
                <span className="text-xs font-mono text-zinc-400 dark:text-zinc-500">
                  {project.category}
                </span>
              </div>

              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap items-center gap-1.5 pt-1">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-mono px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="pt-2 flex items-center gap-4 text-xs font-medium">
                <button
                  onClick={() => { setActivePage('projects'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="text-zinc-900 dark:text-zinc-100 hover:underline flex items-center gap-1"
                >
                  <span>Details</span>
                  <ArrowRight size={12} />
                </button>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors flex items-center gap-1"
                >
                  <span>Source</span>
                  <ArrowUpRight size={12} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Minimal Contact Callout */}
      <section className="pt-8 border-t border-zinc-200/80 dark:border-zinc-800/80 space-y-4">
        <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
          Get in touch
        </h2>
        <p className="text-sm text-zinc-600 dark:text-zinc-400 max-w-xl leading-relaxed">
          I am always open to discussing engineering roles, architecture consulting, or full-stack web applications.
        </p>
        <div className="flex items-center gap-4 text-sm font-medium">
          <a
            href={`mailto:${personalInfo.email}`}
            className="text-zinc-900 dark:text-zinc-100 hover:underline"
          >
            {personalInfo.email}
          </a>
          <span className="text-zinc-300 dark:text-zinc-700">·</span>
          <button
            onClick={() => { setActivePage('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100"
          >
            Contact Form &rarr;
          </button>
        </div>
      </section>

    </div>
  );
}
