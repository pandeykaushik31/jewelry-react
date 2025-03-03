import React from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="footer_widgets footer_black">
      <div className="container">
        <div className="footer_top">
          <div className="row">
            {/* About Ashirwaad */}
            <div className="col-lg-4 col-md-6 col-sm-8">
              <div className="widgets_container contact_us">
                <h3>About Ashirwaad</h3>
                <div className="footer_contact">
                  <p>Address : Ashirwaad palace, Surat, Gujarat</p>
                  <p>
                    Phone : <a href="tel:(+91)888888885555">(+91)888888885555</a>
                  </p>
                  <p>Email : ashirwaadjewlers@gmail.com</p>
                  <ul>
                    <li>
                      <a href="#"><i className="ion-social-facebook"></i></a>
                    </li>
                    <li>
                      <a href="#"><i className="ion-social-twitter"></i></a>
                    </li>
                    <li>
                      <a href="#"><i className="ion-social-rss"></i></a>
                    </li>
                    <li>
                      <a href="#"><i className="ion-social-googleplus"></i></a>
                    </li>
                    <li>
                      <a href="#"><i className="ion-social-youtube"></i></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Information Section */}
            <div className="col-lg-2 col-md-6 col-sm-4 col-6">
              <div className="widgets_container widget_menu">
                <h3>Information</h3>
                <div className="footer_menu">
                  <ul>
                    <li><a href="#" onClick={() => navigate("/about")}>About Us</a></li>
                    <li><a href="#" onClick={() => navigate("/blog")}>Blog</a></li>
                    <li><a href="#" onClick={() => navigate("/contact")}>Contact</a></li>
                    <li><a href="#" onClick={() => navigate("/services")}>Services</a></li>
                    <li><a href="#" onClick={() => navigate("/collection")}>Collection</a></li>
                    <li><a href="#" onClick={() => navigate("/portfolio")}>Portfolio</a></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* My Account Section */}
            <div className="col-lg-2 col-md-6 col-sm-5 col-6">
              <div className="widgets_container widget_menu">
                <h3>My Account</h3>
                <div className="footer_menu">
                  <ul>
                    <li><a href="#" onClick={() => navigate("/account")}>My Account</a></li>
                    <li><a href="#" onClick={() => navigate("/contact")}>Contact</a></li>
                    <li><a href="#" onClick={() => navigate("/wishlist")}>Wishlist</a></li>
                    <li><a href="#" onClick={() => navigate("/portfolio")}>Portfolio</a></li>
                    <li><a href="#" onClick={() => navigate("/checkout")}>Checkout</a></li>
                    <li><a href="#" onClick={() => navigate("/faq")}>Frequently Questions</a></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Top Rated Products Section */}
            <div className="col-lg-4 col-md-6 col-sm-7">
              <div className="widgets_container product_widget">
                <h3>Top Rated Products</h3>
                <div className="simple_product">
                  <div className="simple_product_items">
                    <div className="simple_product_thumb">
                      <a href="#"><img src="images/product/14.jpg" alt="Product" /></a>
                    </div>
                    <div className="simple_product_content">
                      <div className="tag_cate">
                        <a href="#">Women,</a>
                        <a href="#">Earrings</a>
                      </div>
                      <div className="product_name">
                        <h3><a href="#">Bracelet</a></h3>
                      </div>
                      <div className="product_price">
                        <span className="old_price">Rs. 45612.54</span>
                        <span className="current_price">Rs. 41612.54</span>
                      </div>
                    </div>
                  </div>
                  <div className="simple_product_items">
                    <div className="simple_product_thumb">
                      <a href="#"><img src="images/product/28.jpg" alt="Product" /></a>
                    </div>
                    <div className="simple_product_content">
                      <div className="tag_cate">
                        <a href="#">Women,</a>
                        <a href="#">Earrings</a>
                      </div>
                      <div className="product_name">
                        <h3><a href="#">Ring</a></h3>
                      </div>
                      <div className="product_price">
                        <span className="old_price">Rs. 75612.54</span>
                        <span className="current_price">Rs. 71612.54</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Bottom Section */}
          <div className="footer_bottom">
            <div className="row">
              <div className="col-12">
                <div className="copyright_area">
                  <p>
                    Copyright &copy; {new Date().getFullYear()} <a href="#">ashirwaad</a> All rights Reserved.
                  </p>
                  <img src="images/icon/papyel2.png" alt="Payment Icons" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
