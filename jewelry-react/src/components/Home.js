import React, { useState } from "react"; // Correct import for useState
import { useNavigate } from "react-router-dom"; // Correct import for useNavigate
import { Link } from "react-router-dom";

const Header = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    navigate("/login");
  };
  return (
    <header className="header_area header_black home_black_version">
      {/* Header Top */}
      <div className="header_top">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6">
              <div className="social_icone">
                <ul>
                  <li>
                    <a href="#">
                      <i className="ion-social-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="ion-social-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="ion-social-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="ion-social-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="ion-social-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="top_right text-right">
                <ul>
                  <li className="top_links">
                    {!user ? (
                      <>
                        <li>
                          <Link to="/login">Login</Link>
                        </li>
                        <li>
                          <Link to="/register">Register</Link>
                        </li>
                      </>
                    ) : (
                      <>
                        <span>Welcome, {user.name}</span>
                        <button onClick={handleLogout}>Logout</button>
                      </>
                    )}
                  </li>
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
                  <p>
                    Inquiry / Helpline : <a href="tel:1234567894">1234567894</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-4">
              <div className="logo">
                <a href="index.html">
                  <img src="/images/logo/logo-ash.png" alt="Logo" />
                </a>
              </div>
            </div>
            <div className="col-lg-5 col-md-7 col-6">
              <div className="middel_right">
                <div className="search_btn">
                  <a href="#">
                    <i className="ion-ios-search-strong"></i>
                  </a>
                  <div className="dropdown_search">
                    <form action="#">
                      <input type="text" placeholder="Search Product ...." />
                      <button type="submit">
                        <i className="ion-ios-search-strong"></i>
                      </button>
                    </form>
                  </div>
                </div>
                <div className="wishlist_btn">
                  <a href="#">
                    <i className="ion-heart"></i>
                  </a>
                </div>
                <div className="cart_link">
                  <a href="#">
                    <i className="ion-android-cart"></i>
                    <span className="cart_text_quantity">Rs. 67,598</span>
                    <i className="ion-chevron-down"></i>
                  </a>
                  <span className="cart_quantity">2</span>
                  {/* Mini Cart */}
                  <div className="mini_cart">
                    <div className="cart_close">
                      <div className="cart_text">
                        <h3>Cart</h3>
                      </div>
                      <div className="mini_cart_close">
                        <a href="javascript:void(0)">
                          <i className="ion-android-close"></i>
                        </a>
                      </div>
                    </div>
                    <div className="cart_item">
                      <div className="cart_img">
                        <a href="#">
                          <img
                            src="/images/nav-product/product.jpg"
                            alt="Earings"
                          />
                        </a>
                      </div>
                      <div className="cart_info">
                        <a href="#">Earings</a>
                        <span className="quantity">Qty: 1</span>
                        <span className="price_cart">Rs. 54,599</span>
                      </div>
                      <div className="cart_remove">
                        <a href="#">
                          <i className="ion-android-close"></i>
                        </a>
                      </div>
                    </div>
                    <div className="cart_total">
                      <span>Subtotal:</span>
                      <span>Rs. 67,598</span>
                    </div>
                    <div className="mini_cart_footer">
                      <div className="cart_button view_cart">
                        <a href="#">View Cart</a>
                      </div>
                      <div className="cart_button checkout">
                        <a href="#" className="active">
                          Checkout
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* Mini Cart Ends */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Header Bottom */}
      <div className="header_bottom sticky-header">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12">
              <div className="main_menu_inner">
                <div className="logo_sticky">
                  <a href="#">
                    <img src="/images/logo/logo-ash.png" alt="Sticky Logo" />
                  </a>
                </div>
                <div className="main_menu">
                  <nav>
                    <ul>
                      <li className="active">
                        <a href="#">
                          Home <i className="ion-chevron-down"></i>
                        </a>
                        <ul className="sub_menu">
                          <li>
                            <a href="#">Banner</a>
                          </li>
                          <li>
                            <a href="#">Featured</a>
                          </li>
                          <li>
                            <a href="#">Collection</a>
                          </li>
                          <li>
                            <a href="#">Best Selling</a>
                          </li>
                          <li>
                            <a href="#">News</a>
                          </li>
                          <li>
                            <a href="#">Blog</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">
                          Category <i className="ion-chevron-down"></i>
                        </a>
                        <ul className="mega_menu">
                          <li>
                            <a href="#">Women</a>
                            <ul>
                              <li>
                                <a href="#">Earring</a>
                              </li>
                              <li>
                                <a href="#">Pendant</a>
                              </li>
                              <li>
                                <a href="#">Rings</a>
                              </li>
                              <li>
                                <a href="#">Chain</a>
                              </li>
                              <li>
                                <a href="#">Bangles</a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="#">Men</a>
                            <ul>
                              <li>
                                <a href="#">Ring</a>
                              </li>
                              <li>
                                <a href="#">Pendant</a>
                              </li>
                              <li>
                                <a href="#">Bracelet</a>
                              </li>
                              <li>
                                <a href="#">Chain</a>
                              </li>
                              <li>
                                <a href="#">Gemstone</a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="#">Other</a>
                            <ul>
                              <li>
                                <a href="#">Platinium</a>
                              </li>
                              <li>
                                <a href="#">Silver</a>
                              </li>
                              <li>
                                <a href="#">Coins</a>
                              </li>
                              <li>
                                <a href="#">Gift Card</a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">
                          Uncut Diamonds <i className="ion-chevron-down"></i>
                        </a>
                        <ul className="sub_menu pages">
                          <li>
                            <a href="#">Earrings</a>
                          </li>
                          <li>
                            <a href="#">Pendant</a>
                          </li>
                          <li>
                            <a href="#">Ring</a>
                          </li>
                          <li>
                            <a href="#">Bracelet</a>
                          </li>
                          <li>
                            <a href="#">Necklace Set</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">About Us</a>
                      </li>
                      <li>
                        <a href="#">
                          Special Collection{" "}
                          <i className="ion-chevron-down"></i>
                        </a>
                        <ul className="sub_menu pages">
                          <li>
                            <a href="#">Gemstone</a>
                          </li>
                          <li>
                            <a href="#">Gold</a>
                          </li>
                          <li>
                            <a href="#">Rose Gold</a>
                          </li>
                          <li>
                            <a href="#">Silver</a>
                          </li>
                        </ul>
                      </li>
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
