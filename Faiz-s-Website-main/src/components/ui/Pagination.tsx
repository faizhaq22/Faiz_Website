import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Language } from '../../types/portfolio';

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  totalItems: number;
  itemsPerPage: number;
  itemName?: {
    en: string;
    id: string;
  };
  lang?: Language;
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  totalItems,
  itemsPerPage,
  itemName = { en: 'items', id: 'item' },
  lang = 'en'
}) => {
  if (totalPages <= 1) return null;

  const startIdx = (currentPage - 1) * itemsPerPage + 1;
  const endIdx = Math.min(currentPage * itemsPerPage, totalItems);

  // Generate page numbers
  const pages: number[] = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <div className="mt-10 pt-6 border-t border-slate-200 dark:border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
      {/* Item range count */}
      <div className="text-xs text-slate-500 dark:text-slate-400 font-mono">
        {lang === 'en'
          ? `Showing ${startIdx}–${endIdx} of ${totalItems} ${itemName.en}`
          : `Menampilkan ${startIdx}–${endIdx} dari ${totalItems} ${itemName.id}`}
      </div>

      {/* Page controls */}
      <div className="flex items-center gap-1.5 p-1 bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-2xl shadow-xs">
        {/* Previous Button */}
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="p-2 rounded-xl text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white hover:bg-white dark:hover:bg-slate-800 disabled:opacity-30 disabled:cursor-not-allowed transition-all cursor-pointer"
          aria-label={lang === 'en' ? 'Previous page' : 'Halaman sebelumnya'}
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        {/* Numbered Page Buttons */}
        {pages.map((pageNum) => {
          const isActive = pageNum === currentPage;
          return (
            <button
              key={pageNum}
              onClick={() => onPageChange(pageNum)}
              className={`w-8 h-8 rounded-xl text-xs font-semibold font-mono transition-all cursor-pointer flex items-center justify-center ${
                isActive
                  ? 'bg-teal-500 text-slate-950 font-bold shadow-sm shadow-teal-500/20'
                  : 'text-slate-700 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-800 hover:text-slate-950 dark:hover:text-white'
              }`}
              aria-current={isActive ? 'page' : undefined}
            >
              {pageNum}
            </button>
          );
        })}

        {/* Next Button */}
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="p-2 rounded-xl text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white hover:bg-white dark:hover:bg-slate-800 disabled:opacity-30 disabled:cursor-not-allowed transition-all cursor-pointer"
          aria-label={lang === 'en' ? 'Next page' : 'Halaman berikutnya'}
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
