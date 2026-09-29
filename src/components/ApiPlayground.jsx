import React, { useState } from 'react';
import { Copy, Check, Play, RefreshCw } from 'lucide-react';
import { interactiveEndpoints } from '../data/portfolioData';

export default function ApiPlayground() {
  const [selectedEndpoint, setSelectedEndpoint] = useState(interactiveEndpoints[0]);
  const [isLoading, setIsLoading] = useState(false);
  const [responseOutput, setResponseOutput] = useState(interactiveEndpoints[0].response);
  const [latency, setLatency] = useState(16);
  const [copied, setCopied] = useState(false);

  const handleSelectEndpoint = (endpoint) => {
    setSelectedEndpoint(endpoint);
    triggerRequest(endpoint);
  };

  const triggerRequest = (endpoint = selectedEndpoint) => {
    setIsLoading(true);
    const mockLatency = Math.floor(Math.random() * 20) + 12;
    setTimeout(() => {
      setLatency(mockLatency);
      setResponseOutput(endpoint.response);
      setIsLoading(false);
    }, 200);
  };

  const handleCopyJson = () => {
    navigator.clipboard.writeText(JSON.stringify(responseOutput, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/40 overflow-hidden">
      
      {/* Bar */}
      <div className="p-4 border-b border-zinc-200 dark:border-zinc-800 flex flex-col sm:flex-row sm:items-center gap-3">
        <div className="flex-1 flex items-center gap-2">
          <span className="text-xs font-mono font-medium px-2 py-1 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
            {selectedEndpoint.method}
          </span>
          <select
            value={selectedEndpoint.url}
            onChange={(e) => {
              const found = interactiveEndpoints.find(ep => ep.url === e.target.value);
              if (found) handleSelectEndpoint(found);
            }}
            className="flex-1 bg-transparent border border-zinc-200 dark:border-zinc-700 rounded-md px-3 py-1.5 text-xs font-mono text-zinc-800 dark:text-zinc-200 focus:outline-none focus:border-zinc-400"
          >
            {interactiveEndpoints.map(ep => (
              <option key={ep.url} value={ep.url} className="bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200">
                {ep.url} — {ep.name}
              </option>
            ))}
          </select>
        </div>

        <button
          onClick={() => triggerRequest()}
          disabled={isLoading}
          className="inline-flex items-center justify-center gap-1.5 px-4 py-1.5 rounded-md bg-zinc-900 dark:bg-zinc-100 text-zinc-50 dark:text-zinc-900 font-mono text-xs font-medium hover:opacity-90 disabled:opacity-50 transition-opacity"
        >
          {isLoading ? <RefreshCw size={12} className="animate-spin" /> : <Play size={12} fill="currentColor" />}
          <span>Send</span>
        </button>
      </div>

      {/* Response Status Bar */}
      <div className="px-4 py-2 bg-zinc-50 dark:bg-zinc-900/70 border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between text-xs font-mono text-zinc-500">
        <div className="flex items-center gap-3">
          <span>Status: <strong className="text-zinc-800 dark:text-zinc-200 font-medium">200 OK</strong></span>
          <span>Latency: <strong className="text-zinc-800 dark:text-zinc-200 font-medium">{latency}ms</strong></span>
        </div>

        <button
          onClick={handleCopyJson}
          className="flex items-center gap-1 hover:text-zinc-800 dark:hover:text-zinc-200 transition-colors"
          title="Copy Response"
        >
          {copied ? <Check size={12} className="text-emerald-500" /> : <Copy size={12} />}
          <span>{copied ? 'Copied' : 'Copy JSON'}</span>
        </button>
      </div>

      {/* JSON Output */}
      <div className="p-4 bg-zinc-950 text-zinc-200 font-mono text-xs overflow-x-auto max-h-72">
        <pre>{JSON.stringify(responseOutput, null, 2)}</pre>
      </div>

    </div>
  );
}
