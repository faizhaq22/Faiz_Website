import React, { useState } from 'react';
import { BookOpen, Copy, Check, Award, FileText, ChevronRight, Sparkles, ExternalLink, Microscope, X } from 'lucide-react';
import { motion } from 'motion/react';
import { Language, PublicationItem } from '../types/portfolio';
import { PUBLICATIONS, PERSONAL_INFO } from '../data/portfolioData';
import { Pagination } from './ui/Pagination';
import { HashHeading } from './ui/HashHeading';

interface PublicationsProps {
  lang: Language;
  onOpenPdf?: (url: string, title: string, subtitle?: string) => void;
}

export const Publications: React.FC<PublicationsProps> = ({ lang, onOpenPdf }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [copiedCitationId, setCopiedCitationId] = useState<string | null>(null);
  const [selectedPub, setSelectedPub] = useState<PublicationItem | null>(null);

  const ITEMS_PER_PAGE = 2;

  const handleCategoryChange = (catId: string) => {
    setActiveCategory(catId);
    setCurrentPage(1);
  };

  const categories = [
    { id: 'all', label: lang === 'en' ? 'All Publications' : 'Semua Publikasi' },
    { id: 'marine-spatial', label: lang === 'en' ? 'Marine & Spatial Ecology' : 'Ekologi Spasial Maritim' },
    { id: 'health-tech', label: lang === 'en' ? 'Health Tech & Algorithms' : 'Algoritma & Kesehatan' },
    { id: 'policy-sdg', label: lang === 'en' ? 'Food Security & SDGs' : 'Ketahanan Pangan & SDGs' },
    { id: 'social-analytics', label: lang === 'en' ? 'Social & Demographics' : 'Sosio-Demografi' },
  ];

  const filteredPubs = activeCategory === 'all'
    ? PUBLICATIONS
    : PUBLICATIONS.filter((p) => p.category === activeCategory);

  const totalPages = Math.ceil(filteredPubs.length / ITEMS_PER_PAGE);
  const paginatedPubs = filteredPubs.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleCopyCitation = (pub: PublicationItem, e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(pub.citation);
    setCopiedCitationId(pub.id);
    setTimeout(() => setCopiedCitationId(null), 2500);
  };

  return (
    <section id="publications" className="py-20 lg:py-28 relative">
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
              <Microscope className="w-3.5 h-3.5" />
              <span>{lang === 'en' ? 'Peer Research & Scholarly Works' : 'Karya Ilmiah & Riset Akademik'}</span>
            </div>
            <HashHeading
              id="publications"
              title={
                lang === 'en'
                  ? 'Scientific Publications & Journal Repositories'
                  : 'Publikasi Ilmiah & Makalah Riset'
              }
            />
            <p className="mt-3 text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              {lang === 'en'
                ? 'Grounding business intelligence in empirical scientific discipline. Explore peer-reviewed undergraduate thesis research, award-winning health algorithm papers, and national policy analyses.'
                : 'Mendasari business intelligence pada disiplin sains empiris. Telusuri penelitian skripsi S1 bereputasi, makalah algoritma kesehatan juara emas, dan analisis kebijakan nasional.'}
            </p>
          </div>

          {/* Selection Filter Tabs Placed Directly After Description Text */}
          <div className="pt-2 flex flex-wrap items-center gap-1.5 p-1 bg-slate-200/80 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-xl w-fit">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => handleCategoryChange(c.id)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                  activeCategory === c.id
                    ? 'bg-teal-500 text-slate-950 shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-slate-200'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Publications Grid with Motion */}
        <div className="mt-10 space-y-6">
          {paginatedPubs.map((pub, idx) => (
            <motion.div
              key={pub.id}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: Math.min(idx * 0.08, 0.2), ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              onClick={() => setSelectedPub(pub)}
              className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80 hover:border-teal-500/50 transition-colors flex flex-col justify-between space-y-5 shadow-sm hover:shadow-xl hover:shadow-teal-500/5 group cursor-pointer"
            >
              <div>
                {/* Meta Header */}
                <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-semibold text-teal-600 dark:text-teal-400">
                      {pub.journalOrVenue}
                    </span>
                    <span aria-hidden="true" className="text-slate-300 dark:text-slate-600">·</span>
                    <span className="text-slate-500 dark:text-slate-400 font-mono">{pub.year}</span>
                    <span aria-hidden="true" className="text-slate-300 dark:text-slate-600">·</span>
                    <span className="text-slate-600 dark:text-slate-400">
                      {pub.authors.join(', ')}
                    </span>
                  </div>

                  {/* Award Note Ribbon */}
                  {pub.awardNote && (
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-600 dark:text-amber-300 text-xs font-bold">
                      <Award className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400" />
                      <span>{pub.awardNote[lang]}</span>
                    </div>
                  )}
                </div>

                {/* Title */}
                <h3 className="mt-3 text-xl sm:text-2xl font-bold text-slate-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-300 transition-colors tracking-tight leading-snug">
                  {pub.title[lang]}
                </h3>

                {/* Abstract Preview */}
                <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {pub.abstract[lang]}
                </p>

                {/* Key Empirical Findings Strip */}
                <div className="mt-5 p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800/80 space-y-2">
                  <div className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                    {lang === 'en' ? 'Core Empirical Findings & Impact' : 'Temuan Kunci & Dampak Riset'}
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
                    {pub.keyFindings[lang].map((finding, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2">
                        <span className="text-teal-600 dark:text-teal-400 font-bold shrink-0 mt-0.5">•</span>
                        <span>{finding}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Card Footer: Methodology, Citation Copy & View Modal */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs">
                {/* Methodology string */}
                <div className="text-slate-600 dark:text-slate-400">
                  <span className="font-semibold text-slate-800 dark:text-slate-300">
                    {lang === 'en' ? 'Methodology: ' : 'Metodologi: '}
                  </span>
                  <span>{pub.methodology[lang]}</span>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2.5 shrink-0">
                  {/* View PDF modal button */}
                  {onOpenPdf && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenPdf(
                          PERSONAL_INFO.cvPath,
                          pub.title[lang],
                          `${pub.journalOrVenue} (${pub.year})`
                        );
                      }}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 hover:border-teal-500/60 bg-slate-100 dark:bg-slate-950 text-slate-700 dark:text-slate-300 hover:text-teal-600 dark:hover:text-white transition-colors cursor-pointer text-xs"
                      title={lang === 'en' ? 'Inspect Publication Document in PDF Viewer' : 'Buka Dokumen Publikasi di Penampil PDF'}
                    >
                      <FileText className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
                      <span>{lang === 'en' ? 'View Document' : 'Buka Dokumen'}</span>
                    </button>
                  )}

                  <button
                    onClick={(e) => handleCopyCitation(pub, e)}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 bg-slate-100 dark:bg-slate-950 text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white transition-colors cursor-pointer text-xs"
                    title="Copy standard academic citation"
                  >
                    {copiedCitationId === pub.id ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
                        <span className="text-teal-600 dark:text-teal-400">{lang === 'en' ? 'Copied' : 'Tersalin'}</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>{lang === 'en' ? 'Copy Citation' : 'Salin Sitasi'}</span>
                      </>
                    )}
                  </button>

                  <span className="inline-flex items-center gap-1 text-teal-600 dark:text-teal-400 font-semibold group-hover:translate-x-1 transition-transform">
                    <span>{lang === 'en' ? 'Full Abstract' : 'Detail Makalah'}</span>
                    <ChevronRight className="w-4 h-4" />
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
            const elem = document.getElementById('publications');
            if (elem) elem.scrollIntoView({ behavior: 'smooth' });
          }}
          totalItems={filteredPubs.length}
          itemsPerPage={ITEMS_PER_PAGE}
          itemName={{ en: 'publications', id: 'publikasi' }}
          lang={lang}
        />
      </div>

      {/* Publication Abstract Modal */}
      {selectedPub && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <div
            className="fixed inset-0 bg-slate-950/70 backdrop-blur-md transition-opacity"
            onClick={() => setSelectedPub(null)}
          />
          <div className="relative w-full max-w-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl p-6 sm:p-8 space-y-6 z-10 my-auto text-slate-900 dark:text-slate-100">
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="text-xs font-semibold text-teal-600 dark:text-teal-400">
                  {selectedPub.journalOrVenue} · {selectedPub.year}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-1">
                  {selectedPub.title[lang]}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  {selectedPub.authors.join(', ')}
                </p>
              </div>
              <button
                onClick={() => setSelectedPub(null)}
                className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-4 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              <div>
                <h4 className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
                  {lang === 'en' ? 'Abstract' : 'Abstrak'}
                </h4>
                <p>{selectedPub.abstract[lang]}</p>
              </div>

              <div>
                <h4 className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
                  {lang === 'en' ? 'Key Insights' : 'Wawasan Utama'}
                </h4>
                <ul className="space-y-1 text-xs">
                  {selectedPub.keyFindings[lang].map((f, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-teal-600 dark:text-teal-400 font-bold">•</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
                  {lang === 'en' ? 'Standard Citation' : 'Sitasi Format Standar'}
                </h4>
                <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-950 font-mono text-xs text-slate-800 dark:text-slate-300 border border-slate-200 dark:border-slate-800">
                  {selectedPub.citation}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-end">
              <button
                onClick={() => setSelectedPub(null)}
                className="px-5 py-2.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-semibold text-xs cursor-pointer"
              >
                {lang === 'en' ? 'Close' : 'Tutup'}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
