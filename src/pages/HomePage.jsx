import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Terminal as TerminalIcon, 
  Layers, 
  Cpu, 
  Database, 
  Container, 
  Zap, 
  ShieldCheck, 
  Code2, 
  ExternalLink, 
  ChevronRight,
  Sparkles,
  Server
} from 'lucide-react';
import { personalInfo, skillsData, projectsData, skillCategories } from '../data/portfolioData';

export default function HomePage({ setActivePage, toggleTerminal }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [typewriterIndex, setTypewriterIndex] = useState(0);

  const typewriterPhrases = [
    "Python & Django REST Framework Specialist",
    "PHP & Laravel Enterprise Architect",
    "ReactJS & Modern Frontend Engineer",
    "Docker, Redis & Multi-Database Architect"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setTypewriterIndex(prev => (prev + 1) % typewriterPhrases.length);
    }, 3200);
    return () => clearInterval(timer);
  }, [typewriterPhrases.length]);

  const filteredSkills = selectedCategory === 'All'
    ? skillsData
    : skillsData.filter(s => s.category === selectedCategory);

  const featuredProjects = projectsData.filter(p => p.featured);

  return (
    <div className="space-y-20 pb-16">
      
      {/* Hero Section */}
      <section className="relative pt-6 sm:pt-12 lg:pt-16 overflow-hidden">
        {/* Subtle Background Glow Elements */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/10 dark:bg-emerald-500/15 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute top-1/3 right-10 w-80 h-80 bg-cyan-500/10 dark:bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Hero Text & CTAs */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Availability Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-700 dark:text-emerald-400 text-xs font-mono font-medium shadow-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>{personalInfo.status}</span>
              </div>

              {/* Main Headline */}
              <div className="space-y-3">
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 font-sans leading-tight">
                  Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-500 dark:from-emerald-400 dark:via-teal-300 dark:to-cyan-400">{personalInfo.name}</span>.
                  <br />
                  <span className="text-2xl sm:text-4xl lg:text-5xl font-bold text-slate-800 dark:text-slate-200">
                    Full-Stack Engineer.
                  </span>
                </h1>

                {/* Animated Typewriter Subheading */}
                <div className="h-8 flex items-center">
                  <span className="font-mono text-xs sm:text-base text-emerald-600 dark:text-emerald-400 font-medium">
                    &gt; {typewriterPhrases[typewriterIndex]}
                    <span className="animate-ping font-bold ml-1">_</span>
                  </span>
                </div>
              </div>

              {/* Bio summary */}
              <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed max-w-xl">
                I build robust backend systems, resilient microservices, and interactive web applications. 
                Specialized in <strong className="text-slate-900 dark:text-slate-200 font-semibold">Python (Django/DRF)</strong>, <strong className="text-slate-900 dark:text-slate-200 font-semibold">PHP (Laravel)</strong>, and <strong className="text-slate-900 dark:text-slate-200 font-semibold">ReactJS</strong>, with low-latency <strong className="text-slate-900 dark:text-slate-200 font-semibold">Redis</strong> caching, <strong className="text-slate-900 dark:text-slate-200 font-semibold">PostgreSQL/MySQL</strong>, and <strong className="text-slate-900 dark:text-slate-200 font-semibold">Docker</strong> containerization.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => setActivePage('projects')}
                  className="flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-sm shadow-glow-emerald transition-all duration-200 group"
                >
                  <span>Explore Projects</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={toggleTerminal}
                  className="flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-800 text-slate-800 dark:text-slate-200 font-mono text-sm transition-all duration-200"
                >
                  <TerminalIcon size={16} className="text-emerald-500" />
                  <span>Launch CLI [~]</span>
                </button>

                <button
                  onClick={() => setActivePage('contact')}
                  className="px-5 py-3 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-900/60 text-slate-700 dark:text-slate-300 font-medium text-sm transition-colors"
                >
                  Contact Me
                </button>
              </div>

              {/* Tech Badges Marquee */}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800/80">
                <p className="text-xs font-mono text-slate-500 dark:text-slate-400 mb-2.5">
                  CORE ARSENAL:
                </p>
                <div className="flex flex-wrap gap-2 text-xs font-mono">
                  {['Python', 'Django DRF', 'PHP', 'Laravel', 'ReactJS', 'Docker', 'Redis', 'PostgreSQL', 'Postman'].map(tech => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/40 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Column: Interactive Hero Terminal Card */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-[#090d18] border border-slate-800 shadow-2xl overflow-hidden font-mono text-xs">
                {/* Terminal Header */}
                <div className="px-4 py-3 bg-[#0f172a] border-b border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block" />
                    <span className="text-slate-400 text-[11px] ml-2">dev-init.sh</span>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-950/80 text-emerald-400 border border-emerald-800/60">
                    LIVE REPL
                  </span>
                </div>

                {/* Terminal Content */}
                <div className="p-4 space-y-3 text-slate-300 leading-relaxed bg-[#070b14]/90">
                  <div className="text-slate-500">
                    # Loading developer environment configuration...
                  </div>
                  
                  <div>
                    <span className="text-emerald-400 font-bold">kiruthick@portfolio:~$</span>
                    <span className="text-cyan-300 ml-2">curl -s /api/v1/developer/summary</span>
                  </div>

                  <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800 text-[11px] text-emerald-300 space-y-1">
                    <div>{`{`}</div>
                    <div className="pl-4"><span className="text-slate-400">"engineer":</span> "Kiruthickraj",</div>
                    <div className="pl-4"><span className="text-slate-400">"role":</span> "Full-Stack Developer",</div>
                    <div className="pl-4"><span className="text-slate-400">"backend":</span> ["Python / Django", "PHP / Laravel"],</div>
                    <div className="pl-4"><span className="text-slate-400">"frontend":</span> ["ReactJS", "Tailwind CSS"],</div>
                    <div className="pl-4"><span className="text-slate-400">"infrastructure":</span> ["Docker", "Redis", "PostgreSQL"],</div>
                    <div className="pl-4"><span className="text-slate-400">"status":</span> "Ready for production"</div>
                    <div>{`}`}</div>
                  </div>

                  <div>
                    <span className="text-emerald-400 font-bold">kiruthick@portfolio:~$</span>
                    <span className="text-cyan-300 ml-2">docker ps --filter "status=healthy"</span>
                  </div>

                  <div className="text-[10px] text-slate-400 font-mono space-y-0.5">
                    <div className="text-emerald-400">● 4/4 containers healthy (redis, drf-api, postgres, react)</div>
                    <div className="text-slate-500">Latency: 16ms | Uptime: 99.98%</div>
                  </div>

                  <div className="pt-2 border-t border-slate-800 flex items-center justify-between">
                    <span className="text-[11px] text-slate-500">Press ~ to summon full CLI</span>
                    <button
                      onClick={toggleTerminal}
                      className="px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500 hover:text-white transition-all text-[11px]"
                    >
                      Open Full CLI &rarr;
                    </button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Quick Stats Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {personalInfo.stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-sm hover:border-emerald-500/40 transition-all duration-200"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-emerald-600 dark:text-emerald-400 font-mono">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-slate-100 mt-1">
                {stat.label}
              </div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400 font-mono mt-0.5">
                {stat.detail}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Core Tech Stack Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-2">
              <Cpu size={14} />
              <span>Full-Stack Capabilities</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100">
              Technology Stack & Expertise
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              Production-hardened skills applied across real-world systems and APIs.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-1.5 p-1 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            {skillCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                  selectedCategory === cat
                    ? 'bg-white dark:bg-slate-800 text-emerald-600 dark:text-emerald-400 shadow-sm font-semibold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredSkills.map((skill) => (
            <div
              key={skill.id}
              className="p-5 rounded-2xl bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800/80 hover:border-emerald-500/40 hover:shadow-lg transition-all duration-200 group space-y-4"
            >
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                    {skill.category}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mt-2 group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors">
                    {skill.name}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    {skill.tagline}
                  </p>
                </div>
                <span className="font-mono text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                  {skill.level}%
                </span>
              </div>

              {/* Proficiency Bar */}
              <div className="w-full h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full transition-all duration-500"
                  style={{ width: `${skill.level}%` }}
                />
              </div>

              {/* Skill Features Pills */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {skill.features.slice(0, 3).map((feat, i) => (
                  <span
                    key={i}
                    className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/60 text-slate-600 dark:text-slate-400"
                  >
                    {feat}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-2">
              <Layers size={14} />
              <span>Architectural Showcase</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100">
              Featured Systems & Applications
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              Production architectures highlighting full-stack engineering and API design.
            </p>
          </div>

          <button
            onClick={() => setActivePage('projects')}
            className="flex items-center gap-1 text-sm font-semibold text-emerald-600 dark:text-emerald-400 hover:underline"
          >
            <span>View All Projects</span>
            <ChevronRight size={16} />
          </button>
        </div>

        {/* Featured Projects Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800/80 overflow-hidden hover:border-emerald-500/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 font-medium">
                    {project.category}
                  </span>
                  <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                    Production Architecture
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 leading-snug">
                  {project.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Card Footer */}
              <div className="px-6 py-4 bg-slate-50 dark:bg-slate-950/50 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <div className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400">
                  {project.metrics ? Object.entries(project.metrics)[0].join(': ') : 'Active'}
                </div>

                <button
                  onClick={() => setActivePage('projects')}
                  className="flex items-center gap-1.5 text-xs font-semibold text-slate-800 dark:text-slate-200 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors"
                >
                  <span>Inspect System</span>
                  <ArrowRight size={13} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Engineering Principles Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-slate-900 via-[#0a0f1e] to-[#070b14] text-slate-100 border border-slate-800 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest">
              Core Engineering Philosophy
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              Built for Scale, Reliability & Low Latency.
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Every backend API and frontend component is architected with strict conventions: 
              normalized relational data structures in PostgreSQL/MySQL, sub-millisecond Redis caching, 
              isolated Docker containers, and rigorous contract validation with Postman.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
              <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/60">
                <Server size={20} className="text-emerald-400 mb-2" />
                <h4 className="text-sm font-bold text-white">RESTful Integrity</h4>
                <p className="text-xs text-slate-400 mt-1">Clean Django REST & Laravel serializers with JWT security.</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/60">
                <Zap size={20} className="text-cyan-400 mb-2" />
                <h4 className="text-sm font-bold text-white">Sub-20ms Caching</h4>
                <p className="text-xs text-slate-400 mt-1">In-memory Redis cache-aside patterns and rate-limiting.</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/60">
                <Container size={20} className="text-indigo-400 mb-2" />
                <h4 className="text-sm font-bold text-white">Dockerized Services</h4>
                <p className="text-xs text-slate-400 mt-1">Multi-stage container builds ensuring reliable deployments.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100">
          Interested in Collaborating or Hiring?
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-lg mx-auto">
          Let's discuss your next API service, enterprise portal, or full-stack web application.
        </p>
        <div className="pt-2 flex justify-center gap-3">
          <button
            onClick={() => setActivePage('contact')}
            className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-sm shadow-glow-emerald transition-all"
          >
            Start a Conversation
          </button>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-800 text-slate-800 dark:text-slate-200 font-mono text-sm transition-all"
          >
            GitHub ({personalInfo.username})
          </a>
        </div>
      </section>

    </div>
  );
}
