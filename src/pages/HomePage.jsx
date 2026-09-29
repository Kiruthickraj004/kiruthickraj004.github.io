import React, { useState } from 'react';
import { ArrowRight, ArrowUpRight, Mail, Copy, Check, Layers, ExternalLink } from 'lucide-react';
import { personalInfo, architectureTopology, projectsData } from '../data/portfolioData';
import GithubIcon from '../components/GithubIcon';

export default function HomePage({ setActivePage }) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [selectedLayer, setSelectedLayer] = useState(null);
  const featuredProjects = projectsData.filter(p => p.featured);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-16 space-y-16 sm:space-y-20">
      
      {/* Non-Traditional Minimalist Hero */}
      <section className="space-y-6">
        
        {/* Status Pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/40 text-xs font-mono text-zinc-600 dark:text-zinc-400">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          <span>{personalInfo.status}</span>
        </div>

        {/* Title & Introduction */}
        <div className="space-y-3">
          <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 leading-tight">
            {personalInfo.name}
          </h1>
          <p className="text-lg sm:text-xl font-normal text-zinc-500 dark:text-zinc-400">
            Full-Stack Software Engineer & Backend Architect.
          </p>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 max-w-xl leading-relaxed pt-1">
            Engineering resilient microservices and reactive interfaces with <strong className="font-medium text-zinc-900 dark:text-zinc-100">Python (Django/DRF)</strong>, <strong className="font-medium text-zinc-900 dark:text-zinc-100">PHP (Laravel)</strong>, and <strong className="font-medium text-zinc-900 dark:text-zinc-100">ReactJS</strong>, backed by <strong className="font-medium text-zinc-900 dark:text-zinc-100">Redis</strong> caching, <strong className="font-medium text-zinc-900 dark:text-zinc-100">PostgreSQL / MySQL</strong> databases, and <strong className="font-medium text-zinc-900 dark:text-zinc-100">Docker</strong>.
          </p>
        </div>

        {/* Quick Link Chips */}
        <div className="flex flex-wrap items-center gap-2 pt-1 text-xs font-medium">
          <button
            onClick={() => { setActivePage('projects'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="px-3.5 py-1.5 rounded-full bg-zinc-900 text-zinc-100 dark:bg-zinc-100 dark:text-zinc-900 hover:opacity-90 transition-opacity flex items-center gap-1"
          >
            <span>Selected Projects</span>
            <ArrowRight size={12} />
          </button>

          <button
            onClick={() => { setActivePage('about'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="px-3.5 py-1.5 rounded-full border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800/60 transition-colors"
          >
            About & Experience
          </button>

          <a
            href="./Kiruthickraj_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-1.5 rounded-full border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800/60 transition-colors inline-flex items-center gap-1"
          >
            <span>Resume</span>
            <ArrowUpRight size={12} />
          </a>
        </div>
      </section>

      {/* Non-Traditional Architectural Topology (Full Stack Flow - Names Only) */}
      <section className="space-y-4 pt-6 border-t border-zinc-200/80 dark:border-zinc-800/80">
        <div className="flex items-baseline justify-between">
          <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
            01 // System Architecture & Stack
          </h2>
          <span className="text-[11px] font-mono text-zinc-400 hidden sm:inline">
            Layered Flow
          </span>
        </div>

        {/* Layered Architectural Flow */}
        <div className="space-y-2 pt-1">
          {architectureTopology.map((layer) => {
            const isSelected = selectedLayer === layer.layer;
            return (
              <div
                key={layer.layer}
                onClick={() => setSelectedLayer(isSelected ? null : layer.layer)}
                className={`p-3.5 rounded-xl border transition-all cursor-pointer ${
                  isSelected
                    ? 'border-zinc-400 dark:border-zinc-600 bg-zinc-100/70 dark:bg-zinc-800/50'
                    : 'border-zinc-200/80 dark:border-zinc-800/80 bg-white dark:bg-zinc-900/30 hover:border-zinc-300 dark:hover:border-zinc-700'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-zinc-400 dark:text-zinc-500">
                      {layer.layer}
                    </span>
                    <span className="text-xs font-semibold text-zinc-800 dark:text-zinc-200">
                      {layer.name}
                    </span>
                  </div>

                  {/* Skills (Names Only as requested) */}
                  <div className="flex flex-wrap items-center gap-1.5">
                    {layer.skills.map((skillName) => (
                      <span
                        key={skillName}
                        className="px-2.5 py-1 rounded-md text-xs font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 border border-zinc-200/60 dark:border-zinc-700/60"
                      >
                        {skillName}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Selected Systems / Projects */}
      <section className="space-y-4 pt-6 border-t border-zinc-200/80 dark:border-zinc-800/80">
        <div className="flex items-baseline justify-between">
          <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
            02 // Selected Systems
          </h2>
          <button
            onClick={() => { setActivePage('projects'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="text-xs text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
          >
            All Projects &rarr;
          </button>
        </div>

        <div className="space-y-3 pt-1">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="p-4 sm:p-5 rounded-xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white dark:bg-zinc-900/30 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors space-y-2.5"
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
                    onClick={() => { setActivePage('projects'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
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

      {/* Non-Traditional Minimalist Contact Coordinates (At the bottom, No Form) */}
      <section className="pt-6 border-t border-zinc-200/80 dark:border-zinc-800/80 space-y-4">
        <div>
          <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
            03 // Contact Coordinates
          </h2>
          <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mt-1">
            Let's connect.
          </h3>
          <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mt-0.5">
            Available for full-time engineering roles, backend microservice contracts, and technical architecture consulting.
          </p>
        </div>

        {/* Clean Coordinates Box */}
        <div className="p-4 sm:p-5 rounded-xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white dark:bg-zinc-900/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
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
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 dark:bg-zinc-100 text-zinc-50 dark:text-zinc-900 text-xs font-medium hover:opacity-90 transition-opacity"
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
