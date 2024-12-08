import React from "react";
import Image from "next/image";
import { CiShoppingCart } from "react-icons/ci";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="shadow">
      {/* Top Line */}
      <div className="bg-indigo-950 text-white text-sm">
        <div className="container opacity-70 mx-auto flex justify-between items-center px-4 py-2">
          <span>✓ Free Shipping On All Orders Over $50</span>
          <div className="flex items-center gap-4">
            <span>Eng</span>
            <Link href="/Faqs" className="hover:underline">
              FAQs
            </Link>
            <Link href="#" className="hover:underline">
              Need Help
            </Link>
          </div>
        </div>
      </div>

      {/* Middle Line: Logo and Cart */}
      <div className="bg-gray-100">
        <div className="container mx-auto flex justify-between items-center px-4 py-4">
          {/* Logo Centered */}
          <div className="flex-1 text-center">
            <div className="flex space-x-2 justify-center sm:justify-start">
              <Image src="/Logo Icon.png" alt="logo" width={40} height={40} />
              <span className="text-xl font-bold">Comforty</span>
            </div>
          </div>
          <Link href="/Cart">
            <div className="flex items-center space-x-2 bg-white rounded-lg px-4 py-2">
              {/* Cart Icon */}
              <CiShoppingCart className="h-6 w-6 text-indigo-900" />
              {/* Cart Text */}
              <span className="text-indigo-900 font-medium">Cart</span>
              {/* Badge */}
              <span className="bg-teal-500 text-white text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center">
                2
              </span>
            </div>
          </Link>
        </div>
      </div>

      {/* Bottom Line: Navigation Menu */}
      <nav className="bg-white border-t border-b-2 border-gray-300">
        <div className="container mx-auto w-full h-[74px] flex justify-between items-center px-4 py-4">
          {/* Menu Items */}
          <ul className="flex space-x-8 text-gray-700 w-full justify-center sm:justify-start">
            <li>
              <Link href="/" className="text-teal-500 hover:text-teal-950">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/SingleProduct"
                className="text-teal-500 hover:text-teal-950"
              >
                Shop
              </Link>
            </li>
            <li>
              <Link href="/Product" className="text-teal-500 hover:text-teal-950">
                Product
              </Link>
            </li>
            <li>
              <Link href="#" className="text-teal-500 hover:text-teal-950">
                Pages
              </Link>
            </li>
            <li>
              <Link href="/AboutUs" className="text-teal-500 hover:text-teal-950">
                About
              </Link>
            </li>
          </ul>

          <div className="mr-4 hover:underline hidden sm:block">
            <Link href="/Contact">
              <p>ContactUs:035162895</p>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
