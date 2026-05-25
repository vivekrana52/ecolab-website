'use client';

import { ButtonHTMLAttributes, ReactNode } from 'react';
import Link from 'next/link';

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

type ButtonVariant = 'primary' | 'secondary' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonBaseProps {
  /** Visual variant */
  variant?: ButtonVariant;
  /** Size preset */
  size?: ButtonSize;
  /** Show loading spinner and disable interactions */
  loading?: boolean;
  /** Render as Next.js Link when provided */
  href?: string;
  /** Additional Tailwind classes */
  className?: string;
  /** Button contents */
  children: ReactNode;
}

type ButtonAsButton = ButtonBaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonBaseProps>;

export type ButtonProps = ButtonAsButton;

/* ------------------------------------------------------------------ */
/*  Style maps                                                         */
/* ------------------------------------------------------------------ */

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-[#2563EB] text-white border border-transparent hover:bg-[#1D4ED8] hover:shadow-[0_4px_14px_0_rgba(37,99,235,0.39)] active:bg-[#1E40AF] focus-visible:ring-2 focus-visible:ring-[#2563EB]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0E0918]',
  secondary:
    'bg-transparent text-white border border-white/20 hover:bg-[#111111]/5 hover:border-white/40 active:bg-[#111111]/10 focus-visible:ring-2 focus-visible:ring-white/50',
  ghost:
    'bg-transparent text-white border border-transparent hover:bg-[#111111]/10 active:bg-[#111111]/15 focus-visible:ring-2 focus-visible:ring-white/30',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm gap-1.5 rounded-lg',
  md: 'px-6 py-2.5 text-sm gap-2 rounded-lg',
  lg: 'px-8 py-3.5 text-base gap-2.5 rounded-xl',
};

/* ------------------------------------------------------------------ */
/*  Spinner                                                            */
/* ------------------------------------------------------------------ */

function Spinner({ size }: { size: ButtonSize }) {
  const dim = size === 'lg' ? 20 : size === 'md' ? 18 : 16;
  return (
    <svg
      className="animate-spin"
      width={dim}
      height={dim}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="3"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8v3a5 5 0 00-5 5H4z"
      />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function Button({
  variant = 'primary',
  size = 'md',
  loading = false,
  href,
  className = '',
  children,
  disabled,
  type = 'button',
  ...rest
}: ButtonProps) {
  const isDisabled = disabled || loading;

  const classes = [
    'inline-flex items-center justify-center font-medium',
    'transition-all duration-200 ease-out',
    'select-none whitespace-nowrap',
    variantStyles[variant],
    sizeStyles[size],
    isDisabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : 'cursor-pointer',
    className,
  ].join(' ');

  const content = (
    <>
      {loading && <Spinner size={size} />}
      {children}
    </>
  );

  /* ---- Render as Link ---- */
  if (href && !isDisabled) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  /* ---- Render as button ---- */
  return (
    <button
      type={type}
      disabled={isDisabled}
      className={classes}
      {...rest}
    >
      {content}
    </button>
  );
}
