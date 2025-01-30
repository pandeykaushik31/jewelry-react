import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../style.css";

const SliderComponent = () => {
  const sliderData = [
    {
      image: "/images/slider/1.png",
      offer: "Exclusive Offer - 20% Off This Week",
      title: "Necklace",
      description: "22 Carat gold necklace for wedding",
      price: "₹75,999",
      link: "#",
    },
    {
      image: "/images/slider/2.jpg",
      offer: "Exclusive Offer - 40% Off This Week",
      title: "Earrings and Pendant",
      description: "Complete bridal set with white pearls",
      price: "₹89,499",
      link: "#",
    },
    {
      image: "/images/slider/3.jpg",
      offer: "Exclusive Offer - 10% Off This Week",
      title: "Wedding Rings",
      description: "Ashirwaad Special wedding rings for couples.",
      price: "₹14,999",
      link: "#",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Auto slide enabled
    autoplaySpeed: 3000, // Slide every 3 seconds
    arrows: false,
    fade: true, // Enables smooth fade effect
    pauseOnHover: false, // Prevents stopping when hovered
    pauseOnFocus: false, // Prevents stopping when clicked
  };

  return (
    <div className="home_black_version">
      <section className="slider_area">
        <Slider {...settings}>
          {sliderData.map((slide, index) => (
            <div key={index} className="single_slider">
              {/* Use <img> instead of backgroundImage */}
              <img
                src={slide.image}
                alt={slide.title}
                style={{ width: "100%", height: "500px", objectFit: "cover" }}
              />
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-12">
                    <div className="slider_content">
                      <p>{slide.offer}</p>
                      <h1>{slide.title}</h1>
                      <span>{slide.description}</span>
                      <p className="slider_price">
                        Starting at <span>{slide.price}</span>
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
    </div>
  );
};

export default SliderComponent;
