import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useProductDetails } from "../../context/productDetailsContext";
import { addToCart } from "../../api/User/user";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useUserAuth } from "../../hooks/useAuth";
import LoadingCom from "../Loading/LoadingCom";
import { getProductReviews } from "../../api/Product/product";

export default function ProductInfo() {
  const [selectedColor, setSelectedColor] = useState("None selected");
  const [selectedSize, setSelectedSize] = useState("None selected");
  const [quantity, setQuantity] = useState(1);

  const { data: user, isLoading } = useUserAuth();
  const location = useLocation();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const data = useProductDetails();
  const { product } = data;

  const productAddToCartMutation = useMutation({
    mutationFn: addToCart,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
      toast.success(data.message);
    },

    onError: (error) => {
      toast.error(error.response.data.message);
    },
  });

  const handleProductAddToCart = (product) => {
    const payload = {
      productId: product._id,
      selectedColor: selectedColor,
      selectedSize: selectedSize,
      quantity: quantity,
    };

    console.log(payload);

    if (product.color.length > 0 && payload.selectedColor == "None selected") {
      return toast.error("Please Select the color");
    }

    if (product.size.length > 0 && payload.selectedSize == "None selected") {
      return toast.error("Please Select the size");
    }

    productAddToCartMutation.mutate(payload);
  };

  const handleProductBuyBtn = (product) => {
    if (!user) {
      navigate("/user/login", {
        state: { from: location },
        replace: true,
      });
      return;
    }

    const payload = {
      price: product.price,
      selectedColor: selectedColor,
      selectedSize: selectedSize,
      quantity: quantity,
    };

    console.log(payload);

    if (product.color.length > 0 && payload.selectedColor == "None selected") {
      return toast.error("Please Select the color");
    }

    if (product.size.length > 0 && payload.selectedSize == "None selected") {
      return toast.error("Please Select the size");
    }

    navigate(`/user/product/${product._id}/checkout`, {
      state: { product, payload },
    });
  };

  const { data: reviews } = useQuery({
    queryKey: ["review", product._id],
    queryFn: () => getProductReviews(product._id),
    retry: false,
  });

  if (isLoading) {
    return <LoadingCom />; // Or a nice spinner component
  }
  return (
    <>
      <div className="flex flex-col gap-5">
        <div>
          <p className="text-xs font-bold text-amber-700 tracking-widest uppercase mb-2">
            {product.brand}
          </p>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            {product.name}
          </h1>
          <div className="flex items-center gap-2 mb-4">
            <div className="flex items-center gap-1 text-amber-400">
              {[1, 2, 3, 4, 5].map((star) => {
                const fill =
                  Math.max(
                    0,
                    Math.min(1, reviews?.averageRating - (star - 1)),
                  ) * 100;
                return (
                  <svg key={star} className="w-4 h-4" viewBox="0 0 24 24">
                    <defs>
                      <linearGradient id={`star-${star}`}>
                        <stop offset={`${fill}%`} stopColor="currentColor" />
                        <stop offset={`${fill}%`} stopColor="#d1d5db" />
                      </linearGradient>
                    </defs>
                    <polygon
                      points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                      fill={`url(#star-${star})`}
                    />
                  </svg>
                );
              })}
            </div>
            <span className="text-sm text-gray-500">
              ({reviews?.reviews.length})
            </span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-2xl font-bold text-indigo-600">
            ${product.price}
          </span>
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

        {product.color.length > 0 ? (
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
                  onClick={() => setSelectedColor(color)}
                  className={`flex items-center text-center px-1 h-8 rounded-lg border text-sm font-medium transition-colors border-gray-200 text-gray-700 hover:border-gray-400 hover:cursor-pointer outline-none
            ${
              selectedColor === color
                ? "border-indigo-600 border-2 text-indigo-700"
                : "border-gray-300 text-black"
            }
          `}
                />
              ))}
            </div>
          </div>
        ) : (
          ""
        )}

        {product.size.length > 0 ? (
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
                    onClick={() => setSelectedSize(size)}
                    className={`w-auto px-2 py-2 rounded-lg border text-center text-sm font-medium transition-colors border-gray-200 text-gray-700 hover:border-gray-400 cursor-pointer outline-none
                  ${
                    selectedSize === size
                      ? "border-indigo-600 border-2 text-indigo-700"
                      : "border-gray-300 text-black"
                  } 
                  `}
                  />
                </div>
              ))}
            </div>
          </div>
        ) : (
          ""
        )}

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
          <button
            type="button"
            onClick={() => handleProductBuyBtn(product)}
            className="w-full bg-[#3b36d6] hover:bg-indigo-800 text-white font-medium py-3 rounded-lg transition-colors shadow-sm hover:cursor-pointer"
          >
            Buy Now
          </button>
          <button
            type="button"
            onClick={() => handleProductAddToCart(product)}
            className="w-full bg-white border border-[#3b36d6] text-[#3b36d6] hover:bg-indigo-100 font-medium py-3 rounded-lg transition-colors hover:cursor-pointer"
          >
            Add to Cart
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
