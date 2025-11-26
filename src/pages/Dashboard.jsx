import React, { useEffect, useState } from "react";
import api from "../api/api";
import ProductCard from "../components/ProductCard";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const fetchProducts = async () => {
    const res = await api.get("/products");
    setProducts(res.data);
  };

  const handleDelete = async (id) => {
    await api.delete(`/products/${id}`);
    fetchProducts();
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="dashboard">
      <h2>Product List</h2>
      <button onClick={() => navigate("/product/new")}>Add Product</button>
      <div className="product-grid">
        {products.map(product => (
          <ProductCard key={product._id} product={product} onDelete={handleDelete} onEdit={p => navigate(`/product/edit/${p._id}`)} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
