import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
// import { useForm } from "react-hook-form";

import { getCartProduct, removeCartProduct } from "../../api/User/user";
import LoadingCom from "../Loading/LoadingCom";

const CartItem = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  // const { register, handleSubmit } = useForm();

  const { data, isPending, error } = useQuery({
    queryKey: ["cart"],
    queryFn: getCartProduct,
    retry: false,
  });

  console.log(data);

  const removeCartProductMutation = useMutation({
    mutationFn: removeCartProduct,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
      toast.success(data.message);
    },
    onError: (error) => {
      toast.error(error.response.data.message);
    },
  });

  const handleRemoveCartProduct = (id) => {
    console.log(id);
    removeCartProductMutation.mutate(id);
  };

  const cartProducts = [];
  const handleBuyAllBtn = () => {
    data.userCartProduct.forEach((item) => {
      cartProducts.push({
        selectColor: item.color,
        selectSize: item.size,
        quantity: item.quantity,
        price: item.product.price,
        product: item.product._id,
        owner: item.product.owner,
        products: item.product,
      });
    });
    navigate(`/user/product/${cartProducts[0].product}/checkout`, {
      state: { cartProducts },
    });
  };

  if (isPending) return <LoadingCom />;
  if (error) return <p>{error.message}</p>;

  return (
    <>
      <div className="p-8">
        <nav className="flex gap-2 text-label-sm font-label-sm text-on-surface-variant mb-2">
          <a className="hover:text-primary transition-colors" href="#">
            Home
          </a>
          <span>/</span>
          <span className="text-indigo-600">Cart</span>
        </nav>
        <h1 className=" text-2xl md:text-3xl font-bold text-gray-600">
          Shopping Cart
        </h1>
      </div>

      {data.userCartProduct.map((item) => (
        <div
          key={item.product._id}
          className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-gray-500 grid sm:grid-cols-1 md:grid-cols-3 justify-around gap-4 sm:gap-6 mb-4"
        >
          <div className="w-full sm:w-32 h-32 shrink-0 bg-gray-50 rounded-lg overflow-hidden">
            <img
              src={item.product.mainImage.url}
              alt={item.product.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Product Details & Quantity */}
          <div className=" flex flex-col">
            <div>
              <p className="text-xs font-bold text-gray-500 tracking-wider uppercase mb-1">
                {item.product.brand}
              </p>
              <h3 className="text-sm font-bold text-gray-900 mb-1">
                {item.product.name}
              </h3>
              {item.color == "None selected" ? (
                ""
              ) : (
                <p className="text-sm text-gray-500">
                  {" "}
                  Color:{" "}
                  <span className="font-medium text-gray-700">
                    {item.color}
                  </span>
                </p>
              )}
              {item.size == "None selected" ? (
                ""
              ) : (
                <p className="text-sm text-gray-500">
                  Size:{" "}
                  <span className="font-medium text-gray-700">{item.size}</span>
                </p>
              )}
            </div>

            <div className="flex items-center">
              {/* Quantity Selector */}
              <div className="flex items-center border border-gray-200 rounded-full  ps-1.5 bg-gray-50">
                <p className="w-6 h-6 flex items-center justify-center text-gray-500 hover:text-gray-800 ml-3">
                  Quantity:
                </p>
                <span className="ml-7 text-sm font-bold text-gray-700">
                  {item.quantity}
                </span>
              </div>
            </div>
          </div>

          {/* Price & Actions */}
          <div className="flex flex-col justify-start items-end min-w-35">
            <p className="text-xl font-bold text-indigo-600">
              ${item.product.price}
            </p>

            <div className="flex gap-4 mt-4 sm:mt-0">
              <Link
                to={`/product/${item.product._id}`}
                className="flex items-center gap-1 font-bold text-sm text-indigo-500 hover:text-indigo-700 transition-colors hover:cursor-pointer"
              >
                Buy
              </Link>
              <button
                type="button"
                onClick={() => handleRemoveCartProduct(item.product._id)}
                className="flex items-center gap-1 text-sm text-gray-500 hover:text-red-600 transition-colors hover:cursor-pointer"
              >
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
          {/* <input
              type="hidden"
              defaultValue={item.product._id}
              {...register(`products.${index}.productId`)}
            />

            <input
              type="hidden"
              defaultValue={item.color}
              {...register(`products.${index}.color`)}
            />

            <input
              type="hidden"
              defaultValue={item.size}
              {...register(`products.${index}.size`)}
            />

            <input
              type="hidden"
              defaultValue={item.quantity}
              {...register(`products.${index}.quantity`, {
                valueAsNumber: true,
              })}
            /> */}
        </div>
        //Hiden input to send data
      ))}

      {data?.userCartProduct?.length === 0 && (
        <div className="text-center py-16">
          <svg
            className="w-16 h-16 text-gray-300 mx-auto mb-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
            />
          </svg>
          <h3 className="text-lg font-medium text-gray-900">
            Your Cart is empty
          </h3>
          <p className="text-gray-500 mt-1">
            Save items that you buy by clicking the add to cart button
          </p>
        </div>
      )}

      {data?.userCartProduct?.length > 0 && (
        <>
          <div className="mt-6 overflow-hidden rounded-2xl border border-indigo-100 bg-white shadow-sm">
            <div className="h-1 w-full bg-gradient-to-r from-indigo-500 via-indigo-600 to-purple-600" />

            <div className="grid grid-cols-1 gap-6 p-5 sm:p-6 md:grid-cols-3 md:items-center md:gap-8">
              {/* Total Products */}
              <div className="flex items-center justify-between rounded-xl bg-indigo-50/70 px-4 py-4 md:block md:bg-transparent md:px-0 md:py-0">
                <p className="text-sm font-medium text-gray-500 sm:text-base">
                  Total Products
                </p>

                <p className="mt-1 text-2xl font-bold text-indigo-600 sm:text-3xl">
                  {data.userCartProduct.length}
                </p>
              </div>

              {/* Total Price */}
              <div className="flex items-center justify-between rounded-xl bg-indigo-50/70 px-4 py-4 md:block md:bg-transparent md:px-0 md:py-0">
                <p className="text-sm font-medium text-gray-500 sm:text-base">
                  Total Price
                </p>

                <p className="mt-1 text-2xl font-bold text-indigo-600 sm:text-3xl">
                  $
                  {data.userCartProduct.reduce(
                    (total, item) => total + item.product.price,
                    0,
                  )}
                </p>
              </div>

              {/* Buy All Button */}
              <div className="flex w-full justify-center md:justify-end">
                <button
                  type="button"
                  onClick={handleBuyAllBtn}
                  className="w-full rounded-xl bg-indigo-600 px-6 py-3.5 text-base font-semibold text-white shadow-md shadow-indigo-200 transition-all duration-200 hover:-translate-y-0.5 hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-2/3 md:w-full lg:w-2/3"
                >
                  Buy All
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default CartItem;
