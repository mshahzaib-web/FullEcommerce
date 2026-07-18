import asyncHandler from "express-async-handler";

import Product from "../../models/product.js";

//Add New Product
export const addProduct = asyncHandler(async (req, res) => {
  const newProduct = req.body;

  const existingProduct = await Product.findOne({ sku: newProduct.sku });

  if (existingProduct) {
    return res.status(409).json({
      success: false,
      message: "SKU already exists. It must Unique",
    });
  }

  if (!newProduct.mainImage || newProduct.subImages.length == 0) {
    return res.status(500).json({
      success: false,
      message: "Main Image and Sub Image is requaired",
    });
  }

  const product = await Product.create(newProduct);
  res.status(200).json({
    success: true,
    message: "Product Add Successfully",
  });
});
