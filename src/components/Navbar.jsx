import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon, ArrowUpRight, Menu, X, FileText } from 'lucide-react';
import GithubIcon from './GithubIcon';
import { personalInfo } from '../data/portfolioData';

export default function Navbar({ activePage, setActivePage }) {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (pageId) => {
    setActivePage(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Floating Island Navigation (Non-traditional, ultra-clean) */}
      <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-2xl">
        <div className="backdrop-blur-md bg-white/85 dark:bg-zinc-900/85 border border-zinc-200/80 dark:border-zinc-800/80 rounded-full px-3.5 sm:px-4 py-2 shadow-sm flex items-center justify-between transition-colors">
          
          {/* Monogram / Brand */}
          <button 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2 text-left focus:outline-none group pr-2"
          >
            <span className="w-6 h-6 rounded-full bg-zinc-900 dark:bg-zinc-100 text-zinc-100 dark:text-zinc-900 flex items-center justify-center font-mono text-[10px] font-bold group-hover:scale-105 transition-transform">
              KR
            </span>
            <span className="font-medium text-zinc-900 dark:text-zinc-100 text-xs sm:text-sm tracking-tight hidden sm:inline">
              {personalInfo.name}
            </span>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-xs px-3 py-1 rounded-full transition-all ${
                    isActive
                      ? 'bg-zinc-900 text-zinc-50 dark:bg-zinc-100 dark:text-zinc-900 font-medium'
                      : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Right Actions: Resume, Theme, GitHub */}
          <div className="flex items-center gap-1.5 sm:gap-2">
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

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>

        </div>

        {/* Mobile Nav Dropdown */}
        {mobileMenuOpen && (
          <div className="mt-2 backdrop-blur-md bg-white/95 dark:bg-zinc-900/95 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-3 shadow-lg space-y-1 md:hidden">
            {navItems.map((item) => {
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full text-left px-3 py-1.5 rounded-lg text-xs ${
                    isActive
                      ? 'bg-zinc-900 text-zinc-50 dark:bg-zinc-100 dark:text-zinc-900 font-medium'
                      : 'text-zinc-600 dark:text-zinc-400'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        )}
      </header>

      {/* Spacer so content does not collide with floating island */}
      <div className="h-16" />
    </>
  );
}
