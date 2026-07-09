import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ShopProducts from "./pages/ShopProducts";
import Category from "./pages/Category";
import ProductDetails from "./pages/ProductDetails";
import ShoppingCart from "./pages/ShoppingCart";
import CheckOut from "./pages/CheckOut";
import AdminDashboard from "./pages/AdminDashboard";
import AddProduct from "./pages/AddProduct";
import ProductManage from "./pages/ProductManage";
import OrdersManage from "./pages/OrdersManage";
import OrderDetails from "./pages/OrderDetails";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/shop" element={<ShopProducts />}></Route>
          <Route path="/category" element={<Category />}></Route>
          <Route path="/product" element={<ProductDetails />}></Route>
          <Route path="/cart" element={<ShoppingCart />}></Route>
          <Route path="/checkout" element={<CheckOut />}></Route>
          <Route path="/admin-dashboard" element={<AdminDashboard />}></Route>
          <Route path="/admin/add-product" element={<AddProduct />}></Route>
          <Route path="/admin/products" element={<ProductManage />}></Route>
          <Route path="/admin/orders" element={<OrdersManage />}></Route>
          <Route path="/admin/order-details" element={<OrderDetails />}></Route>
          <Route path="/admin/signup" element={<SignUp />}></Route>
          <Route path="/admin/login" element={<LogIn />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
