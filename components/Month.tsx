import React from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Month() {
  const products = [
    { name: "The north coat", price: "$260", oldPrice: "$360", img: "/images/Cartlogo.PNG",  star: 5, number: 65},
    { name: "Guccci duffle bag", price: "$960", oldPrice: "$1160", img: "/images/Cart1.PNG", star: 5, number: 65 },
    { name: "RGB liquid CPU Cooler", price: "$160", oldPrice: "$170", img: "/images/Cart2.PNG",  star: 5, number: 65 },
    { name: "Small BookSelf", price: "$360", img: "/images/Cart3.PNG",  star: 5, number: 65 },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 mt-8">
      {/* Full Border Section */}
      <div className="border border-gray-300 rounded-lg p-4">
        {/* Flash Sales Header */}
        <div className="relative border-b-2 border-gray-200 pb-4 mb-4">
          {/* Red Border */}
          <div className="absolute font-bold left-0 w-6 h-1 bg-red-500"></div>
          {/* Title */}
          <div className="flex flex-col items-start mt-4">
            <h2 className="text-1xl font-bold text-red-500">This Month</h2>
            <span className="text-black text-2xl font-semibold">Best Selling Products</span>
          </div>
          {/* Navigation Buttons */}
          <div className="mt-8 text-right">
          <button className="bg-red-600 text-white font-bold py-2 px-4 rounded hover:bg-red-600 transition-all">
            View All
          </button>
        </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {products.map((product, index) => (
            <div
              key={index}
              className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all relative"
            >
              <div className="relative">
                <Image
                  src={product.img}
                  alt={product.name}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-sm font-medium text-gray-700">{product.name}</h3>
                <div className="flex items-center justify-between mt-2">
                  <div className="text-red-500 font-bold">{product.price}</div>
                  <div className="line-through text-gray-400">{product.oldPrice}</div>
                </div>
                {/* Star below Price */}
                <div className="flex items-center space-x-1 mt-1">
                  {[...Array(product.star)].map((_, i) => (
                    <span key={i} className="text-yellow-500">★</span>
                  ))}
                </div>
                {/* Number in Parentheses after Stars */}
                (65)
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
