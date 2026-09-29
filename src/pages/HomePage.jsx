import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { ArrowUpRight, Mail, Copy, Check, Clock, Sun, Moon, FileText, Layers } from 'lucide-react';
import { personalInfo, projectsData } from '../data/portfolioData';
import GithubIcon from '../components/GithubIcon';
import ArchitectureModal from '../components/ArchitectureModal';

export default function HomePage({ setActivePage }) {
  const { theme, toggleTheme } = useTheme();
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const [localTime, setLocalTime] = useState('');
  const [inspectedProject, setInspectedProject] = useState(null);
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });

  // Mouse spotlight coordinates
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
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

  // Scrollspy to detect active section in the right column
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 250;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

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
      category: "DevOps & Tooling",
      skills: ["Docker", "Docker Compose", "Postman", "Git"]
    }
  ];

  const navItems = [
    { id: 'about', label: 'ABOUT', num: '01' },
    { id: 'skills', label: 'SKILLS', num: '02' },
    { id: 'projects', label: 'PROJECTS', num: '03' },
    { id: 'contact', label: 'CONTACT', num: '04' }
  ];

  return (
    <div className="relative min-h-screen">
      
      {/* Subtle Mouse Ambient Spotlight (Follows cursor smoothly) */}
      <div 
        className="pointer-events-none fixed inset-0 z-30 transition duration-300 hidden lg:block"
        style={{
          background: `radial-gradient(600px at ${mousePos.x}px ${mousePos.y}px, ${
            theme === 'dark' ? 'rgba(56, 189, 248, 0.05)' : 'rgba(99, 102, 241, 0.04)'
          }, transparent 80%)`
        }}
      />

      {/* Main Split-Screen Container */}
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="lg:flex lg:justify-between lg:gap-12 xl:gap-20">
          
          {/* ================================================================= */}
          {/* LEFT COLUMN: FIXED DOCK (IDENTITY, SCROLLSPY NAV & SOCIAL ACTIONS) */}
          {/* ================================================================= */}
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24 pt-24 pb-12">
            
            {/* Top Identity Block */}
            <div className="space-y-4">
              <div className="space-y-2">
                <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
                  {personalInfo.name}
                </h1>
                <h2 className="text-lg sm:text-xl font-medium text-zinc-700 dark:text-zinc-300">
                  {personalInfo.role}
                </h2>
              </div>

              <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-sm leading-relaxed">
                I build resilient backend architectures, high-throughput APIs, and reactive web applications with Python, Django, Laravel, React, Redis, and PostgreSQL.
              </p>

              {/* Status Pill */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 dark:bg-emerald-500/15 border border-emerald-500/20 text-xs font-mono text-emerald-700 dark:text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse-subtle" />
                <span>Available for full-time engineering roles</span>
              </div>
            </div>

            {/* Middle: Interactive Scrollspy Navigation (Desktop only) */}
            <nav className="hidden lg:block my-8">
              <ul className="space-y-4">
                {navItems.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <li key={item.id}>
                      <button
                        onClick={() => scrollToSection(item.id)}
                        className="group flex items-center py-1 text-left focus:outline-none"
                      >
                        {/* Animated extending indicator line */}
                        <span
                          className={`mr-4 h-[2px] transition-all duration-300 ${
                            isActive
                              ? 'w-16 bg-zinc-900 dark:bg-zinc-100'
                              : 'w-8 bg-zinc-300 dark:bg-zinc-700 group-hover:w-12 group-hover:bg-zinc-600 dark:group-hover:bg-zinc-400'
                          }`}
                        />
                        <span
                          className={`text-xs font-mono tracking-widest uppercase transition-colors ${
                            isActive
                              ? 'text-zinc-900 dark:text-zinc-100 font-semibold'
                              : 'text-zinc-400 dark:text-zinc-500 group-hover:text-zinc-800 dark:group-hover:text-zinc-200'
                          }`}
                        >
                          {item.num} // {item.label}
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* Bottom: Action Coordinates & Theme Toggle */}
            <div className="pt-6 border-t border-zinc-200/80 dark:border-zinc-800/80 space-y-4">
              {/* Social and quick links */}
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800/60 transition-colors"
                  title="GitHub Profile"
                >
                  <GithubIcon size={16} />
                </a>

                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-zinc-200 dark:border-zinc-800 text-xs font-mono text-zinc-600 dark:text-zinc-400">
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                  >
                    {personalInfo.email}
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className="p-0.5 text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 transition-colors ml-1"
                    title="Copy email address"
                  >
                    {copiedEmail ? <Check size={13} className="text-emerald-500" /> : <Copy size={13} />}
                  </button>
                </div>

                <a
                  href="./Kiruthickraj_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-zinc-900 dark:bg-zinc-100 text-zinc-50 dark:text-zinc-900 text-xs font-medium hover:opacity-90 transition-opacity"
                  title="Download Resume (PDF)"
                >
                  <FileText size={13} />
                  <span>Resume</span>
                  <ArrowUpRight size={11} />
                </a>

                {/* Theme Toggle Button */}
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-lg border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800/60 transition-colors"
                  aria-label="Toggle Theme"
                  title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                >
                  {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
                </button>
              </div>

              {/* Live Location & Local Clock */}
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 dark:text-zinc-500">
                <Clock size={12} />
                <span>IST {localTime || '12:50 PM'}</span>
                <span>&middot;</span>
                <span>CHENNAI, INDIA</span>
              </div>
            </div>

          </header>

          {/* ================================================================= */}
          {/* RIGHT COLUMN: SCROLLABLE CONTENT STREAM (ABOUT, SKILLS, PROJECTS) */}
          {/* ================================================================= */}
          <main className="lg:w-1/2 lg:py-24 pb-20 space-y-24 sm:space-y-32">
            
            {/* ------------------------------------------------------------- */}
            {/* 1. SECTION: ABOUT                                             */}
            {/* ------------------------------------------------------------- */}
            <section id="about" className="scroll-mt-24 space-y-4">
              <div className="lg:hidden text-xs font-mono uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-2">
                01 // ABOUT
              </div>

              <div className="space-y-4 text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed font-light">
                <p>
                  I am a Full-Stack Engineer who specializes in the core engines of software systems. My work focuses on building resilient RESTful backend services in <strong className="font-medium text-zinc-900 dark:text-zinc-100">Python (Django & DRF)</strong> and <strong className="font-medium text-zinc-900 dark:text-zinc-100">PHP (Laravel)</strong>, coupled with responsive single-page web applications built with <strong className="font-medium text-zinc-900 dark:text-zinc-100">ReactJS</strong>.
                </p>
                <p>
                  Behind the APIs, I design normalized, performant database architectures in <strong className="font-medium text-zinc-900 dark:text-zinc-100">PostgreSQL</strong> and <strong className="font-medium text-zinc-900 dark:text-zinc-100">MySQL</strong>, and integrate <strong className="font-medium text-zinc-900 dark:text-zinc-100">Redis</strong> as an in-memory caching and rate-limiting layer to ensure sub-20ms response times under high concurrency.
                </p>
                <p>
                  I treat reproducible containerization with <strong className="font-medium text-zinc-900 dark:text-zinc-100">Docker</strong> and contract-driven API test collections with <strong className="font-medium text-zinc-900 dark:text-zinc-100">Postman</strong> as foundational habits, ensuring seamless local development and stable production deployments.
                </p>
              </div>
            </section>

            {/* ------------------------------------------------------------- */}
            {/* 2. SECTION: SKILLS & TECHNOLOGIES (TRADITIONAL - NAMES ONLY)  */}
            {/* ------------------------------------------------------------- */}
            <section id="skills" className="scroll-mt-24 space-y-6">
              <div className="flex items-baseline justify-between border-b border-zinc-200/80 dark:border-zinc-800/80 pb-3">
                <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
                  02 // SKILLS & TECHNOLOGIES
                </h2>
                <span className="text-[11px] font-mono text-zinc-400 hidden sm:inline">
                  TRADITIONAL CATEGORIES
                </span>
              </div>

              {/* Categorized Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {traditionalSkills.map((group) => (
                  <div
                    key={group.category}
                    className="p-5 rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white/70 dark:bg-zinc-900/30 space-y-3"
                  >
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 border-b border-zinc-100 dark:border-zinc-800/60 pb-2">
                      {group.category}
                    </h3>

                    {/* Skill Badges with names only */}
                    <div className="flex flex-wrap gap-1.5">
                      {group.skills.map((skillName) => (
                        <span
                          key={skillName}
                          className="px-2.5 py-1 rounded-md text-xs font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 border border-zinc-200/80 dark:border-zinc-700/80 hover:border-zinc-400 dark:hover:border-zinc-500 transition-colors"
                        >
                          {skillName}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ------------------------------------------------------------- */}
            {/* 3. SECTION: PROJECTS                                          */}
            {/* ------------------------------------------------------------- */}
            <section id="projects" className="scroll-mt-24 space-y-6">
              <div className="flex items-baseline justify-between border-b border-zinc-200/80 dark:border-zinc-800/80 pb-3">
                <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
                  03 // SELECTED WORK
                </h2>
                <span className="text-[11px] font-mono text-zinc-400 hidden sm:inline">
                  PRODUCTION ARCHITECTURES
                </span>
              </div>

              <div className="space-y-4">
                {projectsData.map((project) => (
                  <div
                    key={project.id}
                    className="group relative p-5 sm:p-6 rounded-2xl border border-zinc-200/60 dark:border-zinc-800/60 hover:border-zinc-300 dark:hover:border-zinc-700 hover:bg-zinc-100/50 dark:hover:bg-zinc-900/40 transition-all duration-200 space-y-3"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                      <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100 inline-flex items-center gap-1.5 group-hover:text-zinc-950 dark:group-hover:text-white transition-colors">
                        <span>{project.title}</span>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                          title="View on GitHub"
                        >
                          <ArrowUpRight size={15} />
                        </a>
                      </h3>
                      <span className="text-[11px] font-mono text-zinc-400">
                        {project.category}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-light">
                      {project.description}
                    </p>

                    {/* Metrics Chips */}
                    {project.metrics && (
                      <div className="flex flex-wrap gap-2 text-[11px] font-mono">
                        {Object.entries(project.metrics).map(([k, v]) => (
                          <span
                            key={k}
                            className="px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800/70 text-zinc-600 dark:text-zinc-400 border border-zinc-200/60 dark:border-zinc-700/60"
                          >
                            {k}: <strong className="font-semibold text-zinc-800 dark:text-zinc-200">{v}</strong>
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Tech Badges & Blueprint trigger */}
                    <div className="flex flex-wrap items-center justify-between gap-2 pt-1 border-t border-zinc-100 dark:border-zinc-800/40">
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

                      <button
                        onClick={() => setInspectedProject(project)}
                        className="text-xs font-mono text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-200 flex items-center gap-1 transition-colors"
                      >
                        <Layers size={12} />
                        <span>Blueprint</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ------------------------------------------------------------- */}
            {/* 4. SECTION: CONTACT (DIRECT COORDINATES ONLY - NO FORMS)     */}
            {/* ------------------------------------------------------------- */}
            <section id="contact" className="scroll-mt-24 space-y-6">
              <div className="border-b border-zinc-200/80 dark:border-zinc-800/80 pb-3">
                <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
                  04 // GET IN TOUCH
                </h2>
              </div>

              <div className="space-y-3">
                <h3 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
                  Let's discuss architecture or engineering opportunities.
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-light">
                  Whether you are hiring for a full-time engineering role, looking to scale an existing Django or Laravel backend, or need a clean React interface, feel free to reach out directly.
                </p>
              </div>

              <div className="p-5 rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white/70 dark:bg-zinc-900/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                    Direct Email
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-sm sm:text-base font-medium text-zinc-900 dark:text-zinc-100 hover:underline"
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
                </div>

                <a
                  href={`mailto:${personalInfo.email}`}
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg bg-zinc-900 dark:bg-zinc-100 text-zinc-50 dark:text-zinc-900 text-xs font-medium hover:opacity-90 transition-opacity self-start sm:self-auto"
                >
                  <Mail size={13} />
                  <span>Send Email</span>
                  <ArrowUpRight size={11} />
                </a>
              </div>
            </section>

            {/* Minimal Colophon */}
            <footer className="pt-8 border-t border-zinc-200/60 dark:border-zinc-800/60 text-xs font-mono text-zinc-400 dark:text-zinc-500 leading-relaxed">
              <p>
                Crafted with React, Tailwind CSS & Vite. Designed with minimalism and precision.
              </p>
              <p className="mt-1">
                &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
              </p>
            </footer>

          </main>

        </div>
      </div>

      {/* Architecture Blueprint Modal for inspected projects */}
      <ArchitectureModal
        project={inspectedProject}
        isOpen={Boolean(inspectedProject)}
        onClose={() => setInspectedProject(null)}
      />

    </div>
  );
}
