/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Language } from './types/portfolio';
import { ThemeProvider } from './context/ThemeContext';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Education } from './components/Education';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { CredentialsAndResearch } from './components/CredentialsAndResearch';
import { Awards } from './components/Awards';
import { Activities } from './components/Activities';
import { Experience } from './components/Experience';
import { References } from './components/References';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { SpotlightSearch } from './components/SpotlightSearch';
import { QuickNavigation } from './components/QuickNavigation';
import { PdfViewerModal } from './components/ui/PdfViewerModal';
import { SectionDivider } from './components/ui/SectionDivider';
import { RecruiterQuickViewModal } from './components/RecruiterQuickViewModal';

// Shared smooth fade-in-up animation configuration for major portfolio sections
const sectionFadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-70px' },
  transition: { duration: 0.65, ease: 'easeOut' as const }
};

export default function App() {
  // Read persistent language preference from localStorage on initialization
  const [lang, setLang] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('faiz_portfolio_lang') as Language;
      if (saved === 'en' || saved === 'id') return saved;
    }
    return 'en';
  });

  const [searchOpen, setSearchOpen] = useState(false);
  const [recruiterOpen, setRecruiterOpen] = useState(false);
  const [pdfModal, setPdfModal] = useState<{
    isOpen: boolean;
    url: string;
    title: string;
    subtitle?: string;
  }>({
    isOpen: false,
    url: '',
    title: '',
    subtitle: ''
  });

  // Sync language state to localStorage and documentElement on change
  useEffect(() => {
    localStorage.setItem('faiz_portfolio_lang', lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleLang = () => {
    setLang((prev) => (prev === 'en' ? 'id' : 'en'));
  };

  const handleOpenContact = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenPdf = (url: string, title: string, subtitle?: string) => {
    setPdfModal({
      isOpen: true,
      url,
      title,
      subtitle
    });
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      const isInput = target?.tagName === 'INPUT' || target?.tagName === 'TEXTAREA' || target?.isContentEditable;

      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
      } else if (!isInput && (e.key === 'r' || e.key === 'R') && !e.metaKey && !e.ctrlKey) {
        e.preventDefault();
        setRecruiterOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col selection:bg-teal-500 selection:text-slate-950 font-sans relative transition-colors duration-300">
        {/* 1. Thin Animated Scroll Progress Bar at very top of viewport */}
        <ScrollProgressBar />

        {/* 2. Top Navigation Bar */}
        <Navbar
          lang={lang}
          onToggleLang={toggleLang}
          onOpenContact={handleOpenContact}
          onOpenSearch={() => setSearchOpen(true)}
          onOpenPdf={handleOpenPdf}
          onOpenRecruiter={() => setRecruiterOpen(true)}
        />

        {/* 3. Main Single-Page Portfolio Content */}
        <main className="flex-1">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <Hero
              lang={lang}
              onOpenContact={handleOpenContact}
              onOpenRecruiter={() => setRecruiterOpen(true)}
            />
          </motion.div>
          
          {/* About Me Section */}
          <motion.div {...sectionFadeInUp}>
            <About lang={lang} />
          </motion.div>
          
          <SectionDivider />

          {/* Dedicated Education Section (Directly after About) */}
          <motion.div {...sectionFadeInUp}>
            <Education lang={lang} onOpenPdf={handleOpenPdf} />
          </motion.div>
          
          <SectionDivider />

          {/* Skills Competency Matrix */}
          <motion.div {...sectionFadeInUp}>
            <Skills lang={lang} />
          </motion.div>
          
          <SectionDivider />

          {/* Innovations & Projects */}
          <motion.div {...sectionFadeInUp}>
            <Projects lang={lang} />
          </motion.div>
          
          <SectionDivider />

          {/* Persistent Section Filter Bar for Official Badges & Journal Repositories */}
          <motion.div {...sectionFadeInUp}>
            <CredentialsAndResearch lang={lang} onOpenPdf={handleOpenPdf} />
          </motion.div>
          
          <SectionDivider />

          {/* Competitive Awards Timeline */}
          <motion.div {...sectionFadeInUp}>
            <Awards lang={lang} onOpenPdf={handleOpenPdf} />
          </motion.div>
          
          <SectionDivider />

          {/* Highlights & Leadership Activities Section */}
          <motion.div {...sectionFadeInUp}>
            <Activities lang={lang} />
          </motion.div>
          
          <SectionDivider />

          {/* Hands-on Professional Experience */}
          <motion.div {...sectionFadeInUp}>
            <Experience lang={lang} />
          </motion.div>
          
          <SectionDivider />

          {/* Professional References & Endorsements */}
          <motion.div {...sectionFadeInUp}>
            <References lang={lang} onOpenContact={handleOpenContact} />
          </motion.div>
          
          <SectionDivider />

          {/* Contact Section */}
          <motion.div {...sectionFadeInUp}>
            <Contact lang={lang} />
          </motion.div>
        </main>

        {/* 4. Footer */}
        <Footer lang={lang} />

        {/* 5. Spotlight Search & Recruiter Shortcuts Modal (Cmd+K) */}
        <SpotlightSearch
          isOpen={searchOpen}
          onClose={() => setSearchOpen(false)}
          lang={lang}
          onOpenRecruiter={() => setRecruiterOpen(true)}
        />

        {/* 6. Floating Quick Navigation Widget */}
        <QuickNavigation
          lang={lang}
          onOpenSearch={() => setSearchOpen(true)}
          onOpenContact={handleOpenContact}
          onOpenRecruiter={() => setRecruiterOpen(true)}
        />

        {/* 7. Reusable PDF Document Modal Viewer */}
        <PdfViewerModal
          isOpen={pdfModal.isOpen}
          onClose={() => setPdfModal((prev) => ({ ...prev, isOpen: false }))}
          pdfUrl={pdfModal.url}
          title={pdfModal.title}
          subtitle={pdfModal.subtitle}
          lang={lang}
        />

        {/* 8. Recruiter Fast-Track 60-Second Executive Summary Modal (Press R) */}
        <RecruiterQuickViewModal
          isOpen={recruiterOpen}
          onClose={() => setRecruiterOpen(false)}
          lang={lang}
          onOpenPdf={handleOpenPdf}
        />
      </div>
    </ThemeProvider>
  );
}
