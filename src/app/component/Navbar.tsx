"use client";
import React, { useState } from "react";
import Image from "next/image";
import { CiShoppingCart } from "react-icons/ci";
import { FiMenu } from "react-icons/fi";
import Link from "next/link";
import { TbJewishStar } from "react-icons/tb";
import LanguageSwitcher from "../LanguageSwitcher/page";
import { ClerkLoaded, SignInButton, UserButton, useUser } from "@clerk/nextjs";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user } = useUser();

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);

  return (
    <header className="shadow">
      {/* Top Banner */}
      <div className="bg-indigo-950 text-white text-sm">
        <div className="container mx-auto flex justify-between items-center px-4 py-2 opacity-70">
          <span>✓ Free Shipping On All Orders Over $50</span>
          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <Link href="/Faqs" className="hover:underline">
              FAQs
            </Link>
            <Link href="/Needhelp" className="hover:underline">
              Need Help
            </Link>
          </div>
        </div>
      </div>

      {/* Logo & Cart */}
      <div className="bg-gray-100">
        <div className="container mx-auto flex justify-between items-center px-4 py-4">
          <Link href="/" className="flex space-x-2 items-center">
            <Image src="/Logo Icon.png" alt="logo" width={40} height={40} />
            <span className="text-xl font-bold">Comforty</span>
          </Link>

          {/* Wishlist & Cart */}
          <div className="flex space-x-3">
            <Link href="/Wishlist" className="group">
              <div className="flex items-center space-x-2 bg-white rounded-lg px-4 py-2 hover:bg-gray-300">
                <TbJewishStar className="h-6 w-6 text-indigo-900 group-hover:text-indigo-700" />
                <span className="text-indigo-900 font-medium text-sm hidden sm:inline">
                  Wishlist
                </span>
                <span className="bg-red-600 text-white text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center">
                  3
                </span>
              </div>
            </Link>

            <Link href="/Cart" className="group">
              <div className="flex items-center space-x-2 bg-white rounded-lg px-4 py-2 hover:bg-gray-300">
                <CiShoppingCart className="h-6 w-6 text-indigo-900 group-hover:text-indigo-700" />
                <span className="text-indigo-900 font-medium text-sm hidden sm:inline">
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

      {/* Navigation */}
      <nav className="bg-white border-t border-b-2 border-gray-300">
        <div className="container mx-auto flex justify-between items-center px-4 py-4">
          {/* Desktop Navigation */}
          <ul className="hidden sm:flex space-x-8 text-gray-700 w-full justify-center sm:justify-start">
            {["Home", "Shop", "Products", "Contact", "About"].map((item) => (
              <li key={item}>
                <Link
                  href={`/${item}`}
                  className="text-teal-500 hover:text-teal-950 hover:underline"
                >
                  {item}
                </Link>
              </li>
            ))}

            {/* Clerk Authentication */}
            <li>
              <ClerkLoaded>
                {user ? (
                  <div className="flex items-center space-x-2">
                    <UserButton />
                    <div className="hidden sm:block text-xs">
                      <p className="text-gray-400">Welcome</p>
                      <p className="font-bold">{user.fullName}</p>
                    </div>
                  </div>
                ) : (
                  <SignInButton mode="modal" />
                )}
              </ClerkLoaded>
            </li>

            {/* Search */}
            <form action="/search" className="w-full sm:w-auto sm:mx-4">
              <input
                type="text"
                name="query"
                placeholder="Search for products"
                className="bg-gray-100 text-gray-800 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-teal-500 border w-full max-w-4xl"
              />
            </form>
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="sm:hidden flex items-center"
            aria-label="Toggle Menu"
          >
            <FiMenu className="w-6 h-6 text-teal-500" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 z-50 w-64 h-full bg-white shadow-md transition-transform duration-300 transform ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={toggleMobileMenu}
            className="text-teal-500"
            aria-label="Close Menu"
          >
            X
          </button>
        </div>
        <ul className="flex flex-col space-y-6 px-6">
          {["Home", "Shop", "Products", "Contact", "About"].map((item) => (
            <li key={item}>
              <Link
                href={`/${item}`}
                className="text-teal-500 hover:text-teal-950"
                onClick={toggleMobileMenu}
              >
                {item}
              </Link>
            </li>
          ))}

          {/* Clerk Authentication in Mobile Menu */}
          <li>
            <ClerkLoaded>
              {user ? (
                <div className="flex items-center space-x-2">
                  <UserButton />
                  <div className="hidden sm:block text-xs">
                    <p className="text-gray-400">Welcome</p>
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
