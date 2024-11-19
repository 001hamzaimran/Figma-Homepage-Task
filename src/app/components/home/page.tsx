"use client";

import React from 'react';
import { FaUser } from 'react-icons/fa';

export const CategorySection = () => {
  const items = ["Automobile", "Clothes & Wear", "Home Interiors", "Computer & Tech", "Tools & Equipment", "Sports & Outdoor", "Animals & Pets", "Machinery & Tools"];
  return (
    <section className="py-8 text-black bg-gray-100">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Left Column: Categories */}
          <div className="col-span-1 md:col-span-3 lg:col-span-2 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">More Categories</h2>
            <ul>
              {items.map((item, index) => (
                <li key={index} className="py-2 hover:bg-blue-100 cursor-pointer">{item}</li>
              ))}
            </ul>
          </div>

          {/* Middle Column: Background Image with Dark Overlay */}
          <div className="col-span-1 md:col-span-6 lg:col-span-8 relative bg-cover bg-center h-64 sm:h-80 lg:h-full flex flex-col justify-start items-start text-black p-6 sm:p-8" style={{ backgroundImage: 'url(/banner.png)' }}>
            <div className="absolute inset-0 bg-white bg-opacity-5 z-0"></div> {/* Dark overlay */}
            <div className="relative z-10"> {/* Text content with higher z-index */}
              <h2 className="text-xl sm:text-2xl lg:text-3xl text-black font-semibold mt-5 mb-4">
                Latest Trending <br />
                <strong className='text-xl sm:text-2xl lg:text-3xl'>Electronic Items</strong>
              </h2>
              <button className="bg-blue-500 text-white py-1 px-4 rounded-lg hover:bg-blue-600">Learn More</button>
            </div>
          </div>

          {/* Right Column: Blocks */}
          <div className="col-span-1 md:col-span-3 lg:col-span-2 space-y-6">
            {/* Block 1: User Greeting */}
            <div className="bg-blue-200 p-4 rounded-lg text-black">
              {/* Icon and Text: Horizontally Aligned */}
              <div className="flex items-center mb-4">
                <FaUser className="text-gray-500 text-5xl mx-2" />
                <p className="text-sm sm:text-md">Hi, User! Let's get started.</p>
              </div>
              {/* Full-width Buttons */}
              <div className="space-y-2">
                <button className="bg-blue-400 text-white py-2 w-full text-sm rounded-md border border-blue-400 hover:bg-blue-500 hover:text-white">
                  Join Now
                </button>
                <button className="bg-white text-blue-500 py-2 w-full text-sm rounded-md border border-blue-500 hover:bg-green-300 hover:text-black">
                  Login
                </button>
              </div>
            </div>

            {/* Block 2: Offer */}
            <div className="bg-orange-500 p-6 text-start rounded-lg text-white">
              <p className="text-lg">Get US $10 off with a new supplier</p>
            </div>

            {/* Block 3: Supplier Preference */}
            <div className="bg-blue-600 p-6 rounded-lg text-start text-white">
              <p className="text-lg">Send quotes with supplier preferences</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
