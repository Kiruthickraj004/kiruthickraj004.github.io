import React, { useState } from 'react';
import { Mail, Copy, Check, ArrowUpRight, MapPin, FileText } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import GithubIcon from '../components/GithubIcon';
import LinkedinIcon from '../components/LinkedinIcon';

export default function ContactPage() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const contactItems = [
    {
      label: "Direct Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      action: handleCopyEmail,
      actionLabel: copiedEmail ? "Copied" : "Copy",
      isCopy: true,
      icon: Mail
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/kiruthickraj004",
      href: personalInfo.linkedin,
      isExternal: true,
      icon: LinkedinIcon
    },
    {
      label: "GitHub",
      value: `github.com/${personalInfo.username}`,
      href: personalInfo.github,
      isExternal: true,
      icon: GithubIcon
    },
    {
      label: "Resume",
      value: "Kiruthickraj_Resume.pdf",
      href: "./Kiruthickraj_Resume.pdf",
      isExternal: true,
      icon: FileText
    },
    {
      label: "Location",
      value: personalInfo.location,
      icon: MapPin
    }
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-12">
      
      {/* Header */}
      <section className="space-y-3">
        <p className="text-xs font-mono uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
          Hit Me Up
        </p>
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
          Slide into my inbox.
        </h1>
        <p className="text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
          Whether you've got an exciting role, want to build something that hits different, or just want to talk tech — my inbox is always open.
        </p>
      </section>

      {/* Contact Details List */}
      <section className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/30 divide-y divide-zinc-200 dark:divide-zinc-800 overflow-hidden">
        {contactItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-zinc-50 dark:hover:bg-zinc-900/60 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="text-zinc-400 dark:text-zinc-500">
                  <Icon size={18} />
                </div>
                <div>
                  <div className="text-xs font-mono text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">
                    {item.label}
                  </div>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.isExternal ? "_blank" : undefined}
                      rel={item.isExternal ? "noopener noreferrer" : undefined}
                      className="text-sm sm:text-base font-medium text-zinc-900 dark:text-zinc-100 hover:text-orange-600 dark:hover:text-orange-400 hover:underline inline-flex items-center gap-1 mt-0.5 transition-colors"
                    >
                      <span>{item.value}</span>
                      {item.isExternal && <ArrowUpRight size={13} className="text-zinc-400 group-hover:text-orange-500 transition-colors" />}
                    </a>
                  ) : (
                    <div className="text-sm sm:text-base font-medium text-zinc-900 dark:text-zinc-100 mt-0.5">
                      {item.value}
                    </div>
                  )}
                </div>
              </div>

              {item.isCopy && (
                <button
                  onClick={item.action}
                  className="self-start sm:self-center inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 text-xs font-mono text-zinc-700 dark:text-zinc-300 hover:border-orange-500/40 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? <Check size={13} className="text-orange-500" /> : <Copy size={13} />}
                  <span>{item.actionLabel}</span>
                </button>
              )}
            </div>
          );
        })}
      </section>

      {/* Note */}
      <section className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed pt-2">
        <p>
          Preferred communication channel is email. Responses are typically returned within 24 hours.
        </p>
      </section>

    </div>
  );
}
