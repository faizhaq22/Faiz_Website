import React, { useState } from 'react';
import { Award, Trophy, Medal, Star, Sparkles, MapPin, Calendar, FileText, Download, ExternalLink, Eye } from 'lucide-react';
import confetti from 'canvas-confetti';
import { motion } from 'motion/react';
import { Language, AwardItem } from '../types/portfolio';
import { AWARDS } from '../data/portfolioData';
import { Pagination } from './ui/Pagination';
import { HashHeading } from './ui/HashHeading';
import { CertificateCardPreview } from './ui/CertificateCardPreview';

interface AwardsProps {
  lang: Language;
  onOpenPdf?: (url: string, title: string, subtitle?: string) => void;
}

export const Awards: React.FC<AwardsProps> = ({ lang, onOpenPdf }) => {
  const [filterMedal, setFilterMedal] = useState<'all' | 'gold' | 'silver' | 'honor'>('all');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [celebratedId, setCelebratedId] = useState<string | null>(null);

  const ITEMS_PER_PAGE = 4;

  const handleFilterChange = (medal: 'all' | 'gold' | 'silver' | 'honor') => {
    setFilterMedal(medal);
    setCurrentPage(1);
  };

  const filteredAwards = filterMedal === 'all'
    ? AWARDS
    : filterMedal === 'honor'
      ? AWARDS.filter((a) => a.medal === 'honor' || a.medal === 'finalist')
      : AWARDS.filter((a) => a.medal === filterMedal);

  const totalPages = Math.ceil(filteredAwards.length / ITEMS_PER_PAGE);
  const paginatedAwards = filteredAwards.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const triggerConfetti = (awardId: string) => {
    setCelebratedId(awardId);
    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#0d9488', '#f59e0b', '#38bdf8', '#ffffff']
      });
    } catch {
      // Fallback safe if confetti is blocked
    }
    setTimeout(() => setCelebratedId(null), 3000);
  };

  const getMedalBadge = (medal: string) => {
    switch (medal) {
      case 'gold':
        return (
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold">
            <Trophy className="w-3.5 h-3.5 text-amber-400" />
            <span>{lang === 'en' ? 'Gold Medal' : 'Medali Emas'}</span>
          </div>
        );
      case 'silver':
        return (
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-400/10 border border-slate-400/30 text-slate-200 text-xs font-bold">
            <Medal className="w-3.5 h-3.5 text-slate-300" />
            <span>{lang === 'en' ? 'Silver Medal' : 'Medali Perak'}</span>
          </div>
        );
      default:
        return (
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-bold">
            <Star className="w-3.5 h-3.5 text-teal-400" />
            <span>{lang === 'en' ? 'National Honor' : 'Prestasi Nasional'}</span>
          </div>
        );
    }
  };

  return (
    <section id="awards" className="py-20 lg:py-28 relative">
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
              <Trophy className="w-3.5 h-3.5" />
              <span>{lang === 'en' ? 'Competitive Distinctions' : 'Prestasi & Penghargaan'}</span>
            </div>
            <HashHeading
              id="awards"
              title={
                lang === 'en'
                  ? 'National Medals & Academic Honors'
                  : 'Medali Emas, Perak & Penghargaan Nasional'
              }
            />
            <p className="mt-3 text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              {lang === 'en'
                ? 'Recognized at national competitions organized by the Ministry of Education (Puspresnas), Telkomsel, PT Adaro Energy, and premier universities.'
                : 'Diakui dalam berbagai kompetisi nasional oleh Pusat Prestasi Nasional Kemendikbudristek, Telkomsel, PT Adaro Energy, dan universitas terkemuka.'}
            </p>
          </div>

          {/* Filter Tabs Placed Directly After Description Text */}
          <div className="pt-2 flex flex-wrap items-center gap-1.5 p-1 bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-xl w-fit">
            <button
              onClick={() => handleFilterChange('all')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                filterMedal === 'all'
                  ? 'bg-teal-500 text-slate-950 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-slate-200'
              }`}
            >
              {lang === 'en' ? 'All Honors' : 'Semua'}
            </button>
            <button
              onClick={() => handleFilterChange('gold')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                filterMedal === 'gold'
                  ? 'bg-amber-500 text-slate-950 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-slate-200'
              }`}
            >
              🥇 {lang === 'en' ? 'Gold Medals' : 'Emas'}
            </button>
            <button
              onClick={() => handleFilterChange('silver')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                filterMedal === 'silver'
                  ? 'bg-slate-300 dark:bg-slate-200 text-slate-950 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-slate-200'
              }`}
            >
              🥈 {lang === 'en' ? 'Silver Medals' : 'Perak'}
            </button>
            <button
              onClick={() => handleFilterChange('honor')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                filterMedal === 'honor'
                  ? 'bg-teal-500 text-slate-950 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-slate-200'
              }`}
            >
              🏅 {lang === 'en' ? 'Top Talents' : 'Penghargaan Khusus'}
            </button>
          </div>
        </motion.div>

        {/* Award Cards Grid: Rich Media Presentation Matching Projects */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {paginatedAwards.map((award, idx) => (
            <motion.div
              key={award.id}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: Math.min(idx * 0.08, 0.2), ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className={`rounded-3xl bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700 transition-colors overflow-hidden flex flex-col justify-between shadow-md hover:shadow-2xl hover:shadow-teal-500/5 group ${
                celebratedId === award.id ? 'scale-[1.01]' : ''
              }`}
            >
              <div>
                {/* 1. Visual Certificate Preview Banner (Like Projects media container) */}
                <CertificateCardPreview
                  type="award"
                  title={award.title[lang]}
                  issuerOrOrg={award.organization}
                  dateOrYear={award.year}
                  medalOrLevel={award.medal}
                  thumbnailUrl={award.thumbnailUrl}
                  onPreview={
                    onOpenPdf
                      ? () =>
                          onOpenPdf(
                            award.certificateUrl || '/assets/aistudio/CV_-_Faiz_Ni_matul_Haq._f3cc484f.pdf',
                            award.title[lang],
                            `${award.organization} (${award.year})`
                          )
                      : undefined
                  }
                  downloadUrl={award.certificateUrl || '/assets/aistudio/CV_-_Faiz_Ni_matul_Haq._f3cc484f.pdf'}
                  downloadFilename={`Award_${award.id}_Faiz_Ni_matul_Haq.pdf`}
                  lang={lang}
                />

                {/* 2. Card Content Body */}
                <div className="p-6 sm:p-7 space-y-4">
                  {/* Top Metadata: Medal Badge, Year, Location */}
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-2.5">
                      {getMedalBadge(award.medal)}
                      <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-mono">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{award.year}</span>
                      </div>
                    </div>

                    <div className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500" />
                      <span>{award.location}</span>
                    </div>
                  </div>

                  {/* Award Header with Thumbnail alongside Entry */}
                  <div className="flex items-start gap-4">
                    {/* Interactive Award Thumbnail with Overlay 'View' icon */}
                    {award.thumbnailUrl && (
                      <div className="relative group/thumb w-16 h-16 sm:w-20 sm:h-20 shrink-0 rounded-2xl p-1.5 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 border border-slate-200 dark:border-slate-700/80 shadow-sm overflow-hidden flex items-center justify-center">
                        <img
                          src={award.thumbnailUrl}
                          alt={award.title[lang]}
                          className="w-full h-full object-contain filter drop-shadow-sm group-hover/thumb:scale-110 transition-transform duration-300"
                          loading="lazy"
                        />
                        {/* Overlay 'View' icon */}
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            if (onOpenPdf) {
                              onOpenPdf(
                                award.certificateUrl || '/assets/aistudio/CV_-_Faiz_Ni_matul_Haq._f3cc484f.pdf',
                                award.title[lang],
                                `${award.organization} (${award.year})`
                              );
                            }
                          }}
                          className="absolute inset-0 bg-slate-950/75 opacity-0 group-hover/thumb:opacity-100 flex flex-col items-center justify-center text-teal-400 transition-opacity cursor-pointer z-10"
                          title={lang === 'en' ? 'View Award Document' : 'Lihat Dokumen Penghargaan'}
                        >
                          <Eye className="w-5 h-5 drop-shadow" />
                          <span className="text-[9px] font-bold text-white tracking-wider">VIEW</span>
                        </button>
                      </div>
                    )}

                    <div className="flex-1 min-w-0 space-y-1">
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-300 transition-colors tracking-tight leading-snug">
                        {award.title[lang]}
                      </h3>
                      <div className="text-xs sm:text-sm font-semibold text-teal-600 dark:text-teal-400">
                        {award.organization}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {award.description[lang]}
                  </p>

                  {/* Connected Project Link Badge if available */}
                  {award.highlightProject && (
                    <div className="pt-1">
                      <a
                        href="#projects"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-600 dark:text-teal-400 hover:underline"
                      >
                        <Trophy className="w-3.5 h-3.5" />
                        <span>
                          {lang === 'en'
                            ? 'Awarded for Innovation Project (View in Projects)'
                            : 'Dianugerahkan untuk Proyek Inovasi (Lihat di Seksi Proyek)'}
                        </span>
                      </a>
                    </div>
                  )}
                </div>
              </div>

              {/* 3. Card Action Toolbar: Show Certificate, Download, Celebrate */}
              <div className="p-6 sm:p-7 pt-0 border-t border-slate-100 dark:border-slate-800/80 mt-2">
                <div className="flex flex-wrap items-center justify-between gap-3 pt-4">
                  <div className="flex items-center gap-2">
                    {/* Show Certificate Button */}
                    {onOpenPdf ? (
                      <button
                        type="button"
                        onClick={() =>
                          onOpenPdf(
                            award.certificateUrl || '/assets/aistudio/CV_-_Faiz_Ni_matul_Haq._f3cc484f.pdf',
                            award.title[lang],
                            `${award.organization} (${award.year})`
                          )
                        }
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 text-xs font-bold transition-all shadow-sm cursor-pointer"
                        title={lang === 'en' ? 'Show Certificate in PDF Viewer' : 'Buka Sertifikat'}
                      >
                        <FileText className="w-3.5 h-3.5" />
                        <span>{lang === 'en' ? 'Show Certificate' : 'Lihat Sertifikat'}</span>
                      </button>
                    ) : (
                      <a
                        href={award.certificateUrl || '/assets/aistudio/CV_-_Faiz_Ni_matul_Haq._f3cc484f.pdf'}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 text-xs font-bold transition-all shadow-sm"
                      >
                        <FileText className="w-3.5 h-3.5" />
                        <span>{lang === 'en' ? 'Show Certificate' : 'Lihat Sertifikat'}</span>
                      </a>
                    )}

                    {/* Download Certificate Button */}
                    <a
                      href={award.certificateUrl || '/assets/aistudio/CV_-_Faiz_Ni_matul_Haq._f3cc484f.pdf'}
                      download={`Award_${award.id}_Faiz_Ni_matul_Haq.pdf`}
                      className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80 hover:bg-slate-100 dark:hover:bg-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-300 transition-colors"
                      title={lang === 'en' ? 'Download Certificate Document' : 'Unduh Berkas Sertifikat'}
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>{lang === 'en' ? 'Download' : 'Unduh'}</span>
                    </a>
                  </div>

                  {/* Celebrate Confetti Trigger */}
                  <button
                    type="button"
                    onClick={() => triggerConfetti(award.id)}
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 text-amber-600 dark:text-amber-400 border border-amber-500/30 text-xs font-bold transition-all cursor-pointer"
                    title={lang === 'en' ? 'Trigger Celebration Confetti' : 'Rayakan Prestasi'}
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{lang === 'en' ? 'Celebrate' : 'Rayakan'}</span>
                  </button>
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
            const elem = document.getElementById('awards');
            if (elem) elem.scrollIntoView({ behavior: 'smooth' });
          }}
          totalItems={filteredAwards.length}
          itemsPerPage={ITEMS_PER_PAGE}
          itemName={{ en: 'honors', id: 'penghargaan' }}
          lang={lang}
        />
      </div>
    </section>
  );
};
