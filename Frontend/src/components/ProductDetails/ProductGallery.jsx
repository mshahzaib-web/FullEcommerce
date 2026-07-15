import { useProductDetails } from "../../context/productDetailsContext";

export default function ProductGallery() {
  const data = useProductDetails();

  const thumbnails = [
    "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=150",
    "https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?auto=format&fit=crop&q=80&w=150",
    "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&q=80&w=150",
    "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=150",
    "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=150",
    "https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?auto=format&fit=crop&q=80&w=150",
  ];
  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="relative bg-gray-100 rounded-lg overflow-hidden">
          <div className="absolute top-4 left-4 bg-white px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider text-indigo-700 shadow-sm z-10">
            LIMITED EDITION
          </div>
          <div className="absolute top-4 right-4 text-xs text-gray-400 font-medium z-10">
            New Arrivals
          </div>
          <img
            src={data.product.mainImage.url}
            alt={data.product.name}
            className=" object-cover"
          />
          <div className="absolute bottom-4 right-4 flex gap-2">
            <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-50">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
            </button>
            <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-50">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-6 gap-2">
          {data.product.subImages.map((image, index) => (
            <div
              key={index}
              className={`aspect-square rounded-md overflow-hidden cursor-pointer border-2 border-transparent hover:border-gray-300`}
            >
              <img
                src={image.url}
                alt="image"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
