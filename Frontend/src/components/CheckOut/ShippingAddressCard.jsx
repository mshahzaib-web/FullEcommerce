const ShippingAddressCard = () => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm mb-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-gray-900">Shipping Address</h2>
        <div className="flex bg-indigo-50 rounded-lg p-1">
          <button className="px-4 py-1 text-sm font-medium text-[#2e2bb8] bg-white rounded-md shadow-sm">
            Home
          </button>
          <button className="px-4 py-1 text-sm font-medium text-gray-500 hover:text-gray-700">
            Office
          </button>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-xs font-bold text-gray-800 mb-1">
            Country / Region
          </label>
          <div className="relative">
            <select className="w-full appearance-none bg-transparent text-gray-700 focus:outline-none cursor-pointer">
              <option>United States</option>
            </select>
            <div className="absolute right-0 top-0 pointer-events-none text-gray-500">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-gray-800 mb-1">
            Street Address
          </label>
          <input
            type="text"
            defaultValue="123 Luxury Ave, Apt 4B"
            className="w-full text-gray-500 focus:outline-none border-b border-transparent focus:border-gray-300 pb-1"
            readOnly
          />
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-xs font-bold text-gray-800 mb-1">
              City
            </label>
            <input
              type="text"
              defaultValue="New York"
              className="w-full text-gray-500 focus:outline-none border-b border-transparent focus:border-gray-300 pb-1"
              readOnly
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-gray-800 mb-1">
              Postal Code
            </label>
            <input
              type="text"
              defaultValue="10001"
              className="w-full text-gray-500 focus:outline-none border-b border-transparent focus:border-gray-300 pb-1"
              readOnly
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShippingAddressCard;
