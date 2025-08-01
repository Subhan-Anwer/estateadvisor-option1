import React from "react";
import { Award, Users, Building2, TrendingUp } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Award, number: "30+", label: "Years Experience" },
    { icon: Users, number: "5000+", label: "Happy Clients" },
    { icon: Building2, number: "10000+", label: "Properties Sold" },
    { icon: TrendingUp, number: "98%", label: "Success Rate" },
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-yellow-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-400/3 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent">
            Who We Are
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                With over{" "}
                <span className="text-yellow-400 font-semibold">
                  30 years of excellence
                </span>{" "}
                in Pakistan's real estate market, Estate Advisor has established
                itself as the premier destination for luxury property
                investments.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                We specialize in connecting discerning clients with exceptional
                properties across Karachi's most prestigious locations. Our deep
                market knowledge, extensive network, and commitment to
                excellence have made us the trusted choice for thousands of
                satisfied clients.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                From prime residential plots to commercial spaces, luxury
                apartments to grand bungalows, we offer a comprehensive
                portfolio that caters to every investment need and lifestyle
                preference.
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold py-4 px-8 rounded-xl hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-yellow-400/25">
                Learn More About Us
              </button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 text-center hover:border-yellow-400/30 transition-all duration-300 group hover:transform hover:scale-105"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-yellow-400/20 to-yellow-500/20 rounded-full mb-4 group-hover:from-yellow-400/30 group-hover:to-yellow-500/30 transition-all duration-300">
                  <stat.icon className="w-8 h-8 text-yellow-400 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-3xl font-bold text-yellow-400 mb-2">
                  {stat.number}
                </h3>
                <p className="text-gray-300 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
