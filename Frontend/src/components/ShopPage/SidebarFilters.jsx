import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { getProducts } from "../../api/Product/product";

import LoadingCom from "../Loading/LoadingCom";
import { toast } from "sonner";
import { useEffect } from "react";

/**
 * SidebarFilters Component
 * Handles layout formatting for criteria inputs like Brands, Pricing Limits, and Item Colors.
 */
export default function Sidebar({ search, setSearch, setFilter }) {
  const [priceRange, setPriceRange] = useState({
    minPrice: 0,
    maxPrice: 1000,
  });

  const [searchParams] = useSearchParams();
  const { register, handleSubmit } = useForm();

  const category = searchParams.get("category");

  useEffect(() => {
    const categoryFilters = {
      selectCategory: category,
    };

    setFilter(categoryFilters);
  }, [category]);

  const onSubmit = (data) => {
    if (data.selectCategory == "Select Category") {
      data.selectCategory = "";
    }

    if (data.selectBrand == "Select Brand") {
      data.selectBrand = "";
    }

    if (data.selectColor == "Select Color") {
      data.selectColor = "";
    }

    if (data.selectSize == "Select Size") {
      data.selectSize = "";
    }

    const payload = {
      ...data,
      minPrice: priceRange.minPrice,
      maxPrice: priceRange.maxPrice,
    };
    setFilter(payload);
  };

  const onError = (errors) => {
    const error = Object.values(errors)[0];
    toast.error(error.message);
  };

  const { data, isPending } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
    retry: false,
  });

  // const uniqueColors = [
  //   ...new Set(
  //     data?.products.flatMap((product) =>
  //       (product.color || []).map(
  //         (color) =>
  //           color.charAt(0).toUpperCase() + color.slice(1).toLowerCase(),
  //       ),
  //     ),
  //   ),
  // ];

  // console.log(uniqueColors);

  console.log(data);

  const handleMinChange = (e) => {
    const value = Number(e.target.value);

    if (value < priceRange.maxPrice) {
      setPriceRange((prev) => ({
        ...prev,
        minPrice: value,
      }));
    }
  };

  const handleMaxChange = (e) => {
    const value = Number(e.target.value);

    if (value > priceRange.minPrice) {
      setPriceRange((prev) => ({
        ...prev,
        maxPrice: value,
      }));
    }
  };

  const left = (priceRange.minPrice / 1000) * 100;
  const right = 100 - (priceRange.maxPrice / 1000) * 100;

  if (isPending) return <LoadingCom />;

  return (
    <div className="space-y-7 ms-5">
      {/* Search Input Box Block */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
          Search Product
        </label>
        <div className="relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </span>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Product name..."
            className="w-full bg-white text-xs pl-9 pr-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-gray-400 text-gray-700 placeholder-gray-400"
          />
        </div>
      </div>

      {/* Category Checkboxes Block */}
      <form
        onSubmit={handleSubmit(onSubmit, onError)}
        className="space-y-7 ms-5"
      >
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
            Categories
          </label>
          <select
            {...register("selectCategory")}
            className=" border-gray-300 border-2 py-1 w-full focus:outline-none focus:border-indigo-600 focus:border-2 rounded-md"
          >
            <option>Select Category</option>
            {[
              ...new Set(data?.products.map((product) => product.category)),
            ].map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* Dual Value Pricing Range Bar */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
            Price Range
          </label>

          <div className="relative pt-1">
            {/* Track */}
            <div className="h-1 bg-gray-200 rounded-full">
              <div
                className="absolute h-1 bg-[#4F46E5] rounded-full"
                style={{
                  left: `${left}%`,
                  right: `${right}%`,
                }}
              ></div>
            </div>

            {/* Minimum slider */}
            <input
              type="range"
              min="0"
              max="1000"
              value={priceRange.minPrice}
              onChange={handleMinChange}
              className="mt-2 absolute top-[-6px] left-0 w-full"
            />

            {/* Maximum slider */}
            <input
              type="range"
              min="0"
              max="1000"
              value={priceRange.maxPrice}
              onChange={handleMaxChange}
              className="absolute top-[-6px] left-0 w-full"
            />
          </div>

          {/* Show Values */}
          <div className="flex items-center justify-between gap-2 mt-4">
            <div className="bg-white border border-gray-200 rounded-lg py-1.5 px-3 text-center flex-1 text-xs text-gray-600 font-medium">
              ${priceRange.minPrice}
            </div>

            <div className="bg-white border border-gray-200 rounded-lg py-1.5 px-3 text-center flex-1 text-xs text-gray-600 font-medium">
              ${priceRange.maxPrice}
            </div>
          </div>
        </div>
        {/* Brand Radio Selection Block */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
            Brands
          </label>
          <select
            {...register("selectBrand")}
            className=" border-gray-300 border-2 py-1 w-full focus:outline-none focus:border-indigo-600 focus:border-2 rounded-md"
          >
            <option>Select Brand</option>
            {[...new Set(data?.products.map((product) => product.brand))].map(
              (brand, index) => (
                <option key={index} value={brand}>
                  {brand}
                </option>
              ),
            )}
          </select>
        </div>

        {/* Palette Solid Color Selection Bullets */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
            Colors
          </label>
          <div className="flex flex-wrap gap-2.5">
            <select
              {...register("selectColor")}
              className=" border-gray-300 border-2 py-1 w-full focus:outline-none focus:border-indigo-600 focus:border-2 rounded-md"
            >
              <option>Select Color</option>
              {[
                ...new Set(
                  data?.products.flatMap((product, indx) =>
                    (product.color || []).map((color, index) => (
                      <option key={index + color + indx + product._id}>
                        {color.charAt(0).toUpperCase() +
                          color.slice(1).toLowerCase()}
                      </option>
                    )),
                  ),
                ),
              ]}
            </select>
          </div>
        </div>

        {/* Multi-size Matrix Boxes */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
            Size
          </label>
          <div className="grid gap-1.5">
            <select
              {...register("selectSize")}
              className=" border-gray-300 border-2 py-1 w-full focus:outline-none focus:border-indigo-600 focus:border-2 rounded-md"
            >
              <option>Select Size</option>
              {[
                ...new Set(
                  data?.products.flatMap((product, indx) =>
                    (product.size || []).map((size, index) => (
                      <option key={index + indx + size + product._id}>
                        {size.toUpperCase()}
                      </option>
                    )),
                  ),
                ),
              ]}
            </select>
          </div>
        </div>

        {/* Global Filter Trigger Submitter */}
        <button
          type="submit"
          className="w-full bg-[#4338CA] text-white font-bold text-xs py-3.5 rounded-xl hover:bg-opacity-95 transition-all shadow-md mt-2"
        >
          Apply Filters
        </button>
      </form>
    </div>
  );
}
