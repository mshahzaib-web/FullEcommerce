import express from "express";
import { upload } from "../../middleware/multer.js";
import { validate } from "../../middleware/validate.js";
import { adminSignUpZodValidation } from "../../validation/adminZodValidation.js";
import { productValidation } from "../../validation/productZodValidation.js";
import { adminSignUp, adminLogIn } from "../../controllers/Admin/admin.js";
import {
  uploadImage,
  deleteImage,
  uploadSubImages,
  deleteSubImage,
} from "../../controllers/Admin/productImage.js";

import { addProduct } from "../../controllers/Admin/product.js";

const router = express.Router();

//Admin SignUp
router.post("/signup", validate(adminSignUpZodValidation), adminSignUp);

//Admin Login
router.post("/login", adminLogIn);

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
router.post("/add-product", validate(productValidation), addProduct);

export default router;
