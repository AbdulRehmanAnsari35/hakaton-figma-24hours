import { FC } from "react"; // Importing React's functional component type
import Image from "next/image"; // For optimized image rendering in Next.js
import Link from "next/link"; // For internal navigation links
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaCcPaypal,
  FaCcVisa,
  FaCcMastercard,
} from "react-icons/fa"; // Importing icons from react-icons library

// Defining the Footer component
const Footer: FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      {/* Main content area of the footer */}
      <div className="container mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        
        {/* Logo and About Section */}
        <div className="w-full sm:w-[350px]">
          <h2 className="flex items-center space-x-2 text-xl font-semibold text-gray-800">
            {/* Logo Image */}
            <Image
              src="/Logo Icon.png" // Replace with the actual logo image path
              alt="Comforty Logo"
              width={40} // Logo width
              height={40} // Logo height
              className="object-contain" // Ensures the logo is scaled proportionally
            />
            <span>Comforty</span> {/* Brand name */}
          </h2>

          {/* Company Description */}
          <p className="mt-4 text-sm text-gray-600 leading-relaxed">
            Comforty giving you best library stool chairs,
            <br />
            in Cheap Price with discouts
            <br />
            check our new sales.
          </p>

          {/* Social Media Links */}
          <div className="flex space-x-4 mt-6">
            {/* Facebook */}
            <Link
              href="#"
              className="text-gray-500 hover:text-teal-500 transition-colors"
              aria-label="Facebook"
            >
              <FaFacebookF size={20} />
            </Link>
            {/* Twitter */}
            <Link
              href="#"
              className="text-gray-500 hover:text-teal-500 transition-colors"
              aria-label="Twitter"
            >
              <FaTwitter size={20} />
            </Link>
            {/* Instagram */}
            <Link
              href="#"
              className="text-gray-500 hover:text-teal-500 transition-colors"
              aria-label="Instagram"
            >
              <FaInstagram size={20} />
            </Link>
            {/* YouTube */}
            <Link
              href="#"
              className="text-gray-500 hover:text-teal-500 transition-colors"
              aria-label="YouTube"
            >
              <FaYoutube size={20} />
            </Link>
          </div>
        </div>

        {/* Category Links Section */}
        <div>
          <h3 className="text-sm ml-12 font-semibold text-gray-500 uppercase tracking-wider">
            Category {/* Section Heading */}
          </h3>
          <ul className="mt-4 space-y-2 ml-12">
            {[
              // List of categories
              "Sofa",
              "Armchair",
              "Wing Chair",
              "Desk Chair",
              "Wooden Chair",
              "Park Bench",
            ].map((category, index) => (
              <li key={index}>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-teal-500 hover:underline transition-colors text-sm"
                >
                  {category}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Support Links Section */}
        <div>
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
            Support {/* Section Heading */}
          </h3>
          <ul className="mt-4 space-y-2">
            {[
              // List of support links
              "Help & Support",
              "Terms & Conditions",
              "Privacy Policy",
              "Help",
            ].map((support, index) => (
              <li key={index}>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-teal-500 hover:underline transition-colors text-sm"
                >
                  {support}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter Subscription Section */}
        <div>
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
            Newsletter {/* Section Heading */}
          </h3>
          <form className="mt-4">
            {/* Input field and button for email subscription */}
            <div className="flex flex-col sm:flex-row sm:items-center">
              <input
                type="email"
                placeholder="Your email" // Placeholder text
                className="w-full sm:w-auto mr-1 px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm"
              />
              <button
                type="submit"
                className="bg-teal-500 hover:bg-teal-600 text-white px-2 py-2 rounded-r-lg text-sm font-medium mt-4 sm:mt-0 sm:ml-2"
              >
                Subscribe
              </button>
            </div>
            {/* Additional information */}
            <p className="text-xs text-gray-600 mt-2">
              Enter your Email Comforty give you persnol discounts 
              and our new chairs
            </p>
          </form>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="border-t border-gray-200 mt-12 py-4">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500">
          {/* Copyright Notice */}
          <p>
            © 2024 – Biocy - Designed & Developed by{" "}
            <Link
              href="#"
              className="text-teal-500 hover:text-teal-600 transition-colors"
            >
              Abdul Rehman Ansari
            </Link>
          </p>
          {/* Payment Method Icons */}
          <div className="flex space-x-4 mt-2 sm:mt-0">
            <FaCcPaypal
              size={32}
              className="text-gray-500 hover:text-teal-500 transition-colors"
            />
            <FaCcVisa
              size={32}
              className="text-gray-500 hover:text-teal-500 transition-colors"
            />
            <FaCcMastercard
              size={32}
              className="text-gray-500 hover:text-teal-500 transition-colors"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; // Exporting the Footer component
