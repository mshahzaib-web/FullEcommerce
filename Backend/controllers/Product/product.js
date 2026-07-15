import asyncHandler from "express-async-handler";
import Product from "../../models/product.js";

// Get All Products
export const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({}).sort({ createdAt: -1 });
  res.status(200).json({
    success: true,
    success: "Products Gets",
    products,
  });
});

// Get One Product Details
export const productDetails = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const product = await Product.findById(id);

  if (!product) {
    return res.status(404).json({
      success: false,
      message: "Product not found",
    });
  }

  res.status(200).json({
    success: true,
    message: "Product found",
    product,
  });
});
