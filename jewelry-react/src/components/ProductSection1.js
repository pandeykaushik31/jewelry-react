import React, { useState } from "react";
import Modal from "react-modal";
import "../style.css"; // Ensure correct stylesheet is linked

const ProductSection1 = ({ addToCart, addToWishlist }) => {
  const [modalData, setModalData] = useState(null);

  // Product List
  const products = [
    {
      id: 37,
      primaryImage: "/images/product/37.jpg",
      name: "Necklace",
      category: "Jewelry",
      oldPrice: "₹45,000",
      currentPrice: "₹44,015",
      description: "Elegant gold necklace.",
      rating: 4.5,
    },
    {
      id: 38,
      primaryImage: "/images/product/38.jpg",
      name: "Golden Necklace",
      name: "Earrings",
      category: "Jewelry",
      oldPrice: "₹46,000",
      currentPrice: "₹45,015",
      description: "Beautiful diamond earrings.",
      rating: 4.2,
    },
    {
      id: 39,
      primaryImage: "/images/product/39.jpg",
      name: "Gold Pendant",
      category: "Jewelry",
      oldPrice: "₹21,000",
      currentPrice: "₹20,000",
      description: "Stylish gold pendant for all occasions.",
      rating: 4.0,
    },
    {
      id: 40,
      primaryImage: "/images/product/40.jpg",
      name: "Diamond Ring",
      category: "Rings",
      oldPrice: "₹55,000",
      currentPrice: "₹50,000",
      description: "A dazzling diamond ring.",
      rating: 4.8,
    },
    {
      id: 41,
      primaryImage: "/images/product/41.jpg",
      name: "Silver Earrings",
      category: "Earrings",
      oldPrice: "₹16,000",
      currentPrice: "₹15,000",
      description: "Elegant silver earrings.",
      rating: 4.3,
    },
    {
      id: 42,
      primaryImage: "/images/product/42.jpg",
      name: "Gold Bangles",
      category: "Bangles",
      oldPrice: "₹36,000",
      currentPrice: "₹35,000",
      description: "Traditional gold bangles.",
      rating: 4.7,
    },
    {
      id: 43,
      primaryImage: "/images/product/43.jpg",
      name: "Luxury Bracelet",
      category: "Bracelet",
      oldPrice: "₹24,000",
      currentPrice: "₹22,000",
      description: "Premium quality bracelet.",
      rating: 4.6,
    },
    {
      id: 44,
      primaryImage: "/images/product/44.jpg",
      name: "Platinum Chain",
      category: "Chains",
      oldPrice: "₹62,000",
      currentPrice: "₹60,000",
      description: "Stylish platinum chain.",
      rating: 4.9,
    },
  ];

  // Open & Close Modal
  const openModal = (product) => setModalData(product);
  const closeModal = () => setModalData(null);

  return (
    <section className="product_section p_section1 product_black_section bottom">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section_title">
              <h2 style={{ color: "white" }}>Bestselling Products</h2>
            </div>
          </div>
          <div className="col-12">
            <div className="product-area">
              <div className="custom-row product_row1">
                {products.map((product) => (
                  <div
                    className="col-lg-3 col-md-4 col-sm-6 mb-4"
                    key={product.id}
                  >
                    <div className="single_product">
                      <div className="product_thumb">
                        <a href="#" className="primary_img">
                          <img src={product.primaryImage} alt={product.name} />
                        </a>
                        <div className="quick_button">
                          <button onClick={() => openModal(product)}>
                            Quick View
                          </button>
                        </div>
                      </div>
                      <div className="product_content">
                        <div className="tag_cate">
                          <span style={{ color: "white" }}>
                            {product.category}
                          </span>
                        </div>
                        <h3 style={{ color: "white" }}>{product.name}</h3>
                        <div className="rating">
                          {Array.from({ length: 5 }).map((_, index) => (
                            <i
                              key={index}
                              className={`fa fa-star${
                                index + 1 <= product.rating ? "" : "-o"
                              }`}
                              style={{ color: "gold", marginRight: "2px" }}
                            ></i>
                          ))}
                        </div>
                        <p
                          style={{
                            color: "#FFA500",
                            fontSize: "14px",
                            marginTop: "5px",
                          }}
                        >
                          {product.description}
                        </p>
                        <div className="price_box">
                          <span className="old_price">{product.oldPrice}</span>
                          <span className="current_price">
                            {product.currentPrice}
                          </span>
                        </div>
                        <div className="actions">
                          <button
                            className="wishlist_btn"
                            onClick={() => addToWishlist(product)}
                          >
                            ❤️ Wishlist
                          </button>
                          <button className="compare_btn">🔄 Compare</button>
                          <button
                            className="add_to_cart_btn"
                            onClick={() => addToCart(product)}
                          >
                            🛒 Add to Cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Modal for Quick View */}
        {modalData && (
          <Modal isOpen={!!modalData} onRequestClose={closeModal}>
            <div className="modal-header">
              <h2 style={{ color: "white" }}>{modalData.name}</h2>
              <button onClick={closeModal} className="close-modal">
                ✖
              </button>
            </div>
            <div className="modal-body">
              <img src={modalData.primaryImage} alt={modalData.name} />
              <p
                style={{
                  color: "#FFA500",
                  fontSize: "16px",
                  fontWeight: "bold",
                }}
              >
                {modalData.description}
              </p>
              <div>
                <span className="old_price">{modalData.oldPrice}</span>
                <span className="current_price">{modalData.currentPrice}</span>
              </div>
              <div className="rating">
                {Array.from({ length: 5 }).map((_, index) => (
                  <i
                    key={index}
                    className={`fa fa-star${
                      index + 1 <= modalData.rating ? "" : "-o"
                    }`}
                    style={{ color: "gold", marginRight: "2px" }}
                  ></i>
                ))}
              </div>
              <div className="actions">
                <button
                  className="wishlist_btn"
                  onClick={() => addToWishlist(modalData)}
                >
                  ❤️ Wishlist
                </button>
                <button className="compare_btn">🔄 Compare</button>
                <button
                  className="add_to_cart_btn"
                  onClick={() => addToCart(modalData)}
                >
                  🛒 Add to Cart
                </button>
              </div>
            </div>
          </Modal>
        )}
      </div>
    </section>
  );
};

export default ProductSection1;
