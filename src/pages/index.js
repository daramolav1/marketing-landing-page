import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Info from "../components/Info";
import { infoObj1, infoObj2, infoObj3 } from "../components/Info/Data";
import Services from "../components/Services";
import Footer from "../components/Footer";

function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Header toggle={toggle} />
      <Hero />
      <Info {...infoObj1} />
      <Info {...infoObj2} />
      <Services />
      <Info {...infoObj3} />
      <Footer />
    </>
  );
}

export default Home;
