// components/BrandLogos.jsx

const brands = [
  "AURA",
  "LUXE",
  "VOGUE",
  "ELITE",
  "MAISON",
  "PRIMO",
  "NOVO",
  "ZENITH",
];

const BrandLogos = () => {
  return (
    <section className="py-8 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 overflow-x-auto">
          {brands.map((brand, idx) => (
            <span
              key={idx}
              className="text-gray-400 font-bold text-lg lg:text-xl whitespace-nowrap hover:text-indigo-700 transition cursor-pointer"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandLogos;
