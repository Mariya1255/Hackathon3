import React from 'react';
import Image from 'next/image';

export default function TrendingProducts() {
  const products = [
    { name: "Cantilever chair", Price: "$26.00", OldPrice: "$42.00", img: "/images/Trendinglogo.png" },
    { name: "Cantilever chair", Price: "$26.00", OldPrice: "$42.00", img: "/images/Trending1.png" },
    { name: "Cantilever chair", Price: "$26.00", OldPrice: "$42.00", img: "/images/Trending2.png" },
    { name: "Cantilever chair", Price: "$26.00", OldPrice: "$42.00", img: "/images/Trending3.png" },
    { img: "/images/Trending4.png" },
    { img: "/images/Trending5.png" },
    { name: "Executive Seat chair", Price: "$32.00", img: "/images/Trending6.png" },
    { name: "Executive Seat chair", Price: "$32.00", img: "/images/Trending7.png" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 mt-8">
      {/* Full Border Section */}
      <div className="border border-gray-300 rounded-lg p-6">
        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-black text-4xl font-semibold">Trending Products</h2>
        </div>

        {/* Products Layout */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <div
                key={index}
                className="border rounded-lg shadow-md hover:shadow-lg transition-all flex flex-col items-center text-center"
              >
                {/* Product Image */}
                <div className="relative w-full flex justify-center items-center">
                  <Image
                    src={product.img}
                    alt={product.name || "Product Image"}
                    width={200} // Adjusted size for better centering
                    height={150}
                    className="object-contain"
                  />
                </div>

                {/* Product Details */}
                <div className="p-4">
                  <h3 className="text-sm font-medium text-gray-700">{product.name}</h3>
                  <p className="text-blue-500 font-bold">{product.Price}</p>
                  {product.OldPrice && (
                    <p className="text-gray-500 mt-2 line-through">{product.OldPrice}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
