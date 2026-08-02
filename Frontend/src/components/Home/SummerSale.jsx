// components/SummerSale.jsx
import { Link } from "react-router-dom";
const SummerSale = () => {
  return (
    <section className="py-12 lg:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-indigo-50 rounded-2xl overflow-hidden grid md:grid-cols-2">
          {/* Left Content */}
          <div className="p-8 lg:p-12 flex flex-col justify-center">
            <span className="text-xs font-bold text-indigo-700 uppercase tracking-wider mb-4">
              Limited Time Offer
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
              Summer
              <br />
              Collection <span className="text-indigo-700">Sale</span>
            </h2>
            <p className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">
              Up to 70% OFF
            </p>
            <p className="text-gray-500 text-sm mb-8 max-w-md">
              Indulge in premium craftsmanship for less. Our summer clearance
              event is now live across all luxury categories.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to={"/shop"}>
                <button className="bg-indigo-700 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-indigo-800 transition">
                  Shop Now
                </button>
              </Link>
              {/* <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-100 transition">
                Terms Apply
              </button> */}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-64 md:h-auto">
            <img
              src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=700&h=500&fit=crop"
              alt="Summer Sale"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SummerSale;
