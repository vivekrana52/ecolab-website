'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { useAuth } from '@/lib/auth-context';
import Link from 'next/link';

/* ------------------------------------------------------------------ */
/*  Animation helpers                                                  */
/* ------------------------------------------------------------------ */

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' as const },
  }),
};

/* ------------------------------------------------------------------ */
/*  Quick action data                                                  */
/* ------------------------------------------------------------------ */

const quickActions = [
  { label: 'Browse Solutions', href: '/solutions/real-estate', icon: '🔍' },
  { label: 'View Pricing', href: '/pricing', icon: '💰' },
  { label: 'Contact Support', href: '/contact', icon: '💬' },
];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function DashboardPage() {
  const { user, loading } = useAuth();
  const router = useRouter();

  /* ---- set document title ---- */
  useEffect(() => {
    document.title = 'Dashboard — ECOLAB';
  }, []);

  /* ---- redirect if unauthenticated ---- */
  useEffect(() => {
    if (!loading && !user) {
      router.push('/?login=true');
    }
  }, [loading, user, router]);

  /* ---- loading state ---- */
  if (loading) {
    return (
      <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <svg
            className="animate-spin h-8 w-8 text-[#2563EB]"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
            />
          </svg>
          <p className="text-white/50 text-sm">Loading your dashboard…</p>
        </div>
      </div>
    );
  }

  /* ---- unauthenticated (brief flash before redirect) ---- */
  if (!user) return null;

  /* ---- helpers ---- */
  const displayName =
    user.user_metadata?.full_name || user.email?.split('@')[0] || 'there';

  const joinedDate = user.created_at
    ? new Date(user.created_at).toLocaleDateString('en-US', {
        month: 'long',
        year: 'numeric',
      })
    : '—';

  /* ---- render ---- */
  return (
    <main className="min-h-screen bg-[#0A0A0A] pt-28 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Welcome */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
          className="mb-12"
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
            Welcome back, {displayName}
          </h1>
          <p className="text-white/50">
            Here&apos;s an overview of your ECOLAB account.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* ---- Your Purchases ---- */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="bg-[#111] border border-white/10 rounded-2xl p-6 flex flex-col"
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#2563EB]/10 text-[#2563EB] text-lg">
                📦
              </span>
              <h2 className="text-lg font-semibold text-white">
                Your Purchases
              </h2>
            </div>

            <div className="flex-1 flex flex-col justify-center">
              <p className="text-white/40 text-sm leading-relaxed">
                No purchases yet. Browse our solutions to get started.
              </p>
            </div>

            <Link
              href="/solutions/real-estate"
              className="mt-6 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#2563EB]/10 text-[#2563EB] text-sm font-medium hover:bg-[#2563EB]/20 transition-colors"
            >
              Browse Solutions
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>
          </motion.div>

          {/* ---- Account Info ---- */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
            className="bg-[#111] border border-white/10 rounded-2xl p-6"
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#2563EB]/10 text-[#2563EB] text-lg">
                👤
              </span>
              <h2 className="text-lg font-semibold text-white">
                Account Info
              </h2>
            </div>

            <dl className="space-y-4">
              <div>
                <dt className="text-xs text-white/40 uppercase tracking-wider mb-1">
                  Email
                </dt>
                <dd className="text-sm text-white truncate">
                  {user.email ?? '—'}
                </dd>
              </div>
              <div>
                <dt className="text-xs text-white/40 uppercase tracking-wider mb-1">
                  Plan
                </dt>
                <dd className="text-sm text-white">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#2563EB]/10 text-[#2563EB] text-xs font-medium">
                    Free
                  </span>
                </dd>
              </div>
              <div>
                <dt className="text-xs text-white/40 uppercase tracking-wider mb-1">
                  Member since
                </dt>
                <dd className="text-sm text-white">{joinedDate}</dd>
              </div>
            </dl>
          </motion.div>

          {/* ---- Quick Actions ---- */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3}
            className="bg-[#111] border border-white/10 rounded-2xl p-6"
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#2563EB]/10 text-[#2563EB] text-lg">
                ⚡
              </span>
              <h2 className="text-lg font-semibold text-white">
                Quick Actions
              </h2>
            </div>

            <div className="space-y-3">
              {quickActions.map((action) => (
                <Link
                  key={action.href}
                  href={action.href}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl bg-[#111111]/5 hover:bg-[#111111]/10 border border-white/5 hover:border-white/10 transition-colors group"
                >
                  <span className="text-lg">{action.icon}</span>
                  <span className="text-sm text-white/70 group-hover:text-white transition-colors font-medium">
                    {action.label}
                  </span>
                  <svg
                    className="ml-auto text-white/20 group-hover:text-white/50 transition-colors"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
