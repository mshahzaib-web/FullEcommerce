const AdminSignUpLeftPanel = () => {
  return (
    <>
      <div className="hidden lg:flex lg:col-span-5 bg-gradient-to-b from-[#4c3ce6] to-[#2f21b5] text-white flex-col justify-center items-center p-12 relative overflow-hidden">
        {/* Decorative Blur Object */}
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>

        <div className="max-w-md text-center space-y-6 z-10">
          {/* Shopping Bag Pill Badge */}
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md px-4 py-2 rounded-full text-sm font-medium tracking-wide">
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
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
            Shopping Bag
          </div>

          {/* Hero Typography */}
          <h1 className="text-4xl xl:text-5xl font-extrabold tracking-tight leading-tight">
            Join Our Seller <br /> Community
          </h1>

          <p className="text-purple-100 text-base xl:text-lg font-light leading-relaxed max-w-sm mx-auto">
            Discover curated collections and exclusive member-only benefits.
          </p>

          {/* Carousel Indicator Slider Representation */}
          <div className="flex justify-center gap-1.5 pt-4">
            <span className="w-6 h-2 bg-white rounded-full"></span>
            <span className="w-2 h-2 bg-white/40 rounded-full"></span>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminSignUpLeftPanel;
