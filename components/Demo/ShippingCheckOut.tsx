import React from "react";
import Image from "next/image";

export default function ShippingCheckout() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start bg-gray-50 px-6 py-8">
      {/* Left Section: Form */}
      <div className="w-full md:w-2/3 bg-white rounded-lg shadow-md p-6">
        {/* Title */}
        <h1 className="text-2xl font-bold text-blue-900 mb-4">Hekto Demo</h1>
        <p className="text-sm text-gray-500 mb-6">Cart Information / Shipping / Payment</p>

        {/* Contact Information */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-semibold text-blue-900">Contact Information</h2>
            <a href="#" className="text-sm text-blue-500">Already have an account? Log in</a>
          </div>
          <input
            type="email"
            placeholder="Email or mobile phone number"
            className="w-full border border-gray-300 rounded-lg p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <label className="flex items-center text-sm text-gray-600">
            <input type="checkbox" className="mr-2" /> Keep me up to date on news and exclusive offers
          </label>
        </div>

        {/* Shipping Address */}
        <div>
          <h2 className="text-lg font-semibold text-blue-900 mb-4">Shipping address</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              placeholder="First name (optional)"
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Last name"
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <input
            type="text"
            placeholder="Address"
            className="w-full border border-gray-300 rounded-lg p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Apartment, suite, etc (optional)"
            className="w-full border border-gray-300 rounded-lg p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <input
              type="text"
              placeholder="City"
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Bangladesh"
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Postal Code"
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button className="bg-pink-500 text-white font-medium py-2 px-6 rounded-lg shadow hover:bg-pink-600">
            Continue Shipping
          </button>
        </div>
      </div>

      {/* Right Section: Summary */}
      <div className="w-full md:w-1/3 bg-white rounded-lg shadow-md p-6 mt-6 md:mt-0 md:ml-6">
        <h2 className="text-lg font-semibold text-blue-900 mb-4">Your Items</h2>
        <div className="divide-y divide-gray-300">
          {[1, 2, 3, 4, 5].map((item, index) => (
            <div key={index} className="flex items-center justify-between py-4">
              <div className="flex items-center">
                <div className="w-16 h-16 bg-gray-200 rounded-lg mr-4"></div>
                <div>
                  <p className="text-sm font-medium text-gray-700">UI dom consequat</p>
                  <p className="text-xs text-gray-500">Color: Brown / Size: XL</p>
                </div>
              </div>
              <p className="text-sm font-medium text-gray-700">$32.00</p>
            </div>
          ))}
        </div>
        <div className="border-t border-gray-300 mt-4 pt-4">
          <div className="flex justify-between text-sm mb-2">
            <span className="text-gray-600">Subtotal:</span>
            <span className="text-gray-700">$219.00</span>
          </div>
          <div className="flex justify-between text-sm mb-4">
            <span className="text-gray-600">Total:</span>
            <span className="text-gray-700">$325.00</span>
          </div>
          <p className="text-xs text-gray-500 mb-4">Shipping & taxes calculated at checkout</p>
          <button className="bg-green-500 text-white font-medium py-2 px-6 w-full rounded-lg shadow hover:bg-green-600">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
