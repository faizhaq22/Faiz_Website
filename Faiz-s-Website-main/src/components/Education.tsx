import React, { useState } from 'react';
import { GraduationCap, Award, BookOpen, Calendar, MapPin, CheckCircle2, FileText, ExternalLink, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { Language } from '../types/portfolio';
import { EDUCATION_DATA } from '../data/portfolioData';
import { HashHeading } from './ui/HashHeading';

interface EducationProps {
  lang: Language;
  onOpenPdf?: (url: string, title: string, subtitle?: string) => void;
}

export const Education: React.FC<EducationProps> = ({ lang, onOpenPdf }) => {
  const [selectedEduId, setSelectedEduId] = useState<string>(EDUCATION_DATA[0].id);
  const selectedEdu = EDUCATION_DATA.find((e) => e.id === selectedEduId) || EDUCATION_DATA[0];

  return (
    <section id="education" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Motion */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-6"
        >
          <div className="max-w-3xl">
            <div className="text-xs font-semibold text-teal-600 dark:text-teal-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4" />
              <span>{lang === 'en' ? 'Academic Foundation' : 'Fondasi Akademik & Studi'}</span>
            </div>
            <HashHeading
              id="education"
              title={
                lang === 'en'
                  ? 'Education & Specialized Academic Programs'
                  : 'Pendidikan Formal & Program Akademik Unggulan'
              }
            />
            <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              {lang === 'en'
                ? 'Rooted in quantitative marine science with a 3.94 / 4.00 GPA (Summa Cum Laude), complemented by executive business intelligence and geospatial analytics training.'
                : 'Berakar pada sains kelautan kuantitatif dengan IPK 3.94 / 4.00 (Summa Cum Laude), diperkaya pelatihan eksekutif business intelligence dan analisis geospasial.'}
            </p>
          </div>

          {/* Institution Selector Buttons Placed Directly After Description */}
          <div className="pt-2 flex flex-wrap items-center gap-1.5 p-1 bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-xl w-fit">
            {EDUCATION_DATA.map((edu) => (
              <button
                key={edu.id}
                onClick={() => setSelectedEduId(edu.id)}
                className={`px-3.5 py-1.5 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer ${
                  selectedEduId === edu.id
                    ? 'bg-teal-500 text-slate-950 shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-slate-200'
                }`}
              >
                {edu.institution.split('(')[0].trim()}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Selected Education Showcase Card with Motion */}
        <motion.div
          key={selectedEdu.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 rounded-3xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80 p-6 sm:p-8 lg:p-10 shadow-xl shadow-black/5 dark:shadow-black/20"
        >
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-8 border-b border-slate-200 dark:border-slate-800">
            <div className="space-y-3 max-w-3xl">
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3 py-1 rounded-lg bg-teal-500/10 border border-teal-500/30 text-teal-700 dark:text-teal-300 text-xs font-bold font-mono">
                  {selectedEdu.period}
                </span>
                {selectedEdu.gpa && (
                  <span className="px-3 py-1 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-700 dark:text-amber-300 text-xs font-bold font-mono">
                    GPA {selectedEdu.gpa}
                  </span>
                )}
                {selectedEdu.honors && (
                  <span className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-blue-500/10 border border-blue-500/30 text-blue-700 dark:text-blue-300 text-xs font-bold">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{selectedEdu.honors[lang]}</span>
                  </span>
                )}
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                {selectedEdu.degree[lang]}
              </h3>

              <div className="text-base font-semibold text-teal-600 dark:text-teal-400">
                {selectedEdu.institution} · <span className="text-slate-600 dark:text-slate-400 font-normal">{selectedEdu.field[lang]}</span>
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 font-mono">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                <span>{selectedEdu.location}</span>
              </div>
            </div>

            {/* Document Action Button */}
            {selectedEdu.documentUrl && onOpenPdf && (
              <div className="shrink-0">
                <button
                  onClick={() =>
                    onOpenPdf(
                      selectedEdu.documentUrl!,
                      selectedEdu.degree[lang],
                      selectedEdu.institution
                    )
                  }
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-teal-500 hover:text-slate-950 text-slate-800 dark:text-slate-200 text-xs font-semibold border border-slate-300 dark:border-slate-700 transition-all cursor-pointer shadow-sm group"
                >
                  <FileText className="w-4 h-4 text-teal-600 dark:text-teal-400 group-hover:text-slate-950" />
                  <span>{lang === 'en' ? 'Inspect Document (PDF)' : 'Buka Dokumen (PDF)'}</span>
                </button>
              </div>
            )}
          </div>

          {/* Details 2-Column Grid */}
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Description & Key Highlights */}
            <div className="lg:col-span-7 space-y-6">
              <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                {selectedEdu.description[lang]}
              </p>

              <div className="space-y-3">
                <h4 className="text-xs font-semibold text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                  <span>{lang === 'en' ? 'Key Distinctions & Achievements' : 'Pencapaian & Keunggulan'}</span>
                </h4>
                <ul className="space-y-2.5">
                  {selectedEdu.keyHighlights[lang].map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column: Thesis & Coursework */}
            <div className="lg:col-span-5 space-y-6">
              {selectedEdu.thesis && (
                <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800/80 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-bold text-teal-600 dark:text-teal-400 uppercase tracking-wider">
                    <BookOpen className="w-4 h-4" />
                    <span>{lang === 'en' ? 'Undergraduate Research Thesis' : 'Skripsi Riset Akademik'}</span>
                  </div>
                  <h5 className="text-sm font-bold text-slate-900 dark:text-white leading-snug">
                    "{selectedEdu.thesis.title[lang]}"
                  </h5>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {selectedEdu.thesis.description[lang]}
                  </p>
                </div>
              )}

              {selectedEdu.coursework && (
                <div className="space-y-3">
                  <h4 className="text-xs font-semibold text-slate-900 dark:text-white uppercase tracking-wider">
                    {lang === 'en' ? 'Relevant Quantitative Coursework' : 'Mata Kuliah Kuantitatif Relevan'}
                  </h4>
                  <div className="flex flex-wrap gap-2 text-xs">
                    {selectedEdu.coursework.map((course) => (
                      <span
                        key={course}
                        className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 text-slate-700 dark:text-slate-300 font-mono text-[11px]"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
