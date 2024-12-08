import React from 'react'

export default function Sidebar() {
    const categories = [
      "Women's Fashion",
       "Men's Fashion",
       "Electronics",
       "Home & Lifestyle",
       "Medicine",
       "Sports & Outdoor",
       "Baby's & Toys",
       "Health & Beauty",
    ];

  return (
    <aside className='w-64 p-4 bg-gray-100'>
        <ul>
            {categories.map((category, index) => (
                <li key={index} className='py-2 hover:bg-gray-200 cursor-pointer'>
                    {category}
                </li>
             ))}
        </ul>  
    </aside>
  );
}


