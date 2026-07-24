import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { useState } from "react";
// import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import {
  getWishlistProduct,
  removeWishlistProduct,
  addToCart,
} from "../../api/User/user";

const WishListCom = () => {
  const queryClient = useQueryClient();

  // Stores object { productId, value } so selections stay unique to a specific product
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState({});

  // const { register, handleSubmit } = useForm();

  const { data, isPending, error } = useQuery({
    queryKey: ["wishlist"],
    queryFn: getWishlistProduct,
  });

  const removeWishlistMutation = useMutation({
    mutationFn: removeWishlistProduct,
    onSuccess: (responseData) => {
      queryClient.invalidateQueries({ queryKey: ["wishlist"] });
      toast.success(responseData.message);
    },
    onError: (err) => {
      toast.error(err.response?.data?.message || "An error occurred");
    },
  });

  const handleRemoveWishlistProduct = (id) => {
    removeWishlistMutation.mutate(id);
  };

  const handleAddToCartMutation = useMutation({
    mutationFn: addToCart,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
      toast.success(data.message);
    },

    onError: (error) => {
      toast.error(error.response.data.message);
    },
  });

  const handleQuantityDecrease = (id) => {
    setQuantity((prev) => {
      const currentQuantity = prev[id] || 1;
      if (currentQuantity <= 1) return prev;
      return {
        ...prev,
        [id]: currentQuantity - 1,
      };
    });
  };

  const handleQuantityIncrease = (id) => {
    setQuantity((prev) => {
      const currentQuantity = prev[id] || 1;
      return {
        ...prev,
        [id]: currentQuantity + 1,
      };
    });
  };

  // Set selected color globally bound to product ID
  const handleSelectedColor = (productId, color) => {
    setSelectedColor({ productId, value: color });
  };

  // Set selected size globally bound to product ID
  const handleSelectedSize = (productId, size) => {
    setSelectedSize({ productId, value: size });
  };

  const onAddToCart = (product, e) => {
    e.preventDefault();

    const selectedQty = quantity[product._id] || 1;

    // Check if the current selection belongs to this specific product
    const activeColor =
      selectedColor?.productId === product._id
        ? selectedColor.value
        : "None selected";
    const activeSize =
      selectedSize?.productId === product._id
        ? selectedSize.value
        : "None selected";

    const cartPayload = {
      productId: product._id,
      productName: product.name,
      productImage: product.mainImage?.url,
      selectedColor: activeColor,
      selectedSize: activeSize,
      quantity: selectedQty,
      price: product.price,
    };

    console.log(cartPayload);

    if (
      product.color.length > 0 &&
      cartPayload.selectedColor == "None selected"
    ) {
      return toast.error("Please Select the color");
    }

    if (
      product.size.length > 0 &&
      cartPayload.selectedSize == "None selected"
    ) {
      return toast.error("Please Select the size");
    }
    console.log("data send");

    handleAddToCartMutation.mutate(cartPayload);
  };

  if (isPending) return <p className="text-center py-10">loading...</p>;

  if (error) {
    toast.error(error.message || "Failed to load wishlist");
  }

  return (
    <>
      <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex mb-6 text-sm text-gray-600">
            <ol className="flex items-center space-x-2">
              <li>
                <a href="#" className="hover:text-gray-900">
                  Home
                </a>
              </li>
              <li>
                <span className="text-gray-400">›</span>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  My Account
                </a>
              </li>
              <li>
                <span className="text-gray-400">›</span>
              </li>
              <li className="font-medium text-gray-900">Wishlist</li>
            </ol>
          </nav>

          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 flex items-center gap-3">
              My Wishlist
              <svg
                className="w-8 h-8 text-pink-500 fill-pink-500"
                viewBox="0 0 24 24"
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </h1>
            <p className="mt-2 text-gray-600">
              Save your favorite products and purchase them anytime.
            </p>
          </div>

          {/* Products List */}
          <div className="space-y-4">
            {data?.userWishlistProduct?.map((item) => (
              <div
                key={item.product._id}
                className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden border border-gray-600"
              >
                <form
                  onSubmit={(e) => onAddToCart(item.product, e)}
                  className="p-4 sm:p-6 lg:p-8"
                >
                  {/* <input
                    {...register(`productId_${item.product._id}`)}
                    value={item.product._id}
                    type="hidden"
                  /> */}

                  <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
                    {/* Product Image */}
                    <div className="relative w-full lg:w-64 shrink-0">
                      <div className="aspect-square rounded-xl overflow-hidden bg-gray-100">
                        <img
                          src={item.product.mainImage?.url}
                          alt={item.product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <button
                        type="button"
                        className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow"
                      >
                        <svg
                          className="w-5 h-5 text-pink-500 fill-pink-500"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                        </svg>
                      </button>
                    </div>

                    {/* Product Details */}
                    <div className="flex-1 space-y-4">
                      <div>
                        <span className="text-xs font-semibold text-indigo-600 uppercase tracking-wide">
                          {item.product.category}
                        </span>
                        <h2 className="text-sm md:text-md font-bold text-gray-900 mt-1">
                          {item.product.name}
                        </h2>
                      </div>

                      {/* Rating Stars */}
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className={`w-4 h-4 ${
                              i < 4
                                ? "text-yellow-400 fill-yellow-400"
                                : "text-gray-300"
                            }`}
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>

                      {/* Color Selection */}
                      {item.product.color?.length > 0 && (
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Color
                          </label>
                          <div className="flex gap-2 flex-wrap">
                            {item.product.color.map((color) => {
                              const isColorSelected =
                                selectedColor?.productId === item.product._id &&
                                selectedColor?.value === color;

                              return (
                                <button
                                  key={`${color}^${item.product._id}`}
                                  type="button"
                                  onClick={() =>
                                    handleSelectedColor(item.product._id, color)
                                  }
                                  className={`px-4 py-2 rounded-full border-2 text-sm font-medium transition-all hover:cursor-pointer ${
                                    isColorSelected
                                      ? "border-indigo-600 bg-indigo-50 text-indigo-600"
                                      : "border-gray-200 text-gray-600 hover:border-gray-300"
                                  }`}
                                >
                                  {color}
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      )}

                      {/* Size Selection */}
                      {item.product.size?.length > 0 && (
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Sizes
                          </label>
                          <div className="flex gap-2 flex-wrap">
                            {item.product.size.map((size) => {
                              const isSizeSelected =
                                selectedSize?.productId === item.product._id &&
                                selectedSize?.value === size;

                              return (
                                <button
                                  key={`${size}^${item.product._id}`}
                                  type="button"
                                  onClick={() =>
                                    handleSelectedSize(item.product._id, size)
                                  }
                                  className={`px-4 py-2 rounded-full border-2 text-sm font-medium transition-all hover:cursor-pointer ${
                                    isSizeSelected
                                      ? "border-indigo-600 bg-indigo-50 text-indigo-600"
                                      : "border-gray-200 text-gray-600 hover:border-gray-300"
                                  }`}
                                >
                                  {size}
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      )}

                      {/* Quantity and Stock */}
                      <div className="flex items-center gap-6">
                        <div className="flex items-center border border-gray-300 rounded-lg">
                          <button
                            type="button"
                            onClick={() =>
                              handleQuantityDecrease(item.product._id)
                            }
                            className="px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-l-lg transition-colors hover:cursor-pointer"
                          >
                            −
                          </button>
                          <input
                            type="number"
                            value={quantity[item.product._id] || 1}
                            readOnly
                            className="w-12 text-center border-x border-gray-300 py-2 text-sm font-medium"
                          />
                          <button
                            type="button"
                            onClick={() =>
                              handleQuantityIncrease(item.product._id)
                            }
                            className="px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-r-lg transition-colors hover:cursor-pointer"
                          >
                            +
                          </button>
                        </div>

                        <div
                          className={`flex items-center gap-1.5 text-sm ${
                            item.product.stock < 100
                              ? "text-red-600"
                              : "text-green-600"
                          }`}
                        >
                          <span
                            className={`w-2 h-2 rounded-full ${
                              item.product.stock < 10
                                ? "bg-red-500"
                                : "bg-green-500"
                            }`}
                          />
                          <p
                            className={
                              item.product.stock < 10
                                ? "text-red-500"
                                : "text-green-500"
                            }
                          >
                            {item.product.stock === 0
                              ? "Out Of Stock"
                              : item.product.stock < 10
                                ? "Low Stock"
                                : "In Stock"}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Price and Actions */}
                    <div className="lg:w-56 shrink-0 space-y-3 border-t lg:border-t-0 lg:border-l border-gray-200 pt-6 lg:pt-0 lg:pl-8">
                      <div>
                        <div className="flex items-center justify-end gap-2">
                          <span className="px-2 py-1 bg-amber-100 text-amber-700 text-xs font-bold rounded-full">
                            20% OFF
                          </span>
                        </div>
                        <div className="flex items-center justify-end gap-2">
                          <span className="text-2xl font-bold text-indigo-600">
                            ${item.product.price?.toFixed(2)}
                          </span>
                        </div>
                      </div>

                      <div className="space-y-2 pt-2">
                        <button
                          type="submit"
                          className="w-full bg-indigo-600 text-white py-3 px-4 rounded-xl font-semibold hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200 hover:cursor-pointer"
                        >
                          Add to Cart
                        </button>
                        <Link to={`/product/${item.product._id}`}>
                          <button
                            type="button"
                            className="w-full bg-indigo-100 text-indigo-600 py-3 px-4 rounded-xl font-semibold transition-colors hover:bg-indigo-600 hover:text-white hover:cursor-pointer"
                          >
                            Buy Now
                          </button>
                        </Link>
                      </div>

                      <button
                        type="button"
                        onClick={() =>
                          handleRemoveWishlistProduct(item.product._id)
                        }
                        className="rounded-2xl w-full text-red-500 text-sm font-medium hover:text-white transition-colors py-2 hover:cursor-pointer hover:bg-red-400"
                      >
                        Remove from list
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            ))}
          </div>

          {data?.userWishlistProduct?.length === 0 && (
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
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
              <h3 className="text-lg font-medium text-gray-900">
                Your wishlist is empty
              </h3>
              <p className="text-gray-500 mt-1">
                Save items you love by clicking the heart icon
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default WishListCom;
