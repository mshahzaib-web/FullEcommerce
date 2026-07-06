// components/NewArrivals.jsx

const newArrivals = [
  {
    name: "Performance Knit Top",
    price: 85.0,
    tag: "NEW",
    img: "https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=400&h=400&fit=crop",
  },
  {
    name: "Youth Revive Serum",
    price: 120.0,
    tag: "NEW",
    img: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&h=400&fit=crop",
  },
  {
    name: "Pavé Diamond Hoops",
    price: 850.0,
    tag: "NEW",
    img: "https://images.unsplash.com/photo-1515562141589-67f0d939b3fc?w=400&h=400&fit=crop",
  },
  {
    name: "Signature Sound Hi",
    price: 499.0,
    tag: "NEW",
    img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
  },
];

const tabs = ["All", "Men", "Women", "Electronics", "Beauty"];

const NewArrivals = () => {
  return (
    <section className="py-12 lg:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
            New Arrivals
          </h2>
          <div className="flex gap-2 flex-wrap">
            {tabs.map((tab, idx) => (
              <button
                key={idx}
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                  idx === 0
                    ? "bg-indigo-700 text-white"
                    : "bg-white text-gray-600 hover:bg-gray-100"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {newArrivals.map((product, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl overflow-hidden group hover:shadow-lg transition"
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-3 right-3 bg-indigo-700 text-white text-xs font-bold px-2 py-1 rounded">
                  {product.tag}
                </span>
              </div>
              <div className="p-4">
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
      </div>
    </section>
  );
};

export default NewArrivals;
