import Breadcrumb from "../components/OrderDetails/Breadcrumb";
import OrderHeader from "../components/OrderDetails/OrderHeader";
import OrderedProducts from "../components/OrderDetails/OrderedProducts";
import TrackingInfo from "../components/OrderDetails/TrackingInfo";
import ShippingAddress from "../components/OrderDetails/ShippingAddress";
import PaymentInfo from "../components/OrderDetails/PaymentInfo";
import OrderSummary from "../components/OrderDetails/OrderSummary";
import Header from "../components/AdminDashboard/Header";
import Sidebar from "../components/AdminDashboard/Sidebar";

export default function OrderDetails() {
  return (
    <>
      <div className="px-4">
        <Header />
      </div>
      <div className="grid grid-cols-1  md:grid-cols-12">
        <div className="hidden md:block md:col-span-4 lg:col-span-3">
          <Sidebar />
        </div>
        <div className="col-span-1 md:col-span-8 lg:col-span-9 min-h-screen bg-[#f5f3ff]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
            <Breadcrumb />
            <OrderHeader />

            <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Left Column - Products */}
              <div className="lg:col-span-2">
                <OrderedProducts />
              </div>

              {/* Right Column - Sidebar */}
              <div className="space-y-6">
                <TrackingInfo />
                <ShippingAddress />
                <PaymentInfo />
                <OrderSummary />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
