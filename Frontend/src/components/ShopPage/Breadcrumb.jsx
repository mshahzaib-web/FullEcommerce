const Breadcrumb = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-6">
      <nav className="flex items-center text-sm">
        <a href="#" className="text-gray-500 hover:text-gray-700">
          Home
        </a>
        <svg
          className="w-4 h-4 text-gray-400 mx-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
        <a href="#" className="text-indigo-700 font-semibold">
          Shop
        </a>
      </nav>
    </div>
  );
};

export default Breadcrumb;
