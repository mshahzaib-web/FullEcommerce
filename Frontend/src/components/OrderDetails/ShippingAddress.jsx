import { useOrderDetails } from "../../context/orderDetailsContext";

function ShippingAddress() {
  const orderInfo = useOrderDetails();

  return (
    <section className="overflow-hidden rounded-3xl border border-violet-100 bg-white shadow-sm">
      <div className="flex items-center justify-between gap-3 border-b border-violet-100 bg-gradient-to-r from-violet-50/70 to-white px-5 py-4 sm:px-6">
        <div>
          <h2 className="text-base font-bold text-gray-900 sm:text-lg">
            Shipping Address
          </h2>
          <p className="text-xs text-gray-500 sm:text-sm">
            Delivery location details
          </p>
        </div>

        <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-violet-100 text-violet-700">
          <svg
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </span>
      </div>

      <div className="space-y-4 px-5 py-5 sm:px-6">
        <div className="rounded-2xl border border-dashed border-violet-200 bg-violet-50/40 p-4">
          <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
            Full Address
          </p>
          <p className="mt-2 text-sm font-medium leading-6 text-gray-900">
            {orderInfo?.address || "N/A"}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3 ">
          <div className="rounded-2xl border border-gray-100 bg-gray-50/60 p-4">
            <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
              City
            </p>
            <p className="mt-1 text-sm font-semibold text-gray-900">
              {orderInfo?.city || "N/A"}
            </p>
          </div>

          <div className="rounded-2xl border border-gray-100 bg-gray-50/60 p-4">
            <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
              Country
            </p>
            <p className="mt-1 text-sm font-semibold text-gray-900">
              {orderInfo?.country || "N/A"}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ShippingAddress;
