import api from "../axios";

export const getProducts = async ({ search, filter }) => {
  const res = await api.get("/product", {
    params: {
      search,
      ...filter,
    },
  });
  return res.data;
};

export const getProductDetails = async (id) => {
  const res = await api.get(`/product/${id}`);
  return res.data;
};

export const getProductReviews = async (id) => {
  const res = await api.get(`/product/${id}/reviews`);
  return res.data;
};
