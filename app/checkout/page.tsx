'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useSearchParams, useRouter } from 'next/navigation';
import SectionWrapper from '@/components/ui/SectionWrapper';
import AnimatedSection from '@/components/ui/AnimatedSection';
import Button from '@/components/ui/Button';

// Plan data matching our pricing
const plans = [
  {
    id: 'starter',
    name: 'Starter',
    priceUSD: 9,
    priceINR: 799,
    features: [
      '1 niche workflow system',
      'AI follow-up templates',
      'WhatsApp reply scripts',
      'Email support',
      'Onboarding video',
    ],
  },
  {
    id: 'pro',
    name: 'Pro',
    priceUSD: 49,
    priceINR: 3999,
    popular: true,
    features: [
      '3 niche workflow systems',
      'Full automation SOPs',
      'CRM pipeline templates',
      'WhatsApp + Email sequences',
      'Priority support',
      'Monthly updates',
    ],
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    priceUSD: 0,
    priceINR: 0,
    contactOnly: true,
    features: [
      'All niches included',
      'Custom workflows',
      'Dedicated onboarding',
      'White-label option',
      'Direct support',
    ],
  },
];

// Dynamically load Razorpay checkout script
const loadRazorpayScript = (): Promise<boolean> => {
  return new Promise((resolve) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if (typeof window !== 'undefined' && (window as any).Razorpay) {
      resolve(true);
      return;
    }
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};

function CheckIcon() {
  return (
    <svg className="w-5 h-5 text-[#2563EB] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  );
}

export default function CheckoutPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const planParam = searchParams.get('plan');
  const paymentStatus = searchParams.get('payment');

  const [selectedPlan, setSelectedPlan] = useState(planParam || 'pro');
  const [isIndian, setIsIndian] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Detect Indian location via timezone
  useEffect(() => {
    try {
      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      setIsIndian(timezone.includes('Calcutta') || timezone.includes('Kolkata'));
    } catch {
      setIsIndian(false);
    }
  }, []);

  // Set document title (can't use metadata export with 'use client')
  useEffect(() => {
    document.title = 'Checkout | ECOLAB';
  }, []);

  const currentPlan = plans.find((p) => p.id === selectedPlan) || plans[1];
  const displayPrice = isIndian
    ? `₹${currentPlan.priceINR.toLocaleString()}`
    : `$${currentPlan.priceUSD}`;
  const currencyLabel = isIndian ? 'INR' : 'USD';

  // Handle Razorpay payment (Indian users)
  const handleRazorpayPayment = async () => {
    if (currentPlan.contactOnly) return;
    setLoading(true);
    setError('');

    try {
      const scriptLoaded = await loadRazorpayScript();
      if (!scriptLoaded) {
        throw new Error('Failed to load payment gateway');
      }

      // Create order on server
      const res = await fetch('/api/payments/razorpay/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: currentPlan.priceINR,
          currency: 'INR',
          productId: currentPlan.id,
          userId: 'user_placeholder', // TODO: Replace with actual user ID from auth
        }),
      });

      if (!res.ok) throw new Error('Failed to create order');
      const { orderId, keyId } = await res.json();

      // Open Razorpay checkout modal
      const options = {
        key: keyId,
        amount: currentPlan.priceINR * 100,
        currency: 'INR',
        name: 'ECOLAB',
        description: `${currentPlan.name} Plan - AI Automation System`,
        order_id: orderId,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        handler: async function (response: any) {
          // Verify payment on server
          try {
            const verifyRes = await fetch('/api/payments/razorpay/verify', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
                productId: currentPlan.id,
                userId: 'user_placeholder',
                amount: currentPlan.priceINR * 100,
              }),
            });

            if (verifyRes.ok) {
              router.push('/dashboard?payment=success');
            } else {
              setError('Payment verification failed. Please contact support.');
            }
          } catch {
            setError('Payment verification failed. Please contact support.');
          }
        },
        prefill: {
          // TODO: Prefill with user data from auth
          name: '',
          email: '',
        },
        theme: {
          color: '#2563EB',
        },
      };

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const razorpay = new (window as any).Razorpay(options);
      razorpay.on('payment.failed', function () {
        setError('Payment failed. Please try again.');
      });
      razorpay.open();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Payment failed');
    } finally {
      setLoading(false);
    }
  };

  // Handle Stripe payment (International users)
  const handleStripePayment = async () => {
    if (currentPlan.contactOnly) return;
    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/payments/stripe/create-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          priceAmount: currentPlan.priceUSD,
          productName: `${currentPlan.name} Plan`,
          productId: currentPlan.id,
          userId: 'user_placeholder', // TODO: Replace with actual user ID from auth
        }),
      });

      if (!res.ok) throw new Error('Failed to create checkout session');
      const { url } = await res.json();

      if (url) {
        window.location.href = url;
      } else {
        throw new Error('No checkout URL returned');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Payment failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-[#0A0A0A] pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white tracking-tight"
          >
            Checkout
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 mt-4"
          >
            Complete your purchase and start automating today.
          </motion.p>
        </div>
      </section>

      {/* Payment cancelled notice */}
      {paymentStatus === 'cancelled' && (
        <div className="bg-yellow-50 border-b border-yellow-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-center text-yellow-800 text-sm">
            Payment was cancelled. You can try again below.
          </div>
        </div>
      )}

      {/* Checkout Content */}
      <SectionWrapper dark={true}>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Left: Order Summary & Plan Selection */}
          <AnimatedSection variant="slideLeft" className="lg:col-span-3">
            <div className="space-y-8">
              {/* Plan Selection */}
              <div>
                <h2 className="text-xl font-bold text-white mb-4">Select Your Plan</h2>
                <div className="space-y-3">
                  {plans.map((plan) => (
                    <label
                      key={plan.id}
                      className={`block cursor-pointer rounded-xl border-2 p-5 transition-all ${
                        selectedPlan === plan.id
                          ? 'border-[#2563EB] bg-[#2563EB]/5'
                          : 'border-[#1E1E1E] hover:border-[#1E1E1E]'
                      } ${plan.contactOnly ? 'opacity-70' : ''}`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <input
                            type="radio"
                            name="plan"
                            value={plan.id}
                            checked={selectedPlan === plan.id}
                            onChange={() => setSelectedPlan(plan.id)}
                            disabled={plan.contactOnly}
                            className="w-4 h-4 text-[#2563EB] border-[#1E1E1E] focus:ring-[#2563EB]"
                          />
                          <div>
                            <span className="font-semibold text-white">{plan.name}</span>
                            {plan.popular && (
                              <span className="ml-2 text-xs bg-[#2563EB] text-white px-2 py-0.5 rounded-full">
                                Popular
                              </span>
                            )}
                          </div>
                        </div>
                        <span className="font-bold text-white">
                          {plan.contactOnly
                            ? 'Contact Us'
                            : isIndian
                            ? `₹${plan.priceINR.toLocaleString()}`
                            : `$${plan.priceUSD}`}
                        </span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Order Summary Card */}
              <div className="bg-[#0A0A0A] rounded-2xl p-6 text-white">
                <h3 className="text-lg font-bold mb-4">Order Summary</h3>
                <div className="space-y-3 mb-6">
                  {currentPlan.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <CheckIcon />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="border-t border-white/10 pt-4 flex justify-between items-center">
                  <span className="text-gray-400">Total</span>
                  <div className="text-right">
                    <span className="text-2xl font-bold">
                      {currentPlan.contactOnly ? 'Custom' : displayPrice}
                    </span>
                    {!currentPlan.contactOnly && (
                      <span className="text-gray-400 text-sm ml-1">{currencyLabel}</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Right: Payment */}
          <AnimatedSection variant="slideRight" className="lg:col-span-2">
            <div className="sticky top-32">
              <h2 className="text-xl font-bold text-white mb-4">Payment</h2>

              {currentPlan.contactOnly ? (
                <div className="bg-[#171717] rounded-xl p-6 border border-[#1E1E1E] text-center">
                  <p className="text-gray-400 mb-4">
                    Enterprise plans require a custom quote. Contact our team to get started.
                  </p>
                  <Button variant="primary" size="lg" href="/contact" className="w-full justify-center">
                    Contact Sales
                  </Button>
                </div>
              ) : (
                <div className="space-y-4">
                  {/* Payment gateway auto-detected */}
                  <div className="bg-[#171717] rounded-xl p-4 border border-[#1E1E1E]">
                    <div className="flex items-center gap-2 text-sm text-gray-400 mb-3">
                      <ShieldIcon />
                      <span>
                        {isIndian
                          ? 'Indian payment methods detected'
                          : 'International payment detected'}
                      </span>
                    </div>

                    {isIndian ? (
                      /* Razorpay for Indian users */
                      <div>
                        <p className="text-xs text-gray-400 mb-3">
                          Pay securely with UPI, PhonePe, GPay, Paytm, or Cards via Razorpay
                        </p>
                        <Button
                          variant="primary"
                          size="lg"
                          onClick={handleRazorpayPayment}
                          loading={loading}
                          className="w-full justify-center"
                        >
                          Pay ₹{currentPlan.priceINR.toLocaleString()} with Razorpay
                        </Button>
                      </div>
                    ) : (
                      /* Stripe for International users */
                      <div>
                        <p className="text-xs text-gray-400 mb-3">
                          Pay securely with credit/debit cards via Stripe
                        </p>
                        <Button
                          variant="primary"
                          size="lg"
                          onClick={handleStripePayment}
                          loading={loading}
                          className="w-full justify-center"
                        >
                          Pay ${currentPlan.priceUSD} with Stripe
                        </Button>
                      </div>
                    )}
                  </div>

                  {/* Toggle payment method */}
                  <button
                    onClick={() => setIsIndian(!isIndian)}
                    className="text-xs text-[#2563EB] hover:underline w-full text-center"
                  >
                    {isIndian ? 'Use international payment (Stripe)' : 'Use Indian payment (Razorpay)'}
                  </button>

                  {/* Error message */}
                  {error && (
                    <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-red-600 text-sm">
                      {error}
                    </div>
                  )}

                  {/* Security note */}
                  <div className="text-center pt-4 border-t border-[#1E1E1E]">
                    <div className="flex items-center justify-center gap-2 text-xs text-gray-400">
                      <ShieldIcon />
                      <span>Secured & encrypted payment</span>
                    </div>
                    <p className="text-xs text-gray-400 mt-2">
                      7-day money-back guarantee on all plans
                    </p>
                  </div>
                </div>
              )}
            </div>
          </AnimatedSection>
        </div>
      </SectionWrapper>
    </>
  );
}
