import React, { useState } from "react";
import Modal from "react-modal";
import "./ProductSection.css"; // Ensure styles are linked correctly

const ProductSection = () => {
  const [modalData, setModalData] = useState(null);

  // ✅ Products categorized into Featured, Arrivals, and On Sale
  const products = {
    featured: [
      { id: 1, primaryImage: "/images/product/1.jpg", name: "Necklace", category: "Jewelry", currentPrice: "₹44,015", description: "Elegant gold necklace with diamonds.", rating: 4.5 },
      { id: 2, primaryImage: "/images/product/2.jpg", name: "Earrings", category: "Jewelry", currentPrice: "₹45,015", description: "Beautiful earrings with intricate design.", rating: 4.2 },
      { id: 3, primaryImage: "/images/product/3.jpg", name: "Earrings", category: "Jewelry", currentPrice: "₹45,015", description: "Handcrafted diamond earrings.", rating: 4.6 },
      { id: 4, primaryImage: "/images/product/4.jpg", name: "Earrings", category: "Jewelry", currentPrice: "₹45,015", description: "Gold earrings with floral motifs.", rating: 4.7 },
      { id: 5, primaryImage: "/images/product/5.jpg", name: "Earrings", category: "Jewelry", currentPrice: "₹45,015", description: "Pearl-studded earrings.", rating: 4.3 },
      { id: 6, primaryImage: "/images/product/6.jpg", name: "Earrings", category: "Jewelry", currentPrice: "₹45,015", description: "Designer gold earrings.", rating: 4.4 },
      { id: 7, primaryImage: "/images/product/7.jpg", name: "Earrings", category: "Jewelry", currentPrice: "₹45,015", description: "Traditional Indian earrings.", rating: 4.5 },
      { id: 8, primaryImage: "/images/product/8.jpg", name: "Earrings", category: "Jewelry", currentPrice: "₹45,015", description: "Modern hoop earrings.", rating: 4.6 },
      { id: 9, primaryImage: "/images/product/9.jpg", name: "Earrings", category: "Jewelry", currentPrice: "₹45,015", description: "Diamond-studded earrings.", rating: 4.7 },
      { id: 10, primaryImage: "/images/product/10.jpg", name: "Earrings", category: "Jewelry", currentPrice: "₹45,015", description: "Minimalist silver earrings.", rating: 4.8 },
      { id: 11, primaryImage: "/images/product/11.jpg", name: "Earrings", category: "Jewelry", currentPrice: "₹45,015", description: "Unique pearl drop earrings.", rating: 4.2 },
      { id: 12, primaryImage: "/images/product/12.jpg", name: "Earrings", category: "Jewelry", currentPrice: "₹45,015", description: "Gold jhumka earrings.", rating: 4.6 },
    ],
    arrivals: [
      { id: 13, primaryImage: "/images/product/13.jpg", name: "Bracelet", category: "Jewelry", currentPrice: "₹74,015", description: "Classic gold bracelet.", rating: 4.6 },
      { id: 14, primaryImage: "/images/product/14.jpg", name: "Bangles", category: "Jewelry", currentPrice: "₹64,015", description: "Gold bangles with intricate craftsmanship.", rating: 4.7 },
      { id: 15, primaryImage: "/images/product/15.jpg", name: "Bangles", category: "Jewelry", currentPrice: "₹64,015", description: "Antique bangles for special occasions.", rating: 4.5 },
      { id: 16, primaryImage: "/images/product/16.jpg", name: "Bangles", category: "Jewelry", currentPrice: "₹64,015", description: "Designer bangles set.", rating: 4.4 },
      { id: 17, primaryImage: "/images/product/17.jpg", name: "Bangles", category: "Jewelry", currentPrice: "₹64,015", description: "Elegant gold-plated bangles.", rating: 4.8 },
      { id: 18, primaryImage: "/images/product/18.jpg", name: "Bangles", category: "Jewelry", currentPrice: "₹64,015", description: "Traditional Rajasthani bangles.", rating: 4.7 },
      { id: 19, primaryImage: "/images/product/19.jpg", name: "Bangles", category: "Jewelry", currentPrice: "₹64,015", description: "Handcrafted gold bangles.", rating: 4.6 },
      { id: 20, primaryImage: "/images/product/20.jpg", name: "Bangles", category: "Jewelry", currentPrice: "₹64,015", description: "Rose gold bangles.", rating: 4.5 },
      { id: 21, primaryImage: "/images/product/21.jpg", name: "Bangles", category: "Jewelry", currentPrice: "₹64,015", description: "Modern fashion bangles.", rating: 4.3 },
      { id: 22, primaryImage: "/images/product/22.jpg", name: "Bangles", category: "Jewelry", currentPrice: "₹64,015", description: "Gold-plated traditional bangles.", rating: 4.4 },
      { id: 23, primaryImage: "/images/product/23.jpg", name: "Bangles", category: "Jewelry", currentPrice: "₹64,015", description: "Diamond-studded bangles.", rating: 4.9 },
      { id: 24, primaryImage: "/images/product/24.jpg", name: "Bangles", category: "Jewelry", currentPrice: "₹64,015", description: "Simple gold bangle set.", rating: 4.8 },
    ],
    onsale: [
      { id: 25, primaryImage: "/images/product/25.jpg", name: "Ring", category: "Jewelry", currentPrice: "₹54,015", description: "Elegant diamond ring for engagements.", rating: 4.8 },
      { id: 26, primaryImage: "/images/product/26.jpg", name: "Diamond Necklace", category: "Jewelry", currentPrice: "₹94,015", description: "Exquisite diamond necklace.", rating: 4.9 },
      { id: 27, primaryImage: "/images/product/27.jpg", name: "Diamond Earrings", category: "Jewelry", currentPrice: "₹94,015", description: "Luxury diamond earrings.", rating: 4.7 },
      { id: 28, primaryImage: "/images/product/28.jpg", name: "Platinum Ring", category: "Jewelry", currentPrice: "₹94,015", description: "Platinum ring with sapphire stone.", rating: 4.6 },
      { id: 29, primaryImage: "/images/product/29.jpg", name: "Gold Chain", category: "Jewelry", currentPrice: "₹94,015", description: "Elegant gold chain.", rating: 4.5 },
      { id: 30, primaryImage: "/images/product/30.jpg", name: "Men's Bracelet", category: "Jewelry", currentPrice: "₹94,015", description: "Stylish gold bracelet for men.", rating: 4.4 },
      { id: 31, primaryImage: "/images/product/31.jpg", name: "Platinum Bracelet", category: "Jewelry", currentPrice: "₹94,015", description: "Luxury platinum bracelet.", rating: 4.7 },
      { id: 32, primaryImage: "/images/product/32.jpg", name: "Rose Gold Chain", category: "Jewelry", currentPrice: "₹94,015", description: "Elegant rose gold chain.", rating: 4.3 },
      { id: 33, primaryImage: "/images/product/33.jpg", name: "Men's Ring", category: "Jewelry", currentPrice: "₹94,015", description: "Bold and stylish ring for men.", rating: 4.6 },
      { id: 34, primaryImage: "/images/product/34.jpg", name: "Gold Cuff Bracelet", category: "Jewelry", currentPrice: "₹94,015", description: "Gold cuff bracelet with intricate design.", rating: 4.8 },
      { id: 35, primaryImage: "/images/product/35.jpg", name: "Silver Pendant", category: "Jewelry", currentPrice: "₹94,015", description: "Minimalist silver pendant.", rating: 4.5 },
      { id: 36, primaryImage: "/images/product/36.jpg", name: "Platinum Chain", category: "Jewelry", currentPrice: "₹94,015", description: "Premium platinum chain.", rating: 4.9 },
    ],
  };
  

  const openModal = (product) => setModalData(product);
  const closeModal = () => setModalData(null);

  return (
    <section className="product_section p_section1 product_black_section bottom">
      <div className="container">
        <div className="row">
          <div className="col-12">
            {/* <div className="section_title">
              <h2 style={{ color: "white" }}>Bestselling Products</h2>
            </div> */}
          </div>

          {/* Category Tabs */}
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <a className="nav-link active" data-bs-toggle="tab" href="#featured">Featured</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-bs-toggle="tab" href="#arrivals">New Arrivals</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-bs-toggle="tab" href="#onsale">On Sale</a>
            </li>
          </ul>

          {/* Product Categories */}
          <div className="tab-content mt-4">
            {Object.keys(products).map((category, index) => (
              <div
                key={category}
                className={`tab-pane fade ${index === 0 ? "show active" : ""}`}
                id={category}
              >
                <div className="row">
                  {products[category].map((product) => (
                    <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={product.id}>
                      <div className="single_product">
                        <div className="product_thumb">
                          <a href="#" className="primary_img">
                            <img src={product.primaryImage} alt={product.name} />
                          </a>
                          <div className="quick_button">
                            <button onClick={() => openModal(product)}>Quick View</button>
                          </div>
                        </div>
                        <div className="product_content">
                          <div className="tag_cate">
                            <span style={{ color: "white" }}>{product.category}</span>
                          </div>
                          <h3 style={{ color: "white" }}>{product.name}</h3>
                          <div className="rating">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <i
                                key={i}
                                className={`fa fa-star${i < product.rating ? "" : "-o"}`}
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
                            <button className="wishlist_btn">❤️ Wishlist</button>
                            <button className="compare_btn">🔄 Compare</button>
                            <button className="add_to_cart_btn">🛒 Add to Cart</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal for Quick View */}
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
                {Array.from({ length: 5 }).map((_, i) => (
                  <i
                    key={i}
                    className={`fa fa-star${i < modalData.rating ? "" : "-o"}`}
                    style={{ color: "gold", marginRight: "2px" }}
                  ></i>
                ))}
              </div>
              <div className="actions">
                <button className="wishlist_btn">❤️ Wishlist</button>
                <button className="compare_btn">🔄 Compare</button>
                <button className="add_to_cart_btn">🛒 Add to Cart</button>
              </div>
            </div>
          </Modal>
        )}
      </div>
    </section>
  );
};

export default ProductSection;
