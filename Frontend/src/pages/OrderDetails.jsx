import Breadcrumb from "../components/OrderDetails/Breadcrumb";
import OrderHeader from "../components/OrderDetails/OrderHeader";
import OrderedProducts from "../components/OrderDetails/OrderedProducts";
import TrackingInfo from "../components/OrderDetails/TrackingInfo";
import ShippingAddress from "../components/OrderDetails/ShippingAddress";
import OrderSummary from "../components/OrderDetails/OrderSummary";
import Header from "../components/AdminDashboard/Header";
import Sidebar from "../components/AdminDashboard/Sidebar";

export default function OrderDetails() {
  return (
    <>
      <div className="px-4">
        <Header />
      </div>
      <div className="grid grid-cols-1  lg:grid-cols-12">
        <div className="  lg:col-span-2">
          <Sidebar />
        </div>
        <div className="col-span-1 md:col-span-8 lg:col-span-10 min-h-screen bg-[#f5f3ff]">
          <div className="mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
            <Breadcrumb />
            <OrderHeader />

            <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="space-y-6 lg:grid lg:col-span-3 lg:grid-cols-3">
                <TrackingInfo />
                <ShippingAddress />
                <OrderSummary />
              </div>
              {/* Left Column - Products */}
              <div className="lg:col-span-3">
                <OrderedProducts />
              </div>

              {/* Right Column - Sidebar */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
