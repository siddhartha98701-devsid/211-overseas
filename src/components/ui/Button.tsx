import Link from 'next/link';
import type { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'md' | 'lg';
  className?: string;
  type?: 'button' | 'submit';
  onClick?: () => void;
  ariaLabel?: string;
}

export function Button({
  children,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  type = 'button',
  onClick,
  ariaLabel,
}: ButtonProps) {
  const baseClasses =
    'inline-flex items-center justify-center font-normal tracking-wide transition-colors duration-200 cursor-pointer text-center';
  const sizeClasses =
    size === 'lg' ? 'px-8 py-3.5 text-sm uppercase tracking-wider' : 'px-6 py-2.5 text-xs uppercase tracking-wider';

  const variantClasses = {
    primary: 'bg-[#A33E11] hover:bg-[#85320D] text-white font-semibold',
    secondary: 'bg-[#E6DDCC]/50 hover:bg-[#E6DDCC] text-[#1B1C1A]',
    outline: 'border border-[#1B1C1A] text-[#1B1C1A] hover:bg-[#1B1C1A] hover:text-[#FFFFFF]',
    ghost: 'hover:bg-[#E6DDCC]/30 text-[#1B1C1A]',
  };

  const classes = `${baseClasses} ${sizeClasses} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
