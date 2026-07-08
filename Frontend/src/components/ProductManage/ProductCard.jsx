const products = [
  {
    id: 1,
    name: "Cloud Walker Pro-V1",
    category: "FOOTWEAR",
    brand: "AURA",
    sku: "AURA-CW-2024-WHT",
    price: 189.0,
    originalPrice: 245.0,
    stock: 84,
    image:
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=300&fit=crop",
  },
  {
    id: 2,
    name: "Obsidian Peak Backpack",
    category: "ACCESSORIES",
    brand: "NOMAD",
    sku: "NOM-BP-BLK-01",
    price: 320.0,
    originalPrice: null,
    stock: 8,
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop",
  },
  {
    id: 3,
    name: "Zenith ANC Headphones",
    category: "ELECTRONICS",
    brand: "SONIC",
    sku: "SONIC-ZH-GOL",
    price: 449.0,
    originalPrice: null,
    stock: 0,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop",
  },
  {
    id: 4,
    name: "Matte Navy Flask 750ml",
    category: "LIFESTYLE",
    brand: "HYDRO",
    sku: "HYD-FLK-NVY",
    price: 45.0,
    originalPrice: null,
    stock: 245,
    image:
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=300&fit=crop",
  },
];

function ProductCard() {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <>
            <div
              key={product.id}
              className=" bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col"
            >
              {/* Product Image */}
              <div className="w-full h-56 bg-gray-100 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Card Content */}
              <div className="p-5 flex flex-col grow">
                {/* Category */}
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
                  {product.category} • {product.brand}
                </p>

                {/* Product Name */}
                <h3 className="text-base font-bold text-gray-900 mb-1 truncate">
                  {product.name}
                </h3>

                {/* SKU */}
                <p className="text-xs text-gray-400 mb-3">SKU: {product.sku}</p>

                {/* Price */}
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-lg font-bold text-indigo-700">
                    ${product.price.toFixed(2)}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-gray-400 line-through">
                      ${product.originalPrice.toFixed(2)}
                    </span>
                  )}
                </div>

                {/* Available Stock */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-sm text-gray-600">Available Stock</span>
                  <span className={`text-sm font-bold ${product.stock}`}>
                    {product.stock} units
                  </span>
                </div>

                {/* Spacer to push buttons to bottom */}
                <div className="mt-auto">
                  {/* Update Button */}
                  <button className="w-full bg-indigo-700 hover:bg-indigo-800 text-white font-medium py-3 px-4 rounded-xl transition-colors duration-200 mb-3">
                    Update Product
                  </button>

                  {/* Delete Link */}
                  <button className="w-full text-red-500 hover:text-red-700 font-medium py-2 px-4 transition-colors duration-200">
                    Delete Product
                  </button>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
}

export default ProductCard;
