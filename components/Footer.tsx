import React from "react";
import {
  Facebook,
  Instagram,
  MessageCircle,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: "About Us", href: "#about" },
      { name: "Our Team", href: "#" },
      { name: "Careers", href: "#" },
      { name: "News & Updates", href: "#" },
    ],
    services: [
      { name: "Buy Property", href: "#properties" },
      { name: "Sell Property", href: "#" },
      { name: "Property Valuation", href: "#" },
      { name: "Investment Advice", href: "#" },
    ],
    areas: [
      { name: "DHA Karachi", href: "#" },
      { name: "Bahria Town", href: "#" },
      { name: "Gulshan-e-Iqbal", href: "#" },
      { name: "PECHS", href: "#" },
    ],
  };

  const socialLinks = [
    {
      icon: Facebook,
      href: "https://www.facebook.com/EstateAdvisor0323/",
      label: "Facebook",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/estateadvisor01/",
      label: "Instagram",
    },
    {
      icon: MessageCircle,
      href: "https://wa.me/923233385541",
      label: "WhatsApp",
    },
  ];

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              {/* Logo */}
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-auto rounded-lg flex items-center justify-center">
                  <Image
                    src="/logo.png"
                    alt="Logo"
                    className="w-full h-auto text-black"
                    height={28}
                    width={28}
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-yellow-400">
                    Estate Advisor
                  </h3>
                  <p className="text-xs text-gray-400">Premium Properties</p>
                </div>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">
                With over 30 years of excellence in Pakistan's real estate
                market, Estate Advisor is your trusted partner for premium
                property investments across Karachi's most prestigious
                locations.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone className="w-4 h-4 text-yellow-400" />
                  <span>+92 323 3385541</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail className="w-4 h-4 text-yellow-400" />
                  <span>sohailadvisor90@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <MapPin className="w-4 h-4 text-yellow-400" />
                  <span>Shahbaz Comm lane 4, DHA Phase VI, Karachi</span>
                </div>
              </div>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="text-lg font-semibold text-yellow-400 mb-6">
                Company
              </h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-yellow-400 transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services Links */}
            <div>
              <h4 className="text-lg font-semibold text-yellow-400 mb-6">
                Services
              </h4>
              <ul className="space-y-3">
                {footerLinks.services.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-yellow-400 transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Areas Links */}
            <div>
              <h4 className="text-lg font-semibold text-yellow-400 mb-6">
                Areas
              </h4>
              <ul className="space-y-3">
                {footerLinks.areas.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-yellow-400 transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Social Links */}
            <div className="flex items-center space-x-6">
              <span className="text-gray-400 text-sm">Follow us:</span>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-yellow-400 hover:bg-yellow-400 hover:text-black transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            {/* Copyright */}
            <div className="text-gray-400 text-center md:text-left">
              <p>&copy; {currentYear} Estate Advisor. All rights reserved.</p>
            </div>

            {/* Additional Links */}
            <div className="flex items-center space-x-6 text-sm">
              <a
                href="#"
                className="text-gray-400 hover:text-yellow-400 transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-yellow-400 transition-colors duration-300"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
