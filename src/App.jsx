import React from "react";
import Nav from "./components/common/Nav";
import Footer from "./components/common/Footer";
import Hero from "./components/homePage/Hero";
import ServicesSection from "./components/homePage/Services";
import PackagesSection from "./components/homePage/Packages";
import ContactSection from "./components/homePage/Contact";

import "./index.css";

function App() {
  return (
    <div className="App">
      <Hero />
      <ServicesSection />
      <PackagesSection />
      <ContactSection />
    </div>
  );
}

export default App;
