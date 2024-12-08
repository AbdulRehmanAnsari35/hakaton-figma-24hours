// Import required modules in a Next.js functional component
import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";
const page: React.FC = () => {
  return (
    <div className="bg-white py-16 px-6 text-center">
      {/* Featured Product Section */}
      <div className="flex flex-col md:flex-row items-center justify-center max-w-5xl mx-auto mb-16 gap-8">
        <Image
          src="/product-2.png"
          alt="Library Stool Chair"
          width={675}
          height={670}
          className="w-full h-[] max-w-md rounded-lg shadow-lg object-cover"
        />
        <div className="text-left">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Library Stool Chair</h2>
         
          <p className="px-6 py-3 w-[144] h-[44] font-semibold justify-center bg-teal-500 text-white rounded-full mb-4 ">$20.00 USD</p>
          
          <p className="text-gray-600 mt-10 border-t border-gray-200 mb-6">
            this pink Library stool is very comfortable and flexible<br/>must use it in Library and offices <br/> cheap price with discount offer
          </p>
          <button className="px-6 py-3 bg-teal-500 text-white rounded-md hover:bg-teal-600 transition flex items-center gap-2">
            <span>Add To Cart</span>
            <AiOutlineShoppingCart className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Featured Products Section */}

      <div className="text-right mt-6 max-w-6xl mx-auto">
      <h3 className="text-3xl font-semibold text-black text-left ">Featured Products</h3>
        <Link
          href="/Product"
          className="text-black font-medium hover:underline hover:text-teal-500"
        >
          View all
        </Link>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-6 max-w-6xl mx-auto">
  {[
    { src: "/prodct3.png", title: "Library Stool Chair", price: "$99" },
    { src: "/product-1.png", title: "Library Stool Chair", price: "$99" },
    { src: "/image2.png", title: "Library Stool Chair", price: "$99" },
    { src: "/product-3.png", title: "Library Stool Chair", price: "$99" },
    { src: "/prodct1.png", title: "Library Stool Chair", price: "$99" },
    { src: "/01.png", title: "Library Stool Chair", price: "$99" },
  ].map((product, index) => (
    <div key={index} className="text-center">
      <Image
        src={product.src}
        alt={product.title}
        width={350}
        height={200}
        className="object-cover rounded-md shadow-md mb-2"
      />
      <p className="text-gray-800 font-medium">{product.title}</p>
      <p className="text-black font-semibold">{product.price}</p>
    </div>
  ))}
</div>


     
    </div>
  );
};

export default page;
