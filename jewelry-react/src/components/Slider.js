import React from "react";

function Slider() {
  return (
    <div className="slider_area">
        <div className="single_slider" style={{ backgroundImage: "url('/images/slider/1.png')" }}>
            <div className="container">
            <div className="slider_content">
                <p>Exclusive Offer -20% Off This Week</p>
                <h1>Necklace</h1>
                <span>22 Carat Gold Necklace for Wedding</span>
                <a href="#" className="button">Shop Now</a>
            </div>
            </div>
      </div>
    </div>
  );
}

export default Slider;
