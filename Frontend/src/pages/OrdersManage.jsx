import { useSearchParams } from "react-router-dom";

import Heading from "../components/OrdersManage/Heading";
import FilterBar from "../components/OrdersManage/FilterBar";
import OrdersTable from "../components/OrdersManage/OrdersTable";
import Header from "../components/AdminDashboard/Header";
import Sidebar from "../components/AdminDashboard/Sidebar";
import { useState } from "react";
import { useEffect } from "react";

export default function OrdersManage() {
  const [search, setSearch] = useState("");
  const [searchStatus, setSearchStatus] = useState("All Statuses");
  const [searchPayment, setSearchPayment] = useState("All Payments");

  const [searchParams] = useSearchParams();

  const filterStatus = searchParams.get("filterStatus");

  const filterPayment = searchParams.get("filterPayment");

  useEffect(() => {
    if (filterStatus) {
      setSearchStatus(filterStatus);
    }

    if (filterPayment) {
      setSearchPayment(filterPayment);
    }
  }, [filterStatus, filterPayment]);

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
            <FilterBar
              search={search}
              searchStatus={searchStatus}
              searchPayment={searchPayment}
              setSearch={setSearch}
              setSearchPayment={setSearchPayment}
              setSearchStatus={setSearchStatus}
            />
          </div>
          <OrdersTable
            search={search}
            searchStatus={searchStatus}
            searchPayment={searchPayment}
          />
        </div>
      </div>
    </>
  );
}
