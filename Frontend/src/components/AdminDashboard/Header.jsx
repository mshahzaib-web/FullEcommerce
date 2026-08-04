const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200  p-4">
      <div className="flex items-center justify-between">
        <div className="">
          <div className="py-4 flex items-center gap-3">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <span className="text-xl font-bold text-indigo-900">LuxeAura</span>
          </div>{" "}
        </div>

        {/* Create New Button */}
        {/* <button className="bg-indigo-600 text-white px-6 py-2.5 rounded-full font-medium hover:bg-indigo-700 transition-colors">
          Create New
        </button> */}

        {/* Divider */}
        {/* <div className="hidden md:block w-px h-10 bg-gray-300 mx-6"></div> */}

        {/* User Profile */}
        <div className="hidden md:block">
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="font-semibold text-gray-900">Alex Rivera</p>
              <p className="text-xs text-gray-500 uppercase tracking-wide">
                Store Admin
              </p>
            </div>
            <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
                alt="Alex Rivera"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
