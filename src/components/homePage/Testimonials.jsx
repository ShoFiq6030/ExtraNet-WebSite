import React from "react";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 px-4 md:px-8 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
          What Our Customers Say
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <span className="text-yellow-400">★★★★★</span>
            </div>
            <p className="text-gray-300 mb-4">
              "Excellent service! The internet speed is consistently fast and
              reliable. Customer support is very responsive and helpful."
            </p>
            <p className="font-bold text-white">- Karim Ahmed</p>
            <p className="text-gray-400 text-sm">Dhaka</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <span className="text-yellow-400">★★★★★</span>
            </div>
            <p className="text-gray-300 mb-4">
              "I switched to ExtraNet 6 months ago and haven't regretted it.
              Best internet quality in our area at a great price!"
            </p>
            <p className="font-bold text-white">- Fatima Khan</p>
            <p className="text-gray-400 text-sm">Chittagong</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <span className="text-yellow-400">★★★★★</span>
            </div>
            <p className="text-gray-300 mb-4">
              "Perfect for my business needs. The stability and speed have
              improved our productivity significantly."
            </p>
            <p className="font-bold text-white">- Rahman Ltd</p>
            <p className="text-gray-400 text-sm">Sylhet</p>
          </div>
        </div>
      </div>
    </section>
  );
}
