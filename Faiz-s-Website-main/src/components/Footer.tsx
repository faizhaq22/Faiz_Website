import React from 'react';
import { ArrowUp, Github, Linkedin, ExternalLink } from 'lucide-react';
import { Language } from '../types/portfolio';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800/80 bg-slate-100 dark:bg-slate-950 py-12 relative text-xs text-slate-600 dark:text-slate-400 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Left: Brand & Copyright */}
        <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
          <div className="font-bold text-slate-900 dark:text-white tracking-tight text-sm">
            {PERSONAL_INFO.name}
          </div>
          <span className="hidden sm:inline text-slate-400 dark:text-slate-700">·</span>
          <div>
            © {new Date().getFullYear()} Faiz Ni'matul Haq. {lang === 'en' ? 'All rights reserved.' : 'Hak cipta dilindungi.'}
          </div>
        </div>

        {/* Center: Clean External Links */}
        <div className="flex items-center gap-6">
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={PERSONAL_INFO.credly}
            target="_blank"
            rel="noreferrer"
            className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
          >
            Credly
          </a>
          <a
            href={PERSONAL_INFO.cvPath}
            download="CV_Faiz_Ni_matul_Haq.pdf"
            className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
          >
            {lang === 'en' ? 'Download CV' : 'Unduh CV'}
          </a>
        </div>

        {/* Right: Back to Top */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:border-slate-400 dark:hover:border-slate-700 transition-all cursor-pointer shadow-sm"
          title="Scroll to Top"
        >
          <span>{lang === 'en' ? 'Back to top' : 'Kembali ke atas'}</span>
          <ArrowUp className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
        </button>
      </div>
    </footer>
  );
};
