import React, { useState } from 'react';
import { Cpu, CheckCircle2, Layers, BarChart3, Database, Cloud, Terminal, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { Language } from '../types/portfolio';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { HashHeading } from './ui/HashHeading';

interface SkillsProps {
  lang: Language;
}

export const Skills: React.FC<SkillsProps> = ({ lang }) => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState<number>(0);

  const categoryIcons = [
    <BarChart3 className="w-4 h-4 text-teal-600 dark:text-teal-400" />,
    <Terminal className="w-4 h-4 text-blue-600 dark:text-blue-400" />,
    <Cloud className="w-4 h-4 text-amber-600 dark:text-amber-400" />
  ];

  return (
    <section id="skills" className="py-20 lg:py-28 relative">
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
              <Cpu className="w-3.5 h-3.5" />
              <span>{lang === 'en' ? 'Technical Competency Matrix' : 'Matriks Kompetensi Teknis'}</span>
            </div>
            <HashHeading
              id="skills"
              title={
                lang === 'en'
                  ? 'Comprehensive Analytical & Engineering Skill Set'
                  : 'Keahlian Analitik, Rekayasa Data & Alat'
              }
            />
            <p className="mt-3 text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              {lang === 'en'
                ? 'Proven proficiency validated by international vendor certifications (Microsoft, AWS, PMI, Adobe) and hands-on enterprise application.'
                : 'Kemampuan teruji yang divalidasi oleh sertifikasi vendor internasional (Microsoft, AWS, PMI, Adobe) dan implementasi proyek riil.'}
            </p>
          </div>

          {/* Category Selector Tabs Placed Directly After Description */}
          <div className="pt-2 flex flex-wrap items-center gap-2 p-1 bg-slate-200/80 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-2xl w-fit">
            {SKILL_CATEGORIES.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setActiveCategoryIndex(idx)}
                className={`flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all cursor-pointer ${
                  activeCategoryIndex === idx
                    ? 'bg-teal-500 text-slate-950 shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                }`}
              >
                {categoryIcons[idx]}
                <span>{cat.title[lang]}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Selected Category Skills Grid with Motion */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SKILL_CATEGORIES[activeCategoryIndex].skills.map((skill, sIdx) => (
            <motion.div
              key={`${activeCategoryIndex}-${sIdx}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: sIdx * 0.05, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="p-5 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80 hover:border-teal-500/50 transition-colors flex flex-col justify-between space-y-4 shadow-sm group"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-600 dark:text-teal-400 shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-300 transition-colors">
                      {skill.name}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Level indicator & status */}
              <div className="space-y-1.5 pt-2 border-t border-slate-100 dark:border-slate-800/80">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-500 dark:text-slate-400">{lang === 'en' ? 'Proficiency' : 'Tingkat Kemahiran'}</span>
                  <span className="text-teal-600 dark:text-teal-400 font-semibold">{skill.level}</span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-slate-100 dark:bg-slate-950 overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${
                      skill.level.includes('Expert') || skill.level.includes('Master')
                        ? 'w-full bg-gradient-to-r from-teal-500 to-blue-600'
                        : skill.level.includes('Advanced') || skill.level.includes('Certified')
                          ? 'w-[88%] bg-teal-500'
                          : 'w-[75%] bg-slate-400'
                    }`}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quick summary strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 p-4 rounded-2xl bg-slate-100/70 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-600 dark:text-slate-400"
        >
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0" />
            <span>
              {lang === 'en'
                ? 'All skills are integrated into end-to-end data analytics and predictive workflows.'
                : 'Semua keahlian diintegrasikan dalam alur kerja data analitik dan prediksi end-to-end.'}
            </span>
          </div>
          <a
            href="#projects"
            className="text-teal-600 dark:text-teal-400 font-semibold hover:underline"
          >
            {lang === 'en' ? 'See Skills Applied in Projects →' : 'Lihat Penerapan dalam Proyek →'}
          </a>
        </motion.div>
      </div>
    </section>
  );
};
