import { useState } from "react";

import LeftPanel from "./LeftPanel";
// import SocialAuthButtons from "./SocialAuthButtons";
import TrustBadges from "./TrustBadges";

export default function LogInForm() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen w-full bg-slate-50/50 flex items-center justify-center font-sans antialiased lg:p-8">
      {/* Main Structural Wrapper Layout Container */}
      <div className="w-full max-w-md lg:max-w-6xl bg-white lg:rounded-3xl lg:shadow-xl lg:border lg:border-gray-100 min-h-[85vh] grid grid-cols-1 lg:grid-cols-12 overflow-hidden">
        {/* Left Side Static Promotion View */}
        <LeftPanel />

        {/* Right Side Input Submission View */}
        <div className="col-span-1 lg:col-span-7 flex flex-col justify-center items-center p-8 sm:p-14 md:p-20 bg-white">
          <div className="w-full max-w-md space-y-7">
            {/* Main Header Labels */}
            <div className="space-y-2">
              <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
                Sign In
              </h2>
              <p className="text-sm text-gray-500 font-normal">
                Welcome back! Please enter your details.
              </p>
            </div>

            {/* Quick Authentication Third Party Providers */}
            {/* <SocialAuthButtons /> */}

            {/* Visual Section Boundary Break */}
            <div className="relative flex py-1 items-center">
              <div className="flex-grow border-t border-gray-200"></div>
              {/* <span className="flex-shrink mx-4 text-[11px] font-bold tracking-widest text-gray-400 uppercase">
                OR
              </span> */}
              <div className="flex-grow border-t border-gray-200"></div>
            </div>

            {/* Standard Sign-In Input Collection */}
            <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
              <div className="space-y-2">
                <label className="text-xs sm:text-sm font-semibold text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="name@example.com"
                  className="w-full px-4 py-3 rounded-xl border-0 bg-[#f3f4fd] text-gray-900 placeholder-gray-400 text-sm focus:bg-indigo-50/50 focus:ring-2 focus:ring-[#4c3ce6] transition duration-150 outline-none"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs sm:text-sm font-semibold text-gray-700">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword == false ? "password" : "text"}
                    placeholder="Enter your password"
                    className="w-full px-4 py-3 rounded-xl border-0 bg-[#f3f4fd] text-gray-900 placeholder-gray-400 text-sm focus:bg-indigo-50/50 focus:ring-2 focus:ring-[#4c3ce6] transition duration-150 outline-none pr-10"
                  />
                  <button
                    onClick={() => setShowPassword((prev) => !prev)}
                    type="button"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 hover:cursor-pointer"
                  >
                    <svg
                      className={`w-4 h-4 ${showPassword == false ? "" : "text-indigo-700"}`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Auxiliary Settings (Remember Me & Forgot Link) */}
              <div className="flex items-center justify-between pt-1">
                <div className="flex items-center gap-2">
                  <input
                    id="remember"
                    type="checkbox"
                    className="rounded border-gray-300 text-[#4c3ce6] focus:ring-[#4c3ce6] w-4 h-4 cursor-pointer"
                  />
                  <label
                    htmlFor="remember"
                    className="text-xs font-semibold text-gray-600 select-none cursor-pointer"
                  >
                    Remember Me
                  </label>
                </div>
                <a
                  href="#"
                  className="text-xs font-bold text-[#4c3ce6] hover:underline"
                >
                  Forgot Password?
                </a>
              </div>

              {/* Primary Call To Action Button */}
              <button
                type="submit"
                className="w-full py-3.5 px-4 bg-[#4c3ce6] hover:bg-[#3b2cd4] text-white rounded-xl text-base font-bold shadow-lg shadow-indigo-600/20 active:scale-[0.99] transition duration-150 text-center"
              >
                Sign In
              </button>
            </form>

            {/* Alternate Redirection Prompt */}
            <div className="text-center text-sm text-gray-500">
              Don't have an account?{" "}
              <a
                href="#"
                className="text-[#4c3ce6] font-extrabold hover:underline"
              >
                Create Account
              </a>
            </div>

            {/* Bottom Content Security Line breaks */}
            <div className="border-t border-gray-100 pt-1">
              <TrustBadges />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
