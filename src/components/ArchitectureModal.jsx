import React, { useState } from 'react';
import { X, Copy, Check, ArrowRight, ArrowUpRight } from 'lucide-react';
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs transition-opacity">
      <div className="w-full max-w-3xl bg-[#fafafa] dark:bg-[#121215] text-zinc-900 dark:text-zinc-100 rounded-xl border border-zinc-300 dark:border-zinc-800 shadow-xl flex flex-col max-h-[88vh] overflow-hidden">
        
        {/* Header */}
        <div className="px-6 py-4 border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-zinc-400">
              Architecture Overview
            </span>
            <h2 className="text-base sm:text-lg font-semibold text-zinc-900 dark:text-zinc-100">
              {project.title}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-1 rounded-md text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm">
          
          <div className="space-y-2">
            <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-400">
              Design & Architecture
            </h3>
            <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed">
              {project.architecture?.overview || project.description}
            </p>
          </div>

          {/* Pipeline flow */}
          {project.architecture?.flow && (
            <div className="space-y-2">
              <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                Data Pipeline
              </h3>
              <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                {project.architecture.flow.map((node, i) => (
                  <React.Fragment key={i}>
                    <span className="px-2.5 py-1 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-700">
                      {node}
                    </span>
                    {i < project.architecture.flow.length - 1 && (
                      <ArrowRight size={12} className="text-zinc-400" />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          )}

          {/* Code snippet */}
          {project.architecture?.snippet && (
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                  Implementation Sample
                </h3>
                <button
                  onClick={handleCopyCode}
                  className="flex items-center gap-1 text-xs font-mono text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors"
                >
                  {copied ? <Check size={12} className="text-orange-500" /> : <Copy size={12} />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              <div className="rounded-lg bg-zinc-900 text-zinc-100 border border-zinc-800 p-4 font-mono text-xs overflow-x-auto">
                <pre>{project.architecture.snippet}</pre>
              </div>
            </div>
          )}

          {/* Tech tags */}
          <div className="flex flex-wrap gap-1.5 pt-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="text-xs font-mono px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300"
              >
                {t}
              </span>
            ))}
          </div>

        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between text-xs">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors font-medium"
          >
            <GithubIcon size={14} />
            <span>GitHub Repository</span>
            <ArrowUpRight size={12} />
          </a>

          <button
            onClick={onClose}
            className="px-3 py-1.5 rounded-md bg-zinc-900 dark:bg-zinc-100 text-zinc-100 dark:text-zinc-900 font-medium hover:opacity-90 transition-opacity"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}
