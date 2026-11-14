import React, { useEffect } from 'react';
import { X, Award, ExternalLink, ShieldCheck, Check, Sparkles } from 'lucide-react';
import { ProjectItem, Language } from '../types/portfolio';

interface ProjectModalProps {
  project: ProjectItem | null;
  lang: Language;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, lang, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl shadow-black/30 dark:shadow-black/60 overflow-hidden z-10 max-h-[90vh] flex flex-col my-auto">
        {/* Top Header Bar */}
        <div className="p-5 sm:p-6 border-b border-slate-200 dark:border-slate-800/80 flex items-center justify-between gap-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm sticky top-0 z-20">
          <div>
            <div className="text-xs font-semibold text-teal-600 dark:text-teal-400">
              {project.categoryLabel[lang]}
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
              {project.title[lang]}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors cursor-pointer"
            aria-label="Close Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Modal Body */}
        <div className="p-6 sm:p-8 space-y-8 overflow-y-auto">
          {/* Main Showcase Image */}
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-inner">
            <img
              src={project.image}
              alt={project.title[lang]}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
            {project.awardBadge && (
              <div className="absolute bottom-4 left-4 flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-900/90 backdrop-blur-md border border-amber-500/40 text-xs font-semibold text-amber-300 shadow-lg">
                <Award className="w-4 h-4 text-amber-400" />
                <span>{project.awardBadge[lang]}</span>
              </div>
            )}
          </div>

          {/* Key Metrics Strip */}
          <div className="grid grid-cols-3 gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800/80">
            {project.metrics.map((m, idx) => (
              <div key={idx} className="text-center">
                <div className="text-lg sm:text-xl font-bold font-mono text-teal-600 dark:text-teal-400 tabular-nums">
                  {m.value}
                </div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 font-medium">
                  {m.label[lang]}
                </div>
              </div>
            ))}
          </div>

          {/* Detailed Problem & Solution Case Study */}
          <div className="space-y-6">
            <div>
              <h4 className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                {lang === 'en' ? 'The Challenge & Problem' : 'Tantangan & Masalah'}
              </h4>
              <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                {project.problem[lang]}
              </p>
            </div>

            <div>
              <h4 className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                {lang === 'en' ? 'The Engineering & Data Solution' : 'Solusi Rekayasa & Analitik'}
              </h4>
              <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                {project.solution[lang]}
              </p>
            </div>

            <div>
              <h4 className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                {lang === 'en' ? 'Quantifiable Impact & Validation' : 'Dampak Terukur & Validasi'}
              </h4>
              <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                {project.impact[lang]}
              </p>
            </div>
          </div>

          {/* Tech Stack Unboxed Tags */}
          <div className="pt-4 border-t border-slate-200 dark:border-slate-800/80">
            <h4 className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3">
              {lang === 'en' ? 'Technologies & Frameworks' : 'Teknologi & Alat'}
            </h4>
            <div className="flex flex-wrap items-center gap-2 text-xs text-slate-600 dark:text-slate-300">
              {project.tags.map((tag, idx) => (
                <React.Fragment key={tag}>
                  <span className="font-mono text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-200 dark:border-slate-700/60">
                    {tag}
                  </span>
                  {idx < project.tags.length - 1 && <span className="text-slate-400 dark:text-slate-600">·</span>}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Bottom Actions */}
        <div className="p-5 sm:p-6 border-t border-slate-200 dark:border-slate-800/80 bg-white/90 dark:bg-slate-900/90 flex items-center justify-between gap-4">
          <div className="text-xs text-slate-500 dark:text-slate-400">
            Project validation by Faiz Ni'matul Haq
          </div>
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white text-xs font-semibold transition-colors cursor-pointer"
          >
            {lang === 'en' ? 'Close View' : 'Tutup'}
          </button>
        </div>
      </div>
    </div>
  );
};
