import { useFormContext } from "react-hook-form";
import { useUpdateProduct } from "../../context/updateProductContext";

const UpdateGeneralInformation = () => {
  const data = useUpdateProduct();
  const { product } = data;
  const { register } = useFormContext();

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <div className="flex items-center gap-2 mb-6">
        <div className="w-5 h-5 rounded-full border-2 border-indigo-600 flex items-center justify-center">
          <span className="text-xs font-bold text-indigo-600">i</span>
        </div>
        <h2 className="text-lg font-semibold text-gray-900">
          General Information
        </h2>
      </div>

      <div className="space-y-5">
        {/* Product Name & SKU */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Product Name
            </label>
            <input
              {...register("name")}
              defaultValue={product?.name}
              type="text"
              placeholder="e.g. Silk Evening Gown"
              className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              SKU
            </label>

            <div className="flex">
              <span className="flex items-center px-4 bg-gray-200 border border-r-0 border-gray-200 rounded-l-lg text-gray-700">
                SKU-
              </span>

              <input
                {...register("sku")}
                defaultValue={product?.sku}
                type="text"
                placeholder="mysku"
                className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
              />
            </div>

            <p className="text-xs text-gray-500 mt-1">
              SKU format: SKU-your-code (example: SKU-mysku)
            </p>
          </div>
        </div>

        {/* Category & Brand */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Category
            </label>
            <div className="relative">
              <select
                {...register("category")}
                className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent appearance-none cursor-pointer"
              >
                <option value={product?.category}>{product?.category}</option>
                <option value="Clothing">Clothing</option>
                <option value="Accessories">Accessories</option>
                <option value="Footwear">Footwear</option>
                <option value="Electronics">Electronics</option>
                <option value="Fashion">Fashion</option>
                <option value="Home & Living">Home & Living</option>
                <option value="Beauty & Personal Care">
                  Beauty & Personal Care
                </option>
                <option value="Sports & Fitness">Sports & Fitness</option>
                <option value="Books & Stationery">Books & Stationery</option>
                <option value="Automotive & Tools">Automotive & Tools</option>
              </select>
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Brand
            </label>
            <input
              {...register("brand")}
              defaultValue={product?.brand}
              type="text"
              placeholder="e.g. LuxeAura Signature"
              className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
            />
          </div>
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Description
          </label>
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            {/* Text Area */}
            <textarea
              {...register("description")}
              defaultValue={product?.description}
              placeholder="Describe your product in detail..."
              rows={6}
              className="w-full px-4 py-3 bg-white focus:outline-none resize-none text-gray-700"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateGeneralInformation;
