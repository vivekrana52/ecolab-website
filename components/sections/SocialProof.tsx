'use client';

import SectionWrapper from '@/components/ui/SectionWrapper';
import AnimatedSection from '@/components/ui/AnimatedSection';

/* ------------------------------------------------------------------ */
/*  Data                                                                */
/* ------------------------------------------------------------------ */

interface Testimonial {
  name: string;
  role: string;
  industry: string;
  quote: string;
  metric: string;
  metricLabel: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Rahul Sharma',
    role: 'Founder',
    industry: 'Real Estate',
    quote:
      'We went from missing 60% of our leads to responding to every single one within a minute. Our conversion rate doubled in the first month.',
    metric: '2x',
    metricLabel: 'Conversion Rate',
  },
  {
    name: 'Priya Patel',
    role: 'Owner',
    industry: 'Gym & Fitness',
    quote:
      'The trial-to-member automation alone paid for itself in the first week. We reduced no-shows by 65% and our front desk can finally focus on member experience.',
    metric: '65%',
    metricLabel: 'Fewer No-Shows',
  },
  {
    name: 'Arjun Mehta',
    role: 'CEO',
    industry: 'Digital Agency',
    quote:
      'Client onboarding used to take us 2 weeks of back-and-forth emails. Now it\'s fully automated and done in 48 hours. Game changer for scaling.',
    metric: '48hr',
    metricLabel: 'Onboarding Time',
  },
];

/* ------------------------------------------------------------------ */
/*  Star Rating                                                         */
/* ------------------------------------------------------------------ */

function StarRating() {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className="w-4 h-4 text-amber-400"
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function SocialProof() {
  return (
    <SectionWrapper dark id="testimonials">
      <div className="text-center">
        <AnimatedSection variant="fadeUp">
          <span className="text-sm uppercase tracking-wider text-[#2563EB] font-semibold">
            Real Results
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-4">
            Trusted by Businesses Across Industries
          </h2>
          <p className="text-gray-400 text-lg mt-4 max-w-2xl mx-auto">
            See what happens when you stop losing leads and start automating
            your customer communication.
          </p>
        </AnimatedSection>
      </div>

      {/* Testimonial Grid */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t, index) => (
          <AnimatedSection key={t.name} variant="fadeUp" delay={index * 0.15}>
            <div className="bg-[#111] border border-white/[0.08] rounded-2xl p-8 h-full flex flex-col hover:border-white/15 transition-colors duration-300">
              {/* Stars */}
              <StarRating />

              {/* Quote */}
              <p className="text-gray-300 mt-5 leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Metric */}
              <div className="mt-6 py-4 border-t border-white/[0.08]">
                <span className="text-2xl font-bold text-[#2563EB]">
                  {t.metric}
                </span>
                <span className="text-sm text-gray-400 ml-2">
                  {t.metricLabel}
                </span>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 mt-4">
                {/* Avatar with initials */}
                <div className="w-10 h-10 rounded-full bg-[#2563EB]/15 border border-[#2563EB]/25 flex items-center justify-center">
                  <span className="text-sm font-bold text-[#2563EB]">
                    {t.name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{t.name}</p>
                  <p className="text-xs text-gray-400">
                    {t.role}, {t.industry}
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </SectionWrapper>
  );
}
