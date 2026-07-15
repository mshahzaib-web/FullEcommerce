import Heading from "../components/OrdersManage/Heading";
import FilterBar from "../components/OrdersManage/FilterBar";
import OrdersTable from "../components/OrdersManage/OrdersTable";
import Header from "../components/AdminDashboard/Header";
import Sidebar from "../components/AdminDashboard/Sidebar";

export default function OrdersManage() {
  return (
    <>
      <div className="px-4">
        <Header />
      </div>
      <div className="grid grid-cols-12">
        <div className="col-span-12 lg:col-span-3">
          <Sidebar />
        </div>
        <div className="px-4 col-span-12 lg:col-span-9">
          <div className="">
            <Heading />
          </div>
          <div className="md:ms-13 lg:ms-0">
            <FilterBar />
          </div>
          <OrdersTable />
        </div>
      </div>
    </>
  );
}
