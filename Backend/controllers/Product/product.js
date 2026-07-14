import asyncHandler from "express-async-handler";
import Product from "../../models/product.js";

export const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  //   console.log(Products);

  res.status(200).json({
    success: true,
    success: "Products Gets",
    products,
  });
});
