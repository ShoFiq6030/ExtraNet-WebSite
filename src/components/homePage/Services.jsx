import React from "react";

export default function Services() {
  return (
    <section id="services" className="py-16 px-4 md:px-8 bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
          Our Services
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="flex items-start space-x-4">
            <div className="text-4xl">📡</div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">
                High-Speed Broadband
              </h3>
              <p className="text-gray-300">
                Get connected with our state-of-the-art broadband
                infrastructure delivering consistent, high-speed internet.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="text-4xl">🎬</div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">
                IPTV Streaming
              </h3>
              <p className="text-gray-300">
                Enjoy HD quality streaming with our IPTV service. Access your
                favorite channels anytime, anywhere.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="text-4xl">☎️</div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">
                Voice Services
              </h3>
              <p className="text-gray-300">
                Crystal-clear voice calls with affordable national and
                international rates.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="text-4xl">🏢</div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">
                Business Solutions
              </h3>
              <p className="text-gray-300">
                Dedicated services for enterprises with guaranteed uptime and
                dedicated support.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}