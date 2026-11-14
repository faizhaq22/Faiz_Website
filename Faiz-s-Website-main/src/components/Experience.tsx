import React, { useState } from 'react';
import { Briefcase, Building2, MapPin, Calendar, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { Language } from '../types/portfolio';
import { EXPERIENCES } from '../data/portfolioData';
import { Pagination } from './ui/Pagination';
import { HashHeading } from './ui/HashHeading';

interface ExperienceProps {
  lang: Language;
}

export const Experience: React.FC<ExperienceProps> = ({ lang }) => {
  const [activeType, setActiveType] = useState<string>('all');
  const [currentPage, setCurrentPage] = useState<number>(1);

  // 2 items per page gives 3 clean pages (1, 2, 3) for the 6 career roles
  const ITEMS_PER_PAGE = 2;

  const typeTabs = [
    { id: 'all', label: lang === 'en' ? 'All Roles' : 'Semua Posisi' },
    { id: 'industry', label: lang === 'en' ? 'Data & Industry' : 'Data & Industri' },
    { id: 'research', label: lang === 'en' ? 'National Research' : 'Riset Nasional' },
    { id: 'education', label: lang === 'en' ? 'Mentorship & Leadership' : 'Mentoring & Komunitas' }
  ];

  const handleTypeChange = (typeId: string) => {
    setActiveType(typeId);
    setCurrentPage(1);
  };

  const filteredExperiences = EXPERIENCES.filter((exp) => {
    if (activeType === 'all') return true;
    if (activeType === 'industry') {
      return (
        exp.type.toLowerCase().includes('industry') ||
        exp.type.toLowerCase().includes('tech')
      );
    }
    if (activeType === 'research') {
      return exp.type.toLowerCase().includes('research');
    }
    if (activeType === 'education') {
      return (
        exp.type.toLowerCase().includes('education') ||
        exp.type.toLowerCase().includes('leadership') ||
        exp.type.toLowerCase().includes('stewardship') ||
        exp.type.toLowerCase().includes('community')
      );
    }
    return true;
  });

  const totalPages = Math.ceil(filteredExperiences.length / ITEMS_PER_PAGE);
  const paginatedExperiences = filteredExperiences.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <section id="experience" className="py-20 lg:py-28 relative">
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
              <Briefcase className="w-3.5 h-3.5" />
              <span>{lang === 'en' ? 'Professional Trajectory' : 'Rekam Jejak Profesional'}</span>
            </div>
            <HashHeading
              id="experience"
              title={
                lang === 'en'
                  ? 'Hands-on Analytical & Leadership Experience'
                  : 'Pengalaman Analitik & Kepemimpinan Nyata'
              }
            />
            <p className="mt-3 text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              {lang === 'en'
                ? 'Proven track record conducting social media crisis analytics at NoLimit Indonesia, executing national research with BRIN RI, and mentoring in Data Science at MyEduSolve.'
                : 'Rekam jejak teruji dalam analisis krisis media sosial di NoLimit Indonesia, penelitian nasional bersama BRIN RI, dan pengajaran Data Science di MyEduSolve.'}
            </p>
          </div>

          {/* Filter Tabs Placed Directly After Description */}
          <div className="pt-2 flex flex-wrap items-center gap-1.5 p-1 bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-xl w-fit">
            {typeTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTypeChange(tab.id)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                  activeType === tab.id
                    ? 'bg-teal-500 text-slate-950 shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Experience Timeline Grid with Motion */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {paginatedExperiences.map((exp, idx) => (
            <motion.div
              key={`${exp.organization}-${idx}`}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: Math.min(idx * 0.08, 0.2), ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="p-6 sm:p-7 rounded-3xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700 transition-colors flex flex-col justify-between space-y-5 shadow-md hover:shadow-xl hover:shadow-teal-500/5"
            >
              <div>
                {/* Header: Role & Organization */}
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <span className="text-xs font-semibold text-teal-600 dark:text-teal-400">
                      {exp.type}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white tracking-tight mt-0.5">
                      {exp.role[lang]}
                    </h3>
                    <div className="text-sm font-medium text-slate-700 dark:text-slate-300 flex items-center gap-1.5 mt-1">
                      <Building2 className="w-3.5 h-3.5 text-slate-400 dark:text-slate-400" />
                      <span>{exp.organization}</span>
                    </div>
                  </div>

                  <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 text-teal-600 dark:text-teal-400 shrink-0">
                    <Briefcase className="w-4 h-4" />
                  </div>
                </div>

                {/* Period & Location Metadata */}
                <div className="flex flex-wrap items-center gap-2 mt-3 text-xs text-slate-500 dark:text-slate-400 font-mono">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500" />
                    <span>{exp.period}</span>
                  </span>
                  <span aria-hidden="true" className="text-slate-400 dark:text-slate-600">·</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500" />
                    <span>{exp.location}</span>
                  </span>
                </div>

                {/* Achievement Bullets */}
                <ul className="mt-5 space-y-2.5">
                  {exp.achievements[lang].map((ach, aIdx) => (
                    <li key={aIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-teal-500 dark:text-teal-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{ach}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Multi-page Pagination Controls */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={(page) => {
            setCurrentPage(page);
            const elem = document.getElementById('experience');
            if (elem) elem.scrollIntoView({ behavior: 'smooth' });
          }}
          totalItems={filteredExperiences.length}
          itemsPerPage={ITEMS_PER_PAGE}
          itemName={{ en: 'experiences', id: 'pengalaman' }}
          lang={lang}
        />
      </div>
    </section>
  );
};
