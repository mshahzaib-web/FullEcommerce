import multer from "multer";

const storage = multer.memoryStorage();
export const upload = multer({
  storage,
  limits: {
    fileSize: 2 * 1024 * 1024,
  }, // 5MB limit per file
});

export const uploadProductFields = upload.fields([
  { name: "mainImage", maxCount: 1 },
  { name: "subImages", maxCount: 5 },
]);
