"use client";
import React, { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show button after a delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Show tooltip periodically
    const tooltipTimer = setInterval(() => {
      setShowTooltip(true);
      setTimeout(() => setShowTooltip(false), 3000);
    }, 10000);

    return () => clearInterval(tooltipTimer);
  }, []);

  const handleWhatsAppClick = () => {
    const phoneNumber = "923001234567";
    const message = encodeURIComponent(
      "Hi! I'm interested in your premium properties. Can you help me find the perfect property?"
    );
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Tooltip */}
      {showTooltip && (
        <div className="absolute bottom-16 right-0 mb-2 mr-2 bg-gray-900 text-white px-4 py-2 rounded-lg shadow-lg border border-gray-700 whitespace-nowrap animate-bounce">
          <div className="relative">
            <p className="text-sm font-medium">Need help finding properties?</p>
            <p className="text-xs text-gray-300">Chat with us on WhatsApp!</p>
            <button
              onClick={() => setShowTooltip(false)}
              className="absolute -top-1 -right-1 w-4 h-4 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors duration-200"
            >
              <X className="w-2 h-2" />
            </button>
          </div>
          {/* Arrow */}
          <div className="absolute bottom-0 right-4 transform translate-y-full">
            <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-900"></div>
          </div>
        </div>
      )}

      {/* WhatsApp Button */}
      <button
        onClick={handleWhatsAppClick}
        className="group relative w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center transform hover:scale-110 animate-pulse hover:animate-none"
        aria-label="Chat on WhatsApp"
      >
        {/* Ripple Effect */}
        <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-20"></div>
        <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-20 animation-delay-1000"></div>

        {/* Icon */}
        <MessageCircle className="w-7 h-7 text-white group-hover:scale-110 transition-transform duration-300" />

        {/* Online Indicator */}
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 border-2 border-white rounded-full animate-pulse"></div>
      </button>
    </div>
  );
};

export default WhatsAppButton;
