'use client';

import { NicheData } from '@/types/niche';
import SectionWrapper from '@/components/ui/SectionWrapper';
import AnimatedSection from '@/components/ui/AnimatedSection';

/* ------------------------------------------------------------------ */
/*  Props                                                               */
/* ------------------------------------------------------------------ */

interface SolutionWorkflowProps {
  data: NicheData;
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function SolutionWorkflow({ data }: SolutionWorkflowProps) {
  return (
    <SectionWrapper dark={true}>
      <AnimatedSection variant="fadeUp" className="flex flex-col items-center">
        {/* Section label */}
        <span className="text-sm uppercase tracking-wider text-[#2563EB] font-semibold">
          How It Works
        </span>

        {/* Headline */}
        <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 text-center">
          How Your {data.name} System Works
        </h2>

        {/* Workflow timeline */}
        <div className="mt-14 w-full max-w-2xl">
          <div className="relative">
            {/* Connecting vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-px border-l-2 border-[#2563EB]/30" />

            {/* Steps */}
            <div className="space-y-10">
              {data.workflow.map((item, index) => (
                <AnimatedSection
                  key={index}
                  variant="fadeUp"
                  delay={index * 0.15}
                >
                  <div className="relative flex items-start gap-6">
                    {/* Step number circle */}
                    <div className="relative z-10 w-12 h-12 rounded-full bg-[#2563EB] flex items-center justify-center shrink-0 shadow-lg shadow-blue-500/20">
                      <span className="text-white text-sm font-bold">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>

                    {/* Step content */}
                    <div className="flex-1 pt-2.5">
                      <h3 className="text-lg font-semibold text-white">
                        {item.step}
                      </h3>
                      <p className="text-gray-400 mt-1 leading-relaxed">
                        {item.label}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>
    </SectionWrapper>
  );
}
