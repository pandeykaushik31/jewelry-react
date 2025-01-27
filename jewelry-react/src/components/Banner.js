import React from "react";

const Banner = () => {
  const banners = [
    {
      img: "images/banner/bg-1.jpg",
      alt: "banner1",
      label: "New Design",
      title: "Small design Rings",
      sale: "Sale 20%",
    },
    {
      img: "images/banner/bg-2.jpg",
      alt: "banner2",
      label: "Bestselling Rings",
      title: "White gold rings",
      sale: "Sale 10%",
    },
    {
      img: "images/banner/bg-3.jpg",
      alt: "banner3",
      label: "Featured Rings",
      title: "Platinium Rings",
      sale: "Sale 30%",
    },
  ];

  return (
    <section className="banner_section banner_black">
      <div className="container">
        <div className="row">
          {banners.map((banner, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <div className="single_banner">
                <div className="banner_thumb">
                  <a href="#">
                    <img src={banner.img} alt={banner.alt} />
                  </a>
                  <div className="banner_content">
                    <p>{banner.label}</p>
                    <h2>{banner.title}</h2>
                    <span>{banner.sale}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Banner;
