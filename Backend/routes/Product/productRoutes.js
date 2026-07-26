import express from "express";
import {
  getProducts,
  productDetails,
  getProductReviews,
} from "../../controllers/Product/product.js";
import { userIsLogIn } from "../../middleware/userIsLogIn.js";
import { optionalUserLogin } from "../../middleware/optionalUserLogin.js";

const router = express.Router();

router.get("/", getProducts);

router.get("/:id", productDetails);

router.get("/:id/reviews", optionalUserLogin, getProductReviews);

export default router;
