import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-white text-black py-8">
      <div className="container mx-auto mt-5 px-10">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
          {/* Column 1: Brand Logo, Description, and Social Icons */}
          <div className="space-y-4">
            <h2 className="text-2xl text-blue-800 font-bold">BrandName</h2>
            <p className="text-sm text-gray-800">
              BrandName provides top-notch services to meet your needs. Follow us on social media!
            </p>
            <div className="flex space-x-4">
              <FaFacebook className="text-xl hover:text-blue-800" />
              <FaTwitter className="text-xl hover:text-blue-500" />
              <FaInstagram className="text-xl hover:text-pink-700 " />
            </div>
          </div>

          {/* Column 2: About */}
          <div>
            <h3 className="font-bold text-lg mb-4">About</h3>
            <ul className="space-y-2 text-gray-800">
              <li className="hover:text-blue-600 cursor-pointer">About Us</li>
              <li className="hover:text-blue-600 cursor-pointer">Find Store</li>
              <li className="hover:text-blue-600 cursor-pointer">Categories</li>
              <li className="hover:text-blue-600 cursor-pointer">Blog</li>
            </ul>
          </div>

          {/* Column 3: Find Store */}
          <div>
            <h3 className="font-bold text-lg mb-4">Find Store</h3>
            <ul className="space-y-2 text-gray-800">
              <li className="hover:text-blue-600 cursor-pointer">About Us</li>
              <li className="hover:text-blue-600 cursor-pointer">Find Store</li>
              <li className="hover:text-blue-600 cursor-pointer">Categories</li>
              <li className="hover:text-blue-600 cursor-pointer">Blog</li>
            </ul>
          </div>

          {/* Column 4: Categories */}
          <div>
            <h3 className="font-bold text-lg mb-4">Categories</h3>
            <ul className="space-y-2 text-gray-800">
              <li className="hover:text-blue-600 cursor-pointer">About Us</li>
              <li className="hover:text-blue-600 cursor-pointer">Find Store</li>
              <li className="hover:text-blue-600 cursor-pointer">Categories</li>
              <li className="hover:text-blue-600 cursor-pointer">Blog</li>
            </ul>
          </div>

          {/* Column 5: Blog */}
          <div>
            <h3 className="font-bold text-lg mb-4">Blog</h3>
            <ul className="space-y-2 text-gray-800">
              <li className="hover:text-blue-600 cursor-pointer">About Us</li>
              <li className="hover:text-blue-600 cursor-pointer">Find Store</li>
              <li className="hover:text-blue-600 cursor-pointer">Categories</li>
              <li className="hover:text-blue-600 cursor-pointer">Blog</li>
            </ul>
          </div>

          {/* Column 6: Get App Section */}
          <div>
            <h3 className="font-bold text-lg mb-4">Get App</h3>
            <div className="space-y-4">
              {/* App Store */}
              <div className="flex items-center bg-black text-white p-4 rounded-md cursor-pointer">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Apple_logo_grey.svg/758px-Apple_logo_grey.svg.png"
                  alt="App Store Logo"
                  className="w-6 h-6 mr-4"
                />
                <div>
                  <p className="text-xs">Download on the</p>
                  <p className="font-bold">App Store</p>
                </div>
              </div>
              {/* Google Play */}
              <div className="flex items-center bg-black text-white p-4 rounded-md cursor-pointer">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/270px-Google_Play_Store_badge_EN.svg.png"
                  alt="Google Play Logo"
                  className="w-6 h-6 mr-4"
                />
                <div>
                  <p className="text-xs">Get it on</p>
                  <p className="font-bold">Google Play</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center mt-8 text-gray-400 text-sm">
          &copy; 2024 BrandName. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
