import React from "react";
import Image from "next/image";

export default function FeaturedProducts() {
  const products = [
    { name: "Cantilever chair", code: "Y523201", price: "$42.00", img: "/images/Chairlogo.png" },
    { name: "Cantilever chair", code: "Y523201", price: "$42.00", img: "/images/Chair1.png" },
    { name: "Cantilever chair", code: "Y523201", price: "$42.00", img: "/images/Chair2.png" },
    { name: "Cantilever chair", code: "Y523201", price: "$42.00", img: "/images/Chair3.png" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 mt-8">
      {/* Full Border Section */}
      <div className="border border-gray-300 rounded-lg p-4">
        {/* Flash Sales Header */}
        <div className="relative border-b-2 border-gray-200 pb-4 mb-6">
          {/* Title */}
          <div className="flex flex-col items-center">
            <span className="text-black text-4xl font-semibold">Featured Products</span>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {products.map((product, index) => (
            <div
              key={index}
              className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all relative flex flex-col items-center text-center"
            >
              {/* Product Image */}
              <div className="relative">
                <Image
                  src={product.img}
                  alt={product.name}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover"
                />
              </div>

              {/* Product Name */}
              <div className="p-4">
                <h3 className="text-sm font-medium text-gray-700">{product.name}</h3>
                
                {/* Color Dots */}
                <div className="flex justify-center gap-2 mt-2">
                  <span className="w-4 h-4 bg-red-500 rounded-full"></span>
                  <span className="w-4 h-4 bg-blue-500 rounded-full"></span>
                  <span className="w-4 h-4 bg-green-500 rounded-full"></span>
                </div>
                
                {/* Product Code */}
                <p className="text-gray-500 mt-2">Code: {product.code}</p>
                
                {/* Product Price */}
                <p className="text-blue-500 font-bold">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
