import React from "react";
import Header from "./components/Header";
import Slider from "./components/Slider";
import Banner from "./components/Banner";
import ProductSection from "./components/ProductSection";
import Footer from "./components/Footer";
import Main from "./components/Main";
import "./style.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Slider />
      <Banner />
      <ProductSection />
      <Footer />
      <Main />
    </div>
  );
}

export default App;
