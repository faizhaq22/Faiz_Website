import React, { useState, useEffect } from 'react';
import { Search, X, Download, Copy, Check, ExternalLink, ArrowRight, BookOpen, Award, ShieldCheck, Briefcase, GraduationCap, Users } from 'lucide-react';
import { Language } from '../types/portfolio';
import { PROJECTS, CREDLY_BADGES, PUBLICATIONS, AWARDS, EDUCATION_DATA, ACTIVITIES_DATA, PERSONAL_INFO } from '../data/portfolioData';

interface SpotlightSearchProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  onOpenRecruiter?: () => void;
}

export const SpotlightSearch: React.FC<SpotlightSearchProps> = ({ isOpen, onClose, lang, onOpenRecruiter }) => {
  const [query, setQuery] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        // Toggle search
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const trimmed = query.trim().toLowerCase();

  // Search through Projects
  const matchedProjects = trimmed
    ? PROJECTS.filter(
        (p) =>
          p.title[lang].toLowerCase().includes(trimmed) ||
          p.summary[lang].toLowerCase().includes(trimmed) ||
          p.tags.some((t) => t.toLowerCase().includes(trimmed))
      )
    : PROJECTS.slice(0, 2);

  // Search through Education
  const matchedEducation = trimmed
    ? EDUCATION_DATA.filter(
        (e) =>
          e.institution.toLowerCase().includes(trimmed) ||
          e.degree[lang].toLowerCase().includes(trimmed) ||
          e.field[lang].toLowerCase().includes(trimmed) ||
          (e.coursework && e.coursework.some((c) => c.toLowerCase().includes(trimmed)))
      )
    : [];

  // Search through Activities
  const matchedActivities = trimmed
    ? ACTIVITIES_DATA.filter(
        (a) =>
          a.title[lang].toLowerCase().includes(trimmed) ||
          a.organization.toLowerCase().includes(trimmed) ||
          a.role[lang].toLowerCase().includes(trimmed) ||
          a.tags.some((t) => t.toLowerCase().includes(trimmed))
      )
    : [];

  // Search through Certifications
  const matchedBadges = trimmed
    ? CREDLY_BADGES.filter(
        (b) =>
          b.title.toLowerCase().includes(trimmed) ||
          b.issuer.toLowerCase().includes(trimmed) ||
          b.skills.some((s) => s.toLowerCase().includes(trimmed))
      )
    : CREDLY_BADGES.slice(0, 2);

  // Search through Publications
  const matchedPubs = trimmed
    ? PUBLICATIONS.filter(
        (pub) =>
          pub.title[lang].toLowerCase().includes(trimmed) ||
          pub.journalOrVenue.toLowerCase().includes(trimmed) ||
          pub.tags.some((t) => t.toLowerCase().includes(trimmed))
      )
    : PUBLICATIONS.slice(0, 2);

  // Search through Awards
  const matchedAwards = trimmed
    ? AWARDS.filter(
        (a) =>
          a.title[lang].toLowerCase().includes(trimmed) ||
          a.organization.toLowerCase().includes(trimmed)
      )
    : AWARDS.slice(0, 2);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const jumpTo = (sectionId: string) => {
    onClose();
    const elem = document.getElementById(sectionId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Spotlight Modal */}
      <div className="relative w-full max-w-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl shadow-black/30 dark:shadow-black/80 overflow-hidden z-10 flex flex-col my-auto max-h-[85vh]">
        {/* Search Bar Input */}
        <div className="p-4 sm:p-5 border-b border-slate-200 dark:border-slate-800 flex items-center gap-3 bg-white/95 dark:bg-slate-900/95 sticky top-0 z-20">
          <Search className="w-5 h-5 text-teal-600 dark:text-teal-400 shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={
              lang === 'en'
                ? 'Search skills, projects, certifications, publications (e.g. Power BI, GIS, Python)...'
                : 'Cari keahlian, proyek, sertifikasi, publikasi (misal: Power BI, GIS, Python)...'
            }
            className="w-full bg-transparent text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 text-sm sm:text-base focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-xs text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white p-1"
            >
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Recruiter Quick Actions Bar */}
        <div className="px-5 py-3 bg-slate-50 dark:bg-slate-950/70 border-b border-slate-200 dark:border-slate-800/80 flex flex-wrap items-center justify-between gap-2 text-xs">
          <div className="font-semibold text-slate-600 dark:text-slate-400 text-[11px] uppercase tracking-wider">
            {lang === 'en' ? 'Recruiter Quick Actions' : 'Aksi Cepat Perekrut'}
          </div>
          <div className="flex items-center gap-2">
            {onOpenRecruiter && (
              <button
                onClick={() => {
                  onClose();
                  onOpenRecruiter();
                }}
                className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold border border-teal-400 cursor-pointer shadow-xs"
              >
                <span>⚡</span>
                <span>{lang === 'en' ? 'Recruiter 60s View (R)' : 'Ringkasan 60d (R)'}</span>
              </button>
            )}
            <a
              href={PERSONAL_INFO.cvPath}
              download="CV_Faiz_Ni_matul_Haq.pdf"
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-teal-600 dark:text-teal-400 font-medium border border-slate-200 dark:border-slate-800"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download CV</span>
            </a>
            <button
              onClick={handleCopyEmail}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium border border-slate-200 dark:border-slate-800 cursor-pointer"
            >
              {copiedEmail ? (
                <>
                  <Check className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
                  <span className="text-teal-600 dark:text-teal-400">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Email</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Results Body */}
        <div className="p-5 space-y-6 overflow-y-auto">
          {/* Projects results */}
          {matchedProjects.length > 0 && (
            <div className="space-y-2">
              <div className="text-xs font-semibold text-teal-600 dark:text-teal-400 uppercase tracking-wider flex items-center justify-between">
                <span>{lang === 'en' ? 'Projects & Case Studies' : 'Proyek & Studi Kasus'}</span>
                <span className="text-[11px] text-slate-500 font-mono">
                  {matchedProjects.length} found
                </span>
              </div>
              <div className="space-y-1.5">
                {matchedProjects.map((p) => (
                  <div
                    key={p.id}
                    onClick={() => jumpTo('projects')}
                    className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950/60 hover:bg-slate-100 dark:hover:bg-slate-800/80 border border-slate-200 dark:border-slate-800/70 hover:border-teal-500/50 transition-all cursor-pointer flex items-center justify-between gap-3"
                  >
                    <div>
                      <div className="text-xs font-bold text-slate-900 dark:text-white">
                        {p.title[lang]}
                      </div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400 truncate max-w-md">
                        {p.tags.join(' · ')}
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Education results */}
          {matchedEducation.length > 0 && (
            <div className="space-y-2">
              <div className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider flex items-center justify-between">
                <span>{lang === 'en' ? 'Education & Academic Degrees' : 'Pendidikan & Riwayat Akademik'}</span>
                <span className="text-[11px] text-slate-500 font-mono">
                  {matchedEducation.length} found
                </span>
              </div>
              <div className="space-y-1.5">
                {matchedEducation.map((e) => (
                  <div
                    key={e.id}
                    onClick={() => jumpTo('education')}
                    className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950/60 hover:bg-slate-100 dark:hover:bg-slate-800/80 border border-slate-200 dark:border-slate-800/70 hover:border-emerald-500/50 transition-all cursor-pointer flex items-center justify-between gap-3"
                  >
                    <div>
                      <div className="text-xs font-bold text-slate-900 dark:text-white">
                        {e.degree[lang]}
                      </div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400">
                        {e.institution} ({e.period}) {e.gpa ? `· GPA ${e.gpa}` : ''}
                      </div>
                    </div>
                    <GraduationCap className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Activities results */}
          {matchedActivities.length > 0 && (
            <div className="space-y-2">
              <div className="text-xs font-semibold text-purple-600 dark:text-purple-400 uppercase tracking-wider flex items-center justify-between">
                <span>{lang === 'en' ? 'Leadership & Activities' : 'Aktivitas & Kepemimpinan'}</span>
                <span className="text-[11px] text-slate-500 font-mono">
                  {matchedActivities.length} found
                </span>
              </div>
              <div className="space-y-1.5">
                {matchedActivities.map((a) => (
                  <div
                    key={a.id}
                    onClick={() => jumpTo('activities')}
                    className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950/60 hover:bg-slate-100 dark:hover:bg-slate-800/80 border border-slate-200 dark:border-slate-800/70 hover:border-purple-500/50 transition-all cursor-pointer flex items-center justify-between gap-3"
                  >
                    <div>
                      <div className="text-xs font-bold text-slate-900 dark:text-white">
                        {a.title[lang]}
                      </div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400">
                        {a.role[lang]} · {a.organization}
                      </div>
                    </div>
                    <Users className="w-4 h-4 text-purple-600 dark:text-purple-400 shrink-0" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Certifications results */}
          {matchedBadges.length > 0 && (
            <div className="space-y-2">
              <div className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider flex items-center justify-between">
                <span>{lang === 'en' ? 'Credly Badges & Certifications' : 'Lencana & Sertifikasi'}</span>
                <span className="text-[11px] text-slate-500 font-mono">
                  {matchedBadges.length} found
                </span>
              </div>
              <div className="space-y-1.5">
                {matchedBadges.map((b) => (
                  <div
                    key={b.id}
                    onClick={() => jumpTo('credentials-section')}
                    className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950/60 hover:bg-slate-100 dark:hover:bg-slate-800/80 border border-slate-200 dark:border-slate-800/70 hover:border-blue-500/50 transition-all cursor-pointer flex items-center justify-between gap-3"
                  >
                    <div>
                      <div className="text-xs font-bold text-slate-900 dark:text-white">
                        {b.title}
                      </div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400">
                        {b.issuer} · Credly ID: {b.credlyId}
                      </div>
                    </div>
                    <ShieldCheck className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Publications results */}
          {matchedPubs.length > 0 && (
            <div className="space-y-2">
              <div className="text-xs font-semibold text-amber-600 dark:text-amber-400 uppercase tracking-wider flex items-center justify-between">
                <span>{lang === 'en' ? 'Publications & Scientific Papers' : 'Publikasi & Makalah Riset'}</span>
                <span className="text-[11px] text-slate-500 font-mono">
                  {matchedPubs.length} found
                </span>
              </div>
              <div className="space-y-1.5">
                {matchedPubs.map((pub) => (
                  <div
                    key={pub.id}
                    onClick={() => jumpTo('credentials-section')}
                    className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950/60 hover:bg-slate-100 dark:hover:bg-slate-800/80 border border-slate-200 dark:border-slate-800/70 hover:border-amber-500/50 transition-all cursor-pointer flex items-center justify-between gap-3"
                  >
                    <div>
                      <div className="text-xs font-bold text-slate-900 dark:text-white">
                        {pub.title[lang]}
                      </div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400">
                        {pub.journalOrVenue} ({pub.year})
                      </div>
                    </div>
                    <BookOpen className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="p-3 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-500 font-mono">
          <span>Press ESC to exit</span>
          <span>Click any item to jump directly to section</span>
        </div>
      </div>
    </div>
  );
};
