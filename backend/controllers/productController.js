import Product from "../models/Product.js";
import fs from "fs";
import path from "path";

export const createProduct = async (req, res) => {
  try {
    const { name, price, stock } = req.body;
    const imageUrl = req.file ? `uploads/${req.file.filename}` : null;

    const product = new Product({
      name,
      price,
      stock,
      imageUrl,
      merchant: req.user.id
    });

    await product.save();
    res.json(product);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find({ merchant: req.user.id });
    res.json(products);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};

export const getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.json(product);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};

export const updateProduct = async (req, res) => {
  try {
    const { name, price, stock } = req.body;
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });

    // Update fields
    if (name) product.name = name;
    if (price) product.price = price;
    if (stock) product.stock = stock;

    // Update image
    if (req.file) {
      // Hapus file lama
      if (product.imageUrl) {
        const oldPath = path.join(process.cwd(), product.imageUrl);
        fs.unlink(oldPath, (err) => {
          if (err) console.warn("Image deletion warning:", err.message);
        });
      }
      product.imageUrl = `uploads/${req.file.filename}`;
    }

    await product.save();
    res.json(product);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });

    // Hapus file image
    if (product.imageUrl) {
      const filePath = path.join(process.cwd(), product.imageUrl);
      fs.unlink(filePath, (err) => {
        if (err) console.warn("Image deletion warning:", err.message);
      });
    }

    await product.deleteOne();
    res.json({ message: "Product removed" });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};
