import CartItem from "../components/ShoppingCart/CartItem";
import Recommendations from "../components/ShoppingCart/Recommendations";
import Navbar from "../components/Home/Navbar";
import Footer from "../components/Home/Footer";

export default function ShoppingCart() {
  return (
    <>
      <Navbar />
      <div>
        <div className="container mx-auto px-6">
          <CartItem />
          <Recommendations />
        </div>
      </div>
      <Footer />
    </>
  );
}
