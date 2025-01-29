'use client'

import { FC, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'

const PaymentSuccess: FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PaymentDetails />
    </Suspense>
  )
}

const PaymentDetails: FC = () => {
  const searchParams = useSearchParams()
  const amount = searchParams?.get('amount') || '0'

  return (
    <div className="text-center w-full">
      <h1 className="text-6xl">
        Thank you for purchasing ${parseFloat(amount).toFixed(2)}
      </h1>
    </div>
  )
}

export default PaymentSuccess
