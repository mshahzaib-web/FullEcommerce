export default function Navbar() {
  return (
    <>
      <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className=" mx-auto px-2 sm:px-4 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="shrink-0">
              <h1 className="text-2xl font-bold text-indigo-700">LuxeAura</h1>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#"
                className="text-indigo-700 font-medium border-b-2 border-indigo-700 pb-1"
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-indigo-700 transition"
              >
                Shop
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-indigo-700 transition"
              >
                Men
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-indigo-700 transition"
              >
                Women
              </a>
              <a
                href="#"
                className="hidden lg:block text-gray-600 hover:text-indigo-700 transition"
              >
                Accessories
              </a>
            </div>

            {/* Right Icons */}
            <div className="flex items-center space-x-2">
              <div className="hidden sm:flex items-center bg-gray-100 rounded-full px-4 py-2">
                <svg
                  className="w-4 h-4 text-gray-400 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <input
                  type="text"
                  placeholder="Search luxury..."
                  className="bg-transparent text-sm outline-none w-32"
                />
              </div>
              <button className="text-gray-600 hover:text-indigo-700">
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
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </button>
              <button className="text-gray-600 hover:text-indigo-700 relative">
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
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
                <span className="absolute -top-1 -right-1 bg-indigo-700 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  0
                </span>
              </button>
              <button className="text-gray-600 hover:text-indigo-700">
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
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
