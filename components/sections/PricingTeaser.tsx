'use client';

import Link from 'next/link';
import AnimatedSection from '@/components/ui/AnimatedSection';

/* ------------------------------------------------------------------ */
/*  Data                                                                */
/* ------------------------------------------------------------------ */

interface PricingTier {
  name: string;
  label: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlighted: boolean;
  cta: string;
  buttonStyle: 'outline-blue' | 'solid-blue' | 'outline-muted';
}

const tiers: PricingTier[] = [
  {
    name: 'Starter',
    label: 'STARTER PLAN',
    price: '$9',
    period: '/system',
    description: 'Perfect for solopreneurs testing automation for the first time.',
    features: [
      '1 lead capture workflow',
      'AI follow-up email templates',
      'WhatsApp reply scripts',
      'Basic setup guide',
      'Email support',
    ],
    highlighted: false,
    cta: 'Get Started',
    buttonStyle: 'outline-blue',
  },
  {
    name: 'Pro',
    label: 'PRO PLAN',
    price: '$49',
    period: '/system',
    description: 'Complete automation system for businesses ready to scale.',
    features: [
      'Full lead-to-close automation',
      'Multi-channel follow-up',
      'CRM pipeline with lead scoring',
      'Appointment scheduling',
      'Priority support',
      'Monthly updates',
    ],
    highlighted: true,
    cta: 'Get Started',
    buttonStyle: 'solid-blue',
  },
  {
    name: 'Enterprise',
    label: 'ENTERPRISE PLAN',
    price: 'Custom',
    period: '',
    description: 'For teams that need custom workflows and dedicated support.',
    features: [
      'Everything in Pro',
      'Custom workflow design',
      'Multi-team setup',
      'White-label option',
      'Dedicated onboarding',
      'Direct Slack/WhatsApp support',
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
  style: PricingTier['buttonStyle'];
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

export default function PricingTeaser() {
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
              Simple, Transparent Pricing
            </h2>
            <p className="text-[16px] text-[#64748B] mt-3 leading-relaxed">
              No subscriptions. No hidden fees. Pay once, own your automation
              system forever.
            </p>
          </div>
        </AnimatedSection>

        {/* Cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto items-stretch">
          {tiers.map((tier, index) => (
            <AnimatedSection key={tier.name} variant="fadeUp" delay={index * 0.1}>
              <div
                className={[
                  'rounded-xl p-8 h-full flex flex-col',
                  tier.highlighted
                    ? 'bg-[#0F1629] border border-[#2563EB]'
                    : 'bg-[#111111] border border-[#1E1E1E]',
                ].join(' ')}
                style={
                  tier.highlighted
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
                    {tier.label}
                  </span>
                  {tier.highlighted && (
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
                  {tier.name}
                </h3>

                {/* Price */}
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-[48px] font-bold text-white leading-none">
                    {tier.price}
                  </span>
                  {tier.period && (
                    <span className="text-[14px] text-[#64748B]">{tier.period}</span>
                  )}
                </div>

                {/* Description */}
                <p className="text-[14px] text-[#64748B] mt-3 leading-relaxed">
                  {tier.description}
                </p>

                {/* Divider */}
                <div className="border-t border-[#1E1E1E] my-6" />

                {/* Features */}
                <ul className="flex-1 flex flex-col gap-2">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <CheckIcon highlighted={tier.highlighted} />
                      <span className="text-[14px] text-[#94A3B8]" style={{ lineHeight: '1.8' }}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="mt-8">
                  <PricingButton
                    href={`/checkout?plan=${tier.name.toLowerCase()}`}
                    label={tier.cta}
                    style={tier.buttonStyle}
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
