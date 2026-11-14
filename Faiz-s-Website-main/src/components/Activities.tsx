import React, { useState } from 'react';
import { Users, Compass, Award, Calendar, CheckCircle2, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Language, ActivityItem } from '../types/portfolio';
import { ACTIVITIES_DATA } from '../data/portfolioData';
import { Pagination } from './ui/Pagination';
import { HashHeading } from './ui/HashHeading';

interface ActivitiesProps {
  lang: Language;
}

export const Activities: React.FC<ActivitiesProps> = ({ lang }) => {
  const [filterCategory, setFilterCategory] = useState<'all' | 'delegation' | 'leadership' | 'mentorship' | 'competition'>('all');
  const [currentPage, setCurrentPage] = useState<number>(1);

  // 2 items per page creates 3 navigable pages (1, 2, 3) for the 5 activity highlights
  const ITEMS_PER_PAGE = 2;

  const handleCategoryChange = (category: 'all' | 'delegation' | 'leadership' | 'mentorship' | 'competition') => {
    setFilterCategory(category);
    setCurrentPage(1);
  };

  const filteredActivities = filterCategory === 'all'
    ? ACTIVITIES_DATA
    : ACTIVITIES_DATA.filter((a) => a.category === filterCategory);

  const totalPages = Math.ceil(filteredActivities.length / ITEMS_PER_PAGE);
  const paginatedActivities = filteredActivities.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <section id="activities" className="py-20 lg:py-28 relative">
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
              <Users className="w-4 h-4" />
              <span>{lang === 'en' ? 'Leadership & Extracurriculars' : 'Aktivitas & Kepemimpinan'}</span>
            </div>
            <HashHeading
              id="activities"
              title={
                lang === 'en'
                  ? 'Organizational Highlights & Community Initiatives'
                  : 'Kepemimpinan Organisasi & Inisiatif Komunitas'
              }
            />
            <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              {lang === 'en'
                ? 'Beyond technical analysis, active as a national speaker, academic department head, and data mentor educating hundreds of aspiring analysts.'
                : 'Di luar meja analisis teknis, aktif sebagai pembicara nasional, ketua departemen riset, dan mentor data yang membimbing ratusan pembelajar.'}
            </p>
          </div>

          {/* Filter Tabs Placed Directly After Description */}
          <div className="pt-2 flex flex-wrap items-center gap-1.5 p-1 bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-xl w-fit">
            <button
              onClick={() => handleCategoryChange('all')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                filterCategory === 'all'
                  ? 'bg-teal-500 text-slate-950 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-slate-200'
              }`}
            >
              {lang === 'en' ? 'All Activities' : 'Semua'}
            </button>
            <button
              onClick={() => handleCategoryChange('delegation')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                filterCategory === 'delegation'
                  ? 'bg-teal-500 text-slate-950 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-slate-200'
              }`}
            >
              {lang === 'en' ? 'National Delegations' : 'Delegasi Nasional'}
            </button>
            <button
              onClick={() => handleCategoryChange('leadership')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                filterCategory === 'leadership'
                  ? 'bg-teal-500 text-slate-950 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-slate-200'
              }`}
            >
              {lang === 'en' ? 'Leadership' : 'Kepemimpinan'}
            </button>
            <button
              onClick={() => handleCategoryChange('mentorship')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                filterCategory === 'mentorship'
                  ? 'bg-teal-500 text-slate-950 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-slate-200'
              }`}
            >
              {lang === 'en' ? 'Mentorship' : 'Mentoring'}
            </button>
            <button
              onClick={() => handleCategoryChange('competition')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                filterCategory === 'competition'
                  ? 'bg-teal-500 text-slate-950 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-slate-200'
              }`}
            >
              {lang === 'en' ? 'Competitions' : 'Kompetisi'}
            </button>
          </div>
        </motion.div>

        {/* Activities Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {paginatedActivities.map((act, idx) => (
            <motion.div
              key={act.id}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: Math.min(idx * 0.08, 0.2), ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="p-6 sm:p-7 rounded-3xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700 transition-colors flex flex-col justify-between space-y-6 shadow-md hover:shadow-xl hover:shadow-teal-500/5 group"
            >
              <div className="space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="px-2.5 py-1 rounded-md bg-teal-500/10 border border-teal-500/30 text-teal-700 dark:text-teal-300 text-xs font-bold font-mono">
                    {act.categoryLabel[lang]}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-mono">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{act.period}</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                    {act.title[lang]}
                  </h3>
                  <div className="text-sm font-semibold text-teal-600 dark:text-teal-400 mt-1">
                    {act.role[lang]} · <span className="text-slate-600 dark:text-slate-400 font-normal">{act.organization}</span>
                  </div>
                </div>

                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {act.summary[lang]}
                </p>

                {/* Impact bullets */}
                <ul className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800/80">
                  {act.impactBullets[lang].map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tags */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex flex-wrap gap-1.5">
                {act.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-400 text-[11px] font-mono"
                  >
                    #{tag}
                  </span>
                ))}
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
            const elem = document.getElementById('activities');
            if (elem) elem.scrollIntoView({ behavior: 'smooth' });
          }}
          totalItems={filteredActivities.length}
          itemsPerPage={ITEMS_PER_PAGE}
          itemName={{ en: 'activities', id: 'aktivitas' }}
          lang={lang}
        />
      </div>
    </section>
  );
};
