import { useState } from "react";

const WishListCom = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      category: "AURA COLLECTION",
      title: "Signature Leather Satchel",
      image:
        "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=400&fit=crop",
      rating: 5,
      reviews: 124,
      originalPrice: 150.0,
      currentPrice: 120.0,
      discount: 20,
      colors: ["white", "black", "brown"],
      sizes: ["S", "M", "L"],
      selectedColor: "white",
      selectedSize: "M",
      quantity: 1,
      stock: "In Stock",
      stockLevel: "high",
    },
    {
      id: 2,
      category: "FRAGRANCE",
      title: "Midnight Essence Eau de Parfum",
      image:
        "https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=400&fit=crop",
      rating: 4,
      reviews: 89,
      currentPrice: 185.0,
      colors: [],
      sizes: ["50ml", "100ml"],
      selectedSize: "100ml",
      quantity: 1,
      stock: "Low Stock",
      stockLevel: "low",
    },
  ]);

  const updateQuantity = (id, change) => {
    setProducts(
      products.map((product) => {
        if (product.id === id) {
          const newQuantity = Math.max(1, product.quantity + change);
          return { ...product, quantity: newQuantity };
        }
        return product;
      }),
    );
  };

  const removeProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const renderStars = (rating) => {
    return (
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-4 h-4 ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Breadcrumb */}
        <nav className="flex mb-6 text-sm text-gray-600">
          <ol className="flex items-center space-x-2">
            <li>
              <a href="#" className="hover:text-gray-900">
                Home
              </a>
            </li>
            <li>
              <span className="text-gray-400">›</span>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900">
                My Account
              </a>
            </li>
            <li>
              <span className="text-gray-400">›</span>
            </li>
            <li className="font-medium text-gray-900">Wishlist</li>
          </ol>
        </nav>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 flex items-center gap-3">
            My Wishlist
            <svg
              className="w-8 h-8 text-pink-500 fill-pink-500"
              viewBox="0 0 24 24"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </h1>
          <p className="mt-2 text-gray-600">
            Save your favorite products and purchase them anytime.
          </p>
        </div>

        {/* Products List */}
        <div className="space-y-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
            >
              <form className="p-4 sm:p-6 lg:p-8">
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
                  {/* Product Image */}
                  <div className="relative w-full lg:w-64 shrink-0">
                    <div className="aspect-square rounded-xl overflow-hidden bg-gray-100">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <button
                      type="button"
                      className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow"
                    >
                      <svg
                        className="w-5 h-5 text-pink-500 fill-pink-500"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                      </svg>
                    </button>
                  </div>

                  {/* Product Details */}
                  <div className="flex-1 space-y-4">
                    <div>
                      <span className="text-xs font-semibold text-indigo-600 uppercase tracking-wide">
                        {product.category}
                      </span>
                      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mt-1">
                        {product.title}
                      </h2>
                      <div className="flex items-center gap-2 mt-2">
                        {renderStars(product.rating)}
                        <span className="text-sm text-gray-500">
                          ({product.reviews} Reviews)
                        </span>
                      </div>
                    </div>

                    {/* Colors and Sizes */}
                    <div className="flex flex-col sm:flex-row gap-6">
                      {product.colors.length > 0 && (
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Colors
                          </label>
                          <div className="flex gap-2">
                            {product.colors.map((color) => (
                              <button
                                key={color}
                                type="button"
                                className={`w-8 h-8 rounded-full border-2 transition-all ${
                                  product.selectedColor === color
                                    ? "border-indigo-600 ring-2 ring-indigo-100"
                                    : "border-gray-300 hover:border-gray-400"
                                }`}
                                style={{ backgroundColor: color }}
                              />
                            ))}
                          </div>
                        </div>
                      )}

                      {product.sizes.length > 0 && (
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Sizes
                          </label>
                          <div className="flex gap-2 flex-wrap">
                            {product.sizes.map((size) => (
                              <button
                                key={size}
                                type="button"
                                className={`px-4 py-2 rounded-full border-2 text-sm font-medium transition-all ${
                                  product.selectedSize === size
                                    ? "border-indigo-600 bg-indigo-600 text-white"
                                    : "border-gray-300 text-gray-700 hover:border-gray-400"
                                }`}
                              >
                                {size}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Quantity and Stock */}
                    <div className="flex items-center gap-6">
                      <div className="flex items-center border border-gray-300 rounded-lg">
                        <button
                          type="button"
                          onClick={() => updateQuantity(product.id, -1)}
                          className="px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-l-lg transition-colors"
                        >
                          −
                        </button>
                        <input
                          type="number"
                          value={product.quantity}
                          readOnly
                          className="w-12 text-center border-x border-gray-300 py-2 text-sm font-medium"
                        />
                        <button
                          type="button"
                          onClick={() => updateQuantity(product.id, 1)}
                          className="px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-r-lg transition-colors"
                        >
                          +
                        </button>
                      </div>
                      <div
                        className={`flex items-center gap-1.5 text-sm ${
                          product.stockLevel === "low"
                            ? "text-amber-600"
                            : "text-green-600"
                        }`}
                      >
                        <span
                          className={`w-2 h-2 rounded-full ${
                            product.stockLevel === "low"
                              ? "bg-amber-500"
                              : "bg-green-500"
                          }`}
                        />
                        {product.stock}
                      </div>
                    </div>
                  </div>

                  {/* Price and Actions */}
                  <div className="lg:w-56 shrink-0 space-y-3 border-t lg:border-t-0 lg:border-l border-gray-200 pt-6 lg:pt-0 lg:pl-8">
                    {product.discount && (
                      <div className="flex items-center justify-end gap-2">
                        <span className="px-2 py-1 bg-amber-100 text-amber-700 text-xs font-bold rounded-full">
                          {product.discount}% OFF
                        </span>
                      </div>
                    )}

                    <div className="flex items-center justify-end gap-2">
                      {product.originalPrice && (
                        <span className="text-gray-400 line-through text-sm">
                          ${product.originalPrice.toFixed(2)}
                        </span>
                      )}
                      <span className="text-2xl font-bold text-indigo-600">
                        ${product.currentPrice.toFixed(2)}
                      </span>
                    </div>

                    <div className="space-y-2 pt-2">
                      <button
                        type="button"
                        className="w-full bg-indigo-600 text-white py-3 px-4 rounded-xl font-semibold hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200"
                      >
                        Add to Cart
                      </button>
                      <button
                        type="button"
                        className="w-full bg-indigo-50 text-indigo-600 py-3 px-4 rounded-xl font-semibold hover:bg-indigo-100 transition-colors"
                      >
                        Buy Now
                      </button>
                    </div>

                    <button
                      type="button"
                      onClick={() => removeProduct(product.id)}
                      className="w-full text-red-500 text-sm font-medium hover:text-red-600 transition-colors py-2"
                    >
                      Remove from list
                    </button>
                  </div>
                </div>
              </form>
            </div>
          ))}
        </div>

        {products.length === 0 && (
          <div className="text-center py-16">
            <svg
              className="w-16 h-16 text-gray-300 mx-auto mb-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
            <h3 className="text-lg font-medium text-gray-900">
              Your wishlist is empty
            </h3>
            <p className="text-gray-500 mt-1">
              Save items you love by clicking the heart icon
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default WishListCom;
