import React, { useState } from 'react';
import { User, Sparkles, Heart, Compass, ShieldCheck, Database, Target, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Language } from '../types/portfolio';
import { TRANSITION_STORY } from '../data/portfolioData';
import { HashHeading } from './ui/HashHeading';

interface AboutProps {
  lang: Language;
}

export const About: React.FC<AboutProps> = ({ lang }) => {
  const story = TRANSITION_STORY[lang];

  return (
    <section id="about" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Motion */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl space-y-4"
        >
          <div className="text-xs font-semibold text-teal-600 dark:text-teal-400 uppercase tracking-wider flex items-center gap-1.5">
            <User className="w-4 h-4" />
            <span>{lang === 'en' ? 'About Me' : 'Tentang Saya'}</span>
          </div>
          <HashHeading
            id="about"
            title={
              lang === 'en'
                ? 'Translating Complex Datasets into Clear Human Decisions'
                : 'Mengubah Kompleksitas Data Menjadi Keputusan Bisnis Nyata'
            }
          />
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            {story.lead}
          </p>
        </motion.div>

        {/* 3 Transition Pillars with Motion */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {story.keyPillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="p-6 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700 transition-colors shadow-sm"
            >
              <div className="text-2xl font-bold font-mono text-teal-600 dark:text-teal-400 tabular-nums">
                {pillar.stat}
              </div>
              <h3 className="mt-2 text-lg font-bold text-slate-900 dark:text-white tracking-tight">
                {pillar.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {pillar.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Detailed Narrative & Personal Philosophy Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left: Narrative Paragraphs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base"
          >
            {story.paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}

            <div className="pt-4 border-t border-slate-200 dark:border-slate-800/80">
              <h4 className="text-xs font-semibold text-slate-900 dark:text-white uppercase tracking-wider mb-3">
                {lang === 'en' ? 'What Drives My Work' : 'Prinsip Kerja & Nilai Utama'}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800/60">
                  <div className="font-semibold text-xs text-teal-600 dark:text-teal-400 flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>{lang === 'en' ? 'Uncompromising Data Hygiene' : 'Kerapian Data Mutlak'}</span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                    {lang === 'en'
                      ? 'Garbage in, garbage out. Accurate decision-making requires immaculate pipeline validation.'
                      : 'Data bersih adalah kunci. Setiap model analitis harus memiliki landasan pipeline yang tervalidasi.'}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800/60">
                  <div className="font-semibold text-xs text-blue-600 dark:text-blue-400 flex items-center gap-1.5">
                    <Target className="w-3.5 h-3.5" />
                    <span>{lang === 'en' ? 'Business Actionability' : 'Dampak Nyata Bisnis'}</span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                    {lang === 'en'
                      ? 'Dashboards must answer "So what?" and directly steer strategic executive action.'
                      : 'Visualisasi harus menjawab "Lalu apa langkahnya?", memberikan kejelasan arah strategis.'}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Personal Snapshot Infographic Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 p-6 rounded-3xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 space-y-6 shadow-xl"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-teal-600 dark:text-teal-400 uppercase tracking-wider">
                {lang === 'en' ? 'Quick Persona Snapshot' : 'Ringkasan Profil'}
              </span>
              <Sparkles className="w-4 h-4 text-amber-500" />
            </div>

            <div className="space-y-4 text-xs">
              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800/60 flex items-start gap-3">
                <Compass className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-900 dark:text-white">
                    {lang === 'en' ? 'Background Pivot' : 'Arah Karir'}
                  </span>
                  <p className="text-slate-600 dark:text-slate-400 mt-0.5">
                    {lang === 'en'
                      ? 'Marine Science (Summa Cum Laude, GPA 3.94) → Business Intelligence & Enterprise Analytics.'
                      : 'Ilmu Kelautan (Summa Cum Laude, IPK 3.94) → Business Intelligence & Analisis Data Perusahaan.'}
                  </p>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800/60 flex items-start gap-3">
                <Database className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-900 dark:text-white">
                    {lang === 'en' ? 'Core Tech Stack' : 'Keahlian Utama'}
                  </span>
                  <p className="text-slate-600 dark:text-slate-400 mt-0.5">
                    Microsoft Power BI (PL-300), Advanced DAX, SQL, Python, Excel Modeling, Star-Schema Design.
                  </p>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800/60 flex items-start gap-3">
                <Heart className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-900 dark:text-white">
                    {lang === 'en' ? 'Passions & Community' : 'Minat & Komunitas'}
                  </span>
                  <p className="text-slate-600 dark:text-slate-400 mt-0.5">
                    {lang === 'en'
                      ? 'Mentoring young analysts, sustainable ocean data, competitive innovation hackathons.'
                      : 'Mementori analis muda, kelestarian data kelautan, kompetisi inovasi teknologi.'}
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="#education"
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-teal-500 hover:text-slate-950 text-slate-800 dark:text-slate-200 text-xs font-semibold border border-slate-200 dark:border-slate-700 transition-colors"
              >
                <span>{lang === 'en' ? 'Explore Academic Background' : 'Lihat Riwayat Pendidikan'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
