"use client";
import React from "react";

export const DealsSection = () => {
    const products = [
        { name: "Camera", image: "/tech/camera.png", discount: "20%" },
        { name: "Headphones", image: "/tech/headphones.png", discount: "30%" },
        { name: "Laptop", image: "/tech/laptop.png", discount: "25%" },
        { name: "Smartwatch", image: "/tech/smartwatch.png", discount: "15%" }
    ];

    return (
        <section className="container mx-auto px-10 flex flex-col md:flex-row gap-6">
            {/* Time Section */}
            <div className="w-full md:w-1/4 border-2 p-3 border-indigo-100 flex flex-col gap-4">
                <h2 className="font-bold text-lg">Deals and Offers</h2>
                <h3 className="text-gray-400">Hygiene Equipment</h3>
                <div className="w-full mt-4 grid grid-cols-2 md:grid-cols-4 gap-2">
                    <div className="bg-gray-600 text-white px-4 py-2 rounded text-center">
                        <p className="font-bold text-lg">04</p>
                        <p className="font-light text-sm">Days</p>
                    </div>
                    <div className="bg-gray-600 text-white px-4 py-2 rounded text-center">
                        <p className="font-bold text-lg">03</p>
                        <p className="font-light text-sm">Hours</p>
                    </div>
                    <div className="bg-gray-600 text-white px-4 py-2 rounded text-center">
                        <p className="font-bold text-lg">27</p>
                        <p className="font-light text-sm">Mins</p>
                    </div>
                    <div className="bg-gray-600 text-white px-4 py-2 rounded text-center">
                        <p className="font-bold text-lg">17</p>
                        <p className="font-light text-sm">Secs</p>
                    </div>
                </div>
            </div>

            {/* Product Section */}
            <div className="w-full md:w-3/4 flex flex-wrap gap-6 justify-center">
                {products.map((product, index) => (
                    <div
                        key={index}
                        className="border-2 p-3 text-center border-indigo-100 flex flex-col items-center w-full sm:w-1/2 md:w-1/4"
                    >
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-40 object-contain"
                        />
                        <p className="font-bold text-lg mt-3">{product.name}</p>
                        <p className="text-red-900 bg-red-300 rounded-3xl px-3 py-1">{product.discount}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};
