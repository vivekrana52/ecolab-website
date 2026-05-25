'use client';

import { motion } from 'framer-motion';
import Badge from '@/components/ui/Badge';
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
/*  Dashboard stat data                                                 */
/* ------------------------------------------------------------------ */

interface DashboardStat {
  label: string;
  value: string;
  change: string;
}

const stats: DashboardStat[] = [
  { label: 'Leads Today', value: '47', change: '+12%' },
  { label: 'Response Time', value: '<30s', change: '-58%' },
  { label: 'Conversion Rate', value: '34%', change: '+9%' },
  { label: 'Active Workflows', value: '12', change: '+3' },
];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#0A0A0A] flex items-center justify-center overflow-hidden">
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern" />

      {/* Radial gradient fade at bottom */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0E0918]" />

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 lg:px-8 pt-24 pb-16"
      >
        {/* Badge */}
        <motion.div variants={itemVariants}>
          <Badge variant="blue" size="md">
            AI-Powered Business Automation
          </Badge>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white max-w-4xl mt-8"
        >
          AI Systems That Automate Sales, Followups &amp; Customer Communication
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={itemVariants}
          className="text-base md:text-lg text-gray-400 max-w-2xl mt-6 leading-relaxed"
        >
          Stop losing leads to slow follow-ups. Deploy intelligent automation
          systems that capture, qualify, and convert — while you focus on growing
          your business.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          variants={itemVariants}
          className="mt-8 flex flex-col sm:flex-row gap-4"
        >
          <Button variant="primary" size="lg" href="/pricing">
            Get Started
          </Button>
          <Button variant="secondary" size="lg" href="#niches">
            View Solutions
          </Button>
        </motion.div>

        {/* Dashboard mockup */}
        <motion.div
          variants={itemVariants}
          className="mt-16 lg:mt-20 w-full max-w-3xl"
        >
          <div className="bg-[#111] border border-white/10 rounded-2xl shadow-2xl shadow-blue-500/10 overflow-hidden">
            {/* Window header bar */}
            <div className="flex items-center gap-2 px-5 py-3.5 border-b border-white/[0.06]">
              <span className="w-3 h-3 rounded-full bg-[#FF5F56]" />
              <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
              <span className="w-3 h-3 rounded-full bg-[#27C93F]" />
              <span className="ml-4 text-xs text-gray-400 font-medium">
                ECOLAB Dashboard
              </span>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[#111111]/[0.04]">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-[#111] p-5 lg:p-6 flex flex-col gap-1"
                >
                  <span className="text-[11px] uppercase tracking-wider text-gray-400 font-medium">
                    {stat.label}
                  </span>
                  <span className="text-2xl lg:text-3xl font-bold text-white">
                    {stat.value}
                  </span>
                  <span className="text-xs text-emerald-400 font-medium">
                    {stat.change}
                  </span>
                </div>
              ))}
            </div>

            {/* Mini chart rows — visual flair */}
            <div className="border-t border-white/[0.06] p-5 lg:p-6 flex items-center gap-4">
              <div className="flex-1 space-y-2">
                <div className="h-2 rounded-full bg-[#111111]/[0.06] overflow-hidden">
                  <div className="h-full w-3/4 rounded-full bg-[#2563EB]" />
                </div>
                <div className="h-2 rounded-full bg-[#111111]/[0.06] overflow-hidden">
                  <div className="h-full w-1/2 rounded-full bg-[#2563EB]/60" />
                </div>
                <div className="h-2 rounded-full bg-[#111111]/[0.06] overflow-hidden">
                  <div className="h-full w-5/6 rounded-full bg-[#2563EB]/40" />
                </div>
              </div>
              <div className="hidden sm:flex flex-col items-end gap-0.5">
                <span className="text-[11px] text-gray-400">
                  Pipeline Health
                </span>
                <span className="text-sm font-semibold text-emerald-400">
                  Excellent
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
