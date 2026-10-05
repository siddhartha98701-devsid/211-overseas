'use client';

import { useState } from 'react';
import { siteContent } from '@/content/site';

export function UAESectorsTabs() {
  const [activeSector, setActiveSector] = useState(0);
  const sectors = siteContent.uae.sectors;

  return (
    <div>
      {/* Minimal Underline Tabs */}
      <div className="flex border-b border-[#E5E5E5] mb-12 overflow-x-auto scrollbar-hide">
        {sectors.map((sector, i) => {
          const isActive = activeSector === i;
          return (
            <button
              key={sector.name}
              type="button"
              onClick={() => setActiveSector(i)}
              className={`pb-4 px-6 text-sm whitespace-nowrap transition-colors relative cursor-pointer font-normal ${
                isActive
                  ? 'text-[#000000] font-medium border-b-2 border-[#000000] -mb-[1px]'
                  : 'text-[#4A4A4A] hover:text-[#000000]'
              }`}
              aria-pressed={isActive}
            >
              {sector.name}
            </button>
          );
        })}
      </div>

      {/* Sector Roles Panel */}
      <div className="border-t border-[#E5E5E5] pt-8">
        <h4 className="font-serif text-2xl font-bold text-[#000000] mb-6">
          {sectors[activeSector].name} roles
        </h4>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {sectors[activeSector].roles.map((role) => (
            <div key={role} className="py-3 border-b border-[#E5E5E5]/60">
              <span className="text-sm text-[#000000]">{role}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
