import React from 'react'
import Image from 'next/image';

export default function TopCategories() {
  const products = [
    { img: "/images/Toplogo.png" },
    { img: "/images/Top1.png" },
    { img: "/images/Top2.png" },
    { img: "/images/Top3.png" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 mt-6">
      {/* Full Border Section */}
      <div className="border border-gray-300 rounded-lg p-4">
        {/* Flash Sales Header */}
        <div className="relative border-b-6 border-gray-200 pb-4 mb-8">
          {/* Title */}
          <div className="flex flex-col items-center">
            <span className="text-black text-4xl font-semibold">
              Top Categories
            </span>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all relative flex flex-col items-center text-center"
            >
              {/* Product Image */}
              <div className="relative">
                <Image
                  src={product.img}
                  alt={`Top Category ${index + 1}`}
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
