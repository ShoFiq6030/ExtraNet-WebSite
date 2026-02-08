import React from "react";
import { Link } from "react-router";

export default function CallToAction() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
      return;
    }

    // If target section not present (we're on another route), navigate to home
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: sectionId } });
      setIsOpen(false);
      return;
    }

    // fallback: try again after short delay
    setTimeout(() => {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }, 200);
  };
  return (
    <section id="cta" className="py-16 px-4 md:px-8 bg-gray-800">
      <div className="max-w-4xl mx-auto text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Switch to ExtraNet?
        </h2>
        <p className="text-lg mb-8">
          Join thousands of satisfied customers enjoying fast, reliable internet
          service.
        </p>
        <div className="space-y-4 sm:space-y-0 sm:space-x-4 flex flex-col sm:flex-row justify-center">
          <Link to="/packages">
            <button className="w-full sm:w-auto bg-gray-500 text-primary-color font-bold py-3 px-8 rounded-lg hover:bg-gray-600 transition">
              View Plans
            </button>
          </Link>
          <button>
            <button
              onClick={() => scrollToSection("contact")}
              className="w-full sm:w-auto bg-yellow-400 text-gray-800 font-bold py-3 px-8 rounded-lg hover:bg-yellow-300 transition"
            >
              Contact Us
            </button>
          </button>
        </div>
      </div>
    </section>
  );
}
