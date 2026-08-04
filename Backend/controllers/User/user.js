import asyncHandler from "express-async-handler";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../../models/user.js";
import Wishlist from "../../models/wishlist.js";
import Product from "../../models/product.js";
import Cart from "../../models/cart.js";
import Review from "../../models/review.js";
import Order from "../../models/order.js";
import { success } from "zod";

//Check current user
export const getCurrentUser = (req, res) => {
  res.json({
    success: true,
    user: req.user,
  });
};

//SignUp user
export const userSignUp = asyncHandler(async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  const hashPassword = await bcrypt.hash(password, 10);

  const newUser = new User({
    firstName,
    lastName,
    email,
    password: hashPassword,
  });

  const user = await newUser.save();
  res.status(201).json({
    success: true,
    message: "User SignUp Successfully",
  });
});

//LogIn user
export const userLogIn = asyncHandler(async (req, res) => {
  // console.log(req.body);
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(401).json({
      success: false,
      message: "Email is Incorrect",
    });
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return res.status(401).json({
      success: false,
      message: "Password is Incorrect",
    });
  }

  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

  res.cookie("userToken", token, {
    httpOnly: true,
    secure: false,
    sameSite: "lax",
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });

  res.status(200).json({
    success: true,
    message: "User login successfully",
  });
});

// User Logout
export const userLogout = asyncHandler(async (req, res) => {
  res.clearCookie("userToken");

  res.status(200).json({
    success: true,
    message: "User Logout Successfully",
  });
});

//Add Wishlist Products
export const wishlistProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { userId } = req.user;

  const wishlistFind = await Wishlist.findOne({ userId });

  if (!wishlistFind) {
    const newWishlistProduct = await Wishlist.create({
      userId,
      wishlist: [{ product: id }],
    });

    return res.status(201).json({
      success: true,
      message: "Product added to wishlist successfully",
    });
  }

  const isProductInWishlist = wishlistFind.wishlist.some(
    (item) => item.product.toString() === id.toString(),
  );

  if (isProductInWishlist) {
    return res.status(400).json({
      success: false,
      message: "Product already added to wishlist",
    });
  }

  wishlistFind.wishlist.push({ product: id });
  await wishlistFind.save();

  return res.status(200).json({
    success: true,
    message: "Product added to wishlist successfully",
    wishlist: wishlistFind,
  });
});

//Get wishlist product
export const getWishlistProduct = asyncHandler(async (req, res) => {
  const { userId } = req.user;

  const wishlists = await Wishlist.findOne({ userId }).populate({
    path: "wishlist.product",
  });

  if (!wishlists) {
    return res.json([]);
  }

  const userWishlistProduct = [...wishlists.wishlist].sort(
    (a, b) => b.addedAt - a.addedAt,
  );

  res.status(200).json({
    success: true,
    message: "Get all wishlit product",
    userWishlistProduct,
  });
});

// Remove Wish list product
export const removeWishlistProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { userId } = req.user;

  const wishlist = await Wishlist.findOneAndUpdate(
    { userId },
    {
      $pull: {
        wishlist: {
          product: id,
        },
      },
    },
    { new: true },
  );

  if (!wishlist) {
    return res.status(404).json({
      success: false,
      message: "Wishlist not found",
    });
  }

  res.status(200).json({
    success: true,
    message: "Product Remove from Wishlist Successfully",
  });
});

// Add product to Cart from Wishlist
export const addToCart = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { userId } = req.user;
  const { selectedColor, selectedSize, quantity } = req.body;

  const cartFind = await Cart.findOne({ userId });

  if (!cartFind) {
    const newCartProduct = await Cart.create({
      userId,
      cart: [
        { product: id, color: selectedColor, size: selectedSize, quantity },
      ],
    });
  } else {
    cartFind.cart.push({
      product: id,
      color: selectedColor,
      size: selectedSize,
      quantity,
    });
    await cartFind.save();
  }

  res.status(200).json({
    success: true,
    message: "Product add in Cart successfully",
  });
});

//Get Cart products
export const getCartProduct = asyncHandler(async (req, res) => {
  const { userId } = req.user;
  const carts = await Cart.findOne({ userId }).populate({
    path: "cart.product",
  });

  if (!carts) {
    return res.json([]);
  }

  const userCartProduct = [...carts.cart].sort((a, b) => b.addedAt - a.addedAt);

  res.status(200).json({
    success: true,
    message: "Get all cart product",
    userCartProduct,
  });
});

//Remove cart product
export const removeCartProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { userId } = req.user;

  const cart = await Cart.findOneAndUpdate(
    { userId },
    {
      $pull: {
        cart: {
          product: id,
        },
      },
    },
    { returnDocument: "after" },
  );

  if (!cart) {
    return res.status(404).json({
      success: false,
      message: "Wishlist not found",
    });
  }

  res.status(200).json({
    success: true,
    message: "Product remove from Cart successfully",
  });
});

//Add Review of Product
export const addProductReview = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { userId } = req.user;
  const { rating, comment } = req.body;

  const userReview = await Review.findOne({ product: id, user: userId });
  if (userReview) {
    return res.status(403).json({
      success: false,
      message: "One user add only One Review",
      id,
    });
  }

  const newReview = await Review.create({
    product: id,
    user: userId,
    rating: rating,
    comment: comment,
  });

  res.status(200).json({
    success: true,
    message: "Review add successfully",
    id,
  });
});

//Update the Product Review
export const updateProductReview = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { userId } = req.user;
  const { rating, comment } = req.body;

  const updatedReview = await Review.findOneAndUpdate(
    { product: id, user: userId }, // Condition to match the review
    {
      $set: {
        rating: rating,
        comment: comment,
        // updatedAt: Date.now() // Optional: update timestamp if you have one
      },
    },
    { returnDocument: "after" }, // Options: returns the updated document and runs schema validations
  );

  if (!updatedReview) {
    return res.status(404).json({
      success: false,
      message: "Review Cannot Update Successfully",
    });
  }
  res.status(200).json({
    success: true,
    message: "Review Update Successfully",
  });
});

//Delete Product Review
export const deleteProductReview = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { userId } = req.user;

  const deleteReview = await Review.findOneAndDelete(
    { product: id, user: userId },
    { returnDocument: "after" },
  );

  if (!deleteReview) {
    res.status(404).json({
      success: false,
      message: "Product Review Cannot Delete Successfully",
    });
  }

  res.status(200).json({
    success: true,
    message: "Product Review Delete Successfully",
  });
});

// product order
export const productOrder = asyncHandler(async (req, res) => {
  const { userId } = req.user;
  const data = req.body;

  const newOrder = {
    ...data,
    user: userId,
  };

  const productFind = await Product.findOneAndUpdate(
    {
      _id: newOrder.product,
      stock: { $gte: newOrder.quantity }, // Make sure at least 1 is available
    },
    {
      $inc: { stock: -newOrder.quantity }, // Decrease by 1
    },
    {
      returnDocument: "after",
    },
  );

  if (!productFind) {
    return res.status(400).json({
      message: "Product is out of stock",
    });
  }

  const order = await Order.create(newOrder);

  res.status(200).json({
    success: true,
    message: "Your Order Completed Successfully",
  });
});

//Cart Products Order
export const cartProductsOrder = asyncHandler(async (req, res) => {
  const { userId } = req.user;
  const data = req.body;

  for (const product of data.products) {
    const { products, ...newProduct } = product;

    const orderDetails = {
      ...newProduct,
      ...data.user,
      user: userId,
    };

    const productFind = await Product.findOneAndUpdate(
      {
        _id: orderDetails.product,
        stock: { $gte: orderDetails.quantity },
      },
      {
        $inc: {
          stock: -orderDetails.quantity,
        },
      },
      {
        returnDocument: "after",
      },
    );

    if (!productFind) {
      success: false;
      message: `${item.name} is out of stock`;
    }

    await Order.create(orderDetails);
  }

  res.status(200).json({
    success: true,
    message: "Cart Products Order Successfully",
  });
});

// Get User Orders to show the order to user
export const getUserOrders = asyncHandler(async (req, res) => {
  const { userId } = req.user;

  const userOrders = await Order.find({ user: userId }).populate({
    path: "product",
  });

  res.status(200).json({
    success: true,
    message: "User Orders Get",
    userOrders,
  });
});
