import React, { useEffect, useState } from 'react';
import { X, ExternalLink, Download, FileText, Loader2, AlertCircle } from 'lucide-react';
import { Language } from '../../types/portfolio';

export interface PdfViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
  pdfUrl: string;
  title: string;
  subtitle?: string;
  lang?: Language;
}

export const PdfViewerModal: React.FC<PdfViewerModalProps> = ({
  isOpen,
  onClose,
  pdfUrl,
  title,
  subtitle,
  lang = 'en'
}) => {
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      setLoading(true);
      setLoadError(false);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, pdfUrl]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="pdf-viewer-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-5xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl shadow-black/40 dark:shadow-black/80 overflow-hidden z-10 flex flex-col h-[90vh] my-auto transition-colors">
        {/* Top Header Bar */}
        <div className="p-4 sm:p-5 border-b border-slate-200 dark:border-slate-800/80 flex items-center justify-between gap-4 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md sticky top-0 z-20">
          <div className="flex items-center gap-3 overflow-hidden">
            <div className="p-2.5 rounded-xl bg-teal-500/10 border border-teal-500/20 text-teal-600 dark:text-teal-400 shrink-0">
              <FileText className="w-5 h-5" />
            </div>
            <div className="truncate">
              <h3 id="pdf-viewer-title" className="text-base sm:text-lg font-bold text-slate-900 dark:text-white tracking-tight truncate">
                {title}
              </h3>
              {subtitle && (
                <div className="text-xs text-slate-500 dark:text-slate-400 truncate">
                  {subtitle}
                </div>
              )}
            </div>
          </div>

          {/* Action Toolbar */}
          <div className="flex items-center gap-2 shrink-0">
            {/* Open in New Window */}
            <a
              href={pdfUrl}
              target="_blank"
              rel="noreferrer"
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white transition-colors"
              title={lang === 'en' ? 'Open in new tab' : 'Buka di tab baru'}
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>{lang === 'en' ? 'Full View' : 'Tab Baru'}</span>
            </a>

            {/* Direct Download */}
            <a
              href={pdfUrl}
              download
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-teal-500/10 hover:bg-teal-500 text-teal-700 dark:text-teal-300 hover:text-slate-950 text-xs font-semibold border border-teal-500/30 transition-colors"
              title={lang === 'en' ? 'Download PDF' : 'Unduh PDF'}
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{lang === 'en' ? 'Download' : 'Unduh'}</span>
            </a>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors cursor-pointer"
              aria-label="Close PDF Viewer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content Viewer Body */}
        <div className="relative flex-1 bg-slate-100 dark:bg-slate-950/80 overflow-hidden flex flex-col">
          {/* Loading indicator */}
          {loading && !loadError && (
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-white/70 dark:bg-slate-950/70 backdrop-blur-xs text-slate-600 dark:text-slate-300 gap-3">
              <Loader2 className="w-8 h-8 text-teal-500 animate-spin" />
              <div className="text-xs font-medium tracking-wide">
                {lang === 'en' ? 'Rendering document viewer...' : 'Memuat pratinjau dokumen...'}
              </div>
            </div>
          )}

          {/* Fallback alert if iframe fails */}
          {loadError ? (
            <div className="m-auto max-w-md p-6 text-center space-y-4">
              <div className="w-12 h-12 mx-auto rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-500 flex items-center justify-center">
                <AlertCircle className="w-6 h-6" />
              </div>
              <h4 className="text-base font-bold text-slate-900 dark:text-white">
                {lang === 'en' ? 'Preview Unavailable in Frame' : 'Pratinjau Tidak Tersedia dalam Frame'}
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {lang === 'en'
                  ? 'Your browser may restrict inline PDF rendering in this view. You can view or download the document directly below.'
                  : 'Peramban Anda mungkin membatasi tampilan PDF interaktif di dalam frame. Anda dapat membuka atau mengunduhnya langsung di bawah ini.'}
              </p>
              <div className="flex items-center justify-center gap-3 pt-2">
                <a
                  href={pdfUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-xl bg-teal-500 text-slate-950 text-xs font-bold hover:bg-teal-400 transition-colors shadow-sm"
                >
                  {lang === 'en' ? 'Open in External Viewer' : 'Buka di Penampil Dokumen'}
                </a>
              </div>
            </div>
          ) : (
            <iframe
              src={`${pdfUrl}#toolbar=1&navpanes=0`}
              title={title}
              className="w-full h-full border-none"
              onLoad={() => setLoading(false)}
              onError={() => {
                setLoading(false);
                setLoadError(true);
              }}
            />
          )}
        </div>

        {/* Footer info bar */}
        <div className="px-5 py-3 border-t border-slate-200 dark:border-slate-800/80 bg-white dark:bg-slate-900 flex flex-wrap items-center justify-between text-xs text-slate-500 dark:text-slate-400 gap-2">
          <div className="flex items-center gap-2 font-mono text-[11px]">
            <span className="w-2 h-2 rounded-full bg-teal-500" />
            <span className="truncate max-w-xs sm:max-w-md">{pdfUrl}</span>
          </div>
          <div className="flex items-center gap-3">
            <span>{lang === 'en' ? 'Press ESC or Click Outside to close' : 'Tekan ESC atau Klik di luar untuk menutup'}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
