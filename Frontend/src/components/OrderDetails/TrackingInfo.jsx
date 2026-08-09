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
      </div>
    </section>
  );
}

export default TrackingInfo;
