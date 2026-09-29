import React, { useState } from 'react';
import { ArrowRight, ArrowUpRight, Mail, Copy, Check, Server, Database, Globe, Container, Activity } from 'lucide-react';
import { personalInfo, projectsData } from '../data/portfolioData';
import GithubIcon from '../components/GithubIcon';

export default function HomePage({ setActivePage }) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [activePipelineNode, setActivePipelineNode] = useState('gateway');
  const [activeFocus, setActiveFocus] = useState('fullstack');

  const featuredProjects = projectsData.filter(p => p.featured);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const pipelineNodes = [
    {
      id: 'client',
      title: 'Client Layer',
      tech: 'ReactJS',
      spec: 'Reactive SPA, Context state & responsive Tailwind interfaces',
      metric: 'Render: < 16ms'
    },
    {
      id: 'gateway',
      title: 'API & Microservices',
      tech: 'Python / Django / Laravel',
      spec: 'RESTful endpoints, JWT authentication & ModelSerializers',
      metric: 'Throughput: High Concurrency'
    },
    {
      id: 'cache',
      title: 'Acceleration Layer',
      tech: 'Redis',
      spec: 'In-memory cache-aside, token bucket rate limiting & queues',
      metric: 'Latency: ~14ms'
    },
    {
      id: 'storage',
      title: 'Persistence Layer',
      tech: 'PostgreSQL / MySQL',
      spec: 'ACID relational schemas, B-Tree indexes & automated migrations',
      metric: 'Integrity: ACID Guaranteed'
    }
  ];

  const focusDescriptions = {
    fullstack: "Architecting end-to-end web applications with robust Python/PHP backends, reactive React interfaces, and low-latency Redis caching.",
    backend: "Specializing in Django REST Framework and Laravel, clean serialization, JWT token rotation, and resilient API contracts.",
    data: "Designing normalized relational schemas in PostgreSQL & MySQL with sub-20ms in-memory cache-aside layers using Redis.",
    devops: "Containerizing services with multi-stage Docker builds, Docker Compose networks, and rigorous Postman test collections."
  };

  const skillMatrix = [
    {
      domain: "01 // BACKEND & APIS",
      skills: [
        { num: "01", name: "Python" },
        { num: "02", name: "Django" },
        { num: "03", name: "Django REST Framework" },
        { num: "04", name: "PHP" },
        { num: "05", name: "Laravel" },
      ]
    },
    {
      domain: "02 // DATA & ACCELERATION",
      skills: [
        { num: "06", name: "PostgreSQL" },
        { num: "07", name: "MySQL" },
        { num: "08", name: "Redis" },
      ]
    },
    {
      domain: "03 // CLIENT & INFRASTRUCTURE",
      skills: [
        { num: "09", name: "ReactJS" },
        { num: "10", name: "Docker" },
        { num: "11", name: "Postman" },
      ]
    }
  ];

  const currentNode = pipelineNodes.find(n => n.id === activePipelineNode) || pipelineNodes[1];

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-14 space-y-16 sm:space-y-20">
      
      {/* 1. TOTALLY NEW MINIMALIST HERO WITH ARCHITECTURAL PIPELINE ANIMATION */}
      <section className="space-y-8">
        
        {/* Top Meta Line: Availability & Role */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/40 text-xs font-mono text-zinc-600 dark:text-zinc-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse-subtle" />
            <span>{personalInfo.status}</span>
          </div>

          <span className="text-[11px] font-mono text-zinc-400 dark:text-zinc-500">
            India (IST) · Full-Stack Engineer
          </span>
        </div>

        {/* Identity & Dynamic Focus Switcher */}
        <div className="space-y-4">
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
              {personalInfo.name}
            </h1>
            <p className="text-base sm:text-lg text-zinc-500 dark:text-zinc-400 font-normal">
              Full-Stack Developer & API Systems Architect.
            </p>
          </div>

          {/* Interactive Architectural Focus Switcher (New Idea) */}
          <div className="space-y-2.5 pt-1">
            <div className="flex flex-wrap gap-1.5">
              {[
                { id: 'fullstack', label: 'Full-Stack' },
                { id: 'backend', label: 'Backend & APIs' },
                { id: 'data', label: 'Data & Redis' },
                { id: 'devops', label: 'Docker & DevOps' },
              ].map(f => (
                <button
                  key={f.id}
                  onClick={() => setActiveFocus(f.id)}
                  className={`text-xs px-3 py-1 rounded-full transition-all ${
                    activeFocus === f.id
                      ? 'bg-zinc-900 text-zinc-100 dark:bg-zinc-100 dark:text-zinc-900 font-medium'
                      : 'border border-zinc-200 dark:border-zinc-800/80 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800/40'
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>

            <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-xl min-h-[44px]">
              {focusDescriptions[activeFocus]}
            </p>
          </div>
        </div>

        {/* NEW IDEA: The Minimalist Live Pipeline Animation Card */}
        <div className="p-5 sm:p-6 rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white/70 dark:bg-zinc-900/30 space-y-4 shadow-xs">
          
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="text-zinc-400 dark:text-zinc-500 uppercase tracking-widest flex items-center gap-1.5">
              <Activity size={12} className="text-emerald-500" />
              <span>Full-Stack Request Lifecycle</span>
            </span>
            <span className="text-[11px] text-zinc-400 dark:text-zinc-500">
              Interactive · Click a node
            </span>
          </div>

          {/* Connected Pipeline Flow */}
          <div className="relative pt-2 pb-1">
            {/* Animated Packet Track */}
            <div className="absolute top-1/2 left-4 right-4 -translate-y-1/2 h-[2px] bg-zinc-200 dark:bg-zinc-800 overflow-hidden pointer-events-none -z-0">
              <div className="w-16 h-full bg-zinc-800 dark:bg-zinc-300 animate-packet" />
            </div>

            {/* Pipeline Nodes */}
            <div className="relative z-10 grid grid-cols-4 gap-2">
              {pipelineNodes.map((node) => {
                const isActive = activePipelineNode === node.id;
                return (
                  <button
                    key={node.id}
                    onClick={() => setActivePipelineNode(node.id)}
                    className={`p-2.5 rounded-xl border text-center transition-all ${
                      isActive
                        ? 'border-zinc-900 dark:border-zinc-100 bg-white dark:bg-zinc-800 shadow-xs'
                        : 'border-zinc-200/80 dark:border-zinc-800/80 bg-white/90 dark:bg-zinc-900/90 hover:border-zinc-400 dark:hover:border-zinc-600'
                    }`}
                  >
                    <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-tight truncate">
                      {node.title.split(' ')[0]}
                    </div>
                    <div className="text-xs font-semibold text-zinc-900 dark:text-zinc-100 truncate mt-0.5">
                      {node.tech.split(' ')[0]}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Node Spec Telemetry Bar */}
          <div className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-800/40 border border-zinc-200/60 dark:border-zinc-700/60 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
            <div>
              <span className="font-semibold text-zinc-900 dark:text-zinc-100">
                {currentNode.title}: {currentNode.tech}
              </span>
              <p className="text-zinc-500 dark:text-zinc-400 text-[11px] mt-0.5">
                {currentNode.spec}
              </p>
            </div>
            <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-zinc-200/70 dark:bg-zinc-700/60 text-zinc-700 dark:text-zinc-300 self-start sm:self-auto shrink-0">
              {currentNode.metric}
            </span>
          </div>

        </div>

        {/* Quick Link Navigation */}
        <div className="flex flex-wrap items-center gap-2 text-xs font-medium pt-1">
          <button
            onClick={() => { setActivePage('projects'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="px-3.5 py-1.5 rounded-full bg-zinc-900 text-zinc-100 dark:bg-zinc-100 dark:text-zinc-900 hover:opacity-90 transition-opacity flex items-center gap-1"
          >
            <span>Selected Projects</span>
            <ArrowRight size={12} />
          </button>

          <button
            onClick={() => { setActivePage('about'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="px-3.5 py-1.5 rounded-full border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800/60 transition-colors"
          >
            About & Experience
          </button>

          <a
            href="./Kiruthickraj_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-1.5 rounded-full border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800/60 transition-colors inline-flex items-center gap-1"
          >
            <span>Resume (PDF)</span>
            <ArrowUpRight size={12} />
          </a>
        </div>

      </section>

      {/* 2. COMPLETELY REDESIGNED SKILLS SECTION: SWISS-STYLE PRECISION MATRIX (NAMES ONLY) */}
      <section className="space-y-4 pt-6 border-t border-zinc-200/80 dark:border-zinc-800/80">
        <div className="flex items-baseline justify-between">
          <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
            01 // Technical Competencies
          </h2>
          <span className="text-[11px] font-mono text-zinc-400 dark:text-zinc-500">
            11 Core Technologies
          </span>
        </div>

        {/* 3 Architectural Columns with Precision Cell Design */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
          {skillMatrix.map((col) => (
            <div
              key={col.domain}
              className="p-4 rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white/70 dark:bg-zinc-900/30 space-y-3"
            >
              <h3 className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 dark:text-zinc-500 border-b border-zinc-100 dark:border-zinc-800/60 pb-2">
                {col.domain}
              </h3>

              <div className="space-y-1.5">
                {col.skills.map((skill) => (
                  <div
                    key={skill.num}
                    className="p-2.5 rounded-xl border border-zinc-200/60 dark:border-zinc-800/60 bg-white dark:bg-zinc-900/50 hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors flex items-center justify-between group"
                  >
                    <span className="text-xs font-medium text-zinc-800 dark:text-zinc-200 group-hover:text-zinc-950 dark:group-hover:text-white transition-colors">
                      {skill.name}
                    </span>
                    <span className="font-mono text-[10px] text-zinc-400 group-hover:text-zinc-600 dark:group-hover:text-zinc-300">
                      {skill.num}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. SELECTED SYSTEMS / PROJECTS */}
      <section className="space-y-4 pt-6 border-t border-zinc-200/80 dark:border-zinc-800/80">
        <div className="flex items-baseline justify-between">
          <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
            02 // Selected Systems
          </h2>
          <button
            onClick={() => { setActivePage('projects'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="text-xs text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
          >
            All Projects &rarr;
          </button>
        </div>

        <div className="space-y-3 pt-1">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="p-4 sm:p-5 rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white dark:bg-zinc-900/30 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors space-y-2.5"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
                  {project.title}
                </h3>
                <span className="text-xs font-mono text-zinc-400">
                  {project.category}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {project.tagline}
              </p>

              <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3 text-xs font-medium">
                  <button
                    onClick={() => { setActivePage('projects'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
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
      </section>

      {/* 4. DIRECT CONTACT COORDINATES (NO FORM) */}
      <section className="pt-6 border-t border-zinc-200/80 dark:border-zinc-800/80 space-y-4">
        <div>
          <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
            03 // Contact Coordinates
          </h2>
          <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mt-1">
            Let's connect.
          </h3>
          <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mt-0.5">
            Available for full-time engineering roles, backend microservice contracts, and technical architecture consulting.
          </p>
        </div>

        <div className="p-4 sm:p-5 rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white dark:bg-zinc-900/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Mail size={15} className="text-zinc-400" />
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-sm font-medium text-zinc-900 dark:text-zinc-100 hover:underline"
              >
                {personalInfo.email}
              </a>
              <button
                onClick={handleCopyEmail}
                className="p-1 rounded text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 transition-colors"
                title="Copy email address"
              >
                {copiedEmail ? <Check size={13} className="text-emerald-500" /> : <Copy size={13} />}
              </button>
            </div>

            <div className="flex items-center gap-2">
              <GithubIcon size={15} className="text-zinc-400" />
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors inline-flex items-center gap-1"
              >
                <span>github.com/{personalInfo.username}</span>
                <ArrowUpRight size={12} />
              </a>
            </div>
          </div>

          <div className="flex items-center gap-2 self-start sm:self-auto">
            <a
              href="./Kiruthickraj_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-zinc-900 dark:bg-zinc-100 text-zinc-50 dark:text-zinc-900 text-xs font-medium hover:opacity-90 transition-opacity"
            >
              <span>Download Resume</span>
              <ArrowUpRight size={12} />
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
