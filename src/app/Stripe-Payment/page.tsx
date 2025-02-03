"use client";

import convertToSubCurrency from "../lib/ConvertToSubCurrency";
import CheckoutPage from "../component/CheckoutPage";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

if (!process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY) {
  throw new Error(
    "NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY is not defined in your environment variables"
  );
}

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

const StripePayment = () => {
  const amount = 40;
  return (
    <div>
      <h1 className="text-6xl font-bold text-center">Comforty $ {amount}</h1>

      <Elements
        stripe={stripePromise}
        options={{
          mode: "payment",
          amount: convertToSubCurrency(amount),
          currency: "usd",
        }}
      >
        <CheckoutPage amount={amount} />
      </Elements>
    </div>
  );
};

export default StripePayment;
