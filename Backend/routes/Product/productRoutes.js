import express from "express";
import {
  getProducts,
  productDetails,
} from "../../controllers/Product/product.js";

const router = express.Router();

router.get("/", getProducts);
router.get("/:id", productDetails);

export default router;
