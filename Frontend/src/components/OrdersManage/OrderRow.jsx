import StatusBadge from "./StatusBadge";

function OrderRow({ order }) {
  return (
    <tr className="border-b border-gray-100 last:border-b-0 hover:bg-gray-50 transition-colors duration-150">
      {/* Order ID */}
      <td className="px-4 sm:px-6 py-4 sm:py-5">
        <span className="text-indigo-700 font-bold text-sm sm:text-base whitespace-nowrap">
          #{order.id}
        </span>
      </td>

      {/* Customer */}
      <td className="px-4 sm:px-6 py-4 sm:py-5">
        <div>
          <p className="font-semibold text-gray-900 text-sm sm:text-base">
            {order.customerName}
          </p>
          <p className="text-gray-500 text-xs sm:text-sm">
            {order.customerEmail}
          </p>
        </div>
      </td>

      {/* Products */}
      <td className="px-4 sm:px-6 py-4 sm:py-5">
        {order.productType === "count" ? (
          <span className="inline-flex items-center justify-center w-8 h-8 bg-indigo-100 text-indigo-700 rounded-lg text-xs font-bold">
            1
          </span>
        ) : order.productType === "headphone" ? (
          <div className="w-8 h-8 flex items-center justify-center">2</div>
        ) : (
          <div className="w-8 h-8 flex items-center justify-center">3</div>
        )}
      </td>

      {/* Payment */}
      <td className="px-4 sm:px-6 py-4 sm:py-5">
        <StatusBadge
          label={order.paymentStatus}
          variant={order.paymentVariant}
        />
      </td>

      {/* Status */}
      <td className="px-4 sm:px-6 py-4 sm:py-5">
        <StatusBadge label={order.orderStatus} variant={order.statusVariant} />
      </td>
    </tr>
  );
}

export default OrderRow;
