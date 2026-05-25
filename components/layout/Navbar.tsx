'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import AuthModal from '@/components/auth/AuthModal';

interface SolutionItem {
  name: string;
  href: string;
  emoji: string;
}

const solutions: SolutionItem[] = [
  { name: 'Real Estate', href: '/solutions/real-estate', emoji: '🏠' },
  { name: 'Gyms', href: '/solutions/gyms', emoji: '💪' },
  { name: 'Ecommerce', href: '/solutions/ecommerce', emoji: '🛒' },
  { name: 'Agencies', href: '/solutions/agencies', emoji: '🚀' },
  { name: 'Coaches', href: '/solutions/coaches', emoji: '🎯' },
];

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Solutions', href: '#', hasDropdown: true },
  { name: 'Pricing', href: '/pricing' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isMobileSolutionsOpen, setIsMobileSolutionsOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const pathname = usePathname();
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsMobileSolutionsOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const handleDropdownEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
    setIsSolutionsOpen(true);
  };

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setIsSolutionsOpen(false);
    }, 150);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0A0A0A]/90 backdrop-blur-xl'
            : 'bg-transparent'
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-14 items-center justify-between">
            {/* Left — Logo */}
            <Link href="/" className="flex-shrink-0">
              <span className="text-xl font-bold tracking-tight text-white">
                ECOLAB
              </span>
            </Link>

            {/* Center — Desktop nav links */}
            <div className="hidden lg:flex lg:items-center lg:gap-1">
              {navLinks.map((link) =>
                link.hasDropdown ? (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={handleDropdownEnter}
                    onMouseLeave={handleDropdownLeave}
                  >
                    <button
                      className={`inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                        pathname.startsWith('/solutions')
                          ? 'text-white'
                          : 'text-gray-300 hover:text-white'
                      }`}
                    >
                      {link.name}
                      <svg
                        className={`h-4 w-4 transition-transform duration-200 ${
                          isSolutionsOpen ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </button>

                    <AnimatePresence>
                      {isSolutionsOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -8 }}
                          transition={{ duration: 0.2, ease: 'easeOut' }}
                          className="absolute left-1/2 top-full z-50 mt-1 w-56 -translate-x-1/2 rounded-xl border border-white/10 bg-[#111111] p-2 shadow-2xl"
                        >
                          {solutions.map((solution) => (
                            <Link
                              key={solution.href}
                              href={solution.href}
                              className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors ${
                                pathname === solution.href
                                  ? 'bg-[#111111]/10 text-white'
                                  : 'text-gray-300 hover:bg-[#111111]/5 hover:text-white'
                              }`}
                            >
                              <span className="text-sm">{solution.emoji}</span>
                              <span>{solution.name}</span>
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                      pathname === link.href
                        ? 'text-white'
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    {link.name}
                  </Link>
                )
              )}
            </div>

            {/* Right — Desktop CTA */}
            <div className="hidden lg:flex lg:items-center lg:gap-3">
              <button
                onClick={() => setIsAuthOpen(true)}
                className="rounded-md px-3 py-2 text-sm text-gray-300 transition-colors hover:text-white"
              >
                Log in
              </button>
              <Link
                href="/pricing"
                className="rounded-lg bg-[#2563EB] px-4 py-2 text-sm font-medium text-white transition-all hover:bg-[#1D4ED8] hover:shadow-[0_4px_14px_0_rgba(37,99,235,0.39)]"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile — Hamburger */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              className="relative z-50 flex h-10 w-10 items-center justify-center rounded-md lg:hidden"
              aria-label="Toggle menu"
            >
              <div className="flex w-5 flex-col items-center justify-center gap-[5px]">
                <motion.span
                  animate={
                    isMobileMenuOpen
                      ? { rotate: 45, y: 7 }
                      : { rotate: 0, y: 0 }
                  }
                  transition={{ duration: 0.25, ease: 'easeInOut' }}
                  className="block h-[2px] w-5 origin-center bg-white"
                />
                <motion.span
                  animate={
                    isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }
                  }
                  transition={{ duration: 0.15 }}
                  className="block h-[2px] w-5 bg-white"
                />
                <motion.span
                  animate={
                    isMobileMenuOpen
                      ? { rotate: -45, y: -7 }
                      : { rotate: 0, y: 0 }
                  }
                  transition={{ duration: 0.25, ease: 'easeInOut' }}
                  className="block h-[2px] w-5 origin-center bg-white"
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile — Full-screen overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-0 z-40 bg-[#0A0A0A] lg:hidden"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3, delay: 0.1, ease: 'easeOut' }}
              className="flex h-full flex-col px-6 pt-24 pb-8"
            >
              {/* Mobile links */}
              <div className="flex flex-1 flex-col gap-1">
                {navLinks.map((link) =>
                  link.hasDropdown ? (
                    <div key={link.name}>
                      <button
                        onClick={() =>
                          setIsMobileSolutionsOpen((prev) => !prev)
                        }
                        className="flex w-full items-center justify-between py-3 text-2xl font-medium text-white"
                      >
                        {link.name}
                        <motion.svg
                          animate={{
                            rotate: isMobileSolutionsOpen ? 180 : 0,
                          }}
                          transition={{ duration: 0.25 }}
                          className="h-5 w-5 text-gray-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                          />
                        </motion.svg>
                      </button>

                      <AnimatePresence>
                        {isMobileSolutionsOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25, ease: 'easeInOut' }}
                            className="overflow-hidden"
                          >
                            <div className="flex flex-col gap-1 pb-2 pl-4">
                              {solutions.map((solution) => (
                                <Link
                                  key={solution.href}
                                  href={solution.href}
                                  className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-lg transition-colors ${
                                    pathname === solution.href
                                      ? 'text-white'
                                      : 'text-gray-400 hover:text-white'
                                  }`}
                                >
                                  <span>{solution.emoji}</span>
                                  <span>{solution.name}</span>
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={`py-3 text-2xl font-medium transition-colors ${
                        pathname === link.href
                          ? 'text-white'
                          : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      {link.name}
                    </Link>
                  )
                )}
              </div>

              {/* Mobile CTA buttons */}
              <div className="flex flex-col gap-3 border-t border-white/10 pt-6">
                <button
                  onClick={() => setIsAuthOpen(true)}
                  className="w-full rounded-lg border border-white/10 py-3 text-center text-base font-medium text-gray-300 transition-colors hover:text-white"
                >
                  Log in
                </button>
                <Link
                  href="/pricing"
                  className="w-full rounded-lg bg-[#2563EB] py-3 text-center text-base font-medium text-white transition-all hover:bg-[#1D4ED8] hover:shadow-[0_4px_14px_0_rgba(37,99,235,0.39)]"
                >
                  Get Started
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
    </>
  );
}
