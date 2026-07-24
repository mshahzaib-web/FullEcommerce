import { useState } from "react";
import { useLocation } from "react-router-dom";

export default function AddReviewForm() {
  const [rating, setRating] = useState(4.5);
  const [hoverRating, setHoverRating] = useState(4.5);
  const [reviewText, setReviewText] = useState("");

  const location = useLocation();

  const product = location.state?.product;

  const handleStarClick = (star) => {
    setRating(star);
  };

  const handleStarHover = (star) => {
    setHoverRating(star);
  };

  const handleStarLeave = () => {
    setHoverRating(0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Review submitted!\nRating: ${rating}/5\nReview: ${reviewText}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-sm p-6 sm:p-8 md:p-10">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            Write a Review
          </h1>
          <p className="text-gray-500 text-sm sm:text-base">
            Share your experience with our community.
          </p>
        </div>

        {/* Product Info */}
        <div className="bg-indigo-50 rounded-xl p-4 sm:p-5 mb-6 sm:mb-8 flex items-center gap-4">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden shrink-0  flex items-center justify-center">
            <img src={product.mainImage.url} alt="" />
          </div>
          <div>
            <p className="text-indigo-600 text-xs sm:text-sm font-semibold tracking-wider uppercase mb-1">
              Luxeaura
            </p>
            <p className="text-gray-900 text-sm sm:text-base font-medium">
              {product.name}
            </p>
          </div>
        </div>

        {/* Overall Rating */}
        <div className="flex flex-col items-start mb-6 sm:mb-8">
          <p className="text-center text-xs sm:text-sm font-semibold text-gray-500 tracking-wider uppercase mb-4">
            Rating
          </p>
          <div className="flex items-center justify-center gap-2 sm:gap-3">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => handleStarClick(star)}
                onMouseEnter={() => handleStarHover(star)}
                onMouseLeave={handleStarLeave}
                className="focus:outline-none transition-transform hover:scale-110 hover:cursor-pointer"
                aria-label={`Rate ${star} star${star > 1 ? "s" : ""}`}
              >
                <svg
                  className={`w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 transition-colors ${
                    star <= (hoverRating || rating)
                      ? "text-yellow-400 fill-yellow-400"
                      : "text-gray-300"
                  }`}
                  viewBox="0 0 24 24"
                  fill={
                    star <= (hoverRating || rating) ? "currentColor" : "none"
                  }
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </button>
            ))}
          </div>
        </div>

        {/* Review Text */}
        <div className="mb-6 sm:mb-8">
          <label className="block text-xs sm:text-sm font-semibold text-gray-500 tracking-wider uppercase mb-3">
            Your Review
          </label>
          <textarea
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            placeholder="What did you love about this item? How was the fit?"
            className="w-full h-36 sm:h-40 md:h-44 border border-gray-300 rounded-lg p-4 text-sm sm:text-base text-gray-700 placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-shadow"
          />
        </div>

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          className="w-full bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white font-semibold text-base sm:text-lg py-3.5 sm:py-4 rounded-full flex items-center justify-center gap-2 transition-colors shadow-md hover:shadow-lg"
        >
          Submit Review
          <svg
            className="w-5 h-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </button>
      </div>
    </div>
  );
}
