const GeneralInformation = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <div className="flex items-center gap-2 mb-6">
        <div className="w-5 h-5 rounded-full border-2 border-indigo-600 flex items-center justify-center">
          <span className="text-xs font-bold text-indigo-600">i</span>
        </div>
        <h2 className="text-lg font-semibold text-gray-900">
          General Information
        </h2>
      </div>

      <div className="space-y-5">
        {/* Product Name & SKU */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Product Name
            </label>
            <input
              type="text"
              placeholder="e.g. Silk Evening Gown"
              className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              SKU
            </label>
            <input
              type="text"
              defaultValue="LA-2023-001"
              className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
            />
          </div>
        </div>

        {/* Category & Brand */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Category
            </label>
            <div className="relative">
              <select className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent appearance-none cursor-pointer">
                <option>Select Category</option>
                <option>Clothing</option>
                <option>Accessories</option>
                <option>Footwear</option>
              </select>
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Brand
            </label>
            <input
              type="text"
              placeholder="e.g. LuxeAura Signature"
              className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
            />
          </div>
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Description
          </label>
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            {/* Toolbar */}
            <div className="flex items-center gap-1 p-2 bg-gray-50 border-b border-gray-200">
              <button className="p-1.5 hover:bg-gray-200 rounded text-gray-700 font-bold text-sm">
                B
              </button>
              <button className="p-1.5 hover:bg-gray-200 rounded text-gray-700 italic text-sm">
                I
              </button>
              <button className="p-1.5 hover:bg-gray-200 rounded text-gray-700">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
              <button className="p-1.5 hover:bg-gray-200 rounded text-gray-700">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                  />
                </svg>
              </button>
            </div>
            {/* Text Area */}
            <textarea
              placeholder="Describe your product in detail..."
              rows={6}
              className="w-full px-4 py-3 bg-white focus:outline-none resize-none text-gray-700"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneralInformation;
