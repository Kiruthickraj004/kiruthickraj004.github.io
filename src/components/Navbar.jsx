import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { 
  Terminal, 
  Sun, 
  Moon, 
  Menu, 
  X, 
  Code2, 
  Layers, 
  User, 
  FolderGit2, 
  Send,
  FileText
} from 'lucide-react';
import GithubIcon from './GithubIcon';
import { personalInfo } from '../data/portfolioData';

export default function Navbar({ activePage, setActivePage, toggleTerminal, isTerminalOpen }) {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', icon: Code2 },
    { id: 'about', label: 'About', icon: User },
    { id: 'projects', label: 'Projects', icon: FolderGit2 },
    { id: 'contact', label: 'Contact', icon: Send }
  ];

  const handleNavClick = (pageId) => {
    setActivePage(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-white/85 dark:bg-[#070b14]/85 border-b border-slate-200/80 dark:border-slate-800/80 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand / Logo */}
        <button 
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2.5 group text-left focus:outline-none"
        >
          <div className="w-9 h-9 rounded-lg bg-emerald-500/10 dark:bg-emerald-500/20 border border-emerald-500/30 dark:border-emerald-500/40 flex items-center justify-center font-mono font-bold text-emerald-600 dark:text-emerald-400 group-hover:scale-105 transition-transform duration-200 shadow-sm">
            &lt;KR/&gt;
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-slate-900 dark:text-slate-100 tracking-tight font-mono text-sm sm:text-base group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors">
                {personalInfo.name}
              </span>
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" title="System Online & Available" />
            </div>
            <span className="text-[11px] text-slate-500 dark:text-slate-400 font-mono hidden sm:block">
              full-stack.engineer
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-100/80 dark:bg-slate-900/60 p-1.5 rounded-full border border-slate-200/80 dark:border-slate-800/80">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activePage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`flex items-center gap-1.5 px-4 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                  isActive
                    ? 'bg-white dark:bg-slate-800 text-emerald-600 dark:text-emerald-400 shadow-sm font-semibold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-200/50 dark:hover:bg-slate-800/50'
                }`}
              >
                <Icon size={14} className={isActive ? 'text-emerald-500' : 'opacity-70'} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Right Side Actions: Terminal Trigger, Theme Toggle, GitHub */}
        <div className="flex items-center gap-2">
          {/* Resume Download Link */}
          <a
            href="./Kiruthickraj_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/50 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all duration-200"
            title="View & Download Kiruthickraj's Resume"
          >
            <FileText size={14} className="text-emerald-500" />
            <span>Resume</span>
          </a>

          {/* Terminal CLI Button */}
          <button
            onClick={toggleTerminal}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all duration-200 border ${
              isTerminalOpen
                ? 'bg-emerald-500 text-white border-emerald-600 shadow-glow-emerald'
                : 'bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-emerald-500/50 hover:text-emerald-600 dark:hover:text-emerald-400'
            }`}
            title="Open Interactive Developer CLI (Press ~)"
          >
            <Terminal size={14} className={isTerminalOpen ? 'animate-pulse' : ''} />
            <span className="hidden sm:inline">CLI</span>
            <kbd className="hidden lg:inline text-[10px] px-1 py-0.2 bg-black/10 dark:bg-white/10 rounded">
              ~
            </kbd>
          </button>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:text-emerald-500 dark:hover:text-emerald-400 hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-200 focus:outline-none"
            aria-label="Toggle Theme"
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {theme === 'dark' ? (
              <Sun size={17} className="text-amber-400 hover:rotate-90 transition-transform duration-300" />
            ) : (
              <Moon size={17} className="text-indigo-600 hover:-rotate-12 transition-transform duration-300" />
            )}
          </button>

          {/* GitHub Link */}
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:text-emerald-500 dark:hover:text-emerald-400 hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-200"
            title="View GitHub Profile (kiruthickraj004)"
          >
            <GithubIcon size={17} />
          </a>

          {/* Mobile Hamburger Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800"
            aria-label="Open Navigation Menu"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-[#070b14]/95 backdrop-blur-md px-4 pt-2 pb-4 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activePage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-semibold'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                <Icon size={16} className={isActive ? 'text-emerald-500' : 'opacity-70'} />
                <span>{item.label}</span>
              </button>
            );
          })}

          {/* Mobile Resume Link */}
          <a
            href="./Kiruthickraj_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <FileText size={16} className="text-emerald-500" />
            <span>Download Resume (PDF)</span>
          </a>

          <div className="pt-2 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 px-1 font-mono">
            <span>Theme: {theme.toUpperCase()}</span>
            <span className="text-emerald-500">API Gateway: 200 OK</span>
          </div>
        </div>
      )}
    </header>
  );
}
