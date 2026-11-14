import React, { useState, useEffect } from 'react';
import { ArrowRight, Award, ShieldCheck, Download, ExternalLink, Sparkles, MapPin } from 'lucide-react';
import { motion } from 'motion/react';
import { Language } from '../types/portfolio';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  lang: Language;
  onOpenContact: () => void;
  onOpenRecruiter?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ lang, onOpenContact, onOpenRecruiter }) => {
  const titles = [
    'Data Analytics Enthusiast',
    'Certified Power BI Data Analyst',
    'Best Talent Indonesia Next'
  ];

  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = titles[currentTitleIndex];
    const typingSpeed = isDeleting ? 40 : 80;
    const pauseDuration = 2200;

    let timer: NodeJS.Timeout;

    if (!isDeleting && displayText === fullText) {
      timer = setTimeout(() => setIsDeleting(true), pauseDuration);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
    } else {
      timer = setTimeout(() => {
        setDisplayText((prev) =>
          isDeleting ? fullText.substring(0, prev.length - 1) : fullText.substring(0, prev.length + 1)
        );
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentTitleIndex]);

  return (
    <section className="relative pt-32 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
      {/* Background radial gradient glow (subtle deep blue & teal ambience) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-teal-500/10 dark:bg-teal-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-20 right-10 w-[400px] h-[400px] bg-blue-600/10 dark:bg-blue-600/10 blur-[110px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Split-Screen Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Typographic Hierarchy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Unboxed Metadata Kicker */}
            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400">
              <span className="flex items-center gap-1.5 text-teal-600 dark:text-teal-400 font-semibold">
                <MapPin className="w-3.5 h-3.5" />
                <span>{PERSONAL_INFO.location}</span>
              </span>
              <span aria-hidden="true" className="text-slate-300 dark:text-slate-600">·</span>
              <span>Universitas Brawijaya Alumni</span>
              <span aria-hidden="true" className="text-slate-300 dark:text-slate-600">·</span>
              <span className="text-slate-800 dark:text-slate-300 font-semibold">GPA 3.94 / 4.00</span>
            </div>

            {/* Name Headline */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white text-balance leading-[1.1]">
                {PERSONAL_INFO.name}
              </h1>

              {/* Dynamic Typing Subtitle */}
              <div className="mt-3 flex items-center min-h-[44px]">
                <span className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-teal-600 via-teal-500 to-blue-600 dark:from-teal-400 dark:via-teal-200 dark:to-blue-400 bg-clip-text text-transparent">
                  {displayText}
                </span>
                <span className="inline-block w-0.5 h-7 bg-teal-500 dark:bg-teal-400 ml-1.5 animate-pulse" />
              </div>
            </div>

            {/* Lead Narrative */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
              {lang === 'en'
                ? 'Dedicated data analytics practitioner bridging the gap between rigorous marine sciences and modern enterprise business intelligence. Proficient in Power BI, SQL, Python, and Azure, turning complex raw metrics into actionable executive decisions.'
                : 'Praktisi analitik data yang menghubungkan ketelitian sains kelautan dengan kecerdasan bisnis perusahaan modern. Berpengalaman dalam Power BI, SQL, Python, dan Azure untuk mengubah data mentah menjadi keputusan eksekutif bernilai tinggi.'}
            </p>

            {/* Credential highlights */}
            <div className="flex flex-wrap items-center gap-3 pt-1 text-xs text-slate-600 dark:text-slate-400">
              <span className="flex items-center gap-1.5 text-slate-800 dark:text-slate-300 font-medium">
                <ShieldCheck className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0" />
                <span>Microsoft PL-300 Certified</span>
              </span>
              <span aria-hidden="true" className="text-slate-300 dark:text-slate-600">·</span>
              <span className="flex items-center gap-1.5 text-slate-800 dark:text-slate-300 font-medium">
                <Award className="w-4 h-4 text-amber-500 dark:text-amber-400 shrink-0" />
                <span>National Gold Medalist (Puspresnas)</span>
              </span>
              <span aria-hidden="true" className="text-slate-300 dark:text-slate-600">·</span>
              <span className="flex items-center gap-1.5 text-slate-800 dark:text-slate-300 font-medium">
                <Sparkles className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0" />
                <span>AWS Certified Cloud Practitioner</span>
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-semibold text-sm transition-all shadow-md shadow-teal-500/20 hover:shadow-teal-500/35 hover:-translate-y-0.5"
              >
                <span>{lang === 'en' ? 'Explore Featured Projects' : 'Lihat Proyek Pilihan'}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.cvPath}
                target="_blank"
                rel="noreferrer"
                download="CV_Faiz_Ni_matul_Haq.pdf"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl border border-slate-300 dark:border-slate-700/80 hover:border-slate-400 dark:hover:border-slate-500 bg-white dark:bg-slate-900/80 text-slate-700 dark:text-slate-200 hover:text-slate-950 dark:hover:text-white font-medium text-sm transition-all shadow-sm hover:-translate-y-0.5"
              >
                <Download className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                <span>{lang === 'en' ? 'Download CV' : 'Unduh CV'}</span>
              </a>

              <button
                onClick={onOpenContact}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl border border-slate-300 dark:border-slate-800 hover:border-teal-500/60 bg-transparent hover:bg-slate-100 dark:hover:bg-slate-900/60 text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white font-medium text-sm transition-all cursor-pointer"
              >
                <span>{lang === 'en' ? 'Contact Directly' : 'Hubungi Langsung'}</span>
              </button>
            </div>

            {/* Recruiter Fast-Track Executive Banner */}
            {onOpenRecruiter && (
              <div className="pt-2">
                <button
                  type="button"
                  onClick={onOpenRecruiter}
                  className="w-full sm:w-auto p-3.5 sm:px-5 sm:py-3.5 rounded-2xl bg-gradient-to-r from-teal-500/10 via-blue-500/10 to-teal-500/5 hover:from-teal-500/20 hover:via-blue-500/20 hover:to-teal-500/15 border border-teal-500/30 hover:border-teal-500/60 flex items-center justify-between gap-4 text-left transition-all cursor-pointer group shadow-sm hover:shadow-md"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-teal-500/20 text-teal-600 dark:text-teal-300 flex items-center justify-center font-bold text-sm shrink-0 border border-teal-500/30">
                      ⚡
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-2">
                        <span>{lang === 'en' ? 'Recruiter or Hiring Team?' : 'Sedang Merekrut Talenta Data?'}</span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-teal-500/20 text-teal-700 dark:text-teal-300 font-bold border border-teal-500/30">
                          60s Fast-Track
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                        {lang === 'en'
                          ? 'Open 1-page candidate executive summary: PL-300, 3.94 GPA, Puspresnas gold medal & instant outreach.'
                          : 'Buka ikhtisar eksekutif 1 halaman: sertifikasi PL-300, IPK 3.94, medali emas & kontak langsung.'}
                      </p>
                    </div>
                  </div>
                  <span className="hidden sm:inline-flex items-center gap-1 text-xs font-bold text-teal-600 dark:text-teal-400 group-hover:translate-x-1 transition-transform shrink-0">
                    <span>{lang === 'en' ? 'Open Snapshot' : 'Buka'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </button>
              </div>
            )}
          </motion.div>

          {/* Right Column: High-Fidelity Photo Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-md">
              {/* Outer Glow Halo */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-teal-500/20 to-blue-600/20 rounded-3xl blur-xl opacity-70 group-hover:opacity-100 transition-opacity" />

              {/* Main Card Frame */}
              <div className="relative rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl">
                {/* Photo */}
                <div className="relative aspect-square overflow-hidden bg-slate-100 dark:bg-slate-950">
                  <img
                    src={PERSONAL_INFO.heroPortrait}
                    alt="Faiz Ni'matul Haq - Data Analyst & Innovator"
                    className="w-full h-full object-cover object-top hover:scale-102 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-75" />

                  {/* Overlaid Badge: PL-300 */}
                  <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-2xl bg-white/95 dark:bg-slate-950/85 backdrop-blur-md border border-slate-200 dark:border-slate-800 shadow-lg flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-600 dark:text-teal-400 shrink-0">
                        <ShieldCheck className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900 dark:text-white tracking-tight">
                          Certified Power BI Analyst
                        </div>
                        <div className="text-[11px] text-teal-600 dark:text-teal-400 font-mono">
                          Microsoft PL-300 Validated
                        </div>
                      </div>
                    </div>
                    <a
                      href={PERSONAL_INFO.credly}
                      target="_blank"
                      rel="noreferrer"
                      className="p-1.5 rounded-lg text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                      title="Verify on Credly"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Sub-Card Details */}
                <div className="p-4 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between text-xs text-slate-700 dark:text-slate-300">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-teal-500" />
                    <span>Available for Analytical Roles & Consulting</span>
                  </span>
                  <span className="font-mono text-slate-500 dark:text-slate-400">Cirebon / Remote</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Full-Width Quantitative KPI Strip Below Split with Staggered Motion */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 lg:mt-20 pt-8 border-t border-slate-200 dark:border-slate-800/80"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            <div className="p-4 rounded-2xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700 transition-colors shadow-sm">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white font-mono tabular-nums">
                3.94<span className="text-sm font-normal text-slate-500 dark:text-slate-400">/4.00</span>
              </div>
              <div className="mt-1 text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300">
                {lang === 'en' ? 'Summa Cum Laude GPA' : 'IPK Kelulusan Terbaik'}
              </div>
              <div className="text-[11px] text-slate-500 mt-0.5">
                Universitas Brawijaya
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700 transition-colors shadow-sm">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-teal-600 dark:text-teal-400 font-mono tabular-nums">
                11+
              </div>
              <div className="mt-1 text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300">
                {lang === 'en' ? 'Verified Certifications' : 'Sertifikasi Global Credly'}
              </div>
              <div className="text-[11px] text-slate-500 mt-0.5">
                Microsoft, AWS, PMI & Adobe
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700 transition-colors shadow-sm">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-amber-500 dark:text-amber-400 font-mono tabular-nums">
                8+
              </div>
              <div className="mt-1 text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300">
                {lang === 'en' ? 'National Awards & Medals' : 'Medali & Juara Nasional'}
              </div>
              <div className="text-[11px] text-slate-500 mt-0.5">
                Puspresnas, Kemdikbud, Telkomsel
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700 transition-colors shadow-sm">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-blue-600 dark:text-blue-400 font-mono tabular-nums">
                100%
              </div>
              <div className="mt-1 text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300">
                {lang === 'en' ? 'Analytical Rigor' : 'Presisi Data & Kualitas'}
              </div>
              <div className="text-[11px] text-slate-500 mt-0.5">
                End-to-end Data Execution
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
