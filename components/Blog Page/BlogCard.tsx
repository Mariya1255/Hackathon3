import React from "react";
import Image from "next/image";

interface BlogCardProps {
  imageSrc: string;
  title: string;
  date: string;
  category: string;
  description: string;
}

export default function BlogCard({
  imageSrc,
  title,
  date,
  category,
  description,
}: BlogCardProps) {
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
          <span className="mr-4">📅 {date}</span>
          <span>📁 {category}</span>
        </div>
        <h2 className="text-lg font-bold mb-2 text-blue-700">{title}</h2>
        <p className="text-sm text-gray-600 mb-4">{description}</p>
        <a
          href="#"
          className="text-pink-500 text-sm font-semibold hover:underline"
        >
          Read More →
        </a>
      </div>
    </div>
  );
}
