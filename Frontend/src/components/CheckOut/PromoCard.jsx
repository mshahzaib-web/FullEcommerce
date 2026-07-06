const PromoCard = () => {
  return (
    <div className="flex bg-white rounded-2xl p-6 shadow-sm mb-6">
      <div>
        <h2 className="text-xl font-bold text-gray-900 mb-4">Promo Code</h2>
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="Enter code"
            className="flex-1 bg-transparent border-b border-gray-200 py-2 text-gray-700 focus:outline-none focus:border-[#2e2bb8] placeholder-gray-400"
          />

          <button className="bg-gray-900 text-white px-6 py-2 rounded-lg font-medium hover:bg-gray-800 transition-colors">
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default PromoCard;
