import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Services from "./components/Services";
import About from "./components/About";
// import Reviews from "./components/Reviews";
import Contactus from "./components/Contactus";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      {/* header */}
      <Header />
      {/* banner */}
      <Banner />

      {/* servics */}
      <Services />

      {/* ABOUT */}
      <About />

      {/* reviews */}
      {/* <Reviews /> */}

      {/* contact */}
      <Contactus />

      {/* footer */}
      <Footer />
    </div>
  );
}

export default App;
