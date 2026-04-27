// routes/admin.js
const express = require("express");
const router = express.Router();
const Product = require("../models/Product");
const { auth,isAdmin }=require('../middleware/authmiddleWare.js');
const {
  createProduct,
  updateProduct,
  deleteProduct,
  getAllProducts,
} = require("../controllers/productController");
// ➕ Add Product
router.post("/products",auth ,isAdmin,createProduct);

// 📄 Get All Products
router.get("/products",auth ,isAdmin,getAllProducts);

// ✏️ Update Product
router.put("/products/:id", auth,isAdmin, updateProduct);

// ❌ Delete Product
router.delete("/products/:id", auth,isAdmin,deleteProduct);

module.exports = router;
