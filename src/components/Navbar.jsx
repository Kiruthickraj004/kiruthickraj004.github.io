import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon, FileText } from 'lucide-react';
import GithubIcon from './GithubIcon';
import { personalInfo } from '../data/portfolioData';

export default function Navbar({ activePage, setActivePage }) {
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (pageId) => {
    setActivePage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Floating Island Navigation (Clean, Minimalist Island) */}
      <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-1.5rem)] sm:w-[calc(100%-2rem)] max-w-2xl">
        <div className="backdrop-blur-md bg-white/85 dark:bg-zinc-900/85 border border-zinc-200/80 dark:border-zinc-800/80 rounded-full px-2 sm:px-4 py-1.5 sm:py-2 shadow-sm flex items-center justify-between transition-colors">
          
          {/* Navigation Links */}
          <nav className="flex items-center gap-0.5 sm:gap-1">
            {navItems.map((item) => {
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-xs px-2.5 sm:px-3.5 py-1 rounded-full transition-all ${
                    isActive
                      ? 'bg-zinc-900 text-zinc-50 dark:bg-zinc-100 dark:text-zinc-900 font-medium shadow-xs'
                      : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Right Actions: Resume, Theme, GitHub */}
          <div className="flex items-center gap-1 sm:gap-1.5">
            <a
              href="./Kiruthickraj_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[11px] text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors px-2 py-1 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800"
              title="Download Resume (PDF)"
            >
              <FileText size={12} />
              <span className="hidden sm:inline">Resume</span>
            </a>

            <button
              onClick={toggleTheme}
              className="p-1.5 rounded-full text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
              aria-label="Toggle Theme"
              title={theme === 'dark' ? 'Light mode' : 'Dark mode'}
            >
              {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
            </button>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-full text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
              title="GitHub"
            >
              <GithubIcon size={15} />
            </a>
          </div>

        </div>
      </header>

      {/* Spacer so content does not collide with floating island */}
      <div className="h-16" />
    </>
  );
}
