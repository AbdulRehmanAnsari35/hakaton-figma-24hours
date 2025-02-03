// src/components/SearchBar.tsx

"use client";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="flex items-center border h-9 py-1 px-3 rounded-lg ml-20">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        className="border-none py-1 w-64"
        placeholder="Search for products..."
      />
      <div
        onClick={handleSearch}
        className="ml-2 p-1  text-white rounded-lg cursor-pointer"
      >
        <FaSearch className="text-teal-500" size={25} />
      </div>
    </div>
  );
};

export default SearchBar;
