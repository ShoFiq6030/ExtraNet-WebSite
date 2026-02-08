import React, { useEffect } from "react";
import { useLocation } from "react-router";
import Carousel from "../components/homePage/Carousel";
import WhyChooseUs from "../components/homePage/WhyChooseUs";
import FeaturedPackages from "../components/homePage/FeaturedPackages";
import Services from "../components/homePage/Services";
import Testimonials from "../components/homePage/Testimonials";
import AboutSection from "../components/homePage/AboutSection";
import ContactSection from "../components/homePage/ContactSection";
import CallToAction from "../components/homePage/CallToAction";

export default function HomePage() {
  const location = useLocation();

  useEffect(() => {
    const target = location.state && location.state.scrollTo;
    if (target) {
      // small delay to ensure DOM is rendered
      setTimeout(() => {
        const el = document.getElementById(target);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
        // remove the state so back/refresh won't re-trigger
        try {
          window.history.replaceState(
            {},
            document.title,
            window.location.pathname,
          );
        } catch (e) {
          // ignore
        }
      }, 80);
    }
  }, [location]);

  return (
    <section className="">
      <Carousel />
      <WhyChooseUs />
      <FeaturedPackages />
      <Services />
      <Testimonials />
      <AboutSection />
      <ContactSection />
      <CallToAction />
    </section>
  );
}
