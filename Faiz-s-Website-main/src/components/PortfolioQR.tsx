import React, { useState, useEffect } from 'react';
import QRCode from 'qrcode';
import { QrCode, Smartphone, Copy, Check, Download, ExternalLink, Sparkles } from 'lucide-react';
import { Language } from '../types/portfolio';

interface PortfolioQRProps {
  lang: Language;
  className?: string;
  url?: string;
}

export const PortfolioQR: React.FC<PortfolioQRProps> = ({
  lang,
  className = '',
  url
}) => {
  const [qrDataUrl, setQrDataUrl] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);
  const [liveUrl, setLiveUrl] = useState<string>(
    url || 'https://ais-pre-ngqen6braqj67l5cxxxufm-477853820676.europe-west2.run.app'
  );

  useEffect(() => {
    // Dynamically resolve the live portfolio URL if available in the browser
    const resolvedUrl = url || (typeof window !== 'undefined' ? window.location.origin : 'https://ais-pre-ngqen6braqj67l5cxxxufm-477853820676.europe-west2.run.app');
    setLiveUrl(resolvedUrl);

    // Generate high-resolution QR Code Data URL with teal accent color styling
    QRCode.toDataURL(resolvedUrl, {
      width: 400,
      margin: 1.5,
      color: {
        dark: '#0f172a',
        light: '#ffffff'
      },
      errorCorrectionLevel: 'M'
    })
      .then((dataUrl) => {
        setQrDataUrl(dataUrl);
      })
      .catch((err) => {
        console.error('Failed to generate QR code', err);
      });
  }, [url]);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(liveUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDownloadQR = () => {
    if (!qrDataUrl) return;
    const link = document.createElement('a');
    link.href = qrDataUrl;
    link.download = 'Faiz_Ni_matul_Haq_Portfolio_QR.png';
    link.click();
  };

  return (
    <div
      className={`p-6 sm:p-7 rounded-3xl bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800/80 shadow-xl space-y-5 transition-all ${className}`}
    >
      {/* Header */}
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-teal-500/10 border border-teal-500/20 text-teal-600 dark:text-teal-400 flex items-center justify-center shrink-0">
            <QrCode className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-base font-bold text-slate-900 dark:text-white tracking-tight">
              {lang === 'en' ? 'Mobile Portfolio QR' : 'Kode QR Portofolio Ponsel'}
            </h4>
            <p className="text-[11px] text-slate-500 dark:text-slate-400">
              {lang === 'en' ? 'Scan to view on your phone or tablet' : 'Pindai untuk membuka di ponsel atau tablet'}
            </p>
          </div>
        </div>

        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold bg-teal-500/15 text-teal-700 dark:text-teal-300 border border-teal-500/30 whitespace-nowrap">
          <Smartphone className="w-3 h-3" />
          <span>Quick Scan</span>
        </span>
      </div>

      {/* QR Code Graphic Frame */}
      <div className="flex flex-col sm:flex-row items-center gap-5 p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800/80">
        <div className="relative group/qr shrink-0 w-36 h-36 rounded-2xl bg-white p-2.5 shadow-md border border-slate-200 flex items-center justify-center overflow-hidden">
          {qrDataUrl ? (
            <img
              src={qrDataUrl}
              alt="Scan QR code to open portfolio"
              className="w-full h-full object-contain"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-slate-400 text-xs animate-pulse">
              Generating...
            </div>
          )}

          {/* Center Monogram Emblem */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-7 h-7 rounded-lg bg-teal-500 text-slate-950 font-black text-[11px] flex items-center justify-center shadow-md border-2 border-white">
              FN
            </div>
          </div>
        </div>

        {/* Instructions & Quick Links */}
        <div className="flex-1 min-w-0 space-y-2.5 text-center sm:text-left">
          <div className="text-xs font-semibold text-slate-900 dark:text-slate-200">
            {lang === 'en'
              ? 'Instant Access for Hiring Managers'
              : 'Akses Instan untuk Tim Rekrutmen'}
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
            {lang === 'en'
              ? 'Point your smartphone camera at the QR code to bookmark, review credentials on the go, or share with interviewers.'
              : 'Arahkan kamera ponsel Anda ke kode QR untuk menyimpan, meninjau kredensial secara fleksibel, atau membagikan ke pewawancara.'}
          </p>

          <div className="text-[11px] font-mono text-teal-600 dark:text-teal-400 truncate">
            {liveUrl}
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap items-center gap-2 pt-1 no-print">
        <button
          type="button"
          onClick={handleCopyLink}
          className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 hover:text-slate-950 dark:hover:text-white text-xs font-semibold transition-colors cursor-pointer"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
              <span className="text-teal-600 dark:text-teal-400 font-bold">
                {lang === 'en' ? 'Link Copied!' : 'Tautan Tersalin!'}
              </span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
              <span>{lang === 'en' ? 'Copy Live Link' : 'Salin Tautan'}</span>
            </>
          )}
        </button>

        <button
          type="button"
          onClick={handleDownloadQR}
          disabled={!qrDataUrl}
          className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 text-xs font-semibold transition-colors cursor-pointer"
          title={lang === 'en' ? 'Download QR Code image (PNG)' : 'Unduh gambar Kode QR (PNG)'}
        >
          <Download className="w-3.5 h-3.5 text-slate-400" />
          <span>{lang === 'en' ? 'Save QR' : 'Simpan QR'}</span>
        </button>

        <a
          href={liveUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center p-2 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-teal-500/60 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-teal-600 dark:hover:text-white transition-colors"
          title={lang === 'en' ? 'Open in new tab' : 'Buka di tab baru'}
        >
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
};

export default PortfolioQR;
