import React from 'react'
import { Phone, Heart, Search, ShoppingCart } from "lucide-react";
import {ChevronDown} from "lucide-react"
import { MdMarkEmailRead } from "react-icons/md";
import { LuUserCog } from "react-icons/lu";

export default function About () {
  return (
    <header className="bg-black text-white">
    {/* Top Bar */}
    <div className="w-full hidden md:flex bg-purple-600 p-3 items-center justify-between">
    <div className="max-w-7xl container mx-auto flex items-center justify-center">
      <p className="flex items-center gap-2">
      <MdMarkEmailRead />  mhhassanul@gmail.com
      <Phone />  (12345)67890
      </p>
    </div>
    <div className="flex items-center gap-4 mr-4">
      <div className="flex items-center gap-2">
        English
        <ChevronDown />
       </div>
       <div className="flex items-center gap-2 mr-4">
        USD
        <ChevronDown />
        <div className="flex items-center gap-2 mr-4">
        Login 
        <LuUserCog />
       </div>
       <div className="flex items-center gap-2">
        Wishlist
        <Heart />
        <div className="flex items-center gap-2">
        <ShoppingCart />
       </div>
      </div>
     </div>
     </div>
  </div>

    {/* Navigation Bar */}
    <nav className="flex items-center justify-between px-4 py-4 bg-white text-black border-b">
      {/* Logo */}
      <div className="text-2xl font-bold">Hekto</div>

      {/* Navigation Links */}
      <ul className="hidden md:flex space-x-6">
        <li>
          <a href="#" className="flex items-center text-red-500 gap-1 hover:underline">
            Home <ChevronDown />
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline">Page</a>
        </li>
        <li>
          <a href="#" className="hover:underline">Products</a>
        </li>
        <li>
          <a href="#" className="hover:underline">Blog</a>
        </li>
        <li>
          <a href="#" className="hover:underline">Shop</a>
        </li>
        <li>
          <a href="#" className="hover:underline">Contact</a>
        </li>
      </ul>

      {/* Search and Icons */}
      <div className="flex items-center space-x-4">
        {/* Search Input */}
        <div className="hidden md:flex items-center border rounded-md px-3 py-2 w-64">
          <input
            type="text"
            placeholder=""
            className="w-full outline-none"
          />
          <Search className="mr-2 text-gray-500" />
        </div>
      </div>
    </nav>
  </header>
    
  )
}

