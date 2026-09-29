import React, { useState, useEffect } from 'react';
import { 
  ArrowUpRight, 
  ArrowRight, 
  Copy, 
  Check, 
  FileText, 
  Sparkles, 
  GitBranch, 
  Star, 
  Code2, 
  Activity 
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import GithubIcon from '../components/GithubIcon';

const activeProject = {
  name: "mini-uber-eats",
  tagline: "High-Throughput Order Processing & Delivery Engine",
  status: "In Active Development",
  description: "Engineering an asynchronous food delivery backend architecture handling order state machines, driver dispatch logic, and sub-25ms cached menu queries.",
  techStack: ["Python", "Django REST", "Redis", "Docker", "PostgreSQL"],
  githubUrl: "https://github.com/Kiruthickraj004/mini-uber-eats"
};

const initialPinnedRepos = [
  {
    name: "mini-uber-eats",
    description: "High-throughput food ordering & delivery backend with Redis caching and Docker orchestration.",
    language: "Python",
    languageColor: "#3b82f6",
    url: "https://github.com/Kiruthickraj004/mini-uber-eats",
    stars: 0
  },
  {
    name: "job_management_system",
    description: "Asynchronous task scheduler & queue execution platform built with Laravel.",
    language: "PHP / Laravel",
    languageColor: "#ef4444",
    url: "https://github.com/Kiruthickraj004/job_management_system",
    stars: 0
  },
  {
    name: "blogCMS",
    description: "Modular content management system with authentication, article publishing, and category taxonomy.",
    language: "PHP",
    languageColor: "#8b5cf6",
    url: "https://github.com/Kiruthickraj004/blogCMS",
    stars: 0
  },
  {
    name: "bulk-price-updater",
    description: "Automated bulk catalog price manipulation utility with batch database transaction integrity.",
    language: "PHP",
    languageColor: "#10b981",
    url: "https://github.com/Kiruthickraj004/bulk-price-updater",
    stars: 0
  }
];

const defaultContributionStats = {
  total: 138,
  lastYear: 103,
  recentLevels: [0, 1, 0, 2, 0, 0, 3, 2, 0, 4, 2, 0, 3, 2, 4, 3]
};

export default function HomePage({ setActivePage }) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [repos, setRepos] = useState(initialPinnedRepos);
  const [contributionStats, setContributionStats] = useState(defaultContributionStats);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  useEffect(() => {
    // 1. Fetch live total GitHub contributions across all years
    fetch('https://github-contributions-api.jogruber.de/v4/Kiruthickraj004')
      .then((res) => {
        if (!res.ok) throw new Error('Contributions API error');
        return res.json();
      })
      .then((data) => {
        if (data && data.total) {
          const totalSum = Object.values(data.total).reduce((sum, count) => sum + (Number(count) || 0), 0);
          const currentYear = new Date().getFullYear();
          const lastYearCount = (data.total[currentYear] || 0) + (data.total[currentYear - 1] || 0);
          const recentDays = Array.isArray(data.contributions) 
            ? data.contributions.slice(-16).map((c) => c.level ?? 0)
            : defaultContributionStats.recentLevels;

          setContributionStats({
            total: totalSum > 0 ? totalSum : 138,
            lastYear: lastYearCount > 0 ? lastYearCount : 103,
            recentLevels: recentDays.length >= 10 ? recentDays : defaultContributionStats.recentLevels
          });
        }
      })
      .catch(() => {
        // Silently preserve default authentic contribution stats if offline
      });

    // 2. Fetch pinned repos star counts from GitHub
    fetch('https://api.github.com/users/Kiruthickraj004/repos?per_page=30')
      .then((res) => {
        if (!res.ok) throw new Error('GitHub API error');
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data)) {
          const activeRepos = data.filter((r) => !r.private && !r.archived && !r.disabled);
          setRepos((prev) =>
            prev.map((p) => {
              const match = activeRepos.find(
                (r) => r.name.toLowerCase() === p.name.toLowerCase()
              );
              return match
                ? {
                    ...p,
                    stars: match.stargazers_count,
                    url: match.html_url
                  }
                : p;
            })
          );
        }
      })
      .catch(() => {
        // Silently preserve default curated data if offline or rate-limited
      });
  }, []);

  return (
    <div className="w-full">
      
      {/* ========================================================================= */}
      {/* 1. SEAMLESS HERO SECTION (UNIFIED BACKGROUND & MINIMAL CONTENT)            */}
      {/* ========================================================================= */}
      <section className="relative w-full pt-28 sm:pt-36 pb-12 sm:pb-16 px-4 sm:px-6 overflow-hidden bg-transparent">
        <div className="relative max-w-4xl mx-auto text-center flex flex-col items-center space-y-6">
          
          {/* Distinct Engineering Discipline Tag */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-100/60 dark:bg-zinc-900/60 backdrop-blur-sm text-xs font-mono text-zinc-600 dark:text-zinc-400">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
            <span>Currently Cooking &middot; Systems Architecture &amp; Full-Stack</span>
          </div>

          {/* Minimalist Bold Typography */}
          <div className="space-y-2">
            <h5 className="text-base sm:text-xl font-medium text-zinc-600 dark:text-zinc-400">
              Hi, I'm
            </h5>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
              {personalInfo.name}
            </h1>
            <p className="text-base sm:text-xl font-medium text-zinc-500 dark:text-zinc-400 pt-1">
              Full-Stack Developer
            </p>
          </div>

          {/* Minimal 1-Sentence Statement */}
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto leading-relaxed font-normal">
            Building web platforms that just hit different — clean APIs, zero lag, and backends that never crash.
          </p>

          {/* Minimal Action Anchors */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 pt-2">
            <a
              href="./Kiruthickraj_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-zinc-900 dark:bg-zinc-100 text-zinc-50 dark:text-zinc-900 text-xs sm:text-sm font-medium hover:opacity-90 transition-opacity shadow-xs"
            >
              <FileText size={14} />
              <span>Resume (PDF)</span>
              <ArrowUpRight size={13} />
            </a>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/70 text-zinc-700 dark:text-zinc-300 text-xs sm:text-sm font-medium hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            >
              <GithubIcon size={14} />
              <span>GitHub</span>
              <ArrowUpRight size={13} />
            </a>

            <div className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white/70 dark:bg-zinc-900/70 text-xs sm:text-sm font-mono">
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
              >
                {personalInfo.email}
              </a>
              <button
                onClick={handleCopyEmail}
                className="p-1 rounded text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 transition-colors"
                title="Copy email address"
              >
                {copiedEmail ? <Check size={13} className="text-orange-500" /> : <Copy size={13} />}
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* Main Body Content Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-14 space-y-12 sm:space-y-16">
        
        {/* ========================================================================= */}
        {/* 2. DEVELOPER ACTIVITY (ACTIVE PROJECT & PINNED PUBLIC REPOSITORIES)       */}
        {/* ========================================================================= */}
        <section className="space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
            <div className="space-y-0.5">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse-subtle" />
                <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-900 dark:text-zinc-100 font-semibold">
                  The Grind &amp; Proof of Work
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400">
                What I'm locked in on right now, my tech stack, and public proof of work.
              </p>
            </div>
          </div>

          {/* 2-Column Dashboard Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            
            {/* Card 1: Currently Cooking */}
            <div className="p-5 rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white/70 dark:bg-zinc-900/30 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-semibold text-zinc-900 dark:text-zinc-100">
                    <Sparkles size={14} className="text-orange-500" />
                    <span>Currently Cooking</span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-orange-50 dark:bg-orange-950/40 text-orange-700 dark:text-orange-400 border border-orange-200 dark:border-orange-800/50 flex items-center gap-1.5 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
                    LOCKED IN
                  </span>
                </div>

                <div>
                  <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
                    {activeProject.name}
                  </h3>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 font-medium mt-0.5">
                    {activeProject.tagline}
                  </p>
                </div>

                <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed font-normal">
                  {activeProject.description}
                </p>

                {/* Tech Stack Pills */}
                <div className="space-y-1.5 pt-1">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400">
                    Tech Stack
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {activeProject.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-800 text-[11px] font-mono font-medium text-zinc-700 dark:text-zinc-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Public GitHub Contributions (Directly Below Tech Stack) */}
                <div className="p-3.5 rounded-xl bg-zinc-50/80 dark:bg-zinc-800/40 border border-zinc-200/60 dark:border-zinc-800 space-y-2.5">
                  <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400">
                    <span className="uppercase tracking-wider flex items-center gap-1.5 font-semibold text-zinc-600 dark:text-zinc-400">
                      <Activity size={13} className="text-orange-500" />
                      <span>The Git Grind</span>
                    </span>
                    <span className="flex items-center gap-1 text-orange-600 dark:text-orange-400 font-medium text-[10px]">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
                      active commits
                    </span>
                  </div>

                  <div className="flex items-baseline justify-between gap-2">
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold font-mono text-zinc-900 dark:text-zinc-50">
                        {contributionStats.lastYear}
                      </span>
                      <span className="text-xs text-zinc-500 dark:text-zinc-400">
                        contributions that don't lie
                      </span>
                    </div>
                    <span className="text-[11px] font-mono text-orange-600 dark:text-orange-400 font-medium shrink-0">
                      {contributionStats.total} total public
                    </span>
                  </div>

                  {/* Public Contribution Heatmap Preview Strip */}
                  <div className="pt-2 border-t border-zinc-200/50 dark:border-zinc-800/50 flex items-center justify-between">
                    <span className="text-[10px] font-mono text-zinc-400">
                      Recent Streak
                    </span>
                    <div className="flex items-center gap-1">
                      {contributionStats.recentLevels.map((lvl, idx) => {
                        const colors = [
                          'bg-zinc-200 dark:bg-zinc-800',
                          'bg-orange-300/80 dark:bg-orange-950',
                          'bg-orange-400 dark:bg-orange-700',
                          'bg-orange-500 dark:bg-orange-500',
                          'bg-orange-600 dark:bg-orange-400'
                        ];
                        return (
                          <span
                            key={idx}
                            className={`w-2.5 h-2.5 rounded-[2px] ${colors[lvl] || colors[0]}`}
                            title={`Public activity level: ${lvl}`}
                          />
                        );
                      })}
                    </div>
                  </div>
                </div>

              </div>

              <div className="pt-3 border-t border-zinc-100 dark:border-zinc-800/60">
                <a
                  href={activeProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-900 dark:text-zinc-100 hover:text-orange-600 dark:hover:text-orange-400 transition-colors group"
                >
                  <GithubIcon size={13} />
                  <span>Inspect Code</span>
                  <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-zinc-400" />
                </a>
              </div>
            </div>

            {/* Card 2: Pinned Repositories Only */}
            <div className="p-5 rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white/70 dark:bg-zinc-900/30 flex flex-col justify-between space-y-3">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-semibold text-zinc-900 dark:text-zinc-100">
                    <GitBranch size={14} className="text-indigo-500" />
                    <span>Proof of Work (Selected Repos)</span>
                  </div>
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-mono text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 transition-colors inline-flex items-center gap-1"
                  >
                    <span>github.com</span>
                    <ArrowUpRight size={11} />
                  </a>
                </div>

                {/* Pinned Repos list */}
                <div className="space-y-2">
                  {repos.map((repo) => (
                    <a
                      key={repo.name}
                      href={repo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-2.5 rounded-xl border border-zinc-200/60 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-800/20 hover:border-zinc-400 dark:hover:border-zinc-600 hover:bg-zinc-100/60 dark:hover:bg-zinc-800/60 transition-all group"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1.5 font-semibold text-xs text-zinc-900 dark:text-zinc-100 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                          <Code2 size={13} className="text-zinc-400 group-hover:text-orange-500 transition-colors" />
                          <span>{repo.name}</span>
                        </div>
                        <ArrowUpRight size={12} className="text-zinc-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </div>
                      <p className="text-[11px] text-zinc-500 dark:text-zinc-400 line-clamp-1 mt-1 font-normal">
                        {repo.description}
                      </p>
                      <div className="flex items-center justify-between mt-2 pt-1 border-t border-zinc-200/40 dark:border-zinc-800/40 text-[10px] font-mono text-zinc-400">
                        <div className="flex items-center gap-1.5">
                          <span
                            className="w-2 h-2 rounded-full"
                            style={{ backgroundColor: repo.languageColor }}
                          />
                          <span>{repo.language}</span>
                        </div>
                        {repo.stars > 0 ? (
                          <div className="flex items-center gap-1 text-zinc-500">
                            <Star size={10} className="fill-amber-400 text-amber-400" />
                            <span>{repo.stars}</span>
                          </div>
                        ) : (
                          <span className="text-zinc-400">Public Repo</span>
                        )}
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <div className="pt-2 border-t border-zinc-100 dark:border-zinc-800/60">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                >
                  <span>Explore all active builds on GitHub</span>
                  <ArrowRight size={12} />
                </a>
              </div>
            </div>

          </div>

          {/* Quick Portal Navigation to Dedicated Pages */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6">
            <button
              onClick={() => {
                setActivePage('about');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="p-4 rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white/70 dark:bg-zinc-900/30 hover:border-orange-500/40 dark:hover:border-orange-500/30 transition-all text-left space-y-1 group"
            >
              <div className="text-xs font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors flex items-center justify-between">
                <span>The Lore</span>
                <ArrowRight size={13} className="group-hover:translate-x-1 group-hover:text-orange-500 transition-all text-zinc-400" />
              </div>
              <p className="text-[11px] text-zinc-500 dark:text-zinc-400">
                Origin story, timeline &amp; skills.
              </p>
            </button>

            <button
              onClick={() => {
                setActivePage('projects');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="p-4 rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white/70 dark:bg-zinc-900/30 hover:border-orange-500/40 dark:hover:border-orange-500/30 transition-all text-left space-y-1 group"
            >
              <div className="text-xs font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors flex items-center justify-between">
                <span>The Builds</span>
                <ArrowRight size={13} className="group-hover:translate-x-1 group-hover:text-orange-500 transition-all text-zinc-400" />
              </div>
              <p className="text-[11px] text-zinc-500 dark:text-zinc-400">
                Stuff I shipped that hits different.
              </p>
            </button>

            <button
              onClick={() => {
                setActivePage('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="p-4 rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white/70 dark:bg-zinc-900/30 hover:border-orange-500/40 dark:hover:border-orange-500/30 transition-all text-left space-y-1 group"
            >
              <div className="text-xs font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors flex items-center justify-between">
                <span>Hit Me Up</span>
                <ArrowRight size={13} className="group-hover:translate-x-1 group-hover:text-orange-500 transition-all text-zinc-400" />
              </div>
              <p className="text-[11px] text-zinc-500 dark:text-zinc-400">
                Slide into my inbox or drop a line.
              </p>
            </button>
          </div>
        </section>

      </div>

    </div>
  );
}
