import { createContext, useContext } from "react";

const updateProductContext = createContext();

export const useUpdateProduct = () => useContext(updateProductContext);

export default updateProductContext;
