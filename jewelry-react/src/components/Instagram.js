import React from "react";
import "../style.css"; // Ensure your CSS for Instagram styles is imported

const Instagram = () => {
  const instagramData = [
    { image: "/images/instagram/insta-1.jpg" },
    { image: "/images/instagram/insta-2.jpg" },
    { image: "/images/instagram/insta-3.jpg" },
    { image: "/images/instagram/insta-4.jpg" },
    { image: "/images/instagram/insta-5.jpg" },
    { image: "/images/instagram/insta-6.jpg" },
  ];

  return (
    <div className="instagram">
      <div className="container-fluid">
        <div className="row">
          {instagramData.map((item, index) => (
            <div className="col-lg-2 col-md-4 col-sm-4 p-0" key={index}>
              <div
                className="instagram__item"
                style={{
                  backgroundImage: `url(${item.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="instagram__text">
                  <i className="ion-social-instagram"></i>
                  <a href="#">@ Ashirwaad</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Instagram;
