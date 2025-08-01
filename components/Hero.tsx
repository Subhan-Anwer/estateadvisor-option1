"use client";
import React, { useState } from "react";
import { Search, MapPin, Ruler, Home } from "lucide-react";

const Hero = () => {
  const [searchData, setSearchData] = useState({
    location: "",
    size: "",
    propertyType: "",
  });

  const propertyTypes = ["Plot", "Commercial", "Apartment", "Bungalows"];
  const locations = [
    "DHA Karachi",
    "Bahria Town",
    "Gulshan-e-Iqbal",
    "Scheme 33",
    "Malir Cantt",
    "PECHS",
  ];

  const handleSearch = () => {
    console.log("Search data:", searchData);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background with golden glow effects */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute top-20 left-20 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-yellow-400/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-yellow-400/5 to-transparent rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Content */}
        <div className="mb-12">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent leading-tight">
            Discover Premium Properties
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-yellow-400">
            with Estate Advisor
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 font-light">
            Plots • Apartments • Bungalows • Commercial Spaces
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-4xl mx-auto bg-gray-900/80 backdrop-blur-md rounded-2xl p-6 border border-yellow-400/20 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            {/* Location */}
            <div className="relative group">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-yellow-400 group-hover:scale-110 transition-transform duration-300" />
              <select
                value={searchData.location}
                onChange={(e) =>
                  setSearchData({ ...searchData, location: e.target.value })
                }
                className="w-full pl-12 pr-4 py-4 bg-black/50 border border-gray-700 rounded-xl text-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300 appearance-none cursor-pointer hover:border-yellow-400/50"
              >
                <option value="">Select Location</option>
                {locations.map((location) => (
                  <option key={location} value={location}>
                    {location}
                  </option>
                ))}
              </select>
            </div>

            {/* Size */}
            <div className="relative group">
              <Ruler className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-yellow-400 group-hover:scale-110 transition-transform duration-300" />
              <input
                type="text"
                placeholder="Size (sq. yards)"
                value={searchData.size}
                onChange={(e) =>
                  setSearchData({ ...searchData, size: e.target.value })
                }
                className="w-full pl-12 pr-4 py-4 bg-black/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300 hover:border-yellow-400/50"
              />
            </div>

            {/* Property Type */}
            <div className="relative group">
              <Home className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-yellow-400 group-hover:scale-110 transition-transform duration-300" />
              <select
                value={searchData.propertyType}
                onChange={(e) =>
                  setSearchData({ ...searchData, propertyType: e.target.value })
                }
                className="w-full pl-12 pr-4 py-4 bg-black/50 border border-gray-700 rounded-xl text-white focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300 appearance-none cursor-pointer hover:border-yellow-400/50"
              >
                <option value="">Property Type</option>
                {propertyTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            {/* Search Button */}
            <button
              onClick={handleSearch}
              className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold py-4 px-8 rounded-xl hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-yellow-400/25 flex items-center justify-center space-x-2 group"
            >
              <Search className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              <span>Search</span>
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-yellow-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-yellow-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
