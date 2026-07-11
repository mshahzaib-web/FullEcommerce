import api from "./axios.js";

export const uploadImage = async (formData) => {
  const res = await api.post("/product/upload-image", formData);
  return res.data;
};

export const deleteImage = async (image) => {
  const res = await api.post("/product/delete-image", image);
  return res.data;
};
