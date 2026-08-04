import Sidebar from "../components/AdminDashboard/Sidebar";
import Header from "../components/AdminDashboard/Header";
import Card from "../components/AdminDashboard/Card";
import { useNavigate } from "react-router-dom";

import "../CSS/AdminDashboard.css";
import { useQuery } from "@tanstack/react-query";
import { getAdminProducts } from "../api/Admin/admin";
import { toast } from "sonner";
import LoadingCom from "../components/Loading/LoadingCom";

export default function AdminDashboard() {
  const navigate = useNavigate();

  const { data, isPending, error } = useQuery({
    queryKey: ["adminproducts"],
    queryFn: getAdminProducts,
  });

  let lowStockProducts = 0;
  let outStockProducts = 0;

  data?.products?.forEach((product) => {
    if (product.stock === 0) {
      outStockProducts++;
    }
    if (product.stock > 0 && product.stock < 20) {
      lowStockProducts++;
    }
  });

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
              <Card
                title="Total Products"
                value={data?.products?.length}
                subtitle="All products in catalog"
                icon="total"
                tone="indigo"
                progress={86}
                progressLabel="Catalog health"
                trend="+18 this week"
                stats={[{ label: "products", value: data?.products?.length }]}
                onClick={() => navigate("/admin/products")}
              />

              <Card
                title="Low Stock Items"
                value={lowStockProducts}
                subtitle="Products below minimum stock"
                icon="low"
                tone="amber"
                progress={34}
                progressLabel="Stock remaining"
                trend="Restock soon"
                showPulse
                stats={[
                  { label: "products", value: lowStockProducts },
                  { label: "Stock below 20", value: "" },
                ]}
                onClick={() => navigate("/admin/products?filter=low-stock")}
              />

              <Card
                title="Out of Stock"
                value={outStockProducts}
                subtitle="Products currently unavailable"
                icon="out"
                tone="rose"
                progress={8}
                progressLabel="Availability"
                trend="Urgent"
                showPulse
                stats={[
                  { label: "products", value: outStockProducts },
                  { label: "Stock 0", value: "" },
                ]}
                onClick={() => navigate("/admin/products?filter=out-of-stock")}
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
