import React from "react";
import BlogCard from "./BlogCard";
import Sidebar from "./Sidebar";
import Image from "next/image";
export default function BlogPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto p-6 flex flex-col md:flex-row gap-6">
        {/* Main Blog Section */}
        <div className="w-full md:w-3/4 space-y-6">
          <BlogCard
             imageSrc="/images/Page1.PNG"
            title="Mauris at orci non vulputate diam tincidunt nec."
            date="28 Sept 2023"
            category="Art Fashion"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit officiis modi, amet reprehenderit in enim dolorum nisi facilis."
          />
          <BlogCard
            imageSrc="/images/Page2.PNG"
            title="Aenean vitae in aliquam ultrices lectus. Etiam."
            date="29 Sept 2023"
            category="Soft Furniture"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit officiis modi, amet reprehenderit in enim dolorum nisi facilis."
          />
          <BlogCard
            imageSrc="/images/Page3.PNG"
            title="Sit non congue feugiat nisl, mauris amet nisi."
            date="30 Sept 2023"
            category="Art Fashion"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit officiis modi, amet reprehenderit in enim dolorum nisi facilis."
          />
        </div>

        {/* Sidebar Section */}
        <div className="w-full md:w-1/4">
          <Sidebar />
        </div>
      </div>
    </div>
  );
}
