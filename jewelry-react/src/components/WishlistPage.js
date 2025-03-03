import React, { useState } from "react";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";
import "../style.css"; // Ensure correct styles

const WishlistPage = ({ wishlist, addToCart }) => {
  const [modalData, setModalData] = useState(null);
  const navigate = useNavigate();

  // Open & Close Modal
  const openModal = (product) => setModalData(product);
  const closeModal = () => setModalData(null);

  return (
    <section className="product_section p_section1 product_black_section bottom">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section_title">
              <h2 style={{ color: "white" }}>Your Wishlist</h2>
            </div>
          </div>

          {/* If Wishlist is Empty */}
          {wishlist.length === 0 ? (
            <div className="col-12 text-center">
              <h3 style={{ color: "white" }}>Your Wishlist is Empty</h3>
            </div>
          ) : (
            wishlist.map((product) => (
              <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={product.id}>
                <div className="single_product">
                  <div className="product_thumb">
                    <a href="#" className="primary_img">
                      <img src={product.primaryImage} alt={product.name} />
                    </a>
                    <div className="quick_button">
                      <button onClick={() => openModal(product)}>View Details</button>
                    </div>
                  </div>
                  <div className="product_content">
                    <div className="tag_cate">
                      <span style={{ color: "white" }}>{product.category}</span>
                    </div>
                    <h3 style={{ color: "white" }}>{product.name}</h3>
                    <div className="rating">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <i
                          key={index}
                          className={`fa fa-star${index + 1 <= product.rating ? "" : "-o"}`}
                          style={{ color: "gold", marginRight: "2px" }}
                        ></i>
                      ))}
                    </div>
                    <p style={{ color: "#FFA500", fontSize: "14px", marginTop: "5px" }}>
                      {product.description}
                    </p>
                    <div className="price_box">
                      <span className="old_price">{product.oldPrice}</span>
                      <span className="current_price">{product.currentPrice}</span>
                    </div>
                    <div className="actions">
                      <button className="add_to_cart_btn" onClick={() => addToCart(product)}>
                        🛒 Add to Cart
                      </button>
                      <button className="remove_wishlist_btn" onClick={() => navigate("/wishlist")}>
                        ❌ Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Modal for Product Details */}
        {modalData && (
          <Modal isOpen={!!modalData} onRequestClose={closeModal}>
            <div className="modal-header">
              <h2 style={{ color: "white" }}>{modalData.name}</h2>
              <button onClick={closeModal} className="close-modal">✖</button>
            </div>
            <div className="modal-body">
              <img src={modalData.primaryImage} alt={modalData.name} />
              <p style={{ color: "#FFA500", fontSize: "16px", fontWeight: "bold" }}>
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
                    className={`fa fa-star${index + 1 <= modalData.rating ? "" : "-o"}`}
                    style={{ color: "gold", marginRight: "2px" }}
                  ></i>
                ))}
              </div>
              <div className="actions">
                <button className="add_to_cart_btn" onClick={() => addToCart(modalData)}>
                  🛒 Add to Cart
                </button>
                <button className="close-modal" onClick={closeModal}>Close</button>
              </div>
            </div>
          </Modal>
        )}
      </div>
    </section>
  );
};

export default WishlistPage;
