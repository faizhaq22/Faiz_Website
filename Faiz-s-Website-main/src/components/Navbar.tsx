import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, Download, Mail, Search, Sun, Moon, FileText, Printer } from 'lucide-react';
import { Language } from '../types/portfolio';
import { PERSONAL_INFO } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';
import { LanguageTracker } from './ui/LanguageTracker';

interface NavbarProps {
  lang: Language;
  onToggleLang: () => void;
  onOpenContact: () => void;
  onOpenSearch: () => void;
  onOpenPdf?: (url: string, title: string, subtitle?: string) => void;
  onOpenRecruiter?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  lang,
  onToggleLang,
  onOpenContact,
  onOpenSearch,
  onOpenPdf,
  onOpenRecruiter
}) => {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: lang === 'en' ? 'About' : 'Tentang' },
    { href: '#education', label: lang === 'en' ? 'Education' : 'Pendidikan' },
    { href: '#skills', label: lang === 'en' ? 'Skills' : 'Keahlian' },
    { href: '#projects', label: lang === 'en' ? 'Projects' : 'Proyek' },
    { href: '#credentials-section', label: lang === 'en' ? 'Credentials & Research' : 'Sertifikasi & Riset' },
    { href: '#awards', label: lang === 'en' ? 'Awards' : 'Penghargaan' },
    { href: '#activities', label: lang === 'en' ? 'Activities' : 'Aktivitas' },
    { href: '#experience', label: lang === 'en' ? 'Experience' : 'Pengalaman' },
    { href: '#references', label: lang === 'en' ? 'References' : 'Referensi' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 dark:bg-slate-950/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800/80 shadow-md shadow-black/5 dark:shadow-black/20'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-6">
        {/* Zone 1: Brand Wordmark */}
        <a
          href="#"
          className="flex items-center gap-3 text-lg font-bold tracking-tight text-slate-900 dark:text-white whitespace-nowrap shrink-0 group"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-500 to-blue-600 flex items-center justify-center text-white font-black text-lg shadow-md shadow-teal-500/20 group-hover:scale-105 transition-transform">
            FN
          </div>
          <span className="font-semibold tracking-tight text-slate-900 dark:text-slate-100 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors hidden sm:inline">
            {PERSONAL_INFO.name}
          </span>
        </a>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden xl:flex items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-300">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors whitespace-nowrap shrink-0 py-1"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Actions & Search & Theme & Language Switcher */}
        <div className="flex items-center gap-2 shrink-0">
          {/* Light/Dark Theme Switcher */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg border border-slate-300 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-700 bg-slate-100 dark:bg-slate-900/80 text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white transition-all cursor-pointer"
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-slate-700" />
            )}
          </button>

          {/* Spotlight Search Trigger */}
          <button
            onClick={onOpenSearch}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-300 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-700 bg-slate-100 dark:bg-slate-900/70 text-xs text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-all cursor-pointer"
            title="Search portfolio (Ctrl+K)"
          >
            <Search className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
            <span className="hidden md:inline font-mono text-[11px] text-slate-500">⌘K</span>
          </button>

          {/* Language Preference Tracker (Persists in localStorage) */}
          <LanguageTracker currentLang={lang} onToggle={onToggleLang} />

          {/* Recruiter Fast-Track Quick-View Button */}
          {onOpenRecruiter && (
            <button
              onClick={onOpenRecruiter}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-teal-500/15 via-blue-500/15 to-teal-500/15 hover:from-teal-500/25 hover:to-blue-500/25 border border-teal-500/40 text-teal-700 dark:text-teal-300 hover:text-slate-950 dark:hover:text-white font-bold text-xs transition-all shadow-sm cursor-pointer whitespace-nowrap group"
              title={lang === 'en' ? 'Open 60-Second Recruiter Summary (Press R)' : 'Buka Ringkasan Perekrut (Tekan R)'}
            >
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
              </span>
              <span className="tracking-tight">{lang === 'en' ? 'Recruiter View' : 'Mode Rekrut'}</span>
            </button>
          )}

          {/* Preview / Download Resume CV Button */}
          {onOpenPdf ? (
            <button
              onClick={() => onOpenPdf(PERSONAL_INFO.cvPath, `Curriculum Vitae - ${PERSONAL_INFO.name}`, 'Verified Professional Resume (PDF)')}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-300 dark:border-slate-700/80 hover:border-teal-500/60 bg-white dark:bg-slate-900/90 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:text-teal-600 dark:hover:text-white transition-all shadow-sm whitespace-nowrap cursor-pointer"
              title={lang === 'en' ? 'Preview CV in PDF Viewer' : 'Buka CV di Penampil PDF'}
            >
              <FileText className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
              <span>{lang === 'en' ? 'Resume' : 'CV'}</span>
            </button>
          ) : (
            <a
              href={PERSONAL_INFO.cvPath}
              download="CV_Faiz_Ni_matul_Haq.pdf"
              className="hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700/80 hover:border-teal-500/60 bg-white dark:bg-slate-900/90 text-xs font-medium text-slate-700 dark:text-slate-200 hover:text-teal-600 dark:hover:text-white transition-all shadow-sm whitespace-nowrap"
            >
              <Download className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
              <span>{lang === 'en' ? 'Resume' : 'CV'}</span>
            </a>
          )}

          {/* Download Full Portfolio (Print to PDF) Button */}
          <button
            onClick={() => window.print()}
            className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-300 dark:border-slate-700/80 hover:border-teal-500/60 bg-white dark:bg-slate-900/90 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:text-teal-600 dark:hover:text-white transition-all shadow-sm whitespace-nowrap cursor-pointer group"
            title={lang === 'en' ? 'Print or Save Full Portfolio as Professional PDF' : 'Cetak atau Simpan Portofolio Lengkap sebagai PDF'}
          >
            <Printer className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400 group-hover:scale-110 transition-transform" />
            <span>{lang === 'en' ? 'Download Full Portfolio' : 'Unduh Portofolio PDF'}</span>
          </button>

          {/* Contact CTA */}
          <button
            onClick={onOpenContact}
            className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-teal-500 hover:bg-teal-400 text-slate-950 font-semibold text-xs transition-all shadow-md shadow-teal-500/20 hover:shadow-teal-500/30 whitespace-nowrap cursor-pointer"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>{lang === 'en' ? 'Contact' : 'Kontak'}</span>
          </button>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-lg border border-slate-300 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 px-6 py-6 space-y-4">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-slate-700 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 font-medium py-1 text-base transition-colors"
              >
                {link.label}
              </a>
            ))}

            {onOpenRecruiter && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenRecruiter();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-teal-500/15 to-blue-500/15 border border-teal-500/40 text-teal-700 dark:text-teal-300 font-bold text-sm shadow-sm cursor-pointer"
              >
                <span>⚡</span>
                <span>{lang === 'en' ? 'Open Recruiter Summary (60s)' : 'Buka Ringkasan Rekrut (60d)'}</span>
              </button>
            )}

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setTimeout(() => window.print(), 200);
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 font-semibold text-sm shadow-sm cursor-pointer hover:border-teal-500"
            >
              <Printer className="w-4 h-4 text-teal-500" />
              <span>{lang === 'en' ? 'Download Full Portfolio (PDF)' : 'Unduh Portofolio Lengkap (PDF)'}</span>
            </button>
          </nav>
          <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between gap-3">
            <button
              onClick={toggleTheme}
              className="flex items-center gap-2 px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 text-xs font-semibold text-slate-700 dark:text-slate-300"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
              <span>{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
            </button>
            <a
              href={PERSONAL_INFO.cvPath}
              download="CV_Faiz_Ni_matul_Haq.pdf"
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-teal-500 text-slate-950 text-xs font-semibold"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download CV</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
