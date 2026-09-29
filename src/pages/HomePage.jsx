import React, { useState } from 'react';
import { ArrowUpRight, Mail, Copy, Check, FileText } from 'lucide-react';
import { personalInfo, projectsData } from '../data/portfolioData';
import GithubIcon from '../components/GithubIcon';

export default function HomePage({ setActivePage }) {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const featuredProjects = projectsData.filter((p) => p.featured);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  // Traditional categorized skills (clean names only as requested)
  const traditionalSkills = [
    {
      category: "Backend Development",
      skills: ["Python", "Django", "Django REST Framework", "PHP", "Laravel"]
    },
    {
      category: "Databases & Caching",
      skills: ["PostgreSQL", "MySQL", "Redis"]
    },
    {
      category: "Frontend Engineering",
      skills: ["ReactJS", "JavaScript (ES6+)", "Tailwind CSS"]
    },
    {
      category: "DevOps & Tooling",
      skills: ["Docker", "Docker Compose", "Postman", "Git"]
    }
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-28 pb-20 space-y-16 sm:space-y-20">
      
      {/* 1. HERO / INTRODUCTION (MINIMAL, HONEST, UNCLUTTERED) */}
      <section className="space-y-5">
        <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200/80 dark:border-zinc-700/80 text-[11px] font-mono text-zinc-600 dark:text-zinc-300">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse-subtle" />
          <span>Available for full-time engineering roles</span>
        </div>

        <div className="space-y-2">
          <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
            {personalInfo.name}
          </h1>
          <p className="text-base sm:text-lg text-zinc-500 dark:text-zinc-400 font-medium">
            Full-Stack Developer &middot; Chennai, India
          </p>
        </div>

        <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-2xl">
          I build resilient backend systems, RESTful APIs, and modern reactive web applications. Specialized in <strong className="font-medium text-zinc-900 dark:text-zinc-100">Python (Django/DRF)</strong>, <strong className="font-medium text-zinc-900 dark:text-zinc-100">PHP (Laravel)</strong>, and <strong className="font-medium text-zinc-900 dark:text-zinc-100">ReactJS</strong>, paired with <strong className="font-medium text-zinc-900 dark:text-zinc-100">Redis</strong>, <strong className="font-medium text-zinc-900 dark:text-zinc-100">PostgreSQL</strong>, and <strong className="font-medium text-zinc-900 dark:text-zinc-100">Docker</strong>.
        </p>

        {/* Minimal Direct Action Links */}
        <div className="flex flex-wrap items-center gap-3 pt-1">
          <a
            href="./Kiruthickraj_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-zinc-900 dark:bg-zinc-100 text-zinc-50 dark:text-zinc-900 text-xs font-medium hover:opacity-90 transition-opacity"
          >
            <FileText size={13} />
            <span>Resume (PDF)</span>
            <ArrowUpRight size={12} />
          </a>

          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 text-xs font-medium hover:bg-zinc-100 dark:hover:bg-zinc-800/60 transition-colors"
          >
            <GithubIcon size={13} />
            <span>GitHub</span>
            <ArrowUpRight size={12} />
          </a>

          <div className="flex items-center gap-1.5 pl-1 text-xs">
            <a
              href={`mailto:${personalInfo.email}`}
              className="font-mono text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            >
              {personalInfo.email}
            </a>
            <button
              onClick={handleCopyEmail}
              className="p-1 rounded text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 transition-colors"
              title="Copy email address"
            >
              {copiedEmail ? <Check size={12} className="text-emerald-500" /> : <Copy size={12} />}
            </button>
          </div>
        </div>
      </section>

      {/* 2. SKILLS & TECHNOLOGIES (TRADITIONAL CATEGORIZED - NAMES ONLY) */}
      <section className="space-y-6 pt-6 border-t border-zinc-200/80 dark:border-zinc-800/80">
        <div>
          <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
            Skills & Technologies
          </h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">
            Core languages, frameworks, and infrastructure tools.
          </p>
        </div>

        {/* Traditional Categorized Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {traditionalSkills.map((group) => (
            <div
              key={group.category}
              className="p-5 rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white/70 dark:bg-zinc-900/30 space-y-3"
            >
              <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 border-b border-zinc-100 dark:border-zinc-800/60 pb-2">
                {group.category}
              </h3>

              {/* Badges with names only */}
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skillName) => (
                  <span
                    key={skillName}
                    className="px-3 py-1.5 rounded-lg text-xs font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 border border-zinc-200/80 dark:border-zinc-700/80 hover:border-zinc-400 dark:hover:border-zinc-500 transition-colors"
                  >
                    {skillName}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. SELECTED WORK / PROJECTS */}
      <section className="space-y-6 pt-6 border-t border-zinc-200/80 dark:border-zinc-800/80">
        <div className="flex items-baseline justify-between">
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
              Selected Work
            </h2>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">
              Production architectures and full-stack systems.
            </p>
          </div>

          <button
            onClick={() => {
              setActivePage('projects');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-xs text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
          >
            All Projects &rarr;
          </button>
        </div>

        <div className="space-y-3.5">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="p-5 rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white/70 dark:bg-zinc-900/30 hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors space-y-2.5"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
                  {project.title}
                </h3>
                <span className="text-xs font-mono text-zinc-400">
                  {project.category}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {project.tagline}
              </p>

              <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3 text-xs font-medium">
                  <button
                    onClick={() => {
                      setActivePage('projects');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="text-zinc-800 dark:text-zinc-200 hover:underline"
                  >
                    View Details
                  </button>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200 transition-colors"
                    title="Source on GitHub"
                  >
                    <ArrowUpRight size={13} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. DIRECT CONTACT DETAILS (CLEAN - NO FORMS) */}
      <section className="pt-6 border-t border-zinc-200/80 dark:border-zinc-800/80 space-y-4">
        <div>
          <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
            Contact
          </h2>
          <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mt-1">
            Let's connect.
          </h3>
          <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mt-0.5">
            Available for full-time engineering roles, backend microservice contracts, and technical architecture consulting.
          </p>
        </div>

        <div className="p-5 rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white/70 dark:bg-zinc-900/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Mail size={15} className="text-zinc-400" />
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-sm font-medium text-zinc-900 dark:text-zinc-100 hover:underline"
              >
                {personalInfo.email}
              </a>
              <button
                onClick={handleCopyEmail}
                className="p-1 rounded text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 transition-colors"
                title="Copy email address"
              >
                {copiedEmail ? <Check size={13} className="text-emerald-500" /> : <Copy size={13} />}
              </button>
            </div>

            <div className="flex items-center gap-2">
              <GithubIcon size={15} className="text-zinc-400" />
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors inline-flex items-center gap-1"
              >
                <span>github.com/{personalInfo.username}</span>
                <ArrowUpRight size={12} />
              </a>
            </div>
          </div>

          <div className="flex items-center gap-2 self-start sm:self-auto">
            <a
              href="./Kiruthickraj_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-zinc-900 dark:bg-zinc-100 text-zinc-50 dark:text-zinc-900 text-xs font-medium hover:opacity-90 transition-opacity"
            >
              <span>Download Resume</span>
              <ArrowUpRight size={12} />
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
