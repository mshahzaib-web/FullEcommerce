const PaymentMethodCard = () => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm mb-6">
      <h2 className="text-xl font-bold text-gray-900 mb-4">Payment Method</h2>

      <div className="space-y-3">
        {/* Option 1: Selected */}
        <div className="flex items-center justify-between p-3 border border-[#2e2bb8] rounded-xl cursor-pointer">
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 rounded-full border-4 border-[#2e2bb8] bg-white flex items-center justify-center">
              <div className="w-2 h-2 bg-[#2e2bb8] rounded-full"></div>
            </div>
            <span className="text-sm font-medium text-gray-900">PayPal</span>
          </div>
          <span className="text-sm font-bold text-[#2e2bb8] italic">
            PayPal
          </span>
        </div>

        {/* Option 2 */}
        <div className="flex items-center justify-between p-3 border border-gray-200 rounded-xl cursor-pointer hover:border-gray-300">
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 rounded-full border border-gray-300 bg-white"></div>
            <span className="text-sm font-medium text-gray-900">Apple Pay</span>
          </div>
        </div>
        <button className="mt-5 w-full bg-[#3b36d6] hover:bg-indigo-800 text-white font-medium py-3 rounded-lg transition-colors shadow-sm hover:cursor-pointer">
          Place Order
        </button>
      </div>
    </div>
  );
};

export default PaymentMethodCard;
