import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaCcPaypal,
  FaCcVisa,
  FaCcMastercard,
} from "react-icons/fa";

const Footer: FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {/* Logo and About */}
        <div className="w-full sm:w-[350px]">
          <h2 className="flex items-center space-x-2 text-xl font-semibold text-gray-800">
            <Image
              src="/Logo Icon.png" // Replace with the actual path to your logo image
              alt="Comforty Logo"
              width={40} // Adjust size based on your design
              height={40} // Adjust size based on your design
              className="object-contain"
            />
            <span>Comforty</span>
          </h2>

          <p className="mt-4 text-sm text-gray-600 leading-relaxed">
            Vivamus tristique odio sit amet velit semper,
            <br />
            eu posuere turpis interdum.
            <br />
            Cras egestas purus.
          </p>
          <div className="flex space-x-4 mt-6">
            {/* Social Media Icons */}
            <Link
              href="#"
              className="text-gray-500 hover:text-teal-500 transition-colors"
              aria-label="Facebook"
            >
              <FaFacebookF size={20} />
            </Link>
            <Link
              href="#"
              className="text-gray-500 hover:text-teal-500 transition-colors"
              aria-label="Twitter"
            >
              <FaTwitter size={20} />
            </Link>
            <Link
              href="#"
              className="text-gray-500 hover:text-teal-500 transition-colors"
              aria-label="Instagram"
            >
              <FaInstagram size={20} />
            </Link>
            <Link
              href="#"
              className="text-gray-500 hover:text-teal-500 transition-colors"
              aria-label="YouTube"
            >
              <FaYoutube size={20} />
            </Link>
          </div>
        </div>

        {/* Category Links */}
        <div>
          <h3 className="text-sm ml-12 font-semibold text-gray-500 uppercase tracking-wider">
            Category
          </h3>
          <ul className="mt-4 space-y-2 ml-12">
            {[
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

        {/* Support Links */}
        <div>
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
            Support
          </h3>
          <ul className="mt-4 space-y-2">
            {[
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

        {/* Newsletter */}
        <div>
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
            Newsletter
          </h3>
          <form className="mt-4">
            <div className="flex flex-col sm:flex-row sm:items-center">
              <input
                type="email"
                placeholder="Your email"
                className="w-full sm:w-auto mr-1 px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm"
              />
              <button
                type="submit"
                className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-r-lg text-sm font-medium mt-4 sm:mt-0 sm:ml-2"
              >
                Subscribe
              </button>
            </div>
            <p className="text-xs text-gray-600 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              tincidunt erat enim.
            </p>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 mt-12 py-4">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500">
          <p>
            © 2024 – Biocy - Designed & Developed by{" "}
            <Link
              href="#"
              className="text-teal-500 hover:text-teal-600 transition-colors"
            >
              Abdul Rehman Ansari
            </Link>
          </p>
          <div className="flex space-x-4 mt-2 sm:mt-0">
            {/* Payment Method Icons */}
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

export default Footer;
