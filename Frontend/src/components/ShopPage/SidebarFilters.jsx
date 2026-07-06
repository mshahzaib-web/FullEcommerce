/**
 * SidebarFilters Component
 * Handles layout formatting for criteria inputs like Brands, Pricing Limits, and Item Colors.
 */
export default function Sidebar() {
  return (
    <div className="space-y-7 ms-5">
      {/* Search Input Box Block */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
          Search Product
        </label>
        <div className="relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </span>
          <input
            type="text"
            placeholder="Product name..."
            className="w-full bg-white text-xs pl-9 pr-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-gray-400 text-gray-700 placeholder-gray-400"
          />
        </div>
      </div>

      {/* Category Checkboxes Block */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-3">
          Categories
        </label>
        <div className="space-y-2.5">
          {["Women", "Men", "Shoes", "Accessories"].map((category) => (
            <label
              key={category}
              className="flex items-center text-xs font-medium text-gray-600 cursor-pointer"
            >
              <input
                type="checkbox"
                defaultChecked={category === "Men"}
                className="w-4 h-4 rounded border-gray-300 text-[#4F46E5] focus:ring-[#4F46E5] mr-3"
              />
              {category}
            </label>
          ))}
        </div>
      </div>

      {/* Dual Value Pricing Range Bar */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-3">
          Price Range
        </label>
        <div className="relative pt-1">
          <div className="h-1 bg-gray-200 rounded-full">
            <div className="absolute h-1 bg-[#4F46E5] rounded-full left-0 right-1/4"></div>
          </div>
          <div className="absolute top-0 left-0 w-3.5 h-3.5 bg-white border-2 border-[#4F46E5] rounded-full -mt-1 cursor-pointer shadow-sm"></div>
          <div className="absolute top-0 right-1/4 w-3.5 h-3.5 bg-white border-2 border-[#4F46E5] rounded-full -mt-1 cursor-pointer shadow-sm"></div>
        </div>
        <div className="flex items-center justify-between gap-2 mt-4">
          <div className="bg-white border border-gray-200 rounded-lg py-1.5 px-3 text-center flex-1 text-xs text-gray-600 font-medium">
            $0
          </div>
          <div className="bg-white border border-gray-200 rounded-lg py-1.5 px-3 text-center flex-1 text-xs text-gray-600 font-medium">
            $5000
          </div>
        </div>
      </div>

      {/* Brand Radio Selection Block */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-3">
          Brands
        </label>
        <div className="space-y-2.5">
          {["LuxeAura Exclusive", "Heritage Lab", "Vogue Modern"].map(
            (brand) => (
              <label
                key={brand}
                className="flex items-center text-xs font-medium text-gray-600 cursor-pointer"
              >
                <input
                  type="radio"
                  name="brand"
                  className="w-4 h-4 border-gray-300 text-[#4F46E5] focus:ring-[#4F46E5] mr-3"
                />
                {brand}
              </label>
            ),
          )}
        </div>
      </div>

      {/* Palette Solid Color Selection Bullets */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-3">
          Colors
        </label>
        <div className="flex flex-wrap gap-2.5">
          {["bg-[#111827]", "bg-[#4F46E5]", "bg-[#F59E0B]", "bg-[#DC2626]"].map(
            (colorClass, idx) => (
              <button
                key={idx}
                className={`w-5 h-5 rounded-full ${colorClass} focus:outline-none ring-2 ring-offset-2 ring-transparent hover:scale-110 transition-transform`}
              ></button>
            ),
          )}
        </div>
      </div>

      {/* Multi-size Matrix Boxes */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-3">
          Size
        </label>
        <div className="grid grid-cols-4 gap-1.5">
          {["XS", "S", "M", "L", "XL", "2XL"].map((size) => (
            <button
              key={size}
              className={`border py-2 text-[10px] font-bold rounded-md transition-colors text-center ${size === "S" ? "border-[#4F46E5] text-[#4F46E5] bg-indigo-50/50" : "border-gray-200 text-gray-600 bg-white hover:border-gray-400"}`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Global Filter Trigger Submitter */}
      <button className="w-full bg-[#4338CA] text-white font-bold text-xs py-3.5 rounded-xl hover:bg-opacity-95 transition-all shadow-md mt-2">
        Apply All Filters
      </button>
    </div>
  );
}
