import React from "react";

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-16 px-4 md:px-8 text-white bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold  mb-12 text-center">
          Why Choose ExtraNet Technologies?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-5xl mb-4">🚀</div>
            <h3 className="text-2xl font-bold  mb-3">
              Lightning Fast Speeds
            </h3>
            <p className="">
              Experience ultra-fast fiber-optic internet with speeds up to
              1Gbps. Stream, game, and work without any lag.
            </p>
          </div>
          <div className="text-center">
            <div className="text-5xl mb-4">🔒</div>
            <h3 className="text-2xl font-bold  mb-3">
              Secure & Reliable
            </h3>
            <p className="">
              With 99.9% uptime guarantee and advanced security features, your
              connection is always safe and stable.
            </p>
          </div>
          <div className="text-center">
            <div className="text-5xl mb-4">💰</div>
            <h3 className="text-2xl font-bold  mb-3">
              Affordable Pricing
            </h3>
            <p className="">
              Flexible plans starting from ৳599/month. No hidden charges, no
              long-term contracts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
