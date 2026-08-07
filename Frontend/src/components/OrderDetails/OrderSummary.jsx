import { useOrderDetails } from "../../context/orderDetailsContext";

function OrderSummary() {
  const orderInfo = useOrderDetails();

  return (
    <section className="overflow-hidden rounded-3xl border border-violet-100 bg-white shadow-sm">
      <div className="flex items-center justify-between gap-3 border-b border-violet-100 bg-linear-to-r from-violet-50/70 to-white px-5 py-4 sm:px-6">
        <div>
          <h2 className="text-base font-bold text-gray-900 sm:text-lg">
            Order Summary
          </h2>
        </div>

        <span className="inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
          Summary
        </span>
      </div>

      <div className="space-y-4 px-5 py-5 sm:px-6">
        <div className="flex items-center justify-between rounded-2xl border border-gray-100 bg-gray-50/60 px-4 py-3">
          <span className="text-sm text-gray-500">Price</span>
          <span className="text-sm font-semibold text-gray-900">
            {orderInfo?.price}
          </span>
        </div>

        <div className="flex items-center justify-between rounded-2xl border border-gray-100 bg-gray-50/60 px-4 py-3">
          <span className="text-sm text-gray-500">Quantity</span>
          <span className="text-sm font-semibold text-gray-900">
            {orderInfo?.quantity}
          </span>
        </div>

        <div className="flex items-center justify-between rounded-2xl border border-gray-100 bg-gray-50/60 px-4 py-3">
          <span className="text-sm text-gray-500">Shipping (Standard)</span>

          <span className="text-sm font-bold text-green-700">Free</span>
        </div>

        <div className="rounded-2xl bg-linear-to-r from-indigo-50 to-violet-50 p-4">
          <div className="flex items-center justify-between">
            <span className="text-base font-bold text-gray-900">Total</span>
            <span className="text-lg font-extrabold text-indigo-700">
              ${orderInfo?.price * orderInfo.quantity}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OrderSummary;
