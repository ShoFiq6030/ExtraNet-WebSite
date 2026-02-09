import React from "react";

export default function AboutSection() {
  return (
    <section id="about" className="py-16 px-4 md:px-8 bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            About ExtraNet Technologies
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl">
            Your trusted internet service provider since 2015
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-gray-700 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-white mb-4">Our Story</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              ExtraNet Technologies started with a vision to provide high-speed,
              reliable internet connectivity to communities across the region.
              Over the years, we've grown into a leading internet service
              provider trusted by thousands of customers.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Our commitment to excellence and customer satisfaction has made us
              a household name in the telecommunications industry.
            </p>
          </div>

          <div className="bg-gray-700 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              To deliver world-class internet services that empower individuals,
              businesses, and communities to connect, learn, and grow in the
              digital age.
            </p>
            <h4 className="text-xl font-semibold text-white mb-3">Our Values</h4>
            <ul className="text-gray-300 space-y-2">
              <li className="flex items-center">
                <span className="text-primary-color mr-2">✓</span> Reliability
              </li>
              <li className="flex items-center">
                <span className="text-primary-color mr-2">✓</span> Innovation
              </li>
              <li className="flex items-center">
                <span className="text-primary-color mr-2">✓</span> Customer First
              </li>
              <li className="flex items-center">
                <span className="text-primary-color mr-2">✓</span> Integrity
              </li>
            </ul>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-gray-700 p-6 rounded-lg text-center">
            <h3 className="text-4xl font-bold text-gray-100 mb-2">5K+</h3>
            <p className="text-gray-300 text-sm">Active Customers</p>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg text-center">
            <h3 className="text-4xl font-bold text-gray-100 mb-2">99.9%</h3>
            <p className="text-gray-300 text-sm">Uptime Guarantee</p>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg text-center">
            <h3 className="text-4xl font-bold text-gray-100 mb-2">24/7</h3>
            <p className="text-gray-300 text-sm">Customer Support</p>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg text-center">
            <h3 className="text-4xl font-bold text-gray-100 mb-2">9+</h3>
            <p className="text-gray-300 text-sm">Years Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
}
