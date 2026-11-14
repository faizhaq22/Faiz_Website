import React, { useState } from 'react';
import { ExternalLink, ShieldCheck, Check, Copy, Award, Cloud, Cpu, FileCheck, FileText, Download, Eye } from 'lucide-react';
import { motion } from 'motion/react';
import { Language, CredlyBadge } from '../types/portfolio';
import { CREDLY_BADGES, PERSONAL_INFO } from '../data/portfolioData';
import { Pagination } from './ui/Pagination';
import { HashHeading } from './ui/HashHeading';
import { CertificateCardPreview } from './ui/CertificateCardPreview';

interface CertificationsProps {
  lang: Language;
  onOpenPdf?: (url: string, title: string, subtitle?: string) => void;
}

export const Certifications: React.FC<CertificationsProps> = ({ lang, onOpenPdf }) => {
  const [activeIssuer, setActiveIssuer] = useState<string>('All');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const ITEMS_PER_PAGE = 6;

  const handleIssuerChange = (issuer: string) => {
    setActiveIssuer(issuer);
    setCurrentPage(1);
  };

  const issuers = ['All', 'Microsoft', 'AWS', 'PMI', 'Adobe'];

  const filteredBadges = activeIssuer === 'All'
    ? CREDLY_BADGES
    : CREDLY_BADGES.filter((b) => b.issuer === activeIssuer);

  const totalPages = Math.ceil(filteredBadges.length / ITEMS_PER_PAGE);
  const paginatedBadges = filteredBadges.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleCopyId = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(id);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  const getIssuerIcon = (issuer: string) => {
    switch (issuer) {
      case 'Microsoft':
        return <ShieldCheck className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
      case 'AWS':
        return <Cloud className="w-5 h-5 text-amber-600 dark:text-amber-400" />;
      case 'PMI':
        return <FileCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
      case 'Adobe':
        return <Award className="w-5 h-5 text-rose-600 dark:text-rose-400" />;
      default:
        return <Cpu className="w-5 h-5 text-teal-600 dark:text-teal-400" />;
    }
  };

  return (
    <section id="certifications" className="py-20 lg:py-28 relative">
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
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>{lang === 'en' ? 'Verified Professional Credentials' : 'Kredensial Profesional Tervalidasi'}</span>
            </div>
            <HashHeading
              id="certifications"
              title={
                lang === 'en'
                  ? 'Official Credly Digital Badges & Certifications'
                  : 'Lencana Digital Resmi Credly & Sertifikasi'
              }
            />
            <p className="mt-3 text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              {lang === 'en'
                ? 'Every credential is cryptographically verifiable on Credly, proving hands-on mastery in enterprise data analysis, cloud architectures, and project management. Inspect or download verified certificates below.'
                : 'Setiap sertifikat terdaftar dan dapat diverifikasi langsung di Credly, membuktikan kompetensi dalam analitik data, arsitektur cloud, dan manajemen proyek. Tinjau atau unduh sertifikat resmi di bawah ini.'}
            </p>
          </div>

          {/* Selection Filter Placed Directly After Description Text */}
          <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-200/80 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-xl">
              {issuers.map((issuer) => (
                <button
                  key={issuer}
                  onClick={() => handleIssuerChange(issuer)}
                  className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                    activeIssuer === issuer
                      ? 'bg-teal-500 text-slate-950 shadow-sm'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-slate-200'
                  }`}
                >
                  {issuer}
                </button>
              ))}
            </div>

            <a
              href={PERSONAL_INFO.credly}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-300 dark:border-slate-700/80 hover:border-teal-500/60 bg-white dark:bg-slate-900 text-xs font-semibold text-teal-600 dark:text-teal-300 hover:text-teal-700 dark:hover:text-white transition-all whitespace-nowrap shadow-sm"
            >
              <span>{lang === 'en' ? 'Verify Full Credly Profile (10+ Badges)' : 'Profil Credly Resmi (10+ Lencana)'}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </motion.div>

        {/* Badges Grid: Rich Media Presentation Matching Projects */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {paginatedBadges.map((badge, idx) => (
            <motion.div
              key={badge.id}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: Math.min(idx * 0.06, 0.2), ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="rounded-3xl bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700 transition-colors overflow-hidden flex flex-col justify-between shadow-md hover:shadow-2xl hover:shadow-teal-500/5 group"
            >
              <div>
                {/* 1. Visual Certificate Preview Banner (Like Projects media container) */}
                <CertificateCardPreview
                  type="certification"
                  title={badge.title}
                  issuerOrOrg={badge.issuer}
                  dateOrYear={badge.issueDate}
                  medalOrLevel={badge.level}
                  idNumber={badge.credlyId}
                  thumbnailUrl={badge.thumbnailUrl}
                  onPreview={
                    onOpenPdf
                      ? () =>
                          onOpenPdf(
                            badge.certificateUrl || '/assets/aistudio/CV_-_Faiz_Ni_matul_Haq._f3cc484f.pdf',
                            badge.title,
                            `${badge.issuer} · Credly ID: ${badge.credlyId}`
                          )
                      : undefined
                  }
                  downloadUrl={badge.certificateUrl || '/assets/aistudio/CV_-_Faiz_Ni_matul_Haq._f3cc484f.pdf'}
                  downloadFilename={`Certificate_${badge.id}_Faiz_Ni_matul_Haq.pdf`}
                  lang={lang}
                />

                {/* 2. Card Content Body */}
                <div className="p-6 space-y-4">
                  {/* Issuer & Level Info Header with Badge Thumbnail alongside Entry */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      {/* Interactive Badge Thumbnail with Overlay 'View' icon */}
                      {badge.thumbnailUrl ? (
                        <div className="relative group/thumb w-14 h-14 shrink-0 rounded-2xl p-1.5 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 border border-slate-200 dark:border-slate-700/80 shadow-sm overflow-hidden flex items-center justify-center">
                          <img
                            src={badge.thumbnailUrl}
                            alt={badge.title}
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
                                  badge.certificateUrl || '/assets/aistudio/CV_-_Faiz_Ni_matul_Haq._f3cc484f.pdf',
                                  badge.title,
                                  `${badge.issuer} · Credly ID: ${badge.credlyId}`
                                );
                              }
                            }}
                            className="absolute inset-0 bg-slate-950/75 opacity-0 group-hover/thumb:opacity-100 flex flex-col items-center justify-center text-teal-400 transition-opacity cursor-pointer z-10"
                            title={lang === 'en' ? 'View Certificate' : 'Lihat Sertifikat'}
                          >
                            <Eye className="w-5 h-5 drop-shadow" />
                            <span className="text-[9px] font-bold text-white tracking-wider">VIEW</span>
                          </button>
                        </div>
                      ) : (
                        <div className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60">
                          {getIssuerIcon(badge.issuer)}
                        </div>
                      )}

                      <div>
                        <div className="flex items-center gap-1.5">
                          {getIssuerIcon(badge.issuer)}
                          <span className="text-xs font-bold text-slate-900 dark:text-slate-200">
                            {badge.issuer}
                          </span>
                        </div>
                        <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                          {badge.level} · {badge.issueDate}
                        </div>
                      </div>
                    </div>

                    {/* Copy Credly ID Button */}
                    <button
                      onClick={(e) => handleCopyId(badge.credlyId, e)}
                      className="flex items-center gap-1 px-2.5 py-1 rounded-lg border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 bg-slate-50 dark:bg-slate-950/70 text-[11px] font-mono text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-slate-200 transition-colors cursor-pointer shrink-0"
                      title="Copy Credly Verification ID"
                    >
                      {copiedId === badge.credlyId ? (
                        <>
                          <Check className="w-3 h-3 text-teal-600 dark:text-teal-400" />
                          <span className="text-teal-600 dark:text-teal-400">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>ID</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Badge Title */}
                  <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-300 transition-colors tracking-tight leading-snug">
                    {badge.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-2">
                    {badge.description[lang]}
                  </p>

                  {/* Verified Skills Tags */}
                  <div className="flex flex-wrap items-center gap-1.5 text-[11px] text-slate-600 dark:text-slate-300 pt-1">
                    {badge.skills.slice(0, 3).map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800/70 text-slate-700 dark:text-slate-300 font-mono text-[11px]"
                      >
                        {skill}
                      </span>
                    ))}
                    {badge.skills.length > 3 && (
                      <span className="text-slate-400 dark:text-slate-500 font-mono text-[11px]">
                        +{badge.skills.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* 3. Card Action Toolbar: Show Certificate, Download, Verify */}
              <div className="p-6 pt-0 border-t border-slate-100 dark:border-slate-800/80 mt-2">
                <div className="flex items-center justify-between gap-2 pt-4">
                  <div className="flex items-center gap-2">
                    {/* Show Certificate Button */}
                    {onOpenPdf ? (
                      <button
                        type="button"
                        onClick={() =>
                          onOpenPdf(
                            badge.certificateUrl || '/assets/aistudio/CV_-_Faiz_Ni_matul_Haq._f3cc484f.pdf',
                            badge.title,
                            `${badge.issuer} · Credly ID: ${badge.credlyId}`
                          )
                        }
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 text-xs font-bold transition-all shadow-sm cursor-pointer"
                        title={lang === 'en' ? 'Show Certificate in PDF Viewer' : 'Buka Sertifikat'}
                      >
                        <FileText className="w-3.5 h-3.5" />
                        <span>{lang === 'en' ? 'Show Certificate' : 'Lihat Sertifikat'}</span>
                      </button>
                    ) : (
                      <a
                        href={badge.certificateUrl || '/assets/aistudio/CV_-_Faiz_Ni_matul_Haq._f3cc484f.pdf'}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 text-xs font-bold transition-all shadow-sm"
                      >
                        <FileText className="w-3.5 h-3.5" />
                        <span>{lang === 'en' ? 'Show Certificate' : 'Lihat Sertifikat'}</span>
                      </a>
                    )}

                    {/* Download File Button */}
                    <a
                      href={badge.certificateUrl || '/assets/aistudio/CV_-_Faiz_Ni_matul_Haq._f3cc484f.pdf'}
                      download={`Certificate_${badge.id}_Faiz_Ni_matul_Haq.pdf`}
                      className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80 hover:bg-slate-100 dark:hover:bg-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-300 transition-colors"
                      title={lang === 'en' ? 'Download Certificate Document' : 'Unduh Berkas Sertifikat'}
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">{lang === 'en' ? 'Download' : 'Unduh'}</span>
                    </a>
                  </div>

                  {/* Verify Link */}
                  <a
                    href={badge.badgeUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 text-xs font-semibold group-hover:translate-x-0.5 transition-transform"
                    title="Verify on Credly Platform"
                  >
                    <span>Credly</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
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
            const elem = document.getElementById('certifications');
            if (elem) elem.scrollIntoView({ behavior: 'smooth' });
          }}
          totalItems={filteredBadges.length}
          itemsPerPage={ITEMS_PER_PAGE}
          itemName={{ en: 'badges', id: 'lencana' }}
          lang={lang}
        />
      </div>
    </section>
  );
};
