import React, { useEffect, useState } from 'react';
import { X, RefreshCw, Database, Mail, CheckCircle, Clock } from 'lucide-react';
import { Language } from '../types/portfolio';

interface Inquiry {
  id: string;
  name: string;
  email: string;
  subject: string;
  category: string;
  message: string;
  createdAt: string;
  status: string;
  emailSentTo: string;
}

interface InquiriesDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const InquiriesDrawer: React.FC<InquiriesDrawerProps> = ({ isOpen, onClose, lang }) => {
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchInquiries = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/contact/messages');
      if (res.ok) {
        const data = await res.json();
        setInquiries(data.inquiries || []);
      }
    } catch (err) {
      console.error('Failed to load inquiries:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      fetchInquiries();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Drawer Card */}
      <div className="relative w-full max-w-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl shadow-black/30 dark:shadow-black/80 overflow-hidden z-10 max-h-[85vh] flex flex-col my-auto">
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between gap-4 bg-white/90 dark:bg-slate-900/90">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-teal-500/10 border border-teal-500/30 text-teal-600 dark:text-teal-400">
              <Database className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">
                {lang === 'en' ? 'Persistent Database Inquiries' : 'Pesan Tersimpan di Database'}
              </h3>
              <div className="text-xs text-slate-500 dark:text-slate-400">
                {lang === 'en'
                  ? 'Real-time database store & email delivery log'
                  : 'Penyimpanan database & log pengiriman email'}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={fetchInquiries}
              disabled={loading}
              className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white transition-colors cursor-pointer"
              title="Refresh messages"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin text-teal-600 dark:text-teal-400' : ''}`} />
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Message Records List */}
        <div className="p-6 space-y-4 overflow-y-auto">
          {inquiries.length === 0 ? (
            <div className="text-center py-12 text-slate-400 text-sm">
              {lang === 'en' ? 'No inquiries recorded yet.' : 'Belum ada pesan tersimpan.'}
            </div>
          ) : (
            inquiries.map((inq) => (
              <div
                key={inq.id}
                className="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800/80 space-y-2.5"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                  <div className="font-semibold text-slate-900 dark:text-white">
                    {inq.name} <span className="text-slate-500 dark:text-slate-400 font-normal">({inq.email})</span>
                  </div>
                  <span className="flex items-center gap-1 text-[11px] font-mono text-teal-600 dark:text-teal-400">
                    <CheckCircle className="w-3 h-3 text-teal-600 dark:text-teal-400" />
                    <span>Notified ({inq.emailSentTo})</span>
                  </span>
                </div>

                <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                  <span className="font-semibold text-teal-600 dark:text-teal-300">{inq.category}</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-slate-700 dark:text-slate-300">{inq.subject}</span>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed bg-slate-100/70 dark:bg-slate-900/50 p-3 rounded-xl border border-slate-200 dark:border-slate-800/50">
                  "{inq.message}"
                </p>

                <div className="flex items-center justify-between text-[11px] text-slate-400 dark:text-slate-500 font-mono pt-1">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-slate-400 dark:text-slate-500" />
                    {new Date(inq.createdAt).toLocaleString()}
                  </span>
                  <span>ID: {inq.id}</span>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 text-right">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white text-xs font-semibold cursor-pointer"
          >
            {lang === 'en' ? 'Close Drawer' : 'Tutup'}
          </button>
        </div>
      </div>
    </div>
  );
};
