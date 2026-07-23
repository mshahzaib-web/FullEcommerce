import asyncHandler from "express-async-handler";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../../models/user.js";
import Wishlist from "../../models/wishlist.js";
import Cart from "../../models/cart.js";
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
  } else {
    wishlistFind.wishlist.push({ product: id });
    await wishlistFind.save();
  }

  res.status(200).json({
    success: true,
    message: "Product add in WishList successfully",
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
