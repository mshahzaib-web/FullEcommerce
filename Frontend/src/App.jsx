import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "sonner";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Loading from "./pages/Loading";
import UserSignUp from "./pages/UserSignUp";
import UserLogIn from "./pages/UserLogIn";
import Home from "./pages/Home";
import ShopProducts from "./pages/ShopProducts";
import Category from "./pages/Category";
import ProductDetails from "./pages/ProductDetails";
import AddReview from "./pages/AddReview";
import UpdateProductReviewForm from "./pages/UpdateProductReviewForm";
import CustomerReviews from "./pages/CustomerReviews";
import WishList from "./pages/WishList";
import ShoppingCart from "./pages/ShoppingCart";
import CheckOut from "./pages/CheckOut";
import CustomerOrders from "./pages/CustomerOrders";
import AdminDashboard from "./pages/AdminDashboard";
import AddProduct from "./pages/AddProduct";
import ProductManage from "./pages/ProductManage";
import OrdersManage from "./pages/OrdersManage";
import OrderDetails from "./pages/OrderDetails";
import AdminSignUp from "./pages/AdminSignUp";
import AdminLogIn from "./pages/AdminLogIn";

import AdminRoutesProtect from "./ProtectRoutes/AdminRoutesProtect";
import UserRoutesProtect from "./ProtectRoutes/UserRoutesProtect";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Toaster position="top-center" richColors closeButton />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            {/* User Protect Routes */}
            <Route element={<UserRoutesProtect />}>
              <Route
                path="/user/product/:id/add-review"
                element={<AddReview />}
              ></Route>
              <Route
                path="/user/product/:id/update-review"
                element={<UpdateProductReviewForm />}
              ></Route>
              <Route path="/user/wishlist" element={<WishList />}></Route>
              <Route path="/user/cart" element={<ShoppingCart />}></Route>
              <Route
                path="/user/product/:id/checkout"
                element={<CheckOut />}
              ></Route>
              <Route path="/user/orders" element={<CustomerOrders />}></Route>
            </Route>

            <Route path="/loading" element={<Loading />}></Route>
            <Route path="/user/signup" element={<UserSignUp />}></Route>
            <Route path="/user/login" element={<UserLogIn />}></Route>
            <Route path="/" element={<Home />}></Route>
            <Route path="/shop" element={<ShopProducts />}></Route>
            <Route path="/category" element={<Category />}></Route>
            <Route path="/product/:id" element={<ProductDetails />}></Route>

            <Route
              path="/product/:id/reviews"
              element={<CustomerReviews />}
            ></Route>

            {/* Admin Protect Routes */}
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
