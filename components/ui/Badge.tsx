import { ReactNode } from 'react';

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

type BadgeVariant = 'default' | 'blue' | 'outline' | 'success';
type BadgeSize = 'sm' | 'md';

export interface BadgeProps {
  /** Visual variant */
  variant?: BadgeVariant;
  /** Size preset */
  size?: BadgeSize;
  /** Additional Tailwind classes */
  className?: string;
  /** Badge contents */
  children: ReactNode;
}

/* ------------------------------------------------------------------ */
/*  Style maps                                                         */
/* ------------------------------------------------------------------ */

const variantStyles: Record<BadgeVariant, string> = {
  default:
    'bg-[#1E293B] text-[#CBD5E1] border border-[#334155]',
  blue:
    'bg-[#2563EB]/15 text-[#93C5FD] border border-[#2563EB]/30',
  outline:
    'bg-transparent text-[#94A3B8] border border-[#475569]',
  success:
    'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30',
};

const sizeStyles: Record<BadgeSize, string> = {
  sm: 'px-2 py-0.5 text-[11px]',
  md: 'px-3 py-1 text-xs',
};

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function Badge({
  variant = 'default',
  size = 'md',
  className = '',
  children,
}: BadgeProps) {
  return (
    <span
      className={[
        'inline-flex items-center justify-center',
        'rounded-full font-medium leading-none whitespace-nowrap',
        variantStyles[variant],
        sizeStyles[size],
        className,
      ].join(' ')}
    >
      {children}
    </span>
  );
}
