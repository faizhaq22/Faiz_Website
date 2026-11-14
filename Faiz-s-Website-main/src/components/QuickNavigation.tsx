import React, { useState, useEffect } from 'react';
import { Search, Download, Mail, ArrowUp, Compass } from 'lucide-react';
import { Language } from '../types/portfolio';
import { PERSONAL_INFO } from '../data/portfolioData';

interface QuickNavigationProps {
  lang: Language;
  onOpenSearch: () => void;
  onOpenContact: () => void;
  onOpenRecruiter?: () => void;
}

export const QuickNavigation: React.FC<QuickNavigationProps> = ({
  lang,
  onOpenSearch,
  onOpenContact,
  onOpenRecruiter
}) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <aside
      aria-label="Quick Actions"
      className="fixed bottom-6 right-6 z-30 flex items-center gap-2 p-1.5 rounded-2xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-slate-200 dark:border-slate-800 shadow-xl shadow-black/10 dark:shadow-black/40 text-xs text-slate-700 dark:text-slate-300 transition-colors"
    >
      {/* Recruiter Fast-Track Button */}
      {onOpenRecruiter && (
        <button
          onClick={onOpenRecruiter}
          className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-gradient-to-r from-teal-500/20 to-blue-500/20 hover:from-teal-500 hover:to-teal-400 text-teal-700 dark:text-teal-300 hover:text-slate-950 font-bold transition-all cursor-pointer border border-teal-500/30"
          title="Open Recruiter 60-Second Snapshot (Press R)"
        >
          <span>⚡</span>
          <span className="hidden sm:inline">Recruiter</span>
        </button>
      )}

      {/* Quick Search */}
      <button
        onClick={onOpenSearch}
        className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800/80 hover:bg-teal-500 hover:text-slate-950 font-semibold transition-all cursor-pointer"
        title="Open Spotlight Search (Ctrl+K)"
      >
        <Search className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
        <span className="hidden sm:inline">{lang === 'en' ? 'Quick Find' : 'Cari'}</span>
      </button>

      {/* Direct CV Download */}
      <a
        href={PERSONAL_INFO.cvPath}
        download="CV_Faiz_Ni_matul_Haq.pdf"
        className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 hover:text-slate-950 dark:hover:text-white transition-all"
        title="Download Resume (CV)"
      >
        <Download className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
        <span className="hidden md:inline">CV</span>
      </a>

      {/* Contact Trigger */}
      <button
        onClick={onOpenContact}
        className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-teal-500/10 hover:bg-teal-500 text-teal-700 dark:text-teal-300 hover:text-slate-950 font-semibold transition-all cursor-pointer border border-teal-500/20"
        title="Get in touch"
      >
        <Mail className="w-3.5 h-3.5" />
        <span className="hidden sm:inline">{lang === 'en' ? 'Contact' : 'Kontak'}</span>
      </button>

      {/* Back to top */}
      <button
        onClick={scrollToTop}
        className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-500 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white transition-all cursor-pointer"
        title="Scroll to Top"
      >
        <ArrowUp className="w-3.5 h-3.5" />
      </button>
    </aside>
  );
};
