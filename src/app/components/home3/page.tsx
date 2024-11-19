"use client";
import React from 'react'

export const SectionThree = () => {
  const interiorOne = [
      { name: "Foam", image:"/section3/interior/foam.png"},
      { name: "Pot", image:"/section3/interior/pot.png"},
      { name: "Seat", image:"/section3/interior/seat.png"},
      { name: "Stand", image:"/section3/interior/stand.png"}
  ]
  const interiorTwo = [
      { name: "Lamp", image:"/section3/interior/lamp.png"},
      { name: "Plant", image:"/section3/interior/plant.png"},
      { name: "Juicer", image:"/section3/interior/juicer.png"},
      { name: "Blender", image:"/section3/interior/blender.png"}
  ]
  const techOne = [
      { name: "Camera", image:"/section3/tech/Camera.png"},
      { name: "Headphone", image:"/section3/tech/headphone.png"},
      { name: "Headphono ", image:"/section3/tech/headphone2.png"},
      { name: "Iron Tea", image:"/section3/tech/blender.png"}
  ]
  const techTwo = [
      { name: "Ipad", image:"/section3/tech/Ipad.png"},
      { name: "Iphone", image:"/section3/tech/Iphone.png"},
      { name: "Laptop ", image:"/section3/tech/Laptop.png"},
      { name: "Smart Watch", image:"/section3/tech/Smartwatch.png"}
  ]
    return (
    <>
       <div className="container mt-4 flex flex-wrap mx-auto px-10">
  {/* Background Image with Gradient Overlay */}
  <div
    className="w-full md:w-1/4 p-4 bg-cover bg-center relative"
    style={{
      backgroundImage: "url(/section3/secthree1.png)",
      backgroundSize: "cover",
      backgroundPosition: "center",
      minHeight: "250px", // Ensure a consistent height
    }}
  >
    {/* Gradient Overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50 z-10"></div>

    {/* Text on Top Left of the Overlay */}
    <h2 className="absolute top-4 w-3/4 left-4 text-lg md:text-2xl font-bold z-20">
      Home and Outdoor
    </h2>

    {/* Button at the Bottom Left */}
    <button className="absolute bottom-4 left-4 bg-white hover:bg-gray-300 text-black px-2 py-1 md:px-4 md:py-2 rounded z-20">
      Source Now
    </button>
  </div>

  {/* Two Rows of Columns */}
  <div className="w-full md:w-3/4 p-2">
    {/* Row 1: interiorOne */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-2">
      {interiorOne.map((item, index) => (
        <div
          key={index}
          className="relative cursor-pointer bg-white border border-indigo-200 p-2 md:p-4 rounded shadow-md h-36 md:h-48"
        >
          {/* Name on Top Left */}
          <p className="absolute top-2 left-2 text-sm md:text-xl font-bold">{item.name}</p>

          {/* Price Below the Name */}
          <p className="absolute top-10 md:top-14 left-2 text-gray-500 text-xs md:text-md">
            From <br />
            USD 19
          </p>

          {/* Image on Bottom Right */}
          <img
            src={item.image}
            alt={item.name}
            className="absolute bottom-2 right-2 w-12 h-12 md:w-16 md:h-16 object-contain"
          />
        </div>
      ))}
    </div>

    {/* Row 2: interiorTwo */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
      {interiorTwo.map((item, index) => (
        <div
          key={index}
          className="relative cursor-pointer bg-white border border-indigo-200 p-2 md:p-4 rounded shadow-md h-36 md:h-48"
        >
          {/* Name on Top Left */}
          <p className="absolute top-2 left-2 text-sm md:text-xl font-bold">{item.name}</p>

          {/* Price Below the Name */}
          <p className="absolute top-10 md:top-14 left-2 text-gray-500 text-xs md:text-md">
            From <br />
            USD 19
          </p>

          {/* Image on Bottom Right */}
          <img
            src={item.image}
            alt={item.name}
            className="absolute bottom-2 right-2 w-12 h-12 md:w-16 md:h-16 object-contain"
          />
        </div>
      ))}
    </div>
  </div>
</div>

    
    {/* Second Section */}
    <div className="container mt-8 flex flex-wrap mx-auto px-10">
  {/* Second Section: secthree2 */}
  <div
    className="w-full md:w-1/4 p-4 bg-cover bg-center relative"
    style={{
      backgroundImage: "url(/section3/secthree2.png)",
      backgroundSize: "cover",
      backgroundPosition: "center",
      minHeight: "250px",
    }}
  >
    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50 z-10"></div>
    <h2 className="absolute w-3/4 top-4 left-4 text-lg md:text-2xl font-bold z-20">Consumer electronics and gadgets</h2>
    <button className="absolute bottom-4 left-4 bg-white hover:bg-gray-300 text-black px-2 py-1 md:px-4 md:py-2 rounded z-20">
      Explore Tech
    </button>
  </div>

  {/* Product Grid Section */}
  <div className="w-full md:w-3/4 p-2">
    {/* Row 1 */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-2">
      {techOne.map((item, index) => (
        <div
          key={index}
          className="relative cursor-pointer bg-white border border-indigo-200 p-2 md:p-4 rounded shadow-md h-36 md:h-48"
        >
          <p className="absolute top-2 left-2 text-sm md:text-xl font-bold">{item.name}</p>
          <p className="absolute top-10 md:top-14 left-2 text-gray-500 text-xs md:text-md">
            From <br />
            USD 19
          </p>
          <img
            src={item.image}
            alt={item.name}
            className="absolute bottom-2 right-2 w-12 h-12 md:w-16 md:h-16 object-contain"
          />
        </div>
      ))}
    </div>

    {/* Row 2 */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
      {techTwo.map((item, index) => (
        <div
          key={index}
          className="relative cursor-pointer bg-white border border-indigo-200 p-2 md:p-4 rounded shadow-md h-36 md:h-48"
        >
          <p className="absolute top-2 left-2 text-sm md:text-xl font-bold">{item.name}</p>
          <p className="absolute top-10 md:top-14 left-2 text-gray-500 text-xs md:text-md">
            From <br />
            USD 19
          </p>
          <img
            src={item.image}
            alt={item.name}
            className="absolute bottom-2 right-2 w-12 h-12 md:w-16 md:h-16 object-contain"
          />
        </div>
      ))}
    </div>
  </div>
</div>

    </>
  )
}
