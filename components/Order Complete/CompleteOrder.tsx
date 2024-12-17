import React from 'react'
import Image from "next/image";
import { AiOutlineCheckCircle } from "react-icons/ai"; // Check icon
import { AiOutlineClockCircle } from "react-icons/ai"; // Clock icon
import { MdOutlineChecklist } from "react-icons/md"; // Checklist icon
    
export default function OrderCompleted() {
  return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-50 px-4">
        <div className="max-w-3xl bg-white rounded-lg shadow-md p-8 text-center relative">
          {/* Clock Icon on the Left */}
           <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4">
              <AiOutlineClockCircle className="text-blue-500 text-6xl" />
            </div>
    
            {/* Checklist Icon on the Right */}
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4">
              <MdOutlineChecklist className="text-pink-500 text-6xl" />
            </div>
    
            {/* Check Icon in the Center */}
            <div className="flex justify-center mb-4">
              <AiOutlineCheckCircle className="text-pink-500 text-6xl" />
            </div>
    
            {/* Heading */}
            <h1 className="text-3xl font-semibold text-blue-900 mb-4">Your Order Is Completed!</h1>
    
            {/* Description */}
            <p className="text-gray-600 mb-6">
              Thank you for your order! Your order is being processed and will be
              completed within 3-6 hours. You will receive an email confirmation
              when your order is completed.
            </p>
    
            {/* Button */}
            <button className="bg-pink-500 text-white font-medium py-2 px-6 rounded-lg shadow hover:bg-pink-600">
              Continue Shopping
            </button>
          </div>
        </div>
      );
    }

