import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { projectsData, projectCategories } from '../data/portfolioData';
import ArchitectureModal from '../components/ArchitectureModal';
import ApiPlayground from '../components/ApiPlayground';
import GithubIcon from '../components/GithubIcon';

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [inspectedProject, setInspectedProject] = useState(null);

  const filteredProjects = activeCategory === 'All'
    ? projectsData
    : projectsData.filter(p => p.category === activeCategory);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-16">
      
      {/* Header */}
      <section className="space-y-4">
        <p className="text-xs font-mono uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
          Projects & Systems
        </p>
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
          Architected with clean separation of concerns.
        </h1>
        <p className="text-base text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-2xl">
          A collection of backend architectures, microservices, and full-stack applications featuring Django REST Framework, Laravel, PostgreSQL, MySQL, Redis, and React.
        </p>
      </section>

      {/* Category Filter Pills (Minimal) */}
      <div className="flex flex-wrap items-center gap-2 border-b border-zinc-200/80 dark:border-zinc-800/80 pb-3">
        {projectCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`text-xs px-3 py-1.5 rounded-md transition-colors ${
              activeCategory === cat
                ? 'bg-zinc-900 text-zinc-50 dark:bg-zinc-100 dark:text-zinc-900 font-medium'
                : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects List */}
      <div className="space-y-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/30 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors space-y-4"
          >
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
              <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                {project.title}
              </h2>
              <span className="text-xs font-mono text-zinc-400">
                {project.category}
              </span>
            </div>

            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {project.description}
            </p>

            {/* Tech stack */}
            <div className="flex flex-wrap items-center gap-1.5">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs font-mono px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800/80 text-zinc-600 dark:text-zinc-300"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Actions */}
            <div className="pt-2 flex items-center justify-between text-xs font-medium border-t border-zinc-100 dark:border-zinc-800/60">
              <button
                onClick={() => setInspectedProject(project)}
                className="text-zinc-900 dark:text-zinc-100 hover:underline"
              >
                Inspect Architecture Blueprint &rarr;
              </button>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors flex items-center gap-1"
              >
                <GithubIcon size={14} />
                <span>Source Code</span>
                <ArrowUpRight size={12} />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Embedded Clean API Playground */}
      <section className="space-y-4 pt-10 border-t border-zinc-200/80 dark:border-zinc-800/80">
        <div>
          <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
            Interactive API Explorer
          </h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">
            Simulate REST queries across profile, skills, and container endpoints.
          </p>
        </div>

        <ApiPlayground />
      </section>

      {/* Architecture Modal */}
      <ArchitectureModal
        project={inspectedProject}
        isOpen={!!inspectedProject}
        onClose={() => setInspectedProject(null)}
      />

    </div>
  );
}
