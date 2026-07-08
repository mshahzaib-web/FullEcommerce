function TrackingInfo() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border-l-4 border-l-indigo-600">
      <h3 className="text-xs font-bold text-indigo-600 uppercase tracking-wider mb-4">
        Tracking Information
      </h3>

      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">Courier</span>
          <span className="text-sm font-semibold text-gray-900">
            FedEx Express
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">Tracking No.</span>
          <span className="text-sm font-semibold text-gray-900">
            FEX-8829-1102
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">Estimated Delivery</span>
          <span className="text-sm font-bold text-indigo-700">
            Oct 29, 2024
          </span>
        </div>
      </div>

      <button className="w-full mt-5 bg-indigo-700 hover:bg-indigo-800 text-white font-medium py-3 px-4 rounded-xl transition-colors duration-200 flex items-center justify-center gap-2 text-sm">
        <svg
          className="w-4 h-4"
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
  );
}

export default TrackingInfo;
