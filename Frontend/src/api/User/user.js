import api from "../axios";

export const getCurrentUser = async () => {
  try {
    const res = await api.get("/user/auth/me");
    return res.data.user;
  } catch (error) {
    if (error.response?.status === 401) {
      return null;
    }

    throw error;
  }
};

export const userSignUp = async (data) => {
  const res = await api.post("/user/signup", data);
  return res.data;
};

export const userLogIn = async (data) => {
  const res = await api.post("/user/login", data);
  return res.data;
};

export const userLogout = async () => {
  const res = await api.post("/user/logout");
  return res.data;
};

export const wishlistProduct = async (id) => {
  const res = await api.post(`/user/wishlist/${id}`);
  return res.data;
};

export const getWishlistProduct = async () => {
  const res = await api.get("/user/wishlist");
  return res.data;
};

export const removeWishlistProduct = async (id) => {
  const res = await api.post(`/user/wishlist/remove/${id}`);
  return res.data;
};

export const addToCart = async (data) => {
  const res = await api.post(`user/addtocart/${data.productId}`, data);
  return res.data;
};

export const getCartProduct = async () => {
  const res = await api.get("user/cartproduct");
  return res.data;
};

export const removeCartProduct = async (id) => {
  const res = await api.post(`/user/cart/remove/${id}`);
  return res.data;
};
