import "./App.css";
import ContactUs from "./ContactUs";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="contact-us" element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
