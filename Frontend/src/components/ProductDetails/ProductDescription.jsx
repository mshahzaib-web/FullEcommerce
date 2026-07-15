import { useProductDetails } from "../../context/productDetailsContext";

export default function ProductDescription() {
  const data = useProductDetails();

  return (
    <>
      <div className="mt-16 max-w-3xl mx-auto">
        <div className="flex border-b border-gray-200 mb-8">
          <button className="px-6 py-3 text-sm font-medium text-indigo-600 border-b-2 border-indigo-600 focus:outline-none">
            Description
          </button>
          <button className="px-6 py-3 text-sm font-medium text-gray-500 hover:text-gray-700 focus:outline-none">
            Reviews (124)
          </button>
        </div>

        <div className="prose prose-sm text-gray-600">
          <p className="mb-4 leading-relaxed">{data.product.description}</p>
        </div>
      </div>
    </>
  );
}
