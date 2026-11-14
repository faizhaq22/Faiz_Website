import React, { useState } from 'react';
import { Hash, Check } from 'lucide-react';

export interface HashHeadingProps {
  id: string;
  title: string;
  className?: string;
  size?: 'h2' | 'h3';
}

export const HashHeading: React.FC<HashHeadingProps> = ({
  id,
  title,
  className = "text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white text-balance",
  size = 'h2'
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    e.preventDefault();
    const url = `${window.location.origin}${window.location.pathname}#${id}`;
    navigator.clipboard.writeText(url);
    
    // Update hash in address bar without full reload
    if (window.history.pushState) {
      window.history.pushState(null, '', `#${id}`);
    } else {
      window.location.hash = id;
    }

    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const HeadingTag = size;

  return (
    <div className="group relative inline-flex items-center flex-wrap gap-2.5">
      <HeadingTag className={className}>
        <a
          href={`#${id}`}
          className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors inline-flex items-center gap-2"
        >
          <span>{title}</span>
        </a>
      </HeadingTag>

      <button
        type="button"
        onClick={handleCopy}
        className="inline-flex items-center justify-center p-1.5 rounded-lg text-slate-400 dark:text-slate-500 hover:text-teal-600 dark:hover:text-teal-400 hover:bg-slate-100 dark:hover:bg-slate-800 opacity-0 group-hover:opacity-100 focus:opacity-100 transition-all cursor-pointer"
        title={copied ? 'Deep-link copied to clipboard!' : `Copy link to #${id}`}
        aria-label={`Copy deep-link to #${id}`}
      >
        {copied ? (
          <Check className="w-5 h-5 text-teal-600 dark:text-teal-400" />
        ) : (
          <Hash className="w-5 h-5" />
        )}
      </button>

      {copied && (
        <span className="text-[11px] font-mono font-medium text-teal-600 dark:text-teal-400 bg-teal-500/10 dark:bg-teal-400/10 px-2 py-0.5 rounded-md border border-teal-500/20">
          Copied #{id}
        </span>
      )}
    </div>
  );
};
