export default function HeroSection() {
  return (
    <>
      <section className="bg-indigo-700 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div className="text-white">
              <span className="inline-block bg-indigo-600 text-xs font-medium px-3 py-1 rounded-full mb-4">
                New Season 2024
              </span>
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-4">
                Discover Your
                <br />
                Perfect Style
              </h1>
              <p className="text-indigo-200 text-sm mb-8 max-w-md">
                Curated collections from the world's most iconic luxury houses,
                brought directly to your doorstep with uncompromising elegance.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-white text-indigo-700 px-6 py-3 rounded-full text-sm font-medium hover:bg-indigo-50 transition">
                  Shop Now
                </button>
                <button className="border border-white text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-white hover:text-indigo-700 transition">
                  Explore Collection
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="bg-white rounded-2xl p-4 shadow-2xl">
                <div className="bg-gray-100 rounded-xl overflow-hidden relative h-80 lg:h-96">
                  <div className="relative rounded-2xl overflow-hidden h-72 lg:h-80 group cursor-pointer">
                    <img
                      src="https://shorturl.at/mpNT8"
                      alt="Women's Edit"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute top-4 left-4 bg-white rounded-lg px-3 py-2 shadow-md">
                    <div className="flex items-center gap-2">
                      <span className="bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded">
                        %
                      </span>
                      <div>
                        <p className="text-xs font-bold text-gray-800">
                          Flash Sale
                        </p>
                        <p className="text-xs text-gray-500">Up to 50% off</p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-white rounded-lg px-3 py-2 shadow-md">
                    <div className="flex items-center gap-2">
                      <svg
                        className="w-5 h-5 text-indigo-700"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
                        />
                      </svg>
                      <div>
                        <p className="text-xs font-bold text-gray-800">
                          Fast Delivery
                        </p>
                        <p className="text-xs text-gray-500">2-day shipping</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -left-4 bg-white rounded-xl p-3 shadow-lg hidden lg:block">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-indigo-700"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-bold">4.9/5</p>
                    <p className="text-xs text-gray-500">2k+ reviews</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
