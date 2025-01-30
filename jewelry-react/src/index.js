import "./style.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import { WOW } from "wowjs";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "owl.carousel";
import "slick-carousel";

new WOW().init(); // Ensure this runs after imports

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

