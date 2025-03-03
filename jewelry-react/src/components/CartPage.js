import React, { useState } from "react";
import Modal from "react-modal";
import "../style.css"; // Ensure correct styles

const CartPage = ({ cart, removeFromCart }) => {
  const [modalData, setModalData] = useState(null);

  // Open & Close Modal
  const openModal = (product) => setModalData(product);
  const closeModal = () => setModalData(null);

  // Handle Buy Now Action
  const handleBuyNow = (product) => {
    alert(`Proceeding to buy: ${product.name}\nPrice: ${product.currentPrice}`);
    // Add Payment Gateway Integration Here (e.g., Stripe, Razorpay)
  };

  return (
    <section className="product_section p_section1 product_black_section bottom">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section_title">
              <h2 style={{ color: "white" }}>Your Shopping Cart</h2>
            </div>
          </div>

          {/* If Cart is Empty */}
          {cart.length === 0 ? (
            <div className="col-12 text-center">
              <h3 style={{ color: "white" }}>Your Cart is Empty</h3>
            </div>
          ) : (
            cart.map((product) => (
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
                      <button className="remove_cart_btn" onClick={() => removeFromCart(product.id)}>
                        ❌ Remove
                      </button>
                      <button className="buy_btn" onClick={() => handleBuyNow(product)}>
                        🛍 Buy Now
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
                <button className="buy_btn" onClick={() => handleBuyNow(modalData)}>
                  🛍 Buy Now
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

export default CartPage;
