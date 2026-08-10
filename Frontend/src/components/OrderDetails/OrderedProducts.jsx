import { toast } from "sonner";
import { useOrderDetails } from "../../context/orderDetailsContext";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { updateOrderStatus } from "../../api/Admin/admin";

function OrderedProducts() {
  const [payment, setPayment] = useState("");
  const [status, setStatus] = useState("");
  const orderInfo = useOrderDetails();
  const queryClient = useQueryClient();

  const updateOrderStatusMutation = useMutation({
    mutationFn: updateOrderStatus,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["adminorders"] });
      toast.success(data.message);
    },
    onError: (error) => {
      toast.error(error?.response?.data.message);
    },
  });

  useEffect(() => {
    setPayment(orderInfo?.payment);
    setStatus(orderInfo?.status);
  }, []);

  const handleApply = (id) => {
    const data = {
      status,
      payment,
    };
    updateOrderStatusMutation.mutate({ id, data });
  };

  const getPaymentBadgeClass = () => {
    const paymentValue = String(orderInfo?.payment || "");

    if (paymentValue === "Paid") {
      return "border-emerald-200 bg-emerald-50 text-emerald-700";
    }

    if (paymentValue === "Unpaid") {
      return "border-red-300 bg-red-100 text-red-500";
    }

    if (paymentValue == "Cash On Delivery") {
      return "border-indigo-600 bg-indigo-50 text-indigo-700";
    }
  };

  const getStatusBadgeClass = () => {
    const statusValue = String(orderInfo?.status || "");

    if (
      statusValue === "Delivered" ||
      statusValue === "Deliverd" ||
      statusValue === "Completed"
    ) {
      return "border-emerald-200 bg-emerald-50 text-emerald-700";
    }

    if (statusValue === "Processing") {
      return "border-blue-200 bg-blue-50 text-blue-700";
    }

    if (statusValue === "Out for delivery") {
      return "border-indigo-200 bg-indigo-50 text-indigo-700";
    }

    if (statusValue === "Pending") {
      return "border-orange-200 bg-orange-50 text-orange-700";
    }

    return "border-violet-200 bg-violet-50 text-violet-700";
  };

  return (
    <section className="overflow-hidden rounded-3xl border border-violet-100 bg-white shadow-sm">
      <div className="flex flex-col gap-4 border-b border-violet-100 bg-linear-to-r from-violet-50/70 to-white px-5 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h2 className="text-base font-bold text-gray-900 sm:text-lg">
            Ordered Product
          </h2>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <span
            className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold ${getPaymentBadgeClass()}`}
          >
            Payment: {orderInfo?.payment}
          </span>

          <span
            className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold ${getStatusBadgeClass()}`}
          >
            Status: {orderInfo?.status}
          </span>
        </div>
      </div>

      <div className="p-5 sm:p-6 lg:p-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[220px_minmax(0,1fr)] xl:grid-cols-[260px_minmax(0,1fr)]">
          {/* Product Image */}
          <div className="overflow-hidden border border-gray-100 bg-gray-50">
            {orderInfo?.product?.mainImage?.url ? (
              <img
                src={orderInfo?.product?.mainImage?.url}
                alt={orderInfo?.product?.name}
                className=" w-full object-cover rounded-md"
              />
            ) : (
              <div className="flex w-full items-center justify-center bg-gray-100 ">
                <svg
                  className="h-12 w-12 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                  />
                </svg>
              </div>
            )}
          </div>

          {/* Product Details and Admin Controls */}
          <div className="min-w-0">
            <div className="grid grid-cols-1 gap-6 xl:grid-cols-[minmax(0,1fr)_320px]">
              {/* Left: Product Info */}
              <div className="min-w-0 space-y-5">
                <div>
                  <h3 className="line-clamp-2 font-semibold text-gray-800 ">
                    {orderInfo?.product?.name}
                  </h3>

                  <p className="mt-2 text-sm text-gray-500">
                    Order ID:{" "}
                    <span className="font-semibold text-gray-500">
                      {orderInfo?._id || "N/A"}
                    </span>
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {orderInfo?.selectColor && (
                    <span className="inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-sm font-medium text-gray-700">
                      Color: {orderInfo?.selectColor}
                    </span>
                  )}

                  {orderInfo?.selectSize && (
                    <span className="inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-sm font-medium text-gray-700">
                      Size: {orderInfo?.selectSize}
                    </span>
                  )}

                  <span className="inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-sm font-medium text-gray-700">
                    Quantity: {orderInfo?.quantity}
                  </span>
                </div>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                  <div className="rounded-2xl border border-gray-100 bg-gray-50/60 p-4">
                    <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
                      Unit Price
                    </p>
                    <p className="mt-2 text-sm font-bold text-gray-900 sm:text-base">
                      ${orderInfo?.price}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-gray-100 bg-gray-50/60 p-4">
                    <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
                      Quantity
                    </p>
                    <p className="mt-2 text-sm font-bold text-gray-900 sm:text-base">
                      {orderInfo?.quantity}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-violet-100 bg-violet-50/60 p-4">
                    <p className="text-xs font-medium uppercase tracking-wide text-violet-600">
                      Total Price
                    </p>
                    <p className="mt-2 text-sm font-extrabold text-violet-700 sm:text-base">
                      ${orderInfo?.price * orderInfo?.quantity}
                    </p>
                  </div>
                </div>
                <hr className="text-indigo-600 lg:hidden" />
              </div>

              {/* Right: Admin Controls */}
              <div className="h-fit rounded-3xl border border-violet-100 bg-violet-50/40 p-4 sm:p-5">
                <div className="mb-4 flex items-center justify-between gap-3">
                  <h3 className="text-sm font-bold text-gray-900">
                    Admin Controls
                  </h3>
                </div>

                <div className="space-y-4">
                  <div>
                    <label
                      htmlFor="payment-status"
                      className="mb-1.5 block text-xs font-semibold text-gray-600"
                    >
                      Payment
                    </label>

                    <select
                      value={payment}
                      onChange={(e) => setPayment(e.target.value)}
                      className="w-full cursor-pointer rounded-xl border border-gray-200 bg-white p-2.5 text-sm font-medium text-gray-700 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                      <option value={orderInfo?.payment}>
                        {orderInfo?.payment}
                      </option>
                      {["Unpaid", "Paid", "Cash On Delivery"].map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="order-status"
                      className="mb-1.5 block text-xs font-semibold text-gray-600"
                    >
                      Status
                    </label>

                    <select
                      value={status}
                      onChange={(e) => setStatus(e.target.value)}
                      className="w-full cursor-pointer rounded-xl border border-gray-200 bg-white p-2.5 text-sm font-medium text-gray-700 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                      <option value={orderInfo?.status}>
                        {orderInfo?.status}
                      </option>
                      {[
                        "Pending",
                        "Processing",
                        "Shipped",
                        "Out for delivery",
                        "Delivered",
                        "Completed",
                      ].map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleApply(orderInfo?._id)}
                    className={`w-full rounded-xl px-4 py-3 text-sm font-semibold text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 bg-indigo-700 hover:bg-indigo-800 focus:ring-indigo-500
                    `}
                  >
                    Update
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OrderedProducts;
