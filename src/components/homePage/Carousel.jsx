import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const slides = [
  "/src/assets/hero_1.jpg",
  "/src/assets/hero_2.jpg",
  "/src/assets/hero_3.jpg",
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000); // change every 4s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[300px] md:h-[600px] overflow-hidden">
      {slides.map((src, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100" : "opacity-0"
          } bg-cover bg-center`}
          style={{ backgroundImage: `url(${src})` }}
        >
          {index === 0 && (
            <div className="flex justify-between items-center w-full h-full px-10 lg:px-40">
              <h2 className="text-xl md:text-3xl lg:text-6xl font-bold leading-tight lg:leading-normal text-white">
                দ্রুত গতির <br />
                ইন্টারনেট সংযোগ
                <br /> পেতে এখনি <br />
                যোগাযোগ করুন।
              </h2>
              <Link to="/contact">
                <button className="btn btn-warning bg-primary-color text-white">
                  Contact
                </button>
              </Link>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
