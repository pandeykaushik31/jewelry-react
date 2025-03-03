import React from "react";

const QuickView = ({ product, onClose }) => {
  if (!product) return null;

  return (
    <div className="quick-view">
      <button onClick={onClose}>Close</button>
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>₹{product.price}</p>
    </div>
  );
};

export default QuickView;
