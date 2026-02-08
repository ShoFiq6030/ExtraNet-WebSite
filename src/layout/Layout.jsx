import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router";
import Nav from "../components/common/Nav";
import Footer from "../components/common/Footer";
import Loader from "../components/common/Loader";
import { useLoading } from "../context/LoadingContext";
import Marquee from "react-fast-marquee";
import { FaPhoneAlt } from "react-icons/fa";

export default function Layout() {
  const { startLoading, stopLoading } = useLoading();
  const location = useLocation();

  // Show loading on initial app load
  useEffect(() => {
    startLoading();
    const timer = setTimeout(() => stopLoading(), 1200);
    return () => clearTimeout(timer);
  }, [startLoading, stopLoading]);

  // Show loading when navigating to different pages
  useEffect(() => {
    startLoading();
    const timer = setTimeout(() => stopLoading(), 600);
    return () => clearTimeout(timer);
  }, [location.pathname, startLoading, stopLoading]);

  return (
    <div className="flex flex-col min-h-screen">
      <Loader />
      
       <div className=" fixed top-0 left-0 z-20  flex justify-between items-center w-full bg-gray-500">
          <Marquee className=" w-full lg:w-3/4 bg-primary-color text-white py-2 ">
            <span className="mx-4"></span>
            <span>
              নিরবিচ্ছিন্ন ইন্টারনেট সেবা পেতে অনুগ্রহ করে মেয়াদ শেষ হওয়ার
              পূর্বে আপনার ইন্টারনেট বিল প্রদান করুন।{" "}
            </span>
          </Marquee>
          <div className="lg:w-1/4 hidden md:block lg:flex justify-center items-center text-lg">
            <FaPhoneAlt />
            <span className="ml-2">+8801407020485</span>
            <span className="ml-2">+8801811474616</span>
          </div>
        </div>
      <Nav />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      
    </div>
  );
}
