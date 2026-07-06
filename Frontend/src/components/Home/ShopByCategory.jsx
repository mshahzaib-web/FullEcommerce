export default function ShopByCategory() {
  return (
    <>
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
                Shop by Category
              </h2>
              <p className="text-gray-500 text-sm mt-1">
                Explore our curated departments
              </p>
            </div>
            <a
              href="#"
              className="text-indigo-700 text-sm font-medium flex items-center gap-1 hover:underline"
            >
              View All
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
            </a>
          </div>

          <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
            <div className="text-center group cursor-pointer">
              <div className="bg-gray-100 rounded-xl overflow-hidden mb-3 aspect-square">
                <img
                  src="https://shorturl.at/KoFLO"
                  alt=""
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="font-semibold text-sm text-gray-800">
                Beautiful Address
              </h3>
              <p className="text-xs text-gray-400">1,220</p>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="bg-gray-100 rounded-xl overflow-hidden mb-3 aspect-square">
                <img
                  src="https://shorturl.at/KoFLO"
                  alt=""
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="font-semibold text-sm text-gray-800">
                Beautiful Address
              </h3>
              <p className="text-xs text-gray-400">1,220</p>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="bg-gray-100 rounded-xl overflow-hidden mb-3 aspect-square">
                <img
                  src="https://shorturl.at/KoFLO"
                  alt=""
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="font-semibold text-sm text-gray-800">
                Beautiful Address
              </h3>
              <p className="text-xs text-gray-400">1,220</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
