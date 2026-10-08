'use client';

import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState, type ReactNode } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { LeadMiniForm } from './LeadMiniForm';

interface OpenOptions {
  interest?: string;
  source?: string;
  /** Set by the automatic popup so the copy and the email field differ from the manual call-back. */
  auto?: boolean;
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
  const pathname = usePathname();
  const isOpenRef = useRef(false);
  isOpenRef.current = isOpen;

  // Automatic lead popup: once per session, after ~8s or when the cursor leaves through the top of the window.
  useEffect(() => {
    if (pathname.startsWith('/admin') || pathname === '/contact') return;
    const seen = () => {
      try { return !!sessionStorage.getItem('lead-popup-done'); } catch { return true; }
    };
    if (seen()) return;
    const show = () => {
      if (seen() || isOpenRef.current) return;
      try { sessionStorage.setItem('lead-popup-done', '1'); } catch { /* ignore */ }
      openCallback({ source: 'auto-popup', auto: true });
    };
    const timer = window.setTimeout(show, 8000);
    const onLeave = (e: MouseEvent) => { if (e.clientY <= 0) show(); };
    document.addEventListener('mouseleave', onLeave);
    return () => { window.clearTimeout(timer); document.removeEventListener('mouseleave', onLeave); };
  }, [pathname, openCallback]);

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
                className="absolute right-1 top-1 flex h-11 w-11 items-center justify-center text-black hover:text-[#8A6020] transition-colors"
              >
                <X size={20} />
              </button>
              <p className="text-xs uppercase tracking-[0.25em] text-[#8A6020] font-medium">Free counselling</p>
              <h2 id="callback-title" className="mt-2 mb-1 font-serif text-2xl font-bold text-black">
                {opts?.auto ? 'Plan your move abroad' : 'Request a call back'}
              </h2>
              <p className="mb-6 text-sm text-[#57514A]">
                {opts?.auto
                  ? 'Tell us what you are looking for and a counsellor will call you with a free, no-obligation plan.'
                  : 'Share your details and an expert counsellor will get in touch — no obligation.'}
              </p>
              <LeadMiniForm
                key={nonce}
                interest={opts?.interest}
                source={opts?.source ?? 'callback-popup'}
                showEmail
                submitLabel="Request call back"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </CallbackContext.Provider>
  );
}
