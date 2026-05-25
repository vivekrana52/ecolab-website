'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '@/components/ui/SectionWrapper';
import AnimatedSection from '@/components/ui/AnimatedSection';
import Button from '@/components/ui/Button';

const plans = [
  {
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
    cta: 'Get Started',
    highlighted: false,
  },
  {
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
    cta: 'Get Started',
    highlighted: true,
    badge: 'Most Popular',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'Contact us',
    description: 'For businesses that need everything.',
    features: [
      'All niches included',
      'Custom workflows',
      'Dedicated onboarding',
      'White-label option',
      'Direct support',
      'Custom integrations',
    ],
    cta: 'Get Started',
    highlighted: false,
  },
];

const comparisonFeatures = [
  { name: 'Niche Workflows', starter: '1', pro: '3', enterprise: 'All' },
  { name: 'AI Follow-up Templates', starter: true, pro: true, enterprise: true },
  { name: 'WhatsApp Scripts', starter: true, pro: true, enterprise: true },
  { name: 'Full Automation SOPs', starter: false, pro: true, enterprise: true },
  { name: 'CRM Pipeline Templates', starter: false, pro: true, enterprise: true },
  { name: 'Email Sequences', starter: false, pro: true, enterprise: true },
  { name: 'Priority Support', starter: false, pro: true, enterprise: true },
  { name: 'Monthly Updates', starter: false, pro: true, enterprise: true },
  { name: 'Custom Workflows', starter: false, pro: false, enterprise: true },
  { name: 'White-label Option', starter: false, pro: false, enterprise: true },
  { name: 'Dedicated Onboarding', starter: false, pro: false, enterprise: true },
  { name: 'Direct Support Channel', starter: false, pro: false, enterprise: true },
];

const faqs = [
  {
    question: 'What payment methods do you accept?',
    answer:
      'We accept all major credit cards via Stripe for international payments, and UPI, PhonePe, GPay, Paytm, and cards via Razorpay for Indian customers.',
  },
  {
    question: 'Can I upgrade my plan later?',
    answer: "Yes, you can upgrade anytime. You'll only pay the difference between your current plan and the new one.",
  },
  {
    question: 'Is there a refund policy?',
    answer:
      "Yes, we offer a 7-day money-back guarantee on all plans. If you're not satisfied, contact us within 7 days of purchase for a full refund.",
  },
  {
    question: 'What exactly do I get?',
    answer:
      'Each plan includes complete automation workflow systems, templates, SOPs, and integration guides specific to your chosen niche. Everything is ready to deploy.',
  },
  {
    question: 'Do you offer custom solutions?',
    answer:
      'Yes! Our Enterprise plan includes custom workflow design tailored to your specific business needs. Contact us to discuss your requirements.',
  },
];

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className || 'w-5 h-5'} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg className={className || 'w-5 h-5'} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

export default function PricingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#0A0A0A] pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm uppercase tracking-wider text-[#2563EB] font-semibold mb-4"
          >
            Pricing
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight"
          >
            Simple, Transparent Pricing
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-gray-400 mt-6 max-w-2xl mx-auto"
          >
            Choose the plan that fits your business. All plans include our core automation systems
            with no hidden fees.
          </motion.p>
        </div>
      </section>

      {/* Pricing Cards */}
      <SectionWrapper dark={true}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <AnimatedSection key={plan.name} delay={index * 0.1}>
              <div
                className={`relative rounded-2xl p-8 h-full flex flex-col ${
                  plan.highlighted
                    ? 'bg-[#0A0A0A] border-2 border-[#2563EB] text-white'
                    : 'bg-[#111111] border border-[#1E1E1E] text-white'
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-[#2563EB] text-white text-xs font-semibold px-4 py-1.5 rounded-full">
                      {plan.badge}
                    </span>
                  </div>
                )}
                <h3 className="text-lg font-semibold">{plan.name}</h3>
                <div className="mt-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className={`text-sm ml-1 ${plan.highlighted ? 'text-gray-400' : 'text-gray-400'}`}>
                    {plan.period}
                  </span>
                </div>
                <p className={`mt-3 text-sm ${plan.highlighted ? 'text-gray-400' : 'text-gray-400'}`}>
                  {plan.description}
                </p>
                <ul className="mt-8 space-y-3 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckIcon
                        className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                          plan.highlighted ? 'text-[#2563EB]' : 'text-gray-400'
                        }`}
                      />
                      <span className={`text-sm ${plan.highlighted ? 'text-gray-300' : 'text-gray-400'}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Button
                    variant="primary"
                    size="lg"
                    href={`/checkout?plan=${plan.name.toLowerCase()}`}
                    className="w-full justify-center"
                  >
                    {plan.cta}
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </SectionWrapper>

      {/* Feature Comparison Table */}
      <SectionWrapper dark={true}>
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
            Compare Plans
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-xl mx-auto">
            See exactly what&apos;s included in each plan.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="overflow-x-auto">
            <table className="w-full max-w-4xl mx-auto">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-2 pr-4 text-sm font-semibold text-gray-400 w-1/3">Feature</th>
                  <th className="text-center py-2 px-4 text-sm font-semibold text-gray-400">Starter</th>
                  <th className="text-center py-2 px-4 text-sm font-semibold text-[#2563EB]">Pro</th>
                  <th className="text-center py-2 px-4 text-sm font-semibold text-gray-400">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((feature) => (
                  <tr key={feature.name} className="border-b border-white/5">
                    <td className="py-2 pr-4 text-sm text-gray-300">{feature.name}</td>
                    {(['starter', 'pro', 'enterprise'] as const).map((tier) => {
                      const value = feature[tier];
                      return (
                        <td key={tier} className="text-center py-2 px-4">
                          {typeof value === 'boolean' ? (
                            value ? (
                              <CheckIcon className="w-5 h-5 text-green-400 mx-auto" />
                            ) : (
                              <XIcon className="w-5 h-5 text-gray-400 mx-auto" />
                            )
                          ) : (
                            <span className="text-sm text-white font-medium">{value}</span>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </AnimatedSection>
      </SectionWrapper>

      {/* FAQ Section */}
      <SectionWrapper dark={true}>
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-xl mx-auto">
            Everything you need to know about our pricing.
          </p>
        </AnimatedSection>

        <div className="max-w-2xl mx-auto">
          {faqs.map((faq, index) => (
            <AnimatedSection key={index} delay={index * 0.05}>
              <div className="border-b border-[#1E1E1E]">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full py-6 flex items-center justify-between text-left"
                >
                  <span className="text-base font-medium text-white pr-4">{faq.question}</span>
                  <motion.span
                    animate={{ rotate: openFaq === index ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-2xl text-gray-400 flex-shrink-0"
                  >
                    +
                  </motion.span>
                </button>
                <motion.div
                  initial={false}
                  animate={{
                    height: openFaq === index ? 'auto' : 0,
                    opacity: openFaq === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                  className="overflow-hidden"
                >
                  <p className="pb-6 text-gray-400 text-sm leading-relaxed">{faq.answer}</p>
                </motion.div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </SectionWrapper>

      {/* Bottom CTA */}
      <section className="bg-[#0A0A0A] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Still have questions?</h2>
            <p className="text-gray-400 mt-4 mb-8">
              Our team is here to help you choose the right plan for your business.
            </p>
            <Button variant="primary" size="lg" href="/contact">
              Contact Us
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
