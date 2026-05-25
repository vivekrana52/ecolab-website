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
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

/* ------------------------------------------------------------------ */
/*  Props                                                               */
/* ------------------------------------------------------------------ */

interface NicheHeroProps {
  data: NicheData;
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function NicheHero({ data }: NicheHeroProps) {
  return (
    <section className="relative min-h-[70vh] bg-[#0A0A0A] flex items-center overflow-hidden">
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern" />

      {/* Radial gradient fade at bottom */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0E0918]" />

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center text-center w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16"
      >
        {/* Badge pill */}
        <motion.div variants={itemVariants}>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#2563EB]/30 bg-[#2563EB]/10 text-[#2563EB] text-sm font-medium">
            <span>{data.icon}</span>
            <span>{data.name}</span>
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white max-w-4xl mt-8"
        >
          {data.headline}
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-base md:text-lg text-gray-400 max-w-2xl mt-6 leading-relaxed"
        >
          {data.subheadline}
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          variants={itemVariants}
          className="mt-8 flex flex-col sm:flex-row gap-4"
        >
          <Button variant="primary" size="lg" href="/checkout">
            Get This System
          </Button>
          <Button variant="secondary" size="lg" href="#pricing">
            See Pricing
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
