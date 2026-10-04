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
    primary: 'bg-[#2F4A3C] hover:bg-[#24382E] text-white',
    secondary: 'bg-[#DDD7CC]/50 hover:bg-[#DDD7CC] text-[#15140F]',
    outline: 'border border-[#15140F] text-[#15140F] hover:bg-[#15140F] hover:text-[#F6F3EE]',
    ghost: 'hover:bg-[#DDD7CC]/30 text-[#15140F]',
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
