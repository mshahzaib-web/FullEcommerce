import { useParams } from "react-router-dom";

import Breadcrumb from "../components/OrderDetails/Breadcrumb";
import OrderHeader from "../components/OrderDetails/OrderHeader";
import OrderedProducts from "../components/OrderDetails/OrderedProducts";
import TrackingInfo from "../components/OrderDetails/TrackingInfo";
import ShippingAddress from "../components/OrderDetails/ShippingAddress";
import OrderSummary from "../components/OrderDetails/OrderSummary";

import Header from "../components/AdminDashboard/Header";
import Sidebar from "../components/AdminDashboard/Sidebar";

import orderDetailsContext from "../context/orderDetailsContext";
import { useQuery } from "@tanstack/react-query";
import { getAdminOrderDetailsInfo } from "../api/Admin/admin";
import LoadingCom from "../components/Loading/LoadingCom";

export default function OrderDetails() {
  const { id } = useParams();

  const { data, isPending } = useQuery({
    queryKey: ["adminorderdetails", id],
    queryFn: () => getAdminOrderDetailsInfo(id),
  });

  const orderInfo = data?.orderInfo?.[0] || null;

  if (isPending) return <LoadingCom />;

  return (
    <>
      <div className="px-4">
        <Header />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="lg:col-span-2">
          <Sidebar />
        </div>

        <div className="col-span-10 min-h-screen bg-[#f5f3ff] ">
          <orderDetailsContext.Provider value={orderInfo}>
            <div className="mx-auto w-full max-w-[1500px] px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
              <div className="space-y-6">
                <Breadcrumb />
                <OrderHeader />

                <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-12">
                  {/* Main Product Section */}
                  <div className="lg:col-span-12">
                    <OrderedProducts />
                  </div>

                  {/* Right Sidebar */}
                  <div className="space-y-6 lg:sticky lg:top-6 lg:col-span-12">
                    <TrackingInfo />
                    <ShippingAddress />
                    <OrderSummary />
                  </div>
                </div>
              </div>
            </div>
          </orderDetailsContext.Provider>
        </div>
      </div>
    </>
  );
}
