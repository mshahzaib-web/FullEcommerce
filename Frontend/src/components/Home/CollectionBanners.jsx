import { useNavigate } from "react-router-dom";

const CollectionBanners = () => {
  const navigate = useNavigate();
  // components/CollectionBanners.jsx
  const handleMenCollectionBtn = () => {
    navigate("/shop?collection=men");
  };

  const handleWomenCollectionBtn = () => {
    navigate("/shop?collection=men");
  };

  return (
    <section className="py-12 lg:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Men's Collection */}
          <div className="relative rounded-2xl overflow-hidden h-72 lg:h-80 group cursor-pointer">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=700&h=400&fit=crop"
              alt="Men's Collection"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-linear-to-r from-black/70 to-transparent"></div>
            <div className="absolute bottom-8 left-8 text-white">
              <p className="text-sm text-gray-300 mb-1">New Season</p>
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                The Men's Collection
              </h3>
              <button
                onClick={handleMenCollectionBtn}
                className="bg-white text-gray-900 px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-100 transition"
              >
                Shop Now
              </button>
            </div>
          </div>

          {/* Women's Edit */}
          <div className="relative rounded-2xl overflow-hidden h-72 lg:h-80 group cursor-pointer">
            <img
              src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=700&h=400&fit=crop"
              alt="Women's Edit"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-linear-to-r from-indigo-900/60 to-transparent"></div>
            <div className="absolute bottom-8 left-8 text-white">
              <p className="text-sm text-indigo-200 mb-1">Summer Essentials</p>
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                The Women's Collection
              </h3>
              <button
                onClick={handleWomenCollectionBtn}
                className="bg-white text-gray-900 px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-100 transition"
              >
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollectionBanners;
