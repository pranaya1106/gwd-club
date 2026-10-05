import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface SectionHeadingProps {
  label: string;
  title: string | ReactNode;
  description?: string;
  accent?: 'red' | 'green';
  align?: 'left' | 'center';
}

export default function SectionHeading({
  label,
  title,
  description,
  accent = 'red',
  align = 'left',
}: SectionHeadingProps) {
  const accentColor = accent === 'red' ? 'text-red' : 'text-green';
  const accentBg = accent === 'red' ? 'bg-red' : 'bg-green';

  return (
    <div className={`flex flex-col gap-4 ${align === 'center' ? 'items-center text-center' : 'items-start text-left'}`}>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-3"
      >
        <span className={`w-8 h-px ${accentBg}`} />
        <span className={`font-mono text-xs tracking-[0.3em] uppercase ${accentColor}`}>
          {label}
        </span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="font-display font-bold text-3xl md:text-5xl lg:text-6xl text-white tracking-tight leading-[1.05]"
      >
        {title}
      </motion.h2>

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`text-ink-300 text-base md:text-lg max-w-2xl leading-relaxed ${align === 'center' ? 'mx-auto' : ''}`}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
