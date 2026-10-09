import React, { useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import GithubIcon from '../components/GithubIcon';
import { personalInfo } from '../data/portfolioData';
import {
  repoMetadata,
  categories,
  getRepoDescription,
  getRepoTechStack,
  projectMatchesCategory,
  isExcludedRepo
} from '../data/repoMetadata';

// Initial curated fallback list of active public repositories so page loads instantaneously
const initialProjects = [
  {
    name: "ticketmaster",
    description: repoMetadata["ticketmaster"].description,
    tech: repoMetadata["ticketmaster"].tech,
    url: "https://github.com/Kiruthickraj004/ticketmaster"
  },
  {
    name: "mini-uber-eats",
    description: repoMetadata["mini-uber-eats"].description,
    tech: repoMetadata["mini-uber-eats"].tech,
    url: "https://github.com/Kiruthickraj004/mini-uber-eats"
  },
  {
    name: "job_management_system",
    description: repoMetadata["job_management_system"].description,
    tech: repoMetadata["job_management_system"].tech,
    url: "https://github.com/Kiruthickraj004/job_management_system"
  },
  {
    name: "django-project",
    description: repoMetadata["django-project"].description,
    tech: repoMetadata["django-project"].tech,
    url: "https://github.com/Kiruthickraj004/django-project"
  },
  {
    name: "blogCMS",
    description: repoMetadata["blogCMS"].description,
    tech: repoMetadata["blogCMS"].tech,
    url: "https://github.com/Kiruthickraj004/blogCMS"
  },
  {
    name: "laravel-queues-and-jobs",
    description: repoMetadata["laravel-queues-and-jobs"].description,
    tech: repoMetadata["laravel-queues-and-jobs"].tech,
    url: "https://github.com/Kiruthickraj004/laravel-queues-and-jobs"
  },
  {
    name: "clothiq",
    description: repoMetadata["clothiq"].description,
    tech: repoMetadata["clothiq"].tech,
    url: "https://github.com/Kiruthickraj004/clothiq"
  },
  {
    name: "AI-Content-Assistant-Plugin",
    description: repoMetadata["AI-Content-Assistant-Plugin"].description,
    tech: repoMetadata["AI-Content-Assistant-Plugin"].tech,
    url: "https://github.com/Kiruthickraj004/AI-Content-Assistant-Plugin"
  },
  {
    name: "bulk-price-updater",
    description: repoMetadata["bulk-price-updater"].description,
    tech: repoMetadata["bulk-price-updater"].tech,
    url: "https://github.com/Kiruthickraj004/bulk-price-updater"
  },
  {
    name: "headless-cms",
    description: repoMetadata["headless-cms"].description,
    tech: repoMetadata["headless-cms"].tech,
    url: "https://github.com/Kiruthickraj004/headless-cms"
  },
  {
    name: "imdb_score",
    description: repoMetadata["imdb_score"].description,
    tech: repoMetadata["imdb_score"].tech,
    url: "https://github.com/Kiruthickraj004/imdb_score"
  },
  {
    name: "Tenzies-Game",
    description: repoMetadata["Tenzies-Game"].description,
    tech: repoMetadata["Tenzies-Game"].tech,
    url: "https://github.com/Kiruthickraj004/Tenzies-Game"
  }
];

export default function ProjectsPage() {
  const [projects, setProjects] = useState(initialProjects);
  const [activeCategory, setActiveCategory] = useState('All');
  const [isLiveSynced, setIsLiveSynced] = useState(false);

  useEffect(() => {
    // Automatically fetch repositories directly from GitHub API
    // Sorted by pushed_at descending so any newly created/updated project is placed at the top!
    fetch('https://api.github.com/users/Kiruthickraj004/repos?sort=pushed&per_page=100')
      .then((res) => {
        if (!res.ok) throw new Error('GitHub API response error');
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          // Strictly take only active public repositories (exclude archived, disabled, private, and portfolio repo)
          const validRepos = data.filter((repo) => 
            !repo.private &&
            !repo.archived &&
            !repo.disabled &&
            !isExcludedRepo(repo)
          );

          const formatted = validRepos.map((repo) => ({
            name: repo.name,
            description: getRepoDescription(repo),
            tech: getRepoTechStack(repo),
            url: repo.html_url
          }));

          setProjects(formatted);
          setIsLiveSynced(true);
        }
      })
      .catch(() => {
        // Silently preserve initial high-quality fallback projects if offline or rate-limited
      });
  }, []);

  const filteredProjects = projects.filter((project) => projectMatchesCategory(project, activeCategory));

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-16 space-y-8">
      
      {/* Header */}
      <section className="space-y-3">
        <p className="text-xs font-mono uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
          Proof of Work
        </p>
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
          Stuff I've Built.
        </h1>
        <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-xl">
          Active builds and repos that hit different — live synced straight from GitHub, zero archived fluff.
        </p>
      </section>

      {/* Category Filter Pills (Minimal Island) */}
      <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-zinc-100 dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-zinc-800/80 self-start">
        {categories.map((cat) => {
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-xs px-3.5 py-1.5 rounded-lg transition-all ${
                isActive
                  ? 'bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 font-medium shadow-xs'
                  : 'text-zinc-500 dark:text-zinc-400 hover:text-orange-600 dark:hover:text-orange-400'
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Live GitHub Sync Status Bar */}
      <div className="flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400 font-mono pb-1 border-b border-zinc-200/80 dark:border-zinc-800/80">
        <span className="flex items-center gap-2">
          <span className={`w-2 h-2 rounded-full ${isLiveSynced ? 'bg-orange-500 animate-pulse' : 'bg-zinc-400'}`} />
          <span>
            {isLiveSynced
              ? `Live synced with GitHub (${filteredProjects.length} of ${projects.length} Active Repositories)`
              : `${filteredProjects.length} Active Public Projects`}
          </span>
        </span>
        <a
          href={personalInfo.github}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-orange-600 dark:hover:text-orange-400 transition-colors inline-flex items-center gap-1"
        >
          <span>github.com/Kiruthickraj004</span>
          <ArrowUpRight size={12} />
        </a>
      </div>

      {/* Projects List (Minimal: Name, Description, Tech Stack, Repo Link only) */}
      <div className="space-y-4">
        {filteredProjects.map((project) => (
          <div
            key={project.name}
            className="p-5 sm:p-6 rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white/70 dark:bg-zinc-900/30 hover:border-orange-500/40 dark:hover:border-orange-500/30 transition-all space-y-3.5 group"
          >
            {/* Project Name & Link to Repo */}
            <div className="flex items-center justify-between gap-3">
              <h2 className="text-base sm:text-lg font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                {project.name}
              </h2>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/60 dark:bg-zinc-800/40 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-xs font-medium text-zinc-700 dark:text-zinc-300 hover:text-orange-600 dark:hover:text-orange-400 transition-colors shrink-0"
              >
                <GithubIcon size={13} />
                <span>Repository</span>
                <ArrowUpRight size={12} className="text-zinc-400" />
              </a>
            </div>

            {/* Description */}
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
              {project.description}
            </p>

            {/* Tech Stack Used */}
            <div className="flex flex-wrap items-center gap-1.5 pt-0.5">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200/50 dark:border-zinc-700/50 text-zinc-700 dark:text-zinc-300"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
