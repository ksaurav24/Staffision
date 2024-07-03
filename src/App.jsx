import React from "react";
import Navbar from "./components/Navbar";
import "./roboto.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "./locomotive-scroll.css";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
function App() {
  const container = useRef(null);
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: container.current,
      smooth: true,
      multiplier: 1,
      class: "is-reveal",
    });
    return () => {
      if (scroll) scroll.destroy();
    };
  }, []);
  return (
    <div
      ref={container}
      data-scroll-container
      data-scroll
      className="data-scroll-container"
    >
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
