import asyncHandler from "express-async-handler";
import Product from "../../models/product.js";
import Review from "../../models/review.js";

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

//Get Product Reviews
export const getProductReviews = asyncHandler(async (req, res) => {
  const { id } = req.params;

  let userId = null;
  let loginUserReview = null;

  if (req.user) {
    userId = req.user.userId;
  }

  const reviews = await Review.find({ product: id });

  const average =
    reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;

  const averageRating = Number(average.toFixed(1));

  if (userId) {
    loginUserReview = await Review.findOne({
      product: id,
      user: userId,
    }).populate("user");
  }

  const productReviews = await Review.find({ product: id })
    .populate("user")
    .sort({ createdAt: -1 });

  res.status(200).json({
    sucess: true,
    message: "Reviews Get successfully",
    reviews: productReviews,
    ...(loginUserReview && { loginUserReview }),
    averageRating,
  });
});
