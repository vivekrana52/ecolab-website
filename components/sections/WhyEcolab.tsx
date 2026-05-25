'use client';

import SectionWrapper from '@/components/ui/SectionWrapper';
import AnimatedSection from '@/components/ui/AnimatedSection';

/* ------------------------------------------------------------------ */
/*  Data                                                                */
/* ------------------------------------------------------------------ */

interface ValueProp {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const valueProps: ValueProp[] = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: 'Instant Response, 24/7',
    description:
      'Every lead gets a personalized response in under 60 seconds — day or night, weekday or weekend. No more cold leads from slow follow-ups.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 010 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 010-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Complete Systems, Not Templates',
    description:
      'You don\'t get a PDF and a "good luck." You get fully built, deployable automation systems — workflows, integrations, SOPs, and templates included.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3H21m-3.75 3H21" />
      </svg>
    ),
    title: 'Built For Your Industry',
    description:
      'Every system is designed for a specific niche — Real Estate, Gyms, Ecommerce, Agencies, or Coaches. No generic, one-size-fits-all approach.',
  },
];

/* ------------------------------------------------------------------ */
/*  Stats                                                               */
/* ------------------------------------------------------------------ */

interface Stat {
  value: string;
  label: string;
}

const stats: Stat[] = [
  { value: '<60s', label: 'Average Response Time' },
  { value: '10x', label: 'Faster Than Manual Follow-Up' },
  { value: '5+', label: 'Industries Covered' },
  { value: '24/7', label: 'Always-On Automation' },
];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function WhyEcolab() {
  return (
    <SectionWrapper dark id="why-ecolab">
      <div className="text-center">
        <AnimatedSection variant="fadeUp">
          <span className="text-sm uppercase tracking-wider text-[#2563EB] font-semibold">
            Why ECOLAB
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-4">
            Stop Losing Revenue to Slow Processes
          </h2>
          <p className="text-gray-400 text-lg mt-4 max-w-2xl mx-auto leading-relaxed">
            Most businesses lose 40-60% of leads because they can&apos;t respond fast enough.
            ECOLAB fixes that with intelligent automation built for your industry.
          </p>
        </AnimatedSection>
      </div>

      {/* Value Props Grid */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        {valueProps.map((prop, index) => (
          <AnimatedSection key={prop.title} variant="fadeUp" delay={index * 0.15}>
            <div className="bg-[#111] border border-white/[0.08] rounded-2xl p-8 h-full hover:border-white/20 transition-colors duration-300">
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-[#2563EB]/10 border border-[#2563EB]/20 flex items-center justify-center text-[#2563EB]">
                {prop.icon}
              </div>
              {/* Title */}
              <h3 className="text-xl font-bold text-white mt-6">
                {prop.title}
              </h3>
              {/* Description */}
              <p className="text-gray-400 mt-3 leading-relaxed">
                {prop.description}
              </p>
            </div>
          </AnimatedSection>
        ))}
      </div>

      {/* Stats Bar */}
      <AnimatedSection variant="fadeUp" delay={0.3}>
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 py-10 border-t border-b border-white/[0.08]">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <span className="text-3xl md:text-4xl font-bold text-[#2563EB]">
                {stat.value}
              </span>
              <p className="text-sm text-gray-400 mt-2 font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </AnimatedSection>
    </SectionWrapper>
  );
}
