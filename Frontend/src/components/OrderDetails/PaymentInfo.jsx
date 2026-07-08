function PaymentInfo() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">
        Payment Information
      </h3>

      <div className="flex items-center gap-3 mb-4">
        <span className="bg-indigo-100 text-indigo-700 text-xs font-bold px-2.5 py-1 rounded">
          VISA
        </span>
        <span className="text-sm text-gray-700">Ending in •••• 4492</span>
      </div>

      <div className="space-y-2.5">
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">Status</span>
          <span className="text-sm font-bold text-green-700">Paid</span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">Transaction ID</span>
          <span className="text-sm font-medium text-gray-700">
            TXN-90812234
          </span>
        </div>
      </div>
    </div>
  );
}

export default PaymentInfo;
