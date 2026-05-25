import Razorpay from 'razorpay';

// Initialize Razorpay instance for server-side use
// Ensure RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET are set in .env.local
export const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID!,
  key_secret: process.env.RAZORPAY_KEY_SECRET!,
});
