import express from "express";
import { upload } from "../middleware/multer.js";
import { uploadImage, deleteImage } from "../controllers/product.js";

const router = express.Router();

router.post("/upload-image", upload.single("image"), uploadImage);

router.post("/delete-image", deleteImage);

export default router;
