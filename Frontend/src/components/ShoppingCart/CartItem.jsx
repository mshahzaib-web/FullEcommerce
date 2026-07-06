const CartItem = () => {
  const Items = [
    {
      id: 1,
      brand: "LUXE ESSENTIALS",
      name: "Minimalist Silk Shirt",
      size: "Medium",
      color: "Pearl White",
      price: "149.00",
      quantity: 1,
      image:
        "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=200",
    },
    {
      id: 2,
      brand: "AURA STUDIO",
      name: "Tailored Midnight Blazer",
      size: "Large",
      color: "Midnight Blue",
      price: "126.00",
      quantity: 1,
      image:
        "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&q=80&w=200",
    },
  ];
  return (
    <>
      <div className="p-8">
        <nav class="flex gap-2 text-label-sm font-label-sm text-on-surface-variant mb-2">
          <a class="hover:text-primary transition-colors" href="#">
            Home
          </a>
          <span>/</span>
          <span class="text-indigo-600">Cart</span>
        </nav>
        <h1 class=" text-2xl md:text-5xl font-bold text-black">
          Shopping Cart
        </h1>
      </div>
      {Items.map((item) => (
        <>
          <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-gray-100 grid sm:grid-cols-1 md:grid-cols-3 justify-around gap-4 sm:gap-6 mb-4">
            <div className="w-full sm:w-32 h-32 shrink-0 bg-gray-50 rounded-lg overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Product Details & Quantity */}
            <div className=" flex flex-col justify-between">
              <div>
                <p className="text-xs font-bold text-gray-500 tracking-wider uppercase mb-1">
                  {item.brand}
                </p>
                <h3 className="text-lg font-bold text-gray-900 mb-1">
                  {item.name}
                </h3>
                <p className="text-sm text-gray-500">
                  Size:{" "}
                  <span className="font-medium text-gray-700">{item.size}</span>{" "}
                  &nbsp;&nbsp; Color:{" "}
                  <span className="font-medium text-gray-700">
                    {item.color}
                  </span>
                </p>
              </div>

              <div className="mt-4 sm:mt-0 flex items-center">
                {/* Quantity Selector */}
                <div className="flex items-center border border-gray-200 rounded-full px-2 py-1 bg-gray-50">
                  <button className="w-6 h-6 flex items-center justify-center text-gray-500 hover:text-gray-800">
                    -
                  </button>
                  <span className="px-3 text-sm font-medium text-gray-700">
                    {item.quantity}
                  </span>
                  <button className="w-6 h-6 flex items-center justify-center text-gray-500 hover:text-gray-800">
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Price & Actions */}
            <div className="flex flex-col justify-start items-end min-w-35">
              <p className="text-xl font-bold text-indigo-600">${item.price}</p>

              <div className="flex gap-4 mt-4 sm:mt-0">
                <button className="flex items-center gap-1 text-sm text-gray-500 hover:text-indigo-600 transition-colors">
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
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                  Move to Wishlist
                </button>
                <button className="flex items-center gap-1 text-sm text-gray-500 hover:text-red-600 transition-colors">
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
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                  Remove
                </button>
              </div>
            </div>
          </div>
        </>
      ))}
      <hr className="text-indigo-700 w-full h-7" />
    </>
  );
};

export default CartItem;
