// components/Newsletter.jsx
import { useState } from "react";
import { toast } from "sonner";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleNewsLatterBtn = () => {
    if (!email) {
      toast.error("Email is required");
      return;
    }

    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email");
      return;
    }

    if (email && emailRegex.test(email)) {
      toast.success("You Join successfully");
    }
  };
  return (
    <section className="py-12 lg:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-indigo-700 rounded-2xl p-8 lg:p-12 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-3">
            Join the Inner Circle
          </h2>
          <p className="text-indigo-200 text-sm mb-8 max-w-md mx-auto">
            Subscribe to receive exclusive access to new collection launches,
            member-only sales, and curated style inspiration.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-1 px-5 py-3 rounded-full text-sm outline-none bg-indigo-600 text-white placeholder-indigo-300 border border-indigo-500"
            />
            <button
              onClick={handleNewsLatterBtn}
              className="bg-white text-indigo-700 px-6 py-3 rounded-full text-sm font-medium hover:bg-indigo-50 transition whitespace-nowrap"
            >
              Subscribe Now
            </button>
          </div>
          <p className="text-indigo-300 text-xs mt-4">
            By subscribing, you agree to our Privacy Policy and Terms of
            Service.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
