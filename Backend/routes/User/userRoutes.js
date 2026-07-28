import express from "express";
import {
  userSignUp,
  userLogIn,
  getCurrentUser,
  userLogout,
  wishlistProduct,
  getWishlistProduct,
  removeWishlistProduct,
  addToCart,
  getCartProduct,
  removeCartProduct,
  addProductReview,
  updateProductReview,
  deleteProductReview,
  productOrder,
} from "../../controllers/User/user.js";
import { validate } from "../../middleware/validate.js";
import { userIsLogIn } from "../../middleware/userIsLogin.js";

import {
  userSignUpZodValidation,
  userLogInZodValidation,
} from "../../validation/userZodValidation.js";

import { productReviewValidation } from "../../validation/productZodValidation.js";

import { orderValidation } from "../../validation/orderZodValidation.js";

const router = express.Router();

router.get("/auth/me", userIsLogIn, getCurrentUser);

router.post("/signup", validate(userSignUpZodValidation), userSignUp);

router.post("/login", validate(userLogInZodValidation), userLogIn);

router.post("/logout", userLogout);

router.post("/wishlist/:id", userIsLogIn, wishlistProduct);

router.get("/wishlist", userIsLogIn, getWishlistProduct);

router.post("/wishlist/remove/:id", userIsLogIn, removeWishlistProduct);

router.post("/addtocart/:id", userIsLogIn, addToCart);

router.get("/cartproduct", userIsLogIn, getCartProduct);

router.post("/cart/remove/:id", userIsLogIn, removeCartProduct);

router.post(
  "/product/:id/add-review",
  userIsLogIn,
  validate(productReviewValidation),
  addProductReview,
);

router.put("/product/:id/update-review", userIsLogIn, updateProductReview);

router.delete("/product/:id/delete", userIsLogIn, deleteProductReview);

router.post(
  "/product/:id/order",
  userIsLogIn,
  validate(orderValidation),
  productOrder,
);

export default router;
