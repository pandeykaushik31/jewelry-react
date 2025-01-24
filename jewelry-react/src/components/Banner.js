import React from "react";

function Banner() {
  return (
    <section className="banner_section">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="single_banner">
              <img src="/images/banner/bg-1.jpg" alt="Banner 1" />
              <div className="banner_content">
                <p>New Design</p>
                <h2>Small Design Rings</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
