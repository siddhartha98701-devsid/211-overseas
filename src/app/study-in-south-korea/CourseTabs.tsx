'use client';

import { useState } from 'react';
import { siteContent } from '@/content/site';

export function CourseTabs() {
  const [activeTab, setActiveTab] = useState(0);
  const categories = siteContent.southKorea.courseCategories;

  return (
    <div>
      {/* Minimal Tab Bar with Hairline Border */}
      <div className="flex border-b border-[#DDD7CC] mb-12 overflow-x-auto scrollbar-hide">
        {categories.map((cat, i) => {
          const isActive = activeTab === i;
          return (
            <button
              key={cat.name}
              type="button"
              onClick={() => setActiveTab(i)}
              className={`pb-4 px-4 sm:px-6 text-sm whitespace-nowrap transition-colors relative cursor-pointer font-normal ${
                isActive
                  ? 'text-[#15140F] font-medium border-b-2 border-[#15140F] -mb-[1px]'
                  : 'text-[#6C675E] hover:text-[#15140F]'
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
                  <div key={sub.name} className="border-t border-[#DDD7CC] pt-6">
                    <h4 className="font-serif text-xl font-light text-[#15140F] mb-4">
                      {sub.name}
                    </h4>
                    <ul className="space-y-2 text-sm text-[#6C675E]">
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
              <div className="border-t border-[#DDD7CC] pt-6">
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {cat.courses.map((course) => (
                    <div key={course} className="py-2 border-b border-[#DDD7CC]/60">
                      <span className="text-sm text-[#15140F]">{course}</span>
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
