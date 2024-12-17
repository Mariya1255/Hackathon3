import React from "react";
import Image from "next/image";

export default function ContactSection() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start px-8 py-12 bg-gray-50">
      {/* Left Section */}
      <div className="w-full md:w-1/2">
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Information About us</h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis
            aliquam, malesuada diam est.
          </p>
          <div className="flex space-x-3 mt-4">
            <div className="w-4 h-4 rounded-full bg-blue-700"></div>
            <div className="w-4 h-4 rounded-full bg-pink-600"></div>
            <div className="w-4 h-4 rounded-full bg-blue-400"></div>
          </div>
        </div>

        {/* Contact Way */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Contact Way</h2>
          <div className="space-y-3 text-gray-600">
            <p>
              <span className="text-blue-500">● </span>Tel: 877-67-88-99<br />
              E-Mail: shop@store.com
            </p>
            <p>
              <span className="text-orange-400">● </span>20 Margaret St, London<br />
              Great Britain, 3NM98-LK
            </p>
            <p>
              <span className="text-pink-500">● </span>Support Forum<br />
              For over 24hr
            </p>
            <p>
              <span className="text-green-500">● </span>Free standard shipping<br />
              On all orders
            </p>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Get In Touch</h2>
          <form className="space-y-4">
            <div className="flex space-x-4">
              <input
                type="text"
                placeholder="Your Name*"
                className="w-1/2 border border-gray-300 rounded-lg p-2"
              />
              <input
                type="email"
                placeholder="Your E-mail*"
                className="w-1/2 border border-gray-300 rounded-lg p-2"
              />
            </div>
            <input
              type="text"
              placeholder="Subject*"
              className="w-full border border-gray-300 rounded-lg p-2"
            />
            <textarea
              placeholder="Type Your Message*"
              rows={5}
              className="w-full border border-gray-300 rounded-lg p-2"
            ></textarea>
            <button className="bg-pink-500 text-white font-medium py-2 px-6 rounded-lg hover:bg-pink-600">
              Send Mail
            </button>
          </form>
        </div>
      </div>

      {/* Image */}
      <div className="hidden md:block w-full md:w-auto justify-end mt-8">
        <Image
          src="/images/contact2.png" // Corrected path
          alt="Contact 2"
          width={400}
          height={400}
          priority={true}
        />
      </div>
    </div>
  );
}
