// components/NewArrivals.jsx
import { Link } from "react-router-dom";

import { useHomeProduct } from "../../context/homeProductContext";

const NewArrivals = () => {
  const data = useHomeProduct();
  const { products } = data;
  return (
    <section className="py-12 lg:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
            New Arrivals
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map(
            (product, idx) =>
              idx < 4 && (
                <div
                  key={idx}
                  className="bg-white rounded-xl overflow-hidden group hover:shadow-lg transition"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={product?.mainImage?.url}
                      alt={product?.name}
                      className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <span className="absolute top-3 right-3 bg-indigo-700 text-white text-xs font-bold px-2 py-1 rounded">
                      NEW
                    </span>
                  </div>

                  <div className="p-4">
                    <p className="py-0 pb-2 text-gray-400">{product?.brand}</p>
                    <h3 className=" line-clamp-2 font-semibold text-sm text-gray-800 mb-1">
                      {product?.name}
                    </h3>
                    <p className="text-indigo-700 font-bold text-sm">
                      ${product?.price.toFixed(2)}
                    </p>
                  </div>
                  <div className="text-center mt-1 w-full">
                    <Link to={`/product/${product._id}`}>
                      <button className="w-full border border-indigo-700 text-indigo-700 px-8 py-3 rounded-full text-sm font-medium hover:bg-indigo-700 hover:text-white transition">
                        View
                      </button>
                    </Link>
                  </div>
                </div>
              ),
          )}
        </div>
      </div>
      <div className="text-center mt-10">
        <Link to={"/shop"}>
          <button className="border border-indigo-700 text-indigo-700 px-8 py-3 rounded-full text-sm font-medium hover:bg-indigo-700 hover:text-white transition">
            View More New Arrivels
          </button>
        </Link>
      </div>
    </section>
  );
};

export default NewArrivals;
