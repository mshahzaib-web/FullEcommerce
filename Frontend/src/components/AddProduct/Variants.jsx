import { useFormContext } from "react-hook-form";
import { useRef, useState } from "react";

const Variants = () => {
  const { register } = useFormContext();
  const [sizeValue, setSizeValue] = useState([]);
  const sizeInputRef = useRef();

  const handleSizeInputData = (e) => {
    e.preventDefault();
    const value = sizeInputRef.current.value.trim();

    if (!value) return;

    setSizeValue((prev) => [...prev, value]);

    sizeInputRef.current.value = "";
  };

  const handleDeleteSize = (size) => {
    const newSizeValue = sizeValue.filter((sizeVal) => sizeVal != size);
    setSizeValue(newSizeValue);
  };

  return (
    <>
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <svg
              className="w-5 h-5 text-indigo-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
              />
            </svg>
            <h2 className="text-lg font-semibold text-gray-900">Variants</h2>
          </div>
        </div>

        <div className="space-y-5">
          {/* Size */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Size
            </label>
            <div className="flex flex-wrap items-center gap-2 p-2 bg-gray-50 border border-gray-200 rounded-lg min-h-11">
              {sizeValue.map((size, index) => (
                <div key={index}>
                  <span className="inline-flex items-center gap-1 px-3 py-1.5 bg-white border border-gray-200 rounded-md text-sm font-medium text-gray-700">
                    <input
                      {...register(`size.${index}`)}
                      type="text"
                      className="text-center w-10 font-bold rounded-md"
                      value={size}
                    />
                    <button
                      onClick={() => handleDeleteSize(size)}
                      type="button"
                      className=" text-red-600 hover:cursor-pointer"
                    >
                      <svg
                        className="w-3 h-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </span>
                </div>
              ))}

              <span className="inline-flex items-center gap-1 px-3 py-1.5 bg-white border border-gray-200 rounded-md text-sm font-medium text-gray-700">
                <input
                  ref={sizeInputRef}
                  type="text"
                  className="text-center w-10 border-indigo-600 border-2 font-bold rounded-md focus:border-indigo-600"
                  // defaultValue="XL"
                />
                <button
                  type="button"
                  className="text-gray-400 hover:text-red-600 hover:cursor-pointer"
                >
                  <svg
                    className="w-3 h-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </span>

              <button
                onClick={handleSizeInputData}
                type="button"
                className="px-2 py-1 text-sm text-white hover:font-bold hover:cursor-pointer bg-indigo-600 rounded-3xl"
              >
                Add
              </button>
            </div>
          </div>

          {/* Color */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Color
            </label>
            <div className="flex flex-wrap items-center gap-2 p-2 bg-gray-50 border border-gray-200 rounded-lg min-h-11">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 rounded-md text-sm font-medium text-gray-700">
                <input
                  {...register("color")}
                  className="w-10"
                  type="text"
                  defaultValue="xg"
                />
                <button
                  type="button"
                  className="text-gray-400 hover:text-red-600"
                >
                  <svg
                    className="w-3 h-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </span>
              <button
                type="button"
                className="px-2 py-1 text-sm text-white hover:font-bold hover:cursor-pointer bg-indigo-600 rounded-3xl"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Variants;
