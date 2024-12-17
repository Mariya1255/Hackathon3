import React from 'react'
import {Menu,  } from "lucide-react"
import {ChevronDown} from "lucide-react"

export default function EcommerceB() {
  return (
    <div>
      {/* Navigation Bar */}
      <nav className="flex items-center justify-between px-4 py-4 bg-white text-black border-b">
        {/* Logo */}
        <div className="text-2xl font-bold">
            Ecommerce Acceories & Fashion items
            About 9.620 results (0.62 seconds)
        </div>

        {/* Search and Icons */}
        <div className="flex items-center space-x-4">
            Per Page :
          <div className="hidden md:flex items-center border rounded-md px-3 py-4 w-20">
            <input
              type="text"
              placeholder=""
              className="w-full outline-none"
            />
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
            Sort By : Best Match <ChevronDown />
          <div className="hidden md:flex items-center border rounded-md px-3 py-4 w-25">
            <input
              type="text"
              placeholder=""
              className="w-full outline-none"
            />
          </div>
        </div>

        <div className="flex items-center space-x-4">
            View: <Menu />
          <div className="hidden md:flex items-center border rounded-md px-3 py-4 w-64">
            <input
              type="text"
              placeholder=""
              className="w-full outline-none"
            />
          </div>
        </div>
      </nav>
    </div>
  )
}

 
