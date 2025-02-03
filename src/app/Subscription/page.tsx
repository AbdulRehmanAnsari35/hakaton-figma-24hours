"use client";
import { useState } from "react";
import Image from "next/image";

interface Subscription {
  id: number;
  name: string;
  price: string;
  subscriptionDate: string;
  renewalDate: string;
  image: string;
}

const SubscriptionComponent = () => {
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);

  const products = [
    {
      id: 1,
      name: "Weekly",
      price: "$40",
      image: "/21.jpeg", // Remove './'
      description: "discount on new products and fast delivery",
    },
    {
      id: 2,
      name: "Monthly",
      price: "$180",
      image: "/22.jpg",
      description: "discount on sale & new products delivery in 24 hours",
    },
    {
      id: 3,
      name: "Yearly",
      price: "$560",
      image: "/23.jpeg",
      description: "discount on all products delivery in 7 hours",
    },
  ];

  const handleSubscribe = (product: {
    id: number;
    name: string;
    price: string;
    image: string;
  }) => {
    if (subscriptions.length === 1) {
      alert("You can only have one active subscription at a time.");
      return;
    }

    const newSubscription: Subscription = {
      ...product,
      subscriptionDate: new Date().toLocaleDateString(),
      renewalDate: new Date(
        new Date().setMonth(new Date().getMonth() + 20)
      ).toLocaleDateString(),
    };

    setSubscriptions([newSubscription]);
  };

  const handleCancelSubscription = () => {
    setSubscriptions([]);
  };

  return (
    <div className="min-h-screen flex flex-col items-center py-8">
      <div className="max-w-7xl w-full space-y-8 px-6">
        <div className="bg-white p-6 rounded-2xl shadow-xl ">
          <h2 className="text-4xl font-semibold text-gray-800 mb-8 text-center">
            Available Subscription
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-gradient-to-r from-blue-500 to-teal-500 text-black rounded-xl p-8 text-center transform transition-transform hover:scale-105 hover:shadow-lg space-y-4"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  width={32}
                  height={32}
                  className="w-32 h-32 object-cover rounded-full mx-auto mb-4 "
                />
                <p className="font-semibold">{product.description}</p>
                <h3 className="text-2xl font-semibold">{product.name}</h3>
                <p className="text-lg mt-2 mb-4 font-semibold">
                  {product.price}
                </p>
                <button
                  onClick={() => handleSubscribe(product)}
                  className="py-2 px-6 bg-yellow-500 text-gray-800 rounded-full hover:bg-yellow-600 transition-colors font-semibold"
                >
                  Subscribe
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-xl">
          <h2 className="text-4xl font-semibold text-gray-800 mb-8 text-center">
            Your Subscriptions
          </h2>
          {subscriptions.length > 0 ? (
            <div className="space-y-6">
              {subscriptions.map((sub, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-purple-600 to-indigo-500 text-white rounded-xl p-8 shadow-lg"
                >
                  <div className="flex items-center justify-start space-x-6">
                    <Image
                      src={sub.image}
                      alt={sub.name}
                      className="w-24 h-24 object-cover rounded-full"
                    />
                    <div>
                      <h3 className="text-2xl font-semibold">{sub.name}</h3>
                      <p className="text-lg mt-2">
                        Subscribed on: {sub.subscriptionDate}
                      </p>
                      <p className="text-lg mt-2">
                        Renewal Date: {sub.renewalDate}
                      </p>
                    </div>
                  </div>
                  <div className="mt-6 flex justify-end space-x-4">
                    <button className="px-6 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors">
                      Renew
                    </button>
                    <button
                      onClick={handleCancelSubscription}
                      className="px-6 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 text-center">No active subscriptions</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SubscriptionComponent;
