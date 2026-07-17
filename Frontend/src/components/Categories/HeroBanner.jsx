const HeroBanner = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-8">
      <div className="relative rounded-2xl overflow-hidden h-80 md:h-96">
        {/* <img
          src="https://shorturl.at/EHY0E"
          alt="People shopping"
          className="w-full h-full object-cover"
        /> */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>

        <div className="absolute inset-0 flex items-center px-8 md:px-16">
          <div className="max-w-md">
            <h1 className="text-white text-3xl md:text-4xl font-bold mb-3 leading-tight">
              Explore Our
              <br />
              Categories
            </h1>
            <p className="text-gray-200 text-sm mb-6 leading-relaxed">
              Browse thousands of premium products across every category,
              curated for those who value quality and style.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex items-center bg-white rounded-lg px-4 py-2.5 flex-1 max-w-xs">
                <svg
                  className="w-4 h-4 text-gray-400 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <input
                  type="text"
                  placeholder="Search Categories..."
                  className="bg-transparent text-sm text-gray-700 outline-none w-full placeholder-gray-400"
                />
              </div>
              <button className="bg-indigo-700 text-white text-sm font-semibold px-6 py-2.5 rounded-lg hover:bg-indigo-800 transition-colors whitespace-nowrap">
                Browse Products
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
