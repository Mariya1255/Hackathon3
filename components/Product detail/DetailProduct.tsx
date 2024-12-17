import React from "react";
import Image from "next/image";
import { AiFillStar } from "react-icons/ai"; // Importing star icon

export default function DetailProducts() {
  const products = [
    { name: "Mens Fashion Wear", stars: 5, price: "$43.00", img: "/images/Detaillogo.PNG" },
    { name: "Women's Fashion", stars: 5, price: "$67.00", img: "/images/Detail6.PNG" },
    { name: "Wolx Dummy Fashion", stars: 5, price: "$67.00", img: "/images/Detail7.PNG" },
    { name: "Top Wall Digital Clock", stars: 5, price: "$51.00", img: "/images/Detail8.PNG" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 mt-8">
      {/* Full Border Section */}
      <div className="border border-gray-300 rounded-lg p-4">
        {/* Flash Sales Header */}
        <div className="relative border-b-2 border-gray-200 pb-4 mb-6">
          {/* Title */}
          <div className="flex flex-col items-center">
            <span className="text-black text-4xl font-semibold">Related Products</span>
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

                {/* Product Stars */}
                <div className="flex justify-center mt-2">
                  {[...Array(product.stars)].map((_, i) => (
                    <AiFillStar key={i} className="text-yellow-500 text-lg" />
                  ))}
                </div>

                {/* Product Price */}
                <p className="text-black font-bold mt-2">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
