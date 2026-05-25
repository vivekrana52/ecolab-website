import { NextResponse } from 'next/server';
import { razorpay } from '@/lib/razorpay';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { amount, currency = 'INR', productId, userId } = body;

    // Validate required fields
    if (!amount || !productId || !userId) {
      return NextResponse.json(
        { error: 'Missing required fields: amount, productId, userId' },
        { status: 400 }
      );
    }

    // Create Razorpay order
    // Amount is in paise (1 INR = 100 paise)
    const order = await razorpay.orders.create({
      amount: amount * 100,
      currency,
      receipt: `ecolab_${Date.now()}`,
      notes: {
        productId,
        userId,
      },
    });

    return NextResponse.json({
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
      keyId: process.env.RAZORPAY_KEY_ID,
    });
  } catch (error) {
    console.error('[Razorpay Create Order Error]', error);
    return NextResponse.json(
      { error: 'Failed to create payment order' },
      { status: 500 }
    );
  }
}
