"use client";
import { useState, useEffect } from "react";
import { useStripe, useElements, PaymentElement } from "@stripe/react-stripe-js";
import convertToSubCurrency from "../lib/ConvertToSubCurrency";

const CheckoutPage = ({ amount }: { amount: number }) => {
  console.log(window.location.host);

  const myhost = window.location.host;
  let URL = "";

  if (myhost === "localhost:3000") {
    URL = "http://localhost:3000";
  } else {
    URL = "https://stripe-payment-one-nu.vercel.app";
  }

  const stripe = useStripe();
  const elements = useElements();

  const [errorMessage, setError] = useState<string | null>(null);
  const [clientSecret, setClientSecret] = useState("");
  const [loading, setLoading] = useState(false);

  // Generate new client secret when the amount changes
  useEffect(() => {
    fetch("api/payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: convertToSubCurrency(amount) }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [amount]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    // Error handling
    if (!stripe || !elements) {
      return;
    }

    const { error: submitErrors } = await elements.submit();
    if (submitErrors) {
      setError(submitErrors.message || "An unknown error occurred.");
      setLoading(false);
      return;
    }

    const { error } = await stripe.confirmPayment({
      elements,
      clientSecret,
      confirmParams: {
        return_url: `${URL}/payment-success?amount=${amount}`,
      },
    });

    if (error) {
      setError(error.message || "An unknown error occurred.");
    } else {
      setError(null);
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="p-8">
      {clientSecret && <PaymentElement />}
      {errorMessage && (
        <p className="text-red-600 text-sm mt-2">{errorMessage}</p>
      )}
      <button
        type="submit"
        className="w-full bg-black text-white py-2 mt-5"
        disabled={loading}
      >
        {loading ? "Processing..." : "Pay Now"}
      </button>
    </form>
  );
};

export default CheckoutPage;
