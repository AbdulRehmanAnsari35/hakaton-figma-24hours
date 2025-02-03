"use client";
import React, { useState } from "react";

type FilterProps = {
  onFilterChange: (filters: {
    priceRange: number[];
    inStockOnly: boolean;
  }) => void;
};

const ProductFilter: React.FC<FilterProps> = ({ onFilterChange }) => {
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [inStockOnly, setInStockOnly] = useState(false);

  const handlePriceRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newRange = e.target.value.split(",").map(Number);
    setPriceRange(newRange);
  };

  const handleInStockToggle = () => {
    setInStockOnly((prev) => !prev);
  };

  const applyFilters = () => {
    onFilterChange({ priceRange, inStockOnly });
  };

  return (
    <div className="filter-panel bg-gray-200 rounded-xl shadow-2xl max-w-xl mx-auto p-8 space-y-8">
      <h3 className="text-2xl font-semibold text-gray-800 text-center">
        Filter Products
      </h3>

      <div className="flex justify-between items-center gap-8">
        <div className="flex flex-col w-1/3">
          <label className="block text-lg font-medium text-gray-700 mb-3">
            Price Range
          </label>
          <input
            type="range"
            min="8"
            max="500"
            step="1"
            value={priceRange.join(",")}
            onChange={handlePriceRangeChange}
            className="w-full h-3 bg-teal-300 rounded-lg appearance-none cursor-pointer shadow-sm transition-all duration-300 hover:bg-teal-400 focus:ring-2 focus:ring-teal-400"
          />
          <div className="flex justify-between text-sm text-gray-600 mt-2">
            <span>${priceRange[0]}</span>
            <span>${priceRange[1]}</span>
          </div>
        </div>

        <div className="flex flex-col w-1/3 items-center">
          <label className="text-lg font-semibold text-gray-700 mb-3">
            In Stock Only
          </label>
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={inStockOnly}
              onChange={handleInStockToggle}
              className="form-checkbox text-teal-500 w-6 h-6 border-gray-300 rounded-md focus:ring-teal-300 transition-all"
            />
            <span className="text-gray-700">Only show in-stock products</span>
          </div>
        </div>

        <div className="flex flex-col w-1/3 items-end">
          <button
            onClick={applyFilters}
            className="w-full bg-teal-500 text-white p-4 rounded-md font-semibold text-lg hover:bg-teal-600 focus:ring-4 focus:ring-teal-200 transition-all duration-300 transform hover:scale-105"
          >
            Apply Filters
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductFilter;
