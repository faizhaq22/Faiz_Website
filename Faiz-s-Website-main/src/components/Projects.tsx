import React, { useState } from 'react';
import { ArrowUpRight, Award, Layers, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { ProjectItem, Language } from '../types/portfolio';
import { PROJECTS } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';
import { Pagination } from './ui/Pagination';
import { HashHeading } from './ui/HashHeading';

interface ProjectsProps {
  lang: Language;
}

export const Projects: React.FC<ProjectsProps> = ({ lang }) => {
  const [filter, setFilter] = useState<'all' | 'data-bi' | 'marine-ar' | 'iot-ai'>('all');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const ITEMS_PER_PAGE = 3;

  const handleFilterChange = (newFilter: 'all' | 'data-bi' | 'marine-ar' | 'iot-ai') => {
    setFilter(newFilter);
    setCurrentPage(1);
  };

  const filteredProjects = filter === 'all'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === filter);

  const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE);
  const paginatedProjects = filteredProjects.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const filterTabs = [
    { id: 'all', label: lang === 'en' ? 'All Projects' : 'Semua Proyek' },
    { id: 'data-bi', label: lang === 'en' ? 'Data & Business Intelligence' : 'Data & BI' },
    { id: 'marine-ar', label: lang === 'en' ? 'Maritime & 3D AR Tech' : 'Teknologi Maritim & AR' },
    { id: 'iot-ai', label: lang === 'en' ? 'AI & IoT Innovations' : 'Inovasi AI & IoT' },
  ];

  return (
    <section id="projects" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Motion */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-6"
        >
          {/* Title & Description Block */}
          <div className="max-w-3xl">
            <div className="text-xs font-semibold text-teal-600 dark:text-teal-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5" />
              <span>{lang === 'en' ? 'Selected Works & Case Studies' : 'Karya & Studi Kasus Pilihan'}</span>
            </div>
            <HashHeading
              id="projects"
              title={
                lang === 'en'
                  ? 'Award-Winning Innovations & Enterprise Dashboards'
                  : 'Inovasi Juara Nasional & Dashboard Perusahaan'
              }
            />
            <p className="mt-3 text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              {lang === 'en'
                ? 'From algorithmically calculating diabetic glycemic impacts to 3D augmented reality coastal defense vessels, each project solves high-stakes real-world challenges.'
                : 'Dari pemodelan algoritma pencegahan lonjakan gula darah hingga kapal otonom pengawasan laut berbasis AR, setiap inovasi dirancang untuk dampak nyata.'}
            </p>
          </div>

          {/* Interactive Filter Tabs Placed Directly After Description Text */}
          <div className="pt-2 flex flex-wrap items-center gap-1.5 p-1 bg-slate-200/80 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-xl w-fit">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleFilterChange(tab.id as any)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                  filter === tab.id
                    ? 'bg-teal-500 text-slate-950 shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid with Motion Stagger */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {paginatedProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: Math.min(idx * 0.08, 0.2), ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              onClick={() => setSelectedProject(project)}
              className="group relative rounded-3xl bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700 transition-colors overflow-hidden flex flex-col cursor-pointer shadow-md hover:shadow-2xl hover:shadow-teal-500/5"
            >
              {/* Media Container */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 dark:bg-slate-950">
                <img
                  src={project.image}
                  alt={project.title[lang]}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                {/* Award Badge Ribbon if available */}
                {project.awardBadge && (
                  <div className="absolute top-3.5 right-3.5 flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/95 dark:bg-slate-950/90 backdrop-blur-md border border-amber-500/40 text-[11px] font-bold text-amber-600 dark:text-amber-300 shadow-md">
                    <Award className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400" />
                    <span>{project.awardBadge[lang]}</span>
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  {/* Category unboxed metadata */}
                  <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 font-medium">
                    <span className="text-teal-600 dark:text-teal-400 font-semibold">{project.categoryLabel[lang]}</span>
                    <span aria-hidden="true" className="text-slate-300 dark:text-slate-600">·</span>
                    <span className="truncate">{project.tags[0]}</span>
                  </div>

                  {/* Title */}
                  <h3 className="mt-2 text-lg font-bold text-slate-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-300 transition-colors tracking-tight line-clamp-2">
                    {project.title[lang]}
                  </h3>

                  {/* Summary */}
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 line-clamp-3 leading-relaxed">
                    {project.summary[lang]}
                  </p>
                </div>

                {/* Bottom Card Footer: Unboxed tags & Action CTA */}
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs">
                  <div className="text-slate-500 dark:text-slate-400 font-mono">
                    {project.metrics[0].value} {project.metrics[0].label[lang]}
                  </div>

                  <span className="inline-flex items-center gap-1 text-teal-600 dark:text-teal-400 font-semibold group-hover:translate-x-1 transition-transform">
                    <span>{lang === 'en' ? 'View Details' : 'Studi Kasus'}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
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
            const elem = document.getElementById('projects');
            if (elem) elem.scrollIntoView({ behavior: 'smooth' });
          }}
          totalItems={filteredProjects.length}
          itemsPerPage={ITEMS_PER_PAGE}
          itemName={{ en: 'projects', id: 'proyek' }}
          lang={lang}
        />
      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        lang={lang}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
