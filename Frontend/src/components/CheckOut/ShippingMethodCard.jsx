const ShippingMethodCard = () => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm mb-6">
      <h2 className="text-xl font-bold text-gray-900 mb-4">Shipping Method</h2>

      <div className="space-y-3">
        {/* Option 1: Selected */}
        <div className="flex items-center justify-between p-3 border border-[#2e2bb8] bg-indigo-50/30 rounded-xl cursor-pointer">
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 rounded-full border-4 border-[#2e2bb8] bg-white flex items-center justify-center">
              <div className="w-2 h-2 bg-[#2e2bb8] rounded-full"></div>
            </div>
            <div>
              <p className="text-sm font-bold text-gray-900">
                Standard Shipping
              </p>
              <p className="text-xs text-gray-500">5-7 Business Days</p>
            </div>
          </div>
          <span className="text-sm font-bold text-gray-900">Free</span>
        </div>

        {/* Option 2 */}
        <div className="flex items-center justify-between p-3 border border-gray-200 rounded-xl cursor-pointer hover:border-gray-300">
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 rounded-full border border-gray-300 bg-white"></div>
            <div>
              <p className="text-sm font-bold text-gray-900">
                Express Shipping
              </p>
              <p className="text-xs text-gray-500">2-3 Business Days</p>
            </div>
          </div>
          <span className="text-sm font-bold text-gray-900">$15.00</span>
        </div>

        {/* Option 3 */}
        <div className="flex items-center justify-between p-3 border border-gray-200 rounded-xl cursor-pointer hover:border-gray-300">
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 rounded-full border border-gray-300 bg-white"></div>
            <div>
              <p className="text-sm font-bold text-gray-900">
                Next Day Delivery
              </p>
              <p className="text-xs text-gray-500">Delivery Tomorrow</p>
            </div>
          </div>
          <span className="text-sm font-bold text-gray-900">$30.00</span>
        </div>
      </div>
    </div>
  );
};

export default ShippingMethodCard;
