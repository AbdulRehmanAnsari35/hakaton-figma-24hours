"use client";
import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const LanguageSwitcher = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const languages = [
    { code: "en", label: "English" },
    { code: "es", label: "Español" },
    { code: "fr", label: "Français" },
    { code: "de", label: "Deutsch" },
    { code: "it", label: "Italiano" },
  ];

  return (
    <div className="relative">
      <button
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className="px-4 py-2 rounded-md flex"
      >
        Lang
        <FiChevronDown className="w-4 h-4 ml-1 text-gray-300" />
      </button>
      <div
        className={`absolute top-full right-0 mt-2 w-40 bg-gray-900 rounded-md shadow-lg transform transition-all duration-300 ease-in-out ${
          isDropdownOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-2"
        }`}
      >
        <div className="flex flex-col items-start p-2">
          {languages.map((lang) => (
            <button
              key={lang.code}
              className="px-4 py-2 w-full text-left hover:bg-indigo-950 hover:underline hover:text-red-500"
            >
              {lang.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
