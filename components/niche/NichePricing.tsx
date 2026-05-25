'use client';

import Link from 'next/link';
import { NicheData } from '@/types/niche';
import AnimatedSection from '@/components/ui/AnimatedSection';

/* ------------------------------------------------------------------ */
/*  Props                                                               */
/* ------------------------------------------------------------------ */

interface NichePricingProps {
  data: NicheData;
}

/* ------------------------------------------------------------------ */
/*  Plan metadata                                                       */
/* ------------------------------------------------------------------ */

interface PlanMeta {
  key: 'starter' | 'pro' | 'enterprise';
  label: string;
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlighted: boolean;
  cta: string;
  buttonStyle: 'outline-blue' | 'solid-blue' | 'outline-muted';
}

const plans: PlanMeta[] = [
  {
    key: 'starter',
    label: 'STARTER PLAN',
    name: 'Starter',
    price: '$9',
    period: '/system',
    description: 'Perfect for getting started with one niche.',
    features: [
      '1 niche workflow system',
      'AI follow-up templates',
      'WhatsApp reply scripts',
      'Email support',
      'Onboarding video',
    ],
    highlighted: false,
    cta: 'Get Started',
    buttonStyle: 'outline-blue',
  },
  {
    key: 'pro',
    label: 'PRO PLAN',
    name: 'Pro',
    price: '$49',
    period: '/system',
    description: 'Best for businesses ready to scale automation.',
    features: [
      '3 niche workflow systems',
      'Full automation SOPs',
      'CRM pipeline templates',
      'WhatsApp + Email sequences',
      'Priority support',
      'Monthly updates',
    ],
    highlighted: true,
    cta: 'Get Started',
    buttonStyle: 'solid-blue',
  },
  {
    key: 'enterprise',
    label: 'ENTERPRISE PLAN',
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For businesses that need everything.',
    features: [
      'All niches included',
      'Custom workflows',
      'Dedicated onboarding',
      'White-label option',
      'Direct support',
      'Custom integrations',
    ],
    highlighted: false,
    cta: 'Contact Sales',
    buttonStyle: 'outline-muted',
  },
];

/* ------------------------------------------------------------------ */
/*  Check icon                                                          */
/* ------------------------------------------------------------------ */

function CheckIcon({ highlighted }: { highlighted: boolean }) {
  return (
    <svg
      className={`w-4 h-4 shrink-0 mt-0.5 ${highlighted ? 'text-[#2563EB]' : 'text-[#64748B]'}`}
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2.5}
      stroke="currentColor"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  CTA Button                                                          */
/* ------------------------------------------------------------------ */

function PricingButton({
  href,
  label,
  style,
}: {
  href: string;
  label: string;
  style: PlanMeta['buttonStyle'];
}) {
  const base =
    'inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-medium transition-all duration-200';

  const variants = {
    'outline-blue': `${base} border border-[#2563EB] text-[#2563EB] bg-transparent hover:bg-[#2563EB] hover:text-white`,
    'solid-blue': `${base} bg-[#2563EB] text-white hover:bg-[#1D4ED8]`,
    'outline-muted': `${base} border border-[#334155] text-[#94A3B8] bg-transparent hover:border-[#2563EB] hover:text-white`,
  };

  return (
    <Link href={href} className={variants[style]}>
      {label}
    </Link>
  );
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function NichePricing({ data }: NichePricingProps) {
  return (
    <section id="pricing" className="bg-[#0A0A0A] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection variant="fadeUp">
          <div className="text-center max-w-2xl mx-auto">
            <span
              className="uppercase font-semibold text-[#2563EB]"
              style={{ fontSize: '11px', letterSpacing: '0.1em' }}
            >
              Pricing
            </span>
            <h2 className="text-[36px] font-bold text-white mt-4 leading-tight">
              Choose Your {data.name} Plan
            </h2>
            <p className="text-[16px] text-[#64748B] mt-3 leading-relaxed">
              Pick the plan that fits your needs. Upgrade anytime.
            </p>
          </div>
        </AnimatedSection>

        {/* Cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto items-stretch">
          {plans.map((plan, index) => (
            <AnimatedSection key={plan.key} variant="fadeUp" delay={index * 0.1}>
              <div
                className={[
                  'rounded-xl p-8 h-full flex flex-col',
                  plan.highlighted
                    ? 'bg-[#0F1629] border border-[#2563EB]'
                    : 'bg-[#111111] border border-[#1E1E1E]',
                ].join(' ')}
                style={
                  plan.highlighted
                    ? {
                        borderTopWidth: '3px',
                        borderTopColor: '#2563EB',
                        boxShadow: '0 0 40px rgba(37, 99, 235, 0.15)',
                      }
                    : undefined
                }
              >
                {/* Plan label */}
                <div className="flex items-center gap-2">
                  <span
                    className="uppercase font-semibold text-[#64748B]"
                    style={{ fontSize: '11px', letterSpacing: '0.1em' }}
                  >
                    {plan.label}
                  </span>
                  {plan.highlighted && (
                    <span
                      className="bg-[#1E3A8A] text-[#93C5FD] font-medium rounded"
                      style={{ fontSize: '11px', padding: '2px 8px' }}
                    >
                      Most Popular
                    </span>
                  )}
                </div>

                {/* Plan name */}
                <h3 className="text-[20px] font-semibold text-white mt-3">
                  {plan.name}
                </h3>

                {/* Price */}
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-[48px] font-bold text-white leading-none">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-[14px] text-[#64748B]">{plan.period}</span>
                  )}
                </div>

                {/* Description */}
                <p className="text-[14px] text-[#64748B] mt-3 leading-relaxed">
                  {plan.description}
                </p>

                {/* Divider */}
                <div className="border-t border-[#1E1E1E] my-6" />

                {/* Features */}
                <ul className="flex-1 flex flex-col gap-2">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <CheckIcon highlighted={plan.highlighted} />
                      <span className="text-[14px] text-[#94A3B8]" style={{ lineHeight: '1.8' }}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="mt-8">
                  <PricingButton
                    href={`/checkout?plan=${plan.name.toLowerCase()}`}
                    label={plan.cta}
                    style={plan.buttonStyle}
                  />
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
