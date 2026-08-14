import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import LoadingCom from "../Loading/LoadingCom";
import { getProducts } from "../../api/Product/product";
import { wishlistProduct } from "../../api/User/user";

export default function RelatedProducts({ category }) {
  console.log(category);

  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { data, isPending, error } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
    retry: false,
  });

  console.log(data);
  const wishlistMutation = useMutation({
    mutationFn: wishlistProduct,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["wishlist"] });
      toast.success(data.message);
    },
    onError: (error) => {
      toast.error(error.response.data.message);
    },
  });

  const handleWishList = (id) => {
    console.log(id);
    wishlistMutation.mutate(id);
  };

  if (isPending) return <LoadingCom />;

  if (error) return <p>Something went wrong</p>;

  // const products = [
  //   {
  //     id: 1,
  //     brand: "LUXE AURA",
  //     name: "Wool Trousers",
  //     price: "$210.00",
  //     img: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&q=80&w=400",
  //   },
  //   {
  //     id: 2,
  //     brand: "LUXE AURA",
  //     name: "Cashmere Scarf",
  //     price: "$125.00",
  //     img: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&q=80&w=400",
  //   },
  //   {
  //     id: 3,
  //     brand: "LUXE AURA",
  //     name: "Linen Blazer",
  //     price: "$185.00",
  //     img: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&q=80&w=400",
  //   },
  //   {
  //     id: 4,
  //     brand: "LUXE AURA",
  //     name: "Leather Loafers",
  //     price: "$240.00",
  //     img: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&q=80&w=400",
  //   },
  // ];
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
          {data?.products.map((product) => (
            <>
              {product.category == category && (
                <div
                  key={product?._id}
                  className="bg-white border border-gray-400 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow group flex flex-col"
                >
                  {/* Image Box Section */}
                  <div className="relative aspect-square bg-gray-50 overflow-hidden">
                    <img
                      src={product?.mainImage?.url}
                      alt={product?.name}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* {product.tag && (
                <span
                  className={`absolute top-3 left-3 text-[9px] font-black tracking-wider px-2 py-0.5 rounded-md ${product.tag === "NEW" ? "bg-[#4F46E5] text-white" : "bg-[#FCA5A5] text-[#991B1B]"}`}
                >
                  {product.tag}
                </span>
              )} */}
                  </div>

                  {/* Meta Text Information */}
                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <p className="text-[10px] font-bold tracking-widest text-gray-400 uppercase">
                        {product?.brand}
                      </p>
                      <h3 className="text-xs font-bold text-gray-800 mt-1 mb-1.5">
                        {product?.name}
                      </h3>

                      {/* Rating layout block indicators */}
                    </div>

                    {/* Bottom Action/Pricing Alignment Controls */}
                    <div className="mt-auto">
                      <div className="flex items-baseline space-x-2 mb-3">
                        <span className="text-sm font-black text-[#4F46E5]">
                          ${product?.price}
                        </span>
                      </div>

                      {/* Addition Controls buttons bar wrapper layout */}
                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={() => navigate(`/product/${product._id}`)}
                          className="flex-1 bg-[#4F46E5] text-white font-bold text-[11px] py-2.5 px-3 rounded-xl hover:bg-[#4338CA] transition-colors flex items-center justify-center hover:cursor-pointer"
                        >
                          Buy Now
                        </button>
                        <button
                          type="button"
                          onClick={() => handleWishList(product._id)}
                          className="p-2 rounded-xl bg-indigo-50 text-[#4F46E5] hover:bg-indigo-600 hover:text-white transition-colors hover:cursor-pointer"
                        >
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </>
          ))}
        </div>
      </div>
    </>
  );
}
