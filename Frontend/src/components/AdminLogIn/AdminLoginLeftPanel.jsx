export default function AdminLoginLeftPanel() {
  return (
    <div className="hidden lg:flex lg:col-span-5 bg-[#4c3ce6] text-white flex-col justify-between p-16 relative overflow-hidden">
      {/* Subtle decorative radial light reflection */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -mr-20 -mt-20"></div>

      {/* Spacer to push content down dynamically */}
      <div></div>

      {/* Hero Header Content */}
      <div className="space-y-6 max-w-sm z-10">
        <h1 className="text-4xl xl:text-5xl font-extrabold tracking-tight leading-tight">
          Welcome Back!
        </h1>
        <p className="text-purple-100 text-sm xl:text-base font-normal leading-relaxed">
          Sign in to access your curated collection, exclusive member benefits,
          and seamless shopping experience.
        </p>
      </div>

      {/* Footer Branding Copyright */}
      <div className="text-xs text-purple-200/60 font-normal z-10">
        © 2024 LuxeAura Premium. All rights reserved.
      </div>
    </div>
  );
}
