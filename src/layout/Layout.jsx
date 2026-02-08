import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router";
import Nav from "../components/common/Nav";
import Footer from "../components/common/Footer";
import Loader from "../components/common/Loader";
import { useLoading } from "../context/LoadingContext";
import Marquee from "react-fast-marquee";

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
      <Nav />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
