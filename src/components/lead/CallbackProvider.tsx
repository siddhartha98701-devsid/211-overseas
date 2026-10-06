'use client';

import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState, type ReactNode } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import { LeadMiniForm } from './LeadMiniForm';

interface OpenOptions {
  interest?: string;
  source?: string;
}

interface CallbackContextValue {
  openCallback: (opts?: OpenOptions) => void;
}

const CallbackContext = createContext<CallbackContextValue>({ openCallback: () => {} });

/** Open the "Request a call back" popup from any client component. */
export function useCallbackModal() {
  return useContext(CallbackContext);
}

export function CallbackProvider({ children }: { children: ReactNode }) {
  const [opts, setOpts] = useState<OpenOptions | null>(null);
  const [nonce, setNonce] = useState(0);
  const returnFocus = useRef<HTMLElement | null>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const openCallback = useCallback((o: OpenOptions = {}) => {
    returnFocus.current = document.activeElement as HTMLElement | null;
    setNonce((n) => n + 1); // remount the form so a new interest/success state is fresh
    setOpts(o);
  }, []);

  const close = useCallback(() => {
    setOpts(null);
    returnFocus.current?.focus?.();
  }, []);

  const isOpen = opts !== null;

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    panelRef.current?.querySelector<HTMLElement>('input, select, button')?.focus();
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [isOpen, close]);

  const value = useMemo(() => ({ openCallback }), [openCallback]);

  return (
    <CallbackContext.Provider value={value}>
      {children}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="callback"
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseDown={(e) => {
              if (e.target === e.currentTarget) close();
            }}
          >
            <motion.div
              ref={panelRef}
              role="dialog"
              aria-modal="true"
              aria-labelledby="callback-title"
              initial={{ y: 28, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-md max-h-[92vh] overflow-y-auto bg-white border-t-4 border-[#B88740] p-6 sm:p-8"
            >
              <button
                type="button"
                onClick={close}
                aria-label="Close"
                className="absolute right-3 top-3 p-2 text-black hover:text-[#8A6020] transition-colors"
              >
                <X size={20} />
              </button>
              <p className="text-xs uppercase tracking-[0.25em] text-[#8A6020] font-medium">Free counselling</p>
              <h2 id="callback-title" className="mt-2 mb-1 font-serif text-2xl font-bold text-black">
                Request a call back
              </h2>
              <p className="mb-6 text-sm text-[#57514A]">
                Share your details and an expert counsellor will get in touch — no obligation.
              </p>
              <LeadMiniForm
                key={nonce}
                interest={opts?.interest}
                source={opts?.source ?? 'callback-popup'}
                submitLabel="Request call back"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </CallbackContext.Provider>
  );
}
