import api from "../axios.js";

// Get Current Admin
export const getCurrentAdmin = async () => {
  try {
    const res = await api.get("/admin/auth/me");
    return res.data.admin;
  } catch (error) {
    if (error.response?.status === 401) {
      return null;
    }

    throw error;
  }
};

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

//Admin SignUp
export const adminSignUp = async (data) => {
  const res = await api.post("/admin/signup", data);
  return res.data;
};

//Admin Login
export const adminLogIn = async (data) => {
  const res = await api.post("/admin/login", data);
  return res.data;
};
