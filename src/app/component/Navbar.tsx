"use client";
import React, { useState } from "react";
import Image from "next/image";
import { CiShoppingCart } from "react-icons/ci";
import { FiMenu } from "react-icons/fi";
import Link from "next/link";
import { TbJewishStar } from "react-icons/tb";
import LanguageSwitcher from "../LanguageSwitcher/page";
import { ClerkLoaded,  SignInButton,  UserButton,  useUser  } from "@clerk/nextjs";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const {user} = useUser();


  return (
    <header className="shadow">
      <div className="bg-indigo-950 text-white text-sm">
        <div className="container opacity-70 mx-auto flex justify-between items-center px-4 py-2">
          <span>✓ Free Shipping On All Orders Over $50</span>
          <div className="flex items-center gap-4">
            <div className="flex items-center hover:underline">
              <LanguageSwitcher />
            </div>

            <Link href="/Faqs" className="hover:underline">
              FAQs
            </Link>
            <Link href="/Needhelp" className="hover:underline">
              Need Help
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-gray-100">
        <div className="container mx-auto flex justify-between items-center px-4 py-4">
          <div className="flex-1 text-center sm:text-left">
            <div className="flex space-x-2 justify-center sm:justify-start">
              <Image src="/Logo Icon.png" alt="logo" width={40} height={40} />
              <span className="text-xl font-bold">Comforty</span>
            </div>
          </div>

          
          <div className="flex space-x-3">
  
      <Link href="/Wishlist">
        <div className="flex items-center space-x-2 bg-white rounded-lg px-4 py-2 hover:bg-gray-300 sm:px-4 sm:py-2 sm:space-x-2">
          <TbJewishStar className="h-6 w-6 text-indigo-900 sm:h-4 sm:w-4" />
          <span className="text-indigo-900 font-medium text-sm sm:text-base hidden sm:inline">
            Wishlist
          </span>
          <span className="bg-red-600 text-white text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center">
            3
          </span>
        </div>
      </Link>
    
    
      <Link href="/Cart">
        <div className="flex items-center space-x-2 bg-white rounded-lg px-4 py-2 hover:bg-gray-300 sm:px-4 sm:py-2 sm:space-x-2">
          <CiShoppingCart className="h-6 w-6 text-indigo-900 sm:h-4 sm:w-4" />
          <span className="text-indigo-900 font-medium text-sm sm:text-base hidden sm:inline">
            Cart
          </span>
          <span className="bg-teal-500 text-white text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center">
            2
          </span>
        </div>
      </Link>
    
</div>

          
          
        </div>
       
      </div>


      <nav className="bg-white border-t border-b-2 border-gray-300">
        <div className="container mx-auto w-full h-[74px] flex justify-between items-center px-4 py-4">
          <ul className="hidden sm:flex space-x-8 text-gray-700 w-full justify-center sm:justify-start">
            <li>
              <Link
                href="/"
                className="text-teal-500 hover:text-teal-950 hover:underline"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/Shop"
                className="text-teal-500 hover:text-teal-950 hover:underline"
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                href="/Products"
                className="text-teal-500 hover:text-teal-950 hover:underline"
              >
                Product
              </Link>
            </li>
            <li>
              <Link
                href="/Contact"
                className="text-teal-500 hover:text-teal-950 hover:underline"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/AboutUs"
                className="text-teal-500 hover:text-teal-950 hover:underline"
              >
                About
              </Link>
            </li>
            <li>
            <ClerkLoaded>
    {user ? (
      <div className="flex items-center space-x-2">
        <div /> 
        <UserButton />
        <div className="hidden sm:block text-xs">
          <p className="text-gray-400">welcome</p>
          <p className="font-bold">{user.fullName}</p>
        </div>
      </div>
    ) : (
      <SignInButton mode="modal" />
    )}
  </ClerkLoaded>
            </li>
            <form
              action="/search"
              className="w-full sm:w-auto am:flex-1 sm:mx-4 mt-2 sm:mt-0"
            >
              <input
                type="text"
                name="query"
                placeholder="Search for products"
                className="bg-gray-100 text-gray-800 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50 border w-full max-w-4xl"
              />
            </form>
          </ul>

          <div className="sm:hidden flex items-center">
            <button onClick={toggleMobileMenu}>
              <FiMenu className="w-6 h-6 text-teal-500" />
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`fixed top-0 left-0 z-50 w-64 h-full bg-white shadow-md transition-transform duration-300 transform ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleMobileMenu} className="text-teal-500">
            X
          </button>
        </div>
        <ul className="flex flex-col space-y-6 px-6">
          <li>
            <Link
              href="/"
              className="text-teal-500 hover:text-teal-950"
              onClick={toggleMobileMenu}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/Shop"
              className="text-teal-500 hover:text-teal-950"
              onClick={toggleMobileMenu}
            >
              Shop
            </Link>
          </li>
          <li>
            <Link
              href="/Products"
              className="text-teal-500 hover:text-teal-950"
              onClick={toggleMobileMenu}
            >
              Product
            </Link>
          </li>
          <li>
            <Link
              href="/Contact"
              className="text-teal-500 hover:text-teal-950"
              onClick={toggleMobileMenu}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              href="/AboutUs"
              className="text-teal-500 hover:text-teal-950"
              onClick={toggleMobileMenu}
            >
              About
            </Link>
          </li>
          <li>
          <ClerkLoaded>
    {user ? (
      <div className="flex items-center space-x-2">
        <div /> 
        <UserButton />
        <div className="hidden sm:block text-xs">
          <p className="text-gray-400">welcome</p>
          <p className="font-bold">{user.fullName}</p>
        </div>
      </div>
    ) : (
      <SignInButton mode="modal" />
    )}
  </ClerkLoaded>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
