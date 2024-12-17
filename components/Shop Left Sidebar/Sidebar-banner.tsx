import React from "react";
import Image from "next/image";

export default function SidebarBanner() {
  const banners = [
    { src: "/images/Sidebar-banner.PNG", alt: "Sidebar Banner" },
    { src: "/images/Side2.PNG", alt: "Sidebar 2" },
    { src: "/images/Side3.PNG", alt: "Sidebar 3" },
    { src: "/images/Side4.PNG", alt: "Sidebar 4" },
    { src: "/images/Side5.PNG", alt: "Sidebar 5" },
    { src: "/images/Side6.PNG", alt: "Sidebar 6" },
    { src: "/images/Side7.PNG", alt: "Sidebar 7" },
  ];

  return (
    <div className="space-y-6 bg-gray-100 p-4 rounded-lg">
      {banners.map((banner, index) => (
        <div
          key={index}
          className="relative rounded-lg overflow-hidden shadow-md"
        >
          <Image
            src={banner.src}
            alt={banner.alt}
            width={200}
            height={200}
            className="w-full object-cover"
          />
        </div>
      ))}
    </div>
  );
}
