import React from 'react'
import Image from 'next/image';

export default function AboutSection () {
  return (
    <div className="container mx-auto px-6 py-12 flex flex-col lg:flex-row items-center gap-8">
    {/* Image Section */}
    <div className="w-full lg:w-1/2">
      <Image
        src="/images/About1.PNG"
        alt="About 1"
        width={100}
        height={50}
        className="rounded-lg shadow-md w-full"
      />
    </div>

    {/* Text Content */}
    <div className="w-full lg:w-1/2">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">
        Know About Our Ecommerce <br /> Business, History
      </h2>
      <p className="text-gray-600 leading-relaxed mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque
        ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique
        amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis
        quis bibendum quam.
      </p>
      <button className="bg-pink-500 text-white px-6 py-2 rounded-lg hover:bg-pink-600">
        Contact us
      </button>
    </div>
  </div>
);
}

