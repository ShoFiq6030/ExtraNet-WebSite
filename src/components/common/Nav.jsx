import React, { useState, useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router";
import Marquee from "react-fast-marquee";
import { FaPhoneAlt } from "react-icons/fa";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

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

  // Use Intersection Observer to detect which section is in view
  useEffect(() => {
    const sections = [
      "home",
      "why-choose-us",
      "packages",
      "services",
      "testimonials",
      "about",
      "contact",
    ];

    const observerOptions = {
      root: null,
      rootMargin: "-50% 0px -50% 0px",
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );

    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  const getButtonClasses = (sectionId) => {
    const baseClasses =
      " bg-transparent border-none cursor-pointer transition-colors duration-300";
    const activeClasses =
      activeSection === sectionId
        ? "primary-color font-bold"
        : "hover:text-orange-300";
    return `${baseClasses} ${activeClasses}`;
  };

  const linkClasses = ({ isActive }) =>
    isActive
      ? "primary-color font-bold" // active link style
      : "hover:text-orange-300"; // default hover

  return (
    <>
      <div className=" bg-gray-700 text-white px-4 fixed top-10 left-0 w-full z-20">
        <div className="navbar ">
          {/* Logo Section */}
          <div className="flex-1">
            <div className="flex items-center" onClick={() => setIsOpen(false)}>
              <img
                src="/src/assets/etlogo-removebg.png"
                alt="logo"
                className="w-12 mr-2"
              />
              <NavLink
                to="/"
                className="primary-color text-lg md:text-xl font-bold leading-none"
              >
                <h1>
                  ExtraNet <br />
                  <span>Technologies</span>
                </h1>
              </NavLink>
            </div>
          </div>

          {/* Mobile Hamburger */}
          <div className="flex-none md:hidden">
            <button
              onClick={toggleMenu}
              className="btn btn-square btn-ghost"
              aria-label="Toggle Menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex flex-none">
            <ul className="menu menu-horizontal p-0 space-x-4 text-lg">
              <li>
                <button
                  onClick={() => scrollToSection("home")}
                  className={getButtonClasses("home")}
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("why-choose-us")}
                  className={getButtonClasses("why-choose-us")}
                >
                  Why Choose Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("packages")}
                  className={getButtonClasses("packages")}
                >
                  Packages
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className={getButtonClasses("services")}
                >
                  Services
                </button>
              </li>
              {/* <li>
            <button
              onClick={() => scrollToSection("testimonials")}
              className={getButtonClasses("testimonials")}
            >
              Testimonials
            </button>
          </li> */}
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className={getButtonClasses("about")}
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className={getButtonClasses("contact")}
                >
                  Contact
                </button>
              </li>
              <li>
                <NavLink
                  to="https://extranet.yetfix.com/customer_login"
                  className="btn btn-primary"
                >
                  Pay Bill
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="absolute top-16 left-0 w-full bg-gray-700 md:hidden z-10">
              <ul className="menu menu-vertical p-4 w-full space-y-2 text-lg flex flex-col items-center">
                <li>
                  <button
                    onClick={() => scrollToSection("home")}
                    className={getButtonClasses("home") + " w-full text-center"}
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("why-choose-us")}
                    className={
                      getButtonClasses("why-choose-us") + " w-full text-center"
                    }
                  >
                    Why Choose Us
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("packages")}
                    className={
                      getButtonClasses("packages") + " w-full text-center"
                    }
                  >
                    Packages
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("services")}
                    className={
                      getButtonClasses("services") + " w-full text-center"
                    }
                  >
                    Services
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("testimonials")}
                    className={
                      getButtonClasses("testimonials") + " w-full text-center"
                    }
                  >
                    Testimonials
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("about")}
                    className={
                      getButtonClasses("about") + " w-full text-center"
                    }
                  >
                    About
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className={
                      getButtonClasses("contact") + " w-full text-center"
                    }
                  >
                    Contact
                  </button>
                </li>
                <li>
                  <NavLink
                    to="/pay-bill"
                    className="btn btn-primary w-full text-center"
                    onClick={() => setIsOpen(false)}
                  >
                    Pay Bill
                  </NavLink>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
