// components/BestSellers.jsx
import { Link } from "react-router-dom";

import { useHomeProduct } from "../../context/homeProductContext";

const BestSellers = () => {
  const data = useHomeProduct();

  const { products } = data;

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

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 ">
          {products.map(
            (product, idx) =>
              idx < 4 && (
                <div
                  key={idx}
                  className=" bg-white overflow-hidden group hover:shadow-lg transition"
                >
                  <div className="relative overflow-hidden ">
                    <img
                      src={product?.mainImage?.url}
                      alt={product?.name}
                      className="w-full h-40 md:h-44 lg:h-56 object-contain rounded-md  group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div>
                    <div className="p-4">
                      <h3 className="line-clamp-2 font-semibold text-sm text-gray-800 mb-1">
                        {product?.name}
                      </h3>
                      <p className="text-indigo-700 font-bold text-sm">
                        ${product?.price.toFixed(2)}
                      </p>
                    </div>
                    <div className="text-center mt-1 ">
                      <Link to={`/product/${product._id}`}>
                        <button className="w-full border border-indigo-700 text-indigo-700 px-8 py-3 rounded-full text-sm font-medium hover:bg-indigo-700 hover:text-white transition">
                          View
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ),
          )}
        </div>

        <div className="text-center mt-10">
          <Link to={"/shop"}>
            <button className="border border-indigo-700 text-indigo-700 px-8 py-3 rounded-full text-sm font-medium hover:bg-indigo-700 hover:text-white transition">
              View More Bestsellers
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
