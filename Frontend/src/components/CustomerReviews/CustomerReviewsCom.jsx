import { useState } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
// import ReactStars from "react-rating-stars-component";

export default function CustomerReviewsCom() {
  const location = useLocation();
  const navigate = useNavigate();

  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: "Sarah Johnson",
      initials: "SJ",
      avatarColor: "bg-indigo-200",
      verified: true,
      date: "Oct 12, 2024",
      rating: 5,
      title: "Exquisite Quality",
      text: "I am absolutely in love with this shirt! The silk is heavy and feels incredible against the skin. It has that perfect pearl-like sheen that looks expensive but isn't overly shiny. The fit is true to size and it drapes beautifully. I've already worn it to two meetings and received numerous compliments.",
    },
    {
      id: 2,
      name: "Michael Lawson",
      initials: "ML",
      avatarColor: "bg-orange-200",
      verified: true,
      date: "Oct 08, 2024",
      rating: 4,
      title: "Beautiful but runs slightly large",
      text: "The shirt is stunning and the quality is top-notch. However, I found that the Large runs a bit bigger than other brands I've purchased. If you're between sizes, I'd recommend sizing down for a sharper look. Other than the sizing, it's a 10/10.",
    },
    {
      id: 3,
      name: "Emma Wilson",
      initials: "EW",
      avatarColor: "bg-pink-200",
      verified: true,
      date: "Oct 05, 2024",
      rating: 5,
      title: "Perfect for special occasions",
      text: "This silk shirt exceeded all my expectations. The fabric quality is luxurious and the stitching is impeccable. I wore it to a wedding and received so many compliments. Definitely worth every penny!",
    },
  ]);

  const product = location.state?.product;

  const handleWriteReviewBtn = (product) => {
    navigate(`/user/${product._id}/add-review`, { state: { product } });
  };

  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({ title: "", text: "" });

  const overallRating = 4.8;
  const totalReviews = 1284;

  const handleDelete = (id) => {
    setReviews(reviews.filter((r) => r.id !== id));
  };

  const handleUpdateClick = (review) => {
    setEditingId(review.id);
    setEditForm({ title: review.title, text: review.text });
  };

  const handleUpdateSave = (id) => {
    setReviews(
      reviews.map((r) =>
        r.id === id ? { ...r, title: editForm.title, text: editForm.text } : r,
      ),
    );
    setEditingId(null);
    setEditForm({ title: "", text: "" });
  };

  const handleUpdateCancel = () => {
    setEditingId(null);
    setEditForm({ title: "", text: "" });
  };

  const StarIcon = ({ filled }) => (
    <svg
      className={`w-4 h-4 sm:w-5 sm:h-5 ${
        filled ? "text-amber-400" : "text-gray-300"
      }`}
      viewBox="0 0 24 24"
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );

  const renderStars = (rating) => {
    return (
      <div className="flex gap-0.5">
        {[1, 2, 3, 4, 5].map((star) => (
          <StarIcon key={star} filled={star <= rating} />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs sm:text-sm text-gray-500 mb-6 flex-wrap">
          <a href="#" className="hover:text-indigo-600 transition-colors">
            Home
          </a>
          <span>›</span>
          <a href="#" className="hover:text-indigo-600 transition-colors">
            Shop
          </a>
          <span>›</span>
          <a href="#" className="hover:text-indigo-600 transition-colors">
            Product Details
          </a>
          <span>›</span>
          <span className="font-semibold text-gray-900">Customer Reviews</span>
        </nav>

        {/* Product Header Card */}
        <div className="bg-white rounded-2xl shadow-sm p-4 sm:p-6 mb-6 sm:mb-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg bg-gray-100 overflow-hidden shrink-0 flex items-center justify-center">
            <img src={product.mainImage.url} alt="" />
          </div>
          <div className="flex-1">
            <h1 className="text-lg sm:text-xl font-bold text-gray-900">
              Minimalist Silk Shirt
            </h1>
            <div className="flex items-center gap-2 mt-1 flex-wrap">
              <span className="text-indigo-600 font-bold text-base sm:text-lg">
                $145.00
              </span>
              <div className="flex items-center gap-1">
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                <span className="font-semibold text-gray-900 text-sm sm:text-base">
                  4.8
                </span>
                <span className="text-gray-500 text-xs sm:text-sm">
                  (1,284 reviews)
                </span>
              </div>
            </div>
          </div>
          <Link
            to={`/product/${product._id}`}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm sm:text-base px-5 sm:px-6 py-2.5 sm:py-3 rounded-full transition-colors whitespace-nowrap"
          >
            Back to Product
          </Link>
        </div>

        {/* Rating Summary + Latest Review (Two Column) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6 sm:mb-8">
          {/* Left: Overall Rating */}
          <div className="bg-white rounded-2xl shadow-sm p-6 sm:p-8 flex flex-col items-center justify-center text-center">
            <div className="text-5xl sm:text-6xl font-bold text-gray-900 mb-2">
              {overallRating}
            </div>
            <div className="flex gap-1 mb-2 text-amber-400">
              {[1, 2, 3, 4, 5].map((star) => {
                const fill = Math.max(0, Math.min(1, 4.5 - (star - 1))) * 100;
                return (
                  <svg key={star} className="w-7 h-7" viewBox="0 0 24 24">
                    <defs>
                      <linearGradient id={`star-${star}`}>
                        <stop offset={`${fill}%`} stopColor="currentColor" />
                        <stop offset={`${fill}%`} stopColor="#d1d5db" />
                      </linearGradient>
                    </defs>
                    <polygon
                      points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                      fill={`url(#star-${star})`}
                    />
                  </svg>
                );
              })}
            </div>
            <p className="text-gray-500 text-xs sm:text-sm mb-5">
              Based on {totalReviews.toLocaleString()} Verified Reviews
            </p>
            <button
              type="button"
              onClick={() => handleWriteReviewBtn(product)}
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm sm:text-base py-3 rounded-xl transition-colors hover:cursor-pointer"
            >
              Write a Review
            </button>
          </div>

          {/* Right: Customer Latest Review (replaces Rating Distribution) */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm p-5 sm:p-6 md:p-8">
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900">
                Your Review
              </h2>
            </div>

            {reviews.length > 0 ? (
              <div className="flex flex-col sm:flex-row gap-4">
                {/* Avatar & Info */}
                <div className="flex sm:flex-col items-center sm:items-start gap-3 sm:gap-2 sm:w-32 shrink-0">
                  <div
                    className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full ${reviews[0].avatarColor} flex items-center justify-center font-bold text-gray-700 text-sm sm:text-base`}
                  >
                    {reviews[0].initials}
                  </div>
                  <div className="sm:text-center">
                    <p className="font-semibold text-gray-900 text-sm sm:text-base">
                      {reviews[0].name}
                    </p>
                    {reviews[0].verified && (
                      <span className="inline-flex items-center gap-1 bg-emerald-100 text-emerald-700 text-[10px] sm:text-xs font-semibold px-2 py-0.5 rounded-full mt-1">
                        <svg
                          className="w-3 h-3"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                        VERIFIED
                      </span>
                    )}
                    <p className="text-gray-500 text-xs sm:text-sm mt-1">
                      {reviews[0].date}
                    </p>
                  </div>
                </div>

                {/* Review Content */}
                <div className="flex-1 min-w-0">
                  {editingId === reviews[0].id ? (
                    <div className="space-y-3">
                      <input
                        type="text"
                        value={editForm.title}
                        onChange={(e) =>
                          setEditForm({ ...editForm, title: e.target.value })
                        }
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        placeholder="Review title"
                      />
                      <textarea
                        value={editForm.text}
                        onChange={(e) =>
                          setEditForm({ ...editForm, text: e.target.value })
                        }
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm h-24 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        placeholder="Your review"
                      />
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleUpdateSave(reviews[0].id)}
                          className="bg-indigo-600 hover:bg-indigo-700 text-white text-xs sm:text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
                        >
                          Save
                        </button>
                        <button
                          onClick={handleUpdateCancel}
                          className="bg-gray-200 hover:bg-gray-300 text-gray-700 text-xs sm:text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  ) : (
                    <>
                      <div className="flex items-center gap-2 mb-2 flex-wrap">
                        {renderStars(reviews[0].rating)}
                      </div>
                      <h3 className="font-semibold text-gray-900 text-sm sm:text-base mb-2">
                        {reviews[0].title}
                      </h3>
                      <p className="text-gray-600 text-xs sm:text-sm leading-relaxed line-clamp-4">
                        {reviews[0].text}
                      </p>
                      <div className="flex gap-2 mt-4">
                        <button
                          onClick={() => handleUpdateClick(reviews[0])}
                          className="flex items-center gap-1.5 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 text-xs sm:text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
                        >
                          <svg
                            className="w-3.5 h-3.5 sm:w-4 sm:h-4"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                          </svg>
                          Update
                        </button>
                        <button
                          onClick={() => handleDelete(reviews[0].id)}
                          className="flex items-center gap-1.5 bg-red-50 hover:bg-red-100 text-red-700 text-xs sm:text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
                        >
                          <svg
                            className="w-3.5 h-3.5 sm:w-4 sm:h-4"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polyline points="3 6 5 6 21 6" />
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                          </svg>
                          Delete
                        </button>
                      </div>
                    </>
                  )}
                </div>
              </div>
            ) : (
              <p className="text-gray-500 text-sm text-center py-8">
                No reviews yet.
              </p>
            )}
          </div>
        </div>

        {/* All Reviews List */}
        <div className="space-y-4 sm:space-y-6">
          {reviews.slice(1).map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-2xl shadow-sm p-5 sm:p-6"
            >
              <div className="flex flex-col sm:flex-row gap-4">
                {/* Avatar & Info */}
                <div className="flex sm:flex-col items-start  md:items-center gap-3 sm:gap-2 sm:w-32 shrink-0">
                  <div
                    className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full ${review.avatarColor} flex items-center justify-center font-bold text-gray-700 text-sm sm:text-base`}
                  >
                    {review.initials}
                  </div>
                  <div className="sm:text-center">
                    <p className="font-semibold text-gray-900 text-sm sm:text-base">
                      {review.name}
                    </p>
                    {review.verified && (
                      <span className="inline-flex items-center gap-1 bg-emerald-100 text-emerald-700 text-[10px] sm:text-xs font-semibold px-2 py-0.5 rounded-full mt-1">
                        <svg
                          className="w-3 h-3"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                        VERIFIED
                      </span>
                    )}
                    <p className="text-gray-500 text-xs sm:text-sm mt-1">
                      {review.date}
                    </p>
                  </div>
                </div>

                {/* Review Content */}
                <div className="flex-1 min-w-0">
                  {editingId === review.id ? (
                    <div className="space-y-3">
                      <input
                        type="text"
                        value={editForm.title}
                        onChange={(e) =>
                          setEditForm({ ...editForm, title: e.target.value })
                        }
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                      <textarea
                        value={editForm.text}
                        onChange={(e) =>
                          setEditForm({ ...editForm, text: e.target.value })
                        }
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm h-24 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>
                  ) : (
                    <>
                      <div className="flex items-center gap-2 mb-2 flex-wrap">
                        {renderStars(review.rating)}
                      </div>
                      <h3 className="font-semibold text-gray-900 text-sm sm:text-base mb-2">
                        {review.title}
                      </h3>
                      <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                        {review.text}
                      </p>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
