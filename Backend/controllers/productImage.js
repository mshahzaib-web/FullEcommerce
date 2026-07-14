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

export const uploadSubImages = asyncHandler(async (req, res) => {
  const files = req.files;
  const uploadPromises = files.map((file) => {
    // Use file.buffer if using memoryStorage, or file.path if saving locally first
    return uploadToCloudinary(file.buffer);
  });

  // 2. Wait for all uploads to complete in parallel
  const cloudinaryResults = await Promise.all(uploadPromises);

  const subImageDetails = cloudinaryResults.map((result) => ({
    url: result.secure_url,
    public_id: result.public_id,
  }));

  res.status(200).json({
    success: true,
    message: "Images Upload Successfully",
    subImageDetails,
  });
});

export const deleteSubImage = asyncHandler(async (req, res) => {
  const { public_id } = req.body;
  const result = await deleteFromCloudinary(public_id);
  res.status(200).json({
    success: true,
    message: "subImage delte",
    public_id,
  });
});
