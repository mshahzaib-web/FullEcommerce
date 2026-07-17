const HeroBanner = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-10">
      <div className="relative rounded-2xl overflow-hidden bg-linear-to-r from-indigo-700 to-indigo-500 h-64 flex items-center">
        {/* Background overlay image simulation */}
        <div className="absolute inset-0 opacity-30">
          {/* <img
            src="https://shorturl.at/IKOTl"
            alt="Fashion models"
            className="w-full h-full object-cover"
          /> */}
        </div>
        <div className="absolute inset-0 bg-linear-to-r from-indigo-800/80 to-indigo-600/40"></div>

        <div className="relative z-10 px-8 md:px-12 max-w-lg">
          <span className="inline-block bg-yellow-400 text-gray-900 text-xs font-bold px-3 py-1 rounded-full mb-4">
            SEASONAL SALE
          </span>
          <h2 className="text-white text-xl font-semibold mb-2">
            Featured Collection
          </h2>
          <p className="text-indigo-100 text-sm leading-relaxed mb-6">
            Enjoy up to 60% OFF on selected luxury items. Handcrafted perfection
            for your wardrobe.
          </p>
          <button className="bg-white text-indigo-700 font-semibold text-sm px-6 py-2.5 rounded-lg hover:bg-gray-100 transition-colors">
            Explore Sale
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
