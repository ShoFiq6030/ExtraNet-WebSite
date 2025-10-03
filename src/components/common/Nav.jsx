import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const linkClasses = ({ isActive }) =>
    isActive
      ? "primary-color font-bold" // active link style
      : "hover:text-orange-300"; // default hover

  return (
    <div className="navbar bg-gray-800 text-white px-4">
      {/* Logo Section */}
      <div className="flex-1">
        <NavLink
          to="/"
          className="flex items-center"
          onClick={() => setIsOpen(false)}
        >
          <img
            src="/src/assets/etlogo-removebg.png"
            alt="logo"
            className="w-12 mr-2"
          />
          <div className="primary-color text-2xl md:text-3xl font-bold leading-none">
            <h1>
              ExtraNet <br />
              <span>Technologies</span>
            </h1>
          </div>
        </NavLink>
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
            <NavLink to="/" className={linkClasses}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/package" className={linkClasses}>
              Packages
            </NavLink>
          </li>
          <li>
            <NavLink to="/about-us" className={linkClasses}>
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" className={linkClasses}>
              Services
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact-us" className={linkClasses}>
              Contact Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/pay-bill" className="btn btn-primary">
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
              <NavLink
                to="/"
                className={linkClasses}
                onClick={() => setIsOpen(false)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/package"
                className={linkClasses}
                onClick={() => setIsOpen(false)}
              >
                Packages
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about-us"
                className={linkClasses}
                onClick={() => setIsOpen(false)}
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className={linkClasses}
                onClick={() => setIsOpen(false)}
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact-us"
                className={linkClasses}
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </NavLink>
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
  );
}
