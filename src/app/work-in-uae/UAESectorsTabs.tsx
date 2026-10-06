'use client';

import { useState } from 'react';
import { siteContent } from '@/content/site';

export function UAESectorsTabs() {
  const [activeSector, setActiveSector] = useState(0);
  const sectors = siteContent.uae.sectors;

  return (
    <div>
      {/* Minimal Underline Tabs */}
      <div className="flex border-b border-[#E6DDCC] mb-12 overflow-x-auto scrollbar-hide">
        {sectors.map((sector, i) => {
          const isActive = activeSector === i;
          return (
            <button
              key={sector.name}
              type="button"
              onClick={() => setActiveSector(i)}
              className={`pb-4 px-6 text-sm whitespace-nowrap transition-colors relative cursor-pointer font-normal ${
                isActive
                  ? 'text-[#2A2A2A] font-medium border-b-2 border-[#2A2A2A] -mb-[1px]'
                  : 'text-[#57514A] hover:text-[#2A2A2A]'
              }`}
              aria-pressed={isActive}
            >
              {sector.name}
            </button>
          );
        })}
      </div>

      {/* Sector Roles Panel */}
      <div className="border-t border-[#E6DDCC] pt-8">
        <h4 className="font-serif text-2xl font-bold text-[#2A2A2A] mb-6">
          {sectors[activeSector].name} roles
        </h4>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {sectors[activeSector].roles.map((role) => (
            <div key={role} className="py-3 border-b border-[#E6DDCC]/60">
              <span className="text-sm text-[#2A2A2A]">{role}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
