'use client';

import { NicheData } from '@/types/niche';
import SectionWrapper from '@/components/ui/SectionWrapper';
import AnimatedSection from '@/components/ui/AnimatedSection';

/* ------------------------------------------------------------------ */
/*  Props                                                               */
/* ------------------------------------------------------------------ */

interface DeliverablesProps {
  data: NicheData;
}

/* ------------------------------------------------------------------ */
/*  Checkmark icon                                                      */
/* ------------------------------------------------------------------ */

function CheckIcon() {
  return (
    <svg
      className="w-6 h-6 text-[#2563EB] shrink-0"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="12" fill="currentColor" fillOpacity={0.15} />
      <path
        d="M8 12.5l2.5 2.5L16 9.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function Deliverables({ data }: DeliverablesProps) {
  return (
    <SectionWrapper dark>
      <AnimatedSection variant="fadeUp">
        {/* Headline */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Everything You Get
          </h2>
          <p className="text-gray-400 mt-4 text-lg">
            Your complete {data.name} automation system includes:
          </p>
        </div>

        {/* Deliverables grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12 max-w-4xl mx-auto">
          {data.deliverables.map((item, index) => (
            <AnimatedSection
              key={index}
              variant="fadeUp"
              delay={index * 0.08}
            >
              <div className="flex items-start gap-3 p-4 rounded-xl bg-[#111111]/[0.03] border border-white/[0.06] hover:border-white/10 transition-colors">
                <CheckIcon />
                <span className="text-gray-300 leading-relaxed">{item}</span>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </AnimatedSection>
    </SectionWrapper>
  );
}
