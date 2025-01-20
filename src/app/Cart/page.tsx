"use client";
import { useCart } from "../Context/cartContext";
import Image from "next/image";
import { useRouter } from "next/navigation"; // to handle navigation
import { useState } from "react";

const CartPage = () => {
  const { cart, removeFromCart } = useCart();
  const [isRedirecting, setIsRedirecting] = useState(false);
  const [isPaymentSectionVisible, setIsPaymentSectionVisible] = useState(false);
  const [paymentData, setPaymentData] = useState({
    name: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });
  const [showThankYouPopup, setShowThankYouPopup] = useState(false);
  const router = useRouter();

  const calculateTotal = () =>
    cart.reduce((total, item) => total + item.price, 0).toFixed(2);

  const handleCheckout = () => {
    if (cart.length > 0) {
      setIsPaymentSectionVisible(true); // Show payment section
    } else {
      alert("Your cart is empty. Add items to proceed to checkout.");
    }
  };

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here, you can handle payment validation and API calls for payment processing
    console.log("Payment submitted", paymentData);
    // Show the "Thank You" popup after payment is complete
    setShowThankYouPopup(true);
    setIsPaymentSectionVisible(false); // Hide payment section
  };

  const handlePopupClose = () => {
    setShowThankYouPopup(false);
    router.push("/"); // Redirect to homepage after closing the popup
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-2xl font-bold mb-8">Your Cart</h1>
      {cart.length > 0 ? (
        <>
          <ul className="space-y-4">
            {cart.map((item) => (
              <li
                key={item._id}
                className="flex justify-between items-center bg-white shadow-sm p-4 rounded-md"
              >
                <div>
                  <p className="font-medium text-slate-900">{item.title}</p>
                  <p className="text-sm text-blue-600">
                    ${item.price.toFixed(2)}
                  </p>
                </div>
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  width={50}
                  height={50}
                  className="rounded-md"
                />
                <button
                  onClick={() => removeFromCart(item._id)}
                  className="bg-red-500 text-white px-4 py-2 rounded-md"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-8 bg-slate-100 p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-black text-red-800">Cart Summary</h2>
            <p className="mt-2 text-gray-800">Total: ${calculateTotal()}</p>
          </div>
          {/* Checkout Button */}
          <div className="mt-8 flex justify-end">
            <button
              onClick={handleCheckout}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700"
              disabled={isRedirecting}
            >
              Proceed to Payment
            </button>
          </div>

          {/* Payment Section */}
          {isPaymentSectionVisible && (
            <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold mb-4">
                Payment Information
              </h2>
              <form onSubmit={handlePaymentSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={paymentData.name}
                    onChange={(e) =>
                      setPaymentData({ ...paymentData, name: e.target.value })
                    }
                    className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="cardNumber" className="block text-gray-700">
                    Card Number
                  </label>
                  <input
                    type="text"
                    id="cardNumber"
                    value={paymentData.cardNumber}
                    onChange={(e) =>
                      setPaymentData({
                        ...paymentData,
                        cardNumber: e.target.value,
                      })
                    }
                    className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="expiry" className="block text-gray-700">
                    Expiry Date
                  </label>
                  <input
                    type="date" // Updated to 'date' for proper date input
                    id="expiry"
                    value={paymentData.expiry}
                    onChange={(e) =>
                      setPaymentData({ ...paymentData, expiry: e.target.value })
                    }
                    className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="cvv" className="block text-gray-700">
                    CVV
                  </label>
                  <input
                    type="text"
                    id="cvv"
                    value={paymentData.cvv}
                    onChange={(e) =>
                      setPaymentData({ ...paymentData, cvv: e.target.value })
                    }
                    className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700"
                >
                  Buy Now
                </button>
              </form>
            </div>
          )}
        </>
      ) : (
        <p className="text-black text-center">
          Your cart is empty. Add products!
        </p>
      )}

      {/* Thank You Popup */}
      {showThankYouPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-bold text-green-600">
              Thank you for shopping!
            </h2>
            <p className="mt-4 text-gray-700">
              Your payment was successful. Continue shopping?
            </p>
            <button
              onClick={handlePopupClose}
              className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
