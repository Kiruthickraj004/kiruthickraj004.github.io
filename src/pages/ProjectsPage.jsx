import React, { useState } from 'react';
import { ArrowUpRight, ArrowRight, Layers } from 'lucide-react';
import { projectsData, projectCategories } from '../data/portfolioData';
import ArchitectureModal from '../components/ArchitectureModal';
import GithubIcon from '../components/GithubIcon';

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [inspectedProject, setInspectedProject] = useState(null);

  const filteredProjects = activeCategory === 'All'
    ? projectsData
    : projectsData.filter(p => p.category === activeCategory);

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-16 space-y-12">
      
      {/* Header */}
      <section className="space-y-3">
        <p className="text-xs font-mono uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
          Selected Works & Systems
        </p>
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
          Production Architectures.
        </h1>
        <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-xl">
          Engineered with decoupled microservices, relational integrity, low-latency caching, and containerized deployment.
        </p>
      </section>

      {/* Category Filter Pills (Minimal Island) */}
      <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-zinc-100 dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-zinc-800/80 self-start">
        {projectCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`text-xs px-3 py-1.5 rounded-lg transition-colors ${
              activeCategory === cat
                ? 'bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 font-medium shadow-xs'
                : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects List as Architectural Index */}
      <div className="space-y-4">
        {filteredProjects.map((project, index) => {
          const indexNum = String(index + 1).padStart(2, '0');
          return (
            <div
              key={project.id}
              className="p-5 sm:p-6 rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white dark:bg-zinc-900/30 hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors space-y-3.5 group"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <div className="flex items-baseline gap-2.5">
                  <span className="font-mono text-xs text-zinc-400 dark:text-zinc-500">
                    {indexNum}
                  </span>
                  <h2 className="text-base sm:text-lg font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-zinc-950 dark:group-hover:text-white transition-colors">
                    {project.title}
                  </h2>
                </div>
                <span className="text-[11px] font-mono text-zinc-400 self-start sm:self-auto">
                  {project.category}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {project.description}
              </p>

              {/* Metrics Pill Grid */}
              {project.metrics && (
                <div className="flex flex-wrap gap-2 text-[11px] font-mono">
                  {Object.entries(project.metrics).map(([k, v]) => (
                    <span
                      key={k}
                      className="px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800/70 text-zinc-600 dark:text-zinc-400 border border-zinc-200/60 dark:border-zinc-700/60"
                    >
                      {k}: <strong className="font-semibold text-zinc-800 dark:text-zinc-200">{v}</strong>
                    </span>
                  ))}
                </div>
              )}

              {/* Tech stack */}
              <div className="flex flex-wrap items-center gap-1.5 pt-1">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="pt-2 flex items-center justify-between text-xs font-medium border-t border-zinc-100 dark:border-zinc-800/60">
                <button
                  onClick={() => setInspectedProject(project)}
                  className="text-zinc-900 dark:text-zinc-100 hover:underline inline-flex items-center gap-1"
                >
                  <Layers size={13} className="text-zinc-400" />
                  <span>Inspect Blueprint & Data Flow</span>
                </button>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200 transition-colors inline-flex items-center gap-1"
                >
                  <GithubIcon size={14} />
                  <span>Repository</span>
                  <ArrowUpRight size={12} />
                </a>
              </div>
            </div>
          );
        })}
      </div>

      {/* Architecture Modal */}
      <ArchitectureModal
        project={inspectedProject}
        isOpen={!!inspectedProject}
        onClose={() => setInspectedProject(null)}
      />

    </div>
  );
}
