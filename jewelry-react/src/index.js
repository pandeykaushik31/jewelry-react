import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./style.css";
import "./main.js"; 

// ✅ Import Bootstrap, Carousel, and Animation Libraries
import $ from "jquery";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "owl.carousel";

// ✅ Ensure the root element exists before rendering
const rootElement = document.getElementById("root");

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />);
} else {
  console.error("Root element not found! Ensure index.html has <div id='root'></div>.");
}
