import { useState } from "react";
import { useProductDetails } from "../../context/productDetailsContext";

export default function ProductInfo() {
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const data = useProductDetails();
  const { product } = data;

  return (
    <>
      <div className="flex flex-col gap-5">
        <div>
          <p className="text-xs font-bold text-amber-700 tracking-widest uppercase mb-2">
            {product.brand}
          </p>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {product.name}
          </h1>
          <div className="flex items-center gap-2 mb-4">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-sm text-gray-500">(124 Reviews)</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-2xl font-bold text-gray-900">$149.00</span>
          <span className="bg-orange-100 text-orange-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
            Save 20% Today
          </span>
        </div>

        {product.stock <= 10 ? (
          <div className="flex items-center gap-1 text-sm text-red-600">
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
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Low Stock: Only {product.stock} items left in Sage
          </div>
        ) : (
          ""
        )}

        <div>
          <p className="text-sm text-gray-700 mb-2">
            Color: <span className="text-gray-500"></span>
          </p>
          <div className="flex flex-wrap gap-3">
            {product.color.map((color, index) => (
              <input
                key={`${color}-${index}`}
                size={color.length}
                readOnly
                value={color}
                onClick={() => setSelectedColor(`${color}-${index}`)}
                className={`flex items-center text-center px-1 h-8 rounded-lg border text-sm font-medium transition-colors border-gray-200 text-gray-700 hover:border-gray-400 hover:cursor-pointer outline-none
            ${
              selectedColor === `${color}-${index}`
                ? "border-indigo-600 border-2 text-indigo-700"
                : "border-gray-300 text-black"
            }
          `}
              />
            ))}
          </div>
        </div>

        <div>
          <div className="flex justify-between items-center mb-2">
            <p className="text-sm text-gray-700">Size</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {product.size.map((size, index) => (
              <div key={`${size}-${index}`}>
                <input
                  size={size.length}
                  readOnly
                  defaultValue={size}
                  onClick={() => setSelectedSize(`${size}-${index}`)}
                  className={`w-auto px-2 py-2 rounded-lg border text-center text-sm font-medium transition-colors border-gray-200 text-gray-700 hover:border-gray-400 cursor-pointer outline-none
                  ${
                    selectedSize === `${size}-${index}`
                      ? "border-indigo-600 border-2 text-indigo-700"
                      : "border-gray-300 text-black"
                  } 
                  `}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <p className="text-sm text-gray-700">Quantity</p>
          <div className="flex items-center border border-gray-300 rounded-lg">
            <button
              disabled={quantity == 1}
              onClick={() => setQuantity((prev) => prev - 1)}
              className="px-3 py-1 text-gray-600 hover:bg-gray-100 rounded-l-lg"
            >
              -
            </button>
            <input
              value={quantity}
              readOnly
              className="text-center px-1 py-1 text-sm font-medium border-x border-gray-300"
              style={{ width: "40px" }}
            />

            <button
              onClick={() => setQuantity((prev) => prev + 1)}
              className="px-3 py-1 text-gray-600 hover:bg-gray-100 rounded-r-lg"
            >
              +
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-3 mt-2">
          <button className="w-full bg-[#3b36d6] hover:bg-indigo-800 text-white font-medium py-3 rounded-lg transition-colors shadow-sm">
            Add to Cart
          </button>
          <button className="w-full bg-white border border-[#3b36d6] text-[#3b36d6] hover:bg-indigo-50 font-medium py-3 rounded-lg transition-colors">
            Buy Now
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-4 pt-6 border-t border-gray-200">
          <div className="flex items-start gap-3">
            <div className="mt-0.5">
              <svg
                className="w-5 h-5 text-indigo-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
                />
              </svg>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">Free Shipping</p>
              <p className="text-xs text-gray-500">Orders over $200</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="mt-0.5">
              <svg
                className="w-5 h-5 text-indigo-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">Eco Packaging</p>
              <p className="text-xs text-gray-500">100% Recyclable</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
