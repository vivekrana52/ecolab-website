'use client';

import { NicheData } from '@/types/niche';
import SectionWrapper from '@/components/ui/SectionWrapper';
import AnimatedSection from '@/components/ui/AnimatedSection';

/* ------------------------------------------------------------------ */
/*  Props                                                               */
/* ------------------------------------------------------------------ */

interface NicheSocialProofProps {
  data: NicheData;
}

/* ------------------------------------------------------------------ */
/*  Star rating                                                         */
/* ------------------------------------------------------------------ */

function StarRating() {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className="w-4 h-4 text-yellow-400"
          viewBox="0 0 20 20"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Generate testimonials based on niche name                           */
/* ------------------------------------------------------------------ */

function getTestimonials(nicheName: string) {
  return [
    {
      name: 'Sarah Mitchell',
      role: `${nicheName} Business Owner`,
      quote: `ECOLAB completely transformed how we handle leads. We went from missing 40% of inquiries to responding within 30 seconds — automatically. Our conversion rate jumped 3x in the first month.`,
      metric: '3x more conversions',
    },
    {
      name: 'David Chen',
      role: `${nicheName} Operations Manager`,
      quote: `Before ECOLAB, our team spent hours on manual follow-ups. Now the AI handles it all — scheduling, reminders, re-engagement. We saved 20+ hours a week and our revenue is up 45%.`,
      metric: '20+ hours saved weekly',
    },
  ];
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function NicheSocialProof({ data }: NicheSocialProofProps) {
  const testimonials = getTestimonials(data.name);

  return (
    <SectionWrapper dark>
      <AnimatedSection variant="fadeUp">
        {/* Section label */}
        <div className="text-center">
          <span className="text-sm uppercase tracking-wider text-[#2563EB] font-semibold">
            Social Proof
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-4">
            Results From {data.name} Businesses
          </h2>
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection
              key={index}
              variant="fadeUp"
              delay={index * 0.15}
            >
              <div className="bg-[#111] border border-white/10 rounded-2xl p-8 h-full flex flex-col">
                {/* Stars */}
                <StarRating />

                {/* Quote */}
                <blockquote className="text-gray-300 leading-relaxed mt-5 flex-1">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>

                {/* Metric highlight */}
                <div className="mt-6 mb-6 px-4 py-2 rounded-lg bg-[#2563EB]/10 border border-[#2563EB]/20 inline-flex self-start">
                  <span className="text-[#2563EB] text-sm font-semibold">
                    {testimonial.metric}
                  </span>
                </div>

                {/* Author */}
                <div className="flex items-center gap-3">
                  {/* Gradient avatar placeholder */}
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#2563EB] to-[#7C3AED] flex items-center justify-center">
                    <span className="text-white text-sm font-bold">
                      {testimonial.name
                        .split(' ')
                        .map((n) => n[0])
                        .join('')}
                    </span>
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold">
                      {testimonial.name}
                    </p>
                    <p className="text-gray-400 text-xs">
                      {testimonial.role}
                    </p>
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
