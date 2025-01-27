import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderComponent = () => {
  const sliderData = [
    {
      image: "images/slider/1.png",
      offer: "exclusive offer -20% off this week",
      title: "Necklace",
      description: "22 Carat gold necklace for wedding",
      price: "₹75,999",
      link: "#",
    },
    {
      image: "images/slider/2.jpg",
      offer: "exclusive offer -40% off this week",
      title: "Earings and Pendant",
      description: "Complete bridal set with white pearls",
      price: "₹89,499",
      link: "#",
    },
    {
      image: "images/slider/3.jpg",
      offer: "exclusive offer -10% off this week",
      title: "Wedding Rings",
      description: "Ashirwaad Special wedding rings for couples.",
      price: "₹14,999",
      link: "#",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="slider_area">
      <Slider {...settings}>
        {sliderData.map((slide, index) => (
          <div
            key={index}
            className="single_slider"
            style={{ backgroundImage: `url(/images/slider/1.png)` }}
          >
            <div className="container">
              <div className="row align-items-center">
                <div className="col-12">
                  <div className="slider_content">
                    <p>{slide.offer}</p>
                    <h1>{slide.title}</h1>
                    <span>{slide.description}</span>
                    <p className="slider_price">
                      starting at <span>{slide.price}</span>
                    </p>
                    <a href={slide.link} className="button">
                      Shop Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default SliderComponent;
