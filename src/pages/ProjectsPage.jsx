import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Layers, 
  Cpu, 
  Terminal, 
  Sparkles, 
  ArrowRight, 
  Database, 
  Server 
} from 'lucide-react';
import GithubIcon from '../components/GithubIcon';
import { projectsData, projectCategories } from '../data/portfolioData';
import ArchitectureModal from '../components/ArchitectureModal';
import ApiPlayground from '../components/ApiPlayground';

export default function ProjectsPage({ toggleTerminal }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [inspectedProject, setInspectedProject] = useState(null);

  const filteredProjects = activeCategory === 'All'
    ? projectsData
    : projectsData.filter(p => p.category === activeCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 pb-20 pt-6">
      
      {/* Page Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
          <FolderGit2 size={14} />
          <span>Production Portfolio</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-slate-100 font-sans tracking-tight">
          Systems, Microservices & Full-Stack Projects.
        </h1>
        <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-3xl leading-relaxed">
          Architected with clean separation of concerns, containerized microservices, 
          low-latency caching mechanisms, and rigorous Postman-validated API contracts.
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-4">
        {projectCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-mono font-medium transition-all ${
              activeCategory === cat
                ? 'bg-emerald-600 text-white shadow-glow-emerald font-semibold'
                : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/50'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="rounded-2xl bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800/80 overflow-hidden hover:border-emerald-500/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
          >
            <div className="p-6 sm:p-7 space-y-4">
              
              {/* Category & Status Header */}
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 font-medium">
                  {project.category}
                </span>

                <div className="flex items-center gap-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                    title="View GitHub Repository"
                  >
                    <GithubIcon size={16} />
                  </a>
                </div>
              </div>

              {/* Title & Tagline */}
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors">
                  {project.title}
                </h2>
                <p className="text-xs text-emerald-600 dark:text-emerald-400 font-mono mt-1">
                  {project.tagline}
                </p>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] sm:text-[11px] font-mono px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Metrics Highlights */}
              {project.metrics && (
                <div className="grid grid-cols-3 gap-2 p-3 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800/60 text-center font-mono text-[11px]">
                  {Object.entries(project.metrics).map(([key, val]) => (
                    <div key={key}>
                      <div className="text-slate-500 text-[10px] uppercase">{key}</div>
                      <div className="font-bold text-emerald-600 dark:text-emerald-400 mt-0.5">{val}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Project Card Footer */}
            <div className="px-6 py-4 bg-slate-50/80 dark:bg-slate-950/50 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
              <button
                onClick={() => setInspectedProject(project)}
                className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-500 hover:text-white border border-emerald-500/30 text-xs font-mono font-medium transition-all"
              >
                <Layers size={13} />
                <span>Inspect Architecture</span>
              </button>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-mono text-slate-600 dark:text-slate-400 hover:text-emerald-500 transition-colors"
              >
                <span>Code Repository</span>
                <ArrowRight size={13} />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Embedded Live API Testing Playground */}
      <div className="space-y-6 pt-10 border-t border-slate-200 dark:border-slate-800">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-mono text-orange-600 dark:text-orange-400 uppercase tracking-wider mb-2">
            <Server size={14} />
            <span>Interactive Endpoint Console</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100">
            Live API Playground (Postman & DRF Simulator)
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
            Test simulated API endpoints directly in your browser. Demonstrates query routing, Redis cache headers, and response serialization.
          </p>
        </div>

        <ApiPlayground />
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
