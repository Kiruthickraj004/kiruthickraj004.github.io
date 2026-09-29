import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import InteractiveTerminal from './components/InteractiveTerminal';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';

function PortfolioApp() {
  // Sync page state with window hash for multi-page deep linking
  const [activePage, setActivePage] = useState(() => {
    const hash = window.location.hash.replace('#', '');
    if (['home', 'about', 'projects', 'contact'].includes(hash)) {
      return hash;
    }
    return 'home';
  });

  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  // Sync state to hash and hash to state
  useEffect(() => {
    window.location.hash = activePage;
  }, [activePage]);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (['home', 'about', 'projects', 'contact'].includes(hash)) {
        setActivePage(hash);
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const toggleTerminal = () => {
    setIsTerminalOpen(prev => !prev);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-[#070b14] text-slate-900 dark:text-slate-100 transition-colors duration-300 relative selection:bg-emerald-500/25 selection:text-emerald-500">
      
      {/* Background Cyber Grid Accent */}
      <div className="fixed inset-0 pointer-events-none bg-grid-pattern-light dark:bg-grid-pattern-dark opacity-70 z-0" />

      {/* Main Content Layer */}
      <div className="relative z-10 flex flex-col min-h-screen">
        
        {/* Navigation Bar */}
        <Navbar
          activePage={activePage}
          setActivePage={setActivePage}
          toggleTerminal={toggleTerminal}
          isTerminalOpen={isTerminalOpen}
        />

        {/* Dynamic Multi-Page Router */}
        <main className="flex-1">
          {activePage === 'home' && (
            <HomePage
              setActivePage={setActivePage}
              toggleTerminal={toggleTerminal}
            />
          )}

          {activePage === 'about' && (
            <AboutPage
              setActivePage={setActivePage}
              toggleTerminal={toggleTerminal}
            />
          )}

          {activePage === 'projects' && (
            <ProjectsPage
              toggleTerminal={toggleTerminal}
            />
          )}

          {activePage === 'contact' && (
            <ContactPage
              toggleTerminal={toggleTerminal}
            />
          )}
        </main>

        {/* Global Footer */}
        <Footer
          setActivePage={setActivePage}
          toggleTerminal={toggleTerminal}
        />

        {/* Interactive CLI Terminal Modal Drawer */}
        <InteractiveTerminal
          isOpen={isTerminalOpen}
          onClose={() => setIsTerminalOpen(false)}
          setActivePage={setActivePage}
        />

      </div>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <PortfolioApp />
    </ThemeProvider>
  );
}
