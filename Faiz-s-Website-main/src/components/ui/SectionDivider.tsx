import React from 'react';
import { motion } from 'motion/react';

interface SectionDividerProps {
  className?: string;
  variant?: 'default' | 'accent' | 'minimal';
}

export const SectionDivider: React.FC<SectionDividerProps> = ({
  className = '',
  variant = 'default',
}) => {
  return (
    <div
      className={`relative w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 flex items-center justify-center overflow-hidden pointer-events-none select-none ${className}`}
      aria-hidden="true"
    >
      {/* Outer ambient glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-3/4 max-w-xl h-4 bg-gradient-to-r from-transparent via-teal-500/10 dark:via-teal-400/10 to-transparent blur-md pointer-events-none" />
      </div>

      {/* Left gradient line */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true, margin: '-20px' }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-800 to-teal-500/50 dark:to-teal-400/40 origin-right"
      />

      {/* Center glowing focal point */}
      {variant !== 'minimal' && (
        <motion.div
          initial={{ scale: 0, opacity: 0, rotate: -45 }}
          whileInView={{ scale: 1, opacity: 1, rotate: 45 }}
          viewport={{ once: true, margin: '-20px' }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          className="mx-3 sm:mx-4 flex items-center gap-1.5"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-teal-500/40 dark:bg-teal-400/40" />
          <div className="w-2.5 h-2.5 rounded-sm bg-gradient-to-tr from-teal-500 to-cyan-400 shadow-sm shadow-teal-500/30" />
          <span className="w-1.5 h-1.5 rounded-full bg-teal-500/40 dark:bg-teal-400/40" />
        </motion.div>
      )}

      {/* Right gradient line */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true, margin: '-20px' }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="flex-1 h-px bg-gradient-to-l from-transparent via-slate-200 dark:via-slate-800 to-teal-500/50 dark:to-teal-400/40 origin-left"
      />
    </div>
  );
};

export default SectionDivider;
