import React from 'react';
import Image from 'next/image';

export default function Blog() {
  const products = [
    { img: "/images/Bloglogo.png" },
    { img: "/images/Blog1.png" },
    { img: "/images/Blog2.png" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 mt-6">
      {/* Full Border Section */}
      <div className="border border-gray-300 rounded-lg p-8 flex flex-col items-center">
        {/* Flash Sales Header */}
        <div className="relative border-b-6 border-gray-200 pb-4 mb-8 w-full">
          {/* Title */}
          <div className="flex flex-col items-center">
            <span className="text-black text-4xl font-semibold">
              Leatest Blog
            </span>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all flex flex-col items-center"
            >
              {/* Product Image */}
              <div className="relative">
                <Image
                  src={product.img}
                  alt={`Blog Image ${index + 1}`}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
