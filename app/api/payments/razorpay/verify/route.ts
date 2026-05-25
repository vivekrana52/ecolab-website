import { NextResponse } from 'next/server';
import crypto from 'crypto';
import { Resend } from 'resend';
import { supabaseAdmin } from '@/lib/supabase-server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      productId,
      userId,
      amount,
    } = body;

    // Validate required fields
    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      return NextResponse.json(
        { error: 'Missing payment verification fields' },
        { status: 400 }
      );
    }

    // Verify payment signature
    // Razorpay signature = HMAC-SHA256(order_id|payment_id, secret)
    const expectedSignature = crypto
      .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET!)
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest('hex');

    if (expectedSignature !== razorpay_signature) {
      console.error('[Razorpay Verify] Signature mismatch');
      return NextResponse.json(
        { error: 'Invalid payment signature' },
        { status: 400 }
      );
    }

    // Payment verified — record purchase in database
    const { error: dbError } = await supabaseAdmin.from('purchases').insert({
      user_id: userId,
      product_id: productId,
      payment_id: razorpay_payment_id,
      gateway: 'razorpay' as const,
      status: 'completed' as const,
      amount: amount || 0,
      currency: 'inr',
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } as any);

    if (dbError) {
      console.error('[Razorpay Verify] Database error:', dbError);
      return NextResponse.json(
        { error: 'Failed to record purchase' },
        { status: 500 }
      );
    }

    // Send confirmation email via Resend
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: 'ECOLAB <noreply@ecolab.ai>',
      to: [userId], // Assuming userId is an email for now, or fetch user email from DB
      subject: 'ECOLAB - Payment Received',
      html: '<p>Thank you for your purchase! Your automation system is being provisioned.</p>',
    });

    console.log(`[Razorpay Verify] Payment verified: ${razorpay_payment_id}`);

    return NextResponse.json({
      success: true,
      paymentId: razorpay_payment_id,
    });
  } catch (error) {
    console.error('[Razorpay Verify Error]', error);
    return NextResponse.json(
      { error: 'Payment verification failed' },
      { status: 500 }
    );
  }
}
