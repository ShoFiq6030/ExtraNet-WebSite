import React from "react";

export default function PackagePage() {
  const packages = [
    {
      name: "Basic",
      speed: "10 Mbps",
      price: "৳500",
      period: "/month",
      features: [
        "Download speed up to 10 Mbps",
        "1 Device connection",
        "24/7 Customer Support",
        "Free WiFi Router",
        "Unlimited data",
      ],
      popular: false,
    },
    {
      name: "Standard",
      speed: "15 Mbps",
      price: "৳550",
      period: "/month",
      features: [
        "Download speed up to 15 Mbps",
        "4 Device connection",
        "24/7 Customer Support",
        "Free WiFi Router",
        "Unlimited data",
        "Free Installation",
      ],
      popular: true,
    },
    {
      name: "Premium",
      speed: "20 Mbps",
      price: "৳600",
      period: "/month",
      features: [
        "Download speed up to 20 Mbps",
        "Unlimited Devices",
        "Priority 24/7 Support",
        "Free WiFi Router 6",
        "Unlimited data",
        "Free Installation",
        "1-Month Free Trial",
      ],
      popular: false,
    },
    {
      name: "Enterprise",
      speed: "30 Mbps",
      price: "৳700",
      period: "/month",
      features: [
        "Download speed up to 30 Mbps",
        "Unlimited Devices",
        "Dedicated Account Manager",
        "Professional WiFi Setup",
        "Unlimited data",
        "Free Installation",
        "2-Month Free Trial",
        "99.9% Uptime SLA",
      ],
      popular: false,
    },
  ];

  return (
    <section className="py-16 px-4 md:px-8 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Internet Plans
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Choose the perfect plan that fits your needs. All plans include
            unlimited data and free installation.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`rounded-lg shadow-md overflow-hidden transition duration-300 ${
                pkg.popular
                  ? "bg-gradient-to-b from-primary-color to-orange-600 text-white scale-105 md:scale-110"
                  : "bg-gray-800 text-white"
              }`}
            >
              {pkg.popular && (
                <div className="bg-yellow-400 text-gray-800 text-center py-2 font-bold">
                  Most Popular
                </div>
              )}

              <div className="p-6">
                <h3
                  className={`text-2xl font-bold mb-2 ${!pkg.popular && "text-white"}`}
                >
                  {pkg.name}
                </h3>
                <p
                  className={`text-sm mb-4 ${pkg.popular ? "text-gray-100" : "text-gray-300"}`}
                >
                  {pkg.speed}
                </p>

                <div className="mb-6">
                  <span className="text-3xl font-bold">{pkg.price}</span>
                  <span
                    className={`text-sm ml-2 ${pkg.popular ? "text-gray-100" : "text-gray-400"}`}
                  >
                    {pkg.period}
                  </span>
                </div>

                <button
                  className={`w-full py-2 px-4 rounded-lg font-bold mb-6 transition duration-300 ${
                    pkg.popular
                      ? "bg-yellow-400 text-gray-800 hover:bg-yellow-300"
                      : "bg-primary-color text-white hover:bg-orange-600"
                  }`}
                >
                  Choose Plan
                </button>

                <ul className="space-y-3">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="mr-2">✓</span>
                      <span
                        className={`text-sm ${pkg.popular ? "text-gray-100" : "text-gray-300"}`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-white mb-3">📍 Coverage</h3>
            <p className="text-gray-300">
              We provide service across major cities and expanding to rural
              areas continuously.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-white mb-3">
              🔄 Flexibility
            </h3>
            <p className="text-gray-300">
              Change your plan anytime. No long-term contracts. Cancel with 7
              days notice.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-white mb-3">🎁 Promotions</h3>
            <p className="text-gray-300">
              New customers get special discounts and extended free trial
              periods based on location.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
