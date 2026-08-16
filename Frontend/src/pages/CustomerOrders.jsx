import CustomerOrdersCom from "../components/CustomerOrders/CustomerOrdersCom";
import Navbar from "../components/Home/Navbar";
import Footer from "../components/Home/Footer";

export default function CustomerOrders() {
  return (
    <>
      <Navbar />
      <div>
        <CustomerOrdersCom />
      </div>
      <Footer />
    </>
  );
}
