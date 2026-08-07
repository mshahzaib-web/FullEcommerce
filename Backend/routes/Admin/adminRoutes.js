import express from "express";
import { upload } from "../../middleware/multer.js";
import { validate } from "../../middleware/validate.js";
import { adminIsLogIn } from "../../middleware/adminIsLogIn.js";
import { adminSignUpZodValidation } from "../../validation/adminZodValidation.js";
import { productValidation } from "../../validation/productZodValidation.js";
import {
  adminSignUp,
  adminLogIn,
  getCurrentAdmin,
  adminLogout,
  getAdminDashboardData,
  getAdminOrders,
  getAdminOrderDetailsInfo,
} from "../../controllers/Admin/admin.js";
import {
  uploadImage,
  deleteImage,
  uploadSubImages,
  deleteSubImage,
} from "../../controllers/Admin/productImage.js";

import {
  addProduct,
  getAdminProducts,
  updateProduct,
} from "../../controllers/Admin/product.js";

const router = express.Router();

//Get Curren Admin
router.get("/auth/me", adminIsLogIn, getCurrentAdmin);

//Admin SignUp
router.post("/signup", validate(adminSignUpZodValidation), adminSignUp);

//Admin Login
router.post("/login", adminLogIn);

//admin Logout
router.post("/logout", adminLogout);

//Uplad Main image
router.post("/product/upload-image", upload.single("image"), uploadImage);

//Delte Main Image
router.post("/product/delete-image", deleteImage);

//Upload Sub Images
router.post(
  "/product/upload-sub-images",
  upload.array("subImages", 5),
  uploadSubImages,
);

//Delete Sub Image
router.post("/product/delete-sub-image", deleteSubImage);

// Add New Product
router.post(
  "/add-product",
  adminIsLogIn,
  validate(productValidation),
  addProduct,
);

// Get Admin products
router.get("/products", adminIsLogIn, getAdminProducts);

//Update admin product by admin
router.put(
  "/:id/update-product",
  adminIsLogIn,
  validate(productValidation),
  updateProduct,
);

//Get admin dashboard data
router.get("/dashboard/data", adminIsLogIn, getAdminDashboardData);

//Get admin orders
router.get("/orders", adminIsLogIn, getAdminOrders);

//get admin order details info
router.get("/order/:id/order-details", adminIsLogIn, getAdminOrderDetailsInfo);

export default router;
