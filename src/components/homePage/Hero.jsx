import React from 'react';

const Hero = () => {
  return (
    <section className="relative bg-blue-600 text-white py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Lightning-Fast Internet for Your Home</h1>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          Experience seamless streaming, gaming, and browsing with our fiber-optic network.
        </p>
        <button className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full hover:bg-blue-50 transition duration-300">
          View Plans
        </button>
      </div>
    </section>
  );
};

export default Hero;