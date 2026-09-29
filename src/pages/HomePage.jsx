import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  ArrowRight, 
  Mail, 
  Copy, 
  Check, 
  FileText, 
  Sparkles, 
  Zap, 
  CheckCircle2, 
  BookOpen,
  Activity
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import GithubIcon from '../components/GithubIcon';

export default function HomePage({ setActivePage }) {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-28 pb-20 space-y-14 sm:space-y-16">
      
      {/* ========================================================================= */}
      {/* 1. NAME & SMALL PERSONAL DESCRIPTION (ZERO SKILLS MENTIONED, NO BADGE)    */}
      {/* ========================================================================= */}
      <section className="space-y-5">
        <div className="space-y-1.5">
          <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
            {personalInfo.name}
          </h1>
          <p className="text-base sm:text-lg text-zinc-500 dark:text-zinc-400 font-medium">
            Full-Stack Developer &middot; Chennai, India
          </p>
        </div>

        <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-2xl font-normal">
          I design and engineer resilient web platforms, scalable backend services, and thoughtful digital interfaces. Passionate about system performance, developer ergonomics, and turning complex structural challenges into elegant, reliable software.
        </p>

        {/* Minimal Action Anchors */}
        <div className="flex flex-wrap items-center gap-2.5 pt-1">
          <a
            href="./Kiruthickraj_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-zinc-900 dark:bg-zinc-100 text-zinc-50 dark:text-zinc-900 text-xs font-medium hover:opacity-90 transition-opacity shadow-xs"
          >
            <FileText size={13} />
            <span>Resume (PDF)</span>
            <ArrowUpRight size={12} />
          </a>

          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 text-xs font-medium hover:bg-zinc-100 dark:hover:bg-zinc-800/60 transition-colors"
          >
            <GithubIcon size={13} />
            <span>GitHub</span>
            <ArrowUpRight size={12} />
          </a>

          <div className="flex items-center gap-1.5 text-xs pl-1">
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

      {/* ========================================================================= */}
      {/* 2. THE "NOW" ENGINEERING DASHBOARD (TOTALLY DIFFERENT NEW SECTION)       */}
      {/* ========================================================================= */}
      <section className="space-y-5 pt-6 border-t border-zinc-200/80 dark:border-zinc-800/80">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
          <div className="space-y-0.5">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse-subtle" />
              <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-900 dark:text-zinc-100 font-semibold">
                The "Now" Dashboard
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400">
              A real-time snapshot of what I am actively building, exploring, and focusing on.
            </p>
          </div>
          <span className="text-[11px] font-mono text-zinc-400 hidden sm:inline">
            UPDATED SEPTEMBER 2026
          </span>
        </div>

        {/* The 4 "Now" Engineering Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          
          {/* Card 1: Currently Building */}
          <div className="p-5 rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white/70 dark:bg-zinc-900/30 hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors space-y-2.5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-semibold text-zinc-900 dark:text-zinc-100">
                <Sparkles size={14} className="text-amber-500" />
                <span>Currently Building</span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">
                IN PROGRESS
              </span>
            </div>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed font-normal">
              Developing high-throughput distributed microservices, experimenting with event-driven pipelines, and engineering performant single-page web applications.
            </p>
          </div>

          {/* Card 2: Technical Focus */}
          <div className="p-5 rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white/70 dark:bg-zinc-900/30 hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors space-y-2.5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-semibold text-zinc-900 dark:text-zinc-100">
                <Zap size={14} className="text-emerald-500" />
                <span>Technical Focus</span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">
                DEEP DIVE
              </span>
            </div>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed font-normal">
              Deep-diving into distributed caching invalidation strategies, database query execution optimization, and sub-20ms P99 latency engineering.
            </p>
          </div>

          {/* Card 3: Recent Engineering Milestones */}
          <div className="p-5 rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white/70 dark:bg-zinc-900/30 hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors space-y-2.5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-semibold text-zinc-900 dark:text-zinc-100">
                <CheckCircle2 size={14} className="text-indigo-500" />
                <span>Recent Milestones</span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">
                SHIPPED
              </span>
            </div>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed font-normal">
              Tuned relational schemas and index structures to cut query response times by over 40%, and automated end-to-end containerized contract test suites.
            </p>
          </div>

          {/* Card 4: Current Reading & Systems Research */}
          <div className="p-5 rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white/70 dark:bg-zinc-900/30 hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors space-y-2.5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-semibold text-zinc-900 dark:text-zinc-100">
                <BookOpen size={14} className="text-cyan-500" />
                <span>Reading &amp; Research</span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">
                STUDY
              </span>
            </div>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed font-normal">
              Studying scalable distributed systems architecture, reliable fault-tolerant storage patterns, and modern backend concurrency primitives.
            </p>
          </div>

        </div>

        {/* Quick Portal Navigation to Dedicated Pages */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3">
          <button
            onClick={() => {
              setActivePage('about');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="p-4 rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white/70 dark:bg-zinc-900/30 hover:border-zinc-400 dark:hover:border-zinc-600 transition-all text-left space-y-1 group"
          >
            <div className="text-xs font-semibold text-zinc-900 dark:text-zinc-100 flex items-center justify-between">
              <span>About Me</span>
              <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform text-zinc-400" />
            </div>
            <p className="text-[11px] text-zinc-500 dark:text-zinc-400">
              Background, philosophy &amp; skills.
            </p>
          </button>

          <button
            onClick={() => {
              setActivePage('projects');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="p-4 rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white/70 dark:bg-zinc-900/30 hover:border-zinc-400 dark:hover:border-zinc-600 transition-all text-left space-y-1 group"
          >
            <div className="text-xs font-semibold text-zinc-900 dark:text-zinc-100 flex items-center justify-between">
              <span>Projects</span>
              <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform text-zinc-400" />
            </div>
            <p className="text-[11px] text-zinc-500 dark:text-zinc-400">
              Production architectures &amp; source code.
            </p>
          </button>

          <button
            onClick={() => {
              setActivePage('contact');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="p-4 rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white/70 dark:bg-zinc-900/30 hover:border-zinc-400 dark:hover:border-zinc-600 transition-all text-left space-y-1 group"
          >
            <div className="text-xs font-semibold text-zinc-900 dark:text-zinc-100 flex items-center justify-between">
              <span>Contact</span>
              <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform text-zinc-400" />
            </div>
            <p className="text-[11px] text-zinc-500 dark:text-zinc-400">
              Direct email &amp; coordinates.
            </p>
          </button>
        </div>
      </section>

    </div>
  );
}
