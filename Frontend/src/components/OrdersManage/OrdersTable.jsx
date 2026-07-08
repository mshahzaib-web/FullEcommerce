import StatusBadge from "./StatusBadge";
import OrderRow from "./OrderRow";

const orders = [
  {
    id: "ORD-28491",
    customerName: "Eleanor Vance",
    customerEmail: "e.vance@example.com",
    productType: "count",
    productCount: 1,
    paymentStatus: "Paid",
    paymentVariant: "paid",
    orderStatus: "Delivered",
    statusVariant: "delivered",
  },
  {
    id: "ORD-28492",
    customerName: "Julian Brooks",
    customerEmail: "j.brooks@example.com",
    productType: "headphone",
    paymentStatus: "Pending",
    paymentVariant: "pending",
    orderStatus: "Processing",
    statusVariant: "processing",
  },
  {
    id: "ORD-28493",
    customerName: "Sarah Chen",
    customerEmail: "s.chen@example.com",
    productType: "bag",
    paymentStatus: "Paid",
    paymentVariant: "paid",
    orderStatus: "Shipped",
    statusVariant: "shipped",
  },
];

function OrdersTable() {
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
                Products
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
            {orders.map((order) => (
              <OrderRow key={order.id} order={order} />
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden divide-y divide-gray-100">
        {orders.map((order) => (
          <div
            key={order.id}
            className="p-4 hover:bg-gray-50 transition-colors duration-150"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-indigo-700 font-bold text-sm">
                #{order.id}
              </span>
              <StatusBadge
                label={order.orderStatus}
                variant={order.statusVariant}
              />
            </div>
            <div className="mb-2">
              <p className="font-semibold text-gray-900 text-sm">
                {order.customerName}
              </p>
              <p className="text-gray-500 text-xs">{order.customerEmail}</p>
            </div>
            <div className="flex items-center justify-between">
              <StatusBadge
                label={order.paymentStatus}
                variant={order.paymentVariant}
              />
              {order.productType === "count" ? (
                <span className="inline-flex items-center justify-center w-8 h-8 bg-indigo-100 text-indigo-700 rounded-lg text-xs font-bold">
                  1
                </span>
              ) : order.productType === "headphone" ? (
                <div className="w-8 h-8 flex items-center justify-center">
                  2
                </div>
              ) : (
                <div className="w-8 h-8 flex items-center justify-center">
                  3
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OrdersTable;
