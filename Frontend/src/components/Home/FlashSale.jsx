export default function FlashSale() {
  return (
    <>
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
                Flash Sale
              </h2>
              <div className="flex items-center gap-1">
                <span className="bg-red-500 text-white text-sm font-bold px-3 py-1 rounded-lg">
                  02
                </span>
                <span className="text-red-500 font-bold">:</span>
                <span className="bg-red-500 text-white text-sm font-bold px-3 py-1 rounded-lg">
                  42
                </span>
                <span className="text-red-500 font-bold">:</span>
                <span className="bg-red-500 text-white text-sm font-bold px-3 py-1 rounded-lg">
                  09
                </span>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100">
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
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100">
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
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl border border-gray-100 overflow-hidden group hover:shadow-lg transition">
              <div className="relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=400&fit=crop"
                  alt=""
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                  -40%
                </span>
              </div>
              <div className="p-4">
                <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">
                  LUXEAURA ESSENTIALS
                </p>
                <h3 className="font-semibold text-sm text-gray-800 mb-2">
                  Minimalist Silk Shirt
                </h3>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-indigo-700 font-bold">
                    ${(149.0).toFixed(2)}
                  </span>
                  <span className="text-gray-400 text-xs line-through">
                    ${(249.0).toFixed(2)}
                  </span>
                </div>
                <button className="w-full bg-indigo-700 text-white text-sm py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-indigo-800 transition">
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
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z"
                    />
                  </svg>
                  Add to Cart
                </button>
              </div>
            </div>
            <div className="bg-white rounded-xl border border-gray-100 overflow-hidden group hover:shadow-lg transition">
              <div className="relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=400&fit=crop"
                  alt=""
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                  -40%
                </span>
              </div>
              <div className="p-4">
                <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">
                  LUXEAURA ESSENTIALS
                </p>
                <h3 className="font-semibold text-sm text-gray-800 mb-2">
                  Minimalist Silk Shirt
                </h3>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-indigo-700 font-bold">
                    ${(149.0).toFixed(2)}
                  </span>
                  <span className="text-gray-400 text-xs line-through">
                    ${(249.0).toFixed(2)}
                  </span>
                </div>
                <button className="w-full bg-indigo-700 text-white text-sm py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-indigo-800 transition">
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
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z"
                    />
                  </svg>
                  Add to Cart
                </button>
              </div>
            </div>
            <div className="bg-white rounded-xl border border-gray-100 overflow-hidden group hover:shadow-lg transition">
              <div className="relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=400&fit=crop"
                  alt=""
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                  -40%
                </span>
              </div>
              <div className="p-4">
                <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">
                  LUXEAURA ESSENTIALS
                </p>
                <h3 className="font-semibold text-sm text-gray-800 mb-2">
                  Minimalist Silk Shirt
                </h3>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-indigo-700 font-bold">
                    ${(149.0).toFixed(2)}
                  </span>
                  <span className="text-gray-400 text-xs line-through">
                    ${(249.0).toFixed(2)}
                  </span>
                </div>
                <button className="w-full bg-indigo-700 text-white text-sm py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-indigo-800 transition">
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
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z"
                    />
                  </svg>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
