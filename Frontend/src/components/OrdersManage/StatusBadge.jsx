function StatusBadge({ label, variant }) {
  const variantStyles = {
    paid: "bg-green-100 text-green-700",
    unpaid: "bg-red-100 text-red-700",
    pending: "bg-amber-100 text-amber-700",
    delivered: "bg-green-100 text-green-700",
    processing: "bg-indigo-100 text-indigo-700",
    shipped: "bg-gray-100 text-gray-600",
  };

  const dotColors = {
    paid: "bg-green-500",
    unpaid: "bg-red-500",
    pending: "bg-amber-500",
    delivered: "bg-green-500",
    processing: "bg-indigo-500",
    shipped: "bg-gray-400",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium ${
        variantStyles[variant] || "bg-gray-100 text-gray-600"
      }`}
    >
      <span
        className={`w-1.5 h-1.5 rounded-full ${dotColors[variant] || "bg-gray-400"}`}
      ></span>
      {label}
    </span>
  );
}

export default StatusBadge;
