import React, { useState, useEffect } from 'react';
import { ArrowDown, ArrowUpRight, ArrowUp, Mail, Copy, Check, Clock } from 'lucide-react';
import { personalInfo, projectsData } from '../data/portfolioData';
import GithubIcon from '../components/GithubIcon';
import TechArchitectureVisualizer from '../components/TechArchitectureVisualizer';

export default function HomePage({ setActivePage }) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [localTime, setLocalTime] = useState('');
  const [scrollY, setScrollY] = useState(0);

  const featuredProjects = projectsData.filter(p => p.featured);

  // Parallax scroll tracking with passive listener & RAF
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Live Asia/Kolkata Clock
  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const timeStr = now.toLocaleTimeString('en-US', {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
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

  const scrollToContent = () => {
    const contentEl = document.getElementById('full-website-content');
    if (contentEl) {
      contentEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Traditional categorized skills (clean names only as requested)
  const traditionalSkills = [
    {
      category: "Backend Development",
      skills: ["Python", "Django", "Django REST Framework", "PHP", "Laravel"]
    },
    {
      category: "Databases & Caching",
      skills: ["PostgreSQL", "MySQL", "Redis"]
    },
    {
      category: "Frontend Engineering",
      skills: ["ReactJS", "JavaScript (ES6+)", "Tailwind CSS"]
    },
    {
      category: "DevOps & API Tooling",
      skills: ["Docker", "Docker Compose", "Postman", "Git"]
    }
  ];

  // Parallax calculations for the fullscreen hero
  const viewportHeight = typeof window !== 'undefined' ? window.innerHeight : 800;
  const progress = Math.min(1, Math.max(0, scrollY / (viewportHeight * 0.75)));
  const heroScale = 1 - progress * 0.05;
  const heroOpacity = Math.max(0, 1 - progress * 1.35);
  // Lift the hero up like a cinema curtain as user scrolls up/down
  const heroTranslateY = progress * 110;

  return (
    <div className="relative w-full">
      
      {/* ========================================================================= */}
      {/* 1. FULLSCREEN HERO STAGE (100dvh STICKY STARTER - MINIMAL & TECH ANIMATED)*/}
      {/* ========================================================================= */}
      <div className="sticky top-0 h-[100dvh] w-full flex flex-col justify-between overflow-hidden z-10 px-4 sm:px-6 pt-24 pb-6 sm:pb-8 pointer-events-auto">
        <div 
          className="max-w-3xl mx-auto w-full h-full flex flex-col justify-between transition-transform duration-75 ease-out will-change-transform"
          style={{
            transform: `translateY(-${heroTranslateY}px) scale(${heroScale})`,
            opacity: heroOpacity,
            pointerEvents: progress > 0.85 ? 'none' : 'auto'
          }}
        >
          {/* Top Specification Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono border-b border-zinc-200/80 dark:border-zinc-800/80 pb-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse-subtle" />
              <span className="font-semibold text-zinc-900 dark:text-zinc-100">
                KIRUTHICKRAJ
              </span>
              <span className="text-zinc-400 dark:text-zinc-600">/</span>
              <span className="text-zinc-500 dark:text-zinc-400">
                FULL-STACK DEVELOPER
              </span>
            </div>

            <div className="flex items-center gap-3 text-zinc-400 dark:text-zinc-500 text-[11px]">
              <span className="flex items-center gap-1">
                <Clock size={11} />
                <span>IST {localTime || '11:30 AM'}</span>
              </span>
              <span>·</span>
              <span>CHENNAI, INDIA</span>
            </div>
          </div>

          {/* Centerpiece: Minimal Typography + Tech Architecture Visualizer */}
          <div className="space-y-4 my-auto py-1">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200/70 dark:border-zinc-700/60 text-[11px] font-mono text-zinc-600 dark:text-zinc-300">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span>Available for high-impact software roles</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 leading-[1.1]">
                Engineering resilient backends & modern web systems.
              </h1>
              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 max-w-xl font-normal leading-relaxed">
                Full-Stack Developer focused on <strong className="font-medium text-zinc-900 dark:text-zinc-100">Python (Django/DRF)</strong>, <strong className="font-medium text-zinc-900 dark:text-zinc-100">PHP (Laravel)</strong>, and <strong className="font-medium text-zinc-900 dark:text-zinc-100">ReactJS</strong> with <strong className="font-medium text-zinc-900 dark:text-zinc-100">Redis</strong> and <strong className="font-medium text-zinc-900 dark:text-zinc-100">PostgreSQL</strong>.
              </p>
            </div>

            {/* Platform-Inspired Tech Animation (Architecture Pipeline) */}
            <TechArchitectureVisualizer />

            {/* Quick Action Anchors */}
            <div className="flex flex-wrap items-center gap-3 pt-0.5">
              <button
                onClick={scrollToContent}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-zinc-900 dark:bg-zinc-100 text-zinc-100 dark:text-zinc-900 text-xs font-medium hover:opacity-90 transition-opacity"
              >
                <span>Explore Work</span>
                <ArrowDown size={13} />
              </button>

              <a
                href="./Kiruthickraj_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 text-xs font-medium hover:bg-zinc-100 dark:hover:bg-zinc-800/60 transition-colors"
              >
                <span>Resume (PDF)</span>
                <ArrowUpRight size={13} />
              </a>

              <div className="flex items-center gap-1.5 pl-1 text-xs">
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

          {/* Bottom Interactive Scroll Cue */}
          <div 
            onClick={scrollToContent}
            className="flex items-center justify-between text-[11px] font-mono text-zinc-400 dark:text-zinc-500 pt-3 cursor-pointer hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors border-t border-zinc-100 dark:border-zinc-800/60"
          >
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse-subtle" />
              <span>KIRUTHICKRAJ004.GITHUB.IO</span>
            </div>

            <div className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400 font-medium group">
              <span className="group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition-colors">
                Scroll to reveal full website
              </span>
              <div className="w-5 h-7 rounded-full border border-zinc-300 dark:border-zinc-700 flex items-start justify-center p-1">
                <div className="w-1 h-2 rounded-full bg-zinc-600 dark:bg-zinc-400 animate-scroll-cue" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. THE FULL WEBSITE BODY (SLIDING CURTAIN - GLIDES SMOOTHLY OVER HERO)    */}
      {/* ========================================================================= */}
      <div 
        id="full-website-content"
        className="relative z-30 bg-[#fafafa] dark:bg-[#09090b] rounded-t-[36px] sm:rounded-t-[48px] border-t border-zinc-200/90 dark:border-zinc-800/90 shadow-[0_-25px_60px_-15px_rgba(0,0,0,0.12)] dark:shadow-[0_-30px_70px_-15px_rgba(0,0,0,0.7)] pt-16 sm:pt-20 pb-24 transition-colors"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-16 sm:space-y-20">
          
          {/* Section A: Traditional Categorized Skills (Names Only) */}
          <section className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
              <div>
                <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
                  Skills & Technologies
                </h2>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">
                  Core programming languages, frameworks, and infrastructure tools.
                </p>
              </div>
              <span className="text-xs font-mono text-zinc-400 hidden sm:inline">
                Full-Stack Architecture
              </span>
            </div>

            {/* Traditional Categorized Card Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {traditionalSkills.map((group) => (
                <div
                  key={group.category}
                  className="p-5 rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white/70 dark:bg-zinc-900/40 space-y-3"
                >
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 border-b border-zinc-100 dark:border-zinc-800/60 pb-2">
                    {group.category}
                  </h3>

                  {/* Clean badges with names only */}
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skillName) => (
                      <span
                        key={skillName}
                        className="px-3 py-1.5 rounded-lg text-xs font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 border border-zinc-200/80 dark:border-zinc-700/80 hover:border-zinc-400 dark:hover:border-zinc-500 transition-colors"
                      >
                        {skillName}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section B: Selected Projects */}
          <section className="space-y-6 pt-6 border-t border-zinc-200/80 dark:border-zinc-800/80">
            <div className="flex items-baseline justify-between">
              <div>
                <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
                  Selected Work
                </h2>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">
                  Production architectures and full-stack systems.
                </p>
              </div>

              <button
                onClick={() => { setActivePage('projects'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="text-xs text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
              >
                All Projects &rarr;
              </button>
            </div>

            <div className="space-y-3.5">
              {featuredProjects.map((project) => (
                <div
                  key={project.id}
                  className="p-5 rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white/70 dark:bg-zinc-900/40 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors space-y-2.5"
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

          {/* Section C: Direct Contact Coordinates (No Form) */}
          <section className="pt-6 border-t border-zinc-200/80 dark:border-zinc-800/80 space-y-4">
            <div>
              <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
                Contact
              </h2>
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mt-1">
                Let's connect.
              </h3>
              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mt-0.5">
                Available for full-time engineering roles, backend microservice contracts, and technical architecture consulting.
              </p>
            </div>

            <div className="p-5 rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white/70 dark:bg-zinc-900/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
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
      </div>

      {/* Floating Back to Top Button when deep in content */}
      {scrollY > 500 && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 z-40 p-2.5 rounded-full bg-white/90 dark:bg-zinc-900/90 border border-zinc-200/90 dark:border-zinc-800/90 text-zinc-600 dark:text-zinc-300 shadow-md hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all text-xs font-medium flex items-center gap-1.5 backdrop-blur-md"
          title="Return to Hero Starter"
        >
          <ArrowUp size={14} />
          <span className="hidden sm:inline">Top</span>
        </button>
      )}

    </div>
  );
}
