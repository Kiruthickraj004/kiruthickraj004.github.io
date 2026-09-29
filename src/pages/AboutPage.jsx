import React, { useState } from 'react';
import { 
  User, 
  Code2, 
  Database, 
  Container, 
  Terminal, 
  Workflow, 
  CheckCircle2, 
  ExternalLink,
  Sparkles,
  Server,
  Layers,
  ArrowRight
} from 'lucide-react';
import { personalInfo, skillsData, experienceTimeline } from '../data/portfolioData';

export default function AboutPage({ setActivePage, toggleTerminal }) {
  const [selectedSkill, setSelectedSkill] = useState(skillsData[0]);

  const backendSkills = skillsData.filter(s => s.category === 'Backend');
  const frontendSkills = skillsData.filter(s => s.category === 'Frontend');
  const dbSkills = skillsData.filter(s => s.category === 'Databases & Cache');
  const devopsSkills = skillsData.filter(s => s.category === 'DevOps & Tooling');

  const workflowSteps = [
    {
      num: "01",
      title: "API Contract & Data Modeling",
      tool: "Postman & Schemas",
      description: "Define RESTful endpoints, request/response models, and error states using Postman collections before writing implementation code."
    },
    {
      num: "02",
      title: "Database Normalization & Indexing",
      tool: "PostgreSQL / MySQL",
      description: "Structure relational schemas, set foreign keys, design B-Tree indexes for query hotspots, and write reproducible migrations."
    },
    {
      num: "03",
      title: "Backend Core & Redis Caching",
      tool: "Django (DRF) / Laravel",
      description: "Implement business services, JWT/Sanctum auth, rate-limiters, and sub-20ms Redis cache-aside layers."
    },
    {
      num: "04",
      title: "Reactive UI & Containerization",
      tool: "ReactJS & Docker",
      description: "Build component-driven single-page interfaces, connect to the API layer, and package services into Docker Compose containers."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 pb-20 pt-6">
      
      {/* Page Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
          <User size={14} />
          <span>About Kiruthickraj</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-slate-100 font-sans tracking-tight">
          Engineering Scalable Backend Systems & Modern Interfaces.
        </h1>
        <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-3xl leading-relaxed">
          Full-Stack Software Engineer bridging the gap between high-throughput backend infrastructure 
          and reactive, performant user interfaces.
        </p>
      </div>

      {/* Developer Bio & Architecture Philosophy */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Personal Narrative */}
        <div className="lg:col-span-7 space-y-6">
          <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 font-sans">
              Who I Am & How I Work
            </h2>
            <div className="space-y-3 text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
              <p>
                Hello! I am <strong className="text-slate-900 dark:text-slate-200 font-semibold">{personalInfo.name}</strong>, a Full-Stack Developer passionate about clean code architecture, database optimization, and developer ergonomics.
              </p>
              <p>
                My backend foundation is built around <strong className="text-slate-900 dark:text-slate-200 font-semibold">Python (Django & Django REST Framework)</strong> and <strong className="text-slate-900 dark:text-slate-200 font-semibold">PHP (Laravel)</strong>. I enjoy taking complex domain logic and crafting standard-compliant RESTful APIs that are thoroughly tested with Postman.
              </p>
              <p>
                To achieve high concurrency and lightning-fast response times, I integrate <strong className="text-slate-900 dark:text-slate-200 font-semibold">Redis</strong> for in-memory caching and sliding-window rate limiting, paired with <strong className="text-slate-900 dark:text-slate-200 font-semibold">PostgreSQL</strong> and <strong className="text-slate-900 dark:text-slate-200 font-semibold">MySQL</strong> for ACID-guaranteed persistence.
              </p>
              <p>
                On the client side, I engineer reactive applications with <strong className="text-slate-900 dark:text-slate-200 font-semibold">ReactJS</strong> and Tailwind CSS, and package everything inside multi-stage <strong className="text-slate-900 dark:text-slate-200 font-semibold">Docker</strong> environments for turnkey deployments.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center gap-3">
              <button
                onClick={() => setActivePage('contact')}
                className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-xs sm:text-sm shadow-glow-emerald transition-all"
              >
                Get in Touch
              </button>
              <button
                onClick={toggleTerminal}
                className="px-5 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-mono text-xs sm:text-sm transition-all flex items-center gap-2"
              >
                <Terminal size={14} className="text-emerald-500" />
                <span>Run `about` in CLI</span>
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Key Engineering Highlights */}
        <div className="lg:col-span-5 space-y-4">
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <Layers size={18} className="text-emerald-500" />
              <span>Core Engineering Pillars</span>
            </h3>

            <div className="space-y-3.5 text-xs sm:text-sm">
              <div className="flex items-start gap-3">
                <CheckCircle2 size={16} className="text-emerald-500 mt-0.5 shrink-0" />
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-slate-200">RESTful API Design</h4>
                  <p className="text-slate-500 dark:text-slate-400 text-xs">Consistent serialization, HTTP status conventions, pagination, and JWT auth.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 size={16} className="text-cyan-500 mt-0.5 shrink-0" />
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-slate-200">Redis In-Memory Caching</h4>
                  <p className="text-slate-500 dark:text-slate-400 text-xs">Cache-aside patterns and rate-limiting reducing DB queries by up to 70%.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 size={16} className="text-indigo-500 mt-0.5 shrink-0" />
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-slate-200">Docker Containerization</h4>
                  <p className="text-slate-500 dark:text-slate-400 text-xs">Docker Compose workflows connecting React, Django, Redis, and PostgreSQL seamlessly.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 size={16} className="text-amber-500 mt-0.5 shrink-0" />
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-slate-200">Postman Automated Testing</h4>
                  <p className="text-slate-500 dark:text-slate-400 text-xs">Comprehensive collections with pre-request scripts and automated assertion tests.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Terminal Bio Snippet */}
          <div className="p-4 rounded-xl bg-[#090d19] border border-slate-800 text-xs font-mono text-slate-300">
            <div className="text-slate-500 pb-1.5 border-b border-slate-800">
              $ cat /etc/engineer.conf
            </div>
            <div className="pt-2 text-emerald-400">
              NAME="{personalInfo.name}"<br/>
              ROLE="{personalInfo.role}"<br/>
              LOCATION="{personalInfo.location}"<br/>
              GITHUB="{personalInfo.username}"<br/>
              STATUS="AVAILABLE_FOR_HIRE"
            </div>
          </div>
        </div>

      </div>

      {/* Interactive Skills Matrix Section */}
      <div className="space-y-6">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-2">
            <Code2 size={14} />
            <span>Interactive Skills Matrix</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100">
            Technical Stack Breakdown
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
            Click on any technology card to view detailed capabilities and architectural usage.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Grid: Clickable Skill Cards */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Backend Category */}
            <div className="space-y-3">
              <h3 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                <Server size={14} className="text-emerald-500" />
                <span>Backend Frameworks & Languages</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {backendSkills.map(skill => (
                  <button
                    key={skill.id}
                    onClick={() => setSelectedSkill(skill)}
                    className={`p-4 rounded-xl border text-left transition-all ${
                      selectedSkill.id === skill.id
                        ? 'bg-emerald-500/10 border-emerald-500 shadow-sm'
                        : 'bg-white dark:bg-slate-900/60 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-sm text-slate-900 dark:text-slate-100">
                        {skill.name}
                      </span>
                      <span className="font-mono text-xs text-emerald-600 dark:text-emerald-400">
                        {skill.level}%
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-1">
                      {skill.tagline}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* Databases & Caching */}
            <div className="space-y-3">
              <h3 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                <Database size={14} className="text-cyan-500" />
                <span>Databases & Low-Latency Caching</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {dbSkills.map(skill => (
                  <button
                    key={skill.id}
                    onClick={() => setSelectedSkill(skill)}
                    className={`p-4 rounded-xl border text-left transition-all ${
                      selectedSkill.id === skill.id
                        ? 'bg-cyan-500/10 border-cyan-500 shadow-sm'
                        : 'bg-white dark:bg-slate-900/60 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-sm text-slate-900 dark:text-slate-100">
                        {skill.name}
                      </span>
                      <span className="font-mono text-xs text-cyan-600 dark:text-cyan-400">
                        {skill.level}%
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-1">
                      {skill.tagline}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* Frontend & DevOps */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Frontend */}
              <div className="space-y-3">
                <h3 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                  <Code2 size={14} className="text-indigo-500" />
                  <span>Frontend Engineering</span>
                </h3>
                {frontendSkills.map(skill => (
                  <button
                    key={skill.id}
                    onClick={() => setSelectedSkill(skill)}
                    className={`w-full p-4 rounded-xl border text-left transition-all ${
                      selectedSkill.id === skill.id
                        ? 'bg-indigo-500/10 border-indigo-500 shadow-sm'
                        : 'bg-white dark:bg-slate-900/60 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-sm text-slate-900 dark:text-slate-100">
                        {skill.name}
                      </span>
                      <span className="font-mono text-xs text-indigo-600 dark:text-indigo-400">
                        {skill.level}%
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                      {skill.tagline}
                    </p>
                  </button>
                ))}
              </div>

              {/* DevOps & Tooling */}
              <div className="space-y-3">
                <h3 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                  <Container size={14} className="text-amber-500" />
                  <span>DevOps & API Testing</span>
                </h3>
                <div className="space-y-3">
                  {devopsSkills.map(skill => (
                    <button
                      key={skill.id}
                      onClick={() => setSelectedSkill(skill)}
                      className={`w-full p-4 rounded-xl border text-left transition-all ${
                        selectedSkill.id === skill.id
                          ? 'bg-amber-500/10 border-amber-500 shadow-sm'
                          : 'bg-white dark:bg-slate-900/60 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-sm text-slate-900 dark:text-slate-100">
                          {skill.name}
                        </span>
                        <span className="font-mono text-xs text-amber-600 dark:text-amber-400">
                          {skill.level}%
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                        {skill.tagline}
                      </p>
                    </button>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Selected Skill Details Panel */}
          <div className="lg:col-span-4 sticky top-24">
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-lg space-y-5">
              
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 font-medium">
                    {selectedSkill.highlight}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mt-2">
                    {selectedSkill.name}
                  </h3>
                </div>
                <div className="text-right">
                  <div className="font-mono text-xl font-bold text-emerald-600 dark:text-emerald-400">
                    {selectedSkill.level}%
                  </div>
                  <div className="text-[10px] font-mono text-slate-500">
                    {selectedSkill.experience}
                  </div>
                </div>
              </div>

              {/* Progress bar */}
              <div className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full transition-all duration-300"
                  style={{ width: `${selectedSkill.level}%` }}
                />
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                <p>{selectedSkill.description}</p>
              </div>

              <div className="space-y-2 pt-3 border-t border-slate-200 dark:border-slate-800">
                <div className="text-xs font-mono font-semibold text-slate-900 dark:text-slate-200">
                  Key Competencies:
                </div>
                <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-400">
                  {selectedSkill.features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => setActivePage('projects')}
                  className="w-full py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-emerald-500 hover:text-white dark:hover:bg-emerald-500 text-slate-800 dark:text-slate-200 font-mono text-xs font-semibold transition-all flex items-center justify-center gap-1.5"
                >
                  <span>View Projects using {selectedSkill.name}</span>
                  <ArrowRight size={13} />
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* 4-Stage Engineering Workflow */}
      <div className="space-y-8">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-2">
            <Workflow size={14} />
            <span>Architecture Lifecycle</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100">
            How I Architect & Ship Systems
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
            A battle-tested methodology from API contract to Dockerized deployment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {workflowSteps.map((step) => (
            <div
              key={step.num}
              className="p-6 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-3 relative overflow-hidden"
            >
              <div className="text-3xl font-extrabold font-mono text-emerald-600/30 dark:text-emerald-400/20">
                {step.num}
              </div>
              <div className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-semibold">
                {step.tool}
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
                {step.title}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Experience & Career Timeline */}
      <div className="space-y-8">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-2">
            <Sparkles size={14} />
            <span>Career Milestones</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100">
            Experience & Engineering Journey
          </h2>
        </div>

        <div className="space-y-6">
          {experienceTimeline.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 flex flex-col md:flex-row md:items-start justify-between gap-4"
            >
              <div className="space-y-2 max-w-2xl">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                    {item.title}
                  </h3>
                  <span className="text-xs text-slate-500 dark:text-slate-400">
                    @ {item.company}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {item.skills.map(s => (
                    <span
                      key={s}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="font-mono text-xs font-semibold px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 shrink-0 self-start">
                {item.period}
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
