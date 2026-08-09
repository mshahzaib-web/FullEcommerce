import Sidebar from "../components/AdminDashboard/Sidebar";
import Header from "../components/AdminDashboard/Header";
import Card from "../components/AdminDashboard/Card";
import { useNavigate } from "react-router-dom";

import "../CSS/AdminDashboard.css";
import { useQuery } from "@tanstack/react-query";
import { toast } from "sonner";
import LoadingCom from "../components/Loading/LoadingCom";
import { getAdminDashboardData } from "../api/Admin/admin";

export default function AdminDashboard() {
  const navigate = useNavigate();

  const { data, isPending, error } = useQuery({
    queryKey: ["admindashboard"],
    queryFn: getAdminDashboardData,
  });

  console.log(data);

  if (error) return toast.error(error.message);
  if (isPending) return <LoadingCom />;

  return (
    <>
      <div>
        <div className="px-4">
          <Header />
        </div>
        <div className="grid grid-cols-12">
          <div className="col-span-12  lg:col-span-3">
            <Sidebar />
          </div>
          <div className=" m-4 lg:mx-0 col-span-12 lg:col-span-8 gap-4">
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {/* Products cart */}
              <Card
                title="Total Products"
                value={data?.products?.totalProducts}
                subtitle="All products in catalog"
                icon="total"
                tone="indigo"
                progress={86}
                progressLabel="Catalog health"
                trend="+18 this week"
                stats={[
                  { label: "products", value: data?.products?.totalProducts },
                ]}
                onClick={() => navigate("/admin/products")}
              />

              <Card
                title="Healthy Products"
                value={data?.products?.healthyStock}
                subtitle="All products good not action required"
                icon="total"
                tone="green"
                progress={86}
                progressLabel="Catalog health"
                trend="+18 this week"
                stats={[
                  { label: "products", value: data?.products?.healthyStock },
                ]}
                onClick={() =>
                  navigate("/admin/products?products=healthy-stock")
                }
              />

              <Card
                title="Low Stock Items"
                value={data?.products?.lowStock}
                subtitle="Products below minimum stock"
                icon="low"
                tone="amber"
                progress={34}
                progressLabel="Stock remaining"
                trend="Restock soon"
                showPulse
                stats={[
                  {
                    label: "products",
                    value: data?.products?.lowStock,
                  },
                  { label: "Stock below 20", value: "" },
                ]}
                onClick={() => navigate("/admin/products?products=low-stock")}
              />

              <Card
                title="Out of Stock"
                value={data?.products?.outOfStock}
                subtitle="Products currently unavailable"
                icon="out"
                tone="rose"
                progress={8}
                progressLabel="Availability"
                trend="Urgent"
                showPulse
                stats={[
                  {
                    label: "products",
                    value: data?.products?.outOfStock,
                  },
                  { label: "Stock 0", value: "" },
                ]}
                onClick={() =>
                  navigate("/admin/products?products=out-of-stock")
                }
              />

              {/* Orders Card */}

              <Card
                title="Total Orders"
                value={data?.orders?.totalOrders}
                subtitle="All orders in catalog"
                icon="total"
                tone="indigo"
                progress={86}
                progressLabel="Catalog health"
                trend="+18 this week"
                stats={[{ label: "Orders", value: data?.orders?.totalOrders }]}
                onClick={() => navigate("/admin/orders")}
              />

              <Card
                title="Pending Orders"
                value={data?.orders?.pendingOrders}
                subtitle="Pending Orders"
                icon="low"
                tone="amber"
                progress={34}
                progressLabel="Pending Orders"
                trend="Apply Action"
                showPulse
                stats={[
                  {
                    label: "Orders",
                    value: data?.orders?.pendingOrders,
                  },
                  { label: "Pending", value: "" },
                ]}
                onClick={() => navigate("/admin/orders?filterStatus=Pending")}
              />

              <Card
                title="Processing Orders"
                value={data?.orders?.processingOrders}
                subtitle="Processing Orders"
                icon="total"
                tone="blue"
                progress={34}
                progressLabel="Processing Orders"
                trend="Action in processing..."
                showPulse
                stats={[
                  {
                    label: "Orders",
                    value: data?.orders?.processingOrders,
                  },
                  { label: "Processing", value: "" },
                ]}
                onClick={() =>
                  navigate("/admin/orders?filterStatus=Processing")
                }
              />

              <Card
                title="Delivered Orders"
                value={data?.orders?.deliveredOrders}
                subtitle="Delivered Orders"
                icon="total"
                tone="green"
                progress={86}
                progressLabel="Delivered Orders"
                trend="+18 this week"
                stats={[
                  { label: "Orders", value: data?.orders?.deliveredOrders },
                  { label: "Delivered", value: "" },
                ]}
                onClick={() => navigate("/admin/orders?filterStatus=Delivered")}
              />

              <Card
                title="Unpaid Orders"
                value={data?.orders?.unpaidOrders}
                subtitle="Unpaid Orders"
                icon="out"
                tone="rose"
                progress={8}
                progressLabel="Unpaid"
                trend="Unpaid"
                showPulse
                stats={[
                  {
                    label: "Orders",
                    value: data?.orders?.unpaidOrders,
                  },
                  { label: "Unpaid", value: "" },
                ]}
                onClick={() => navigate("/admin/orders?filterPayment=Unpaid")}
              />

              <Card
                title="Paid Orders"
                value={data?.orders?.paidOrders}
                subtitle="Paid Orders"
                icon="total"
                tone="green"
                progress={86}
                progressLabel="Paid Orders"
                trend="Paid Orders"
                stats={[
                  { label: "Orders", value: data?.orders?.paidOrders },
                  { label: "Paid", value: "" },
                ]}
                onClick={() => navigate("/admin/orders?filterPayment=Paid")}
              />
            </div>
          </div>
        </div>
      </div>

      {/* <div className="container mx-auto">
        <div className="flex">
          <div className="hidden md:block ">
            <Sidebar />
          </div>
          <div className="w-full">
            <div className="">
              <Header />
            </div>
            <div className="py-10 ps-5">
              <p>
                Here's what's happening with LuxeAura today, October 24, 2023.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6">
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}
