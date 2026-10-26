'use client';

import React from 'react';

interface BotanicalWatermarkProps {
  className?: string;
  variant?: 'rust' | 'emerald' | 'gold' | 'duo';
  opacity?: number;
}

/**
 * BotanicalWatermark
 * Decorative stylized botanical leaf SVG watermark with rich color contrast.
 * Non-intrusive, zero pointer-events, responsive.
 */
export function BotanicalWatermark({
  className = '',
  variant = 'rust',
  opacity = 0.12,
}: BotanicalWatermarkProps) {
  const getColors = () => {
    switch (variant) {
      case 'emerald':
        return { primary: '#1B4931', secondary: '#2D6A4F', vein: '#0D2D1E' };
      case 'gold':
        return { primary: '#C4881C', secondary: '#E5A93C', vein: '#8C5A0D' };
      case 'duo':
        return { primary: '#A33E11', secondary: '#2D6A4F', vein: '#581904' };
      case 'rust':
      default:
        return { primary: '#A33E11', secondary: '#D95D26', vein: '#581904' };
    }
  };

  const colors = getColors();

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none select-none absolute overflow-hidden ${className}`}
      style={{ opacity }}
    >
      <svg
        viewBox="0 0 240 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <g transform="rotate(18 120 120)">
          {/* Main Leaf Body */}
          <path
            d="M120 20C170 50 205 105 185 170C165 210 120 220 120 220C120 220 75 210 55 170C35 105 70 50 120 20Z"
            fill={colors.primary}
            fillOpacity="0.8"
          />
          {/* Leaf Inner Contour */}
          <path
            d="M120 35C155 60 180 105 165 155C150 185 120 205 120 205C120 205 90 185 75 155C60 105 85 60 120 35Z"
            fill={colors.secondary}
            fillOpacity="0.45"
          />
          {/* Central Stem Vein */}
          <path
            d="M120 25L120 220"
            stroke={colors.vein}
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          {/* Lateral Veins */}
          <path
            d="M120 70C138 60 155 70 162 76"
            stroke={colors.vein}
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <path
            d="M120 90C102 80 85 90 78 96"
            stroke={colors.vein}
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <path
            d="M120 115C142 105 162 115 170 122"
            stroke={colors.vein}
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <path
            d="M120 135C98 125 78 135 70 142"
            stroke={colors.vein}
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <path
            d="M120 160C136 152 150 160 156 166"
            stroke={colors.vein}
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M120 178C104 170 90 178 84 184"
            stroke={colors.vein}
            strokeWidth="2"
            strokeLinecap="round"
          />
        </g>
      </svg>
    </div>
  );
}

/**
 * ColorContrastLeafPair
 * Small decorative pair of contrasting leaves (Rust & Emerald) for badges/section headers.
 */
export function ColorContrastLeafPair({ className = '' }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-1 shrink-0 ${className}`} aria-hidden="true">
      {/* Terracotta Rust Leaf */}
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="transform -rotate-12">
        <path
          d="M12 2C15.5 5 18 9.5 16.5 14C15 17 12 18.5 12 18.5C12 18.5 9 17 7.5 14C6 9.5 8.5 5 12 2Z"
          fill="#A33E11"
        />
        <path d="M12 2V19" stroke="#581904" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
      {/* Forest Emerald Leaf */}
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" className="transform rotate-24">
        <path
          d="M12 2C15.5 5 18 9.5 16.5 14C15 17 12 18.5 12 18.5C12 18.5 9 17 7.5 14C6 9.5 8.5 5 12 2Z"
          fill="#1B4931"
        />
        <path d="M12 2V19" stroke="#0D2D1E" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    </span>
  );
}
