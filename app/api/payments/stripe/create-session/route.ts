import { NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { priceAmount, productName, productId, userId, successUrl, cancelUrl } = body;

    // Validate required fields
    if (!priceAmount || !productName || !productId || !userId) {
      return NextResponse.json(
        { error: 'Missing required fields: priceAmount, productName, productId, userId' },
        { status: 400 }
      );
    }

    // Create Stripe Checkout Session
    // Amount is in cents (1 USD = 100 cents)
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: productName,
              description: `ECOLAB ${productName} Automation System`,
            },
            unit_amount: priceAmount * 100,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url:
        successUrl || `${process.env.NEXT_PUBLIC_APP_URL}/dashboard?payment=success`,
      cancel_url:
        cancelUrl || `${process.env.NEXT_PUBLIC_APP_URL}/checkout?payment=cancelled`,
      metadata: {
        productId,
        userId,
      },
    });

    return NextResponse.json({
      sessionId: session.id,
      url: session.url,
    });
  } catch (error) {
    console.error('[Stripe Create Session Error]', error);
    return NextResponse.json(
      { error: 'Failed to create payment session' },
      { status: 500 }
    );
  }
}
