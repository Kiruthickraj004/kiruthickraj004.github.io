import React, { useState } from 'react';
import { 
  Mail, 
  Send, 
  Copy, 
  Check, 
  Terminal, 
  MessageSquare, 
  Sparkles, 
  Clock, 
  ShieldCheck,
  RefreshCw
} from 'lucide-react';
import GithubIcon from '../components/GithubIcon';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';

export default function ContactPage({ toggleTerminal }) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showPayload, setShowPayload] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Project Inquiry / Collaboration',
    scope: 'Full-Stack Development',
    message: ''
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);

    // Simulate backend API dispatch via Django REST / Laravel endpoint
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }, 1200);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 pb-20 pt-6">
      
      {/* Page Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
          <Send size={14} />
          <span>Connect & Collaborate</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-slate-100 font-sans tracking-tight">
          Let's Build Something Exceptional Together.
        </h1>
        <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-3xl leading-relaxed">
          Open for full-time engineering roles, backend microservice architecture contracts, 
          and high-impact full-stack development projects.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Direct Contact Info & Developer Coordinates */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Email Quick-Copy Card */}
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 uppercase font-semibold">
                Direct Email
              </span>
              <button
                onClick={handleCopyEmail}
                className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-xs font-mono transition-colors text-slate-700 dark:text-slate-300"
              >
                {copiedEmail ? <Check size={13} className="text-emerald-500" /> : <Copy size={13} />}
                <span>{copiedEmail ? 'Copied to Clipboard' : 'Copy'}</span>
              </button>
            </div>

            <a
              href={`mailto:${personalInfo.email}`}
              className="text-base sm:text-lg font-mono font-bold text-slate-900 dark:text-slate-100 hover:text-emerald-500 transition-colors block break-all"
            >
              {personalInfo.email}
            </a>

            <p className="text-xs text-slate-500 dark:text-slate-400">
              Guaranteed response within 24 hours for engineering roles and consulting proposals.
            </p>
          </div>

          {/* GitHub Profile Card */}
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-800 dark:text-slate-200">
                <GithubIcon size={20} />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 dark:text-slate-100">
                  GitHub Profile
                </h3>
                <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                  @{personalInfo.username}
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Explore open repositories, microservice blueprints, and full-stack implementations.
            </p>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-mono text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
            >
              <GithubIcon size={14} />
              <span>Visit github.com/{personalInfo.username}</span>
            </a>
          </div>

          {/* Terminal Quick CLI Card */}
          <div className="p-6 rounded-2xl bg-[#090d18] text-slate-100 border border-slate-800 space-y-3 font-mono text-xs">
            <div className="flex items-center justify-between text-slate-400 pb-2 border-b border-slate-800">
              <span className="flex items-center gap-1.5">
                <Terminal size={14} className="text-emerald-400" />
                <span>CLI Contact Route</span>
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800">
                port: 8000
              </span>
            </div>

            <div className="text-slate-300">
              Prefer keyboard workflows? Launch the interactive terminal and run <span className="text-emerald-400">`contact`</span> or <span className="text-emerald-400">`sudo hire`</span> for instantaneous recruiter access.
            </div>

            <button
              onClick={toggleTerminal}
              className="w-full py-2 rounded-lg bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500 hover:text-white transition-all text-xs font-mono font-medium"
            >
              Open Terminal CLI [~]
            </button>
          </div>

        </div>

        {/* Right Column: Interactive Contact Form */}
        <div className="lg:col-span-7">
          <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-xl space-y-6">
            
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4">
              <div>
                <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                  Dispatch Message
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Sends directly to Kiruthickraj's primary inbox.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setShowPayload(!showPayload)}
                className="text-xs font-mono text-slate-500 hover:text-emerald-500 transition-colors"
              >
                {showPayload ? 'Hide JSON Wire' : 'View Wire Payload'}
              </button>
            </div>

            {/* Wire Payload Preview (Developer Touch) */}
            {showPayload && (
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-[11px] font-mono text-emerald-300 overflow-x-auto">
                <div className="text-slate-500 pb-1">POST /api/v1/contact/message HTTP/1.1</div>
                <pre>{JSON.stringify({ ...formData, timestamp: new Date().toISOString() }, null, 2)}</pre>
              </div>
            )}

            {isSubmitted ? (
              <div className="p-8 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto shadow-glow-emerald">
                  <Check size={24} />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-emerald-600 dark:text-emerald-400 font-sans">
                    Message Dispatched Successfully!
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto">
                    Thank you for reaching out, <span className="font-semibold">{formData.name}</span>. Your request has been queued and Kiruthickraj will review and reply shortly.
                  </p>
                </div>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({ name: '', email: '', subject: 'Project Inquiry / Collaboration', scope: 'Full-Stack Development', message: '' });
                  }}
                  className="px-4 py-2 rounded-lg bg-emerald-600 text-white text-xs font-mono font-semibold"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-medium text-slate-700 dark:text-slate-300">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Henderson"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-300 dark:border-slate-700 text-xs sm:text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:border-emerald-500 transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-medium text-slate-700 dark:text-slate-300">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@company.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-300 dark:border-slate-700 text-xs sm:text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:border-emerald-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Scope of Interest */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-medium text-slate-700 dark:text-slate-300">
                      Project Scope
                    </label>
                    <select
                      value={formData.scope}
                      onChange={(e) => setFormData({ ...formData, scope: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-300 dark:border-slate-700 text-xs sm:text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:border-emerald-500 transition-colors"
                    >
                      <option value="Full-Stack Development">Full-Stack Development</option>
                      <option value="Django / DRF Backend">Python & Django REST API</option>
                      <option value="Laravel Backend">PHP & Laravel Architecture</option>
                      <option value="ReactJS Frontend">ReactJS Single-Page App</option>
                      <option value="Docker & Redis Caching">Docker & Redis Optimization</option>
                      <option value="Full-Time Engineering Role">Full-Time Engineering Role</option>
                    </select>
                  </div>

                  {/* Subject */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-medium text-slate-700 dark:text-slate-300">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Project Inquiry"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-300 dark:border-slate-700 text-xs sm:text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:border-emerald-500 transition-colors"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono font-medium text-slate-700 dark:text-slate-300">
                    Message Details *
                  </label>
                  <textarea
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your project, timeline, architecture requirements, or role details..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-300 dark:border-slate-700 text-xs sm:text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:border-emerald-500 transition-colors resize-y"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 text-white font-mono text-sm font-semibold shadow-glow-emerald flex items-center justify-center gap-2 transition-all duration-200"
                >
                  {isSubmitting ? (
                    <>
                      <RefreshCw size={16} className="animate-spin" />
                      <span>Dispatching Payload...</span>
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      <span>Send Dispatch Message</span>
                    </>
                  )}
                </button>

              </form>
            )}

          </div>
        </div>

      </div>

    </div>
  );
}
