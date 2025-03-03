import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { stickyNavbar } from "../main";

const Header = ({ cart, wishlist, setSelectedCategory }) => {
  const [user, setUser] = useState(null);
  const [isSticky, setIsSticky] = useState(false);
  const navigate = useNavigate();

  // Handle sticky navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Load user from localStorage
  useEffect(() => {
    stickyNavbar();
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) setUser(storedUser);
  }, []);

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/");
  };

  // Handle category selection
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    navigate("/products");
  };

  return (
    <header className={`header_area header_black `}>
      {/* Header Top */}
      <div className="header_top">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6">
              <div className="social_icone">
                <ul>
                  <li><a href="#"><i className="ion-social-facebook"></i></a></li>
                  <li><a href="#"><i className="ion-social-twitter"></i></a></li>
                  <li><a href="#"><i className="ion-social-instagram"></i></a></li>
                  <li><a href="#"><i className="ion-social-linkedin"></i></a></li>
                  <li><a href="#"><i className="ion-social-youtube"></i></a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="top_right text-right">
                <ul>
                  <li><a href="#">English <i className="ion-chevron-down"></i></a></li>
                  <li><a href="#">INR <i className="ion-chevron-down"></i></a></li>
                  {user ? (
                    <li><a href="#" onClick={(e) => { e.preventDefault(); handleLogout(); }}>Logout</a></li>
                  ) : (
                    <li><Link to="/login">Login</Link></li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Header Middle */}
      <div className="header_middel">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div className="home_contact">
                <div className="contact_icone">
                  <img src="/images/icon/icon_phone.png" alt="Phone Icon" />
                </div>
                <div className="contact_box">
                  <p>Inquiry / Helpline: <a href="tel:1234567894">1234567894</a></p>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-4">
              <div className="logo">
                <a href="/"><img src="/images/logo/logo-ash.png" alt="Logo" /></a>
              </div>
            </div>
            <div className="col-lg-5 col-md-7 col-6">
              <div className="middel_right">
                <div className="search_btn">
                  <a href="#"><i className="ion-ios-search-strong"></i></a>
                </div>
                <div className="wishlist_btn">
                  <Link to="/wishlist">❤️<span className="wishlist-count">({wishlist.length})</span></Link>
                </div>
                <div className="cart_link">
                  <Link to="/cart">🛒 Cart <span className="cart-count">({cart.length})</span></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Header Bottom - Main Navigation */}
      <div className={`header_bottom sticky-header ${isSticky ? "sticky-nav" : ""}`}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12">
              <div className="main_menu_inner">
                <div className="main_menu">
                  <nav>
                    <ul>
                      <li><Link to="/">Home</Link></li>
                      <li>
                        <a href="#">Category <i className="ion-chevron-down"></i></a>
                        <ul className="mega_menu">
                          <li>
                            <a href="#" onClick={() => handleCategoryClick("Women")}>Women</a>
                            <ul>
                              <li><a href="#" onClick={() => handleCategoryClick("Earrings")}>Earrings</a></li>
                              <li><a href="#" onClick={() => handleCategoryClick("Pendants")}>Pendants</a></li>
                              <li><a href="#" onClick={() => handleCategoryClick("Rings")}>Rings</a></li>
                              <li><a href="#" onClick={() => handleCategoryClick("Chains")}>Chains</a></li>
                              <li><a href="#" onClick={() => handleCategoryClick("Bangles")}>Bangles</a></li>
                            </ul>
                          </li>
                          <li>
                            <a href="#" onClick={() => handleCategoryClick("Men")}>Men</a>
                            <ul>
                              <li><a href="#" onClick={() => handleCategoryClick("Rings")}>Rings</a></li>
                              <li><a href="#" onClick={() => handleCategoryClick("Pendants")}>Pendants</a></li>
                              <li><a href="#" onClick={() => handleCategoryClick("Bracelets")}>Bracelets</a></li>
                              <li><a href="#" onClick={() => handleCategoryClick("Chains")}>Chains</a></li>
                              <li><a href="#" onClick={() => handleCategoryClick("Gemstones")}>Gemstones</a></li>
                            </ul>
                          </li>
                          <li>
                            <a href="#" onClick={() => handleCategoryClick("Other")}>Other</a>
                            <ul>
                              <li><a href="#" onClick={() => handleCategoryClick("Platinum")}>Platinum</a></li>
                              <li><a href="#" onClick={() => handleCategoryClick("Silver")}>Silver</a></li>
                              <li><a href="#" onClick={() => handleCategoryClick("Coins")}>Coins</a></li>
                              <li><a href="#" onClick={() => handleCategoryClick("Gift Cards")}>Gift Cards</a></li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li><Link to="/about">About Us</Link></li>
                      <li><Link to="/special-collection">Special Collection</Link></li>
                      {user ? (
                        <li><a href="#" onClick={handleLogout}>Logout</a></li>
                      ) : (
                        <li><Link to="/login">Login</Link></li>
                      )}
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
