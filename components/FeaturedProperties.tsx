"use client";
import React, { useState } from "react";
import {
  MapPin,
  Bed,
  Bath,
  Square,
  Eye,
  Heart,
  ArrowRight,
} from "lucide-react";

const FeaturedProperties = () => {
  const [likedProperties, setLikedProperties] = useState<number[]>([]);

  const properties = [
    {
      id: 1,
      type: "Plot",
      title: "Premium Residential Plot",
      location: "DHA Phase 6, Karachi",
      price: "₨ 2.5 Crore",
      size: "500 sq. yards",
      image:
        "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: { beds: null, baths: null, area: "500 sq. yards" },
    },
    {
      id: 2,
      type: "Commercial",
      title: "Modern Office Complex",
      location: "Clifton, Karachi",
      price: "₨ 5.8 Crore",
      size: "2000 sq. ft",
      image:
        "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: { beds: null, baths: 4, area: "2000 sq. ft" },
    },
    {
      id: 3,
      type: "Apartment",
      title: "Luxury Penthouse",
      location: "Bahria Town, Karachi",
      price: "₨ 3.2 Crore",
      size: "1800 sq. ft",
      image:
        "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: { beds: 4, baths: 3, area: "1800 sq. ft" },
    },
    {
      id: 4,
      type: "Bungalow",
      title: "Grand Family Bungalow",
      location: "Gulshan-e-Iqbal, Karachi",
      price: "₨ 4.5 Crore",
      size: "1200 sq. yards",
      image:
        "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: { beds: 6, baths: 5, area: "1200 sq. yards" },
    },
    {
      id: 5,
      type: "Plot",
      title: "Corner Commercial Plot",
      location: "Scheme 33, Karachi",
      price: "₨ 1.8 Crore",
      size: "400 sq. yards",
      image:
        "https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: { beds: null, baths: null, area: "400 sq. yards" },
    },
    {
      id: 6,
      type: "Apartment",
      title: "Sea View Apartment",
      location: "PECHS, Karachi",
      price: "₨ 2.8 Crore",
      size: "1500 sq. ft",
      image:
        "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: { beds: 3, baths: 2, area: "1500 sq. ft" },
    },
  ];

  const toggleLike = (propertyId: number) => {
    setLikedProperties((prev) =>
      prev.includes(propertyId)
        ? prev.filter((id) => id !== propertyId)
        : [...prev, propertyId]
    );
  };

  const getTypeColor = (type: string) => {
    const colors = {
      Plot: "bg-blue-500/20 text-blue-400 border-blue-500/30",
      Commercial: "bg-green-500/20 text-green-400 border-green-500/30",
      Apartment: "bg-purple-500/20 text-purple-400 border-purple-500/30",
      Bungalow: "bg-orange-500/20 text-orange-400 border-orange-500/30",
    };
    return (
      colors[type as keyof typeof colors] ||
      "bg-gray-500/20 text-gray-400 border-gray-500/30"
    );
  };

  return (
    <section id="properties" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-yellow-400/3 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent">
            Featured Properties
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our handpicked selection of premium properties across
            Karachi's most sought-after locations
          </p>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {properties.map((property) => (
            <div
              key={property.id}
              className="group bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden hover:border-yellow-400/30 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-yellow-400/10"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Property Type Badge */}
                <div
                  className={`absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-medium border ${getTypeColor(
                    property.type
                  )}`}
                >
                  {property.type}
                </div>

                {/* Action Buttons */}
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={() => toggleLike(property.id)}
                    className={`p-2 rounded-full backdrop-blur-sm transition-all duration-300 ${
                      likedProperties.includes(property.id)
                        ? "bg-red-500/80 text-white"
                        : "bg-black/50 text-gray-300 hover:bg-red-500/80 hover:text-white"
                    }`}
                  >
                    <Heart
                      className="w-4 h-4"
                      fill={
                        likedProperties.includes(property.id)
                          ? "currentColor"
                          : "none"
                      }
                    />
                  </button>
                  <button className="p-2 rounded-full bg-black/50 text-gray-300 hover:bg-yellow-400/80 hover:text-black transition-all duration-300 backdrop-blur-sm">
                    <Eye className="w-4 h-4" />
                  </button>
                </div>

                {/* View Details Button */}
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold py-2 px-4 rounded-lg hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 flex items-center justify-center space-x-2">
                    <span>View Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors duration-300">
                  {property.title}
                </h3>

                <div className="flex items-center text-gray-400 mb-4">
                  <MapPin className="w-4 h-4 mr-2 text-yellow-400" />
                  <span className="text-sm">{property.location}</span>
                </div>

                {/* Features */}
                <div className="flex items-center space-x-4 mb-4 text-sm text-gray-400">
                  {property.features.beds && (
                    <div className="flex items-center space-x-1">
                      <Bed className="w-4 h-4" />
                      <span>{property.features.beds}</span>
                    </div>
                  )}
                  {property.features.baths && (
                    <div className="flex items-center space-x-1">
                      <Bath className="w-4 h-4" />
                      <span>{property.features.baths}</span>
                    </div>
                  )}
                  <div className="flex items-center space-x-1">
                    <Square className="w-4 h-4" />
                    <span>{property.features.area}</span>
                  </div>
                </div>

                {/* Price */}
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-yellow-400">
                    {property.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold py-4 px-8 rounded-xl hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-yellow-400/25 flex items-center space-x-2 mx-auto">
            <span>View All Properties</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
