import { createContext, useContext } from "react";

const orderDetailsContext = createContext();

export const useOrderDetails = () => useContext(orderDetailsContext);

export default orderDetailsContext;
