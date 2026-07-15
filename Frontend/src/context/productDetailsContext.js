import { createContext, useContext } from "react";

const productDetailsContext = createContext();

export const useProductDetails = () => useContext(productDetailsContext);

export default productDetailsContext;
