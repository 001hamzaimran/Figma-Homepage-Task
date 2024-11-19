"use client";
import React from 'react';

export const Supplier = () => {
  return (
    <div className="container mx-auto px-10 mt-16 py-10">
      <div
        className="rounded-lg bg-cover bg-center"
        style={{
          backgroundImage: 'url("/suppplier.png")',
        }}
      >
        <div
          className="bg-gradient-to-r from-blue-900 to-blue-400 bg-opacity-80 rounded-lg py-10 px-5"
          style={{
            background: 'linear-gradient(to right, rgba(0, 123, 255, 0.8), rgba(0, 169, 255, 0.6))',
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Left Column */}
            <div className="text-white space-y-4">
              <h2 className="text-3xl font-bold">
                An easy way to send requests to all suppliers
              </h2>
              <p className="text-gray-200">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                venenatis, ligula ut hendrerit cursus, nisl est suscipit elit, non
                aliquam velit sapien sit amet justo.
              </p>
            </div>

            {/* Right Column: Form */}
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold mb-4">Send quote to supplier</h3>
              <form className="space-y-4">
                {/* Item Input */}
                <input
                  type="text"
                  placeholder="What item you need"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                {/* Message Box */}
                <textarea
                  placeholder="Type more detail"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>

                {/* Quantity and Pcs Input */}
                <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
                  {/* Quantity Input */}
                  <input
                    type="text"
                    placeholder="Quantity"
                    className="flex-grow p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  {/* Pcs Input */}
                  <input
                    type="text"
                    placeholder="pcs"
                    className="w-full md:w-20 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-md font-bold"
                >
                  Send Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
