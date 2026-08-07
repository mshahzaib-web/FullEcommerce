import StatusBadge from "./StatusBadge";
import OrderRow from "./OrderRow";
import { useQuery } from "@tanstack/react-query";
import LoadingCom from "../Loading/LoadingCom";
import { getAdminOrders } from "../../api/Admin/admin";
import { Link } from "react-router-dom";

function OrdersTable() {
  const { data, isPending } = useQuery({
    queryKey: ["adminorders"],
    queryFn: getAdminOrders,
  });

  console.log(data);

  if (isPending) return <LoadingCom />;

  return (
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
      {/* Desktop Table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-indigo-50/60 border-b border-gray-100">
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                Order ID
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                Customer
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                Quantity
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                Payment
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {data?.orders.map((order) => (
              <OrderRow key={order._id} order={order} />
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden divide-y divide-gray-100">
        {data?.orders.map((order) => (
          <div
            key={order._id}
            className="p-4 hover:bg-gray-50 transition-colors duration-150"
          >
            <Link to={`/admin/order/${order?._id}/order-details`}>
              <div className=" flex items-center justify-between mb-3">
                <span className="text-indigo-700 font-bold text-sm truncate max-w-24">
                  #{order._id}
                </span>
                <StatusBadge
                  label={order?.status}
                  variant={order?.status.toLowerCase()}
                />
              </div>
              <div className="mb-2">
                <p className="font-semibold text-gray-900 text-sm">
                  {order?.firstName}
                </p>
                <p className="text-gray-500 text-xs">{order?.email}</p>
              </div>
              <div className="flex items-center justify-between">
                <StatusBadge
                  label={order?.payment}
                  variant={order?.payment.toLowerCase()}
                />

                <span className="inline-flex items-center justify-center w-8 h-8 bg-indigo-100 text-indigo-700 rounded-lg text-xs font-bold">
                  1
                </span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OrdersTable;
