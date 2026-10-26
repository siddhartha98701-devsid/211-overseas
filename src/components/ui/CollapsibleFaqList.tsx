'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Plus } from 'lucide-react';

export interface FaqItem {
  q?: string;
  question?: string;
  a?: string;
  answer?: string;
}

export function CollapsibleFaqList({
  items,
  showNumbers = false,
  initialOpenIndex = 0,
}: {
  items: ReadonlyArray<FaqItem>;
  showNumbers?: boolean;
  initialOpenIndex?: number | null;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(initialOpenIndex);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="space-y-3">
      {items.map((item, idx) => {
        const question = item.question || item.q || '';
        const answer = item.answer || item.a || '';
        const isOpen = openIndex === idx;
        const num = idx + 1 < 10 ? `0${idx + 1}` : idx + 1;

        return (
          <div
            key={idx}
            className="border border-[#E6DDCC] bg-[#FBF8F1] transition-all rounded-[2px] overflow-hidden hover:border-[#A33E11]"
          >
            <h3>
              <button
                type="button"
                onClick={() => toggle(idx)}
                aria-expanded={isOpen}
                className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left cursor-pointer group hover:bg-white transition-colors"
              >
                <div className="flex items-center gap-3.5 pr-2">
                  {showNumbers && (
                    <span className="text-xs font-mono font-bold text-[#A33E11] shrink-0">
                      {num}
                    </span>
                  )}
                  <span className="font-serif text-base sm:text-lg font-bold text-[#1B1C1A] group-hover:text-[#A33E11] transition-colors">
                    {question}
                  </span>
                </div>
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
                  <div className="p-5 sm:p-6 pt-0 border-t border-[#E6DDCC]/60 bg-white">
                    <p
                      className={`text-sm sm:text-base text-[#41484B] leading-relaxed pt-3 ${
                        showNumbers ? 'sm:pl-8' : ''
                      }`}
                    >
                      {answer}
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
