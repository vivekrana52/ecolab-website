'use client';

import { motion } from 'framer-motion';
import SectionWrapper from '@/components/ui/SectionWrapper';
import AnimatedSection from '@/components/ui/AnimatedSection';

const values = [
  {
    title: 'Outcomes Over Output',
    description:
      'We measure success by the results our systems generate — more leads, faster replies, higher conversions — not by the number of templates we ship.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    title: 'Industry-Specific',
    description:
      'Generic automation fails. We study each industry deeply and build systems that reflect the real workflows, language, and customer journeys of your niche.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'Continuously Evolving',
    description:
      'AI and automation are evolving fast. Our systems are updated monthly with new strategies, templates, and integrations to keep you ahead of the curve.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
];

const team = [
  { name: 'Alex Rivera', role: 'Founder & CEO', initials: 'AR', gradient: 'from-blue-500 to-cyan-500' },
  { name: 'Meera Patel', role: 'Head of Product', initials: 'MP', gradient: 'from-purple-500 to-pink-500' },
  { name: 'Jordan Kim', role: 'Lead Engineer', initials: 'JK', gradient: 'from-amber-500 to-blue-500' },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0A0A0A] pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm uppercase tracking-wider text-[#2563EB] font-semibold mb-4"
          >
            About ECOLAB
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight max-w-4xl mx-auto"
          >
            We&apos;re Building the Future of Business Automation
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-gray-400 mt-6 max-w-2xl mx-auto"
          >
            ECOLAB exists to give every business access to AI-powered automation systems that were
            previously only available to enterprises.
          </motion.p>
        </div>
      </section>

      {/* Mission & Approach */}
      <SectionWrapper dark={true}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          <AnimatedSection variant="slideLeft">
            <div>
              <h2 className="text-sm uppercase tracking-wider text-[#2563EB] font-semibold mb-3">
                Our Mission
              </h2>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Intelligent Automation for Every Business
              </h3>
              <p className="text-gray-400 leading-relaxed">
                We believe every business deserves intelligent automation. Not ChatGPT prompts, not
                generic templates — complete, deployable systems that drive real business outcomes.
                Our mission is to bridge the gap between enterprise-grade automation and small
                businesses that need it most.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection variant="slideRight">
            <div>
              <h2 className="text-sm uppercase tracking-wider text-[#2563EB] font-semibold mb-3">
                Our Approach
              </h2>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Deep Industry Understanding
              </h3>
              <p className="text-gray-400 leading-relaxed">
                We study each industry deeply, understand the specific workflows that drive revenue,
                and build complete automation systems that plug into your existing business. Every
                system is tested, refined, and optimized for the specific challenges your niche
                faces.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </SectionWrapper>

      {/* Values */}
      <SectionWrapper dark={true}>
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
            What We Stand For
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-xl mx-auto">
            Our values shape every system we build and every interaction we have.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <AnimatedSection key={value.title} delay={index * 0.1}>
              <div className="bg-[#111] border border-white/10 rounded-2xl p-8 h-full">
                <div className="w-14 h-14 rounded-xl bg-[#2563EB]/10 flex items-center justify-center text-[#2563EB] mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </SectionWrapper>

      {/* Team */}
      <SectionWrapper dark={true}>
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
            Meet the Team
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-xl mx-auto">
            A small, focused team passionate about automation and business growth.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
          {team.map((member, index) => (
            <AnimatedSection key={member.name} delay={index * 0.1}>
              <div className="text-center">
                <div
                  className={`w-24 h-24 rounded-full bg-gradient-to-br ${member.gradient} mx-auto flex items-center justify-center text-white text-2xl font-bold mb-4`}
                >
                  {member.initials}
                </div>
                <h3 className="text-lg font-bold text-white">{member.name}</h3>
                <p className="text-gray-400 text-sm mt-1">{member.role}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </SectionWrapper>

      {/* Bottom CTA */}
      <section className="bg-[#0A0A0A] py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#2563EB10_0%,_transparent_70%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Ready to Automate Your Business?
            </h2>
            <p className="text-gray-400 mt-4 mb-8 max-w-lg mx-auto">
              Join hundreds of businesses using ECOLAB to capture more leads and close more deals.
            </p>
            <a
              href="/pricing"
              className="inline-flex items-center bg-[#2563EB] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#1d4ed8] transition-colors"
            >
              View Pricing
            </a>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
