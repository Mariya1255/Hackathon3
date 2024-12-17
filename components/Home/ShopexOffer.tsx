import React from 'react'
import Image from 'next/image';

export default function ShopexOffer() {

    const products = [
        { img: "/images/Shopexlogo.png"},
        { img: "/images/Shopex1.png" },
        { img: "/images/Shopex2.png" },
        { img: "/images/Shopex3.png" },
      ];
    
      return (
        <div className="max-w-7xl mx-auto px-6 mt-8">
          {/* Full Border Section */}
          <div className="border border-gray-300 rounded-lg p-4">
            {/* Flash Sales Header */}
            <div className="relative border-b-2 border-gray-200 pb-4 mb-6">
              {/* Title */}
              <div className="flex flex-col items-center">
                <span className="text-black text-4xl font-semibold">What Shopex Offer</span>
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
                      alt={product.img}
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
    



