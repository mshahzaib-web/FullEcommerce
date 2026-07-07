import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ShopProducts from "./pages/ShopProducts";
import Category from "./pages/Category";
import ProductDetails from "./pages/ProductDetails";
import ShoppingCart from "./pages/ShoppingCart";
import CheckOut from "./pages/CheckOut";
import AdminDashboard from "./pages/AdminDashboard";

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
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
