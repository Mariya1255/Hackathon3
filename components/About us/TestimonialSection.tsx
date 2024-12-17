import React from "react";

export default function TestimonialSection() {
  return (
    <div className="container mx-auto px-6 py-12 text-center">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Client Say!</h2>

      {/* Client Images */}
      <div className="flex justify-center items-center gap-4 mb-6">
        <img
          src="/images/client1.PNG"
          alt="Client 1"
          className="w-16 h-16 rounded-lg object-cover shadow-md"
        />
        <img
          src="/images/client2.PNG"
          alt="Client 2"
          className="w-16 h-16 rounded-lg object-cover shadow-md"
        />
        <img
          src="/images/client3.PNG"
          alt="Client 3"
          className="w-16 h-16 rounded-lg object-cover shadow-md"
        />
      </div>

      {/* Client Name and Designation */}
      <div className="mb-4">
        <h3 className="text-xl font-semibold text-gray-700">Selina Gomez</h3>
        <p className="text-sm text-gray-500">Ceo At Webcy Digital</p>
      </div>

      {/* Client Review */}
      <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis ultrices quam vel dui sollicitudin aliquet id arcu. Nam vitae a enim nunc, sed sapien egestas ac nam. Tristique ultrices dolor aliquam lacus volutpat praesent.
      </p>

      {/* Decorative Underline */}
      <div className="flex justify-center">
        <div className="w-10 h-1 bg-pink-500"></div>
        <div className="w-4 h-1 bg-pink-300 ml-1"></div>
      </div>
    </div>
  );
}
