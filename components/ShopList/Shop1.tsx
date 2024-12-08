import React from 'react';
import Image from 'next/image';

export default function Shop1() {
  const products = [
    { img: "/images/Shoplogo.png" },
    { img: "/images/Shop1.png" },
    { img: "/images/Shop2.png" },
    { img: "/images/Shop3.png" },
    { img: "/images/Shop4.png" },
    { img: "/images/Shop5.png" },
    { img: "/images/Shop6.png" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 mt-6">
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
  );
}
