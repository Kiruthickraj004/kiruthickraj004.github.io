import React, { useState, useEffect } from 'react';
import { ArrowDown, ArrowUpRight, ArrowUp, Mail, Copy, Check } from 'lucide-react';
import { personalInfo, projectsData } from '../data/portfolioData';
import GithubIcon from '../components/GithubIcon';
import ShootingStars from '../components/ShootingStars';

export default function HomePage({ setActivePage }) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isRevealed, setIsRevealed] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isShootingStarsActive, setIsShootingStarsActive] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const featuredProjects = projectsData.filter(p => p.featured);

  // Normal scroll listener for scrollY state (e.g. back to top button)
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Trigger shooting stars & open full site on first scroll up / gesture
  const triggerReveal = () => {
    if (isRevealed || isTransitioning) return;
    setIsShootingStarsActive(true);
    setIsTransitioning(true);

    setTimeout(() => {
      setIsRevealed(true);
      setIsTransitioning(false);
      // Smoothly scroll into the website content
      const contentEl = document.getElementById('full-website-content');
      if (contentEl) {
        contentEl.scrollIntoView({ behavior: 'smooth' });
      }
    }, 700);
  };

  // Wheel, Touch, and Keyboard listeners for the FIRST-TIME scroll up reveal
  useEffect(() => {
    if (isRevealed) return; // Once revealed, normal scroll handles everything

    const handleWheel = (e) => {
      if (e.deltaY > 15 || e.deltaY < -15) {
        triggerReveal();
      }
    };

    let touchStartY = 0;
    const handleTouchStart = (e) => {
      touchStartY = e.touches[0].clientY;
    };
    const handleTouchMove = (e) => {
      const touchEndY = e.touches[0].clientY;
      if (touchStartY - touchEndY > 25 || touchEndY - touchStartY > 25) {
        triggerReveal();
      }
    };

    const handleKeyDown = (e) => {
      if (['ArrowDown', 'ArrowUp', 'Space', 'PageDown'].includes(e.key)) {
        triggerReveal();
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: true });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isRevealed, isTransitioning]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
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

  return (
    <div className="relative w-full">
      
      {/* ========================================================================= */}
      {/* 1. FULLSCREEN HERO STAGE (JUST NAME + DESCRIPTION + SHOOTING STARS)       */}
      {/* ========================================================================= */}
      <div 
        className={`relative w-full overflow-hidden flex flex-col justify-between items-center transition-all duration-700 ease-out ${
          !isRevealed 
            ? 'h-[100dvh] pt-28 pb-10 sm:pb-12' 
            : 'min-h-[75vh] sm:min-h-[85vh] pt-32 pb-16'
        } ${isTransitioning ? 'opacity-0 -translate-y-12 scale-95' : 'opacity-100 translate-y-0 scale-100'}`}
      >
        {/* Shooting Stars Canvas (ambient twinkling + shooting star burst on reveal) */}
        <ShootingStars active={isShootingStarsActive} />

        {/* Minimal Hero Content: ONLY Name & Description */}
        <div className="relative z-20 max-w-2xl mx-auto px-6 text-center my-auto space-y-6">
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 leading-tight">
            Kiruthickraj
          </h1>

          <p className="text-base sm:text-xl lg:text-2xl text-zinc-600 dark:text-zinc-400 font-light leading-relaxed max-w-xl mx-auto">
            Full-Stack Developer specializing in <strong className="font-medium text-zinc-900 dark:text-zinc-100">Python</strong>, <strong className="font-medium text-zinc-900 dark:text-zinc-100">Django</strong>, <strong className="font-medium text-zinc-900 dark:text-zinc-100">Laravel</strong>, <strong className="font-medium text-zinc-900 dark:text-zinc-100">ReactJS</strong>, <strong className="font-medium text-zinc-900 dark:text-zinc-100">Redis</strong>, <strong className="font-medium text-zinc-900 dark:text-zinc-100">PostgreSQL</strong>, and <strong className="font-medium text-zinc-900 dark:text-zinc-100">Docker</strong>. Crafting resilient backend architectures and modern web systems.
          </p>

          {/* Quick Action Trigger if opened */}
          {isRevealed && (
            <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
              <a
                href="./Kiruthickraj_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 text-xs font-medium hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
              >
                <span>Resume (PDF)</span>
                <ArrowUpRight size={13} />
              </a>

              <div className="flex items-center gap-1.5 text-xs">
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
          )}
        </div>

        {/* Minimal Scroll Cue at the bottom */}
        <div 
          onClick={triggerReveal}
          className="relative z-20 flex flex-col items-center gap-2 text-xs font-mono text-zinc-400 dark:text-zinc-500 cursor-pointer hover:text-zinc-800 dark:hover:text-zinc-200 transition-colors"
        >
          <span>{!isRevealed ? 'Scroll up to explore' : 'Explore Website'}</span>
          <div className="w-5 h-8 rounded-full border border-zinc-300 dark:border-zinc-700 flex items-start justify-center p-1">
            <div className="w-1 h-2 rounded-full bg-zinc-500 dark:bg-zinc-400 animate-scroll-cue" />
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. THE FULL WEBSITE (NORMAL SCROLL MODE ONCE REVEALED)                   */}
      {/* ========================================================================= */}
      <div 
        id="full-website-content"
        className={`relative z-30 transition-all duration-700 ${
          !isRevealed 
            ? 'opacity-0 translate-y-16 pointer-events-none' 
            : 'opacity-100 translate-y-0 pointer-events-auto'
        }`}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-12 pb-24 space-y-16 sm:space-y-20 border-t border-zinc-200/80 dark:border-zinc-800/80">
          
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

      {/* Floating Back to Top Button when deep in normal scroll */}
      {isRevealed && scrollY > 500 && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 z-40 p-2.5 rounded-full bg-white/90 dark:bg-zinc-900/90 border border-zinc-200/90 dark:border-zinc-800/90 text-zinc-600 dark:text-zinc-300 shadow-md hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all text-xs font-medium flex items-center gap-1.5 backdrop-blur-md"
          title="Return to top"
        >
          <ArrowUp size={14} />
          <span className="hidden sm:inline">Top</span>
        </button>
      )}

    </div>
  );
}
