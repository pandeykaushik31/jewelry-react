import React from "react";

const ProductSection = () => {
  return (
    
    <section className="product_section p_section1 product_black_section">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="product_area">
            <div className="product_tab_button">
              <ul className="nav" role="tablist">
                <li>
                  <a
                    href="#featured"
                    className="active"
                    data-toggle="tab"
                    role="tab"
                    aria-controls="featured"
                    aria-selected="true"
                    >Featured</a
                  >
                </li>
                <li>
                  <a
                    href="#arrivals"
                    data-toggle="tab"
                    role="tab"
                    aria-controls="arrivals"
                    aria-selected="false"
                    >New Arrivals</a
                  >
                </li>
                <li>
                  <a
                    href="#onsale"
                    data-toggle="tab"
                    role="tab"
                    aria-controls="onsale"
                    aria-selected="false"
                    >On-Sale</a
                  >
                </li>
              </ul>
            </div>
            <div className="tab-content">
              <div
                className="tab-pane fade show active"
                id="featured"
                role="tabpane1"
              >
                <div className="product_container">
                  <div className="custom-row product_column3">
                    <div className="custom-col-5">
                      <div className="single_product">
                        <div className="product_thumb">
                          <a href="#" className="primary_img"
                            ><img src="images/product/1.jpg" alt="product1"
                          /></a>
                          <a href="#" className="secondary_img"
                            ><img src="images/product/2.jpg" alt="product1"
                          /></a>
                          <div className="quick_button">
                            <a
                              href="#"
                              data-toggle="modal"
                              data-target="#modal_box"
                              data-placement="top"
                              data-original-title="quick view"
                              >Quick View</a
                            >
                          </div>
                        </div>
                        <div className="product_content">
                          <div className="tag_cate">
                            <a href="#">Ring, Necklace</a>
                            <a href="#">Earrings</a>
                          </div>
                          <h3><a href="#">Necklace</a></h3>
                          <div className="price_box">
                            <span className="old_price">Rs. 45654</span>
                            <span className="current_price">Rs. 44015</span>
                          </div>
                          <div className="product_hover">
                            <div className="product_ratings">
                              <ul>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                              </ul>
                            </div>
                            <div className="product_desc">
                              <p>
                                This is a gold ring with diamond and Lorem ipsum
                                dolor sit amet.
                              </p>
                            </div>
                            <div className="action_links">
                              <ul>
                                <li>
                                  <a
                                    href="#"
                                    data-placement="top"
                                    title="Add to Wishlist"
                                    data-toggle="tooltip"
                                    ><span className="ion-heart"></span
                                  ></a>
                                </li>
                                <li className="add_to_cart">
                                  <a href="#" title="Add to Cart">Add to Cart</a>
                                </li>
                                <li>
                                  <a href="#" title="Compare"
                                    ><i className="ion-ios-settings-strong"></i
                                  ></a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
  
                    <div className="custom-col-5">
                      <div className="single_product">
                        <div className="product_thumb">
                          <a href="#" className="primary_img"
                            ><img src="images/product/3.jpg" alt="product1"
                          /></a>
                          <a href="#" className="secondary_img"
                            ><img src="images/product/4.jpg" alt="product1"
                          /></a>
                          <div className="quick_button">
                            <a
                              href="#"
                              data-toggle="modal"
                              data-target="#modal_box"
                              data-placement="top"
                              data-original-title="quick view"
                              >Quick View</a
                            >
                          </div>
                        </div>
                        <div className="product_content">
                          <div className="tag_cate">
                            <a href="#">Ring, Necklace</a>
                            <a href="#">Earrings</a>
                          </div>
                          <h3><a href="#">Earrings</a></h3>
                          <div className="price_box">
                            <span className="current_price">Rs. 45015</span>
                          </div>
                          <div className="product_hover">
                            <div className="product_ratings">
                              <ul>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                              </ul>
                            </div>
                            <div className="product_desc">
                              <p>
                                This is a gold ring with diamond and Lorem ipsum
                                dolor sit amet.
                              </p>
                            </div>
                            <div className="action_links">
                              <ul>
                                <li>
                                  <a
                                    href="#"
                                    data-placement="top"
                                    title="Add to Wishlist"
                                    data-toggle="tooltip"
                                    ><span className="ion-heart"></span
                                  ></a>
                                </li>
                                <li className="add_to_cart">
                                  <a href="#" title="Add to Cart">Add to Cart</a>
                                </li>
                                <li>
                                  <a href="#" title="Compare"
                                    ><i className="ion-ios-settings-strong"></i
                                  ></a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="custom-col-5">
                      <div className="single_product">
                        <div className="product_thumb">
                          <a href="#" className="primary_img"
                            ><img src="images/product/5.jpg" alt="product1"
                          /></a>
                          <a href="#" className="secondary_img"
                            ><img src="images/product/6.jpg" alt="product1"
                          /></a>
                          <div className="quick_button">
                            <a
                              href="#"
                              data-toggle="modal"
                              data-target="#modal_box"
                              data-placement="top"
                              data-original-title="quick view"
                              >Quick View</a
                            >
                          </div>
                        </div>
                        <div className="product_content">
                          <div className="tag_cate">
                            <a href="#">Ring, Necklace</a>
                            <a href="#">Earrings</a>
                          </div>
                          <h3><a href="#">Bracelet</a></h3>
                          <div className="price_box">
                            <span className="old_price">Rs. 75654</span>
                            <span className="current_price">Rs. 74015</span>
                          </div>
                          <div className="product_hover">
                            <div className="product_ratings">
                              <ul>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                              </ul>
                            </div>
                            <div className="product_desc">
                              <p>
                                This is a gold ring with diamond and Lorem ipsum
                                dolor sit amet.
                              </p>
                            </div>
                            <div className="action_links">
                              <ul>
                                <li>
                                  <a
                                    href="#"
                                    data-placement="top"
                                    title="Add to Wishlist"
                                    data-toggle="tooltip"
                                    ><span className="ion-heart"></span
                                  ></a>
                                </li>
                                <li className="add_to_cart">
                                  <a href="#" title="Add to Cart">Add to Cart</a>
                                </li>
                                <li>
                                  <a href="#" title="Compare"
                                    ><i className="ion-ios-settings-strong"></i
                                  ></a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="custom-col-5">
                      <div className="single_product">
                        <div className="product_thumb">
                          <a href="#" className="primary_img"
                            ><img src="images/product/7.jpg" alt="product1"
                          /></a>
                          <a href="#" className="secondary_img"
                            ><img src="images/product/8.jpg" alt="product1"
                          /></a>
                          <div className="quick_button">
                            <a
                              href="#"
                              data-toggle="modal"
                              data-target="#modal_box"
                              data-placement="top"
                              data-original-title="quick view"
                              >Quick View</a
                            >
                          </div>
                        </div>
                        <div className="product_content">
                          <div className="tag_cate">
                            <a href="#">Ring, Necklace</a>
                            <a href="#">Earrings</a>
                          </div>
                          <h3><a href="#">Bangles</a></h3>
                          <div className="price_box">
                            <span className="old_price">Rs. 45654</span>
                            <span className="current_price">Rs. 44015</span>
                          </div>
                          <div className="product_hover">
                            <div className="product_ratings">
                              <ul>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                              </ul>
                            </div>
                            <div className="product_desc">
                              <p>
                                This is a gold ring with diamond and Lorem ipsum
                                dolor sit amet.
                              </p>
                            </div>
                            <div className="action_links">
                              <ul>
                                <li>
                                  <a
                                    href="#"
                                    data-placement="top"
                                    title="Add to Wishlist"
                                    data-toggle="tooltip"
                                    ><span className="ion-heart"></span
                                  ></a>
                                </li>
                                <li className="add_to_cart">
                                  <a href="#" title="Add to Cart">Add to Cart</a>
                                </li>
                                <li>
                                  <a href="#" title="Compare"
                                    ><i className="ion-ios-settings-strong"></i
                                  ></a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="custom-col-5">
                      <div className="single_product">
                        <div className="product_thumb">
                          <a href="#" className="primary_img"
                            ><img src="images/product/9.jpg" alt="product1"
                          /></a>
                          <a href="#" className="secondary_img"
                            ><img src="images/product/10.jpg" alt="product1"
                          /></a>
                          <div className="quick_button">
                            <a
                              href="#"
                              data-toggle="modal"
                              data-target="#modal_box"
                              data-placement="top"
                              data-original-title="quick view"
                              >Quick View</a
                            >
                          </div>
                        </div>
                        <div className="product_content">
                          <div className="tag_cate">
                            <a href="#">Ring, Necklace</a>
                            <a href="#">Earrings</a>
                          </div>
                          <h3><a href="#">Gemstones</a></h3>
                          <div className="price_box">
                            <span className="old_price">Rs. 45654</span>
                            <span className="current_price">Rs. 44015</span>
                          </div>
                          <div className="product_hover">
                            <div className="product_ratings">
                              <ul>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                              </ul>
                            </div>
                            <div className="product_desc">
                              <p>
                                This is a gold ring with diamond and Lorem ipsum
                                dolor sit amet.
                              </p>
                            </div>
                            <div className="action_links">
                              <ul>
                                <li>
                                  <a
                                    href="#"
                                    data-placement="top"
                                    title="Add to Wishlist"
                                    data-toggle="tooltip"
                                    ><span className="ion-heart"></span
                                  ></a>
                                </li>
                                <li className="add_to_cart">
                                  <a href="#" title="Add to Cart">Add to Cart</a>
                                </li>
                                <li>
                                  <a href="#" title="Compare"
                                    ><i className="ion-ios-settings-strong"></i
                                  ></a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="custom-col-5">
                      <div className="single_product">
                        <div className="product_thumb">
                          <a href="#" className="primary_img"
                            ><img src="images/product/11.jpg" alt="product1"
                          /></a>
                          <a href="#" className="secondary_img"
                            ><img src="images/product/12.jpg" alt="product1"
                          /></a>
                          <div className="quick_button">
                            <a
                              href="#"
                              data-toggle="modal"
                              data-target="#modal_box"
                              data-placement="top"
                              data-original-title="quick view"
                              >Quick View</a
                            >
                          </div>
                        </div>
                        <div className="product_content">
                          <div className="tag_cate">
                            <a href="#">Ring, Necklace</a>
                            <a href="#">Earrings</a>
                          </div>
                          <h3><a href="#">Wedding set</a></h3>
                          <div className="price_box">
                            <span className="old_price">Rs. 45654</span>
                            <span className="current_price">Rs. 44015</span>
                          </div>
                          <div className="product_hover">
                            <div className="product_ratings">
                              <ul>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                              </ul>
                            </div>
                            <div className="product_desc">
                              <p>
                                This is a gold ring with diamond and Lorem ipsum
                                dolor sit amet.
                              </p>
                            </div>
                            <div className="action_links">
                              <ul>
                                <li>
                                  <a
                                    href="#"
                                    data-placement="top"
                                    title="Add to Wishlist"
                                    data-toggle="tooltip"
                                    ><span className="ion-heart"></span
                                  ></a>
                                </li>
                                <li className="add_to_cart">
                                  <a href="#" title="Add to Cart">Add to Cart</a>
                                </li>
                                <li>
                                  <a href="#" title="Compare"
                                    ><i className="ion-ios-settings-strong"></i
                                  ></a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="custom-col-5">
                      <div className="single_product">
                        <div className="product_thumb">
                          <a href="#" className="primary_img"
                            ><img src="images/product/13.jpg" alt="product1"
                          /></a>
                          <a href="#" className="secondary_img"
                            ><img src="images/product/14.jpg" alt="product1"
                          /></a>
                          <div className="quick_button">
                            <a
                              href="#"
                              data-toggle="modal"
                              data-target="#modal_box"
                              data-placement="top"
                              data-original-title="quick view"
                              >Quick View</a
                            >
                          </div>
                        </div>
                        <div className="product_content">
                          <div className="tag_cate">
                            <a href="#">Ring, Necklace</a>
                            <a href="#">Earrings</a>
                          </div>
                          <h3><a href="#">Nose Pin</a></h3>
                          <div className="price_box">
                            <span className="old_price">Rs. 45654</span>
                            <span className="current_price">Rs. 44015</span>
                          </div>
                          <div className="product_hover">
                            <div className="product_ratings">
                              <ul>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                              </ul>
                            </div>
                            <div className="product_desc">
                              <p>
                                This is a gold ring with diamond and Lorem ipsum
                                dolor sit amet.
                              </p>
                            </div>
                            <div className="action_links">
                              <ul>
                                <li>
                                  <a
                                    href="#"
                                    data-placement="top"
                                    title="Add to Wishlist"
                                    data-toggle="tooltip"
                                    ><span className="ion-heart"></span
                                  ></a>
                                </li>
                                <li className="add_to_cart">
                                  <a href="#" title="Add to Cart">Add to Cart</a>
                                </li>
                                <li>
                                  <a href="#" title="Compare"
                                    ><i className="ion-ios-settings-strong"></i
                                  ></a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="custom-col-5">
                      <div className="single_product">
                        <div className="product_thumb">
                          <a href="#" className="primary_img"
                            ><img src="images/product/15.jpg" alt="product1"
                          /></a>
                          <a href="#" className="secondary_img"
                            ><img src="images/product/16.jpg" alt="product1"
                          /></a>
                          <div className="quick_button">
                            <a
                              href="#"
                              data-toggle="modal"
                              data-target="#modal_box"
                              data-placement="top"
                              data-original-title="quick view"
                              >Quick View</a
                            >
                          </div>
                        </div>
                        <div className="product_content">
                          <div className="tag_cate">
                            <a href="#">Ring, Necklace</a>
                            <a href="#">Earrings</a>
                          </div>
                          <h3><a href="#">Diamonds</a></h3>
                          <div className="price_box">
                            <span className="old_price">Rs. 45654</span>
                            <span className="current_price">Rs. 44015</span>
                          </div>
                          <div className="product_hover">
                            <div className="product_ratings">
                              <ul>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                              </ul>
                            </div>
                            <div className="product_desc">
                              <p>
                                This is a gold ring with diamond and Lorem ipsum
                                dolor sit amet.
                              </p>
                            </div>
                            <div className="action_links">
                              <ul>
                                <li>
                                  <a
                                    href="#"
                                    data-placement="top"
                                    title="Add to Wishlist"
                                    data-toggle="tooltip"
                                    ><span className="ion-heart"></span
                                  ></a>
                                </li>
                                <li className="add_to_cart">
                                  <a href="#" title="Add to Cart">Add to Cart</a>
                                </li>
                                <li>
                                  <a href="#" title="Compare"
                                    ><i className="ion-ios-settings-strong"></i
                                  ></a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="custom-col-5">
                      <div className="single_product">
                        <div className="product_thumb">
                          <a href="#" className="primary_img"
                            ><img src="images/product/17.jpg" alt="product1"
                          /></a>
                          <a href="#" className="secondary_img"
                            ><img src="images/product/18.jpg" alt="product1"
                          /></a>
                          <div className="quick_button">
                            <a
                              href="#"
                              data-toggle="modal"
                              data-target="#modal_box"
                              data-placement="top"
                              data-original-title="quick view"
                              >Quick View</a
                            >
                          </div>
                        </div>
                        <div className="product_content">
                          <div className="tag_cate">
                            <a href="#">Ring, Necklace</a>
                            <a href="#">Earrings</a>
                          </div>
                          <h3><a href="#">Ring</a></h3>
                          <div className="price_box">
                            <span className="old_price">Rs. 45654</span>
                            <span className="current_price">Rs. 44015</span>
                          </div>
                          <div className="product_hover">
                            <div className="product_ratings">
                              <ul>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                              </ul>
                            </div>
                            <div className="product_desc">
                              <p>
                                This is a gold ring with diamond and Lorem ipsum
                                dolor sit amet.
                              </p>
                            </div>
                            <div className="action_links">
                              <ul>
                                <li>
                                  <a
                                    href="#"
                                    data-placement="top"
                                    title="Add to Wishlist"
                                    data-toggle="tooltip"
                                    ><span className="ion-heart"></span
                                  ></a>
                                </li>
                                <li className="add_to_cart">
                                  <a href="#" title="Add to Cart">Add to Cart</a>
                                </li>
                                <li>
                                  <a href="#" title="Compare"
                                    ><i className="ion-ios-settings-strong"></i
                                  ></a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="custom-col-5">
                      <div className="single_product">
                        <div className="product_thumb">
                          <a href="#" className="primary_img"
                            ><img src="images/product/19.jpg" alt="product1"
                          /></a>
                          <a href="#" className="secondary_img"
                            ><img src="images/product/20.jpg" alt="product1"
                          /></a>
                          <div className="quick_button">
                            <a
                              href="#"
                              data-toggle="modal"
                              data-target="#modal_box"
                              data-placement="top"
                              data-original-title="quick view"
                              >Quick View</a
                            >
                          </div>
                        </div>
                        <div className="product_content">
                          <div className="tag_cate">
                            <a href="#">Ring, Necklace</a>
                            <a href="#">Earrings</a>
                          </div>
                          <h3><a href="#">Couple Ring</a></h3>
                          <div className="price_box">
                            <span className="old_price">Rs. 45654</span>
                            <span className="current_price">Rs. 44015</span>
                          </div>
                          <div className="product_hover">
                            <div className="product_ratings">
                              <ul>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                              </ul>
                            </div>
                            <div className="product_desc">
                              <p>
                                This is a gold ring with diamond and Lorem ipsum
                                dolor sit amet.
                              </p>
                            </div>
                            <div className="action_links">
                              <ul>
                                <li>
                                  <a
                                    href="#"
                                    data-placement="top"
                                    title="Add to Wishlist"
                                    data-toggle="tooltip"
                                    ><span className="ion-heart"></span
                                  ></a>
                                </li>
                                <li className="add_to_cart">
                                  <a href="#" title="Add to Cart">Add to Cart</a>
                                </li>
                                <li>
                                  <a href="#" title="Compare"
                                    ><i className="ion-ios-settings-strong"></i
                                  ></a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="custom-col-5">
                      <div className="single_product">
                        <div className="product_thumb">
                          <a href="#" className="primary_img"
                            ><img src="images/product/21.jpg" alt="product1"
                          /></a>
                          <a href="#" className="secondary_img"
                            ><img src="images/product/22.jpg" alt="product1"
                          /></a>
                          <div className="quick_button">
                            <a
                              href="#"
                              data-toggle="modal"
                              data-target="#modal_box"
                              data-placement="top"
                              data-original-title="quick view"
                              >Quick View</a
                            >
                          </div>
                        </div>
                        <div className="product_content">
                          <div className="tag_cate">
                            <a href="#">Ring, Necklace</a>
                            <a href="#">Earrings</a>
                          </div>
                          <h3><a href="#">Bracelet</a></h3>
                          <div className="price_box">
                            <span className="old_price">Rs. 45654</span>
                            <span className="current_price">Rs. 44015</span>
                          </div>
                          <div className="product_hover">
                            <div className="product_ratings">
                              <ul>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                              </ul>
                            </div>
                            <div className="product_desc">
                              <p>
                                This is a gold ring with diamond and Lorem ipsum
                                dolor sit amet.
                              </p>
                            </div>
                            <div className="action_links">
                              <ul>
                                <li>
                                  <a
                                    href="#"
                                    data-placement="top"
                                    title="Add to Wishlist"
                                    data-toggle="tooltip"
                                    ><span className="ion-heart"></span
                                  ></a>
                                </li>
                                <li className="add_to_cart">
                                  <a href="#" title="Add to Cart">Add to Cart</a>
                                </li>
                                <li>
                                  <a href="#" title="Compare"
                                    ><i className="ion-ios-settings-strong"></i
                                  ></a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="custom-col-5">
                      <div className="single_product">
                        <div className="product_thumb">
                          <a href="#" className="primary_img"
                            ><img src="images/product/23.jpg" alt="product1"
                          /></a>
                          <a href="#" className="secondary_img"
                            ><img src="images/product/24.jpg" alt="product1"
                          /></a>
                          <div className="quick_button">
                            <a
                              href="#"
                              data-toggle="modal"
                              data-target="#modal_box"
                              data-placement="top"
                              data-original-title="quick view"
                              >Quick View</a
                            >
                          </div>
                        </div>
                        <div className="product_content">
                          <div className="tag_cate">
                            <a href="#">Ring, Necklace</a>
                            <a href="#">Earrings</a>
                          </div>
                          <h3><a href="#">Necklace Set</a></h3>
                          <div className="price_box">
                            <span className="old_price">Rs. 45654</span>
                            <span className="current_price">Rs. 44015</span>
                          </div>
                          <div className="product_hover">
                            <div className="product_ratings">
                              <ul>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                              </ul>
                            </div>
                            <div className="product_desc">
                              <p>
                                This is a gold ring with diamond and Lorem ipsum
                                dolor sit amet.
                              </p>
                            </div>
                            <div className="action_links">
                              <ul>
                                <li>
                                  <a
                                    href="#"
                                    data-placement="top"
                                    title="Add to Wishlist"
                                    data-toggle="tooltip"
                                    ><span className="ion-heart"></span
                                  ></a>
                                </li>
                                <li className="add_to_cart">
                                  <a href="#" title="Add to Cart">Add to Cart</a>
                                </li>
                                <li>
                                  <a href="#" title="Compare"
                                    ><i className="ion-ios-settings-strong"></i
                                  ></a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="arrivals" role="tabpane1">
                <div className="product_container">
                  <div className="custom-row product_column3">
                    <div className="custom-col-5">
                      <div className="single_product">
                        <div className="product_thumb">
                          <a href="#" className="primary_img"
                            ><img src="images/product/25.jpg" alt="product1"
                          /></a>
                          <a href="#" className="secondary_img"
                            ><img src="images/product/26.jpg" alt="product1"
                          /></a>
                          <div className="quick_button">
                            <a
                              href="#"
                              data-toggle="modal"
                              data-target="#modal_box"
                              data-placement="top"
                              data-original-title="quick view"
                              >Quick View</a
                            >
                          </div>
                        </div>
                        <div className="product_content">
                          <div className="tag_cate">
                            <a href="#">Ring, Necklace</a>
                            <a href="#">Earrings</a>
                          </div>
                          <h3><a href="#">Necklace</a></h3>
                          <div className="price_box">
                            <span className="old_price">Rs. 45654</span>
                            <span className="current_price">Rs. 44015</span>
                          </div>
                          <div className="product_hover">
                            <div className="product_ratings">
                              <ul>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                              </ul>
                            </div>
                            <div className="product_desc">
                              <p>
                                This is a gold ring with diamond and Lorem ipsum
                                dolor sit amet.
                              </p>
                            </div>
                            <div className="action_links">
                              <ul>
                                <li>
                                  <a
                                    href="#"
                                    data-placement="top"
                                    title="Add to Wishlist"
                                    data-toggle="tooltip"
                                    ><span className="ion-heart"></span
                                  ></a>
                                </li>
                                <li className="add_to_cart">
                                  <a href="#" title="Add to Cart">Add to Cart</a>
                                </li>
                                <li>
                                  <a href="#" title="Compare"
                                    ><i className="ion-ios-settings-strong"></i
                                  ></a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
  
                    <div className="custom-col-5">
                      <div className="single_product">
                        <div className="product_thumb">
                          <a href="#" className="primary_img"
                            ><img src="images/product/27.jpg" alt="product1"
                          /></a>
                          <a href="#" className="secondary_img"
                            ><img src="images/product/28.jpg" alt="product1"
                          /></a>
                          <div className="quick_button">
                            <a
                              href="#"
                              data-toggle="modal"
                              data-target="#modal_box"
                              data-placement="top"
                              data-original-title="quick view"
                              >Quick View</a
                            >
                          </div>
                        </div>
                        <div className="product_content">
                          <div className="tag_cate">
                            <a href="#">Ring, Necklace</a>
                            <a href="#">Earrings</a>
                          </div>
                          <h3><a href="#">Earrings</a></h3>
                          <div className="price_box">
                            <span className="current_price">Rs. 45015</span>
                          </div>
                          <div className="product_hover">
                            <div className="product_ratings">
                              <ul>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                              </ul>
                            </div>
                            <div className="product_desc">
                              <p>
                                This is a gold ring with diamond and Lorem ipsum
                                dolor sit amet.
                              </p>
                            </div>
                            <div className="action_links">
                              <ul>
                                <li>
                                  <a
                                    href="#"
                                    data-placement="top"
                                    title="Add to Wishlist"
                                    data-toggle="tooltip"
                                    ><span className="ion-heart"></span
                                  ></a>
                                </li>
                                <li className="add_to_cart">
                                  <a href="#" title="Add to Cart">Add to Cart</a>
                                </li>
                                <li>
                                  <a href="#" title="Compare"
                                    ><i className="ion-ios-settings-strong"></i
                                  ></a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="custom-col-5">
                      <div className="single_product">
                        <div className="product_thumb">
                          <a href="#" className="primary_img"
                            ><img src="images/product/29.jpg" alt="product1"
                          /></a>
                          <a href="#" className="secondary_img"
                            ><img src="images/product/30.jpg" alt="product1"
                          /></a>
                          <div className="quick_button">
                            <a
                              href="#"
                              data-toggle="modal"
                              data-target="#modal_box"
                              data-placement="top"
                              data-original-title="quick view"
                              >Quick View</a
                            >
                          </div>
                        </div>
                        <div className="product_content">
                          <div className="tag_cate">
                            <a href="#">Ring, Necklace</a>
                            <a href="#">Earrings</a>
                          </div>
                          <h3><a href="#">Bracelet</a></h3>
                          <div className="price_box">
                            <span className="old_price">Rs. 75654</span>
                            <span className="current_price">Rs. 74015</span>
                          </div>
                          <div className="product_hover">
                            <div className="product_ratings">
                              <ul>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                              </ul>
                            </div>
                            <div className="product_desc">
                              <p>
                                This is a gold ring with diamond and Lorem ipsum
                                dolor sit amet.
                              </p>
                            </div>
                            <div className="action_links">
                              <ul>
                                <li>
                                  <a
                                    href="#"
                                    data-placement="top"
                                    title="Add to Wishlist"
                                    data-toggle="tooltip"
                                    ><span className="ion-heart"></span
                                  ></a>
                                </li>
                                <li className="add_to_cart">
                                  <a href="#" title="Add to Cart">Add to Cart</a>
                                </li>
                                <li>
                                  <a href="#" title="Compare"
                                    ><i className="ion-ios-settings-strong"></i
                                  ></a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="custom-col-5">
                      <div className="single_product">
                        <div className="product_thumb">
                          <a href="#" className="primary_img"
                            ><img src="images/product/31.jpg" alt="product1"
                          /></a>
                          <a href="#" className="secondary_img"
                            ><img src="images/product/32.jpg" alt="product1"
                          /></a>
                          <div className="quick_button">
                            <a
                              href="#"
                              data-toggle="modal"
                              data-target="#modal_box"
                              data-placement="top"
                              data-original-title="quick view"
                              >Quick View</a
                            >
                          </div>
                        </div>
                        <div className="product_content">
                          <div className="tag_cate">
                            <a href="#">Ring, Necklace</a>
                            <a href="#">Earrings</a>
                          </div>
                          <h3><a href="#">Bangles</a></h3>
                          <div className="price_box">
                            <span className="old_price">Rs. 45654</span>
                            <span className="current_price">Rs. 44015</span>
                          </div>
                          <div className="product_hover">
                            <div className="product_ratings">
                              <ul>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                              </ul>
                            </div>
                            <div className="product_desc">
                              <p>
                                This is a gold ring with diamond and Lorem ipsum
                                dolor sit amet.
                              </p>
                            </div>
                            <div className="action_links">
                              <ul>
                                <li>
                                  <a
                                    href="#"
                                    data-placement="top"
                                    title="Add to Wishlist"
                                    data-toggle="tooltip"
                                    ><span className="ion-heart"></span
                                  ></a>
                                </li>
                                <li className="add_to_cart">
                                  <a href="#" title="Add to Cart">Add to Cart</a>
                                </li>
                                <li>
                                  <a href="#" title="Compare"
                                    ><i className="ion-ios-settings-strong"></i
                                  ></a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="custom-col-5">
                      <div className="single_product">
                        <div className="product_thumb">
                          <a href="#" className="primary_img"
                            ><img src="images/product/33.jpg" alt="product1"
                          /></a>
                          <a href="#" className="secondary_img"
                            ><img src="images/product/34.jpg" alt="product1"
                          /></a>
                          <div className="quick_button">
                            <a
                              href="#"
                              data-toggle="modal"
                              data-target="#modal_box"
                              data-placement="top"
                              data-original-title="quick view"
                              >Quick View</a
                            >
                          </div>
                        </div>
                        <div className="product_content">
                          <div className="tag_cate">
                            <a href="#">Ring, Necklace</a>
                            <a href="#">Earrings</a>
                          </div>
                          <h3><a href="#">Gemstones</a></h3>
                          <div className="price_box">
                            <span className="old_price">Rs. 45654</span>
                            <span className="current_price">Rs. 44015</span>
                          </div>
                          <div className="product_hover">
                            <div className="product_ratings">
                              <ul>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                              </ul>
                            </div>
                            <div className="product_desc">
                              <p>
                                This is a gold ring with diamond and Lorem ipsum
                                dolor sit amet.
                              </p>
                            </div>
                            <div className="action_links">
                              <ul>
                                <li>
                                  <a
                                    href="#"
                                    data-placement="top"
                                    title="Add to Wishlist"
                                    data-toggle="tooltip"
                                    ><span className="ion-heart"></span
                                  ></a>
                                </li>
                                <li className="add_to_cart">
                                  <a href="#" title="Add to Cart">Add to Cart</a>
                                </li>
                                <li>
                                  <a href="#" title="Compare"
                                    ><i className="ion-ios-settings-strong"></i
                                  ></a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="custom-col-5">
                      <div className="single_product">
                        <div className="product_thumb">
                          <a href="#" className="primary_img"
                            ><img src="images/product/35.jpg" alt="product1"
                          /></a>
                          <a href="#" className="secondary_img"
                            ><img src="images/product/36.jpg" alt="product1"
                          /></a>
                          <div className="quick_button">
                            <a
                              href="#"
                              data-toggle="modal"
                              data-target="#modal_box"
                              data-placement="top"
                              data-original-title="quick view"
                              >Quick View</a
                            >
                          </div>
                        </div>
                        <div className="product_content">
                          <div className="tag_cate">
                            <a href="#">Ring, Necklace</a>
                            <a href="#">Earrings</a>
                          </div>
                          <h3><a href="#">Wedding set</a></h3>
                          <div className="price_box">
                            <span className="old_price">Rs. 45654</span>
                            <span className="current_price">Rs. 44015</span>
                          </div>
                          <div className="product_hover">
                            <div className="product_ratings">
                              <ul>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                              </ul>
                            </div>
                            <div className="product_desc">
                              <p>
                                This is a gold ring with diamond and Lorem ipsum
                                dolor sit amet.
                              </p>
                            </div>
                            <div className="action_links">
                              <ul>
                                <li>
                                  <a
                                    href="#"
                                    data-placement="top"
                                    title="Add to Wishlist"
                                    data-toggle="tooltip"
                                    ><span className="ion-heart"></span
                                  ></a>
                                </li>
                                <li className="add_to_cart">
                                  <a href="#" title="Add to Cart">Add to Cart</a>
                                </li>
                                <li>
                                  <a href="#" title="Compare"
                                    ><i className="ion-ios-settings-strong"></i
                                  ></a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="custom-col-5">
                      <div className="single_product">
                        <div className="product_thumb">
                          <a href="#" className="primary_img"
                            ><img src="images/product/37.jpg" alt="product1"
                          /></a>
                          <a href="#" className="secondary_img"
                            ><img src="images/product/38.jpg" alt="product1"
                          /></a>
                          <div className="quick_button">
                            <a
                              href="#"
                              data-toggle="modal"
                              data-target="#modal_box"
                              data-placement="top"
                              data-original-title="quick view"
                              >Quick View</a
                            >
                          </div>
                        </div>
                        <div className="product_content">
                          <div className="tag_cate">
                            <a href="#">Ring, Necklace</a>
                            <a href="#">Earrings</a>
                          </div>
                          <h3><a href="#">Nose Pin</a></h3>
                          <div className="price_box">
                            <span className="old_price">Rs. 45654</span>
                            <span className="current_price">Rs. 44015</span>
                          </div>
                          <div className="product_hover">
                            <div className="product_ratings">
                              <ul>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                              </ul>
                            </div>
                            <div className="product_desc">
                              <p>
                                This is a gold ring with diamond and Lorem ipsum
                                dolor sit amet.
                              </p>
                            </div>
                            <div className="action_links">
                              <ul>
                                <li>
                                  <a
                                    href="#"
                                    data-placement="top"
                                    title="Add to Wishlist"
                                    data-toggle="tooltip"
                                    ><span className="ion-heart"></span
                                  ></a>
                                </li>
                                <li className="add_to_cart">
                                  <a href="#" title="Add to Cart">Add to Cart</a>
                                </li>
                                <li>
                                  <a href="#" title="Compare"
                                    ><i className="ion-ios-settings-strong"></i
                                  ></a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="custom-col-5">
                      <div className="single_product">
                        <div className="product_thumb">
                          <a href="#" className="primary_img"
                            ><img src="images/product/39.jpg" alt="product1"
                          /></a>
                          <a href="#" className="secondary_img"
                            ><img src="images/product/40.jpg" alt="product1"
                          /></a>
                          <div className="quick_button">
                            <a
                              href="#"
                              data-toggle="modal"
                              data-target="#modal_box"
                              data-placement="top"
                              data-original-title="quick view"
                              >Quick View</a
                            >
                          </div>
                        </div>
                        <div className="product_content">
                          <div className="tag_cate">
                            <a href="#">Ring, Necklace</a>
                            <a href="#">Earrings</a>
                          </div>
                          <h3><a href="#">Diamonds</a></h3>
                          <div className="price_box">
                            <span className="old_price">Rs. 45654</span>
                            <span className="current_price">Rs. 44015</span>
                          </div>
                          <div className="product_hover">
                            <div className="product_ratings">
                              <ul>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                              </ul>
                            </div>
                            <div className="product_desc">
                              <p>
                                This is a gold ring with diamond and Lorem ipsum
                                dolor sit amet.
                              </p>
                            </div>
                            <div className="action_links">
                              <ul>
                                <li>
                                  <a
                                    href="#"
                                    data-placement="top"
                                    title="Add to Wishlist"
                                    data-toggle="tooltip"
                                    ><span className="ion-heart"></span
                                  ></a>
                                </li>
                                <li className="add_to_cart">
                                  <a href="#" title="Add to Cart">Add to Cart</a>
                                </li>
                                <li>
                                  <a href="#" title="Compare"
                                    ><i className="ion-ios-settings-strong"></i
                                  ></a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="custom-col-5">
                      <div className="single_product">
                        <div className="product_thumb">
                          <a href="#" className="primary_img"
                            ><img src="images/product/41.jpg" alt="product1"
                          /></a>
                          <a href="#" className="secondary_img"
                            ><img src="images/product/42.jpg" alt="product1"
                          /></a>
                          <div className="quick_button">
                            <a
                              href="#"
                              data-toggle="modal"
                              data-target="#modal_box"
                              data-placement="top"
                              data-original-title="quick view"
                              >Quick View</a
                            >
                          </div>
                        </div>
                        <div className="product_content">
                          <div className="tag_cate">
                            <a href="#">Ring, Necklace</a>
                            <a href="#">Earrings</a>
                          </div>
                          <h3><a href="#">Ring</a></h3>
                          <div className="price_box">
                            <span className="old_price">Rs. 45654</span>
                            <span className="current_price">Rs. 44015</span>
                          </div>
                          <div className="product_hover">
                            <div className="product_ratings">
                              <ul>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                              </ul>
                            </div>
                            <div className="product_desc">
                              <p>
                                This is a gold ring with diamond and Lorem ipsum
                                dolor sit amet.
                              </p>
                            </div>
                            <div className="action_links">
                              <ul>
                                <li>
                                  <a
                                    href="#"
                                    data-placement="top"
                                    title="Add to Wishlist"
                                    data-toggle="tooltip"
                                    ><span className="ion-heart"></span
                                  ></a>
                                </li>
                                <li className="add_to_cart">
                                  <a href="#" title="Add to Cart">Add to Cart</a>
                                </li>
                                <li>
                                  <a href="#" title="Compare"
                                    ><i className="ion-ios-settings-strong"></i
                                  ></a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="custom-col-5">
                      <div className="single_product">
                        <div className="product_thumb">
                          <a href="#" className="primary_img"
                            ><img src="images/product/43.jpg" alt="product1"
                          /></a>
                          <a href="#" className="secondary_img"
                            ><img src="images/product/44.jpg" alt="product1"
                          /></a>
                          <div className="quick_button">
                            <a
                              href="#"
                              data-toggle="modal"
                              data-target="#modal_box"
                              data-placement="top"
                              data-original-title="quick view"
                              >Quick View</a
                            >
                          </div>
                        </div>
                        <div className="product_content">
                          <div className="tag_cate">
                            <a href="#">Ring, Necklace</a>
                            <a href="#">Earrings</a>
                          </div>
                          <h3><a href="#">Couple Ring</a></h3>
                          <div className="price_box">
                            <span className="old_price">Rs. 45654</span>
                            <span className="current_price">Rs. 44015</span>
                          </div>
                          <div className="product_hover">
                            <div className="product_ratings">
                              <ul>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                              </ul>
                            </div>
                            <div className="product_desc">
                              <p>
                                This is a gold ring with diamond and Lorem ipsum
                                dolor sit amet.
                              </p>
                            </div>
                            <div className="action_links">
                              <ul>
                                <li>
                                  <a
                                    href="#"
                                    data-placement="top"
                                    title="Add to Wishlist"
                                    data-toggle="tooltip"
                                    ><span className="ion-heart"></span
                                  ></a>
                                </li>
                                <li className="add_to_cart">
                                  <a href="#" title="Add to Cart">Add to Cart</a>
                                </li>
                                <li>
                                  <a href="#" title="Compare"
                                    ><i className="ion-ios-settings-strong"></i
                                  ></a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="custom-col-5">
                      <div className="single_product">
                        <div className="product_thumb">
                          <a href="#" className="primary_img"
                            ><img src="images/product/45.jpg" alt="product1"
                          /></a>
                          <a href="#" className="secondary_img"
                            ><img src="images/product/46.jpg" alt="product1"
                          /></a>
                          <div className="quick_button">
                            <a
                              href="#"
                              data-toggle="modal"
                              data-target="#modal_box"
                              data-placement="top"
                              data-original-title="quick view"
                              >Quick View</a
                            >
                          </div>
                        </div>
                        <div className="product_content">
                          <div className="tag_cate">
                            <a href="#">Ring, Necklace</a>
                            <a href="#">Earrings</a>
                          </div>
                          <h3><a href="#">Bracelet</a></h3>
                          <div className="price_box">
                            <span className="old_price">Rs. 45654</span>
                            <span className="current_price">Rs. 44015</span>
                          </div>
                          <div className="product_hover">
                            <div className="product_ratings">
                              <ul>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                              </ul>
                            </div>
                            <div className="product_desc">
                              <p>
                                This is a gold ring with diamond and Lorem ipsum
                                dolor sit amet.
                              </p>
                            </div>
                            <div className="action_links">
                              <ul>
                                <li>
                                  <a
                                    href="#"
                                    data-placement="top"
                                    title="Add to Wishlist"
                                    data-toggle="tooltip"
                                    ><span className="ion-heart"></span
                                  ></a>
                                </li>
                                <li className="add_to_cart">
                                  <a href="#" title="Add to Cart">Add to Cart</a>
                                </li>
                                <li>
                                  <a href="#" title="Compare"
                                    ><i className="ion-ios-settings-strong"></i
                                  ></a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="custom-col-5">
                      <div className="single_product">
                        <div className="product_thumb">
                          <a href="#" className="primary_img"
                            ><img src="images/product/47.jpg" alt="product1"
                          /></a>
                          <a href="#" className="secondary_img"
                            ><img src="images/product/48.jpg" alt="product1"
                          /></a>
                          <div className="quick_button">
                            <a
                              href="#"
                              data-toggle="modal"
                              data-target="#modal_box"
                              data-placement="top"
                              data-original-title="quick view"
                              >Quick View</a
                            >
                          </div>
                        </div>
                        <div className="product_content">
                          <div className="tag_cate">
                            <a href="#">Ring, Necklace</a>
                            <a href="#">Earrings</a>
                          </div>
                          <h3><a href="#">Necklace Set</a></h3>
                          <div className="price_box">
                            <span className="old_price">Rs. 45654</span>
                            <span className="current_price">Rs. 44015</span>
                          </div>
                          <div className="product_hover">
                            <div className="product_ratings">
                              <ul>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                              </ul>
                            </div>
                            <div className="product_desc">
                              <p>
                                This is a gold ring with diamond and Lorem ipsum
                                dolor sit amet.
                              </p>
                            </div>
                            <div className="action_links">
                              <ul>
                                <li>
                                  <a
                                    href="#"
                                    data-placement="top"
                                    title="Add to Wishlist"
                                    data-toggle="tooltip"
                                    ><span className="ion-heart"></span
                                  ></a>
                                </li>
                                <li className="add_to_cart">
                                  <a href="#" title="Add to Cart">Add to Cart</a>
                                </li>
                                <li>
                                  <a href="#" title="Compare"
                                    ><i className="ion-ios-settings-strong"></i
                                  ></a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="onsale" role="tabpane1">
                <div className="product_container">
                  <div className="custom-row product_column3">
                    <div className="custom-col-5">
                      <div className="single_product">
                        <div className="product_thumb">
                          <a href="#" className="primary_img"
                            ><img src="images/product/49.jpg" alt="product1"
                          /></a>
                          <a href="#" className="secondary_img"
                            ><img src="images/product/50.jpg" alt="product1"
                          /></a>
                          <div className="quick_button">
                            <a
                              href="#"
                              data-toggle="modal"
                              data-target="#modal_box"
                              data-placement="top"
                              data-original-title="quick view"
                              >Quick View</a
                            >
                          </div>
                        </div>
                        <div className="product_content">
                          <div className="tag_cate">
                            <a href="#">Ring, Necklace</a>
                            <a href="#">Earrings</a>
                          </div>
                          <h3><a href="#">Necklace</a></h3>
                          <div className="price_box">
                            <span className="old_price">Rs. 45654</span>
                            <span className="current_price">Rs. 44015</span>
                          </div>
                          <div className="product_hover">
                            <div className="product_ratings">
                              <ul>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                              </ul>
                            </div>
                            <div className="product_desc">
                              <p>
                                This is a gold ring with diamond and Lorem ipsum
                                dolor sit amet.
                              </p>
                            </div>
                            <div className="action_links">
                              <ul>
                                <li>
                                  <a
                                    href="#"
                                    data-placement="top"
                                    title="Add to Wishlist"
                                    data-toggle="tooltip"
                                    ><span className="ion-heart"></span
                                  ></a>
                                </li>
                                <li className="add_to_cart">
                                  <a href="#" title="Add to Cart">Add to Cart</a>
                                </li>
                                <li>
                                  <a href="#" title="Compare"
                                    ><i className="ion-ios-settings-strong"></i
                                  ></a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
  
                    <div className="custom-col-5">
                      <div className="single_product">
                        <div className="product_thumb">
                          <a href="#" className="primary_img"
                            ><img src="images/product/2.jpg" alt="product1"
                          /></a>
                          <a href="#" className="secondary_img"
                            ><img src="images/product/3.jpg" alt="product1"
                          /></a>
                          <div className="quick_button">
                            <a
                              href="#"
                              data-toggle="modal"
                              data-target="#modal_box"
                              data-placement="top"
                              data-original-title="quick view"
                              >Quick View</a
                            >
                          </div>
                        </div>
                        <div className="product_content">
                          <div className="tag_cate">
                            <a href="#">Ring, Necklace</a>
                            <a href="#">Earrings</a>
                          </div>
                          <h3><a href="#">Earrings</a></h3>
                          <div className="price_box">
                            <span className="current_price">Rs. 45015</span>
                          </div>
                          <div className="product_hover">
                            <div className="product_ratings">
                              <ul>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                              </ul>
                            </div>
                            <div className="product_desc">
                              <p>
                                This is a gold ring with diamond and Lorem ipsum
                                dolor sit amet.
                              </p>
                            </div>
                            <div className="action_links">
                              <ul>
                                <li>
                                  <a
                                    href="#"
                                    data-placement="top"
                                    title="Add to Wishlist"
                                    data-toggle="tooltip"
                                    ><span className="ion-heart"></span
                                  ></a>
                                </li>
                                <li className="add_to_cart">
                                  <a href="#" title="Add to Cart">Add to Cart</a>
                                </li>
                                <li>
                                  <a href="#" title="Compare"
                                    ><i className="ion-ios-settings-strong"></i
                                  ></a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="custom-col-5">
                      <div className="single_product">
                        <div className="product_thumb">
                          <a href="#" className="primary_img"
                            ><img src="images/product/4.jpg" alt="product1"
                          /></a>
                          <a href="#" className="secondary_img"
                            ><img src="images/product/5.jpg" alt="product1"
                          /></a>
                          <div className="quick_button">
                            <a
                              href="#"
                              data-toggle="modal"
                              data-target="#modal_box"
                              data-placement="top"
                              data-original-title="quick view"
                              >Quick View</a
                            >
                          </div>
                        </div>
                        <div className="product_content">
                          <div className="tag_cate">
                            <a href="#">Ring, Necklace</a>
                            <a href="#">Earrings</a>
                          </div>
                          <h3><a href="#">Bracelet</a></h3>
                          <div className="price_box">
                            <span className="old_price">Rs. 75654</span>
                            <span className="current_price">Rs. 74015</span>
                          </div>
                          <div className="product_hover">
                            <div className="product_ratings">
                              <ul>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                              </ul>
                            </div>
                            <div className="product_desc">
                              <p>
                                This is a gold ring with diamond and Lorem ipsum
                                dolor sit amet.
                              </p>
                            </div>
                            <div className="action_links">
                              <ul>
                                <li>
                                  <a
                                    href="#"
                                    data-placement="top"
                                    title="Add to Wishlist"
                                    data-toggle="tooltip"
                                    ><span className="ion-heart"></span
                                  ></a>
                                </li>
                                <li className="add_to_cart">
                                  <a href="#" title="Add to Cart">Add to Cart</a>
                                </li>
                                <li>
                                  <a href="#" title="Compare"
                                    ><i className="ion-ios-settings-strong"></i
                                  ></a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="custom-col-5">
                      <div className="single_product">
                        <div className="product_thumb">
                          <a href="#" className="primary_img"
                            ><img src="images/product/6.jpg" alt="product1"
                          /></a>
                          <a href="#" className="secondary_img"
                            ><img src="images/product/7.jpg" alt="product1"
                          /></a>
                          <div className="quick_button">
                            <a
                              href="#"
                              data-toggle="modal"
                              data-target="#modal_box"
                              data-placement="top"
                              data-original-title="quick view"
                              >Quick View</a
                            >
                          </div>
                        </div>
                        <div className="product_content">
                          <div className="tag_cate">
                            <a href="#">Ring, Necklace</a>
                            <a href="#">Earrings</a>
                          </div>
                          <h3><a href="#">Bangles</a></h3>
                          <div className="price_box">
                            <span className="old_price">Rs. 45654</span>
                            <span className="current_price">Rs. 44015</span>
                          </div>
                          <div className="product_hover">
                            <div className="product_ratings">
                              <ul>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                              </ul>
                            </div>
                            <div className="product_desc">
                              <p>
                                This is a gold ring with diamond and Lorem ipsum
                                dolor sit amet.
                              </p>
                            </div>
                            <div className="action_links">
                              <ul>
                                <li>
                                  <a
                                    href="#"
                                    data-placement="top"
                                    title="Add to Wishlist"
                                    data-toggle="tooltip"
                                    ><span className="ion-heart"></span
                                  ></a>
                                </li>
                                <li className="add_to_cart">
                                  <a href="#" title="Add to Cart">Add to Cart</a>
                                </li>
                                <li>
                                  <a href="#" title="Compare"
                                    ><i className="ion-ios-settings-strong"></i
                                  ></a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="custom-col-5">
                      <div className="single_product">
                        <div className="product_thumb">
                          <a href="#" className="primary_img"
                            ><img src="images/product/8.jpg" alt="product1"
                          /></a>
                          <a href="#" className="secondary_img"
                            ><img src="images/product/9.jpg" alt="product1"
                          /></a>
                          <div className="quick_button">
                            <a
                              href="#"
                              data-toggle="modal"
                              data-target="#modal_box"
                              data-placement="top"
                              data-original-title="quick view"
                              >Quick View</a
                            >
                          </div>
                        </div>
                        <div className="product_content">
                          <div className="tag_cate">
                            <a href="#">Ring, Necklace</a>
                            <a href="#">Earrings</a>
                          </div>
                          <h3><a href="#">Gemstones</a></h3>
                          <div className="price_box">
                            <span className="old_price">Rs. 45654</span>
                            <span className="current_price">Rs. 44015</span>
                          </div>
                          <div className="product_hover">
                            <div className="product_ratings">
                              <ul>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                              </ul>
                            </div>
                            <div className="product_desc">
                              <p>
                                This is a gold ring with diamond and Lorem ipsum
                                dolor sit amet.
                              </p>
                            </div>
                            <div className="action_links">
                              <ul>
                                <li>
                                  <a
                                    href="#"
                                    data-placement="top"
                                    title="Add to Wishlist"
                                    data-toggle="tooltip"
                                    ><span className="ion-heart"></span
                                  ></a>
                                </li>
                                <li className="add_to_cart">
                                  <a href="#" title="Add to Cart">Add to Cart</a>
                                </li>
                                <li>
                                  <a href="#" title="Compare"
                                    ><i className="ion-ios-settings-strong"></i
                                  ></a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="custom-col-5">
                      <div className="single_product">
                        <div className="product_thumb">
                          <a href="#" className="primary_img"
                            ><img src="images/product/10.jpg" alt="product1"
                          /></a>
                          <a href="#" className="secondary_img"
                            ><img src="images/product/11.jpg" alt="product1"
                          /></a>
                          <div className="quick_button">
                            <a
                              href="#"
                              data-toggle="modal"
                              data-target="#modal_box"
                              data-placement="top"
                              data-original-title="quick view"
                              >Quick View</a
                            >
                          </div>
                        </div>
                        <div className="product_content">
                          <div className="tag_cate">
                            <a href="#">Ring, Necklace</a>
                            <a href="#">Earrings</a>
                          </div>
                          <h3><a href="#">Wedding set</a></h3>
                          <div className="price_box">
                            <span className="old_price">Rs. 45654</span>
                            <span className="current_price">Rs. 44015</span>
                          </div>
                          <div className="product_hover">
                            <div className="product_ratings">
                              <ul>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                              </ul>
                            </div>
                            <div className="product_desc">
                              <p>
                                This is a gold ring with diamond and Lorem ipsum
                                dolor sit amet.
                              </p>
                            </div>
                            <div className="action_links">
                              <ul>
                                <li>
                                  <a
                                    href="#"
                                    data-placement="top"
                                    title="Add to Wishlist"
                                    data-toggle="tooltip"
                                    ><span className="ion-heart"></span
                                  ></a>
                                </li>
                                <li className="add_to_cart">
                                  <a href="#" title="Add to Cart">Add to Cart</a>
                                </li>
                                <li>
                                  <a href="#" title="Compare"
                                    ><i className="ion-ios-settings-strong"></i
                                  ></a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="custom-col-5">
                      <div className="single_product">
                        <div className="product_thumb">
                          <a href="#" className="primary_img"
                            ><img src="images/product/12.jpg" alt="product1"
                          /></a>
                          <a href="#" className="secondary_img"
                            ><img src="images/product/13.jpg" alt="product1"
                          /></a>
                          <div className="quick_button">
                            <a
                              href="#"
                              data-toggle="modal"
                              data-target="#modal_box"
                              data-placement="top"
                              data-original-title="quick view"
                              >Quick View</a
                            >
                          </div>
                        </div>
                        <div className="product_content">
                          <div className="tag_cate">
                            <a href="#">Ring, Necklace</a>
                            <a href="#">Earrings</a>
                          </div>
                          <h3><a href="#">Nose Pin</a></h3>
                          <div className="price_box">
                            <span className="old_price">Rs. 45654</span>
                            <span className="current_price">Rs. 44015</span>
                          </div>
                          <div className="product_hover">
                            <div className="product_ratings">
                              <ul>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                              </ul>
                            </div>
                            <div className="product_desc">
                              <p>
                                This is a gold ring with diamond and Lorem ipsum
                                dolor sit amet.
                              </p>
                            </div>
                            <div className="action_links">
                              <ul>
                                <li>
                                  <a
                                    href="#"
                                    data-placement="top"
                                    title="Add to Wishlist"
                                    data-toggle="tooltip"
                                    ><span className="ion-heart"></span
                                  ></a>
                                </li>
                                <li className="add_to_cart">
                                  <a href="#" title="Add to Cart">Add to Cart</a>
                                </li>
                                <li>
                                  <a href="#" title="Compare"
                                    ><i className="ion-ios-settings-strong"></i
                                  ></a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="custom-col-5">
                      <div className="single_product">
                        <div className="product_thumb">
                          <a href="#" className="primary_img"
                            ><img src="images/product/14.jpg" alt="product1"
                          /></a>
                          <a href="#" className="secondary_img"
                            ><img src="images/product/15.jpg" alt="product1"
                          /></a>
                          <div className="quick_button">
                            <a
                              href="#"
                              data-toggle="modal"
                              data-target="#modal_box"
                              data-placement="top"
                              data-original-title="quick view"
                              >Quick View</a
                            >
                          </div>
                        </div>
                        <div className="product_content">
                          <div className="tag_cate">
                            <a href="#">Ring, Necklace</a>
                            <a href="#">Earrings</a>
                          </div>
                          <h3><a href="#">Diamonds</a></h3>
                          <div className="price_box">
                            <span className="old_price">Rs. 45654</span>
                            <span className="current_price">Rs. 44015</span>
                          </div>
                          <div className="product_hover">
                            <div className="product_ratings">
                              <ul>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                              </ul>
                            </div>
                            <div className="product_desc">
                              <p>
                                This is a gold ring with diamond and Lorem ipsum
                                dolor sit amet.
                              </p>
                            </div>
                            <div className="action_links">
                              <ul>
                                <li>
                                  <a
                                    href="#"
                                    data-placement="top"
                                    title="Add to Wishlist"
                                    data-toggle="tooltip"
                                    ><span className="ion-heart"></span
                                  ></a>
                                </li>
                                <li className="add_to_cart">
                                  <a href="#" title="Add to Cart">Add to Cart</a>
                                </li>
                                <li>
                                  <a href="#" title="Compare"
                                    ><i className="ion-ios-settings-strong"></i
                                  ></a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="custom-col-5">
                      <div className="single_product">
                        <div className="product_thumb">
                          <a href="#" className="primary_img"
                            ><img src="images/product/16.jpg" alt="product1"
                          /></a>
                          <a href="#" className="secondary_img"
                            ><img src="images/product/17.jpg" alt="product1"
                          /></a>
                          <div className="quick_button">
                            <a
                              href="#"
                              data-toggle="modal"
                              data-target="#modal_box"
                              data-placement="top"
                              data-original-title="quick view"
                              >Quick View</a
                            >
                          </div>
                        </div>
                        <div className="product_content">
                          <div className="tag_cate">
                            <a href="#">Ring, Necklace</a>
                            <a href="#">Earrings</a>
                          </div>
                          <h3><a href="#">Ring</a></h3>
                          <div className="price_box">
                            <span className="old_price">Rs. 45654</span>
                            <span className="current_price">Rs. 44015</span>
                          </div>
                          <div className="product_hover">
                            <div className="product_ratings">
                              <ul>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                              </ul>
                            </div>
                            <div className="product_desc">
                              <p>
                                This is a gold ring with diamond and Lorem ipsum
                                dolor sit amet.
                              </p>
                            </div>
                            <div className="action_links">
                              <ul>
                                <li>
                                  <a
                                    href="#"
                                    data-placement="top"
                                    title="Add to Wishlist"
                                    data-toggle="tooltip"
                                    ><span className="ion-heart"></span
                                  ></a>
                                </li>
                                <li className="add_to_cart">
                                  <a href="#" title="Add to Cart">Add to Cart</a>
                                </li>
                                <li>
                                  <a href="#" title="Compare"
                                    ><i className="ion-ios-settings-strong"></i
                                  ></a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="custom-col-5">
                      <div className="single_product">
                        <div className="product_thumb">
                          <a href="#" className="primary_img"
                            ><img src="images/product/20.jpg" alt="product1"
                          /></a>
                          <a href="#" className="secondary_img"
                            ><img src="images/product/21.jpg" alt="product1"
                          /></a>
                          <div className="quick_button">
                            <a
                              href="#"
                              data-toggle="modal"
                              data-target="#modal_box"
                              data-placement="top"
                              data-original-title="quick view"
                              >Quick View</a
                            >
                          </div>
                        </div>
                        <div className="product_content">
                          <div className="tag_cate">
                            <a href="#">Ring, Necklace</a>
                            <a href="#">Earrings</a>
                          </div>
                          <h3><a href="#">Couple Ring</a></h3>
                          <div className="price_box">
                            <span className="old_price">Rs. 45654</span>
                            <span className="current_price">Rs. 44015</span>
                          </div>
                          <div className="product_hover">
                            <div className="product_ratings">
                              <ul>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                              </ul>
                            </div>
                            <div className="product_desc">
                              <p>
                                This is a gold ring with diamond and Lorem ipsum
                                dolor sit amet.
                              </p>
                            </div>
                            <div className="action_links">
                              <ul>
                                <li>
                                  <a
                                    href="#"
                                    data-placement="top"
                                    title="Add to Wishlist"
                                    data-toggle="tooltip"
                                    ><span className="ion-heart"></span
                                  ></a>
                                </li>
                                <li className="add_to_cart">
                                  <a href="#" title="Add to Cart">Add to Cart</a>
                                </li>
                                <li>
                                  <a href="#" title="Compare"
                                    ><i className="ion-ios-settings-strong"></i
                                  ></a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="custom-col-5">
                      <div className="single_product">
                        <div className="product_thumb">
                          <a href="#" className="primary_img"
                            ><img src="images/product/70.jpg" alt="product1"
                          /></a>
                          <a href="#" className="secondary_img"
                            ><img src="images/product/28.jpg" alt="product1"
                          /></a>
                          <div className="quick_button">
                            <a
                              href="#"
                              data-toggle="modal"
                              data-target="#modal_box"
                              data-placement="top"
                              data-original-title="quick view"
                              >Quick View</a
                            >
                          </div>
                        </div>
                        <div className="product_content">
                          <div className="tag_cate">
                            <a href="#">Ring, Necklace</a>
                            <a href="#">Earrings</a>
                          </div>
                          <h3><a href="#">Bracelet</a></h3>
                          <div className="price_box">
                            <span className="old_price">Rs. 45654</span>
                            <span className="current_price">Rs. 44015</span>
                          </div>
                          <div className="product_hover">
                            <div className="product_ratings">
                              <ul>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                              </ul>
                            </div>
                            <div className="product_desc">
                              <p>
                                This is a gold ring with diamond and Lorem ipsum
                                dolor sit amet.
                              </p>
                            </div>
                            <div className="action_links">
                              <ul>
                                <li>
                                  <a
                                    href="#"
                                    data-placement="top"
                                    title="Add to Wishlist"
                                    data-toggle="tooltip"
                                    ><span className="ion-heart"></span
                                  ></a>
                                </li>
                                <li className="add_to_cart">
                                  <a href="#" title="Add to Cart">Add to Cart</a>
                                </li>
                                <li>
                                  <a href="#" title="Compare"
                                    ><i className="ion-ios-settings-strong"></i
                                  ></a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="custom-col-5">
                      <div className="single_product">
                        <div className="product_thumb">
                          <a href="#" className="primary_img"
                            ><img src="images/product/71.jpg" alt="product1"
                          /></a>
                          <a href="#" className="secondary_img"
                            ><img src="images/product/72.jpg" alt="product1"
                          /></a>
                          <div className="quick_button">
                            <a
                              href="#"
                              data-toggle="modal"
                              data-target="#modal_box"
                              data-placement="top"
                              data-original-title="quick view"
                              >Quick View</a
                            >
                          </div>
                        </div>
                        <div className="product_content">
                          <div className="tag_cate">
                            <a href="#">Ring, Necklace</a>
                            <a href="#">Earrings</a>
                          </div>
                          <h3><a href="#">Necklace Set</a></h3>
                          <div className="price_box">
                            <span className="old_price">Rs. 45654</span>
                            <span className="current_price">Rs. 44015</span>
                          </div>
                          <div className="product_hover">
                            <div className="product_ratings">
                              <ul>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                                <li>
                                  <a href="#"
                                    ><i className="ion-ios-star-outline"></i
                                  ></a>
                                </li>
                              </ul>
                            </div>
                            <div className="product_desc">
                              <p>
                                This is a gold ring with diamond and Lorem ipsum
                                dolor sit amet.
                              </p>
                            </div>
                            <div className="action_links">
                              <ul>
                                <li>
                                  <a
                                    href="#"
                                    data-placement="top"
                                    title="Add to Wishlist"
                                    data-toggle="tooltip"
                                    ><span className="ion-heart"></span
                                  ></a>
                                </li>
                                <li className="add_to_cart">
                                  <a href="#" title="Add to Cart">Add to Cart</a>
                                </li>
                                <li>
                                  <a href="#" title="Compare"
                                    ><i className="ion-ios-settings-strong"></i
                                  ></a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  

  );
};

export default ProductSection;





