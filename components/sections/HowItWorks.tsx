'use client';

import SectionWrapper from '@/components/ui/SectionWrapper';
import AnimatedSection from '@/components/ui/AnimatedSection';

/* ------------------------------------------------------------------ */
/*  Data                                                                */
/* ------------------------------------------------------------------ */

interface Step {
  number: string;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    number: '01',
    title: 'Choose Your Niche',
    description:
      'Pick the industry-specific automation system built for your business — Real Estate, Gyms, Ecommerce, Agencies, or Coaches.',
  },
  {
    number: '02',
    title: 'Get Your Complete System',
    description:
      'Receive a fully built automation system with workflows, templates, SOPs, and integration guides ready to deploy immediately.',
  },
  {
    number: '03',
    title: 'Deploy In Hours, Not Weeks',
    description:
      'Follow the step-by-step setup guide or let our team handle it. Most systems are fully live within 48-72 hours.',
  },
  {
    number: '04',
    title: 'Watch Leads Convert Automatically',
    description:
      'Your AI automation captures, qualifies, and follows up with every lead — 24/7. You focus on closing and growing.',
  },
];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function HowItWorks() {
  return (
    <SectionWrapper dark={true} id="how-it-works" className="!py-10 lg:!py-16">
      <div className="text-center">
        <AnimatedSection variant="fadeUp">
          <span className="text-sm uppercase tracking-wider text-[#2563EB] font-semibold">
            How It Works
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
            Live In 4 Simple Steps
          </h2>
          <p className="text-gray-400 text-base md:text-lg mt-3 max-w-2xl mx-auto">
            From choosing your niche to watching leads convert — here&apos;s
            how fast you can automate your business.
          </p>
        </AnimatedSection>
      </div>

      {/* Steps */}
      <div className="mt-8 max-w-3xl mx-auto relative">
        {/* Vertical connector line */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-[#1E1E1E]" />

        <div className="flex flex-col gap-8">
          {steps.map((step, index) => (
            <AnimatedSection
              key={step.number}
              variant="fadeUp"
              delay={index * 0.15}
            >
              <div className="flex flex-col items-center text-center relative gap-3 bg-[#0A0A0A] py-4">
                {/* Number circle */}
                <div className="relative z-10 flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#111111] border-2 border-[#2563EB] flex items-center justify-center">
                  <span className="text-xs md:text-sm font-bold text-[#2563EB]">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <div className="pt-1">
                  <h3 className="text-lg md:text-xl font-bold text-white">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-400 mt-2 leading-relaxed max-w-md mx-auto">
                    {step.description}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
