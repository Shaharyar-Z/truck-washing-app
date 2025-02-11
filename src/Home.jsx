import React from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Services from "./components/Services";
import About from "./components/About";
// import Reviews from "./components/Reviews";
import Contactus from "./components/Contactus";
import Footer from "./components/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Services />
      <About />
      {/* <Reviews /> */}
      <Contactus />
      <Footer />
    </div>
  );
};

export default Home;