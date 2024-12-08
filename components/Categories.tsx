import React from 'react';
import { Phone, Monitor, Watch, Camera, Headphones, Gamepad2 } from 'lucide-react';

const Categories = () => {
  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <div className="border border-gray-200 rounded-lg p-6 bg-white w-11/12 max-w-6xl shadow-lg">
        
        {/* Navigation with Arrows on the Right */}
        <div className="flex items-center justify-between mb-6">
          <div className="text-black text-center p-3">
            <p className="text-lg font-semibold">Categories</p>
          </div>
          {/* Arrows on the right side */}
          <div className="flex items-center">
            <button className="text-gray-700 text-2xl">
              <span className="w-8 h-8 flex justify-center items-center">
                <span>&lt;</span>
              </span>
            </button>
            <button className="text-gray-700 text-2xl ml-4">
              <span className="w-8 h-8 flex justify-center items-center">
                <span>&gt;</span>
              </span>
            </button>
          </div>
        </div>

        {/* "Browse By Category" Button */}
        <div className="text-left mb-6">
          <button className="text-black px-6 py-2 rounded-full text-xl font-semibold hover:bg-red-600">
            Browse By Category
          </button>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-6 gap-4">
          {/* Category 1 */}
          <div className="flex flex-col items-center p-4 border border-gray-200 rounded hover:shadow-md cursor-pointer">
            <Phone className="mb-2 text-gray-700 w-12 h-12" />
            <p className="font-medium text-gray-700">Phones</p>
          </div>
          {/* Category 2 */}
          <div className="flex flex-col items-center p-4 border border-gray-200 rounded hover:shadow-md cursor-pointer">
            <Monitor className="mb-2 text-gray-700 w-12 h-12" />
            <p className="font-medium text-gray-700">Computers</p>
          </div>
          {/* Category 3 */}
          <div className="flex flex-col items-center p-4 border border-gray-200 rounded hover:shadow-md cursor-pointer">
            <Watch className="mb-2 text-gray-700 w-12 h-12" />
            <p className="font-medium text-gray-700">SmartWatch</p>
          </div>
          {/* Category 4 (Highlighted) */}
          <div className="flex flex-col items-center p-4 border border-gray-200 rounded bg-red-500 text-white hover:shadow-md cursor-pointer">
            <Camera className="mb-2 w-12 h-12" />
            <p className="font-medium">Camera</p>
          </div>
          {/* Category 5 */}
          <div className="flex flex-col items-center p-4 border border-gray-200 rounded hover:shadow-md cursor-pointer">
            <Headphones className="mb-2 text-gray-700 w-12 h-12" />
            <p className="font-medium text-gray-700">Headphones</p>
          </div>
          {/* Category 6 */}
          <div className="flex flex-col items-center p-4 border border-gray-200 rounded hover:shadow-md cursor-pointer">
            <Gamepad2 className="mb-2 text-gray-700 w-12 h-12" />
            <p className="font-medium text-gray-700">Gaming</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
