import { NextResponse } from 'next/server';
import crypto from 'crypto';
import { Resend } from 'resend';
import { supabaseAdmin } from '@/lib/supabase-server';

export async function POST(request: Request) {
  try {
    const body = await request.text();
    const signature = request.headers.get('x-razorpay-signature');

    if (!signature) {
      return NextResponse.json({ error: 'No signature provided' }, { status: 400 });
    }

    // Verify webhook signature
    const expectedSignature = crypto
      .createHmac('sha256', process.env.RAZORPAY_WEBHOOK_SECRET!)
      .update(body)
      .digest('hex');

    if (expectedSignature !== signature) {
      console.error('[Razorpay Webhook] Invalid signature');
      return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
    }

    const event = JSON.parse(body);
    const eventType = event.event;
    const payload = event.payload;

    switch (eventType) {
      case 'payment.captured': {
        const payment = payload.payment.entity;
        const { productId, userId } = payment.notes || {};

        if (productId && userId) {
          // Record or update purchase in database
          await supabaseAdmin.from('purchases').upsert({
            user_id: userId,
            product_id: productId,
            payment_id: payment.id,
            gateway: 'razorpay' as const,
            status: 'completed' as const,
            amount: payment.amount,
            currency: payment.currency,
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
          } as any);

          // Send confirmation email via Resend
          const resend = new Resend(process.env.RESEND_API_KEY);
          await resend.emails.send({
            from: 'ECOLAB <noreply@ecolab.ai>',
            to: [userId],
            subject: 'ECOLAB - Payment Captured',
            html: '<p>Your payment was successfully captured. Welcome to ECOLAB!</p>',
          });
          console.log(`[Razorpay Webhook] Payment captured: ${payment.id}`);
        }
        break;
      }

      case 'payment.failed': {
        const payment = payload.payment.entity;
        console.log(`[Razorpay Webhook] Payment failed: ${payment.id}`);
        // TODO: Handle failed payment — notify user, update status
        break;
      }

      case 'refund.created': {
        const refund = payload.refund.entity;
        console.log(`[Razorpay Webhook] Refund created: ${refund.id}`);
        // TODO: Update purchase status to 'refunded'
        break;
      }

      default:
        console.log(`[Razorpay Webhook] Unhandled event: ${eventType}`);
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error('[Razorpay Webhook Error]', error);
    return NextResponse.json(
      { error: 'Webhook processing failed' },
      { status: 500 }
    );
  }
}
