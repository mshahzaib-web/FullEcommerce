import api from "./axios.js";

export const uploadImage = async (formData) => {
  const res = await api.post("/product/upload-image", formData);
  return res.data;
};

export const deleteImage = async (image) => {
  const res = await api.post("/product/delete-image", image);
  return res.data;
};

export const uploadSubImages = async (formData) => {
  const res = await api.post("/product/upload-sub-images", formData);
  return res.data;
};

export const deleteSubImage = async (subImage) => {
  const res = await api.post("/product/delete-sub-image", subImage);
  return res.data;
};
