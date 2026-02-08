import React, { useState } from "react";

export default function FeaturedPackages() {
  const packages = [
    {
      id: 1,
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
      backgroundColor: "bg-gradient-to-b from-primary-color to-orange-600",
      textColor: "text-white",
      priceColor: "text-white",
      buttonColor: "bg-yellow-400 text-gray-800 hover:bg-yellow-300",
      borderColor: "border-yellow-400",
      featureColor: "text-gray-100",
      badgeColor: "bg-yellow-400 text-gray-800",
      scale: "scale-105",
    },
    {
      id: 3,
      name: "Standard",
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
      backgroundColor: "bg-gray-800",
      textColor: "text-white",
      priceColor: "text-primary-color",
      buttonColor: "bg-primary-color text-white hover:bg-orange-600",
      borderColor: "border-primary-color",
      featureColor: "text-gray-300",
    },
    {
      id: 4,
      name: "Premium",
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
      backgroundColor: "bg-gray-800",
      textColor: "text-white",
      priceColor: "text-primary-color",
      buttonColor: "bg-primary-color text-white hover:bg-orange-600",
      borderColor: "border-primary-color",
      featureColor: "text-gray-300",
    },
    {
      id: 5,
      name: "Gold",
      speed: "40 Mbps",
      price: "৳900",
      period: "/month",
      features: [
        "Download speed up to 40 Mbps",
        "Unlimited Devices",
        "Dedicated Account Manager",
        "Professional WiFi Setup",
        "Unlimited data",
        "Free Installation",
        "2-Month Free Trial",
        "99.9% Uptime SLA",
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
      id: 6,
      name: "Enterprise",
      speed: "50 Mbps",
      price: "৳1000",
      period: "/month",
      features: [
        "Download speed up to 50 Mbps",
        "Unlimited Devices",
        "Dedicated Account Manager",
        "Professional WiFi Setup",
        "Unlimited data",
        "Free Installation",
        "2-Month Free Trial",
        "99.9% Uptime SLA",
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

  const [showAll, setShowAll] = useState(false);
  const initialCount = 3;
  const packagesToShow = showAll ? packages : packages.slice(0, initialCount);

  return (
    <section id="packages" className="py-16 px-4 md:px-8 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
          Popular Plans
        </h2>
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {packagesToShow.map((pkg) => (
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
          {packages.length > initialCount && (
            <button
              onClick={() => setShowAll((s) => !s)}
              className="text-primary-color font-bold hover:text-orange-600"
            >
              {showAll ? "Show Less" : "View All Plans →"}
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
