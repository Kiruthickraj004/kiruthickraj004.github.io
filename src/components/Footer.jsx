import React from 'react';
import { Mail } from 'lucide-react';
import GithubIcon from './GithubIcon';
import LinkedinIcon from './LinkedinIcon';
import { personalInfo } from '../data/portfolioData';

export default function Footer({ setActivePage }) {
  return (
    <footer className="w-full border-t border-zinc-200 dark:border-zinc-800/80 bg-transparent text-zinc-500 dark:text-zinc-400 py-10 transition-colors">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
        
        <div className="flex items-center gap-3">
          <span className="font-medium text-zinc-800 dark:text-zinc-200">
            {personalInfo.name}
          </span>
          <span className="text-zinc-300 dark:text-zinc-700">·</span>
          <span>Full-Stack Developer</span>
        </div>

        <div className="flex items-center gap-6">
          <button
            onClick={() => { setActivePage('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
          >
            Home
          </button>
          <button
            onClick={() => { setActivePage('about'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
          >
            About
          </button>
          <button
            onClick={() => { setActivePage('projects'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
          >
            Projects
          </button>
          <button
            onClick={() => { setActivePage('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
          >
            Contact
          </button>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors p-1"
            title="LinkedIn"
          >
            <LinkedinIcon size={16} />
          </a>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors p-1"
            title="GitHub"
          >
            <GithubIcon size={16} />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors p-1"
            title="Email"
          >
            <Mail size={16} />
          </a>
        </div>

      </div>
    </footer>
  );
}
