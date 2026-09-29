import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  ArrowRight, 
  Mail, 
  Copy, 
  Check, 
  FileText, 
  Server, 
  Zap, 
  Database, 
  Layers, 
  Terminal,
  Activity,
  Cpu
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import GithubIcon from '../components/GithubIcon';

export default function HomePage({ setActivePage }) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [activeTier, setActiveTier] = useState(0);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  // The 4 Architectural Tiers for the New Interactive Console
  const architectureTiers = [
    {
      id: "01",
      name: "Backend Core & APIs",
      icon: Server,
      accent: "text-emerald-500",
      accentBg: "bg-emerald-500/10 border-emerald-500/30",
      highlight: "High-Throughput Microservices",
      metric: "RESTful & JWT",
      technologies: ["Python", "Django", "Django REST Framework", "PHP", "Laravel"],
      dataFlow: "HTTP Request ➔ JWT Auth Verification ➔ DRF Serializers ➔ Service Layer",
      summary: "Designing enterprise RESTful APIs, JWT bearer token rotation, custom model serializers, and modular service-repository architectures."
    },
    {
      id: "02",
      name: "In-Memory Acceleration",
      icon: Zap,
      accent: "text-amber-500",
      accentBg: "bg-amber-500/10 border-amber-500/30",
      highlight: "Sub-20ms P99 Latency",
      metric: "< 5ms Cache-Aside",
      technologies: ["Redis", "In-Memory Caching", "Rate Limiting", "Session Storage"],
      dataFlow: "Read Request ➔ Redis Cache-Aside Hit (<5ms) ➔ Fast JSON Response",
      summary: "Implementing key-value cache-aside strategies, distributed API rate limiting, atomic counters, and offloading heavy relational queries."
    },
    {
      id: "03",
      name: "Relational Persistence",
      icon: Database,
      accent: "text-indigo-500",
      accentBg: "bg-indigo-500/10 border-indigo-500/30",
      highlight: "ACID Transaction Integrity",
      metric: "B-Tree Indexes",
      technologies: ["PostgreSQL", "MySQL", "Schema Migrations", "Query Tuning"],
      dataFlow: "Transactional Write ➔ Foreign Key Integrity ➔ B-Tree Index ➔ WAL Log",
      summary: "Architecting normalized relational schemas, foreign key constraints, composite index optimizations, and automated migration lifecycles."
    },
    {
      id: "04",
      name: "Interface & Containers",
      icon: Layers,
      accent: "text-cyan-500",
      accentBg: "bg-cyan-500/10 border-cyan-500/30",
      highlight: "Turnkey Multi-Service Delivery",
      metric: "Docker Multi-Stage",
      technologies: ["ReactJS", "JavaScript (ES6+)", "Tailwind CSS", "Docker", "Postman"],
      dataFlow: "SPA Client State ➔ REST Contract ➔ Docker Container ➔ Deployment",
      summary: "Building responsive single-page client applications backed by multi-stage Docker builds and automated Postman contract test suites."
    }
  ];

  const currentTier = architectureTiers[activeTier];
  const CurrentIcon = currentTier.icon;

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-28 pb-20 space-y-14 sm:space-y-16">
      
      {/* ========================================================================= */}
      {/* 1. NAME WITH SMALL DESCRIPTION (CLEAN, MINIMAL, HONEST)                  */}
      {/* ========================================================================= */}
      <section className="space-y-5">
        <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200/80 dark:border-zinc-700/80 text-[11px] font-mono text-zinc-600 dark:text-zinc-300">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse-subtle" />
          <span>Available for full-time engineering roles</span>
        </div>

        <div className="space-y-1.5">
          <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
            {personalInfo.name}
          </h1>
          <p className="text-base sm:text-lg text-zinc-500 dark:text-zinc-400 font-medium">
            Full-Stack Developer &middot; Chennai, India
          </p>
        </div>

        <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-2xl font-normal">
          I build resilient backend systems, RESTful APIs, and modern reactive web applications. Specialized in <strong className="font-medium text-zinc-900 dark:text-zinc-100">Python (Django/DRF)</strong>, <strong className="font-medium text-zinc-900 dark:text-zinc-100">PHP (Laravel)</strong>, and <strong className="font-medium text-zinc-900 dark:text-zinc-100">ReactJS</strong>, paired with <strong className="font-medium text-zinc-900 dark:text-zinc-100">Redis</strong>, <strong className="font-medium text-zinc-900 dark:text-zinc-100">PostgreSQL</strong>, and <strong className="font-medium text-zinc-900 dark:text-zinc-100">Docker</strong>.
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
      {/* 2. NEW IDEA & DESIGN SECTION: THE INTERACTIVE ARCHITECTURE CONSOLE       */}
      {/* ========================================================================= */}
      <section className="space-y-4 pt-6 border-t border-zinc-200/80 dark:border-zinc-800/80">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
              System Architecture Console
            </h2>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-0.5">
              Select a tier to inspect runtime specifications and data flows.
            </p>
          </div>
          <span className="text-[11px] font-mono text-zinc-400 hidden sm:inline">
            INTERACTIVE BLUEPRINT
          </span>
        </div>

        {/* Tactile Tier Selector Pills */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 p-1.5 rounded-2xl bg-zinc-100/80 dark:bg-zinc-900/60 border border-zinc-200/70 dark:border-zinc-800/70">
          {architectureTiers.map((tier, idx) => {
            const TierIcon = tier.icon;
            const isActive = activeTier === idx;
            return (
              <button
                key={tier.id}
                onClick={() => setActiveTier(idx)}
                className={`flex items-center gap-2 p-2.5 rounded-xl text-left transition-all duration-200 ${
                  isActive
                    ? 'bg-white dark:bg-zinc-800 shadow-xs border border-zinc-200/80 dark:border-zinc-700/80'
                    : 'hover:bg-white/50 dark:hover:bg-zinc-800/40 opacity-70 hover:opacity-100'
                }`}
              >
                <span className={`w-5 h-5 rounded-md flex items-center justify-center text-[10px] font-mono font-bold ${
                  isActive 
                    ? 'bg-zinc-900 text-zinc-100 dark:bg-zinc-100 dark:text-zinc-900' 
                    : 'bg-zinc-200 dark:bg-zinc-700 text-zinc-600 dark:text-zinc-300'
                }`}>
                  {tier.id}
                </span>
                <span className="text-xs font-medium text-zinc-800 dark:text-zinc-200 truncate">
                  {tier.name.split(' ')[0]}
                </span>
              </button>
            );
          })}
        </div>

        {/* The Dynamic Architectural Blueprint Card */}
        <div className="p-6 sm:p-7 rounded-3xl border border-zinc-200/90 dark:border-zinc-800/90 bg-white/80 dark:bg-zinc-900/40 backdrop-blur-md space-y-5 transition-all duration-300 shadow-xs">
          
          {/* Header of Active Tier */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-zinc-100 dark:border-zinc-800/70 pb-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-2xl bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-100">
                <CurrentIcon size={20} className={currentTier.accent} />
              </div>
              <div>
                <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">
                  TIER {currentTier.id} SPECIFICATION
                </div>
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                  {currentTier.name}
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-2 self-start sm:self-auto">
              <span className="px-2.5 py-1 rounded-full text-xs font-mono font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border border-emerald-500/20">
                {currentTier.highlight}
              </span>
            </div>
          </div>

          {/* Core Technologies in this Tier (Names Only) */}
          <div className="space-y-2">
            <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-400">
              Technologies &amp; Libraries
            </div>
            <div className="flex flex-wrap gap-2">
              {currentTier.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg text-xs font-medium bg-zinc-100 dark:bg-zinc-800/80 text-zinc-800 dark:text-zinc-200 border border-zinc-200/70 dark:border-zinc-700/60"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Data Flow Pipeline Box */}
          <div className="p-3.5 rounded-2xl bg-zinc-50 dark:bg-zinc-950/50 border border-zinc-200/60 dark:border-zinc-800/60 space-y-1.5 font-mono">
            <div className="text-[10px] uppercase tracking-wider text-zinc-400 flex items-center gap-1.5">
              <Activity size={11} className="text-emerald-500" />
              <span>DATA FLOW PIPELINE</span>
            </div>
            <div className="text-xs text-zinc-700 dark:text-zinc-300 leading-relaxed">
              {currentTier.dataFlow}
            </div>
          </div>

          {/* Description */}
          <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
            {currentTier.summary}
          </p>
        </div>

        {/* Quick Route Cards leading to About, Projects, and Contact */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4">
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
              Background, principles &amp; career timeline.
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
              Direct email &amp; availability coordinates.
            </p>
          </button>
        </div>
      </section>

    </div>
  );
}
