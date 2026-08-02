import { createContext, useContext } from "react";

const homeProductContext = createContext();

export const useHomeProduct = () => useContext(homeProductContext);

export default homeProductContext;
