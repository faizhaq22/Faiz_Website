import React, { useState } from 'react';
import {
  X,
  Sparkles,
  Download,
  Mail,
  Copy,
  Check,
  ExternalLink,
  ShieldCheck,
  Award,
  GraduationCap,
  Briefcase,
  Eye,
  ArrowRight,
  MessageCircle,
  FileText,
  MapPin,
  Clock,
  Languages,
  CheckCircle2,
  Terminal,
  BarChart3
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Language } from '../types/portfolio';
import { PERSONAL_INFO } from '../data/portfolioData';

interface RecruiterQuickViewModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  onOpenPdf?: (url: string, title: string, subtitle?: string) => void;
}

export const RecruiterQuickViewModal: React.FC<RecruiterQuickViewModalProps> = ({
  isOpen,
  onClose,
  lang,
  onOpenPdf,
}) => {
  const [copiedIntro, setCopiedIntro] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [activeTab, setActiveTab] = useState<'overview' | 'skills' | 'contact'>('overview');

  if (!isOpen) return null;

  const recruiterSummaryText = `Candidate: Faiz Ni'matul Haq
Role Fit: Data Analyst / Business Intelligence Developer / Data Specialist
Key Credentials:
- Microsoft Certified: Power BI Data Analyst Associate (PL-300)
- AWS Certified Cloud Practitioner & PMI Project Management Ready
- Summa Cum Laude Graduate, Universitas Brawijaya (GPA: 3.94 / 4.00)
- 1st Place Gold Medalist KKCTBN (Puspresnas - Kemendikbudristek RI)
- Best Talent Indonesia Next (Telkomsel CSR, Seasons 6 & 7)
Core Stack: Power BI, DAX, Python (Pandas/Scikit-learn), SQL (PostgreSQL), Azure, QGIS
Email: ${PERSONAL_INFO.email}
LinkedIn: ${PERSONAL_INFO.linkedin}
Portfolio: https://ais-pre-ngqen6braqj67l5cxxxufm-477853820676.europe-west2.run.app`;

  const handleCopyIntro = () => {
    navigator.clipboard.writeText(recruiterSummaryText);
    setCopiedIntro(true);
    setTimeout(() => setCopiedIntro(false), 2500);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleJumpTo = (sectionId: string) => {
    onClose();
    setTimeout(() => {
      const elem = document.getElementById(sectionId);
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth' });
      }
    }, 150);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 16 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="relative w-full max-w-3xl rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden z-10 my-auto flex flex-col max-h-[90vh]"
        >
          {/* Header Banner */}
          <div className="relative px-6 py-5 bg-gradient-to-r from-teal-500/15 via-blue-600/10 to-teal-500/5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-teal-500 to-cyan-400 flex items-center justify-center text-slate-950 shadow-md shadow-teal-500/25">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-widest text-teal-600 dark:text-teal-400 font-mono">
                    {lang === 'en' ? 'Recruiter Fast-Track' : 'Ringkasan Perekrut'}
                  </span>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-teal-500/20 text-teal-700 dark:text-teal-300 border border-teal-500/30">
                    60s Snapshot
                  </span>
                </div>
                <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                  {lang === 'en' ? 'Executive Candidate Summary' : 'Ringkasan Eksekutif Kandidat'}
                </h2>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
              aria-label="Close Recruiter Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Sub-Tabs */}
          <div className="px-6 pt-3 border-b border-slate-200 dark:border-slate-800 flex items-center gap-2 text-xs font-semibold">
            <button
              onClick={() => setActiveTab('overview')}
              className={`pb-2.5 px-3 border-b-2 transition-all cursor-pointer ${
                activeTab === 'overview'
                  ? 'border-teal-500 text-teal-600 dark:text-teal-400'
                  : 'border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              {lang === 'en' ? '1. Candidate Overview' : '1. Ikhtisar Kandidat'}
            </button>
            <button
              onClick={() => setActiveTab('skills')}
              className={`pb-2.5 px-3 border-b-2 transition-all cursor-pointer ${
                activeTab === 'skills'
                  ? 'border-teal-500 text-teal-600 dark:text-teal-400'
                  : 'border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              {lang === 'en' ? '2. Core Stack & Fit' : '2. Keahlian & Kecocokan'}
            </button>
            <button
              onClick={() => setActiveTab('contact')}
              className={`pb-2.5 px-3 border-b-2 transition-all cursor-pointer ${
                activeTab === 'contact'
                  ? 'border-teal-500 text-teal-600 dark:text-teal-400'
                  : 'border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              {lang === 'en' ? '3. Outreach & Next Steps' : '3. Kontak & Tindak Lanjut'}
            </button>
          </div>

          {/* Scrollable Modal Content */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6 text-sm text-slate-700 dark:text-slate-300">
            {activeTab === 'overview' && (
              <>
                {/* Candidate Badge Card */}
                <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <img
                      src={PERSONAL_INFO.heroPortrait}
                      alt={PERSONAL_INFO.name}
                      className="w-16 h-16 rounded-2xl object-cover object-top border-2 border-teal-500/40 shadow-md shrink-0"
                    />
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                          {PERSONAL_INFO.name}
                        </h3>
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                          {lang === 'en' ? 'Open to Work' : 'Tersedia untuk Rekrutmen'}
                        </span>
                      </div>
                      <div className="text-xs font-semibold text-teal-600 dark:text-teal-400">
                        Certified Power BI Analyst (PL-300) · Marine Science B.Sc. (GPA 3.94)
                      </div>
                      <div className="flex flex-wrap items-center gap-3 text-[11px] text-slate-500 dark:text-slate-400 mt-1.5">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-slate-400" />
                          {PERSONAL_INFO.location} · Remote / Relocation Open
                        </span>
                        <span>·</span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3 text-slate-400" />
                          Immediate / 1 Month Notice
                        </span>
                        <span>·</span>
                        <span className="flex items-center gap-1">
                          <Languages className="w-3 h-3 text-slate-400" />
                          EN (Proficient) / ID (Native)
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex sm:flex-col items-center gap-2 w-full sm:w-auto shrink-0">
                    {onOpenPdf ? (
                      <button
                        onClick={() => {
                          onClose();
                          onOpenPdf(
                            PERSONAL_INFO.cvPath,
                            `Curriculum Vitae - ${PERSONAL_INFO.name}`,
                            'Verified Professional Resume (PDF)'
                          );
                        }}
                        className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs transition-all shadow-sm cursor-pointer whitespace-nowrap"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>{lang === 'en' ? 'View CV' : 'Lihat CV'}</span>
                      </button>
                    ) : (
                      <a
                        href={PERSONAL_INFO.cvPath}
                        download="CV_Faiz_Ni_matul_Haq.pdf"
                        className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs transition-all shadow-sm whitespace-nowrap"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>{lang === 'en' ? 'Download CV' : 'Unduh CV'}</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* 4 Key Proof Points */}
                <div className="space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    {lang === 'en' ? 'Top Standout Proof Points' : 'Keunggulan Utama Kandidat'}
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {/* Item 1 */}
                    <div className="p-3.5 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex items-start gap-3">
                      <div className="p-2 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 shrink-0">
                        <ShieldCheck className="w-4 h-4" />
                      </div>
                      <div className="space-y-0.5">
                        <div className="text-xs font-bold text-slate-900 dark:text-white">
                          Microsoft PL-300 Certified
                        </div>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">
                          Expertise in star-schema data modeling, DAX formula design, and enterprise report governance.
                        </p>
                      </div>
                    </div>

                    {/* Item 2 */}
                    <div className="p-3.5 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex items-start gap-3">
                      <div className="p-2 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 shrink-0">
                        <GraduationCap className="w-4 h-4" />
                      </div>
                      <div className="space-y-0.5">
                        <div className="text-xs font-bold text-slate-900 dark:text-white">
                          Summa Cum Laude (GPA 3.94)
                        </div>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">
                          Universitas Brawijaya Marine Science with heavy coursework in Spatial Statistics & Python.
                        </p>
                      </div>
                    </div>

                    {/* Item 3 */}
                    <div className="p-3.5 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex items-start gap-3">
                      <div className="p-2 rounded-xl bg-teal-500/10 text-teal-600 dark:text-teal-400 shrink-0">
                        <Award className="w-4 h-4" />
                      </div>
                      <div className="space-y-0.5">
                        <div className="text-xs font-bold text-slate-900 dark:text-white">
                          National Gold Medalist
                        </div>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">
                          Puspresnas Kemendikbudristek 1st Place for autonomous marine craft with AR radar.
                        </p>
                      </div>
                    </div>

                    {/* Item 4 */}
                    <div className="p-3.5 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex items-start gap-3">
                      <div className="p-2 rounded-xl bg-rose-500/10 text-rose-600 dark:text-rose-400 shrink-0">
                        <Sparkles className="w-4 h-4" />
                      </div>
                      <div className="space-y-0.5">
                        <div className="text-xs font-bold text-slate-900 dark:text-white">
                          Telkomsel Best Talent (S6 & S7)
                        </div>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">
                          Consecutively recognized top talent across 10,000+ national candidates in analytics & pitch.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Target Role Alignment */}
                <div className="space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    {lang === 'en' ? 'Target Roles & Immediate Fit' : 'Target Peran & Keselarasan'}
                  </h4>
                  <div className="flex flex-wrap gap-2 text-xs">
                    {[
                      'Data Analyst / Senior Data Analyst',
                      'Business Intelligence (BI) Developer',
                      'Power BI Specialist / Consultant',
                      'Data & Insights Specialist',
                      'Geospatial / GIS Data Analyst',
                      'Research & Operations Analyst'
                    ].map((role) => (
                      <span
                        key={role}
                        className="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800/90 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 font-medium"
                      >
                        ✓ {role}
                      </span>
                    ))}
                  </div>
                </div>
              </>
            )}

            {activeTab === 'skills' && (
              <div className="space-y-5">
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                  <h4 className="text-xs font-bold text-teal-600 dark:text-teal-400 uppercase tracking-wider mb-2">
                    Verified Technical Stack
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                        <BarChart3 className="w-3.5 h-3.5 text-teal-500" />
                        <span>Business Intelligence & Analytics</span>
                      </div>
                      <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-1">
                        <li>• <strong>Microsoft Power BI:</strong> Advanced DAX, star schema, RLS, incremental refresh</li>
                        <li>• <strong>Excel Expert:</strong> Dynamic arrays, Power Query, VBA automation</li>
                        <li>• <strong>Data Storytelling:</strong> Executive dashboarding, KPI alignment</li>
                      </ul>
                    </div>

                    <div className="space-y-2">
                      <div className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                        <Terminal className="w-3.5 h-3.5 text-blue-500" />
                        <span>Data Engineering & Programming</span>
                      </div>
                      <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-1">
                        <li>• <strong>SQL:</strong> Complex joins, window functions, CTEs, PostgreSQL</li>
                        <li>• <strong>Python:</strong> Pandas, NumPy, Scikit-learn, Seaborn, time-series</li>
                        <li>• <strong>Spatial GIS:</strong> QGIS, ArcGIS, satellite telemetry, raster analysis</li>
                        <li>• <strong>Cloud & Infra:</strong> AWS CCP certified, Azure AZ-900/DP-900</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Evidence Links */}
                <div className="space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    {lang === 'en' ? 'Direct Evidence & Portfolio Proof' : 'Bukti Portofolio Langsung'}
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    <button
                      onClick={() => handleJumpTo('projects')}
                      className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-teal-500 text-left bg-white dark:bg-slate-950 transition-all cursor-pointer group"
                    >
                      <div className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-teal-500 flex items-center justify-between">
                        <span>Projects</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                      <div className="text-[11px] text-slate-500">6 Enterprise Case Studies</div>
                    </button>

                    <button
                      onClick={() => handleJumpTo('certifications')}
                      className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-teal-500 text-left bg-white dark:bg-slate-950 transition-all cursor-pointer group"
                    >
                      <div className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-teal-500 flex items-center justify-between">
                        <span>Credly Badges</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                      <div className="text-[11px] text-slate-500">11 Verified Badges</div>
                    </button>

                    <button
                      onClick={() => handleJumpTo('awards')}
                      className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-teal-500 text-left bg-white dark:bg-slate-950 transition-all cursor-pointer group"
                    >
                      <div className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-teal-500 flex items-center justify-between">
                        <span>Awards</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                      <div className="text-[11px] text-slate-500">10 National Distinctions</div>
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'contact' && (
              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-teal-500/10 border border-teal-500/30 text-xs text-teal-800 dark:text-teal-200">
                  <div className="font-bold mb-1">
                    {lang === 'en' ? 'Direct Recruiter Outreach' : 'Hubungi Langsung untuk Wawancara'}
                  </div>
                  <p className="leading-relaxed">
                    {lang === 'en'
                      ? 'Faiz responds within 24 hours to interview invitations, recruitment briefs, and project discussions.'
                      : 'Faiz merespons dalam waktu 24 jam untuk undangan wawancara kerja, diskusi proyek, atau rekrutmen.'}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <a
                    href={`mailto:${PERSONAL_INFO.email}?subject=Opportunity%20for%20Faiz%20Ni'matul%20Haq%20-%20Interview%20Invitation&body=Hi%20Faiz,%0A%0AWe%20reviewed%20your%20portfolio%20and%20would%20love%20to%20connect%20regarding%20a%20Data%20Analytics%20role.%0A%0ACompany:%20%0ARole:%20%0AProposed%20Time:%20`}
                    className="flex items-center gap-2.5 p-3.5 rounded-2xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs transition-all shadow-md justify-center"
                  >
                    <Mail className="w-4 h-4" />
                    <span>{lang === 'en' ? 'Email Interview Invitation' : 'Kirim Undangan Wawancara'}</span>
                  </a>

                  <a
                    href="https://wa.me/6282228512143?text=Hi%20Faiz,%20I%20am%20reaching%20out%20from%20your%20portfolio%20regarding%20a%20career%20opportunity."
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2.5 p-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-all shadow-md justify-center"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp Quick Connect</span>
                  </a>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex items-center justify-between gap-3 text-xs">
                  <div className="truncate">
                    <span className="text-slate-400">Direct Email: </span>
                    <span className="font-mono font-bold text-slate-900 dark:text-white">{PERSONAL_INFO.email}</span>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="px-3 py-1.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 hover:border-teal-500 text-slate-700 dark:text-slate-300 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer shrink-0"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-teal-500" />
                        <span>Copied</span>
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
            )}
          </div>

          {/* Footer Actions */}
          <div className="px-6 py-4 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
            <button
              onClick={handleCopyIntro}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-slate-300 dark:border-slate-700 hover:border-teal-500 bg-white dark:bg-slate-900 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-teal-600 dark:hover:text-white transition-all cursor-pointer shadow-sm"
              title="Copy formatted 60s summary text for internal sharing"
            >
              {copiedIntro ? (
                <>
                  <Check className="w-3.5 h-3.5 text-teal-500" />
                  <span className="text-teal-600 dark:text-teal-400">Copied 60s Brief!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
                  <span>{lang === 'en' ? 'Copy Candidate Brief' : 'Salin Ringkasan'}</span>
                </>
              )}
            </button>

            <div className="flex items-center gap-2">
              <a
                href={PERSONAL_INFO.cvPath}
                download="CV_Faiz_Ni_matul_Haq.pdf"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs transition-all shadow-sm"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download CV (PDF)</span>
              </a>
              <button
                onClick={onClose}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
              >
                {lang === 'en' ? 'Close' : 'Tutup'}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default RecruiterQuickViewModal;
