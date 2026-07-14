import api from "../axios.js";

//Uplad Main image
export const uploadImage = async (formData) => {
  const res = await api.post("/admin/product/upload-image", formData);
  return res.data;
};

//Delte Main Image
export const deleteImage = async (image) => {
  const res = await api.post("/admin/product/delete-image", image);
  return res.data;
};

//Upload Sub Images
export const uploadSubImages = async (formData) => {
  const res = await api.post("/admin/product/upload-sub-images", formData);
  return res.data;
};

//Delete Sub Image
export const deleteSubImage = async (subImage) => {
  const res = await api.post("/admin/product/delete-sub-image", subImage);
  return res.data;
};

//Add New Product
export const addProduct = async (finalData) => {
  const res = await api.post("/admin/add-product", finalData);
  return res.data;
};
