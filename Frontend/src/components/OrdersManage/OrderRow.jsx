import StatusBadge from "./StatusBadge";
import { Link } from "react-router-dom";

function OrderRow({ order }) {
  return (
    <tr className="border-b border-gray-100 last:border-b-0 hover:bg-gray-50 transition-colors duration-150">
      {/* Order ID */}
      <td className="max-w-28 truncate px-4 sm:px-6 py-4 sm:py-5">
        <Link to={`/admin/order/${order?._id}/order-details`}>
          <span className="text-indigo-700 font-bold text-sm sm:text-base whitespace-nowrap hover:underline">
            #{order?._id}
          </span>
        </Link>
      </td>

      {/* Customer */}
      <td className="px-4 sm:px-6 py-4 sm:py-5">
        <Link to={`/admin/order/${order?._id}/order-details`}>
          <div>
            <p className="font-semibold text-gray-900 text-sm sm:text-base">
              {order?.firstName}
            </p>
            <p className="text-gray-500 text-xs sm:text-sm">{order?.email}</p>
          </div>
        </Link>
      </td>

      {/* Products */}
      <td className="px-4 sm:px-6 py-4 sm:py-5">
        <span className="inline-flex items-center justify-center w-8 h-8 bg-indigo-100 text-indigo-700 rounded-lg text-xs font-bold">
          {order?.quantity}
        </span>
      </td>

      {/* Payment */}
      <td className="px-4 sm:px-6 py-4 sm:py-5">
        <StatusBadge
          label={order?.payment}
          variant={order?.payment.toLowerCase()}
        />
      </td>

      {/* Status */}
      <td className="px-4 sm:px-6 py-4 sm:py-5">
        <StatusBadge
          label={order?.status}
          variant={order?.status.toLowerCase()}
        />
      </td>
    </tr>
  );
}

export default OrderRow;
