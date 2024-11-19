"use client";
import React from "react";
import { FaSearch, FaBox, FaPaperPlane, FaShieldAlt } from "react-icons/fa";

export const Services = () => {
  return (
    <div className="mx-auto container px-10 mt-16">
      <h1 className="text-xl font-semibold mb-8">Our Extra Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* First Service Card */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col relative">
          <img
            src="/serviceOne.png"
            alt="Service 1"
            className="w-full h-40 object-cover"
          />
          <div className="flex-1 p-4">
            <div>
              <h2 className="font-semibold text-lg">Source from Industry Hubs</h2>
            </div>
          </div>
          {/* Icon on vertically center-right */}
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-blue-700 text-white p-2 rounded-full">
            <FaSearch className="text-xl" />
          </div>
        </div>

        {/* Second Service Card */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col relative">
          <img
            src="/serviceTwo.png"
            alt="Service 2"
            className="w-full h-40 object-cover"
          />
          <div className="flex-1 p-4">
            <div>
              <h2 className="font-semibold text-lg">Customize Your Products</h2>
            </div>
          </div>
          {/* Icon on vertically center-right */}
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-blue-700 text-white p-2 rounded-full">
            <FaBox className="text-xl" />
          </div>
        </div>

        {/* Third Service Card */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col relative">
          <img
            src="/serviceThree.png"
            alt="Service 3"
            className="w-full h-40 object-cover"
          />
          <div className="flex-1 p-4">
            <div>
              <h2 className="font-semibold text-lg">Fast, reliable shipping by ocean or air</h2>
            </div>
          </div>
          {/* Icon on vertically center-right */}
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-blue-700 text-white p-2 rounded-full">
            <FaPaperPlane className="text-xl" />
          </div>
        </div>

        {/* Fourth Service Card */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col relative">
          <img
            src="/serviceFour.png"
            alt="Service 4"
            className="w-full h-40 object-cover"
          />
          <div className="flex-1 p-4">
            <div>
              <h2 className="font-semibold text-lg">Product monitoring and inspection</h2>
            </div>
          </div>
          {/* Icon on vertically center-right */}
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-blue-700 text-white p-2 rounded-full">
            <FaShieldAlt className="text-xl" />
          </div>
        </div>
      </div>
    </div>
  );
};
