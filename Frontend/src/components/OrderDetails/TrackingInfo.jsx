import { useOrderDetails } from "../../context/orderDetailsContext";

function TrackingInfo() {
  const orderInfo = useOrderDetails();

  // const fullName = [orderInfo?.firstName, orderInfo?.lastName]
  //   .filter(Boolean)
  //   .join(" ");

  // const initials = fullName
  //   ? fullName
  //       .split(" ")
  //       .map((word) => word[0])
  //       .join("")
  //       .toUpperCase()
  //       .slice(0, 2)
  //   : "CU";

  return (
    <section className="overflow-hidden rounded-3xl border border-violet-100 bg-white shadow-sm">
      <div className="flex items-center justify-between gap-3 border-b border-violet-100 bg-linear-to-r from-violet-50/70 to-white px-5 py-4 sm:px-6">
        <div>
          <h2 className="text-base font-bold text-gray-900 sm:text-lg">
            Customer Information
          </h2>
        </div>

        <span className="inline-flex items-center rounded-full bg-violet-100 px-3 py-1 text-xs font-semibold text-violet-700">
          Customer
        </span>
      </div>

      <div className="space-y-4 px-5 py-5 sm:px-6">
        <div className="flex items-start gap-4 rounded-2xl bg-violet-50/60 p-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-indigo-600 text-sm font-bold text-white">
            {orderInfo?.firstName[0]}
            {orderInfo?.lastName[0]}
          </div>

          <div className="min-w-0">
            <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
              Full Name
            </p>
            <p className="mt-1 wrap-break-word text-sm font-semibold text-gray-900">
              {orderInfo?.firstName} {orderInfo?.lastName}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-3">
          <div className="rounded-2xl border border-gray-100 bg-gray-50/60 p-4">
            <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
              Email
            </p>
            <p className="mt-1 break-all text-sm font-semibold text-gray-900">
              {orderInfo?.email}
            </p>
          </div>

          <div className="rounded-2xl border border-gray-100 bg-gray-50/60 p-4">
            <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
              Phone No
            </p>
            <p className="mt-1 text-sm font-bold text-indigo-700">
              {orderInfo?.phoneNo || "N/A"}
            </p>
          </div>
        </div>

        <button
          type="button"
          className="flex w-full items-center justify-center gap-2 rounded-2xl bg-indigo-700 px-4 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
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
              d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
            />
          </svg>
          Track Shipment
        </button>
      </div>
    </section>
  );
}

export default TrackingInfo;
