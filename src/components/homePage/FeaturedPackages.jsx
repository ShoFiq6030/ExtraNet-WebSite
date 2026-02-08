import React from "react";

export default function FeaturedPackages() {
  const packages = [
    {
      id: 1,
      name: "Basic",
      price: "৳500",
      speed: "10 Mbps",
      period: "/month",
      features: [
        "10 Mbps Download Speed",
        "Unlimited Data",
        // "Free WiFi Router",
        "24/7 Support",
      ],
      popular: false,
      backgroundColor: "bg-gray-800",
      textColor: "text-white",
      priceColor: "text-primary-color",
      buttonColor: "bg-primary-color text-white hover:bg-orange-600",
      borderColor: "border-primary-color",
      featureColor: "text-gray-300",
    },
    {
      id: 2,
      name: "Standard",
      price: "৳700",
      speed: "30 Mbps",
      period: "/month",
      features: [
        "30 Mbps Download Speed",
        "Unlimited Data",
        // "Free WiFi Router",
        "Priority 24/7 Support",
        "Free Installation",
      ],
      popular: true,
      backgroundColor: " bg-gray-500",
      textColor: "text-gradient-to-r from-orange-300 to-orange-600",
      priceColor: "text-primary-color",
      buttonColor: "bg-yellow-400 text-gray-800 hover:bg-yellow-300",
      borderColor: "border-yellow-400",
      featureColor: "text-gray-100",
      badgeColor: "bg-yellow-400 text-gray-800",
      scale: "scale-105",
    },
    {
      id: 3,
      name: "Premium",
      price: "৳800",
      speed: "40 Mbps",
      period: "/month",
      features: [
        "40 Mbps Download Speed",
        "Unlimited Data",
        "Premium WiFi Router 6",
        "Priority 24/7 Support",
        "1 Week Free Trial",
      ],
      popular: false,
      backgroundColor: "bg-gray-800",
      textColor: "text-white",
      priceColor: "text-primary-color",
      buttonColor: "bg-primary-color text-white hover:bg-orange-600",
      borderColor: "border-primary-color",
      featureColor: "text-gray-300",
    },
  ];

  return (
    <section id="packages" className="py-16 px-4 md:px-8 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
          Popular Plans
        </h2>
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`${pkg.backgroundColor} p-8 rounded-lg shadow-lg border-t-4 ${pkg.borderColor} ${pkg.scale || ""}`}
            >
              {pkg.popular && (
                <div
                  className={`${pkg.badgeColor}  ${pkg.popular && "animate-bounce"} px-4 py-1 rounded inline-block mb-4 font-bold`}
                >
                  Most Popular
                </div>
              )}
              <h3 className={`text-2xl font-bold ${pkg.textColor} mb-2`}>
                {pkg.name}
              </h3>
              <p className={`${pkg.priceColor} text-3xl font-bold mb-4`}>
                {pkg.price}
              </p>
              <p
                className={`${pkg.popular ? "text-gray-100" : "text-gray-400"} mb-6`}
              >
                {pkg.period} • {pkg.speed}
              </p>
              <ul className={`space-y-3 mb-6 ${pkg.featureColor}`}>
                {pkg.features.map((feature, idx) => (
                  <li key={idx}>✓ {feature}</li>
                ))}
              </ul>
              <button
                className={`w-full ${pkg.buttonColor} font-bold py-2 rounded-lg transition`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
        <div className="text-center">
          <a
            href="/packages"
            className="text-primary-color font-bold hover:text-orange-600"
          >
            View All Plans →
          </a>
        </div>
      </div>
    </section>
  );
}
