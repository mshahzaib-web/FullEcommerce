import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "sonner";
import UserSignUp from "./pages/UserSignUp";
import UserLogIn from "./pages/UserLogIn";
import Home from "./pages/Home";
import ShopProducts from "./pages/ShopProducts";
import Category from "./pages/Category";
import ProductDetails from "./pages/ProductDetails";
import WishList from "./pages/WishList";
import ShoppingCart from "./pages/ShoppingCart";
import CheckOut from "./pages/CheckOut";
import AdminDashboard from "./pages/AdminDashboard";
import AddProduct from "./pages/AddProduct";
import ProductManage from "./pages/ProductManage";
import OrdersManage from "./pages/OrdersManage";
import OrderDetails from "./pages/OrderDetails";
import AdminSignUp from "./pages/AdminSignUp";
import AdminLogIn from "./pages/AdminLogIn";

import AdminRoutesProtect from "./ProtectRoutes/AdminRoutesProtect";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Toaster position="top-center" richColors closeButton />
        <BrowserRouter>
          <Routes>
            <Route path="/user/signup" element={<UserSignUp />}></Route>
            <Route path="/user/login" element={<UserLogIn />}></Route>
            <Route path="/" element={<Home />}></Route>
            <Route path="/shop" element={<ShopProducts />}></Route>
            <Route path="/category" element={<Category />}></Route>
            <Route path="/product/:id" element={<ProductDetails />}></Route>
            <Route path="/wishlist" element={<WishList />}></Route>
            <Route path="/cart" element={<ShoppingCart />}></Route>
            <Route path="/checkout" element={<CheckOut />}></Route>

            <Route element={<AdminRoutesProtect />}>
              <Route
                path="/admin/dashboard"
                element={<AdminDashboard />}
              ></Route>
              <Route path="/admin/add-product" element={<AddProduct />}></Route>
              <Route path="/admin/products" element={<ProductManage />}></Route>
              <Route path="/admin/orders" element={<OrdersManage />}></Route>
              <Route
                path="/admin/order-details"
                element={<OrderDetails />}
              ></Route>
            </Route>
            <Route path="/admin/signup" element={<AdminSignUp />}></Route>
            <Route path="/admin/login" element={<AdminLogIn />}></Route>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
}

export default App;
