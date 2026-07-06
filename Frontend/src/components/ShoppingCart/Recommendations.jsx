const Recommendations = () => {
  const products = [
    {
      id: 1,
      brand: "AURA ACCESSORIES",
      name: "Signature Leather Tote",
      price: "285.00",
      image:
        "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80&w=400",
    },
    {
      id: 2,
      brand: "LUXE FOOTWEAR",
      name: "Urban Nomad Sneakers",
      price: "195.00",
      image:
        "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=400",
    },
    {
      id: 3,
      brand: "PRECISION TIMEPIECES",
      name: "Minimalist Chronograph",
      price: "450.00",
      image:
        "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&q=80&w=400",
    },
    {
      id: 4,
      brand: "PRECISION TIMEPIECES",
      name: "Minimalist Chronograph",
      price: "450.00",
      image:
        "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&q=80&w=400",
    },
    {
      id: 5,
      brand: "PRECISION TIMEPIECES",
      name: "Minimalist Chronograph",
      price: "450.00",
      image:
        "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&q=80&w=400",
    },
  ];

  return (
    <div className="mt-12">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">You May Also Like</h2>
        <div className="flex gap-2">
          <button className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 text-gray-600 transition-colors">
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
          <button className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 text-gray-600 transition-colors">
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

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <>
            <div className="group cursor-pointer">
              <div className="relative aspect-square rounded-xl overflow-hidden bg-gray-100 mb-3">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-sm hover:bg-gray-50 text-indigo-600">
                  <svg
                    className="w-5 h-5"
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
              <h3 className="text-sm font-medium text-gray-900 mb-1 truncate">
                {product.name}
              </h3>
              <p className="text-sm font-bold text-gray-900">
                ${product.price}
              </p>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Recommendations;
