function OrderSummary() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">
        Order Summary
      </h3>

      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">Subtotal</span>
          <span className="text-sm font-medium text-gray-900">$550.00</span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">Shipping (Standard)</span>
          <span className="text-sm font-medium text-green-700">Free</span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">Estimated Tax</span>
          <span className="text-sm font-medium text-gray-900">$44.00</span>
        </div>

        <div className="border-t border-gray-200 pt-3 mt-3">
          <div className="flex items-center justify-between">
            <span className="text-base font-semibold text-gray-900">Total</span>
            <span className="text-lg font-bold text-indigo-700">$594.00</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderSummary;
