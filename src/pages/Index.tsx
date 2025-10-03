import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);

  const handleCarouselEnd = () => {
    setIsNavbarVisible(true);
  };

  return (
    <div className="min-h-screen">
      <Navbar isVisible={isNavbarVisible} />
      <Hero onCarouselEnd={handleCarouselEnd} />
      <About />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
