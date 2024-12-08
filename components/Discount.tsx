import React from 'react';
import Image from 'next/image';
import { Dot } from 'lucide-react';

export default function Discount() {
  return (
    <div className="max-w-7xl mx-auto px-6 mt-8">
      {/* Full Section with Border */}
      <div className="border border-gray-300 rounded-lg p-8 flex flex-col lg:flex-row items-center gap-8 bg-white">
        {/* Left Section - Text Content */}
        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-4xl font-semibold text-blue-900 mb-4">Discount Item</h2>

          {/* Navigation Links */}
          <ul className="hidden md:flex space-x-4 justify-center lg:justify-start mb-6">
            <li>
              <a href="#" className="text-red-500 font-bold flex items-center gap-2">
                Wood Chair <Dot />
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:underline">Plastic Chair</a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:underline">Sofa Collection</a>
            </li>
          </ul>

          <h3 className="text-2xl font-bold text-blue-900 mb-2">
            20% Discount Of All Products
          </h3>
          <p className="text-red-500 font-semibold mb-4">Eams Sofa Compact</p>
          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec, bibendum condimentum.
          </p>

          <ul className="text-gray-700 space-y-2 mb-6">
            <li>✔ Material expose like metals</li>
            <li>✔ Clear lines and geometric figures</li>
            <li>✔ Simple neutral colours</li>
            <li>✔ Material expose like metals</li>
          </ul>

          <button className="bg-pink-500 text-white py-3 px-6 rounded-lg font-bold hover:bg-pink-600 transition">
            Shop Now
          </button>
        </div>

        {/* Right Section - Image */}
        <div className="flex-1">
          <div className="relative bg-pink-100 rounded-full p-8 flex justify-center items-center">
            <Image
              src="/images/DiscountChair.png" // Replace with the actual image path
              alt="Eams Sofa Compact"
              width={500}
              height={500}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
