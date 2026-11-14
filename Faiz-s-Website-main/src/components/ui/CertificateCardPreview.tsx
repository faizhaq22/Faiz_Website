import React from 'react';
import { Award, ShieldCheck, FileText, Download, ExternalLink, Eye, Sparkles, CheckCircle2 } from 'lucide-react';
import { Language } from '../../types/portfolio';

export interface CertificateCardPreviewProps {
  type: 'certification' | 'award';
  title: string;
  issuerOrOrg: string;
  dateOrYear: string;
  medalOrLevel?: 'gold' | 'silver' | 'finalist' | 'honor' | string;
  idNumber?: string;
  onPreview?: () => void;
  downloadUrl?: string;
  downloadFilename?: string;
  lang?: Language;
  thumbnailUrl?: string;
}

export const CertificateCardPreview: React.FC<CertificateCardPreviewProps> = ({
  type,
  title,
  issuerOrOrg,
  dateOrYear,
  medalOrLevel,
  idNumber,
  onPreview,
  downloadUrl = '/assets/aistudio/CV_-_Faiz_Ni_matul_Haq._f3cc484f.pdf',
  downloadFilename = 'Faiz_Ni_matul_Haq_Certificate.pdf',
  lang = 'en',
  thumbnailUrl
}) => {
  // Determine color styling based on issuer or medal
  const getTheme = () => {
    if (type === 'award') {
      if (medalOrLevel === 'gold') {
        return {
          bg: 'from-amber-950/70 via-slate-900 to-amber-900/40',
          border: 'border-amber-500/40',
          text: 'text-amber-400',
          glow: 'shadow-amber-500/10',
          ribbonBg: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
          sealColor: 'text-amber-400',
          label: lang === 'en' ? 'GOLD MEDALIST' : 'PERAIH EMAS',
          icon: '🥇'
        };
      }
      if (medalOrLevel === 'silver') {
        return {
          bg: 'from-slate-800/80 via-slate-900 to-slate-800/50',
          border: 'border-slate-400/40',
          text: 'text-slate-300',
          glow: 'shadow-slate-400/10',
          ribbonBg: 'bg-slate-400/20 text-slate-200 border-slate-400/40',
          sealColor: 'text-slate-300',
          label: lang === 'en' ? 'SILVER MEDALIST' : 'PERAIH PERAK',
          icon: '🥈'
        };
      }
      return {
        bg: 'from-teal-950/70 via-slate-900 to-blue-950/50',
        border: 'border-teal-500/40',
        text: 'text-teal-400',
        glow: 'shadow-teal-500/10',
        ribbonBg: 'bg-teal-500/20 text-teal-300 border-teal-500/40',
        sealColor: 'text-teal-400',
        label: lang === 'en' ? 'SPECIAL DISTINCTION' : 'PENGHARGAAN KHUSUS',
        icon: '🏅'
      };
    }

    // For certifications
    const issuerLower = issuerOrOrg.toLowerCase();
    if (issuerLower.includes('microsoft')) {
      return {
        bg: 'from-sky-950/70 via-slate-900 to-blue-950/60',
        border: 'border-sky-500/40',
        text: 'text-sky-400',
        glow: 'shadow-sky-500/10',
        ribbonBg: 'bg-sky-500/20 text-sky-300 border-sky-500/40',
        sealColor: 'text-sky-400',
        label: 'MICROSOFT CERTIFIED',
        icon: '🔷'
      };
    }
    if (issuerLower.includes('aws')) {
      return {
        bg: 'from-amber-950/70 via-slate-900 to-orange-950/60',
        border: 'border-orange-500/40',
        text: 'text-orange-400',
        glow: 'shadow-orange-500/10',
        ribbonBg: 'bg-orange-500/20 text-orange-300 border-orange-500/40',
        sealColor: 'text-orange-400',
        label: 'AWS CERTIFIED',
        icon: '☁️'
      };
    }
    if (issuerLower.includes('adobe')) {
      return {
        bg: 'from-rose-950/70 via-slate-900 to-red-950/60',
        border: 'border-rose-500/40',
        text: 'text-rose-400',
        glow: 'shadow-rose-500/10',
        ribbonBg: 'bg-rose-500/20 text-rose-300 border-rose-500/40',
        sealColor: 'text-rose-400',
        label: 'ADOBE CERTIFIED',
        icon: '🎨'
      };
    }
    if (issuerLower.includes('pmi')) {
      return {
        bg: 'from-emerald-950/70 via-slate-900 to-teal-950/60',
        border: 'border-emerald-500/40',
        text: 'text-emerald-400',
        glow: 'shadow-emerald-500/10',
        ribbonBg: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
        sealColor: 'text-emerald-400',
        label: 'PMI CERTIFIED',
        icon: '🛡️'
      };
    }
    return {
      bg: 'from-teal-950/70 via-slate-900 to-slate-900',
      border: 'border-teal-500/40',
      text: 'text-teal-400',
      glow: 'shadow-teal-500/10',
      ribbonBg: 'bg-teal-500/20 text-teal-300 border-teal-500/40',
      sealColor: 'text-teal-400',
      label: 'VERIFIED CREDENTIAL',
      icon: '📜'
    };
  };

  const theme = getTheme();

  return (
    <div className={`relative aspect-[16/10] overflow-hidden rounded-2xl bg-gradient-to-br ${theme.bg} border ${theme.border} p-4 sm:p-5 flex flex-col justify-between group/preview transition-all shadow-inner select-none`}>
      {/* Decorative Guilloche / Certificate Border Accent */}
      <div className="absolute inset-1.5 border border-dashed border-white/10 rounded-xl pointer-events-none" />
      
      {/* Background Watermark Crest or Official Badge Graphic */}
      {thumbnailUrl ? (
        <div className="absolute -right-2 -bottom-2 w-28 h-28 opacity-20 group-hover/preview:opacity-35 transition-opacity pointer-events-none transform rotate-6">
          <img src={thumbnailUrl} alt={title} className="w-full h-full object-contain filter drop-shadow-md" />
        </div>
      ) : (
        <div className="absolute -right-6 -bottom-6 opacity-10 pointer-events-none transform -rotate-12">
          <ShieldCheck className="w-40 h-40 text-white" />
        </div>
      )}

      {/* Top Bar of Certificate */}
      <div className="relative z-10 flex items-start justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="text-sm">{theme.icon}</span>
          <div className="leading-tight">
            <span className={`text-[10px] font-bold font-mono tracking-widest uppercase ${theme.text}`}>
              {theme.label}
            </span>
            <div className="text-[11px] font-semibold text-slate-300 truncate max-w-[170px] sm:max-w-[210px]">
              {issuerOrOrg}
            </div>
          </div>
        </div>

        {/* Verification Ribbon Pill */}
        <div className={`flex items-center gap-1 px-2.5 py-0.5 rounded-full border text-[10px] font-mono font-bold tracking-wider ${theme.ribbonBg}`}>
          <CheckCircle2 className="w-3 h-3 shrink-0" />
          <span>VERIFIED</span>
        </div>
      </div>

      {/* Center Certificate Typography */}
      <div className="relative z-10 py-1 space-y-1">
        <div className="text-[9px] uppercase tracking-wider text-slate-400 font-mono">
          {type === 'award' ? 'Presented To: Faiz Ni\'matul Haq' : 'Issued To: Faiz Ni\'matul Haq'}
        </div>
        <h4 className="text-sm sm:text-base font-extrabold text-white tracking-tight leading-snug line-clamp-2 drop-shadow-sm">
          {title}
        </h4>
        <div className="flex items-center gap-2 text-[11px] font-mono text-slate-400">
          <span>{dateOrYear}</span>
          {idNumber && (
            <>
              <span>·</span>
              <span className="truncate max-w-[120px]">ID: {idNumber}</span>
            </>
          )}
        </div>
      </div>

      {/* Bottom Certificate Security Line */}
      <div className="relative z-10 flex items-center justify-between pt-2 border-t border-white/10 text-[10px] font-mono text-slate-400">
        <span className="tracking-widest uppercase text-[9px] text-teal-400/90 font-semibold">
          Authentic Credential
        </span>
        <span className="text-[10px] opacity-75">
          Official Record
        </span>
      </div>

      {/* Hover Overlay with Quick Action Buttons */}
      <div className="absolute inset-0 bg-slate-950/85 backdrop-blur-xs opacity-0 group-hover/preview:opacity-100 transition-all duration-300 z-20 flex flex-col items-center justify-center gap-2.5 p-4 text-center">
        <div className="text-xs font-semibold text-white flex items-center gap-1.5 mb-1">
          <Award className="w-4 h-4 text-teal-400" />
          <span>{lang === 'en' ? 'Verified Document Available' : 'Dokumen Terverifikasi'}</span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2">
          {onPreview && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onPreview();
              }}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 text-xs font-bold transition-all shadow-md cursor-pointer hover:scale-105 active:scale-95"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>{lang === 'en' ? 'Show Certificate' : 'Lihat Sertifikat'}</span>
            </button>
          )}

          <a
            href={downloadUrl}
            download={downloadFilename}
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/15 hover:bg-white/25 text-white text-xs font-semibold border border-white/20 transition-all cursor-pointer hover:scale-105 active:scale-95"
            title={lang === 'en' ? 'Download Certificate File' : 'Unduh Berkas Sertifikat'}
          >
            <Download className="w-3.5 h-3.5" />
            <span>{lang === 'en' ? 'Download' : 'Unduh'}</span>
          </a>
        </div>
      </div>
    </div>
  );
};
