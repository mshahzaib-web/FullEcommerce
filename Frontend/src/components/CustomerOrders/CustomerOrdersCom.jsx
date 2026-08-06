import { useQuery } from "@tanstack/react-query";
import LoadingCom from "../Loading/LoadingCom";
import { getUserOrders } from "../../api/User/user";

export default function CustomerOrdersCom() {
  const { data, isPending } = useQuery({
    queryKey: ["orders"],
    queryFn: getUserOrders,
  });

  console.log(data);

  if (isPending) return <LoadingCom />;
  return (
    <>
      <div className="p-8">
        <nav className="flex gap-2 text-label-sm font-label-sm text-on-surface-variant mb-2">
          <a className="hover:text-primary transition-colors" href="#">
            Home
          </a>
          <span>/user/</span>
          <span className="text-indigo-600">orders</span>
        </nav>
        <h1 className=" text-2xl md:text-4xl font-bold text-black">
          Your Orders
        </h1>
      </div>

      {data?.userOrders.map((item) => (
        <div
          key={item?._id}
          className="bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-gray-500 grid sm:grid-cols-1 md:grid-cols-4 justify-around gap-4 sm:gap-6 mb-4"
        >
          <div className="w-full sm:w-32 h-32 shrink-0 bg-gray-50 rounded-lg overflow-hidden">
            <img
              src={item?.product?.mainImage?.url}
              alt={item?.product?.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Product Details & Quantity */}
          <div className=" flex flex-col">
            <div>
              <p className="text-xs font-bold text-gray-500 tracking-wider uppercase mb-1">
                {item?.product?.brand}
              </p>
              <h3 className="text-sm font-bold text-gray-900 mb-1">
                {item?.product?.name}
              </h3>
              {item?.selectdColor == "None selected" ? (
                ""
              ) : (
                <p className="text-sm text-gray-500">
                  {" "}
                  Color:{" "}
                  <span className="font-medium text-gray-700">
                    {item?.selectdColor}
                  </span>
                </p>
              )}
              {item?.selectedSize == "None selected" ? (
                ""
              ) : (
                <p className="text-sm text-gray-500">
                  Size:{" "}
                  <span className="font-medium text-gray-700">
                    {item?.selectedSize}
                  </span>
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
                  {item?.quantity}
                </span>
              </div>
            </div>
          </div>

          {/* product status and payment info */}
          <div className="flex flex-col md:items-center my-5 md:m-0">
            <div className="me-2">
              <label className="block text-xs font-normal text-gray-700">
                Payment:{" "}
                {/* <span className="font-bold text-amber-300">Pending</span> */}
              </label>

              <select className="w-full appearance-none p-1 mt-0.5  bg-gray-50 border border-gray-600 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm cursor-pointer">
                <option>{item?.payment}</option>
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
                <option>{item?.status}</option>
              </select>
            </div>
          </div>

          {/* Price & Actions */}
          <div className="flex flex-col justify-start items-end min-w-35">
            <p className="text-xl font-bold text-indigo-600">${item?.price}</p>

            {/* <div className="flex gap-4 mt-4 sm:mt-0">
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
            </div> */}
          </div>
        </div>
      ))}

      {data?.userOrders?.length === 0 && (
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
            Your Cannot Order Any Product.
          </h3>
          <p className="text-gray-500 mt-1">Order items that you want buy.</p>
        </div>
      )}
    </>
  );
}
