import React, { useState, useEffect } from 'react';
import { Globe, Check, HardDrive } from 'lucide-react';
import { Language } from '../../types/portfolio';

export interface LanguageTrackerProps {
  currentLang: Language;
  onToggle: () => void;
  className?: string;
}

export const LanguageTracker: React.FC<LanguageTrackerProps> = ({
  currentLang,
  onToggle,
  className = ''
}) => {
  const [justSaved, setJustSaved] = useState(false);

  useEffect(() => {
    setJustSaved(true);
    const timer = setTimeout(() => setJustSaved(false), 2000);
    return () => clearTimeout(timer);
  }, [currentLang]);

  return (
    <div
      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300 shadow-sm transition-colors ${className}`}
      title={
        currentLang === 'en'
          ? 'Language preference saved in browser storage'
          : 'Preferensi bahasa tersimpan di penyimpanan browser'
      }
    >
      <button
        onClick={onToggle}
        className="flex items-center gap-1.5 font-semibold text-slate-900 dark:text-white hover:text-teal-600 dark:hover:text-teal-400 transition-colors cursor-pointer"
        aria-label="Toggle language"
      >
        <Globe className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
        <span className="uppercase font-mono">{currentLang}</span>
      </button>

      <span className="text-slate-400 dark:text-slate-600">·</span>

      <div className="flex items-center gap-1 text-[11px] text-slate-500 dark:text-slate-400 font-mono">
        {justSaved ? (
          <span className="flex items-center gap-1 text-teal-600 dark:text-teal-400 font-medium animate-pulse">
            <Check className="w-3 h-3" />
            <span>{currentLang === 'en' ? 'Stored' : 'Tersimpan'}</span>
          </span>
        ) : (
          <span className="flex items-center gap-1">
            <HardDrive className="w-3 h-3 text-slate-400" />
            <span>{currentLang === 'en' ? 'localStorage' : 'Memori'}</span>
          </span>
        )}
      </div>
    </div>
  );
};
