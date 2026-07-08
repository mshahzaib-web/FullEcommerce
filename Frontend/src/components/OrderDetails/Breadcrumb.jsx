function Breadcrumb() {
  return (
    <nav className="flex items-center text-sm text-gray-600 mb-4">
      <a href="#" className="hover:text-indigo-700 transition-colors">
        Home
      </a>
      <svg
        className="w-4 h-4 mx-2 text-gray-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      </svg>
      <a href="#" className="hover:text-indigo-700 transition-colors">
        My Orders
      </a>
      <svg
        className="w-4 h-4 mx-2 text-gray-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      </svg>
      <span className="text-gray-900 font-medium">Order Details</span>
    </nav>
  );
}

export default Breadcrumb;
