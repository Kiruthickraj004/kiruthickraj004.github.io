import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, X, Maximize2, Minimize2, Trash2, CornerDownLeft, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo, skillsData, projectsData } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

export default function InteractiveTerminal({ isOpen, onClose, setActivePage }) {
  const { theme, setTheme } = useTheme();
  const [inputVal, setInputVal] = useState('');
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [commandHistory, setCommandHistory] = useState([]);
  const [isMaximized, setIsMaximized] = useState(false);
  const [showMatrix, setShowMatrix] = useState(false);

  const [outputLines, setOutputLines] = useState([
    { type: 'system', text: 'Welcome to Kiruthickraj\'s Interactive Terminal [Version 2.4.0]' },
    { type: 'system', text: 'Type "help" to view available developer commands, or "skills" to inspect tech capabilities.' },
    { type: 'tip', text: '💡 Pro-tip: Try running "docker ps" or "sudo hire"!' }
  ]);

  const terminalEndRef = useRef(null);
  const inputRef = useRef(null);

  // Auto-scroll on new output
  useEffect(() => {
    if (isOpen) {
      terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
      inputRef.current?.focus();
    }
  }, [outputLines, isOpen]);

  // Global keyboard shortcut to toggle terminal: ~ (Backquote)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === '`' && !['INPUT', 'TEXTAREA'].includes(e.target.tagName)) {
        e.preventDefault();
        onClose(); // Inverts open state in parent
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const availableCommands = [
    'help', 'about', 'skills', 'projects', 'docker ps', 'curl /api/status', 
    'sudo hire', 'contact', 'theme light', 'theme dark', 'matrix', 'clear', 'date'
  ];

  const handleCommand = (rawCommand) => {
    const cmd = rawCommand.trim();
    if (!cmd) return;

    // Save to command history
    setCommandHistory(prev => [cmd, ...prev]);
    setHistoryIndex(-1);

    const newOutputs = [...outputLines, { type: 'command', text: `$ ${cmd}` }];
    const lowerCmd = cmd.toLowerCase();

    switch (lowerCmd) {
      case 'help':
        newOutputs.push({
          type: 'response',
          text: `AVAILABLE COMMANDS:
  help               - Display this command reference guide
  about              - Print developer bio, philosophy, and experience
  skills             - Inspect categorized skills (Python, Django, PHP, React, etc.)
  projects           - List featured full-stack projects and architectures
  docker ps          - Inspect running microservices & container health
  curl /api/status   - Simulate HTTP GET call to production health check
  sudo hire          - Dispatch instant interview invitation & fireworks
  contact            - Print direct contact coordinates & mailto link
  theme [dark|light] - Dynamically toggle UI theme mode
  matrix             - Toggle cyberpunk matrix code stream
  date               - Output current server & UTC timestamp
  clear              - Wipe terminal screen history`
        });
        break;

      case 'about':
        newOutputs.push({
          type: 'response',
          text: `[PROFILE] ${personalInfo.name} — ${personalInfo.role}
Location: ${personalInfo.location}
Status: ${personalInfo.status}

${personalInfo.bio}

CORE FOCUS:
- Resilient REST APIs with Django REST Framework & Laravel
- Sub-millisecond data caching via Redis & Token Bucket Rate Limiting
- Relational integrity with PostgreSQL & MySQL
- Containerized workflows with Docker & Docker Compose
- Reactive Single-Page Applications with ReactJS`
        });
        break;

      case 'skills':
        const skillsTable = skillsData
          .map(s => `  • ${s.name.padEnd(24)} | ${s.category.padEnd(18)} | ${s.level}% | ${s.tagline}`)
          .join('\n');
        newOutputs.push({
          type: 'response',
          text: `TECH STACK PROFICIENCY MATRIX:\n${skillsTable}`
        });
        break;

      case 'projects':
        const projList = projectsData
          .map(p => `  [#] ${p.title} (${p.category})\n      Stack: ${p.tech.join(', ')}\n      Detail: ${p.tagline}`)
          .join('\n\n');
        newOutputs.push({
          type: 'response',
          text: `FEATURED ARCHITECTURES & PROJECTS:\n\n${projList}\n\nTip: Navigate to the "Projects" tab for interactive architectural diagrams!`
        });
        break;

      case 'docker ps':
        newOutputs.push({
          type: 'response',
          text: `CONTAINER ID   IMAGE                          COMMAND                  CREATED        STATUS              PORTS                    NAMES
a8f93e1b0c22   kiruthick/django-drf:v2.4      "python manage.py run…"   3 hours ago    Up 3 hours (healthy) 0.0.0.0:8000->8000/tcp   backend-api
b7c42d9e1104   kiruthick/react-hub:latest     "docker-entrypoint.s…"   3 hours ago    Up 3 hours (healthy) 0.0.0.0:3000->80/tcp     frontend-ui
c4d1109a778e   redis:7.2-alpine               "docker-entrypoint.s…"   3 hours ago    Up 3 hours (healthy) 0.0.0.0:6379->6379/tcp   redis-cache
e911c47da330   postgres:16-bullseye           "docker-entrypoint.s…"   3 hours ago    Up 3 hours (healthy) 0.0.0.0:5432->5432/tcp   postgres-db`
        });
        break;

      case 'curl /api/status':
        newOutputs.push({
          type: 'response',
          text: `HTTP/2 200 OK
date: ${new Date().toUTCString()}
content-type: application/json; charset=utf-8
x-powered-by: Django/DRF + Redis Cache
latency: 18ms

{
  "system": "kiruthickraj004.github.io",
  "status": "healthy",
  "services": {
    "api_gateway": "ONLINE",
    "redis_cache": "CONNECTED (hit_rate: 94.2%)",
    "database": "POSTGRESQL & MYSQL OK"
  },
  "hireable": true,
  "developer": "${personalInfo.name}"
}`
        });
        break;

      case 'sudo hire':
        confetti({
          particleCount: 120,
          spread: 80,
          origin: { y: 0.6 }
        });
        newOutputs.push({
          type: 'highlight',
          text: `🎉 EXCELLENT DECISION!
Root access granted to recruitment pipeline.
Kiruthickraj is actively looking for high-impact Full-Stack Engineering roles.

Direct Email: ${personalInfo.email}
GitHub:       ${personalInfo.github}

Dispatching message via contact protocol... Click below or visit the Contact page!`
        });
        if (setActivePage) {
          setTimeout(() => setActivePage('contact'), 1800);
        }
        break;

      case 'contact':
        newOutputs.push({
          type: 'response',
          text: `DIRECT COMMUNICATION CHANNELS:
  Email:  ${personalInfo.email}
  GitHub: ${personalInfo.github}
  Status: Open for Full-Time, Remote & Contract roles.`
        });
        break;

      case 'theme dark':
        setTheme('dark');
        newOutputs.push({ type: 'response', text: 'Theme switched to [DARK MODE]. Cyberpunk contrast enabled.' });
        break;

      case 'theme light':
        setTheme('light');
        newOutputs.push({ type: 'response', text: 'Theme switched to [LIGHT MODE]. High-clarity editorial enabled.' });
        break;

      case 'matrix':
        setShowMatrix(prev => !prev);
        newOutputs.push({
          type: 'response',
          text: showMatrix ? 'Matrix rain simulation disabled.' : 'Matrix digital rain simulation ACTIVATED.'
        });
        break;

      case 'clear':
        setOutputLines([]);
        setInputVal('');
        return;

      case 'date':
        newOutputs.push({ type: 'response', text: new Date().toString() });
        break;

      default:
        newOutputs.push({
          type: 'error',
          text: `bash: command not found: "${cmd}". Type "help" to see available commands.`
        });
        break;
    }

    setOutputLines(newOutputs);
    setInputVal('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleCommand(inputVal);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const nextIndex = historyIndex + 1 < commandHistory.length ? historyIndex + 1 : historyIndex;
        setHistoryIndex(nextIndex);
        setInputVal(commandHistory[nextIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const prevIndex = historyIndex - 1;
        setHistoryIndex(prevIndex);
        setInputVal(commandHistory[prevIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInputVal('');
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      if (inputVal.trim()) {
        const match = availableCommands.find(c => c.startsWith(inputVal.trim().toLowerCase()));
        if (match) {
          setInputVal(match);
        }
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-sm transition-all duration-200">
      <div 
        className={`w-full bg-[#0a0f1d] text-slate-100 rounded-xl shadow-2xl border border-slate-700/80 flex flex-col overflow-hidden transition-all duration-300 font-mono text-xs sm:text-sm ${
          isMaximized ? 'h-[92vh] max-w-6xl' : 'h-[580px] max-w-3xl'
        }`}
      >
        {/* Terminal Title Bar */}
        <div className="px-4 py-2.5 bg-[#0f172a] border-b border-slate-800 flex items-center justify-between select-none">
          {/* Unix Dot Controls */}
          <div className="flex items-center gap-2">
            <button 
              onClick={onClose}
              className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-500 transition-colors"
              title="Close Terminal (~)"
            />
            <button 
              onClick={() => setIsMaximized(false)}
              className="w-3 h-3 rounded-full bg-amber-500/80 hover:bg-amber-500 transition-colors"
              title="Minimize"
            />
            <button 
              onClick={() => setIsMaximized(!isMaximized)}
              className="w-3 h-3 rounded-full bg-emerald-500/80 hover:bg-emerald-500 transition-colors"
              title="Maximize"
            />
            <span className="ml-2 text-xs text-slate-400 font-mono hidden sm:inline">
              kiruthick@dev-box: ~ (zsh)
            </span>
          </div>

          {/* Quick Terminal Actions */}
          <div className="flex items-center gap-2 text-slate-400">
            <button
              onClick={() => setOutputLines([])}
              className="p-1 hover:text-slate-200 transition-colors"
              title="Clear terminal (clear)"
            >
              <Trash2 size={13} />
            </button>
            <button
              onClick={() => setIsMaximized(!isMaximized)}
              className="p-1 hover:text-slate-200 transition-colors"
              title={isMaximized ? "Restore window" : "Maximize window"}
            >
              {isMaximized ? <Minimize2 size={13} /> : <Maximize2 size={13} />}
            </button>
            <button
              onClick={onClose}
              className="p-1 hover:text-red-400 transition-colors"
              title="Close window"
            >
              <X size={15} />
            </button>
          </div>
        </div>

        {/* Terminal Body */}
        <div 
          className={`flex-1 p-4 overflow-y-auto space-y-2 relative ${
            showMatrix ? 'bg-[#021206]' : 'bg-[#090d19]'
          }`}
          onClick={() => inputRef.current?.focus()}
        >
          {showMatrix && (
            <div className="absolute inset-0 pointer-events-none opacity-20 font-mono text-[10px] text-emerald-400 overflow-hidden select-none p-2 leading-3">
              01001011 01001001 01010010 01010101 01010100 01001000 01001001 01000011 01001011<br/>
              01010000 01011001 01010100 01001000 01001111 01001110 00100000 01000100 01001111<br/>
              01000011 01001011 01000101 01010010 00100000 01010010 01000101 01000100 01001001<br/>
              01010011 00100000 01000100 01001010 01000001 01001110 01000111 01001111 00100000
            </div>
          )}

          {outputLines.map((line, idx) => {
            if (line.type === 'system') {
              return <div key={idx} className="text-slate-400 font-mono">{line.text}</div>;
            }
            if (line.type === 'tip') {
              return <div key={idx} className="text-emerald-400/90 font-mono">{line.text}</div>;
            }
            if (line.type === 'command') {
              return (
                <div key={idx} className="flex items-center gap-1.5 text-cyan-300 font-semibold pt-1">
                  <span>{line.text}</span>
                </div>
              );
            }
            if (line.type === 'highlight') {
              return (
                <div key={idx} className="p-3 bg-emerald-950/40 border border-emerald-500/40 text-emerald-300 rounded whitespace-pre-wrap">
                  {line.text}
                </div>
              );
            }
            if (line.type === 'error') {
              return <div key={idx} className="text-rose-400 font-mono whitespace-pre-wrap">{line.text}</div>;
            }
            return (
              <div key={idx} className="text-slate-300 font-mono whitespace-pre-wrap leading-relaxed">
                {line.text}
              </div>
            );
          })}

          <div ref={terminalEndRef} />
        </div>

        {/* Terminal Input Bar */}
        <div className="p-3 bg-[#0a0f1d] border-t border-slate-800 flex items-center gap-2">
          <span className="text-emerald-400 font-mono font-bold select-none text-xs sm:text-sm">
            kiruthick@dev:~$
          </span>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type 'help', 'skills', 'docker ps' or 'sudo hire'..."
            className="flex-1 bg-transparent text-slate-100 placeholder-slate-500 focus:outline-none font-mono text-xs sm:text-sm caret-emerald-400"
            autoFocus
          />
          <button
            onClick={() => handleCommand(inputVal)}
            className="p-1 text-slate-400 hover:text-emerald-400 transition-colors"
            title="Execute Command"
          >
            <CornerDownLeft size={14} />
          </button>
        </div>

        {/* Terminal Quick Command Hints */}
        <div className="px-3 py-1.5 bg-[#060913] border-t border-slate-800/80 text-[11px] text-slate-400 flex flex-wrap items-center gap-1 sm:gap-2">
          <span className="text-slate-500 hidden sm:inline">Quick chips:</span>
          {['help', 'skills', 'projects', 'docker ps', 'curl /api/status', 'sudo hire'].map(chip => (
            <button
              key={chip}
              onClick={() => handleCommand(chip)}
              className="px-2 py-0.5 rounded bg-slate-800/70 hover:bg-emerald-900/40 hover:text-emerald-300 text-slate-300 font-mono text-[10px] transition-colors"
            >
              {chip}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
