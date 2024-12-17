
import React from "react";
import { AiFillStar } from "react-icons/ai"; // For stars
import { Search } from "lucide-react"; // For search icon

export default function Sidebar() {
  
  const productBrand = [
    "☑ Coaster Furniture",
    "☑ Fusion Dot High Fashion",
    "☑ Unique Furniture Restor",
    "☑ Dream Furniture Flipping",
    "☑ Young Repurposed",
    "☑ Green DIY furniture",
  ];

  const discountOffer = [
    "☑ 20% Cashback",
    "☑ 5% Cashback Offer",
    "☑ 25% Discount Offer",
  ];

  const ratingItems = [
    { stars: 5, label: "(2341)" },
    { stars: 4, label: "(1726)" },
    { stars: 3, label: "(258)" },
    { stars: 2, label: "(25)" },
  ];

  const categories = [
    "☑ Prestashop",
    "☑ Magento",
    "☑ Bigcommerce",
    "☑ osCommerce",
    "☑ 3dcart",
    "☑ Bags",
    "Accessories",
    "Jewellery",
    "☑ Watches",
  ];

  const priceFilter = [
    "$0.00 - $150.00",
    "$150.00 - $350.00",
    "$350.00 - $450.00",
    "$450.00+",
  ];

  const filterByColor = ["Blue", "Orange", "Brown", "Green", "Purple", "Sky"];

  return (
    <aside className="w-64 p-4 bg-gray-100">
      {/* Product Brand */}
      <div>
        <h3 className="font-semibold mb-4">Product Brand</h3>
        <ul>
          {productBrand.map((brand, index) => (
            <li
              key={index}
              className="py-1 text-sm hover:text-blue-600 cursor-pointer"
            >
              {brand}
            </li>
          ))}
        </ul>
      </div>

      {/* Discount Offer */}
      <div className="mt-4">
        <h3 className="font-semibold mb-2">Discount Offer</h3>
        <ul>
          {discountOffer.map((offer, index) => (
            <li
              key={index}
              className="py-1 text-sm hover:text-blue-600 cursor-pointer"
            >
              {offer}
            </li>
          ))}
        </ul>
      </div>

      {/* Rating Items */}
      <div className="mt-4">
        <h3 className="font-semibold mb-2">Rating Item</h3>
        <ul>
          {ratingItems.map((rating, index) => (
            <li key={index} className="flex items-center py-1 text-sm">
              {[...Array(rating.stars)].map((_, i) => (
                <AiFillStar key={i} className="text-yellow-500 mr-1" />
              ))}
              <span className="ml-2">{rating.label}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Categories */}
      <div className="mt-4">
        <h3 className="font-semibold mb-2">Categories</h3>
        <ul>
          {categories.map((category, index) => (
            <li
              key={index}
              className="py-1 text-sm hover:text-blue-600 cursor-pointer"
            >
              {category}
            </li>
          ))}
        </ul>
      </div>

      {/* Price Filter */}
      <div className="mt-4">
        <h3 className="font-semibold mb-2">Price Filter</h3>
        <ul>
          {priceFilter.map((price, index) => (
            <li
              key={index}
              className="py-1 text-sm hover:text-blue-600 cursor-pointer"
            >
              ☑ {price}
            </li>
          ))}
        </ul>
        {/* Search Box */}
        <div className="mt-2 flex items-center border rounded-lg p-2">
          <input
            type="text"
            placeholder="Enter price range"
            className="flex-grow outline-none text-sm"
          />
          <Search className="text-gray-500 w-5 h-5" />
        </div>
      </div>

      {/* Filter By Color */}
      <div className="mt-4">
        <h3 className="font-semibold mb-2">Filter By Color</h3>
        <ul className="flex space-x-2">
          {filterByColor.map((color, index) => (
            <li
              key={index}
              className="w-5 h-5 rounded-full border"
              style={{ backgroundColor: color }}
            ></li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
