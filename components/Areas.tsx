import React from "react";
import { MapPin, Building, Users, TrendingUp } from "lucide-react";

const Areas = () => {
  const areas = [
    {
      name: "DHA Karachi",
      icon: Building,
      description: "Premium defense housing with world-class amenities",
      properties: "2000+",
      avgPrice: "₨ 15M+",
    },
    {
      name: "Bahria Town",
      icon: Users,
      description: "Modern gated community with luxury facilities",
      properties: "1500+",
      avgPrice: "₨ 12M+",
    },
    {
      name: "Gulshan-e-Iqbal",
      icon: MapPin,
      description: "Central location with excellent connectivity",
      properties: "1200+",
      avgPrice: "₨ 8M+",
    },
    {
      name: "Scheme 33",
      icon: TrendingUp,
      description: "Rapidly developing area with high ROI potential",
      properties: "800+",
      avgPrice: "₨ 6M+",
    },
    {
      name: "Malir Cantt",
      icon: Building,
      description: "Secure cantonment area with planned infrastructure",
      properties: "600+",
      avgPrice: "₨ 10M+",
    },
    {
      name: "PECHS",
      icon: Users,
      description: "Established society with mature infrastructure",
      properties: "900+",
      avgPrice: "₨ 9M+",
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-yellow-400/3 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent">
            Areas We Deal In
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore Karachi's most prestigious neighborhoods where we've
            established our expertise over three decades
          </p>
        </div>

        {/* Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {areas.map((area, index) => (
            <div
              key={index}
              className="group bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-yellow-400/30 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-yellow-400/10"
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-yellow-400/20 to-yellow-500/20 rounded-full mb-6 group-hover:from-yellow-400/30 group-hover:to-yellow-500/30 transition-all duration-300">
                <area.icon className="w-8 h-8 text-yellow-400 group-hover:scale-110 transition-transform duration-300" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-yellow-400 mb-3 group-hover:text-yellow-300 transition-colors duration-300">
                {area.name}
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {area.description}
              </p>

              {/* Stats */}
              <div className="flex justify-between items-center pt-4 border-t border-gray-800 group-hover:border-yellow-400/20 transition-colors duration-300">
                <div>
                  <p className="text-sm text-gray-400">Properties</p>
                  <p className="text-lg font-bold text-yellow-400">
                    {area.properties}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-400">Avg. Price</p>
                  <p className="text-lg font-bold text-yellow-400">
                    {area.avgPrice}
                  </p>
                </div>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-300 mb-8">
            Don't see your preferred area? We cover many more locations across
            Karachi.
          </p>
          <button className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold py-4 px-8 rounded-xl hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-yellow-400/25">
            View All Areas
          </button>
        </div>
      </div>
    </section>
  );
};

export default Areas;
