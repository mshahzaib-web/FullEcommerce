import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { useQueryClient, useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { getWishlistProduct, getCartProduct } from "../../api/User/user";

import { userLogout } from "../../api/User/user";
import { useUserAuth } from "../../hooks/useAuth";

export default function Navbar() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  // const [userStatus, setUserStatus] = useState(1);
  const [showLogout, setShowLogout] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const { data: user } = useUserAuth();

  console.log(user);

  const { data: wishlist } = useQuery({
    queryKey: ["wishlist"],
    queryFn: getWishlistProduct,
    retry: false,
  });

  const { data: cart } = useQuery({
    queryKey: ["cart"],
    queryFn: getCartProduct,
    retry: false,
  });

  const logoutMutation = useMutation({
    mutationFn: userLogout,
    onSuccess: (data) => {
      toast.success(data.message);
      // queryClient.setQueryData(["user"], null);
      queryClient.clear();
      navigate("/");
    },

    onError: (error) => {
      toast.error(error.response.data.message);
    },
  });

  const handleLogout = () => {
    // setUserStatus(2); // Logout
    setShowLogout(false);
    logoutMutation.mutate();
  };

  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-indigo-700 font-medium lg:border-b-2 lg:border-indigo-700 pb-1"
      : "text-gray-600 hover:text-indigo-700 transition";

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex">
            <div className="mr-3 w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
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
            <h1 className="text-2xl font-bold text-indigo-700">LuxeAuras</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <NavLink to="/" className={navLinkClass}>
              Home
            </NavLink>

            <NavLink to="/shop" className={navLinkClass}>
              Shop
            </NavLink>

            {/* <NavLink to="/user/wishlist" className={navLinkClass}>
              Wishlist
            </NavLink>

            <NavLink to="/admin/add-product" className={navLinkClass}>
              Add Product
            </NavLink>

            <NavLink to="/user/cart" className={navLinkClass}>
              Cart
            </NavLink>
            <NavLink to="/user/orders" className={navLinkClass}>
              Your Orders
            </NavLink> */}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            {/* Search (Desktop Only) */}
            {/* <div className="hidden lg:flex items-center bg-gray-100 rounded-full px-4 py-2">
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
            </div> */}

            {/* Wishlist */}
            {user ? (
              <>
                {/* Wishlist */}
                <Link
                  to="/user/wishlist"
                  className="relative text-gray-600 hover:text-indigo-700"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {" "}
                    <path
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />{" "}
                  </svg>

                  <span className="absolute -top-2 -right-2 bg-indigo-700 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                    {wishlist?.userWishlistProduct?.length > 0
                      ? wishlist?.userWishlistProduct?.length
                      : 0}
                  </span>
                </Link>

                {/* Cart */}
                <Link
                  to="/user/cart"
                  className="relative text-gray-600 hover:text-indigo-700"
                >
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

                  <span className="absolute -top-2 -right-2 bg-indigo-700 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                    {cart?.userCartProduct?.length > 0
                      ? cart?.userCartProduct?.length
                      : 0}
                  </span>
                </Link>

                {/* Profile */}
                <div className="relative">
                  {/* Profile Trigger Button */}
                  <button
                    onClick={() => setShowLogout(!showLogout)}
                    className="p-2 text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 cursor-pointer"
                    aria-label="User profile menu"
                  >
                    <svg
                      className="w-6 h-6"
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

                  {/* Dropdown Menu */}
                  {showLogout && (
                    <div className="absolute right-0 mt-3 w-56 bg-white shadow-xl rounded-xl border border-gray-100 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                      {/* User Links Section */}
                      <div className="px-2 space-y-1">
                        <Link
                          to="/user/wishlist"
                          className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-50 hover:text-indigo-600 transition-colors"
                        >
                          <svg
                            className="w-4 h-4 text-gray-400"
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
                          Wishlist
                        </Link>

                        <Link
                          to="/user/cart"
                          className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-50 hover:text-indigo-600 transition-colors"
                        >
                          <svg
                            className="w-4 h-4 text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                            />
                          </svg>
                          Cart
                        </Link>

                        <Link
                          to="/user/orders"
                          className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-50 hover:text-indigo-600 transition-colors"
                        >
                          <svg
                            className="w-4 h-4 text-gray-400"
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
                          Orders
                        </Link>
                      </div>

                      {/* Divider */}
                      <div className="h-px bg-gray-100 my-2" />

                      {/* Logout Action */}
                      <div className="px-2">
                        <button
                          onClick={handleLogout}
                          className="flex items-center gap-3 w-full px-3 py-2 text-sm font-semibold text-red-600 rounded-lg hover:bg-red-50 transition-colors outline-none cursor-pointer"
                        >
                          <svg
                            className="w-4 h-4 text-red-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                            />
                          </svg>
                          Logout
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </>
            ) : (
              /* Logged Out */
              <>
                <Link
                  to="/admin/signup"
                  className="hidden md:block px-4 py-2 border rounded-md hover:bg-gray-100"
                >
                  Seller
                </Link>

                <Link
                  to="/user/signup"
                  className="hidden md:block px-4 py-2 bg-indigo-700 text-white rounded-md hover:bg-indigo-800"
                >
                  Buyer
                </Link>
              </>
            )}

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
            {/* <div className="flex items-center bg-gray-100 rounded-lg px-3 py-2 mb-4">
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
            </div> */}

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

              {/* <NavLink
                to="/user/wishlist"
                className={navLinkClass}
                onClick={() => setIsOpen(false)}
              >
                Wishlist
              </NavLink>

              <NavLink
                to="/admin/add-product"
                className={navLinkClass}
                onClick={() => setIsOpen(false)}
              >
                Add Product
              </NavLink>

              <NavLink
                to="/user/cart"
                className={navLinkClass}
                onClick={() => setIsOpen(false)}
              >
                Cart
              </NavLink>
              <NavLink
                to="/user/orders"
                className={navLinkClass}
                onClick={() => setIsOpen(false)}
              >
                Your Orders
              </NavLink> */}
            </div>
            {user ? (
              <></>
            ) : (
              <div className="md:hidden flex justify-between mt-3">
                <Link
                  to="/admin/signup"
                  className="px-2 py-1 border rounded-md hover:bg-gray-100"
                >
                  Seller
                </Link>

                <Link
                  to="/user/signup"
                  className="px-2 py-1 bg-indigo-700 text-white rounded-md hover:bg-indigo-800"
                >
                  Buyer
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
