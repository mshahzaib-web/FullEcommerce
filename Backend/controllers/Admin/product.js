import asyncHandler from "express-async-handler";

import Product from "../../models/product.js";

//Add New Product
export const addProduct = asyncHandler(async (req, res) => {
  const { adminId } = req.admin;
  const newProduct = {
    ...req.body,
    owner: adminId, // or req.user.id
  };

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

// Get all admin products
export const getAdminProducts = asyncHandler(async (req, res) => {
  const { adminId } = req.admin;
  const { product, search } = req.query;

  let query = {
    owner: adminId,
  };

  if (search) {
    query.$or = [
      {
        name: {
          $regex: search,
          $options: "i",
        },
      },
      {
        sku: {
          $regex: search,
          $options: "i",
        },
      },
    ];
  }

  if (product === "healthy-stock") {
    query.stock = {
      $gte: 20,
    };
  }

  if (product === "low-stock") {
    query.stock = {
      $gte: 1,
      $lt: 20,
    };
  }

  if (product === "out-of-stock") {
    query.stock = 0;
  }

  const products = await Product.find(query).sort({
    createdAt: -1,
  });

  if (!products) {
    return res.status(409).json({
      success: false,
      message: "You cannot add any product",
    });
  }

  res.status(200).json({
    success: true,
    message: "Amin Products get",
    products,
  });
});

//Update Admin product by admin
export const updateProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { adminId } = req.admin;
  const data = req.body;

  const productFind = await Product.findOne({ _id: id, owner: adminId });

  if (!productFind) {
    return res.status(409).json({
      success: false,
      message: "Product not find, that you want update.",
    });
  }

  const updateProduct = await Product.findOneAndUpdate(
    {
      _id: id,
      owner: adminId,
    },
    {
      $set: data,
    },
    {
      returnDocument: "after", // or new: true
      runValidators: true,
    },
  );

  res.status(200).json({
    success: true,
    message: "Product Update Successfully",
  });
});
