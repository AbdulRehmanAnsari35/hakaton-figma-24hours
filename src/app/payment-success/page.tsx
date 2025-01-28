'use client'; // Mark this file as a client component

import { useSearchParams } from 'next/navigation';

const PaymentSuccess = () => {
    const searchParams = useSearchParams(); // Use this hook to access search params

    // Get the `amount` from searchParams
    const amount = searchParams.get('amount');

    return (
        <div className="text-center w-full">
            <h1 className="text-6xl">Thank you for purchasing $ {amount}</h1>
        </div>
    );
}

export default PaymentSuccess;
