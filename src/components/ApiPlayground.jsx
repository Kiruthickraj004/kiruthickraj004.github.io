import React, { useState } from 'react';
import { Play, Copy, Check, Terminal, Server, Clock, Database, Globe, RefreshCw } from 'lucide-react';
import { interactiveEndpoints } from '../data/portfolioData';

export default function ApiPlayground() {
  const [selectedEndpoint, setSelectedEndpoint] = useState(interactiveEndpoints[0]);
  const [isLoading, setIsLoading] = useState(false);
  const [responseOutput, setResponseOutput] = useState(interactiveEndpoints[0].response);
  const [latency, setLatency] = useState(19);
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState('response'); // 'response' | 'headers'

  const handleSelectEndpoint = (endpoint) => {
    setSelectedEndpoint(endpoint);
    triggerRequest(endpoint);
  };

  const triggerRequest = (endpoint = selectedEndpoint) => {
    setIsLoading(true);
    // Simulate real network request to backend / Redis cache layer
    const randomLatency = Math.floor(Math.random() * 25) + 12; // 12ms to 37ms
    setTimeout(() => {
      setLatency(randomLatency);
      setResponseOutput(endpoint.response);
      setIsLoading(false);
    }, randomLatency * 6);
  };

  const handleCopyJson = () => {
    navigator.clipboard.writeText(JSON.stringify(responseOutput, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full rounded-2xl bg-white dark:bg-[#0c1222] border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden transition-all duration-300">
      
      {/* Postman / DRF Playground Top Header */}
      <div className="px-4 py-3 bg-slate-100/90 dark:bg-[#080d19] border-b border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-orange-500/10 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400 font-mono text-xs font-semibold">
            <Globe size={13} />
            <span>POSTMAN & DRF REST EXPLORER</span>
          </div>
          <span className="text-xs text-slate-500 dark:text-slate-400 hidden sm:inline font-mono">
            v1.4.2-live
          </span>
        </div>

        <div className="flex items-center gap-3 text-xs font-mono text-slate-500 dark:text-slate-400">
          <span className="flex items-center gap-1">
            <Database size={13} className="text-emerald-500" />
            <span>Redis Cache: ACTIVE</span>
          </span>
          <span className="hidden sm:inline">|</span>
          <span className="hidden sm:flex items-center gap-1">
            <Server size={13} className="text-cyan-500" />
            <span>DRF / Laravel Engine</span>
          </span>
        </div>
      </div>

      {/* Endpoint Selector & URL Bar */}
      <div className="p-4 bg-slate-50 dark:bg-[#0a0f1d] border-b border-slate-200 dark:border-slate-800">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
          
          {/* Method Badge */}
          <div className={`px-3 py-2 rounded-lg font-mono font-bold text-xs uppercase flex items-center justify-center ${
            selectedEndpoint.method === 'GET'
              ? 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30'
              : 'bg-blue-500/15 text-blue-600 dark:text-blue-400 border border-blue-500/30'
          }`}>
            {selectedEndpoint.method}
          </div>

          {/* Endpoint Dropdown Select */}
          <div className="flex-1 relative">
            <select
              value={selectedEndpoint.url}
              onChange={(e) => {
                const found = interactiveEndpoints.find(ep => ep.url === e.target.value);
                if (found) handleSelectEndpoint(found);
              }}
              className="w-full bg-white dark:bg-[#111827] border border-slate-300 dark:border-slate-700 rounded-lg px-3 py-2 text-xs sm:text-sm font-mono text-slate-800 dark:text-slate-200 focus:outline-none focus:border-emerald-500 transition-colors"
            >
              {interactiveEndpoints.map(ep => (
                <option key={ep.url} value={ep.url}>
                  [{ep.method}] {ep.name} — {ep.url}
                </option>
              ))}
            </select>
          </div>

          {/* Send Request Button */}
          <button
            onClick={() => triggerRequest()}
            disabled={isLoading}
            className="flex items-center justify-center gap-2 px-5 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-600 disabled:opacity-50 text-white font-mono text-xs sm:text-sm font-semibold shadow-glow-emerald transition-all duration-200"
          >
            {isLoading ? (
              <>
                <RefreshCw size={14} className="animate-spin" />
                <span>Dispatching...</span>
              </>
            ) : (
              <>
                <Play size={14} fill="currentColor" />
                <span>Send</span>
              </>
            )}
          </button>
        </div>

        <p className="mt-2 text-xs text-slate-500 dark:text-slate-400 font-sans">
          <span className="font-semibold text-slate-700 dark:text-slate-300">Description:</span> {selectedEndpoint.description}
        </p>
      </div>

      {/* Response Panel Header */}
      <div className="px-4 py-2.5 bg-slate-100/60 dark:bg-[#070b14] border-b border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs font-mono">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500" />
            <span className="font-bold text-emerald-600 dark:text-emerald-400">
              STATUS: {selectedEndpoint.method === 'POST' ? '201 Created' : '200 OK'}
            </span>
          </div>
          <div className="flex items-center gap-1 text-slate-500 dark:text-slate-400">
            <Clock size={12} />
            <span>TIME: {latency}ms</span>
          </div>
          <div className="hidden sm:inline text-slate-500 dark:text-slate-400">
            SIZE: ~1.4 KB
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setActiveTab('response')}
            className={`px-2.5 py-1 rounded text-xs transition-colors ${
              activeTab === 'response' 
                ? 'bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-slate-100 font-semibold' 
                : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
            }`}
          >
            Body (JSON)
          </button>
          <button
            onClick={() => setActiveTab('headers')}
            className={`px-2.5 py-1 rounded text-xs transition-colors ${
              activeTab === 'headers' 
                ? 'bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-slate-100 font-semibold' 
                : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
            }`}
          >
            Headers
          </button>
          <button
            onClick={handleCopyJson}
            className="flex items-center gap-1 px-2.5 py-1 rounded bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors"
            title="Copy Response JSON"
          >
            {copied ? <Check size={12} className="text-emerald-500" /> : <Copy size={12} />}
            <span className="hidden sm:inline">{copied ? 'Copied' : 'Copy'}</span>
          </button>
        </div>
      </div>

      {/* Response Body Area */}
      <div className="p-4 bg-slate-900 text-emerald-300 font-mono text-xs sm:text-sm overflow-x-auto min-h-[220px] max-h-[360px] relative">
        {activeTab === 'response' ? (
          <pre className="text-slate-200 leading-relaxed font-mono">
            {JSON.stringify(responseOutput, null, 2)}
          </pre>
        ) : (
          <div className="space-y-1.5 text-slate-300 text-xs font-mono">
            <div><span className="text-emerald-400 font-semibold">Content-Type:</span> application/json; charset=utf-8</div>
            <div><span className="text-emerald-400 font-semibold">X-Powered-By:</span> Django 5.x / Django REST Framework</div>
            <div><span className="text-emerald-400 font-semibold">X-Cache:</span> HIT (Redis In-Memory Engine)</div>
            <div><span className="text-emerald-400 font-semibold">Access-Control-Allow-Origin:</span> *</div>
            <div><span className="text-emerald-400 font-semibold">RateLimit-Limit:</span> 120/min</div>
            <div><span className="text-emerald-400 font-semibold">RateLimit-Remaining:</span> 118</div>
            <div><span className="text-emerald-400 font-semibold">Docker-Container:</span> backend-api-node-01</div>
          </div>
        )}
      </div>

    </div>
  );
}
