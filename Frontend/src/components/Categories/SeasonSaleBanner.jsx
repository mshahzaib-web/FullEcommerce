const SeasonSaleBanner = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-16">
      <div className="bg-indigo-600 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between">
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <h2 className="text-white text-3xl md:text-4xl font-bold mb-2">
            SEASON SALE
          </h2>
          <p className="text-indigo-200 text-sm">
            Enjoy unprecedented savings on selected luxury items.
          </p>
        </div>
        <div className="text-center md:text-right">
          <p className="text-white text-3xl md:text-4xl font-bold mb-4">
            Up to 70% OFF
          </p>
          <button className="bg-white text-indigo-700 font-semibold text-sm px-6 py-2.5 rounded-lg hover:bg-gray-100 transition-colors">
            Shop the Sale
          </button>
        </div>
      </div>
    </div>
  );
};

export default SeasonSaleBanner;
