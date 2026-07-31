import { useLocation } from "react-router-dom";
import { useFormContext } from "react-hook-form";
import { useEffect } from "react";

const SelectionCard = ({ setSelectProduct }) => {
  const location = useLocation();
  const { register } = useFormContext();

  const { product, payload } = location.state || {};
  const cartProducts = location.state?.cartProducts ?? [];

  useEffect(() => {
    if (cartProducts.length > 0) {
      setSelectProduct(cartProducts);
    }
  }, [cartProducts, setSelectProduct]);

  console.log(payload);
  return (
    <>
      <h2 className="text-xl mt-7 font-bold text-gray-900 mb-4">
        Your Selection
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 bg-white rounded-2xl p-6 shadow-sm mb-6">
        {cartProducts?.length > 0 ? (
          cartProducts.map((item) => (
            <div key={item.products._id} className="flex gap-4 mb-7">
              {/* Product Image */}
              <div className="w-24 bg-gray-100 rounded-lg overflow-hidden shrink-0">
                <img
                  src={item?.products?.mainImage?.url}
                  alt="Silk Shirt"
                  className="rounded-lg w-full h-auto object-cover"
                />
              </div>

              {/* Product Details */}
              <div className="flex-1">
                <div className="">
                  <div>
                    <p className="text-xs font-bold text-gray-500 tracking-wider uppercase mb-1">
                      {item?.products?.brand}
                    </p>
                    <h3 className="text-md font-medium text-gray-900">
                      {item?.products?.name}
                    </h3>
                  </div>
                  <p className="text-lg font-bold text-[#2e2bb8]">
                    ${item?.products?.price}
                  </p>
                </div>

                <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
                  {item?.selectColor != "None selected" && (
                    <div className="flex items-center gap-2 font-medium">
                      <span>Color:</span>

                      <span>{item?.selectColor}</span>
                    </div>
                  )}
                  {item?.selectSize != "None selected" && (
                    <div className="font-medium">
                      <span>Size: {item?.selectSize}</span>
                    </div>
                  )}
                </div>

                <div className="mt-1 flex items-center gap-3">
                  <span className="text-sm font-medium text-gray-700">
                    Quantity:
                  </span>
                  <div className="flex items-center bg-indigo-50 rounded-full px-3 py-1">
                    <span className="text-sm font-medium text-gray-700 px-2">
                      {item?.quantity}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="flex gap-4">
            {/* Product Image */}
            <div className="w-24 bg-gray-100 rounded-lg overflow-hidden shrink-0">
              <img
                src={product?.mainImage?.url}
                alt="Silk Shirt"
                className="rounded-lg w-full h-auto object-cover"
              />
            </div>

            {/* Product Details */}
            <div className="flex-1">
              <div className="">
                <div>
                  <p className="text-xs font-bold text-gray-500 tracking-wider uppercase mb-1">
                    {product?.brand}
                  </p>
                  <h3 className="text-md font-medium text-gray-900">
                    {product?.name}
                  </h3>
                </div>
                <p className="text-lg font-bold text-[#2e2bb8]">
                  ${product?.price}
                </p>
              </div>

              <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
                {payload?.selectedColor != "None selected" && (
                  <div className="flex items-center gap-2 font-medium">
                    <span>Color:</span>

                    <span>{payload?.selectedColor}</span>
                  </div>
                )}
                {payload?.selectedSize != "None selected" && (
                  <div className="font-medium">
                    <span>Size: {payload?.selectedSize}</span>
                  </div>
                )}
              </div>

              <div className="mt-3 flex items-center gap-3">
                <span className="text-sm font-medium text-gray-700">
                  Quantity:
                </span>
                <div className="flex items-center bg-indigo-50 rounded-full px-3 py-1">
                  <span className="text-sm font-medium text-gray-700 px-2">
                    {payload?.quantity}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {cartProducts?.length > 0 ? (
        <></>
      ) : (
        <>
          <input
            defaultValue={product?.owner}
            {...register("owner")}
            type="text"
            className="hidden"
          />
          <input
            defaultValue={product?._id}
            {...register("product")}
            type="text"
            className="hidden"
          />
          <input
            defaultValue={payload?.selectedColor}
            {...register("selectColor")}
            type="text"
            className="hidden"
          />
          <input
            defaultValue={payload?.selectedSize}
            {...register("selectSize")}
            type="text"
            className="hidden"
          />
          <input
            defaultValue={payload?.quantity}
            {...register("quantity", { valueAsNumber: true })}
            type="text"
            className="hidden"
          />
          <input
            defaultValue={payload?.price}
            {...register("price", { valueAsNumber: true })}
            type="text"
            className="hidden"
          />
        </>
      )}
    </>
  );
};

export default SelectionCard;
