'use client';

import { NicheData } from '@/types/niche';
import SectionWrapper from '@/components/ui/SectionWrapper';
import AnimatedSection from '@/components/ui/AnimatedSection';

/* ------------------------------------------------------------------ */
/*  Props                                                               */
/* ------------------------------------------------------------------ */

interface PainPointsProps {
  data: NicheData;
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function PainPoints({ data }: PainPointsProps) {
  return (
    <SectionWrapper dark>
      <AnimatedSection variant="fadeUp">
        {/* Headline */}
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center max-w-3xl mx-auto">
          Most {data.name} businesses lose leads because&hellip;
        </h2>

        {/* Pain point cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {data.painPoints.map((point, index) => (
            <AnimatedSection
              key={index}
              variant="fadeUp"
              delay={index * 0.1}
            >
              <div className="bg-[#111] border border-white/10 rounded-xl p-6 flex items-start gap-4 h-full">
                {/* Number indicator */}
                <span className="text-sm font-mono text-gray-400 mt-0.5 shrink-0">
                  {String(index + 1).padStart(2, '0')}
                </span>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    {/* Red accent dot */}
                    <span className="w-3 h-3 rounded-full bg-red-500 shrink-0" />
                    <span className="text-gray-300 leading-relaxed">
                      {point}
                    </span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </AnimatedSection>
    </SectionWrapper>
  );
}
