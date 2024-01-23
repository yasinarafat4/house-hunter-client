// src/components/UnifiedSearchBar.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchHouses = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    city: "",
    bedrooms: "",
    bathrooms: "",
    roomSize: "",
    rentRange: 2500, // default value
  });
  const navigate = useNavigate();

  const handleSearch = () => {
    console.log("Search Term:", searchTerm);
    console.log("Filters:", filters);
    navigate("/searchResult");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  return (
    <div className="container mt-8 dark:bg-slate-800 dark:text-white">
      <div className="flex flex-col items-center justify-between bg-white rounded-md p-4 shadow-md space-y-2 dark:bg-slate-800 dark:text-white">
        <input
          type="text"
          placeholder="Search Houses..."
          className="w-full px-4 py-2 mb-4 sm:mb-0 sm:mr-2 border rounded-md focus:outline-none focus:[#5ca078] dark:bg-slate-800 dark:text-white"
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <div className="flex flex-col md:flex-row space-y-4 sm:space-y-0 sm:space-x-2">
          {/* City Filter */}
          <input
            type="text"
            name="city"
            placeholder="City"
            className="w-full md:w-1/2 sm:w-auto px-4 py-2 border rounded-md focus:outline-none focus:[#5ca078] dark:bg-slate-800 dark:text-white"
            onChange={handleInputChange}
          />

          {/* Bedrooms Filter */}
          <input
            type="number"
            name="bedrooms"
            placeholder="Bedrooms"
            className="w-full md:w-1/2 sm:w-auto px-4 py-2 border rounded-md focus:outline-none focus:[#5ca078] dark:bg-slate-800 dark:text-white"
            onChange={handleInputChange}
          />
        </div>
        <div className="flex flex-col md:flex-row space-y-4 sm:space-y-0 sm:space-x-2">
          {/* Bathrooms Filter */}
          <input
            type="number"
            name="bathrooms"
            placeholder="Bathrooms"
            className="w-full md:w-1/2 sm:w-auto px-4 py-2 border rounded-md focus:outline-none focus:border-[#5ca078] dark:bg-slate-800 dark:text-white"
            onChange={handleInputChange}
          />

          {/* Room Size Filter */}
          <select
            name="roomSize"
            className="w-full md:w-1/2 sm:w-auto px-4 py-2 border rounded-md bg-white focus:outline-none focus:border-[#5ca078] dark:bg-slate-800 dark:text-white cursor-pointer"
            onChange={handleInputChange}
          >
            <option value="">Room Size</option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </div>

        <div className="flex flex-col md:flex-row space-y-4 sm:space-y-0 sm:space-x-2">
          {/* Rent Range Filter */}
          <input
            type="range"
            name="rentRange"
            min="1000"
            max="5000"
            step="100"
            value={filters.rentRange}
            className="mt-1 w-full sm:w-auto dark:bg-slate-800 dark:text-white"
            onChange={handleInputChange}
          />
          <span className="text-gray-700 text-sm ml-2 dark:bg-slate-800 dark:text-white">
            Rent: ${filters.rentRange}
          </span>
        </div>

        <button
          className="bg-[#5ca078] text-white px-4 py-2 rounded-md mt-4 sm:mt-0"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchHouses;
