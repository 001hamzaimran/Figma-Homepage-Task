"use client";
import React from "react";
import { FaEnvelope } from "react-icons/fa";

export const Subs = () => {
  return (
    <div className="container mx-auto px-10 mt-16 text-center">
      {/* Heading */}
      <h2 className="text-2xl font-bold mb-2">Subscribe to our newsletter</h2>
      <p className="text-gray-500 mb-6">
        Get daily news on upcoming offers from many suppliers all over the world
      </p>
      {/* Form */}
      <form className="flex flex-col sm:flex-row items-center justify-center">
        <div className="relative w-full sm:w-96">
          {/* Email Icon */}
          <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
            <FaEnvelope />
          </span>
          {/* Email Input */}
          <input
            type="email"
            placeholder="Enter your email"
            className="pl-10 p-3 w-full rounded-t sm:rounded-l sm:rounded-t-none border border-gray-300 focus:outline-blue-500 text-sm"
          />
        </div>
        {/* Subscribe Button */}
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 sm:py-2 w-full sm:w-auto rounded-b sm:rounded-r sm:rounded-b-none">
          Subscribe
        </button>
      </form>
    </div>
  );
};
