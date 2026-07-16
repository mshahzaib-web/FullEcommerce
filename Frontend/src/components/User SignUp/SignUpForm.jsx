// import SocialAuthButtons from "./SocialAuthButtons";
import TrustBadges from "./TrustBadges";
import LeftPanel from "./LeftPanel";
export default function SignUpForm() {
  return (
    <>
      <div className="min-h-screen w-full bg-gray-50 flex items-center justify-center font-sans antialiased lg:p-6">
        <div className="w-full max-w-7xl bg-white lg:rounded-3xl lg:shadow-xl lg:border lg:border-gray-100 min-h-[90vh] grid grid-cols-1 lg:grid-cols-12 overflow-hidden">
          {/* Left Side Section */}
          <LeftPanel />

          {/* Right Side Section (Form Wrapper) */}
          <div className="col-span-1 lg:col-span-7 flex flex-col justify-center items-center p-6 sm:p-12 md:p-16 bg-white">
            <div className="w-full max-w-xl space-y-6">
              {/* Header Content */}
              <div className="space-y-1">
                <div className="text-2xl font-extrabold text-[#3222d4] tracking-tight">
                  LuxeAura
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 pt-3">
                  Create Your Account
                </h2>
                <p className="text-sm text-gray-500 font-normal">
                  Start shopping in less than a minute.
                </p>
              </div>

              {/* Social Authentication */}
              {/* <SocialAuthButtons /> */}

              {/* Structured Section Divider */}
              <div className="relative flex py-2 items-center">
                <div className="flex-grow border-t border-gray-200"></div>
                {/* <span className="flex-shrink mx-4 text-[10px] sm:text-xs font-semibold tracking-wider text-gray-400 uppercase">
                  Or Continue With
                </span> */}
                <div className="flex-grow border-t border-gray-200"></div>
              </div>

              {/* Interactive Registration Form Shell */}
              <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                {/* Row: First & Last Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs sm:text-sm font-medium text-gray-700">
                      First Name
                    </label>
                    <input
                      type="text"
                      placeholder="John"
                      className="w-full px-4 py-2.5 rounded-xl border-0 bg-indigo-50/40 text-gray-900 placeholder-gray-400 text-sm focus:bg-indigo-50/70 focus:ring-2 focus:ring-[#3222d4] transition duration-150 outline-none"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs sm:text-sm font-medium text-gray-700">
                      Last Name
                    </label>
                    <input
                      type="text"
                      placeholder="Doe"
                      className="w-full px-4 py-2.5 rounded-xl border-0 bg-indigo-50/40 text-gray-900 placeholder-gray-400 text-sm focus:bg-indigo-50/70 focus:ring-2 focus:ring-[#3222d4] transition duration-150 outline-none"
                    />
                  </div>
                </div>

                {/* Row: Email Address */}
                <div className="space-y-1.5">
                  <label className="text-xs sm:text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="name@example.com"
                    className="w-full px-4 py-2.5 rounded-xl border-0 bg-indigo-50/40 text-gray-900 placeholder-gray-400 text-sm focus:bg-indigo-50/70 focus:ring-2 focus:ring-[#3222d4] transition duration-150 outline-none"
                  />
                </div>

                {/* Row: Phone Number */}
                {/* <div className="space-y-1.5">
                  <label className="text-xs sm:text-sm font-medium text-gray-700">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    className="w-full px-4 py-2.5 rounded-xl border-0 bg-indigo-50/40 text-gray-900 placeholder-gray-400 text-sm focus:bg-indigo-50/70 focus:ring-2 focus:ring-[#3222d4] transition duration-150 outline-none"
                  />
                </div> */}

                {/* Row: Password & Confirm Password */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs sm:text-sm font-medium text-gray-700">
                      Password
                    </label>
                    <div className="relative">
                      <input
                        type="password"
                        defaultValue="hiddentext"
                        className="w-full px-4 py-2.5 rounded-xl border-0 bg-indigo-50/40 text-gray-900 placeholder-gray-400 text-sm focus:bg-indigo-50/70 focus:ring-2 focus:ring-[#3222d4] transition duration-150 outline-none pr-10"
                      />
                      <button
                        type="button"
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      >
                        <svg
                          className="w-4 h-4"
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

                    {/* Password Strength Indicator Bars */}
                    {/* <div className="grid grid-cols-4 gap-1 pt-1.5">
                      <div className="h-1 bg-[#3222d4] rounded-full"></div>
                      <div className="h-1 bg-gray-200 rounded-full"></div>
                      <div className="h-1 bg-gray-200 rounded-full"></div>
                      <div className="h-1 bg-gray-200 rounded-full"></div>
                    </div> */}
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs sm:text-sm font-medium text-gray-700">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      defaultValue="hiddentext"
                      className="w-full px-4 py-2.5 rounded-xl border-0 bg-indigo-50/40 text-gray-900 placeholder-gray-400 text-sm focus:bg-indigo-50/70 focus:ring-2 focus:ring-[#3222d4] transition duration-150 outline-none"
                    />
                  </div>
                </div>

                {/* Terms and Conditions Accordance */}
                <div className="flex items-start gap-2.5 pt-2">
                  <input
                    id="terms"
                    type="checkbox"
                    className="mt-0.5 rounded border-gray-300 text-[#3222d4] focus:ring-[#3222d4] w-4 h-4"
                  />
                  <label
                    htmlFor="terms"
                    className="text-xs sm:text-sm text-gray-500 leading-tight"
                  >
                    I agree to the{" "}
                    <a
                      href="#"
                      className="text-[#3222d4] font-medium hover:underline"
                    >
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a
                      href="#"
                      className="text-[#3222d4] font-medium hover:underline"
                    >
                      Privacy Policy
                    </a>
                    .
                  </label>
                </div>

                {/* Main Submit Action Button */}
                <button
                  type="submit"
                  className="w-full py-3 px-4 bg-[#3222d4] hover:bg-[#2819b8] text-white rounded-xl text-sm font-semibold shadow-lg shadow-indigo-600/20 active:scale-[0.99] transition duration-150 text-center"
                >
                  Create Account
                </button>
              </form>

              {/* Account Redirection Link */}
              <div className="text-center text-xs sm:text-sm text-gray-500">
                Already have an account?{" "}
                <a
                  href="#"
                  className="text-[#3222d4] font-bold hover:underline"
                >
                  Sign In
                </a>
              </div>

              {/* Footer Trust Markers */}
              <TrustBadges />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
