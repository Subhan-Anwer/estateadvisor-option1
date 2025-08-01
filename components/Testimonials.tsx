"use client";
import React, { useState, useEffect } from "react";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Noman Sheikh",
      role: "Business Owner",
      image:
        "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150",
      rating: 5,
      text: "Estate Advisor helped me find the perfect commercial space in DHA. Their expertise and professionalism made the entire process seamless. Highly recommended for anyone looking for premium properties in Karachi.",
    },
    {
      id: 2,
      name: "Fatima Khan",
      role: "Real Estate Investor",
      image:
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150",
      rating: 5,
      text: "With 30 years of experience, Estate Advisor truly understands the market. They guided me through multiple property investments and each one has been profitable. Their market insights are invaluable.",
    },
    {
      id: 3,
      name: "Muhammad Ali",
      role: "Software Engineer",
      image:
        "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150",
      rating: 5,
      text: "Bought my dream apartment in Bahria Town through Estate Advisor. The team was incredibly patient, showing me multiple options until I found the perfect match. Excellent service from start to finish.",
    },
    {
      id: 4,
      name: "Sarah Ahmed",
      role: "Doctor",
      image:
        "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=150",
      rating: 5,
      text: "Professional, reliable, and trustworthy. Estate Advisor helped me secure a beautiful bungalow in Gulshan-e-Iqbal. Their attention to detail and commitment to client satisfaction is remarkable.",
    },
    {
      id: 5,
      name: "Usman Sheikh",
      role: "Entrepreneur",
      image:
        "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150",
      rating: 5,
      text: "Estate Advisor is my go-to for all property needs. Their deep knowledge of Karachi's real estate market and honest advice have saved me from making costly mistakes. True professionals!",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? "text-yellow-400 fill-current" : "text-gray-600"
        }`}
      />
    ));
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-yellow-400/3 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent">
            What Our Clients Say
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Hear from our satisfied clients who have found their dream
            properties with Estate Advisor
          </p>
        </div>

        {/* Testimonials Slider */}
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0">
                  <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 md:p-12 mx-4">
                    {/* Quote Icon */}
                    <div className="flex justify-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-yellow-400/20 to-yellow-500/20 rounded-full flex items-center justify-center">
                        <Quote className="w-8 h-8 text-yellow-400" />
                      </div>
                    </div>

                    {/* Testimonial Text */}
                    <blockquote className="text-lg md:text-xl text-gray-300 text-center mb-8 leading-relaxed italic">
                      "{testimonial.text}"
                    </blockquote>

                    {/* Client Info */}
                    <div className="flex flex-col items-center">
                      {/* Profile Image */}
                      <div className="w-16 h-16 rounded-full overflow-hidden mb-4 border-2 border-yellow-400/30">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Name and Role */}
                      <h4 className="text-xl font-bold text-yellow-400 mb-1">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-400 mb-4">{testimonial.role}</p>

                      {/* Rating */}
                      <div className="flex space-x-1">
                        {renderStars(testimonial.rating)}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-gray-900/80 backdrop-blur-sm border border-gray-700 text-yellow-400 p-3 rounded-full hover:bg-yellow-400 hover:text-black transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-gray-900/80 backdrop-blur-sm border border-gray-700 text-yellow-400 p-3 rounded-full hover:bg-yellow-400 hover:text-black transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-yellow-400 scale-125"
                    : "bg-gray-600 hover:bg-gray-500"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
