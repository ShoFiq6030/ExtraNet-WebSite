import React from 'react';

const Packages = () => {
  const packages = [
    {
      name: 'Basic',
      speed: '100 Mbps',
      price: '$39.99',
      features: [
        'Unlimited data',
        'Free modem rental',
        'No annual contract'
      ]
    },
    {
      name: 'Plus',
      speed: '300 Mbps',
      price: '$59.99',
      features: [
        'Unlimited data',
        'Free modem rental',
        'No annual contract',
        'Free installation'
      ]
    },
    {
      name: 'Premium',
      speed: '1 Gbps',
      price: '$79.99',
      features: [
        'Unlimited data',
        'Free modem rental',
        'No annual contract',
        'Free installation',
        'Premium support'
      ]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">Internet Packages</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div key={index} className="border border-gray-200 rounded-lg shadow-md p-8 text-center hover:shadow-lg transition duration-300">
              <h3 className="text-2xl font-bold mb-4">{pkg.name}</h3>
              <p className="text-4xl font-bold text-blue-600 mb-4">{pkg.price}<span className="text-sm">/month</span></p>
              <p className="text-xl mb-6">{pkg.speed} Internet</p>
              <ul className="mb-8">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="mb-2">{feature}</li>
                ))}
              </ul>
              <button className="bg-blue-600 text-white py-3 px-8 rounded-full hover:bg-blue-700 transition duration-300 w-full">
                Select Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;