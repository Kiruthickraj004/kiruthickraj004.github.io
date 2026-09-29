import React from 'react';
import { Mail, Terminal, ArrowUp, Heart, Server, Database, Container } from 'lucide-react';
import GithubIcon from './GithubIcon';
import { personalInfo } from '../data/portfolioData';

export default function Footer({ setActivePage, toggleTerminal }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full border-t border-slate-200 dark:border-slate-800/80 bg-slate-50 dark:bg-[#050811] text-slate-600 dark:text-slate-400 transition-colors duration-300">
      {/* Dev Telemetry Bar */}
      <div className="border-b border-slate-200 dark:border-slate-800/60 bg-slate-100/50 dark:bg-slate-900/40 text-[11px] font-mono py-2 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              API STATUS: 200 OK
            </span>
            <span className="hidden sm:inline text-slate-400">|</span>
            <span className="hidden sm:flex items-center gap-1">
              <Server size={12} className="text-slate-400" /> Django & Laravel Ready
            </span>
            <span className="hidden md:inline text-slate-400">|</span>
            <span className="hidden md:flex items-center gap-1">
              <Database size={12} className="text-slate-400" /> PostgreSQL & Redis Layer
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span>UPTIME: 99.98%</span>
            <button
              onClick={toggleTerminal}
              className="text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1"
            >
              <Terminal size={12} /> Launch CLI
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Column 1: Brand & Philosophy */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2 font-mono text-base font-bold text-slate-900 dark:text-slate-100">
              <span className="text-emerald-500">&lt;KR/&gt;</span>
              <span>{personalInfo.name}</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-md leading-relaxed">
              Full-Stack Developer focused on high-performance backends, clean REST API design, low-latency caching architectures with Redis, and modular React interfaces.
            </p>
            <div className="flex items-center gap-2 pt-2">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-200/60 dark:bg-slate-800/60 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors"
                title="GitHub Profile"
              >
                <GithubIcon size={16} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2 rounded-lg bg-slate-200/60 dark:bg-slate-800/60 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors"
                title="Email Directly"
              >
                <Mail size={16} />
              </a>
              <button
                onClick={toggleTerminal}
                className="px-2.5 py-1.5 rounded-lg bg-slate-200/60 dark:bg-slate-800/60 font-mono text-xs hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors flex items-center gap-1.5"
              >
                <Terminal size={14} /> terminal.sh
              </button>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-900 dark:text-slate-200">
              Navigation
            </h4>
            <ul className="space-y-1.5 text-xs sm:text-sm">
              <li>
                <button
                  onClick={() => { setActivePage('home'); scrollToTop(); }}
                  className="hover:text-emerald-500 transition-colors"
                >
                  Home Overview
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setActivePage('about'); scrollToTop(); }}
                  className="hover:text-emerald-500 transition-colors"
                >
                  About & Skills Matrix
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setActivePage('projects'); scrollToTop(); }}
                  className="hover:text-emerald-500 transition-colors"
                >
                  Projects & Architecture
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setActivePage('contact'); scrollToTop(); }}
                  className="hover:text-emerald-500 transition-colors"
                >
                  Contact & Collaborate
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Core Technology Stack */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-900 dark:text-slate-200">
              Stack Focus
            </h4>
            <div className="flex flex-wrap gap-1.5 text-[11px] font-mono">
              <span className="px-2 py-0.5 rounded bg-slate-200/70 dark:bg-slate-800/70 text-slate-700 dark:text-slate-300">Python</span>
              <span className="px-2 py-0.5 rounded bg-slate-200/70 dark:bg-slate-800/70 text-slate-700 dark:text-slate-300">Django / DRF</span>
              <span className="px-2 py-0.5 rounded bg-slate-200/70 dark:bg-slate-800/70 text-slate-700 dark:text-slate-300">PHP / Laravel</span>
              <span className="px-2 py-0.5 rounded bg-slate-200/70 dark:bg-slate-800/70 text-slate-700 dark:text-slate-300">ReactJS</span>
              <span className="px-2 py-0.5 rounded bg-slate-200/70 dark:bg-slate-800/70 text-slate-700 dark:text-slate-300">Docker</span>
              <span className="px-2 py-0.5 rounded bg-slate-200/70 dark:bg-slate-800/70 text-slate-700 dark:text-slate-300">Redis</span>
              <span className="px-2 py-0.5 rounded bg-slate-200/70 dark:bg-slate-800/70 text-slate-700 dark:text-slate-300">PostgreSQL</span>
              <span className="px-2 py-0.5 rounded bg-slate-200/70 dark:bg-slate-800/70 text-slate-700 dark:text-slate-300">MySQL</span>
              <span className="px-2 py-0.5 rounded bg-slate-200/70 dark:bg-slate-800/70 text-slate-700 dark:text-slate-300">Postman</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800/70 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-slate-500 dark:text-slate-400 font-mono">
            &copy; {new Date().getFullYear()} {personalInfo.name}. All systems operational.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-200/60 dark:bg-slate-800/60 hover:text-emerald-500 dark:hover:text-emerald-400 font-mono transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp size={13} />
          </button>
        </div>
      </div>
    </footer>
  );
}
