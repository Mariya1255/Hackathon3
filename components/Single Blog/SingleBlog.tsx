import React from "react";
import SBlog from "./SBlog";
import SingleB from "./SingleB";
import Image from "next/image";
import {Facebook, Twitter, Instagram} from "lucide-react";

export default function SingleBlog() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Main Layout */}
      <div className="container mx-auto p-6 flex flex-col md:flex-row gap-6">
        {/* Blog Section */}
        <div className="w-full md:w-3/4 space-y-6">
          {/* First Blog Post */}
          <SBlog
            imageSrc="/images/Page1.PNG"
            title="Mauris at orci non vulputate diam tincidunt nec."
            category="Surf Auxion"
            date="09 Aug 2020"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit officiis modi, amet reprehenderit in enim dolorum nisi facilis."
          />
          {/* Text Section */}
          <div className="text-gray-700 leading-relaxed">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget
              justo eget sapien posuere ullamcorper. Sed feugiat egestas purus.
            </p>
            <p>
              Adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi
              etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Velit dapibus est, nunc.
            </p>
            <p>
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo dictum sapien, amet, consequat.

              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo dictum sapien, amet, consequat

              toamk risusu”
            </p>
          </div>
          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-4 my-6">
            <Image
              src="/images/Single1.PNG"
              alt="Single Image 1"
              className="w-full rounded-lg"
            />
            <Image
              src="/images/Single2.PNG"
              alt="Single Image 2"
              className="w-full rounded-lg"
            />
          </div>
          <div className="text-gray-700 leading-relaxed">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc,
              montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in
              arcu platea donec vitae ante posuere malesuada. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi 
              etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Velit dapibus est, nunc.
            </p>
          </div>
          {/* Product Section */}
          <div className="grid grid-cols-4 gap-4 mt-6">
            <div className="text-center">
              <Image
                src="/images/Single3.PNG"
                alt="Single 3"
                className="w-full h-30 rounded-lg object-cover"
              />
              <p className="mt-2 text-sm font-medium">Quam sed</p>
              <p className="text-sm text-pink-500">$32.00 $56.00</p>
            </div>
            <div className="text-center">
              <Image
                src="/images/Single4.PNG"
                alt="Single 4"
                className="w-full h-30 rounded-lg object-cover"
              />
              <p className="mt-2 text-sm font-medium">Tristique sed</p>
              <p className="text-sm text-pink-500">$32.00 $56.00</p>
            </div>
            <div className="text-center">
              <Image
                src="/images/Single5.PNG"
                alt="Single 5"
                className="w-full h-30 rounded-lg object-cover"
              />
              <p className="mt-2 text-sm font-medium">A etiam</p>
              <p className="text-sm text-pink-500">$32.00 $56.00</p>
            </div>
            <div className="text-center">
              <Image
                src="/images/Single6.PNG"
                alt="Single 6"
                className="w-full h-30 rounded-lg object-cover"
              />
              <p className="mt-2 text-sm font-medium">Mi nisi</p>
              <p className="text-sm text-pink-500">$32.00 $56.00</p>
            </div>
          </div>

          <div className="text-gray-700 leading-relaxed">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc,
              montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu
              platea donec vitae ante posuere malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam 
              rhoncus. Velit in arcu platea donec vitae ante posuere malesuada. Lorem ipsum dolor sit amet, 
              consectetur adipiscing elit. Velit dapibus est, nunc.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes,
              lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec 
              vitae ante posuere malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
              dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. 
              Velit in arcu platea donec vitae ante posuere malesuada. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Velit dapibus est, nunc.
            </p>
          </div>
          {/* Follow */}
          <div>
            <h3 className="font-bold text-lg mb-2">Follow</h3>
            <div className="flex space-x-3">
              <a href="#" className="text-blue-600 hover:underline">
               <Facebook />
              </a>
              <a href="#" className="text-blue-400 hover:underline">
                <Twitter />
              </a>
              <a href="#" className="text-pink-500 hover:underline">
                <Instagram />
              </a>
            </div>
          </div>

          {/* Comments Section */}
          <div className="bg-white rounded-lg p-4 mt-6 shadow ">
            <h3 className="text-lg font-semibold mb-4">
              Previous Post </h3>
              <h3 className="text-lg font-semibold flex border-left mb-4">
               Next Post </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <Image
                  src="/images/Single7.PNG"
                  alt="Single 7"
                  className="w-20 h-30 rounded-lg"
                />
                <div>
                  <p className="font-medium">Sapien ac</p>
                  <p className="font-medium">Jan 09 2020</p>
                  <p className="text-sm text-gray-600">
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. At in vitae rutrum vulputate
                   consectetur.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Image
                  src="/images/Single8.PNG"
                  alt="Single 8"
                  className="w-20 h-30 rounded-lg"
                />
                <div>
                  <p className="font-medium">Augue conva</p>
                  <p className="font-medium">Aug 18 2020</p>
                  <p className="text-sm text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. At in vitae rutrum vulputate
                  consectetur.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Comment Form */}
          <div className="bg-white p-4 rounded-lg mt-6 shadow">
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-2 border rounded"
              />
              <input
                type="email"
                placeholder="Write Your Email"
                className="w-full p-2 border rounded"
              />
              <textarea
                placeholder="Write Your Comment"
                rows={4}
                className="w-full p-2 border rounded"
              ></textarea>
              <button className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600">
                Continue Shipping
              </button>
            </form>
          </div>
        </div>

        {/* Sidebar */}
        <div className="w-full md:w-1/4">
          <SingleB />
        </div>
      </div>
    </div>
  );
}
