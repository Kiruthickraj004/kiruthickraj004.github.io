import React, { useState, useEffect } from 'react';
import { Layers, Database, Server, Zap, Cpu, Terminal } from 'lucide-react';

export default function TechArchitectureVisualizer() {
  const [activeNode, setActiveNode] = useState(null);
  const [packetTick, setPacketTick] = useState(0);

  // Periodic subtle pulse cycle
  useEffect(() => {
    const timer = setInterval(() => {
      setPacketTick((prev) => (prev + 1) % 4);
    }, 2400);
    return () => clearInterval(timer);
  }, []);

  const nodes = [
    {
      id: 'client',
      label: 'ReactJS',
      role: 'Client SPA',
      metric: 'Interactive UI',
      icon: Layers,
      color: 'text-cyan-500 dark:text-cyan-400',
      borderHover: 'hover:border-cyan-500/50 hover:shadow-cyan-500/10',
      activeBorder: 'border-cyan-500/60 shadow-[0_0_15px_rgba(6,182,212,0.15)]',
      dotColor: 'bg-cyan-500',
      badge: 'FRONTEND'
    },
    {
      id: 'backend',
      label: 'Django & Laravel',
      role: 'Python · PHP Core',
      metric: 'RESTful / JWT',
      icon: Server,
      color: 'text-emerald-500 dark:text-emerald-400',
      borderHover: 'hover:border-emerald-500/50 hover:shadow-emerald-500/10',
      activeBorder: 'border-emerald-500/60 shadow-[0_0_15px_rgba(16,185,129,0.15)]',
      dotColor: 'bg-emerald-500',
      badge: 'API GATEWAY'
    },
    {
      id: 'cache',
      label: 'Redis',
      role: 'In-Memory Cache',
      metric: '< 5ms Latency',
      icon: Zap,
      color: 'text-rose-500 dark:text-rose-400',
      borderHover: 'hover:border-rose-500/50 hover:shadow-rose-500/10',
      activeBorder: 'border-rose-500/60 shadow-[0_0_15px_rgba(244,63,94,0.15)]',
      dotColor: 'bg-rose-500',
      badge: 'MEMORY'
    },
    {
      id: 'database',
      label: 'PostgreSQL & MySQL',
      role: 'Relational Store',
      metric: 'ACID Transactions',
      icon: Database,
      color: 'text-indigo-500 dark:text-indigo-400',
      borderHover: 'hover:border-indigo-500/50 hover:shadow-indigo-500/10',
      activeBorder: 'border-indigo-500/60 shadow-[0_0_15px_rgba(99,102,241,0.15)]',
      dotColor: 'bg-indigo-500',
      badge: 'STORAGE'
    }
  ];

  return (
    <div className="w-full my-auto py-2">
      {/* Container with subtle tech-grid background and ambient glow */}
      <div className="relative rounded-2xl border border-zinc-200/90 dark:border-zinc-800/90 bg-white/70 dark:bg-zinc-900/50 backdrop-blur-md p-4 sm:p-5 overflow-hidden shadow-xs">
        
        {/* Subtle dot matrix blueprint backdrop */}
        <div 
          className="absolute inset-0 opacity-[0.25] dark:opacity-[0.18] pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
            backgroundSize: '16px 16px'
          }}
        />

        {/* Top telemetry bar */}
        <div className="relative flex flex-wrap items-center justify-between gap-2 border-b border-zinc-200/70 dark:border-zinc-800/70 pb-3 mb-4 text-[11px] font-mono">
          <div className="flex items-center gap-2 text-zinc-500 dark:text-zinc-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse-subtle" />
            <span className="font-medium text-zinc-800 dark:text-zinc-200">SYSTEM ARCHITECTURE PIPELINE</span>
            <span className="text-zinc-300 dark:text-zinc-700">|</span>
            <span className="hidden sm:inline">DOCKER CONTAINERIZED</span>
          </div>

          <div className="flex items-center gap-2 text-zinc-400 dark:text-zinc-500 text-[10px]">
            <span>P99 &lt; 20MS</span>
            <span>·</span>
            <span>REST / JSON</span>
            <span>·</span>
            <span className="text-emerald-500">HEALTHY</span>
          </div>
        </div>

        {/* The 4 Architectural Tech Nodes in a Responsive Pipeline Grid */}
        <div className="relative grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-3">
          {nodes.map((node, idx) => {
            const Icon = node.icon;
            const isHovered = activeNode === node.id;
            const isPulsing = packetTick === idx;

            return (
              <div
                key={node.id}
                onMouseEnter={() => setActiveNode(node.id)}
                onMouseLeave={() => setActiveNode(null)}
                className={`relative p-3 sm:p-3.5 rounded-xl border bg-white/90 dark:bg-zinc-950/60 transition-all duration-200 cursor-pointer ${
                  isHovered || isPulsing
                    ? `${node.activeBorder} -translate-y-0.5`
                    : `border-zinc-200/80 dark:border-zinc-800/80 ${node.borderHover}`
                }`}
              >
                {/* Node badge */}
                <div className="flex items-center justify-between gap-1 mb-2">
                  <span className="text-[9px] font-mono font-semibold tracking-wider px-1.5 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400">
                    {node.badge}
                  </span>
                  <span className={`w-1.5 h-1.5 rounded-full ${node.dotColor} ${isPulsing ? 'animate-ping' : ''}`} />
                </div>

                {/* Node title & icon */}
                <div className="flex items-center gap-2 mb-1">
                  <Icon size={14} className={node.color} />
                  <h4 className="text-xs sm:text-sm font-semibold text-zinc-900 dark:text-zinc-100 truncate">
                    {node.label}
                  </h4>
                </div>

                {/* Role and Metric */}
                <div className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400 truncate">
                  {node.role}
                </div>
                <div className="text-[10px] font-mono text-zinc-400 dark:text-zinc-500 mt-1 flex items-center justify-between">
                  <span>{node.metric}</span>
                  <span className="text-zinc-300 dark:text-zinc-700">0{idx + 1}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dynamic Data Stream Bus Visualizer (Connecting SVG Bus) */}
        <div className="relative mt-3 pt-3 border-t border-zinc-100 dark:border-zinc-800/60 flex items-center justify-between text-[11px] font-mono text-zinc-400 dark:text-zinc-500">
          <div className="flex items-center gap-2 overflow-hidden">
            <span className="text-zinc-500 dark:text-zinc-400 flex items-center gap-1">
              <Terminal size={11} />
              <span>DATA FLOW:</span>
            </span>
            <div className="flex items-center gap-1.5 text-zinc-600 dark:text-zinc-300">
              <span>Client</span>
              <span className="text-emerald-500">&rarr;</span>
              <span>API Gateway</span>
              <span className="text-rose-500">&rarr;</span>
              <span>Redis Cache</span>
              <span className="text-indigo-500">&rarr;</span>
              <span>PostgreSQL</span>
            </div>
          </div>

          <div className="hidden sm:flex items-center gap-1.5 text-[10px] text-zinc-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span>LIVE PIPELINE</span>
          </div>
        </div>

      </div>
    </div>
  );
}
