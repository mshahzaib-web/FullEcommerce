const products = [
  {
    id: 1,
    name: "Minimalist Silk Shirt",
    size: "Medium",
    qty: 1,
    totalPrice: 240.0,
    unitPrice: 240.0,
    image:
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=200&h=250&fit=crop",
  },
  {
    id: 2,
    name: "Tailored Wool Trousers",
    size: "32",
    qty: 1,
    totalPrice: 310.0,
    unitPrice: 310.0,
    image:
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=200&h=250&fit=crop",
  },
];

function OrderedProducts() {
  return (
    <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm">
      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
        Ordered Products
      </h2>

      {products.map((product) => (
        <>
          <div key={product.id} className="pb-6 border-b border-gray-100 mb-6">
            <div className="grid grid-cols-1 md:grid-cols-4">
              {/* Product Image */}
              <div className="w-full sm:w-28 h-40 sm:h-32 bg-gray-100 rounded-xl overflow-hidden shrink-0">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Product Details */}
              {/* <div className="flex-1 flex flex-col justify-between"> */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                <div>
                  <h3 className="line-clamp-2 text-sm font-bold text-gray-900 hover:line-clamp-none">
                    {product.name} to the principal gove higer second cshool tah
                    garh
                  </h3>
                  <div className="mt-2">
                    <p className="text-gray-500 text-sm mt-0.5">
                      Size:{" "}
                      <span className="font-semibold">{product.size}</span>
                    </p>
                    <p className="text-gray-500 text-sm mt-0.5">
                      Color:{" "}
                      <span className="font-semibold">{product?.color}</span>
                    </p>
                    <p className="text-gray-500 text-sm mt-0.5">
                      Quantity:{" "}
                      <span className="font-semibold">{product.qty}</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              {/* <div className="flex items-center gap-3 mt-4"> */}
              {/* <button className="bg-indigo-700 hover:bg-indigo-800 text-white font-medium py-2.5 px-5 rounded-xl text-sm transition-colors duration-200">
                  View Product
                </button> */}
              <div className="flex flex-col md:items-center my-5 md:m-0">
                <div className="me-2">
                  <label className="block text-xs font-normal text-gray-700">
                    Payment:{" "}
                    {/* <span className="font-bold text-amber-300">Pending</span> */}
                  </label>

                  <select className="w-full appearance-none p-1 mt-0.5  bg-gray-50 border border-gray-600 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm cursor-pointer">
                    <option>Payments</option>
                    <option>Paid</option>
                    <option>Pending</option>
                  </select>
                </div>
                <div className="mt-3">
                  <label className="block text-xs font-normal text-gray-700">
                    Status:{" "}
                    {/* <span className="font-bold text-indigo-600">
                        Processing
                      </span> */}
                  </label>

                  <select className="w-full appearance-none p-1 mt-0.5  bg-gray-50 border border-gray-600 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm cursor-pointer">
                    <option>Status</option>
                    <option>Deliverd</option>
                    <option>Processing</option>
                    <option>Shipped</option>
                  </select>
                </div>
              </div>
              {/* </div> */}
              <div className="text-left md:text-right sm:text-right">
                <p className="font-semibold text-gray-900 text-base sm:text-lg">
                  ${product.totalPrice.toFixed(2)}
                </p>
                <p className="text-gray-500 text-sm">
                  Unit Price: ${product.unitPrice.toFixed(2)}
                </p>
                <button className="mt-5 bg-indigo-700 hover:bg-indigo-800 text-white font-medium py-2.5 px-5 rounded-xl text-sm transition-colors duration-200">
                  Completed
                </button>
              </div>
            </div>
          </div>
          {/* </div> */}
        </>
      ))}
    </div>
  );
}

export default OrderedProducts;
