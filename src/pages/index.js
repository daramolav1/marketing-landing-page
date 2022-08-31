import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Header toggle={toggle} />
    </>
  );
}

export default Home;
