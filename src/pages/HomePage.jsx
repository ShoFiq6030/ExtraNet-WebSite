import React from "react";
import Nav from "../components/common/Nav";
import Carousel from "../components/homePage/Carousel";
import Footer from "../components/common/Footer";

export default function HomePage() {
  return (
    <section>
      <Nav />
      <Carousel />
      <Footer />
    </section>
  );
}
