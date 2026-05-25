'use client';

import { NicheData } from '@/types/niche';
import SectionWrapper from '@/components/ui/SectionWrapper';
import AnimatedSection from '@/components/ui/AnimatedSection';

/* ------------------------------------------------------------------ */
/*  Props                                                               */
/* ------------------------------------------------------------------ */

interface BeforeAfterProps {
  data: NicheData;
}

/* ------------------------------------------------------------------ */
/*  Icons                                                               */
/* ------------------------------------------------------------------ */

function XIcon() {
  return (
    <svg
      className="w-5 h-5 text-red-500 shrink-0"
      viewBox="0 0 20 20"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      className="w-5 h-5 text-green-600 shrink-0"
      viewBox="0 0 20 20"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
        clipRule="evenodd"
      />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function BeforeAfter({ data }: BeforeAfterProps) {
  return (
    <SectionWrapper dark={true}>
      <AnimatedSection variant="fadeUp">
        {/* Section label */}
        <div className="text-center">
          <span className="text-sm uppercase tracking-wider text-[#2563EB] font-semibold">
            The Difference
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-4">
            The Transformation
          </h2>
        </div>

        {/* Before / After columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mt-12 max-w-5xl mx-auto">
          {/* Before column */}
          <AnimatedSection variant="slideLeft" delay={0.1}>
            <div className="bg-red-50 border border-red-200 rounded-2xl p-8 h-full">
              <div className="flex items-center gap-2 mb-6">
                <span className="w-3 h-3 rounded-full bg-red-500" />
                <h3 className="text-lg font-bold text-red-900">
                  Before ECOLAB
                </h3>
              </div>

              <ul className="space-y-4">
                {data.beforeAfter.before.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <XIcon />
                    <span className="text-red-800/80 leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>

          {/* After column */}
          <AnimatedSection variant="slideRight" delay={0.1}>
            <div className="bg-green-50 border border-green-200 rounded-2xl p-8 h-full">
              <div className="flex items-center gap-2 mb-6">
                <span className="w-3 h-3 rounded-full bg-green-500" />
                <h3 className="text-lg font-bold text-green-900">
                  After ECOLAB
                </h3>
              </div>

              <ul className="space-y-4">
                {data.beforeAfter.after.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckIcon />
                    <span className="text-green-800/80 leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </AnimatedSection>
    </SectionWrapper>
  );
}
