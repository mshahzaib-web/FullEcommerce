const SelectionCard = () => {
  return (
    <>
      <h2 className="text-xl mt-7 font-bold text-gray-900 mb-4">
        Your Selection
      </h2>
      <div className=" bg-white rounded-2xl p-6 shadow-sm mb-6">
        <div className="flex gap-4">
          {/* Product Image */}
          <div className="w-24 h-32 bg-gray-100 rounded-lg overflow-hidden shrink-0">
            <img
              src="https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=200"
              alt="Silk Shirt"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Product Details */}
          <div className="flex-1">
            <div className="">
              <div>
                <p className="text-xs font-bold text-gray-500 tracking-wider uppercase mb-1">
                  LUXEAURA EDITION
                </p>
                <h3 className="text-lg font-bold text-gray-900">
                  Minimalist Silk Shirt
                </h3>
              </div>
              <p className="text-lg font-bold text-[#2e2bb8]">$240.00</p>
            </div>

            <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <span>Color:</span>
                <div className="w-4 h-4 rounded-full border border-gray-300 bg-[#fdfbf7]"></div>
                <span>Ivory</span>
              </div>
              <div>
                <span>Size: Medium</span>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <span className="text-sm font-medium text-gray-700">
                Quantity:
              </span>
              <div className="flex items-center bg-indigo-50 rounded-full px-3 py-1">
                <button className="text-gray-500 hover:text-gray-800 px-2">
                  -
                </button>
                <span className="text-sm font-medium text-gray-700 px-2">
                  1
                </span>
                <button className="text-gray-500 hover:text-gray-800 px-2">
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SelectionCard;
