import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useOrderDetails } from "../../context/orderDetailsContext";

function OrderedProducts() {
  const orderInfo = useOrderDetails();
  const params = useParams();
  const queryClient = useQueryClient();

  const orderId = orderInfo?.orderId || orderInfo?.id || params?.id;

  const firstProduct =
    (Array.isArray(orderInfo?.products) && orderInfo.products[0]) ||
    (Array.isArray(orderInfo?.orderedProducts) &&
      orderInfo.orderedProducts[0]) ||
    null;

  const product =
    firstProduct ||
    orderInfo?.product ||
    orderInfo?.orderedProduct ||
    orderInfo ||
    {};

  const productName =
    product?.name ||
    product?.productName ||
    orderInfo?.productName ||
    "Ordered Product";

  const productImage =
    product?.image ||
    product?.productImage ||
    orderInfo?.productImage ||
    orderInfo?.image ||
    "";

  const size = product?.size || orderInfo?.size || "";
  const color = product?.color || orderInfo?.color || "";

  const quantity = Number(
    product?.qty || product?.quantity || orderInfo?.quantity || 1,
  );

  const unitPrice = Number(
    product?.unitPrice || product?.price || orderInfo?.price || 0,
  );

  const totalPrice = Number(
    product?.totalPrice || orderInfo?.totalPrice || unitPrice * quantity,
  );

  const rawPayment = String(
    product?.payment ||
      orderInfo?.payment ||
      orderInfo?.paymentStatus ||
      "Pending",
  );

  const rawStatus = String(
    product?.status ||
      orderInfo?.status ||
      orderInfo?.orderStatus ||
      "Processing",
  );

  const initialPayment = rawPayment === "Payments" ? "Pending" : rawPayment;
  const initialStatus = rawStatus === "Status" ? "Processing" : rawStatus;

  const [payment, setPayment] = useState(initialPayment);
  const [status, setStatus] = useState(initialStatus);

  useEffect(() => {
    setPayment(initialPayment);
    setStatus(initialStatus);
  }, [initialPayment, initialStatus]);

  const paymentOptions = useMemo(() => {
    const options = [
      "Pending",
      "Paid",
      "Cash on Delivery",
      "Refunded",
      "Failed",
    ];

    if (initialPayment && !options.includes(initialPayment)) {
      options.unshift(initialPayment);
    }

    return options;
  }, [initialPayment]);

  const statusOptions = useMemo(() => {
    const options = [
      "Processing",
      "Shipped",
      "Delivered",
      "Deliverd",
      "Cancelled",
      "Returned",
    ];

    if (initialStatus && !options.includes(initialStatus)) {
      options.unshift(initialStatus);
    }

    return options;
  }, [initialStatus]);

  const isDirty = payment !== initialPayment || status !== initialStatus;

  const applyMutation = useMutation({
    mutationFn: async (payload) => {
      if (!orderId) {
        throw new Error("Order ID not found.");
      }

      /**
       * Replace this URL with your real backend route.
       * Example:
       * `/api/admin/orders/${orderId}/status`
       */
      const response = await fetch(`/api/admin/orders/${orderId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData?.message || "Unable to update order.");
      }

      return response.json();
    },

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["adminorderdetails", orderId],
      });
    },
  });

  const isApplying = Boolean(
    applyMutation.isPending ||
    applyMutation.isLoading ||
    applyMutation.isSubmitting,
  );

  const handleApply = () => {
    applyMutation.mutate({
      orderId,
      payment,
      status,

      /**
       * Extra keys are added so this works with different backend field names.
       * You can remove them if your backend only needs payment/status.
       */
      paymentStatus: payment,
      orderStatus: status,
    });
  };

  const getPaymentBadgeClass = (value) => {
    const paymentValue = String(value || "").toLowerCase();

    if (paymentValue === "paid") {
      return "border-emerald-200 bg-emerald-50 text-emerald-700";
    }

    if (paymentValue === "pending") {
      return "border-amber-200 bg-amber-50 text-amber-700";
    }

    if (paymentValue === "cash on delivery") {
      return "border-blue-200 bg-blue-50 text-blue-700";
    }

    if (paymentValue === "refunded") {
      return "border-gray-200 bg-gray-50 text-gray-600";
    }

    if (paymentValue === "failed") {
      return "border-red-200 bg-red-50 text-red-700";
    }

    return "border-violet-200 bg-violet-50 text-violet-700";
  };

  const getStatusBadgeClass = (value) => {
    const statusValue = String(value || "").toLowerCase();

    if (statusValue === "delivered" || statusValue === "deliverd") {
      return "border-emerald-200 bg-emerald-50 text-emerald-700";
    }

    if (statusValue === "processing") {
      return "border-blue-200 bg-blue-50 text-blue-700";
    }

    if (statusValue === "shipped") {
      return "border-indigo-200 bg-indigo-50 text-indigo-700";
    }

    if (statusValue === "cancelled") {
      return "border-red-200 bg-red-50 text-red-700";
    }

    if (statusValue === "returned") {
      return "border-orange-200 bg-orange-50 text-orange-700";
    }

    return "border-violet-200 bg-violet-50 text-violet-700";
  };

  return (
    <section className="overflow-hidden rounded-3xl border border-violet-100 bg-white shadow-sm">
      <div className="flex flex-col gap-4 border-b border-violet-100 bg-gradient-to-r from-violet-50/70 to-white px-5 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h2 className="text-base font-bold text-gray-900 sm:text-lg">
            Ordered Product
          </h2>
          <p className="text-xs text-gray-500 sm:text-sm">
            Single product order details and admin controls
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <span
            className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold ${getPaymentBadgeClass(
              payment,
            )}`}
          >
            Payment: {payment}
          </span>

          <span
            className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold ${getStatusBadgeClass(
              status,
            )}`}
          >
            Status: {status}
          </span>
        </div>
      </div>

      <div className="p-5 sm:p-6 lg:p-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[220px_minmax(0,1fr)] xl:grid-cols-[260px_minmax(0,1fr)]">
          {/* Product Image */}
          <div className="overflow-hidden rounded-2xl border border-gray-100 bg-gray-50">
            {productImage ? (
              <img
                src={productImage}
                alt={productName}
                className=" w-full object-cover "
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
                  <h3 className="break-words text-xl font-bold text-gray-900 sm:text-2xl">
                    {productName}
                  </h3>

                  <p className="mt-2 text-sm text-gray-500">
                    Order ID:{" "}
                    <span className="font-semibold text-gray-700">
                      {orderId || "N/A"}
                    </span>
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-medium text-gray-700">
                    Size: {size || "N/A"}
                  </span>

                  <span className="inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-medium text-gray-700">
                    Color: {color || "N/A"}
                  </span>

                  <span className="inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-medium text-gray-700">
                    Quantity: {quantity}
                  </span>
                </div>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                  <div className="rounded-2xl border border-gray-100 bg-gray-50/60 p-4">
                    <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
                      Unit Price
                    </p>
                    <p className="mt-2 text-sm font-bold text-gray-900 sm:text-base">
                      ${unitPrice.toFixed(2)}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-gray-100 bg-gray-50/60 p-4">
                    <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
                      Quantity
                    </p>
                    <p className="mt-2 text-sm font-bold text-gray-900 sm:text-base">
                      {quantity}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-violet-100 bg-violet-50/60 p-4">
                    <p className="text-xs font-medium uppercase tracking-wide text-violet-600">
                      Total Price
                    </p>
                    <p className="mt-2 text-sm font-extrabold text-violet-700 sm:text-base">
                      ${totalPrice.toFixed(2)}
                    </p>
                  </div>
                </div>

                <div className="rounded-2xl border border-dashed border-gray-200 bg-gray-50/50 p-4">
                  <p className="text-sm leading-6 text-gray-600">
                    Use the admin controls to update payment and order status.
                    Changes will be sent to the backend after clicking the Apply
                    button.
                  </p>
                </div>
              </div>

              {/* Right: Admin Controls */}
              <div className="h-fit rounded-3xl border border-violet-100 bg-violet-50/40 p-4 sm:p-5">
                <div className="mb-4 flex items-center justify-between gap-3">
                  <h3 className="text-sm font-bold text-gray-900">
                    Admin Controls
                  </h3>

                  <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-violet-700 shadow-sm">
                    Update
                  </span>
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
                      id="payment-status"
                      value={payment}
                      onChange={(event) => setPayment(event.target.value)}
                      className="w-full cursor-pointer rounded-xl border border-gray-200 bg-white p-2.5 text-sm font-medium text-gray-700 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                      {paymentOptions.map((option) => (
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
                      id="order-status"
                      value={status}
                      onChange={(event) => setStatus(event.target.value)}
                      className="w-full cursor-pointer rounded-xl border border-gray-200 bg-white p-2.5 text-sm font-medium text-gray-700 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                      {statusOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>

                  <button
                    type="button"
                    onClick={handleApply}
                    disabled={!isDirty || isApplying}
                    className={`w-full rounded-xl px-4 py-3 text-sm font-semibold text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                      !isDirty || isApplying
                        ? "cursor-not-allowed bg-gray-300"
                        : "bg-indigo-700 hover:bg-indigo-800 focus:ring-indigo-500"
                    }`}
                  >
                    {isApplying ? "Applying..." : "Apply Changes"}
                  </button>

                  {!isDirty &&
                    !applyMutation.isSuccess &&
                    !applyMutation.isError && (
                      <p className="text-xs text-gray-500">
                        Change payment or status to enable Apply.
                      </p>
                    )}

                  {applyMutation.isSuccess && (
                    <div className="rounded-xl border border-emerald-200 bg-emerald-50 px-3 py-2.5 text-xs font-medium text-emerald-700">
                      Order updated successfully.
                    </div>
                  )}

                  {applyMutation.isError && (
                    <div className="rounded-xl border border-red-200 bg-red-50 px-3 py-2.5 text-xs font-medium text-red-700">
                      {applyMutation.error?.message ||
                        "Failed to update order."}
                    </div>
                  )}
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
