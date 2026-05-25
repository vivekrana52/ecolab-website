'use client';

import Link from 'next/link';
import SectionWrapper from '@/components/ui/SectionWrapper';
import AnimatedSection from '@/components/ui/AnimatedSection';

/* ------------------------------------------------------------------ */
/*  Niche data                                                          */
/* ------------------------------------------------------------------ */

interface Niche {
  emoji: string;
  name: string;
  slug: string;
  description: string;
}

const niches: Niche[] = [
  {
    emoji: '🏠',
    name: 'Real Estate',
    slug: 'real-estate',
    description:
      'Capture, qualify, and follow up with property leads automatically. Never lose a deal to slow response times.',
  },
  {
    emoji: '💪',
    name: 'Gyms',
    slug: 'gyms',
    description:
      'Convert trial visitors into paying members with automated follow-ups, check-ins, and reactivation campaigns.',
  },
  {
    emoji: '🛒',
    name: 'Ecommerce',
    slug: 'ecommerce',
    description:
      'Recover abandoned carts, drive repeat purchases, and automate customer engagement across every channel.',
  },
  {
    emoji: '🚀',
    name: 'Agencies',
    slug: 'agencies',
    description:
      'Streamline client acquisition with automated proposals, onboarding, and retention workflows.',
  },
  {
    emoji: '🎯',
    name: 'Coaches',
    slug: 'coaches',
    description:
      'Fill your calendar with qualified discovery calls and automate your entire client journey.',
  },
];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function NicheGrid() {
  return (
    <SectionWrapper dark={true} id="niches">
      <div className="text-center">
        {/* Section label */}
        <AnimatedSection variant="fadeUp">
          <span className="text-sm uppercase tracking-wider text-[#2563EB] font-semibold">
            Built For Your Industry
          </span>

          {/* Headline */}
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-4">
            AI Automation Systems For Every Business
          </h2>

          {/* Subtext */}
          <p className="text-gray-400 text-lg mt-4 max-w-2xl mx-auto">
            Choose your niche and get a complete automation system designed
            specifically for your industry.
          </p>
        </AnimatedSection>
      </div>

      {/* Grid */}
      <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {niches.map((niche, index) => (
          <AnimatedSection
            key={niche.slug}
            variant="fadeUp"
            delay={index * 0.1}
            className={
              /* Center the last two cards on lg screens */
              index >= 3 ? 'lg:col-span-1 lg:last:col-start-auto' : ''
            }
          >
            <Link href={`/solutions/${niche.slug}`} className="block h-full">
              <div className="bg-[#111111] rounded-2xl border border-white/10 p-6 h-full flex flex-col hover:border-white/20 hover:shadow-2xl hover:shadow-electric-blue/10 hover:-translate-y-1 transition-all duration-300 group">
                {/* Emoji icon */}
                <span className="text-3xl">{niche.emoji}</span>

                {/* Name */}
                <h3 className="text-lg font-bold text-white mt-4">
                  {niche.name}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm mt-2 flex-1">
                  {niche.description}
                </p>

                {/* Learn More link */}
                <span className="text-white text-sm font-medium mt-4 inline-flex items-center gap-1 group-hover:text-[#2563EB] transition-colors">
                  Learn More
                  <svg
                    className="w-4 h-4 transition-transform group-hover:translate-x-0.5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </div>
            </Link>
          </AnimatedSection>
        ))}
      </div>
    </SectionWrapper>
  );
}
