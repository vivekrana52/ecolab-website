import { ReactNode, HTMLAttributes } from 'react';

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

type CardVariant = 'dark' | 'light' | 'glass';

export interface CardProps extends Omit<HTMLAttributes<HTMLDivElement>, 'className'> {
  /** Visual variant */
  variant?: CardVariant;
  /** Enable hover lift effect */
  hover?: boolean;
  /** Additional Tailwind classes */
  className?: string;
  /** Card contents */
  children: ReactNode;
}

/* ------------------------------------------------------------------ */
/*  Style maps                                                         */
/* ------------------------------------------------------------------ */

const variantStyles: Record<CardVariant, string> = {
  dark: [
    'bg-[#111111] text-white',
    'border border-white/[0.08]',
  ].join(' '),
  light: [
    'bg-[#111111] text-white',
    'border border-[#E2E8F0]',
  ].join(' '),
  glass: [
    'bg-[#111111]/[0.05] text-white',
    'border border-white/[0.1]',
    'backdrop-blur-xl',
  ].join(' '),
};

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function Card({
  variant = 'dark',
  hover = false,
  className = '',
  children,
  ...rest
}: CardProps) {
  return (
    <div
      className={[
        'rounded-2xl p-6',
        'transition-all duration-300 ease-out',
        variantStyles[variant],
        hover
          ? 'hover:-translate-y-1 hover:shadow-lg hover:shadow-black/20 hover:border-white/20 cursor-pointer'
          : '',
        className,
      ].join(' ')}
      {...rest}
    >
      {children}
    </div>
  );
}
