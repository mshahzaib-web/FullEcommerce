// Static Data Store Array Modeling Visual Catalog
const PRODUCTS_DATA = [
  {
    id: 1,
    tag: "NEW",
    image:
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=500",
    brand: "HERITAGE LAB",
    title: "Aura Minimalist S...",
    rating: 4.8,
    reviews: 48,
    price: 280.0,
    oldPrice: 350.0,
  },
  {
    id: 2,
    tag: null,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=500",
    brand: "VOGUE MODERN",
    title: "Chrono Titanium ...",
    rating: 4.9,
    reviews: 52,
    price: 1250.0,
    oldPrice: null,
  },
  {
    id: 3,
    tag: null,
    image:
      "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=500",
    brand: "LUXEAURA EXCLUSIVE",
    title: "Midnight Obsidia...",
    rating: 4.6,
    reviews: 34,
    price: 195.0,
    oldPrice: null,
  },
  {
    id: 4,
    tag: "-20%",
    image:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=500",
    brand: "HERITAGE LAB",
    title: "Cashmere Blend ...",
    rating: 5.0,
    reviews: 60,
    price: 640.0,
    oldPrice: 800.0,
  },
];

/**
 * ProductGrid Component
 * Coordinates the filtering controls row alongside structural listing arrays.
 */
export default function ProductGrid() {
  return (
    <div>
      {/* Control Utility bar */}
      <div className="bg-white border border-gray-100 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <p className="text-xs text-gray-500 font-medium">
          Showing <span className="font-bold text-gray-900">1–20</span> of{" "}
          <span className="font-bold text-gray-900">250</span> Products
        </p>

        {/* Sorting Toggles */}
        <div className="flex items-center space-x-3 self-end sm:self-auto">
          {/* Display grid/list modes switches icons */}
          <div className="flex items-center space-x-1 border-r border-gray-200 pr-3">
            <button className="p-1.5 rounded bg-gray-100 text-[#4F46E5]">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
            </button>
            <button className="p-1.5 rounded text-gray-400 hover:bg-gray-50">
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
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          {/* Dropdown element menu */}
          <select
            className="bg-white border border-gray-200 rounded-lg text-xs font-semibold text-gray-700 py-2 pl-3 pr-8 focus:outline-none focus:border-gray-400 appearance-none bg-no-repeat bg-[right_8px_center] cursor-pointer"
            style={{
              backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%234a5568' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><polyline points='6 9 12 15 18 9'></polyline></svg>")`,
            }}
          >
            <option>Default Sorting</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
        </div>
      </div>

      {/* Main Grid Matrix */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {PRODUCTS_DATA.map((product) => (
          <div
            key={product.id}
            className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group flex flex-col"
          >
            {/* Image Box Section */}
            <div className="relative aspect-square bg-gray-50 overflow-hidden">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              {product.tag && (
                <span
                  className={`absolute top-3 left-3 text-[9px] font-black tracking-wider px-2 py-0.5 rounded-md ${product.tag === "NEW" ? "bg-[#4F46E5] text-white" : "bg-[#FCA5A5] text-[#991B1B]"}`}
                >
                  {product.tag}
                </span>
              )}
            </div>

            {/* Meta Text Information */}
            <div className="p-4 flex-1 flex flex-col justify-between">
              <div>
                <p className="text-[10px] font-bold tracking-widest text-gray-400 uppercase">
                  {product.brand}
                </p>
                <h3 className="text-xs font-bold text-gray-800 mt-1 mb-1.5">
                  {product.title}
                </h3>

                {/* Rating layout block indicators */}
                <div className="flex items-center space-x-1 mb-3">
                  <div className="flex text-[#F59E0B]">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-3 h-3 ${i < Math.floor(product.rating) ? "fill-current" : "text-gray-200"}`}
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-[10px] text-gray-400 font-bold">
                    ({product.rating.toFixed(1)})
                  </span>
                </div>
              </div>

              {/* Bottom Action/Pricing Alignment Controls */}
              <div className="mt-auto">
                <div className="flex items-baseline space-x-2 mb-3">
                  <span className="text-sm font-black text-[#4F46E5]">
                    ${product.price.toFixed(2)}
                  </span>
                  {product.oldPrice && (
                    <span className="text-xs text-gray-400 line-through font-medium">
                      ${product.oldPrice.toFixed(2)}
                    </span>
                  )}
                </div>

                {/* Addition Controls buttons bar wrapper layout */}
                <div className="flex items-center gap-1.5">
                  <button className="flex-1 bg-[#4F46E5] text-white font-bold text-[11px] py-2.5 px-3 rounded-xl hover:bg-[#4338CA] transition-colors flex items-center justify-center">
                    Add to Cart
                  </button>
                  <button className="p-2.5 rounded-xl bg-indigo-50 text-[#4F46E5] hover:bg-indigo-100 transition-colors">
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
                        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
