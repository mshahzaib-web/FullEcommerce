import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-indigo-700 font-medium lg:border-b-2 lg:border-indigo-700 pb-1"
      : "text-gray-600 hover:text-indigo-700 transition";

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <h1 className="text-2xl font-bold text-indigo-700">LuxeAura</h1>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <NavLink to="/" className={navLinkClass}>
              Home
            </NavLink>

            <NavLink to="/shop" className={navLinkClass}>
              Shop
            </NavLink>

            <NavLink to="/category" className={navLinkClass}>
              Category
            </NavLink>

            <NavLink to="/admin/add-product" className={navLinkClass}>
              Add Product
            </NavLink>

            <NavLink to="/cart" className={navLinkClass}>
              Cart
            </NavLink>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            {/* Search (Desktop Only) */}
            <div className="hidden lg:flex items-center bg-gray-100 rounded-full px-4 py-2">
              <svg
                className="w-4 h-4 text-gray-400 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>

              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent outline-none text-sm w-36"
              />
            </div>

            {/* Wishlist */}
            <button className="text-gray-600 hover:text-indigo-700">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </button>

            {/* Cart */}
            <button className="relative text-gray-600 hover:text-indigo-700">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>

              <span className="absolute -top-1 -right-1 bg-indigo-700 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                0
              </span>
            </button>

            {/* Profile */}
            <button className="text-gray-600 hover:text-indigo-700">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </button>

            {/* Hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-gray-700"
            >
              {isOpen ? (
                <svg
                  className="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile / Tablet Menu */}
        {isOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4">
            {/* Search */}
            <div className="flex items-center bg-gray-100 rounded-lg px-3 py-2 mb-4">
              <svg
                className="w-4 h-4 text-gray-400 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>

              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent outline-none w-full"
              />
            </div>

            <div className="flex flex-col space-y-4">
              <NavLink
                to="/"
                className={navLinkClass}
                onClick={() => setIsOpen(false)}
              >
                Home
              </NavLink>

              <NavLink
                to="/shop"
                className={navLinkClass}
                onClick={() => setIsOpen(false)}
              >
                Shop
              </NavLink>

              <NavLink
                to="/category"
                className={navLinkClass}
                onClick={() => setIsOpen(false)}
              >
                Category
              </NavLink>

              <NavLink
                to="/admin/add-product"
                className={navLinkClass}
                onClick={() => setIsOpen(false)}
              >
                Add Product
              </NavLink>

              <NavLink
                to="/cart"
                className={navLinkClass}
                onClick={() => setIsOpen(false)}
              >
                Cart
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
