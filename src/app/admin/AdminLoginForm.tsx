'use client';

import { useState } from 'react';
import { Eye, EyeOff, Lock, ShieldCheck } from 'lucide-react';

export function AdminLoginForm({ error }: { error?: string }) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <section className="pt-36 pb-24 min-h-[75vh] flex items-center justify-center">
      <div className="w-full max-w-md mx-auto px-6">
        <div className="bg-white p-8 sm:p-10 border border-[#E6DDCC] shadow-md rounded-xl">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#FAF8F5] border border-[#E6DDCC] text-[#A33E11] mb-4 shadow-xs">
              <Lock size={22} />
            </div>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-[#A33E11] mb-2">
              <ShieldCheck size={14} />
              <span>Restricted Access</span>
            </div>
            <h1 className="font-serif text-2xl sm:text-3xl font-bold text-[#1B1C1A]">
              Leads Administration
            </h1>
            <p className="mt-2 text-xs sm:text-sm text-[#41484B] leading-relaxed">
              Enter your protected administrative password to access candidate profiles and export enquiries.
            </p>
          </div>

          {/* Login Form */}
          <form method="post" action="/api/admin/login" className="space-y-5">
            <div>
              <label
                htmlFor="pw"
                className="block text-xs uppercase tracking-wider font-semibold text-[#1B1C1A] mb-2"
              >
                Admin Password
              </label>
              <div className="relative">
                <input
                  id="pw"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  autoFocus
                  placeholder="Enter protected password"
                  autoComplete="current-password"
                  className="w-full pl-4 pr-12 py-3.5 text-sm bg-white border border-[#E6DDCC] rounded-[2px] focus:outline-none focus:border-[#A33E11] focus:ring-1 focus:ring-[#A33E11] transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#41484B] hover:text-[#1B1C1A] p-1 cursor-pointer transition-colors"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {error && (
              <div
                role="alert"
                className="p-3 bg-red-50 border border-red-200 text-xs text-red-700 rounded-[2px] flex items-center gap-2"
              >
                <span>Incorrect password. Please verify and try again.</span>
              </div>
            )}

            <button
              type="submit"
              className="btn-shine w-full bg-[#A33E11] hover:bg-[#85320D] text-white text-xs uppercase tracking-widest font-semibold py-4 transition-colors cursor-pointer shadow-xs active:scale-[0.99]"
            >
              Sign In to Dashboard
            </button>
          </form>

          <p className="mt-6 text-center text-[11px] text-[#41484B]/80 uppercase tracking-wider">
            Protected by 211 Overseas Security System
          </p>
        </div>
      </div>
    </section>
  );
}
