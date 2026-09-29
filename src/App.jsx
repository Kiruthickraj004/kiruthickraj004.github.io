import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';

function PortfolioApp() {
  const [activePage, setActivePage] = useState(() => {
    const hash = window.location.hash.replace('#', '');
    if (['home', 'about', 'projects', 'contact'].includes(hash)) {
      return hash;
    }
    return 'home';
  });

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

  const [mousePos, setMousePos] = useState({ x: 0, y: 0, active: false });

  const handleMouseMove = (e) => {
    setMousePos({
      x: e.clientX,
      y: e.clientY,
      active: true
    });
  };

  const handleMouseLeave = () => {
    setMousePos((prev) => ({ ...prev, active: false }));
  };

  return (
    <div 
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="min-h-screen flex flex-col bg-[#fafafa] dark:bg-[#09090b] text-zinc-900 dark:text-zinc-100 transition-colors relative selection:bg-orange-500/20 selection:text-orange-600 dark:selection:text-orange-400"
    >
      {/* Global Architectural Grid Pattern across all sections & pages */}
      <div 
        className="fixed inset-0 pointer-events-none bg-[linear-gradient(to_right,#80808010_1px,transparent_1px),linear-gradient(to_bottom,#80808010_1px,transparent_1px)] bg-[size:36px_36px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_40%,#000_50%,transparent_100%)] opacity-70 dark:opacity-40 z-0" 
      />

      {/* Global Interactive Ambient Spotlight (Warm Orange Ember Glow following cursor across all pages & sections) */}
      <div
        className="fixed inset-0 pointer-events-none transition-opacity duration-500 ease-out z-0"
        style={{
          background: mousePos.active
            ? `radial-gradient(650px circle at ${mousePos.x}px ${mousePos.y}px, rgba(249, 115, 22, 0.08), transparent 75%)`
            : `radial-gradient(650px circle at 50% 35%, rgba(249, 115, 22, 0.05), transparent 75%)`
        }}
      />

      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar
          activePage={activePage}
          setActivePage={setActivePage}
        />

        <main className="flex-1">
          {activePage === 'home' && (
            <HomePage
              setActivePage={setActivePage}
            />
          )}

          {activePage === 'about' && (
            <AboutPage
              setActivePage={setActivePage}
            />
          )}

          {activePage === 'projects' && (
            <ProjectsPage
              setActivePage={setActivePage}
            />
          )}

          {activePage === 'contact' && (
            <ContactPage />
          )}
        </main>

        <Footer
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
