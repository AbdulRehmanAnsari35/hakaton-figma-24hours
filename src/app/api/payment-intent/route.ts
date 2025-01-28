import { NextRequest, NextResponse } from "next/server";
import Stripe from 'stripe';

// Check if the secret key is loaded properly
const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
if (!stripeSecretKey) {
  throw new Error("STRIPE_SECRET_KEY is not defined in the environment variables");
}

// Initialize Stripe with the API key
const stripe = new Stripe(stripeSecretKey, { apiVersion: '2024-12-18.acacia' });

export async function POST(request: NextRequest) {
  try {
    const { amount } = await request.json();

    if (!amount || isNaN(amount)) {
      return NextResponse.json({
        status: 400,
        body: { error: "Invalid amount" },
      });
    }

    // Create a PaymentIntent with the amount
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: 'usd',
      automatic_payment_methods: { enabled: true },
    });

    // Return the client secret to the client for further processing
    return NextResponse.json({ clientSecret: paymentIntent.client_secret });

  } catch (err: unknown) {
    if (err instanceof Error) {
      // Log the error and return a 500 response
      console.error(err.message);
      return NextResponse.json({
        status: 500,
        body: { error: err.message },
      });
    }
    return NextResponse.json({
      status: 500,
      body: { error: "Something went wrong" },
    });
  }
}
