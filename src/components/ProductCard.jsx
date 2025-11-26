import React from "react";

const ProductCard = ({ product, onEdit, onDelete }) => (
  <div className="product-card">
    {product.imageUrl && <img src={`http://localhost:5000/${product.imageUrl}`} alt={product.name} />}
    <h3>{product.name}</h3>
    <p>Price: ${product.price}</p>
    <p>Stock: {product.stock}</p>
    <div className="actions">
      <button onClick={() => onEdit(product)}>Edit</button>
      <button onClick={() => onDelete(product._id)}>Delete</button>
    </div>
  </div>
);

export default ProductCard;
