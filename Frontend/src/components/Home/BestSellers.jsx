// components/BestSellers.jsx

const bestSellers = [
  {
    name: "Egyptian Cotton Shirt",
    price: 125.0,
    rating: 4.5,
    reviews: 128,
    img: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=500&fit=crop",
  },
  {
    name: "Luxury Selvedge Denim",
    price: 195.0,
    rating: 4.5,
    reviews: 245,
    img: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=500&fit=crop",
  },
  {
    name: "Astral Gold Pendant",
    price: 320.0,
    rating: 4.5,
    reviews: 89,
    img: "https://images.unsplash.com/photo-1515562141589-67f0d939b3fc?w=400&h=500&fit=crop",
  },
  {
    name: "Metropolis Frames",
    price: 215.0,
    rating: 4.5,
    reviews: 156,
    img: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400&h=500&fit=crop",
  },
];

const BestSellers = () => {
  return (
    <section className="py-12 lg:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
            Our Best Sellers
          </h2>
          <p className="text-gray-500 text-sm mt-2">
            The most coveted pieces as chosen by you
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {bestSellers.map((product, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl overflow-hidden group hover:shadow-lg transition"
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-3 h-3 ${i < 4 ? "text-yellow-400" : "text-gray-300"}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="text-xs text-gray-400 ml-1">
                    ({product.reviews})
                  </span>
                </div>
                <h3 className="font-semibold text-sm text-gray-800 mb-1">
                  {product.name}
                </h3>
                <p className="text-indigo-700 font-bold text-sm">
                  ${product.price.toFixed(2)}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <button className="border border-indigo-700 text-indigo-700 px-8 py-3 rounded-full text-sm font-medium hover:bg-indigo-700 hover:text-white transition">
            View More Bestsellers
          </button>
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
