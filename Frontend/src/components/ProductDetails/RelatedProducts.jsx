export default function RelatedProducts() {
  const products = [
    {
      id: 1,
      brand: "LUXE AURA",
      name: "Wool Trousers",
      price: "$210.00",
      img: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&q=80&w=400",
    },
    {
      id: 2,
      brand: "LUXE AURA",
      name: "Cashmere Scarf",
      price: "$125.00",
      img: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&q=80&w=400",
    },
    {
      id: 3,
      brand: "LUXE AURA",
      name: "Linen Blazer",
      price: "$185.00",
      img: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&q=80&w=400",
    },
    {
      id: 4,
      brand: "LUXE AURA",
      name: "Leather Loafers",
      price: "$240.00",
      img: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&q=80&w=400",
    },
  ];
  return (
    <>
      <div className="mt-20 mb-10">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold text-gray-900">
            You May Also Like
          </h2>
          <div className="flex gap-2">
            <button className="p-2 rounded-full border border-gray-300 hover:bg-gray-50 text-gray-600">
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
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button className="p-2 rounded-full border border-gray-300 hover:bg-gray-50 text-gray-600">
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
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden bg-gray-100 mb-3">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-sm hover:bg-gray-50">
                  <svg
                    className="w-5 h-5 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </button>
              </div>
              <p className="text-xs font-bold text-gray-500 tracking-wide mb-1">
                {product.brand}
              </p>
              <h3 className="text-sm font-medium text-gray-900 mb-1">
                {product.name}
              </h3>
              <p className="text-sm font-bold text-indigo-700">
                {product.price}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
