import React, { useState } from 'react';
import { ArrowRight, ArrowUpRight, Mail, Copy, Check } from 'lucide-react';
import { personalInfo, skillsData, projectsData } from '../data/portfolioData';
import GithubIcon from '../components/GithubIcon';

export default function HomePage({ setActivePage }) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [activeSkillCategory, setActiveSkillCategory] = useState('All');
  const featuredProjects = projectsData.filter(p => p.featured);

  const categories = ['All', 'Backend', 'Databases & Cache', 'Frontend & DevOps'];

  const getFilteredSkills = () => {
    if (activeSkillCategory === 'All') return skillsData;
    if (activeSkillCategory === 'Frontend & DevOps') {
      return skillsData.filter(s => s.category === 'Frontend' || s.category === 'DevOps & Tooling');
    }
    return skillsData.filter(s => s.category === activeSkillCategory);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
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

      {/* Redesigned Skills & Technologies Section */}
      <section className="space-y-6 pt-4 border-t border-zinc-200/80 dark:border-zinc-800/80">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3">
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
              Skills & Technologies
            </h2>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">
              Production tools and frameworks across the full stack.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-lg bg-zinc-100 dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 self-start sm:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveSkillCategory(cat)}
                className={`text-xs px-2.5 py-1 rounded-md transition-colors ${
                  activeSkillCategory === cat
                    ? 'bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 font-medium shadow-xs'
                    : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Clean, Curated Tech Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {getFilteredSkills().map((skill) => (
            <div
              key={skill.id}
              className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800/80 bg-white dark:bg-zinc-900/30 hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors space-y-2 flex flex-col justify-between"
            >
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-sm text-zinc-900 dark:text-zinc-100">
                    {skill.name}
                  </h3>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400">
                    {skill.category}
                  </span>
                </div>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {skill.tagline}
                </p>
              </div>

              <div className="flex flex-wrap gap-1 pt-1 border-t border-zinc-100 dark:border-zinc-800/60">
                {skill.features.slice(0, 2).map((feat, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] font-mono text-zinc-500 dark:text-zinc-400"
                  >
                    · {feat}
                  </span>
                ))}
              </div>
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

        <div className="space-y-4">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="p-5 sm:p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/30 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors space-y-3"
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

      {/* Clean Contact Details Section (No Form) */}
      <section className="pt-8 border-t border-zinc-200/80 dark:border-zinc-800/80 space-y-4">
        <div>
          <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
            Contact
          </h2>
          <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mt-1">
            Let's connect.
          </h3>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 max-w-xl leading-relaxed mt-1">
            Open for full-time engineering roles, backend microservice contracts, and technical consulting.
          </p>
        </div>

        {/* Clean Contact Strip */}
        <div className="p-4 sm:p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-sm">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
            <div className="flex items-center gap-2">
              <Mail size={16} className="text-zinc-400" />
              <a
                href={`mailto:${personalInfo.email}`}
                className="font-medium text-zinc-900 dark:text-zinc-100 hover:underline"
              >
                {personalInfo.email}
              </a>
              <button
                onClick={handleCopyEmail}
                className="p-1 rounded text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 transition-colors"
                title="Copy email address"
              >
                {copiedEmail ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
              </button>
            </div>

            <div className="flex items-center gap-2">
              <GithubIcon size={16} className="text-zinc-400" />
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors inline-flex items-center gap-1"
              >
                <span>github.com/{personalInfo.username}</span>
                <ArrowUpRight size={12} />
              </a>
            </div>
          </div>

          <a
            href="./Kiruthickraj_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-zinc-900 dark:bg-zinc-100 text-zinc-50 dark:text-zinc-900 text-xs font-medium hover:opacity-90 transition-opacity self-start sm:self-auto"
          >
            <span>Resume (PDF)</span>
            <ArrowUpRight size={12} />
          </a>
        </div>
      </section>

    </div>
  );
}
