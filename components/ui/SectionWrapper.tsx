import { ReactNode } from 'react';

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

export interface SectionWrapperProps {
  /** Section contents */
  children: ReactNode;
  /** Additional Tailwind classes for the outer <section> */
  className?: string;
  /** Dark background mode */
  dark?: boolean;
  /** HTML id for anchor links */
  id?: string;
  /** Disable default vertical padding */
  noPadding?: boolean;
}

/* ------------------------------------------------------------------ */
/*  Component (Server Component — no 'use client')                     */
/* ------------------------------------------------------------------ */

export default function SectionWrapper({
  children,
  className = '',
  dark = false,
  id,
  noPadding = false,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={[
        dark ? 'bg-[#0A0A0A] text-white' : 'bg-[#F8FAFC] text-white',
        noPadding ? '' : 'py-16 lg:py-24',
        className,
      ].join(' ')}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}
