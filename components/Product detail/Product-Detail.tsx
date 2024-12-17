import React from 'react'
import Image from 'next/image';
import { AiFillStar, AiOutlineHeart } from "react-icons/ai";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export default function ProductDetail () {
  return (
    <div className="max-w-5xl mx-auto p-4 bg-white rounded-lg shadow-md flex flex-col md:flex-row gap-6">
    {/* Left Section: Product Images */}
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <Image
          src="/images/Detail-banner.PNG"
          alt="Main Product"
          className="w-full h-64 object-cover rounded-md"
        />
      </div>
      <div className="flex flex-row gap-2">
        <Image
          src="/images/Detail2.png"
          alt="Thumbnail 2"
          className="w-16 h-16 object-cover rounded-md cursor-pointer"
        />
        <Image
          src="/images/Detail3.PNG"
          alt="Thumbnail 3"
          className="w-16 h-16 object-cover rounded-md cursor-pointer"
        />
        <Image
          src="/images/Detail4.PNG"
          alt="Thumbnail 4"
          className="w-16 h-16 object-cover rounded-md cursor-pointer"
        />
      </div>
    </div>

    {/* Right Section: Product Details */}
    <div className="flex-1">
      <h2 className="text-2xl font-semibold">Playwood Arm Chair</h2>

      {/* Rating */}
      <div className="flex items-center mt-2">
        {[...Array(5)].map((_, index) => (
          <AiFillStar key={index} className="text-yellow-500" />
        ))}
        <span className="text-gray-500 ml-2">(22)</span>
      </div>

      {/* Price */}
      <div className="flex items-center mt-4">
        <span className="text-xl font-bold text-gray-800">$32.00</span>
        <span className="text-lg text-red-500 line-through ml-4">$42.00</span>
      </div>

      {/* Color Options */}
      <div className="mt-4">
        <h3 className="text-gray-600 font-medium">Color</h3>
        <p className="text-gray-600 mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
          tellus porttitor purus, et volutpat sit.
        </p>
      </div>

      {/* Add to Cart */}
      <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 flex items-center">
        Add To Cart
        <AiOutlineHeart className="ml-2 text-lg" />
      </button>

      {/* Categories */}
      <div className="mt-6">
        <h3 className="font-medium text-gray-600">Categories:</h3>
      </div>

      {/* Tags */}
      <div className="mt-4">
        <h3 className="font-medium text-gray-600">Tags:</h3>
      </div>

      {/* Share */}
      <div className="mt-6">
        <h3 className="font-medium text-gray-600">Share:</h3>
        <div className="flex items-center gap-4 mt-2">
          <FaFacebook className="text-blue-600 text-xl cursor-pointer" />
          <FaTwitter className="text-blue-400 text-xl cursor-pointer" />
          <FaInstagram className="text-pink-500 text-xl cursor-pointer" />
        </div>
      </div>
    </div>
  </div>
  );
}


