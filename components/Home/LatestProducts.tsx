import React from 'react';
import Image from 'next/image';

export default function LatestProducts() {
  const products = [
    { name: "Comfort Handy Craft", price: "$42.00", OldPrice: "$65.00", img: "/images/Leatestlogo.png" },
    { name: "Comfort Handy Craft", price: "$42.00", OldPrice: "$65.00", img: "/images/Leatest1.png" },
    { name: "Comfort Handy Craft", price: "$42.00", OldPrice: "$65.00", img: "/images/Leatest2.png" },
    { name: "Comfort Handy Craft", price: "$42.00", OldPrice: "$65.00", img: "/images/Leatest3.png" },
    { name: "Comfort Handy Craft", price: "$42.00", OldPrice: "$65.00", img: "/images/Leatest4.png" },
    { name: "Comfort Handy Craft", price: "$42.00", OldPrice: "$65.00", img: "/images/Leatest5.png" },
  ];

  return (
    <div className="max-w-8xl mx-auto px-6 mt-6">
      {/* Full Border Section */}
      <div className="border border-gray-300 rounded-lg p-4">
        {/* Flash Sales Header */}
        <div className="relative border-b-6 border-gray-200 pb-4 mb-8">
          {/* Title */}
          <div className="flex flex-col items-center">
            <span className="text-black text-4xl font-semibold">Latest Products</span>

            {/* Navigation Links */}
            <ul className="hidden md:flex space-x-6 mt-4">
              <li>
                <a href="#" className="flex items-center gap-2 hover:underline">
                  New Arrival
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">Best Seller</a>
              </li>
              <li>
                <a href="#" className="hover:underline">Featured</a>
              </li>
              <li>
                <a href="#" className="hover:underline">Special Offer</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-3 gap-6">
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

              {/* Product Details */}
              <div className="p-4 w-full">
                {/* Product Name and Price */}
                <div className="flex justify-between items-center">
                  <h3 className="text-sm font-medium text-gray-700 text-left">{product.name}</h3>
                  <p className="text-red-500 font-bold text-right">{product.price}</p>
                </div>
                {/* Old Price */}
                <p className="text-gray-500 font-bold text-right line-through">{product.OldPrice}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
