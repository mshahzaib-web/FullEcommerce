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
          <h1 className="text-2xl font-bold text-indigo-700">LuxeAura</h1>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <NavLink to="/" className={navLinkClass}>
              Home
            </NavLink>

            <NavLink to="/shop" className={navLinkClass}>
              Shop
            </NavLink>

            <NavLink to="/user/wishlist" className={navLinkClass}>
              Wishlist
            </NavLink>

            <NavLink to="/admin/add-product" className={navLinkClass}>
              Add Product
            </NavLink>

            <NavLink to="/user/cart" className={navLinkClass}>
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
                <div className="relative hover:cursor-pointer">
                  <button
                    onClick={() => setShowLogout(!showLogout)}
                    className="text-gray-600 hover:text-indigo-700 hover:cursor-pointer"
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
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </button>

                  {/* Logout Dropdown */}
                  {showLogout && (
                    <div className="absolute right-0 mt-2 w-28 bg-white shadow-lg rounded-md border-indigo-700 border-2 hover:cursor-pointer hover:border-red-500 hover-border-2">
                      <button
                        onClick={handleLogout}
                        className="text-indigo-700 rounded-md hover:text-red-500 hover:cursor-pointer hover:border-red-500 text-center font-bold w-full px-4 py-2 hover:bg-gray-100 outline-none "
                      >
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              </>
            ) : (
              /* Logged Out */
              <>
                <Link
                  to="/user/login"
                  className="hidden md:block px-4 py-2 border rounded-md hover:bg-gray-100"
                >
                  Sign In
                </Link>

                <Link
                  to="/user/signup"
                  className="hidden md:block px-4 py-2 bg-indigo-700 text-white rounded-md hover:bg-indigo-800"
                >
                  Sign Up
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
            </div>
            {user ? (
              <></>
            ) : (
              <div className="md:hidden flex justify-between mt-3">
                <Link
                  to="/user/login"
                  className="px-2 py-1 border rounded-md hover:bg-gray-100"
                >
                  Sign In
                </Link>

                <Link
                  to="/user/signup"
                  className="px-2 py-1 bg-indigo-700 text-white rounded-md hover:bg-indigo-800"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
