import { NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';
import { Resend } from 'resend';
import { supabaseAdmin } from '@/lib/supabase-server';
import Stripe from 'stripe';

export async function POST(request: Request) {
  try {
    const body = await request.text();
    const signature = request.headers.get('stripe-signature');

    if (!signature) {
      return NextResponse.json({ error: 'No signature provided' }, { status: 400 });
    }

    // Verify webhook signature
    let event: Stripe.Event;
    try {
      event = stripe.webhooks.constructEvent(
        body,
        signature,
        process.env.STRIPE_WEBHOOK_SECRET!
      );
    } catch (err) {
      console.error('[Stripe Webhook] Signature verification failed:', err);
      return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
    }

    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object as Stripe.Checkout.Session;
        const { productId, userId } = session.metadata || {};

        if (productId && userId) {
          // Record purchase in database
          await supabaseAdmin.from('purchases').insert({
            user_id: userId,
            product_id: productId,
            payment_id: session.payment_intent as string,
            gateway: 'stripe' as const,
            status: 'completed' as const,
            amount: session.amount_total || 0,
            currency: session.currency || 'usd',
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
          } as any);

          // Send confirmation email via Resend
          const resend = new Resend(process.env.RESEND_API_KEY);
          await resend.emails.send({
            from: 'ECOLAB <noreply@ecolab.ai>',
            to: [userId],
            subject: 'ECOLAB - Payment Completed',
            html: '<p>Your payment was successfully completed. Welcome to ECOLAB!</p>',
          });
          console.log(`[Stripe Webhook] Payment completed: ${session.id}`);
        }
        break;
      }

      case 'checkout.session.expired': {
        const session = event.data.object as Stripe.Checkout.Session;
        console.log(`[Stripe Webhook] Session expired: ${session.id}`);
        break;
      }

      case 'charge.refunded': {
        const charge = event.data.object as Stripe.Charge;
        console.log(`[Stripe Webhook] Charge refunded: ${charge.id}`);
        // TODO: Update purchase status to 'refunded'
        break;
      }

      default:
        console.log(`[Stripe Webhook] Unhandled event: ${event.type}`);
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error('[Stripe Webhook Error]', error);
    return NextResponse.json(
      { error: 'Webhook processing failed' },
      { status: 500 }
    );
  }
}
