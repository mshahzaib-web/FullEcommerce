import express from "express";
import { upload } from "../middleware/multer.js";
import {
  uploadImage,
  deleteImage,
  uploadSubImages,
  deleteSubImage,
} from "../controllers/productImage.js";

const router = express.Router();

router.post("/upload-image", upload.single("image"), uploadImage);

router.post("/delete-image", deleteImage);

router.post(
  "/upload-sub-images",
  upload.array("subImages", 5),
  uploadSubImages,
);

router.post("/delete-sub-image", deleteSubImage);

export default router;
