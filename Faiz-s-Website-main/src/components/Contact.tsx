import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Copy, Check, Database, ExternalLink, MessageSquare } from 'lucide-react';
import { motion } from 'motion/react';
import { Language } from '../types/portfolio';
import { PERSONAL_INFO } from '../data/portfolioData';
import { InquiriesDrawer } from './InquiriesDrawer';
import { HashHeading } from './ui/HashHeading';
import { PortfolioQR } from './PortfolioQR';

interface ContactProps {
  lang: Language;
}

export const Contact: React.FC<ContactProps> = ({ lang }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    category: 'Data Analytics Project',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [successResponse, setSuccessResponse] = useState<{ id: string; emailSentTo: string } | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [inquiriesDrawerOpen, setInquiriesDrawerOpen] = useState(false);

  const categories = [
    { value: 'Data Analytics Project', label: lang === 'en' ? 'Data Analytics Project' : 'Proyek Analitik Data' },
    { value: 'Power BI Dashboard Consulting', label: lang === 'en' ? 'Power BI Consulting' : 'Konsultasi Power BI' },
    { value: 'Full-time / Hiring Opportunity', label: lang === 'en' ? 'Career / Hiring' : 'Peluang Karir / Rekrutmen' },
    { value: 'Mentorship & Speaking', label: lang === 'en' ? 'Mentorship / Workshop' : 'Mentoring & Pembicara' },
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setErrorMsg(lang === 'en' ? 'Please fill in name, email, and message.' : 'Harap lengkapi nama, email, dan pesan.');
      return;
    }

    setLoading(true);
    setErrorMsg(null);
    setSuccessResponse(null);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setSuccessResponse({
          id: data.inquiry.id,
          emailSentTo: data.inquiry.emailSentTo
        });
        setFormData({
          name: '',
          email: '',
          subject: '',
          category: 'Data Analytics Project',
          message: ''
        });
      } else {
        setErrorMsg(data.error || (lang === 'en' ? 'Failed to submit inquiry.' : 'Gagal mengirim pesan.'));
      }
    } catch (err: any) {
      setErrorMsg(lang === 'en' ? 'Network error occurred. Please try again.' : 'Terjadi gangguan jaringan.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Motion */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl"
        >
          <div className="text-xs font-semibold text-teal-600 dark:text-teal-400 uppercase tracking-wider mb-2">
            {lang === 'en' ? 'Initiate Collaboration' : 'Mulai Kolaborasi'}
          </div>
          <HashHeading
            id="contact"
            title={
              lang === 'en'
                ? 'Connect Directly with Faiz Ni\'matul Haq'
                : 'Hubungi Faiz Ni\'matul Haq Secara Langsung'
            }
          />
          <p className="mt-3 text-base text-slate-600 dark:text-slate-300">
            {lang === 'en'
              ? 'Available for full-time Data Analyst roles, Power BI dashboard architecture, and freelance business intelligence consulting.'
              : 'Terbuka untuk posisi Data Analyst penuh waktu, perancangan dashboard Power BI perusahaan, dan konsultasi business intelligence.'}
          </p>
        </motion.div>

        {/* 2-Column Contact Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Contact Info & Credly/LinkedIn */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800/80 space-y-6 shadow-xl">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">
                {lang === 'en' ? 'Contact Information' : 'Informasi Kontak'}
              </h3>

              <div className="space-y-4 text-sm text-slate-600 dark:text-slate-300">
                {/* Email with copy button */}
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800/80 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="p-2.5 rounded-xl bg-teal-500/10 border border-teal-500/20 text-teal-600 dark:text-teal-400 shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="truncate">
                      <div className="text-[11px] text-slate-500 dark:text-slate-400 font-mono">Email</div>
                      <a
                        href={`mailto:${PERSONAL_INFO.email}`}
                        className="text-slate-900 dark:text-white hover:text-teal-600 dark:hover:text-teal-400 font-medium truncate block transition-colors"
                      >
                        {PERSONAL_INFO.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white transition-colors cursor-pointer shrink-0"
                    title="Copy Email"
                  >
                    {copiedEmail ? (
                      <Check className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Phone */}
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800/80 flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400 font-mono">
                      {lang === 'en' ? 'Phone / WhatsApp' : 'Telepon / WhatsApp'}
                    </div>
                    <a
                      href={`https://wa.me/6282119097549`}
                      target="_blank"
                      rel="noreferrer"
                      className="text-slate-900 dark:text-white hover:text-teal-600 dark:hover:text-teal-400 font-medium transition-colors"
                    >
                      {PERSONAL_INFO.phone}
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800/80 flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400 font-mono">
                      {lang === 'en' ? 'Primary Location' : 'Lokasi'}
                    </div>
                    <div className="text-slate-900 dark:text-white font-medium">
                      {PERSONAL_INFO.location}
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct Profile Links */}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 space-y-3">
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 hover:border-blue-500/60 text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-white transition-all text-xs font-semibold group"
                >
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-500" />
                    <span>LinkedIn Profile</span>
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white" />
                </a>

                <a
                  href={PERSONAL_INFO.credly}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 hover:border-amber-500/60 text-slate-700 dark:text-slate-200 hover:text-amber-600 dark:hover:text-white transition-all text-xs font-semibold group"
                >
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-500" />
                    <span>Credly Certified Badges (10+)</span>
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white" />
                </a>
              </div>

              {/* View Database Inquiries Button */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => setInquiriesDrawerOpen(true)}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 bg-slate-50 dark:bg-slate-950/50 hover:bg-slate-100 dark:hover:bg-slate-950 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 text-xs font-mono transition-colors cursor-pointer"
                >
                  <Database className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
                  <span>
                    {lang === 'en'
                      ? 'Inspect Stored Inquiries (Database)'
                      : 'Lihat Pesan Tersimpan di Database'}
                  </span>
                </button>
              </div>
            </div>

            {/* Mobile QR Code Scanner Card for Recruiters */}
            <PortfolioQR lang={lang} />
          </motion.div>

          {/* Right Column: Functional Contact Form with Motion */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.55, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800/80 shadow-xl space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                    {lang === 'en' ? 'Send an Inquiry' : 'Kirim Pesan'}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    {lang === 'en'
                      ? 'Stored securely in database & immediately routes notification to Faiz.'
                      : 'Tersimpan aman di database & notifikasi langsung dikirimkan ke email Faiz.'}
                  </p>
                </div>
                <div className="p-2.5 rounded-xl bg-teal-500/10 border border-teal-500/20 text-teal-600 dark:text-teal-400">
                  <MessageSquare className="w-4 h-4" />
                </div>
              </div>

              {/* Success Notification Alert */}
              {successResponse && (
                <div className="p-4 rounded-2xl bg-teal-500/10 border border-teal-500/30 text-teal-700 dark:text-teal-300 space-y-1">
                  <div className="flex items-center gap-2 font-semibold text-sm text-teal-800 dark:text-teal-200">
                    <CheckCircle className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                    <span>
                      {lang === 'en'
                        ? 'Inquiry successfully saved to database!'
                        : 'Pesan berhasil disimpan ke database!'}
                    </span>
                  </div>
                  <p className="text-xs text-teal-700/90 dark:text-teal-300/90 pl-6">
                    {lang === 'en'
                      ? `Dispatched email notification to ${successResponse.emailSentTo}. Reference ID: ${successResponse.id}`
                      : `Notifikasi email diteruskan ke ${successResponse.emailSentTo}. ID Referensi: ${successResponse.id}`}
                  </p>
                </div>
              )}

              {/* Error Alert */}
              {errorMsg && (
                <div className="p-4 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-rose-600 dark:text-rose-300 text-xs">
                  {errorMsg}
                </div>
              )}

              {/* Form Element */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-700 dark:text-slate-300">
                      {lang === 'en' ? 'Your Name' : 'Nama Lengkap'} *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Henderson"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950/80 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 text-sm focus:outline-none focus:border-teal-500 transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-700 dark:text-slate-300">
                      {lang === 'en' ? 'Email Address' : 'Alamat Email'} *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@company.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950/80 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 text-sm focus:outline-none focus:border-teal-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Category */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-700 dark:text-slate-300">
                      {lang === 'en' ? 'Topic / Area' : 'Kategori'}
                    </label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950/80 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-slate-100 text-sm focus:outline-none focus:border-teal-500 transition-colors"
                    >
                      {categories.map((c) => (
                        <option key={c.value} value={c.value}>
                          {c.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Subject */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-700 dark:text-slate-300">
                      {lang === 'en' ? 'Subject' : 'Subjek'}
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder={lang === 'en' ? 'e.g. Analytics Collaboration' : 'misal: Kolaborasi Analitik'}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950/80 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 text-sm focus:outline-none focus:border-teal-500 transition-colors"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-slate-700 dark:text-slate-300">
                    {lang === 'en' ? 'Message' : 'Pesan'} *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={
                      lang === 'en'
                        ? 'Describe your project requirements, data goals, or consultation topic...'
                        : 'Jelaskan tujuan proyek, kebutuhan analitik data, atau topik diskusi...'
                    }
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950/80 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 text-sm focus:outline-none focus:border-teal-500 transition-colors resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-sm transition-all shadow-lg shadow-teal-500/20 hover:shadow-teal-500/30 disabled:opacity-50 cursor-pointer"
                >
                  <Send className={`w-4 h-4 ${loading ? 'animate-bounce' : ''}`} />
                  <span>
                    {loading
                      ? (lang === 'en' ? 'Saving to Database & Dispatching...' : 'Menyimpan ke Database...')
                      : (lang === 'en' ? 'Submit Inquiry & Send Notification' : 'Kirim Pesan & Simpan')}
                  </span>
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Persistent Inquiries Drawer */}
      <InquiriesDrawer
        isOpen={inquiriesDrawerOpen}
        onClose={() => setInquiriesDrawerOpen(false)}
        lang={lang}
      />
    </section>
  );
};
