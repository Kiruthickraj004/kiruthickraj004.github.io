import React, { useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import GithubIcon from '../components/GithubIcon';
import { personalInfo } from '../data/portfolioData';

// Known repository metadata overrides to ensure high-fidelity descriptions and tech tags
const repoMetadata = {
  "mini-uber-eats": {
    description: "High-throughput food ordering & delivery backend architecture with Redis distributed caching and Docker orchestration.",
    tech: ["Python", "Django REST Framework", "Redis", "Docker", "PostgreSQL"]
  },
  "job_management_system": {
    description: "Asynchronous task scheduling & queue execution platform for distributed background job processing.",
    tech: ["PHP", "Laravel", "MySQL", "Redis Queues"]
  },
  "django-project": {
    description: "Modular enterprise RESTful API service built on Django with clean architecture and token authentication.",
    tech: ["Python", "Django", "Django REST Framework", "SQLite", "PostgreSQL"]
  },
  "blogCMS": {
    description: "Full-featured content management system with article publishing workflows, user authentication, and taxonomy management.",
    tech: ["PHP", "MySQL", "Blade", "HTML/CSS"]
  },
  "laravel-queues-and-jobs": {
    description: "Asynchronous worker pipeline utilizing Redis queues for high-concurrency background job dispatching.",
    tech: ["PHP", "Laravel", "Redis", "Queue Workers"]
  },
  "clothiq": {
    description: "Modern e-commerce platform with dynamic catalog filtering, cart state workflows, and relational database schemas.",
    tech: ["PHP", "Laravel", "MySQL", "JavaScript"]
  },
  "Smart-File-Manager": {
    description: "Cloud storage manager with granular role-based file access control, metadata indexing, and secure uploads.",
    tech: ["PHP", "Laravel", "Cloud Storage", "MySQL"]
  },
  "AI-Content-Assistant-Plugin": {
    description: "Intelligent content generation assistant integrating LLM APIs, prompt engineering, and automated publishing.",
    tech: ["PHP", "REST APIs", "LLM Integration", "WordPress"]
  },
  "bulk-price-updater": {
    description: "Automated bulk catalog price manipulation utility with batch database transaction integrity.",
    tech: ["PHP", "MySQL", "Database Optimization"]
  },
  "hireflow": {
    description: "Recruitment and candidate workflow management system with pipeline tracking and candidate evaluation stages.",
    tech: ["PHP", "Laravel", "MySQL"]
  },
  "laravel-vue": {
    description: "Decoupled single-page application combining Laravel backend APIs with reactive Vue frontend components.",
    tech: ["PHP", "Laravel", "Vue.js", "REST APIs"]
  },
  "menu-system": {
    description: "Dynamic nested navigation and catalog taxonomy management engine with tree traversal queries.",
    tech: ["PHP", "MySQL", "Tree Traversal"]
  },
  "headless-cms": {
    description: "API-first headless content architecture delivering structured JSON payloads to decoupled frontends.",
    tech: ["PHP", "Laravel", "REST APIs"]
  },
  "book-and-author-management": {
    description: "Relational entity management system with multi-table joins, Eloquent models, and data validation.",
    tech: ["PHP", "Laravel", "MySQL"]
  },
  "wordpress-designs": {
    description: "Custom responsive web designs and dynamic UI templates for interactive web portals.",
    tech: ["JavaScript", "PHP", "CSS3", "WordPress"]
  },
  "Tenzies-Game": {
    description: "Interactive reactive dice game built with state management and sound animations.",
    tech: ["ReactJS", "JavaScript", "CSS3"]
  },
  "imdb_score": {
    description: "Machine learning regression model predicting movie ratings from metadata and historical box-office features.",
    tech: ["Python", "Jupyter Notebook", "Pandas", "Scikit-Learn"]
  },
  "color-swatches": {
    description: "Interactive product attribute and color swatch selector component for e-commerce interfaces.",
    tech: ["PHP", "JavaScript", "CSS"]
  },
  "size-and-color-availability": {
    description: "Dynamic inventory matrix checking SKU availability and variant combinations in real time.",
    tech: ["PHP", "MySQL", "REST APIs"]
  }
};

const categories = ["All", "Fullstack", "PHP & Laravel", "Python & Django", "React & Frontend"];

// Match project against category filters
function projectMatchesCategory(project, category) {
  if (category === 'All') return true;

  const techLower = (project.tech || []).map((t) => t.toLowerCase());
  const nameLower = project.name.toLowerCase();
  const descLower = (project.description || '').toLowerCase();

  if (category === 'Fullstack') {
    return (
      techLower.some((t) => t.includes('full-stack') || t.includes('fullstack') || t.includes('full stack')) ||
      (techLower.some((t) => t.includes('python') || t.includes('django') || t.includes('php') || t.includes('laravel')) &&
        techLower.some((t) => t.includes('react') || t.includes('vue') || t.includes('docker') || t.includes('blade') || t.includes('javascript') || t.includes('mysql') || t.includes('redis'))) ||
      ['mini-uber-eats', 'job_management_system', 'clothiq', 'laravel-vue', 'headless-cms', 'hireflow', 'blogCMS', 'Smart-File-Manager'].includes(project.name)
    );
  }

  if (category === 'PHP & Laravel') {
    return (
      techLower.some((t) => t.includes('php') || t.includes('laravel') || t.includes('blade')) ||
      nameLower.includes('php') ||
      nameLower.includes('laravel') ||
      descLower.includes('php') ||
      descLower.includes('laravel')
    );
  }

  if (category === 'Python & Django') {
    return (
      techLower.some((t) => t.includes('python') || t.includes('django')) ||
      nameLower.includes('python') ||
      nameLower.includes('django') ||
      descLower.includes('python') ||
      descLower.includes('django')
    );
  }

  if (category === 'React & Frontend') {
    return (
      techLower.some((t) => t.includes('react') || t.includes('frontend') || t.includes('vue') || t.includes('javascript') || t.includes('css')) ||
      nameLower.includes('react') ||
      nameLower.includes('game') ||
      nameLower.includes('designs')
    );
  }

  return true;
}

// Helper to determine tech stack from GitHub repo data
function extractTechStack(repo) {
  const meta = repoMetadata[repo.name];
  if (meta && meta.tech && meta.tech.length > 0) {
    return meta.tech;
  }

  const tech = [];

  // Topics if set in GitHub
  if (Array.isArray(repo.topics) && repo.topics.length > 0) {
    repo.topics.forEach((t) => {
      const cap = t.charAt(0).toUpperCase() + t.slice(1);
      if (!tech.includes(cap)) tech.push(cap);
    });
  }

  // Language mapping
  const lang = repo.language;
  if (lang) {
    if (lang === 'Blade') {
      if (!tech.includes('PHP')) tech.push('PHP');
      if (!tech.includes('Laravel')) tech.push('Laravel');
    } else if (lang === 'Jupyter Notebook') {
      if (!tech.includes('Python')) tech.push('Python');
      if (!tech.includes('Data Science')) tech.push('Data Science');
    } else {
      if (!tech.includes(lang)) tech.push(lang);
    }
  }

  // Name heuristics for untagged new repositories
  const lowerName = repo.name.toLowerCase();
  if (lowerName.includes('laravel') && !tech.includes('Laravel')) tech.push('Laravel');
  if (lowerName.includes('django') && !tech.includes('Django')) tech.push('Django');
  if (lowerName.includes('react') && !tech.includes('ReactJS')) tech.push('ReactJS');
  if (lowerName.includes('vue') && !tech.includes('Vue.js')) tech.push('Vue.js');
  if (lowerName.includes('api') && !tech.includes('REST API')) tech.push('REST API');
  if (lowerName.includes('docker') && !tech.includes('Docker')) tech.push('Docker');

  return tech.length > 0 ? tech : ['Full-Stack'];
}

// Helper to determine clean description
function extractDescription(repo) {
  if (repo.description && repo.description.trim()) {
    return repo.description.trim();
  }
  const meta = repoMetadata[repo.name];
  if (meta && meta.description) {
    return meta.description;
  }
  const humanized = repo.name.replace(/[-_]/g, ' ');
  return `Software engineering project and source code implementation for ${humanized}.`;
}

// Initial curated fallback list of active public repositories so page loads instantaneously
const initialProjects = [
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
            repo.name !== 'kiruthickraj004.github.io'
          );

          const formatted = validRepos.map((repo) => ({
            name: repo.name,
            description: extractDescription(repo),
            tech: extractTechStack(repo),
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
