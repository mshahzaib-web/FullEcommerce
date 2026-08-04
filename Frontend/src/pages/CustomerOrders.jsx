import CustomerOrdersCom from "../components/CustomerOrders/CustomerOrdersCom";
import Navbar from "../components/Home/Navbar";

export default function CustomerOrders() {
  return (
    <>
      <Navbar />
      <div>
        <CustomerOrdersCom />
      </div>
    </>
  );
}
