import React from "react";
import Image from "next/image";

export default function Sidebar() {
  const categories = ["Hobbies (14)", "Women (21)", "Women (21)", "Women (21)", "Women (21)", "Women (21)"];
  const recentPosts = [
    { title: "It is a long established fact", Date: "Aug 09 2020", image: "/images/Page4.PNG" },
    { title: "It is a long established fact", Date: "Aug 09 2020", image: "/images/Page5.PNG" },
    { title: "It is a long established fact", Date: "Aug 09 2020", image: "/images/Page6.PNG" },
    { title: "It is a long established fact", Date: "Aug 09 2020", image: "/images/Page7.PNG" },
  ];
  
  const SaleProduct = [
    { title: "Elit ornare in enim mouris", Date: "Aug 09 2020", image: "/images/Page8.PNG" },
    { title: "Viverra pulvinar et enim", Date: "Aug 09 2020", image: "/images/Page9.PNG" },
    { title: "Mattis varius donec fdsfd", Date: "Aug 09 2020", image: "/images/Page10.PNG" },
  ];

  const OfferProduct = [
    { title: "Duis lectus est.", Price: "$12.00-$15.00", image: "/images/Page11.PNG" },
    { title: "Set placerat.", Price: "$12.00-$15.00", image: "/images/Page12.PNG" },
    { title: "Netus proin.", Price: "$12.00-$15.00", image: "/images/Page13.PNG" },
    { title: "Platea in.", Price: "$12.00-$15.00", image: "/images/Page14.PNG" },
  ];

  const Tags = [
     "General",
     "Atsanil",
     "Insas.",
     "Bibsaas",
     "Nulla.",
 ];
  return (
    <aside className="space-y-6">
      {/* Search */}
      <div>
        <input
          type="text"
          placeholder="Search"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Categories */}
      <div>
        <h3 className="font-bold text-lg mb-2">Categories</h3>
        <ul className="space-y-2 text-sm text-gray-700">
          {categories.map((category, index) => (
            <li key={index} className="hover:text-pink-500 cursor-pointer">
             {category}
            </li>
          ))}
        </ul>
      </div>

      {/* Recent Posts */}
      <div>
        <h3 className="font-bold text-lg mb-2">Recent Posts</h3>
        {recentPosts.map((post, index) => (
          <div key={index} className="flex items-center gap-2 mb-2">
            <Image
              src={post.image}
              alt={post.title}
              width={40}
              height={40}
              className="rounded-md"
            />
            <p className="text-sm text-gray-700 hover:text-blue-500">
              {post.title}
            </p>
            <p className="text-sm text-gray-700 hover:text-blue-500">
              {post.Date}
            </p>
          </div>
        ))}
      </div>

      {/* Sale Product */}
      <div>
        <h3 className="font-bold text-lg mb-2">Sale Product</h3>
        {SaleProduct.map((post, index) => (
          <div key={index} className="flex items-center gap-2 mb-2">
            <Image
              src={post.image}
              alt={post.title}
              width={40}
              height={40}
              className="rounded-md"
            />
            <p className="text-sm text-gray-700 hover:text-blue-500">
              {post.title}
            </p>
            <p className="text-sm text-gray-700 hover:text-blue-500">
              {post.Date}
            </p>
          </div>
        ))}
      </div>

       {/* Offer product */}
       <div>
        <h3 className="font-bold text-lg mb-2">Offer product</h3>
        {OfferProduct.map((post, index) => (
          <div key={index} className="flex items-center gap-2 mb-2">
            <Image
              src={post.image}
              alt={post.title}
              width={40}
              height={40}
              className="rounded-md"
            />
            <p className="text-sm text-gray-700 hover:text-blue-500">
              {post.title}
            </p>
            <p className="text-sm text-gray-700 hover:text-blue-500">
              {post.Price}
            </p>
          </div>
        ))}
      </div>

      {/* Follow */}
      <div>
        <h3 className="font-bold text-lg mb-2">Follow</h3>
        <div className="flex space-x-3">
          <a href="#" className="text-blue-600 hover:underline">
            Facebook
          </a>
          <a href="#" className="text-blue-400 hover:underline">
            Twitter
          </a>
          <a href="#" className="text-pink-500 hover:underline">
            Instagram
          </a>
        </div>

        {/* Categories */}
      <div>
        <h3 className="font-bold text-lg mb-2">Tags</h3>
        <ul className="space-y-2 text-sm text-gray-700">
          {Tags.map((Tags, index) => (
            <li key={index} className="hover:text-pink-500 cursor-pointer">
             {Tags}
            </li>
          ))}
        </ul>
      </div>
      </div>
    </aside>
  );
}
