import React from 'react';
import { Quote, CheckCircle2, Building, ShieldCheck, Mail, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';
import { Language } from '../types/portfolio';
import { REFERENCES } from '../data/portfolioData';
import { HashHeading } from './ui/HashHeading';

interface ReferencesProps {
  lang: Language;
  onOpenContact: () => void;
}

export const References: React.FC<ReferencesProps> = ({ lang, onOpenContact }) => {
  return (
    <section id="references" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Motion */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div className="max-w-2xl">
            <div className="text-xs font-semibold text-teal-600 dark:text-teal-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>{lang === 'en' ? 'Verifiable Endorsements' : 'Referensi & Rekomendasi Terverifikasi'}</span>
            </div>
            <HashHeading
              id="references"
              title={
                lang === 'en'
                  ? 'Professional References & Industry Testimonials'
                  : 'Referensi Profesional & Rekomendasi Kerja'
              }
            />
            <p className="mt-3 text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              {lang === 'en'
                ? 'Direct testimonials and professional references from managers, academic advisors, and program directors who have supervised Faiz\'s analytical rigor.'
                : 'Testimoni langsung dari manajer perusahaan, dosen pembimbing skripsi, dan direktur program yang telah memverifikasi kinerja analitik Faiz.'}
            </p>
          </div>

          <div className="shrink-0">
            <button
              onClick={onOpenContact}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700/80 hover:border-teal-500/60 bg-white dark:bg-slate-900/90 text-xs font-semibold text-teal-600 dark:text-teal-300 hover:text-teal-700 dark:hover:text-white transition-all cursor-pointer shadow-sm"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>{lang === 'en' ? 'Request Contact Details' : 'Hubungi Referensi'}</span>
            </button>
          </div>
        </motion.div>

        {/* References 2x2 Grid with Motion */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {REFERENCES.map((ref, idx) => (
            <motion.div
              key={ref.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700 transition-colors flex flex-col justify-between space-y-6 shadow-md hover:shadow-xl hover:shadow-teal-500/5 group"
            >
              <div className="space-y-4">
                {/* Header Quote Icon & Verified Indicator */}
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-xl bg-teal-500/10 border border-teal-500/20 text-teal-600 dark:text-teal-400">
                    <Quote className="w-5 h-5" />
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-teal-500/10 border border-teal-500/30 text-teal-700 dark:text-teal-300 text-xs font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
                    <span>{lang === 'en' ? 'Verified Referee' : 'Referensi Terverifikasi'}</span>
                  </div>
                </div>

                {/* Quote Text */}
                <p className="text-sm sm:text-base text-slate-700 dark:text-slate-200 leading-relaxed italic">
                  "{ref.quote[lang]}"
                </p>
              </div>

              {/* Referee Bio Footer */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center gap-4">
                {/* Initial Avatar */}
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-teal-500/20 to-blue-600/30 border border-teal-500/30 flex items-center justify-center text-teal-700 dark:text-teal-300 font-bold text-base shrink-0 shadow-sm">
                  {ref.avatarInitial}
                </div>

                <div className="overflow-hidden">
                  <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white tracking-tight truncate">
                    {ref.name}
                  </h4>
                  <div className="text-xs font-medium text-teal-600 dark:text-teal-400 truncate mt-0.5">
                    {ref.role[lang]}
                  </div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 flex items-center gap-1 mt-0.5 truncate">
                    <Building className="w-3 h-3 text-slate-400 dark:text-slate-500 shrink-0" />
                    <span className="truncate">{ref.organization}</span>
                  </div>
                  <div className="text-[10px] text-slate-400 dark:text-slate-500 font-mono mt-1 truncate">
                    {ref.relationship[lang]}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
