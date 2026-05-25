'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NicheData } from '@/types/niche';
import SectionWrapper from '@/components/ui/SectionWrapper';
import AnimatedSection from '@/components/ui/AnimatedSection';

/* ------------------------------------------------------------------ */
/*  Props                                                               */
/* ------------------------------------------------------------------ */

interface FAQProps {
  data: NicheData;
}

/* ------------------------------------------------------------------ */
/*  Plus / Minus icons                                                  */
/* ------------------------------------------------------------------ */

function PlusMinusIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <div className="relative w-5 h-5 shrink-0">
      {/* Horizontal bar (always visible) */}
      <span className="absolute top-1/2 left-0 w-5 h-[2px] bg-gray-400 -translate-y-1/2 rounded-full" />
      {/* Vertical bar (hidden when open) */}
      <motion.span
        className="absolute top-0 left-1/2 w-[2px] h-5 bg-gray-400 -translate-x-1/2 rounded-full origin-center"
        initial={false}
        animate={{ rotate: isOpen ? 90 : 0, opacity: isOpen ? 0 : 1 }}
        transition={{ duration: 0.2, ease: 'easeInOut' }}
      />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function FAQ({ data }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <SectionWrapper dark>
      <AnimatedSection variant="fadeUp">
        {/* Headline */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-sm uppercase tracking-wider text-[#2563EB] font-semibold">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-4">
            Frequently Asked Questions
          </h2>
        </div>

        {/* FAQ list */}
        <div className="mt-12 max-w-3xl mx-auto">
          {data.faq.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <AnimatedSection
                key={index}
                variant="fadeUp"
                delay={index * 0.05}
              >
                <div className="border-b border-white/10">
                  {/* Question header */}
                  <button
                    type="button"
                    onClick={() => toggle(index)}
                    className="w-full flex items-center justify-between gap-4 py-6 text-left cursor-pointer group"
                    aria-expanded={isOpen}
                  >
                    <span className="text-white font-medium text-base md:text-lg group-hover:text-[#2563EB] transition-colors">
                      {item.question}
                    </span>
                    <PlusMinusIcon isOpen={isOpen} />
                  </button>

                  {/* Answer (animated) */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="answer"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          height: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] },
                          opacity: { duration: 0.2, ease: 'easeInOut' },
                        }}
                        className="overflow-hidden"
                      >
                        <p className="text-gray-400 leading-relaxed pb-6 pr-8">
                          {item.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </AnimatedSection>
    </SectionWrapper>
  );
}
