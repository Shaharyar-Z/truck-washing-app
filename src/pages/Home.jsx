import React from "react";
import Banner from "../components/Banner";
import Services from "../components/Services";
import About from "../components/About";
import Contactus from "../components/Contactus";
import Pricing from "../components/Pricing";

const Home = () => {
  
  return (
    <>
      <Banner />
      <Services />
      <About />
      <Pricing />
      <Contactus />
    </>
  );
};

export default Home;