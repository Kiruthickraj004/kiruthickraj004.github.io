import React, { useState, useEffect } from 'react';
import { 
  ArrowUpRight, 
  Mail, 
  Copy, 
  Check, 
  FileText, 
  Clock, 
  MapPin, 
  Layers, 
  Database, 
  Server, 
  Zap, 
  ShieldCheck, 
  Terminal,
  Activity
} from 'lucide-react';
import { personalInfo, projectsData } from '../data/portfolioData';
import GithubIcon from '../components/GithubIcon';

export default function HomePage({ setActivePage }) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [localTime, setLocalTime] = useState('');

  const featuredProjects = projectsData.filter((p) => p.featured);

  // Live Asia/Kolkata Clock for the Status Bento Card
  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const timeStr = now.toLocaleTimeString('en-US', {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      });
      setLocalTime(timeStr);
    };
    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  // Traditional categorized skills (clean names only as requested)
  const traditionalSkills = [
    {
      category: "Backend Development",
      icon: Server,
      skills: ["Python", "Django", "Django REST Framework", "PHP", "Laravel"]
    },
    {
      category: "Databases & In-Memory",
      icon: Database,
      skills: ["PostgreSQL", "MySQL", "Redis"]
    },
    {
      category: "Frontend Engineering",
      icon: Layers,
      skills: ["ReactJS", "JavaScript (ES6+)", "Tailwind CSS"]
    },
    {
      category: "DevOps & Tooling",
      icon: Terminal,
      skills: ["Docker", "Docker Compose", "Postman", "Git"]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-28 pb-20 space-y-6">
      
      {/* ========================================================================= */}
      {/* LINEAR / RAYCAST BENTO GRID: ROW 1 (PROFILE CARD + LIVE STATUS CARD)     */}
      {/* ========================================================================= */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        
        {/* BENTO CARD 1: PRIMARY PROFILE (2 COLS) */}
        <div className="md:col-span-2 p-6 sm:p-8 rounded-3xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white/70 dark:bg-zinc-900/40 backdrop-blur-md hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            {/* Availability Pill */}
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200/80 dark:border-zinc-700/80 text-[11px] font-mono text-zinc-600 dark:text-zinc-300">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse-subtle" />
              <span>Available for full-time engineering roles</span>
            </div>

            {/* Name & Title */}
            <div className="space-y-1">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
                {personalInfo.name}
              </h1>
              <p className="text-sm sm:text-base font-mono text-zinc-500 dark:text-zinc-400">
                Full-Stack Developer &amp; Systems Architect
              </p>
            </div>

            {/* Short Bio */}
            <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-xl font-normal">
              Architecting high-throughput backend services, optimized database engines, and reactive web applications. Specialized in <strong className="font-medium text-zinc-900 dark:text-zinc-100">Python (Django/DRF)</strong>, <strong className="font-medium text-zinc-900 dark:text-zinc-100">PHP (Laravel)</strong>, and <strong className="font-medium text-zinc-900 dark:text-zinc-100">ReactJS</strong>, paired with <strong className="font-medium text-zinc-900 dark:text-zinc-100">Redis</strong>, <strong className="font-medium text-zinc-900 dark:text-zinc-100">PostgreSQL</strong>, and <strong className="font-medium text-zinc-900 dark:text-zinc-100">Docker</strong>.
            </p>
          </div>

          {/* Direct Action Anchors */}
          <div className="flex flex-wrap items-center gap-2.5 pt-2 border-t border-zinc-100 dark:border-zinc-800/60">
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
        </div>

        {/* BENTO CARD 2: LIVE TELEMETRY & STATUS (1 COL) */}
        <div className="p-6 rounded-3xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white/70 dark:bg-zinc-900/40 backdrop-blur-md hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400 uppercase tracking-widest">
              <span>Telemetry</span>
              <span className="flex items-center gap-1 text-emerald-500">
                <Activity size={12} className="animate-pulse" />
                <span>ONLINE</span>
              </span>
            </div>

            {/* Location Tile */}
            <div className="space-y-1">
              <span className="text-[11px] font-mono text-zinc-400 flex items-center gap-1">
                <MapPin size={11} />
                <span>Location</span>
              </span>
              <div className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
                Chennai, India
              </div>
              <div className="text-xs text-zinc-500 dark:text-zinc-400">
                Remote &middot; Worldwide Relocation
              </div>
            </div>

            {/* Live IST Clock */}
            <div className="space-y-1 pt-2 border-t border-zinc-100 dark:border-zinc-800/60">
              <span className="text-[11px] font-mono text-zinc-400 flex items-center gap-1">
                <Clock size={11} />
                <span>Local Time (IST)</span>
              </span>
              <div className="font-mono text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                {localTime || '11:00:00 AM'}
              </div>
              <div className="text-[11px] font-mono text-zinc-400">
                UTC +05:30
              </div>
            </div>
          </div>

          {/* Quick Metrics Badge */}
          <div className="p-3 rounded-2xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200/60 dark:border-zinc-700/50 text-[11px] font-mono space-y-1">
            <div className="text-zinc-500 dark:text-zinc-400 flex justify-between">
              <span>Stack:</span>
              <span className="font-medium text-zinc-800 dark:text-zinc-200">Full-Stack</span>
            </div>
            <div className="text-zinc-500 dark:text-zinc-400 flex justify-between">
              <span>Response:</span>
              <span className="font-medium text-emerald-600 dark:text-emerald-400">&lt; 24h</span>
            </div>
          </div>
        </div>

      </div>

      {/* ========================================================================= */}
      {/* LINEAR / RAYCAST BENTO GRID: ROW 2 (TRADITIONAL CATEGORIZED SKILLS)      */}
      {/* ========================================================================= */}
      <div className="p-6 sm:p-8 rounded-3xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white/70 dark:bg-zinc-900/40 backdrop-blur-md hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 border-b border-zinc-100 dark:border-zinc-800/60 pb-4">
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
              Technical Stack &amp; Architecture
            </h2>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-0.5">
              Traditional categorized engineering spectrum — core languages and tools.
            </p>
          </div>
          <span className="text-[11px] font-mono text-zinc-400 hidden sm:inline">
            4 ARCHITECTURAL TIERS
          </span>
        </div>

        {/* 4 Categorized Columns in the Bento Deck */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {traditionalSkills.map((group) => {
            const Icon = group.icon;
            return (
              <div
                key={group.category}
                className="p-4 rounded-2xl bg-zinc-50/80 dark:bg-zinc-800/40 border border-zinc-200/60 dark:border-zinc-800/60 space-y-3"
              >
                <div className="flex items-center gap-2 text-zinc-700 dark:text-zinc-300">
                  <Icon size={14} className="text-zinc-400" />
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-300">
                    {group.category}
                  </h3>
                </div>

                {/* Clean Badges (Names only) */}
                <div className="flex flex-wrap gap-1.5">
                  {group.skills.map((skillName) => (
                    <span
                      key={skillName}
                      className="px-2.5 py-1 rounded-lg text-xs font-medium bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 border border-zinc-200/80 dark:border-zinc-700/80 hover:border-zinc-400 dark:hover:border-zinc-500 transition-colors shadow-2xs"
                    >
                      {skillName}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ========================================================================= */}
      {/* LINEAR / RAYCAST BENTO GRID: ROW 3 (FEATURED WORK + ARCHITECTURE METRICS) */}
      {/* ========================================================================= */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        
        {/* BENTO CARD 4: FEATURED WORK (2 COLS) */}
        <div className="md:col-span-2 p-6 sm:p-7 rounded-3xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white/70 dark:bg-zinc-900/40 backdrop-blur-md hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300 space-y-5">
          <div className="flex items-baseline justify-between border-b border-zinc-100 dark:border-zinc-800/60 pb-3">
            <div>
              <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
                Selected Work
              </h2>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-0.5">
                Production architectures and full-stack systems.
              </p>
            </div>

            <button
              onClick={() => {
                setActivePage('projects');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-xs font-mono text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors inline-flex items-center gap-1"
            >
              <span>All Projects</span>
              <span>&rarr;</span>
            </button>
          </div>

          <div className="space-y-3">
            {featuredProjects.slice(0, 2).map((project) => (
              <div
                key={project.id}
                className="p-4 rounded-2xl bg-zinc-50/80 dark:bg-zinc-800/30 border border-zinc-200/60 dark:border-zinc-800/60 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors space-y-2"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                    {project.title}
                  </h3>
                  <span className="text-[11px] font-mono text-zinc-400">
                    {project.category}
                  </span>
                </div>

                <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {project.tagline}
                </p>

                <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
                  <div className="flex flex-wrap gap-1">
                    {project.tech.slice(0, 4).map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border border-zinc-200/60 dark:border-zinc-800"
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
        </div>

        {/* BENTO CARD 5: ARCHITECTURAL PRINCIPLES (1 COL) */}
        <div className="p-6 rounded-3xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white/70 dark:bg-zinc-900/40 backdrop-blur-md hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300 flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">
              Engineering Pillars
            </span>
            
            <div className="space-y-3">
              <div className="flex items-start gap-2.5">
                <Zap size={14} className="text-amber-500 mt-0.5 shrink-0" />
                <div>
                  <div className="text-xs font-semibold text-zinc-800 dark:text-zinc-200">
                    Sub-20ms Caching
                  </div>
                  <div className="text-[11px] text-zinc-500 dark:text-zinc-400 leading-snug">
                    Redis key-value cache-aside &amp; rate limiting.
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Database size={14} className="text-indigo-500 mt-0.5 shrink-0" />
                <div>
                  <div className="text-xs font-semibold text-zinc-800 dark:text-zinc-200">
                    ACID Persistence
                  </div>
                  <div className="text-[11px] text-zinc-500 dark:text-zinc-400 leading-snug">
                    PostgreSQL &amp; MySQL indexing and migrations.
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <ShieldCheck size={14} className="text-emerald-500 mt-0.5 shrink-0" />
                <div>
                  <div className="text-xs font-semibold text-zinc-800 dark:text-zinc-200">
                    Reproducible Deploys
                  </div>
                  <div className="text-[11px] text-zinc-500 dark:text-zinc-400 leading-snug">
                    Docker multi-stage builds and contract testing.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={() => {
              setActivePage('about');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="w-full text-center text-xs font-mono text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors pt-2 border-t border-zinc-100 dark:border-zinc-800/60"
          >
            Learn more in About &rarr;
          </button>
        </div>

      </div>

      {/* ========================================================================= */}
      {/* LINEAR / RAYCAST BENTO GRID: ROW 4 (DIRECT CONTACT COORDINATES - NO FORMS)*/}
      {/* ========================================================================= */}
      <div className="p-6 sm:p-8 rounded-3xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white/70 dark:bg-zinc-900/40 backdrop-blur-md hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div className="space-y-1.5 max-w-lg">
          <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">
            Direct Transmission
          </span>
          <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
            Let's build something scalable together.
          </h3>
          <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Open for full-time engineering roles, backend contracts, and technical consulting.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2 p-2 rounded-2xl bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200/60 dark:border-zinc-700/60">
            <Mail size={14} className="text-zinc-400 ml-1" />
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-xs font-mono font-medium text-zinc-900 dark:text-zinc-100 hover:underline"
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

          <a
            href="./Kiruthickraj_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-zinc-900 dark:bg-zinc-100 text-zinc-50 dark:text-zinc-900 text-xs font-medium hover:opacity-90 transition-opacity"
          >
            <span>Resume</span>
            <ArrowUpRight size={12} />
          </a>
        </div>
      </div>

    </div>
  );
}
