'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Plus } from 'lucide-react';

interface FaqItem {
  q: string;
  a: string;
}

export function CollapsibleFaqList({ items }: { items: ReadonlyArray<FaqItem> }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="space-y-3">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={idx}
            className="border border-[#E6DDCC] bg-[#FBF8F1] transition-colors rounded-[2px] overflow-hidden"
          >
            <h3>
              <button
                type="button"
                onClick={() => toggle(idx)}
                aria-expanded={isOpen}
                className="w-full flex items-center justify-between gap-4 p-5 text-left cursor-pointer group hover:bg-white transition-colors"
              >
                <span className="font-serif text-base font-bold text-[#1B1C1A] group-hover:text-[#A33E11] transition-colors pr-2">
                  {item.q}
                </span>
                <motion.span
                  animate={{ rotate: isOpen ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="shrink-0 flex h-7 w-7 items-center justify-center bg-[#A33E11] text-white rounded-[2px]"
                >
                  <Plus size={16} aria-hidden="true" />
                </motion.span>
              </button>
            </h3>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="p-5 pt-0 border-t border-[#E6DDCC]/60 bg-white">
                    <p className="text-sm text-[#41484B] leading-relaxed pt-3">
                      {item.a}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
