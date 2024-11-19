import React from 'react';

export const Region = () => {
  const regions = [
    { name: 'Arab Emirates', flag: '/flags/AE@2x-1.png', shopLink: 'Arabemirate.shop' },
    { name: 'Denmark', flag: '/flags/DK@2x.png', shopLink: 'denmark.shop' },
    { name: 'China', flag: '/flags/CN@2x.png', shopLink: 'china.shop' },
    { name: 'Australia', flag: '/flags/AU@2x.png', shopLink: 'australia.shop' },
    { name: 'France', flag: '/flags/FR@2x.png', shopLink: 'france.shop' },
    { name: 'Great Britain', flag: '/flags/GB@2x.png', shopLink: 'britain.shop' },
    { name: 'Arab Emirates', flag: '/flags/AE@2x-1.png', shopLink: 'Arabemirate.shop' },
    { name: 'Italy', flag: '/flags/IT@2x.png', shopLink: 'italy.shop' },
    { name: 'Russia', flag: '/flags/RU@2x.png', shopLink: 'russia.shop' },
    { name: 'United States', flag: '/flags/US@2x.png', shopLink: 'usa.shop' },
  ];

  return (
    <div className="container mx-auto px-10 mt-16">
      {/* Header */}
      <h3 className="text-xl font-bold mb-4">Supplier by Region</h3>

      {/* Regions Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {regions.map((region, index) => (
          <div
            key={index}
            className="bg-gray-100 flex items-center p-4 rounded-md shadow-md hover:bg-gray-200 cursor-pointer"
          >
            {/* Flag */}
            <img
              src={region.flag}
              alt={`${region.name} Flag`}
              className="w-10 h-10 object-cover rounded-full mr-4"
            />

            {/* Region Details */}
            <div>
              <p className="text-sm font-medium">{region.name}</p>
              <p className="text-xs text-gray-500">{region.shopLink}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
