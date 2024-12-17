import React from "react";

export default function FaqSection() {
  return (
    <div className="flex flex-col md:flex-row bg-gray-50 px-8 py-12">
      {/* Left Section - General Information */}
      <div className="w-full md:w-1/2 pr-8 mb-8 md:mb-0">
        <h2 className="text-3xl font-bold text-blue-900 mb-6">Generel Information</h2>

        {/* Information Blocks */}
        <div className="space-y-6 text-gray-600">
          <div>
            <h3 className="font-semibold text-blue-900 mb-2">
              Eu dictumst cum at sed euismod condimentum?
            </h3>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Trincidunt sed tristique
              mollis vitae, consequat gravida sagittis.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-blue-900 mb-2">
              Magna bibendum est fermentum eros.
            </h3>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Trincidunt sed tristique
              mollis vitae, consequat gravida sagittis.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-blue-900 mb-2">
              Odio muskana hak eris conseekin sceloen?
            </h3>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Trincidunt sed tristique
              mollis vitae, consequat gravida sagittis.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-blue-900 mb-2">
              Elit id blandit sabora bol velit qua mara?
            </h3>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Trincidunt sed tristique
              mollis vitae, consequat gravida sagittis.
            </p>
          </div>
        </div>
      </div>

      {/* Right Section - Ask a Question */}
      <div className="w-full md:w-1/2 bg-white p-8 shadow-md rounded-lg">
        <h2 className="text-2xl font-bold text-blue-900 mb-6">Ask a Question</h2>

        {/* Contact Form */}
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name*"
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Subject*"
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            placeholder="Type Your Message*"
            rows={5}
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500"
          ></textarea>
          <button
            type="submit"
            className="bg-pink-500 text-white font-medium py-2 px-6 rounded-lg shadow hover:bg-pink-600"
          >
            Send Mail
          </button>
        </form>
      </div>
    </div>
  );
}
