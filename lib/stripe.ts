import Stripe from 'stripe';

// Initialize Stripe instance for server-side use
// Ensure STRIPE_SECRET_KEY is set in .env.local
export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || 'dummy_stripe_key', {
  apiVersion: '2026-04-22.dahlia',
  typescript: true,
});
