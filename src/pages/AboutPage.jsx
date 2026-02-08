import React from "react";

export default function AboutPage() {
  return (
    <section className="py-16 px-4 md:px-8 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            About ExtraNet Technologies
          </h1>
          <p className="text-lg text-gray-600">
            Your trusted internet service provider since 2015
          </p>
        </div>

        {/* Company Story */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Story</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              ExtraNet Technologies started with a vision to provide high-speed,
              reliable internet connectivity to communities across the region.
              Over the years, we've grown into a leading internet service
              provider trusted by thousands of customers.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our commitment to excellence and customer satisfaction has made us
              a household name in the telecommunications industry.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              To deliver world-class internet services that empower individuals,
              businesses, and communities to connect, learn, and grow in the
              digital age.
            </p>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Our Values
            </h3>
            <ul className="text-gray-700 space-y-2">
              <li className="flex items-center">
                <span className="text-primary-color mr-2">✓</span> Reliability
              </li>
              <li className="flex items-center">
                <span className="text-primary-color mr-2">✓</span> Innovation
              </li>
              <li className="flex items-center">
                <span className="text-primary-color mr-2">✓</span> Customer
                First
              </li>
              <li className="flex items-center">
                <span className="text-primary-color mr-2">✓</span> Integrity
              </li>
            </ul>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-4xl font-bold text-primary-color mb-2">50K+</h3>
            <p className="text-gray-600">Active Customers</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-4xl font-bold text-primary-color mb-2">
              99.9%
            </h3>
            <p className="text-gray-600">Uptime Guarantee</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-4xl font-bold text-primary-color mb-2">24/7</h3>
            <p className="text-gray-600">Customer Support</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-4xl font-bold text-primary-color mb-2">9+</h3>
            <p className="text-gray-600">Years Experience</p>
          </div>
        </div>

        {/* Team Section */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Why Choose Us?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                High-Speed Connectivity
              </h3>
              <p className="text-gray-700">
                Experience blazing-fast internet speeds perfect for streaming,
                gaming, and working from home.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Affordable Plans
              </h3>
              <p className="text-gray-700">
                Flexible packages designed to fit every budget without
                compromising on quality.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Reliable Infrastructure
              </h3>
              <p className="text-gray-700">
                Our state-of-the-art network ensures consistent, uninterrupted
                service.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Expert Support Team
              </h3>
              <p className="text-gray-700">
                Our knowledgeable support team is available around the clock to
                assist you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
