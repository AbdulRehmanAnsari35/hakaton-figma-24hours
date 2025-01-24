"use client";
import { useCart } from "../Context/cartContext";
import Image from "next/image";
import { useRouter } from "next/navigation";

const CartPage = () => {
  const { cart, removeFromCart } = useCart();
  const router = useRouter();

  const calculateTotal = () =>
    cart.reduce((total, item) => total + item.price, 0).toFixed(2);

  const handleCheckout = () => {
    if (cart.length > 0) {
      const total = calculateTotal();
     
      router.push(`/Payment?total=${total}`);
    } else {
      alert("Your cart is empty. Add items to proceed to checkout.");
    }
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
          <div className="mt-8 flex justify-end">
            <button
              onClick={handleCheckout}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700"
            >
              Proceed to Payment
            </button>
          </div>
        </>
      ) : (
        <p className="text-black text-center">Your cart is empty. Add products!</p>
      )}
    </div>
  );
};

export default CartPage;
