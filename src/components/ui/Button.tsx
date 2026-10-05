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
    primary: 'bg-[#E59217] hover:bg-[#F2A23A] text-black',
    secondary: 'bg-[#E5E5E5]/50 hover:bg-[#E5E5E5] text-[#000000]',
    outline: 'border border-[#000000] text-[#000000] hover:bg-[#000000] hover:text-[#FFFFFF]',
    ghost: 'hover:bg-[#E5E5E5]/30 text-[#000000]',
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
