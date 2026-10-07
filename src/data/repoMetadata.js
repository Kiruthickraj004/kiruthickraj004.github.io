// Comprehensive repository metadata and telemetry helpers
// Extracted and analyzed directly from GitHub repository README files, architectural specs, and codebase structures

export const repoMetadata = {
  "ticketmaster": {
    description: "Full-stack bus transit booking platform with automated consecutive seat allocation, atomic ticket modification/cancellation, and role-based operator portals.",
    tech: ["Python", "Django", "Django REST Framework", "ReactJS", "PostgreSQL", "Tailwind CSS"],
    language: "Python / React"
  },
  "kiruthickraj004.github.io": {
    description: "Clean, minimalist developer portfolio and architecture showcase built with React and Tailwind CSS v3, featuring live GitHub telemetry, dual-theme mode, and responsive design.",
    tech: ["ReactJS", "Tailwind CSS", "JavaScript", "Vite", "GitHub Actions"],
    language: "ReactJS"
  },
  "mini-uber-eats": {
    description: "Full-stack food ordering & delivery platform with Django REST Framework, React frontend, Redis caching, and Docker orchestration.",
    tech: ["Python", "Django", "Django REST Framework", "ReactJS", "Redis", "Docker", "PostgreSQL"],
    language: "Python"
  },
  "job_management_system": {
    description: "Laravel 12 REST API for managing job listings, user applications, saved jobs, and administrator operations with Sanctum token authentication.",
    tech: ["PHP", "Laravel", "REST APIs", "MySQL", "Sanctum"],
    language: "PHP / Laravel"
  },
  "django-project": {
    description: "Modular enterprise RESTful API service built on Django with clean architecture, token authentication, and data serialization.",
    tech: ["Python", "Django", "Django REST Framework", "SQLite", "PostgreSQL"],
    language: "Python"
  },
  "blogCMS": {
    description: "Full-stack blogging content management system pairing a Laravel 12 REST API backend with a reactive React 18 single-page application.",
    tech: ["PHP", "Laravel", "ReactJS", "MySQL", "REST APIs", "Tailwind CSS"],
    language: "PHP / React"
  },
  "laravel-queues-and-jobs": {
    description: "Asynchronous worker pipeline utilizing Redis queues for high-concurrency background job dispatching and processing.",
    tech: ["PHP", "Laravel", "Redis", "Queue Workers"],
    language: "PHP / Laravel"
  },
  "clothiq": {
    description: "Modern, performance-optimized fashion e-commerce theme built on WooCommerce with dynamic catalog filtering and cart workflows.",
    tech: ["PHP", "WooCommerce", "WordPress", "MySQL", "JavaScript"],
    language: "PHP / WooCommerce"
  },
  "Smart-File-Manager": {
    description: "Cloud storage manager with granular role-based file access control, metadata indexing, and secure uploads.",
    tech: ["PHP", "Laravel", "Cloud Storage", "MySQL"],
    language: "PHP / Laravel"
  },
  "AI-Content-Assistant-Plugin": {
    description: "Intelligent content orchestration WordPress plugin integrating Google Gemini AI directly into the admin editor for automated writing and SEO workflows.",
    tech: ["PHP", "WordPress", "Google Gemini AI", "REST APIs", "JavaScript"],
    language: "PHP / WordPress"
  },
  "laravel-practice-jobs-management": {
    description: "Hands-on implementation of Laravel job queues, database dispatching, and asynchronous background worker processing.",
    tech: ["PHP", "Laravel", "MySQL", "Queue Workers"],
    language: "PHP / Laravel"
  },
  "bulk-price-updater": {
    description: "Automated bulk catalog price manipulation utility for WooCommerce with batch database transaction integrity across categories and sizes.",
    tech: ["PHP", "WooCommerce", "WordPress", "MySQL"],
    language: "PHP / WooCommerce"
  },
  "hireflow": {
    description: "Recruitment and candidate workflow management system with pipeline tracking and candidate evaluation stages.",
    tech: ["PHP", "Laravel", "MySQL", "Blade"],
    language: "PHP / Laravel"
  },
  "laravel-vue": {
    description: "Decoupled single-page application combining Laravel backend APIs with reactive Vue frontend components.",
    tech: ["PHP", "Laravel", "Vue.js", "REST APIs"],
    language: "PHP / Vue"
  },
  "menu-system": {
    description: "Dynamic nested navigation and catalog taxonomy management engine with tree traversal queries.",
    tech: ["PHP", "MySQL", "Tree Traversal"],
    language: "PHP / MySQL"
  },
  "headless-cms": {
    description: "API-first headless content architecture delivering structured JSON payloads to decoupled frontends.",
    tech: ["PHP", "Laravel", "REST APIs", "MySQL"],
    language: "PHP / Laravel"
  },
  "book-and-author-management": {
    description: "Relational entity management system with multi-table joins, Eloquent models, and data validation.",
    tech: ["PHP", "Laravel", "MySQL", "Eloquent"],
    language: "PHP / Laravel"
  },
  "wordpress-designs": {
    description: "Custom responsive web designs and dynamic UI templates for interactive web portals.",
    tech: ["JavaScript", "PHP", "CSS3", "WordPress"],
    language: "JavaScript / PHP"
  },
  "Tenzies-Game": {
    description: "Interactive reactive dice game built with React and Vite featuring state tracking, roll counters, and victory celebration triggers.",
    tech: ["ReactJS", "JavaScript", "Vite", "CSS3"],
    language: "ReactJS"
  },
  "imdb_score": {
    description: "Machine learning regression pipeline predicting movie IMDb ratings from historical metadata, cast features, and box-office attributes.",
    tech: ["Python", "Jupyter Notebook", "Pandas", "Scikit-Learn"],
    language: "Python / Data Science"
  },
  "color-swatches": {
    description: "Interactive WooCommerce product attribute and color swatch selector component updating variant availability in real time.",
    tech: ["PHP", "WooCommerce", "JavaScript", "CSS3"],
    language: "PHP / JavaScript"
  },
  "size-and-color-availability": {
    description: "Dynamic WooCommerce inventory matrix plugin allowing store administrators to configure SKU availability across sizes and colors.",
    tech: ["PHP", "WooCommerce", "WordPress", "MySQL", "REST APIs"],
    language: "PHP / WooCommerce"
  }
};

export const categories = ["All", "Fullstack", "PHP & Laravel", "Python & Django", "React & Frontend"];

// Helper to determine clean description by prioritizing repo README-analyzed metadata
export function getRepoDescription(repo) {
  if (!repo) return 'Checking the latest public repository activity.';
  const name = repo.name;
  const meta = repoMetadata[name];
  if (meta && meta.description) {
    return meta.description;
  }
  if (repo.description && repo.description.trim()) {
    return repo.description.trim();
  }
  const humanized = (name || '').replace(/[-_]/g, ' ');
  return `Software engineering project and source code implementation for ${humanized}.`;
}

// Helper to extract tech stack array by prioritizing README analysis
export function getRepoTechStack(repo) {
  if (!repo) return ['Full-Stack'];
  const name = repo.name;
  const meta = repoMetadata[name];
  if (meta && meta.tech && meta.tech.length > 0) {
    return meta.tech;
  }

  const tech = [];

  // Topics if set on GitHub
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
  const lowerName = (name || '').toLowerCase();
  if (lowerName.includes('laravel') && !tech.includes('Laravel')) tech.push('Laravel');
  if (lowerName.includes('django') && !tech.includes('Django')) tech.push('Django');
  if (lowerName.includes('react') && !tech.includes('ReactJS')) tech.push('ReactJS');
  if (lowerName.includes('vue') && !tech.includes('Vue.js')) tech.push('Vue.js');
  if (lowerName.includes('api') && !tech.includes('REST API')) tech.push('REST API');
  if (lowerName.includes('docker') && !tech.includes('Docker')) tech.push('Docker');

  return tech.length > 0 ? tech : ['Full-Stack'];
}

// Helper to determine primary language display string
export function getRepoPrimaryLanguage(repo) {
  if (!repo) return 'Repository';
  const meta = repoMetadata[repo.name];
  if (meta && meta.language) {
    return meta.language;
  }
  if (repo.language) {
    if (repo.language === 'Blade') return 'PHP / Blade';
    if (repo.language === 'Jupyter Notebook') return 'Python (Data)';
    return repo.language;
  }
  return 'Repository';
}

// Language color indicator mapping
export function getLanguageColor(language) {
  if (!language) return '#a1a1aa';
  const langLower = language.toLowerCase();
  if (langLower.includes('python')) return '#3572A5';
  if (langLower.includes('django')) return '#092E20';
  if (langLower.includes('php') || langLower.includes('laravel')) return '#4F5D95';
  if (langLower.includes('react')) return '#61dafb';
  if (langLower.includes('vue')) return '#41b883';
  if (langLower.includes('javascript')) return '#f1e05a';
  if (langLower.includes('wordpress')) return '#21759b';
  if (langLower.includes('jupyter')) return '#DA5B0B';
  return '#a1a1aa';
}

// Match project against category filters
export function projectMatchesCategory(project, category) {
  if (category === 'All') return true;

  const techLower = (project.tech || []).map((t) => t.toLowerCase());
  const nameLower = (project.name || '').toLowerCase();
  const descLower = (project.description || '').toLowerCase();

  if (category === 'Fullstack') {
    return (
      techLower.some((t) => t.includes('full-stack') || t.includes('fullstack') || t.includes('full stack')) ||
      (techLower.some((t) => t.includes('python') || t.includes('django') || t.includes('php') || t.includes('laravel')) &&
        techLower.some((t) => t.includes('react') || t.includes('vue') || t.includes('docker') || t.includes('blade') || t.includes('javascript') || t.includes('mysql') || t.includes('redis') || t.includes('tailwind'))) ||
      ['ticketmaster', 'mini-uber-eats', 'job_management_system', 'clothiq', 'laravel-vue', 'headless-cms', 'hireflow', 'blogCMS', 'Smart-File-Manager'].includes(project.name)
    );
  }

  if (category === 'PHP & Laravel') {
    return (
      techLower.some((t) => t.includes('php') || t.includes('laravel') || t.includes('blade') || t.includes('woocommerce')) ||
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
      descLower.includes('django') ||
      project.name === 'ticketmaster'
    );
  }

  if (category === 'React & Frontend') {
    return (
      techLower.some((t) => t.includes('react') || t.includes('frontend') || t.includes('vue') || t.includes('javascript') || t.includes('css') || t.includes('tailwind')) ||
      nameLower.includes('react') ||
      nameLower.includes('game') ||
      nameLower.includes('designs') ||
      nameLower.includes('github.io') ||
      project.name === 'ticketmaster' ||
      project.name === 'Tenzies-Game'
    );
  }

  return true;
}
