import React, { useState } from 'react';
import { ShieldCheck, BookOpen, Layers, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Language } from '../types/portfolio';
import { CREDLY_BADGES, PUBLICATIONS, PERSONAL_INFO } from '../data/portfolioData';
import { Certifications } from './Certifications';
import { Publications } from './Publications';

interface CredentialsAndResearchProps {
  lang: Language;
  onOpenPdf?: (url: string, title: string, subtitle?: string) => void;
}

export type SectionViewFilter = 'all' | 'badges' | 'publications';

export const CredentialsAndResearch: React.FC<CredentialsAndResearchProps> = ({ lang, onOpenPdf }) => {
  const [activeView, setActiveView] = useState<SectionViewFilter>('all');

  const filterTabs = [
    {
      id: 'all' as SectionViewFilter,
      label: lang === 'en' ? 'All Verified Works' : 'Semua Bukti Kredensial',
      icon: <Layers className="w-4 h-4" />,
      count: CREDLY_BADGES.length + PUBLICATIONS.length
    },
    {
      id: 'badges' as SectionViewFilter,
      label: lang === 'en' ? 'Official Badges' : 'Lencana Resmi Credly',
      icon: <ShieldCheck className="w-4 h-4" />,
      count: CREDLY_BADGES.length
    },
    {
      id: 'publications' as SectionViewFilter,
      label: lang === 'en' ? 'Journal Repositories' : 'Repositori & Publikasi',
      icon: <BookOpen className="w-4 h-4" />,
      count: PUBLICATIONS.length
    }
  ];

  return (
    <div id="credentials-section" className="relative">
      {/* Persistent Sticky Section Filter Bar */}
      <div className="sticky top-20 z-30 py-3 bg-slate-50/85 dark:bg-slate-950/85 backdrop-blur-md border-y border-slate-200/80 dark:border-slate-800/80 shadow-sm transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          {/* Left: Filter description label */}
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300">
            <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
            <span>
              {lang === 'en' ? 'Section View Filter:' : 'Filter Tampilan Seksi:'}
            </span>
            <span className="text-slate-500 dark:text-slate-400 font-normal hidden md:inline">
              {lang === 'en' ? 'Certifications & Scholarly Research' : 'Sertifikasi & Riset Ilmiah'}
            </span>
          </div>

          {/* Center: Segmented Toggle Buttons with smooth motion layout */}
          <div className="flex items-center p-1 rounded-xl bg-slate-200/80 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 transition-colors">
            {filterTabs.map((tab) => {
              const isActive = activeView === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveView(tab.id)}
                  className={`relative flex items-center gap-1.5 px-3 sm:px-4 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'text-slate-950 dark:text-slate-950 font-bold'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                  }`}
                >
                  {/* Framer motion active indicator pill */}
                  {isActive && (
                    <motion.div
                      layoutId="sectionFilterIndicator"
                      className="absolute inset-0 bg-teal-400 dark:bg-teal-400 rounded-lg shadow-sm"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-1.5">
                    {tab.icon}
                    <span>{tab.label}</span>
                    <span
                      className={`text-[10px] font-mono px-1.5 py-0.2 rounded-md ${
                        isActive
                          ? 'bg-teal-500/40 text-slate-950 font-bold'
                          : 'bg-slate-300 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                      }`}
                    >
                      {tab.count}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right: Quick External Link */}
          <div className="hidden lg:flex items-center gap-3 text-xs">
            <a
              href={PERSONAL_INFO.credly}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-teal-600 dark:text-teal-400 hover:underline font-semibold"
            >
              <span>{lang === 'en' ? 'Credly Directory' : 'Direktori Credly'}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Animated Content Transition based on Active View */}
      <AnimatePresence mode="wait">
        {activeView === 'all' && (
          <motion.div
            key="view-all"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <Certifications lang={lang} onOpenPdf={onOpenPdf} />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="border-t border-slate-200 dark:border-slate-800" />
            </div>
            <Publications lang={lang} onOpenPdf={onOpenPdf} />
          </motion.div>
        )}

        {activeView === 'badges' && (
          <motion.div
            key="view-badges"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <Certifications lang={lang} onOpenPdf={onOpenPdf} />
          </motion.div>
        )}

        {activeView === 'publications' && (
          <motion.div
            key="view-publications"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <Publications lang={lang} onOpenPdf={onOpenPdf} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
