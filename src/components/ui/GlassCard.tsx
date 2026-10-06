'use client';

import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  featured?: boolean;
  hover?: boolean;
}

export function GlassCard({ children, className = '', featured = false, hover = true }: GlassCardProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className={`rounded-[24px] p-6 md:p-8 transition-colors ${
        featured ? 'glass-card-highlight ring-1 ring-[#B88740]/25' : 'glass'
      } ${className}`}
      whileHover={hover && !prefersReducedMotion ? { y: -4, boxShadow: '0 16px 44px rgba(11, 11, 15, 0.08)' } : undefined}
      whileTap={hover && !prefersReducedMotion ? { scale: 0.98 } : undefined}
      transition={{ type: 'spring', stiffness: 350, damping: 28 }}
    >
      {children}
    </motion.div>
  );
}
