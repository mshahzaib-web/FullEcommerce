// components/ShopTheLook.jsx

const looks = [
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=300&h=300&fit=crop",
  "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=300&h=300&fit=crop",
  "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=300&h=300&fit=crop",
  "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=300&h=300&fit=crop",
  "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=300&h=300&fit=crop",
  "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=300&h=300&fit=crop",
];

const ShopTheLook = () => {
  return (
    <section className="py-12 lg:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
            Shop the Look
          </h2>
          <a
            href="#"
            className="text-indigo-700 text-sm font-medium hover:underline"
          >
            @LuxeAuraOfficial
          </a>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
          {looks.map((img, idx) => (
            <div
              key={idx}
              className="aspect-square rounded-xl overflow-hidden group cursor-pointer"
            >
              <img
                src={img}
                alt={`Look ${idx + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopTheLook;
