'use client';

import { motion } from 'framer-motion';
import { NicheData } from '@/types/niche';
import Button from '@/components/ui/Button';

/* ------------------------------------------------------------------ */
/*  Animation helpers                                                   */
/* ------------------------------------------------------------------ */

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

/* ------------------------------------------------------------------ */
/*  Props                                                               */
/* ------------------------------------------------------------------ */

interface FinalCTAProps {
  data: NicheData;
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function FinalCTA({ data }: FinalCTAProps) {
  return (
    <section className="relative bg-[#0A0A0A] py-24 lg:py-32 overflow-hidden">
      {/* Subtle electric blue radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#2563EB]/[0.06] blur-[120px]" />
      </div>

      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0E0918] via-[#0E0918] to-[#0E0918]" />

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Headline */}
        <motion.h2
          variants={itemVariants}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight"
        >
          Ready to Automate Your {data.name} Business?
        </motion.h2>

        {/* Subtext */}
        <motion.p
          variants={itemVariants}
          className="text-gray-400 text-lg md:text-xl mt-6 max-w-xl leading-relaxed"
        >
          Join hundreds of businesses already using ECOLAB to grow on autopilot.
        </motion.p>

        {/* CTA Button */}
        <motion.div variants={itemVariants} className="mt-10">
          <Button variant="primary" size="lg" href="/checkout">
            Get Started Now
          </Button>
        </motion.div>

        {/* Trust signal */}
        <motion.p
          variants={itemVariants}
          className="text-gray-400 text-sm mt-6"
        >
          No long-term contracts &middot; Setup in 48 hours &middot; Cancel anytime
        </motion.p>
      </motion.div>
    </section>
  );
}
