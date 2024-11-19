"use client";

import React, { useState } from "react";
import { FaShoppingCart, FaHeart, FaEnvelope, FaUser } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white mx-auto max-w-7xl px-10 text-black">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">LOGO</div>

        {/* Desktop Searchbar */}
        <div className="hidden md:flex items-center gap-4">
          <select
            className="bg-gray-100 p-2 rounded text-sm border border-gray-300"
            name="categories"
            id="categories"
          >
            <option value="all">All Categories</option>
            <option value="electronics">Electronics</option>
            <option value="fashion">Fashion</option>
            <option value="home">Home</option>
          </select>
          <input
            type="text"
            placeholder="Search products..."
            className="p-2 w-96 rounded border border-gray-300 focus:outline-blue-500 text-sm"
          />
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
            Search
          </button>
        </div>

        {/* Icons */}
        <div className="hidden md:flex items-center gap-6 text-gray-400">
          <div className="flex flex-col items-center cursor-pointer hover:text-blue-600">
            <FaShoppingCart size={20} />
            <span className="text-sm">Cart</span>
          </div>
          <div className="flex flex-col items-center cursor-pointer hover:text-blue-600">
            <FaHeart size={20} />
            <span className="text-sm">Favourite</span>
          </div>
          <div className="flex flex-col items-center cursor-pointer hover:text-blue-600">
            <FaEnvelope size={20} />
            <span className="text-sm">Message</span>
          </div>
          <div className="flex flex-col items-center cursor-pointer hover:text-blue-600">
            <FaUser size={20} />
            <span className="text-sm">Profile</span>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-2xl text-gray-400"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-50 p-4">
          {/* Searchbar */}
          <div className="flex items-center gap-2 mb-4">
            <select
              className="bg-gray-100 p-2 rounded text-sm border border-gray-300 w-full"
              name="categories"
              id="categories"
            >
              <option value="all">All Categories</option>
              <option value="electronics">Electronics</option>
              <option value="fashion">Fashion</option>
              <option value="home">Home</option>
            </select>
            <input
              type="text"
              placeholder="Search products..."
              className="p-2 rounded border border-gray-300 w-full focus:outline-blue-500 text-sm"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
              Search
            </button>
          </div>

          {/* Icons */}
          <div className="grid grid-cols-2 gap-4 text-gray-400">
            <div className="flex flex-col items-center cursor-pointer hover:text-blue-600">
              <FaShoppingCart size={20} />
              <span className="text-sm">Cart</span>
            </div>
            <div className="flex flex-col items-center cursor-pointer hover:text-blue-600">
              <FaHeart size={20} />
              <span className="text-sm">Favourite</span>
            </div>
            <div className="flex flex-col items-center cursor-pointer hover:text-blue-600">
              <FaEnvelope size={20} />
              <span className="text-sm">Message</span>
            </div>
            <div className="flex flex-col items-center cursor-pointer hover:text-blue-600">
              <FaUser size={20} />
              <span className="text-sm">Profile</span>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
