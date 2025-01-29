import { useState, useEffect } from "react";
import { useStripe, useElements, PaymentElement } from "@stripe/react-stripe-js";
import convertToSubCurrency from "../lib/ConvertToSubCurrency";

const CheckoutPage = ({ amount }: { amount: number }) => {
    const stripe = useStripe();
    const elements = useElements();

    const [errorMessage, setError] = useState<string>("");
    const [clientSecret, setClientSecret] = useState("");
    const [loading, setLoading] = useState(false);
    const [URL, setURL] = useState("");

    // ✅ Set URL safely in useEffect to avoid `window` issues
    useEffect(() => {
        if (typeof window !== "undefined") {
            const myhost = window.location.host;
            setURL(myhost === "localhost:3000" ? "http://localhost:3000" : "https://stripe-payment-one-nu.vercel.app");
        }
    }, []);

    // ✅ Fetch the clientSecret properly
    useEffect(() => {
        if (!amount) return; // Prevent unnecessary API calls

        fetch("/api/payment-intent", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ amount: convertToSubCurrency(amount) }),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.clientSecret) {
                    setClientSecret(data.clientSecret);
                } else {
                    setError("Failed to initialize payment. Please try again.");
                }
            })
            .catch(() => setError("Network error. Please try again."));
    }, [amount]);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setError(""); // Clear previous errors

        if (!stripe || !elements) {
            setError("Stripe is not loaded. Please try again.");
            setLoading(false);
            return;
        }

        const { error: submitErrors } = await elements.submit();
        if (submitErrors?.message) {
            setError(submitErrors.message);
            setLoading(false);
            return;
        }

        if (!clientSecret) {
            setError("Payment could not be initialized. Try again.");
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

        if (error?.message) {
            setError(error.message);
        } else {
            setError("");
        }
        setLoading(false);
    };

    return (
        <form onSubmit={handleSubmit} className="p-8">
            {clientSecret ? <PaymentElement /> : <p>Loading payment...</p>}
            {errorMessage && <p className="text-red-500">{errorMessage}</p>}
            <button
                className="w-full bg-black text-white py-2 mt-5"
                disabled={loading || !clientSecret}
            >
                {loading ? "Processing..." : "Pay Now"}
            </button>
        </form>
    );
};

export default CheckoutPage;
