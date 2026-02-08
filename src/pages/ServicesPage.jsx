import React from "react";

export default function ServicesPage() {
  const services = [
    {
      icon: "🚀",
      title: "Broadband Internet",
      description:
        "Ultra-fast broadband connections for seamless streaming, gaming, and browsing.",
    },
    {
      icon: "📱",
      title: "Mobile Data",
      description:
        "Stay connected on-the-go with our reliable mobile data services.",
    },
    {
      icon: "🏢",
      title: "Business Solutions",
      description:
        "Dedicated services for enterprises with guaranteed uptime and priority support.",
    },
    {
      icon: "🎥",
      title: "IPTV Services",
      description:
        "Stream your favorite shows and movies with our IPTV streaming service.",
    },
    {
      icon: "☎️",
      title: "Voice Services",
      description:
        "Crystal-clear voice calling with affordable international rates.",
    },
    {
      icon: "🔒",
      title: "Security Features",
      description:
        "Advanced security and firewall protection to keep your data safe.",
    },
  ];

  return (
    <section className="py-16 px-4 md:px-8 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Our Services
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our comprehensive range of connectivity and communication
            solutions designed for everyone.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Service Features */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Why Our Services Stand Out
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-primary-color text-xl mr-4">✓</span>
                <div>
                  <h4 className="font-semibold text-gray-800">
                    Industry-Leading Speeds
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Experience fiber-optic speeds up to 1Gbps
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-primary-color text-xl mr-4">✓</span>
                <div>
                  <h4 className="font-semibold text-gray-800">
                    No Data Throttling
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Unlimited data for true unlimited browsing
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-primary-color text-xl mr-4">✓</span>
                <div>
                  <h4 className="font-semibold text-gray-800">
                    Free WiFi Router
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Modern WiFi router included with every connection
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-primary-color text-xl mr-4">✓</span>
                <div>
                  <h4 className="font-semibold text-gray-800">
                    Professional Installation
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Expert technicians ensure perfect setup
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Premium Support Included
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-primary-color text-xl mr-4">📞</span>
                <div>
                  <h4 className="font-semibold text-gray-800">24/7 Helpline</h4>
                  <p className="text-gray-600 text-sm">
                    Call our support team anytime, any day
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-primary-color text-xl mr-4">💬</span>
                <div>
                  <h4 className="font-semibold text-gray-800">Live Chat</h4>
                  <p className="text-gray-600 text-sm">
                    Instant support via live chat on our website
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-primary-color text-xl mr-4">🛠️</span>
                <div>
                  <h4 className="font-semibold text-gray-800">
                    Technical Support
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Expert technicians ready to resolve issues
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-primary-color text-xl mr-4">🔄</span>
                <div>
                  <h4 className="font-semibold text-gray-800">
                    Quick Response
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Average response time under 2 minutes
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-primary-color to-orange-600 text-white p-12 rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Experience Better Internet?
          </h2>
          <p className="mb-6 text-lg">
            Choose from our flexible plans and get connected today!
          </p>
          <a href="/package">
            <button className="bg-white text-primary-color font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition duration-300">
              View Our Plans
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
