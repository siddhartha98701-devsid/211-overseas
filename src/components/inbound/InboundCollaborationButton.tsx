'use client';

import React from 'react';

export function InboundCollaborationButton() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (typeof window !== 'undefined') {
      window.dispatchEvent(
        new CustomEvent('set-inbound-enquiry-type', {
          detail: 'Institutional collaboration',
        })
      );
      const formEl = document.getElementById('inbound-form');
      if (formEl) {
        formEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <a
      href="#inbound-form"
      onClick={handleClick}
      className="btn-shine bg-[#A33E11] hover:bg-[#85320D] text-white px-7 py-3.5 text-xs uppercase tracking-widest font-semibold transition-colors inline-flex items-center gap-2 cursor-pointer shadow-md"
    >
      <span>Explore Collaboration ↗</span>
    </a>
  );
}
