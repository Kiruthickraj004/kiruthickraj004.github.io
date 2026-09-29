import React, { useState } from 'react';
import { X, Copy, Check, ExternalLink, Cpu, Layers, Server, Database, ArrowRight } from 'lucide-react';
import GithubIcon from './GithubIcon';

export default function ArchitectureModal({ project, isOpen, onClose }) {
  const [copied, setCopied] = useState(false);

  if (!isOpen || !project) return null;

  const handleCopyCode = () => {
    if (project.architecture?.snippet) {
      navigator.clipboard.writeText(project.architecture.snippet);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/70 backdrop-blur-sm transition-all">
      <div className="w-full max-w-4xl bg-white dark:bg-[#0c1222] text-slate-900 dark:text-slate-100 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 flex flex-col max-h-[90vh] overflow-hidden">
        
        {/* Modal Header */}
        <div className="px-6 py-4 bg-slate-100/80 dark:bg-[#080d19] border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block" />
            <div>
              <span className="text-[11px] font-mono uppercase text-emerald-600 dark:text-emerald-400 font-semibold">
                Architecture Blueprint
              </span>
              <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100">
                {project.title}
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          
          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-1.5">
            {project.tech.map((t) => (
              <span
                key={t}
                className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
              >
                {t}
              </span>
            ))}
          </div>

          {/* System Overview */}
          <div className="space-y-2">
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold flex items-center gap-1.5">
              <Layers size={14} className="text-emerald-500" />
              <span>Architectural Design Overview</span>
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {project.architecture?.overview || project.description}
            </p>
          </div>

          {/* System Data Flow Pipeline */}
          {project.architecture?.flow && (
            <div className="space-y-2.5">
              <h3 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold flex items-center gap-1.5">
                <Cpu size={14} className="text-cyan-500" />
                <span>Distributed Pipeline Flow</span>
              </h3>
              
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 flex flex-wrap items-center gap-2 sm:gap-3 text-xs font-mono">
                {project.architecture.flow.map((node, i) => (
                  <React.Fragment key={i}>
                    <div className="px-3 py-1.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 shadow-sm text-slate-800 dark:text-slate-200 font-medium">
                      {node}
                    </div>
                    {i < project.architecture.flow.length - 1 && (
                      <ArrowRight size={14} className="text-emerald-500 shrink-0" />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          )}

          {/* Code Snippet Preview */}
          {project.architecture?.snippet && (
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold flex items-center gap-1.5">
                  <Server size={14} className="text-indigo-500" />
                  <span>Production Core Implementation</span>
                </h3>
                <button
                  onClick={handleCopyCode}
                  className="flex items-center gap-1.5 text-xs font-mono px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors"
                >
                  {copied ? <Check size={12} className="text-emerald-500" /> : <Copy size={12} />}
                  <span>{copied ? 'Copied' : 'Copy Code'}</span>
                </button>
              </div>

              <div className="rounded-xl bg-slate-900 border border-slate-800 overflow-x-auto p-4 font-mono text-xs text-emerald-300 leading-relaxed max-h-64">
                <pre>{project.architecture.snippet}</pre>
              </div>
            </div>
          )}

          {/* Performance & Metrics Grid */}
          {project.metrics && (
            <div className="grid grid-cols-3 gap-3 pt-2">
              {Object.entries(project.metrics).map(([key, val]) => (
                <div
                  key={key}
                  className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center"
                >
                  <div className="text-xs font-mono uppercase text-slate-500 dark:text-slate-400">
                    {key}
                  </div>
                  <div className="text-sm sm:text-base font-bold text-emerald-600 dark:text-emerald-400 font-mono mt-0.5">
                    {val}
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-slate-100/60 dark:bg-[#080d19] border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-xs font-semibold text-slate-800 dark:text-slate-200 font-mono transition-colors"
          >
            <GithubIcon size={14} />
            <span>View Source on GitHub</span>
          </a>

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold font-mono transition-colors"
          >
            Close Blueprint
          </button>
        </div>

      </div>
    </div>
  );
}
