import React from "react";

function ProductSection() {
  return (
    <section className="product_section">
      <div className="container">
        <div className="row">
          <div className="product_card">
            <img src="/images/product/1.jpg" alt="Product 1" />
            <h3>Necklace</h3>
            <p>Price: Rs. 75,999</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductSection;
