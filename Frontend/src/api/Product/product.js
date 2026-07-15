import api from "../axios";

export const getProducts = async () => {
  const res = await api.get("/product");
  return res.data;
};

export const getProductDetails = async (id) => {
  const res = await api.get(`/product/${id}`);
  return res.data;
};
