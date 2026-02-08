import React, { useState, useEffect } from "react";
import { Link } from "react-router";
import { FaArrowDown } from "react-icons/fa";

const slides = [
  "/src/assets/hero_1.jpg",
  "/src/assets/hero_2.jpg",
  "/src/assets/hero_3.jpg",
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000); // change every 4s
    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  return (
    <div
      id="home"
      className="relative w-full h-[300px] md:h-[600px] overflow-hidden"
    >
      {slides.map((src, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100" : "opacity-0"
          } bg-cover bg-center`}
          style={{ backgroundImage: `url(${src})` }}
        >
          <div className="w-full h-full bg-black bg-opacity-50 flex items-center">
            {
              <div className="flex justify-between items-center w-full h-full px-10 lg:px-40">
                <h2 className="text-xl md:text-3xl lg:text-6xl font-bold leading-tight lg:leading-normal text-white">
                  দ্রুত গতির <br />
                  ইন্টারনেট সংযোগ
                  <br /> পেতে এখনি <br />
                  যোগাযোগ করুন।
                </h2>

                <button
                  className="btn lg:w-[200px]  btn-warning bg-primary-color text-white"
                  onClick={() => scrollToSection("packages")}
                >
                  View Packages <FaArrowDown className="ml-2 animate-bounce" />
                </button>
              </div>
            }
          </div>
        </div>
      ))}

      {/* Previous Button */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 text-gray-800 font-bold py-2 px-3 rounded-full transition duration-300 z-10"
        aria-label="Previous slide"
      >
        ❮
      </button>

      {/* Next Button */}
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 text-gray-800 font-bold py-2 px-3 rounded-full transition duration-300 z-10"
        aria-label="Next slide"
      >
        ❯
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition duration-300 ${
              index === current
                ? "bg-primary-color"
                : "bg-white bg-opacity-50 hover:bg-opacity-75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
