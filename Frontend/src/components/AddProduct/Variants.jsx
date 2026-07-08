const Variants = () => {
  return (
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
        <button className="text-indigo-600 hover:text-indigo-700 font-medium text-sm flex items-center gap-1">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
          Add Option
        </button>
      </div>

      <div className="space-y-5">
        {/* Size */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Size
          </label>
          <div className="flex flex-wrap items-center gap-2 p-2 bg-gray-50 border border-gray-200 rounded-lg min-h-11">
            <span className="inline-flex items-center gap-1 px-3 py-1.5 bg-white border border-gray-200 rounded-md text-sm font-medium text-gray-700">
              XS
              <button className="text-gray-400 hover:text-red-600">
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
            <span className="inline-flex items-center gap-1 px-3 py-1.5 bg-white border border-gray-200 rounded-md text-sm font-medium text-gray-700">
              S
              <button className="text-gray-400 hover:text-red-600">
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
            <span className="inline-flex items-center gap-1 px-3 py-1.5 bg-white border border-gray-200 rounded-md text-sm font-medium text-gray-700">
              M
              <button className="text-gray-400 hover:text-red-600">
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
            <button className="px-3 py-1.5 text-sm text-gray-500 hover:text-gray-700">
              Add...
            </button>
          </div>
          <div className="flex justify-end mt-2">
            <button className="p-1.5 text-red-600 hover:bg-red-50 rounded transition-colors">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
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
              <span className="w-3 h-3 rounded-full bg-gray-900"></span>
              Midnight
              <button className="text-gray-400 hover:text-red-600">
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
            <button className="px-3 py-1.5 text-sm text-gray-500 hover:text-gray-700">
              Add...
            </button>
          </div>
          <div className="flex justify-end mt-2">
            <button className="p-1.5 text-red-600 hover:bg-red-50 rounded transition-colors">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Variants;
