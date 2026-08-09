import { useQuery } from "@tanstack/react-query";
import LoadingCom from "../Loading/LoadingCom";
import { getAdminProducts } from "../../api/Admin/admin";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

function ProductCard({ adminSearchProduct }) {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const product = searchParams.get("products");

  const { data, isPending, error } = useQuery({
    queryKey: ["adminproducts", product, adminSearchProduct],
    queryFn: () => getAdminProducts({ product, adminSearchProduct }),
  });

  console.log(data);

  const handleUpdateProductBtn = (id) => {
    navigate(`/admin/${id}/update-product`);
  };

  if (error) return toast.error(error.message);
  if (isPending) return <LoadingCom />;
  return (
    <>
      {data?.products?.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data?.products.map((product) => (
            <div
              key={product?._id}
              className=" bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col"
            >
              {/* Product Image */}
              <div className="w-full h-full bg-gray-100 overflow-hidden">
                <img
                  src={product?.mainImage?.url}
                  alt={product?.name}
                  className="w-full h-full rounded-md object-cover"
                />
              </div>

              {/* Card Content */}
              <div className="p-5 flex flex-col grow">
                {/* Category */}
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
                  {product?.category} • {product?.brand}
                </p>

                {/* Product Name */}
                <h3 className="line-clamp-2 text-sm font-bold text-gray-900 mb-1">
                  {product?.name}
                </h3>

                {/* SKU */}
                <p className="text-xs text-gray-400 mb-3">
                  SKU: {product?.sku}
                </p>

                {/* Price */}
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-lg font-bold text-indigo-700">
                    ${product?.price.toFixed(2)}
                  </span>
                </div>

                {/* Available Stock */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-sm text-gray-600">Available Stock</span>
                  <span className={`text-sm font-bold ${product?.stock}`}>
                    {product?.stock} units
                  </span>
                </div>

                {/* Spacer to push buttons to bottom */}
                <div className="mt-auto">
                  {/* Update Button */}
                  <button
                    onClick={() => handleUpdateProductBtn(product?._id)}
                    className="w-full bg-indigo-700 hover:bg-indigo-800 text-white font-medium py-3 px-4 rounded-xl transition-colors duration-200 mb-3"
                  >
                    Update Product
                  </button>

                  {/* Delete Link */}
                  <button className="w-full text-red-500 hover:text-red-700 font-medium py-2 px-4 transition-colors duration-200">
                    Delete Product
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : product != "" ? (
        <div className="flex justify-center items-center py-10">
          <p className="text-gray-400 text-xl">
            No records require your attention right now. Inventory, orders, and
            payments are all clear.Everything is running correctly.
          </p>
        </div>
      ) : (
        <div className="flex justify-center items-center py-10">
          <p className="text-gray-400 text-xl">
            You haven't added any products yet.
          </p>
        </div>
      )}
    </>
  );
}

export default ProductCard;
