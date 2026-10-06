'use client';

import { useState } from 'react';
import { siteContent } from '@/content/site';

export function CourseTabs() {
  const [activeTab, setActiveTab] = useState(0);
  const categories = siteContent.southKorea.courseCategories;

  return (
    <div>
      {/* Minimal Tab Bar with Hairline Border */}
      <div className="flex border-b border-[#E6DDCC] mb-12 overflow-x-auto scrollbar-hide">
        {categories.map((cat, i) => {
          const isActive = activeTab === i;
          return (
            <button
              key={cat.name}
              type="button"
              onClick={() => setActiveTab(i)}
              className={`pb-4 px-4 sm:px-6 text-sm whitespace-nowrap transition-colors relative cursor-pointer font-normal ${
                isActive
                  ? 'text-[#2A2A2A] font-medium border-b-2 border-[#2A2A2A] -mb-[1px]'
                  : 'text-[#57514A] hover:text-[#2A2A2A]'
              }`}
              aria-pressed={isActive}
            >
              {cat.name}
            </button>
          );
        })}
      </div>

      {/* Tab Content Panel */}
      <div>
        {(() => {
          const cat = categories[activeTab];
          if ('subcategories' in cat && cat.subcategories) {
            return (
              <div className="grid md:grid-cols-3 gap-8">
                {cat.subcategories.map((sub) => (
                  <div key={sub.name} className="border-t border-[#E6DDCC] pt-6">
                    <h4 className="font-serif text-lg font-bold text-[#2A2A2A] mb-4">
                      {sub.name}
                    </h4>
                    <ul className="space-y-2 text-sm text-[#57514A]">
                      {sub.courses.map((course) => (
                        <li key={course} className="leading-relaxed">
                          {course}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            );
          } else if ('courses' in cat && cat.courses) {
            return (
              <div className="border-t border-[#E6DDCC] pt-6">
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {cat.courses.map((course) => (
                    <div key={course} className="py-2 border-b border-[#E6DDCC]/60">
                      <span className="text-sm text-[#2A2A2A]">{course}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          }
          return null;
        })()}
      </div>
    </div>
  );
}
