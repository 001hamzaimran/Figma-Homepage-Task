import React from 'react';

export const RecommendedItems = () => {
  // Sample items data
  const items = [
    { id: 1, name: 'Bllue Fashionable Bag', price: '$20.00', image: '/items/bag.png' },
    { id: 3, name: 'Blue Formal Coat', price: '$15.00', image: '/items/coat.png' },
    { id: 4, name: 'Bass Speakers Headphones', price: '$25.00', image: '/items/headphone.png' },
    { id: 5, name: 'Tea Heater', price: '$40.00', image: '/items/heater.png' },
    { id: 6, name: 'Brown leather Jacket', price: '$22.00', image: '/items/jacket.png' },
    { id: 7, name: 'Handmade Clay Pot', price: '$30.00', image: '/items/pot.png' },
    { id: 2, name: 'Black Fashionable Bag', price: '$35.00', image: '/items/bag1.png' },
    { id: 8, name: 'Casual Shirt', price: '$18.00', image: '/items/shirt.png' },
    { id: 9, name: 'Wearable Short', price: '$50.00', image: '/items/shorts.png' },
    { id: 10, name: 'Handmade Leather Wallet', price: '$28.00', image: '/items/wallet.png' },
  ];

  return (
    <div className="container mx-auto px-10 mt-5">
      {/* Header */}
      <h2 className="font-bold text-xl mb-4">Recommended Items</h2>

      {/* Items Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-5 gap-6">
        {items.map((item) => (
          <div
            key={item.id}
            className="bg-white cursor-pointer rounded-md overflow-hidden hover:shadow-md  transition-shadow duration-300"
          >
            {/* Item Image */}
            <div className="aspect-w-1 aspect-h-1">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Item Details */}
            <div className="p-4 text-center">
              <p className="text-black font-bold text-lg">{item.price}</p>
              <p className="text-gray-500 text-sm">{item.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
