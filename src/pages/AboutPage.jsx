import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Clock, MapPin, CheckCircle2 } from 'lucide-react';
import { personalInfo, architectureTopology, experienceTimeline } from '../data/portfolioData';

export default function AboutPage({ setActivePage }) {
  const [localTime, setLocalTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Formatter for India Standard Time (IST)
      const istTime = now.toLocaleTimeString('en-US', {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      });
      setLocalTime(istTime);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const principles = [
    {
      num: "01",
      title: "API-First Contract Modeling",
      description: "Defining RESTful routes, status codes, and serialization models with Postman before writing backend logic."
    },
    {
      num: "02",
      title: "Relational Data Integrity",
      description: "Normalized schemas, foreign keys, selective B-Tree indexing, and query tuning in PostgreSQL and MySQL."
    },
    {
      num: "03",
      title: "Low-Latency In-Memory Caching",
      description: "Strategic cache-aside patterns, session stores, and rate-limiting using Redis to protect database throughput."
    },
    {
      num: "04",
      title: "Isolated & Reproducible Stacks",
      description: "Docker multi-stage builds and Docker Compose workflows ensuring identical environments across stages."
    }
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-16 space-y-12">
      
      {/* Header */}
      <section className="space-y-3">
        <p className="text-xs font-mono uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
          Background & Philosophy
        </p>
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
          Engineering scalable web architectures.
        </h1>
      </section>

      {/* Modern Bento Info Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        
        {/* Main Bio Card */}
        <div className="sm:col-span-2 p-5 rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white dark:bg-zinc-900/30 space-y-3">
          <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400">
            About Me
          </span>
          <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
            I am <strong className="font-semibold text-zinc-900 dark:text-zinc-100">{personalInfo.name}</strong>, a Full-Stack Engineer who enjoys solving structural problems behind web platforms — building clean RESTful APIs in Python (Django/DRF) and PHP (Laravel), pairing them with reactive React interfaces, and optimizing database and caching layers.
          </p>
        </div>

        {/* Location & Real-Time Clock Tile */}
        <div className="p-5 rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white dark:bg-zinc-900/30 flex flex-col justify-between space-y-4">
          <div className="space-y-1">
            <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 flex items-center gap-1">
              <MapPin size={11} />
              <span>Location</span>
            </span>
            <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              {personalInfo.location}
            </div>
            <div className="text-xs text-zinc-500">
              Asia/Kolkata (IST)
            </div>
          </div>

          <div className="pt-2 border-t border-zinc-100 dark:border-zinc-800/60">
            <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider flex items-center gap-1">
              <Clock size={11} />
              <span>Local Time</span>
            </div>
            <div className="font-mono text-sm font-semibold text-zinc-900 dark:text-zinc-100 mt-0.5">
              {localTime || '11:00 AM'}
            </div>
          </div>
        </div>

      </section>

      {/* Engineering Principles */}
      <section className="space-y-4 pt-4 border-t border-zinc-200/80 dark:border-zinc-800/80">
        <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
          Core Engineering Principles
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {principles.map((item) => (
            <div
              key={item.num}
              className="p-4 rounded-xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white dark:bg-zinc-900/30 space-y-1.5"
            >
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-zinc-400">
                  {item.num}
                </span>
                <h3 className="text-xs font-semibold text-zinc-900 dark:text-zinc-100">
                  {item.title}
                </h3>
              </div>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Architecture Topology View */}
      <section className="space-y-4 pt-4 border-t border-zinc-200/80 dark:border-zinc-800/80">
        <div className="space-y-1">
          <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
            Full-Stack Architectural Coverage
          </h2>
          <p className="text-xs text-zinc-500 dark:text-zinc-400">
            All 11 core competencies organized by system tier.
          </p>
        </div>

        <div className="space-y-2">
          {architectureTopology.map((layer) => (
            <div
              key={layer.layer}
              className="p-3.5 rounded-xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white dark:bg-zinc-900/30 flex flex-col sm:flex-row sm:items-center justify-between gap-2"
            >
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-zinc-400">
                  {layer.layer}
                </span>
                <div>
                  <div className="text-xs font-semibold text-zinc-900 dark:text-zinc-100">
                    {layer.name}
                  </div>
                  <div className="text-[11px] text-zinc-500 dark:text-zinc-400">
                    {layer.role}
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-1 self-start sm:self-auto">
                {layer.skills.map((skillName) => (
                  <span
                    key={skillName}
                    className="px-2 py-0.5 rounded text-xs font-mono bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300"
                  >
                    {skillName}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience History */}
      <section className="space-y-4 pt-4 border-t border-zinc-200/80 dark:border-zinc-800/80">
        <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
          Career Timeline
        </h2>
        <div className="space-y-3">
          {experienceTimeline.map((item, index) => (
            <div
              key={index}
              className="p-4 rounded-xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white dark:bg-zinc-900/30 space-y-1.5"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                  {item.title} <span className="font-normal text-zinc-500">· {item.company}</span>
                </h3>
                <span className="text-xs font-mono text-zinc-400">
                  {item.period}
                </span>
              </div>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {item.description}
              </p>
              <div className="flex flex-wrap gap-1 pt-1 text-[11px] font-mono text-zinc-500">
                {item.skills.join(' · ')}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Route */}
      <section className="pt-4 border-t border-zinc-200/80 dark:border-zinc-800/80">
        <button
          onClick={() => { setActivePage('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="text-xs font-medium text-zinc-800 dark:text-zinc-200 hover:underline inline-flex items-center gap-1"
        >
          <span>Available for hire — view contact coordinates</span>
          <ArrowUpRight size={13} />
        </button>
      </section>

    </div>
  );
}
