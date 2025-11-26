import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../api/api";

const ProductForm = () => {
  const { id } = useParams(); // id produk kalau edit
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    name: "",
    price: "",
    stock: "",
    image: null
  });
  const [loading, setLoading] = useState(false);

  // Fetch data kalau edit
  useEffect(() => {
    if (id) {
      setLoading(true);
      api.get(`/products/${id}`)
        .then(res => {
          setProduct({
            name: res.data.name,
            price: res.data.price,
            stock: res.data.stock,
            image: null // file input kosong
          });
          setLoading(false);
        })
        .catch(err => {
          console.error(err);
          alert("Product not found");
          navigate("/dashboard");
        });
    }
  }, [id, navigate]);

  const handleChange = e => {
    const { name, value, files } = e.target;
    if (files && files.length > 0) {
      setProduct({ ...product, image: files[0] });
    } else {
      setProduct({ ...product, [name]: value });
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", product.name);
    formData.append("price", product.price);
    formData.append("stock", product.stock);
    if (product.image) formData.append("image", product.image);

    try {
      if (id) {
        // Edit
        await api.put(`/products/${id}`, formData);
        alert("Product updated successfully!");
      } else {
        // Add
        await api.post("/products", formData);
        alert("Product added successfully!");
      }
      navigate("/dashboard");
    } catch (err) {
      console.error(err);
      alert("Error saving product");
    }
  };

  if (id && loading) return <p>Loading...</p>; // tunggu data load

  return (
    <div className="auth-form">
      <h2>{id ? "Edit" : "Add"} Product</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={product.name}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={product.price}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="stock"
          placeholder="Stock"
          value={product.stock}
          onChange={handleChange}
          required
        />
        <input
          key={product.image ? product.image.name : "file"} // reset file input saat ganti produk
          type="file"
          name="image"
          onChange={handleChange}
        />
        <button type="submit">{id ? "Update" : "Add"}</button>
      </form>
    </div>
  );
};

export default ProductForm;
