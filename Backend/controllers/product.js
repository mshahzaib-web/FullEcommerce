import asyncHandler from "express-async-handler";
import {
  uploadToCloudinary,
  deleteFromCloudinary,
} from "../utils/uploadToCloudinary.js";
import { success } from "zod";
export const uploadImage = asyncHandler(async (req, res) => {
  if (!req.file) {
    return res.status(400).json({
      success: false,
      message: "Please upload an image",
    });
  }

  const result = await uploadToCloudinary(req.file.buffer);

  res.status(200).json({
    success: true,
    message: "Image uploaded successfully",
    image: {
      url: result.secure_url,
      public_id: result.public_id,
    },
  });
});

export const deleteImage = asyncHandler(async (req, res) => {
  const { public_id } = req.body;

  const result = await deleteFromCloudinary(public_id);
  res.status(200).json({
    success: true,
    message: "image delete",
  });
});
