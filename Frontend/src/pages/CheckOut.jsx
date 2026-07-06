import Navbar from "../components/Home/Navbar";
import Footer from "../components/Home/Footer";
import SelectionCard from "../components/CheckOut/SelectionCard";
import PromoCard from "../components/CheckOut/PromoCard";
import CustomerInfoCard from "../components/CheckOut/CustomerInfoCard";
import ShippingAddressCard from "../components/CheckOut/ShippingAddressCard";
import ShippingMethodCard from "../components/CheckOut/ShippingMethodCard";
import PaymentMethodCard from "../components/CheckOut/PaymentMethodCard";

export default function CheckOut() {
  return (
    <>
      <Navbar />
      <div className="flex justify-center">
        <div>
          <SelectionCard />
          <PromoCard />
          <CustomerInfoCard />
          <ShippingAddressCard />
          <ShippingMethodCard />
          <PaymentMethodCard />
        </div>
      </div>
      <Footer />
    </>
  );
}
