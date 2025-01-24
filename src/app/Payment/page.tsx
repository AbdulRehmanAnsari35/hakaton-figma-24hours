"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const PaymentPage = () => {
  const [total, setTotal] = useState("65.00");
  const router = useRouter();

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const totalParam = searchParams.get("total");
    if (totalParam) {
      setTotal(totalParam);
    }
  }, []);

  const [paymentData, setPaymentData] = useState({
    email: "",
    name: "",
    address: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });
  const [showModal, setShowModal] = useState(false);

  const handlePaymentSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Payment submitted", paymentData);
    alert("Payment Successful!");
    
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
    router.push("/");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="flex flex-col md:flex-row bg-white max-w-4xl rounded-lg shadow-lg">
        {/* Left Section */}
        <div className="w-full md:w-1/2 p-8 border-b md:border-b-0 md:border-r">
          <h1 className="text-lg font-bold text-teal-500 mb-4">Comforty</h1>
          <h2 className="text-2xl font-semibold text-gray-700">Pure kit</h2>
          <p className="text-xl text-blue-600 font-medium mt-2 mb-8">${total}</p>
          <div className="flex items-center justify-center rounded-lg">
            <Image
              src="/Image.png"
              alt="Product Image"
              width={250}
              height={250}
              className="h-full object-contain rounded-lg"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 p-8">
          <h1 className="text-lg font-semibold text-gray-700 mb-6">
            Shipping information
          </h1>
          <form onSubmit={handlePaymentSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-gray-600 font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={paymentData.email}
                onChange={(e) =>
                  setPaymentData({ ...paymentData, email: e.target.value })
                }
                className="mt-1 block w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="example@example.com"
                required
              />
            </div>
            <div>
              <label htmlFor="name" className="block text-gray-600 font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={paymentData.name}
                onChange={(e) =>
                  setPaymentData({ ...paymentData, name: e.target.value })
                }
                className="mt-1 block w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="John Doe"
                required
              />
            </div>
            <div>
              <label htmlFor="address" className="block text-gray-600 font-medium">
                Address
              </label>
              <input
                type="text"
                id="address"
                value={paymentData.address}
                onChange={(e) =>
                  setPaymentData({ ...paymentData, address: e.target.value })
                }
                className="mt-1 block w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="123 Main St"
                required
              />
            </div>

            <h2 className="text-lg font-semibold text-gray-700">Payment method</h2>

            <div>
              <label htmlFor="cardNumber" className="block text-gray-600 font-medium">
                Card Number
              </label>
              <input
                type="text"
                id="cardNumber"
                value={paymentData.cardNumber}
                onChange={(e) =>
                  setPaymentData({ ...paymentData, cardNumber: e.target.value })
                }
                className="mt-1 block w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="1234 5678 9012 3456"
                required
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="expiry" className="block text-gray-600 font-medium">
                  Expiry Date
                </label>
                <input
                  type="month"
                  id="expiry"
                  value={paymentData.expiry}
                  onChange={(e) =>
                    setPaymentData({ ...paymentData, expiry: e.target.value })
                  }
                  className="mt-1 block w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="cvv" className="block text-gray-600 font-medium">
                  CVV
                </label>
                <input
                  type="text"
                  id="cvv"
                  value={paymentData.cvv}
                  onChange={(e) =>
                    setPaymentData({ ...paymentData, cvv: e.target.value })
                  }
                  className="mt-1 block w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="123"
                  maxLength={4}
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Pay ${total}
            </button>
          </form>
        </div>
      </div>

      {/* Modal Component */}
      {showModal && <Modal onClose={handleModalClose} />}
    </div>
  );
};

const Modal = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full text-center">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Thank you for shopping!
        </h2>
        <button
          onClick={onClose}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default PaymentPage;
