import React from "react";
import Image from "next/image";

interface SBlogProps {
  imageSrc: string;
  title: string;
  category: string;
  date: string;
  description: string;
}

export default function BlogCard({
  imageSrc,
  title,
  category,
  date,
  description,
}: SBlogProps) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      {/* Image */}
      <div className="relative h-64">
        <Image
          src={imageSrc}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="w-full"
        />
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="text-xs text-gray-500 mb-2">
          <span className="mr-4">🌠 {category}</span>
          <span>📆 {date}</span>
        </div>
        <h2 className="text-lg font-bold mb-2 text-blue-700">{title}</h2>
        
      </div>
    </div>
  );
}
