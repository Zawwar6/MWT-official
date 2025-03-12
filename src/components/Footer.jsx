import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-blue-950">
      <div className="max-w-7xl mx-auto px-6 py-16 grid gap-10 md:grid-cols-[2fr_1fr_1fr_1fr]">
        {/* Logo and Description */}
        <div>
          <h1 className="text-3xl font-bold mb-4">MWT OFFICIAL</h1>
          <p className="text-gray-600">
            MWT Official is your go-to destination for premium leather jackets and gloves, crafted with precision and style. 
            Timeless elegance meets modern trends to ensure durability and comfort.
          </p>
          {/* Social Icons */}
          <div className="flex gap-4 mt-6 text-xl text-blue-900">
            <FaFacebookF className="hover:text-blue-500 cursor-pointer" />
            <FaInstagram className="hover:text-pink-500 cursor-pointer" />
            <FaTwitter className="hover:text-sky-500 cursor-pointer" />
            <FaLinkedinIn className="hover:text-blue-700 cursor-pointer" />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold mb-4">COMPANY</h2>
          <ul className="space-y-2 text-gray-600">
            <li className="hover:text-blue-500 cursor-pointer">Home</li>
            <li className="hover:text-blue-500 cursor-pointer">About Us</li>
            <li className="hover:text-blue-500 cursor-pointer">Delivery</li>
            <li className="hover:text-blue-500 cursor-pointer">Privacy Policy</li>
          </ul>
        </div>

        

        {/* Contact */}
        <div>
          <h2 className="text-lg font-semibold mb-4">GET IN TOUCH</h2>
          <ul className="space-y-2 text-gray-600">
            <li>📞 +1-00000000000</li>
            <li>📧contact@mwtofficial.com</li>
            <li>📍 Washington, D.C.</li>
          </ul>
        </div>
      </div>

      <div className="border-t py-5 text-center text-sm text-gray-500">
        © 2024 MWT Official. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
