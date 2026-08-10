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

//get Admin information
export const getAdminInfo = async (id) => {
  const res = await api.get(`/admin/${id}/info`);
  return res.data;
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

//Admin logout
export const adminLogout = async () => {
  const res = await api.post("/admin/logout");
  return res.data;
};

// Get all Amdin Product
export const getAdminProducts = async ({ product, adminSearchProduct }) => {
  const url = product
    ? `/admin/products?product=${product}`
    : `/admin/products`;

  const res = await api.get(url, {
    params: { search: adminSearchProduct },
  });
  return res.data;
};

// Admin Update Product
export const updateProduct = async ({ id, data }) => {
  const res = await api.put(`/admin/${id}/update-product`, data);
  return res.data;
};

// Admin Dashboard data get
export const getAdminDashboardData = async () => {
  const res = await api.get("/admin/dashboard/data");
  return res.data;
};

// Get admin Orders
export const getAdminOrders = async (filterOrder) => {
  const res = await api.get("/admin/orders", {
    params: filterOrder,
  });
  return res.data;
};

//get admin order dtails information
export const getAdminOrderDetailsInfo = async (id) => {
  const res = await api.get(`/admin/order/${id}/order-details`);
  return res.data;
};

//Update Order Status and payment
export const updateOrderStatus = async ({ id, data }) => {
  const res = await api.put(`/admin/order/${id}/updatestatus`, data);
  return res.data;
};

// Admin Delte the order after complete the order
export const adminDeleteOrder = async (id) => {
  const res = await api.delete(`/admin/order/${id}/delete`);
  return res.data;
};
