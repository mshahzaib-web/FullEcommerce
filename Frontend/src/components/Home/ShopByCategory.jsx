import { useNavigate } from "react-router-dom";

import ElectronicImg from "../../assets/images/Electronics.avif";
import FootwearImg from "../../assets/images/Footware.webp";
import FashionImg from "../../assets/images/fasions.webp";
import HomeLivingImg from "../../assets/images/Home & Living.webp";
import BeautyCareImg from "../../assets/images/Beauty and care.jpg";
import SportFitnessImg from "../../assets/images/Sports & Fitness.webp";
import StansionaryImg from "../../assets/images/Book and Stansionary.png";
import AutomativeToolImg from "../../assets/images/Automotive and tools.jpg";

export default function ShopByCategory() {
  const navigate = useNavigate();

  const handleCategory = (category) => {
    navigate(`/shop?category=${category}`);
  };

  const images = [
    ElectronicImg,
    FootwearImg,
    FashionImg,
    HomeLivingImg,
    BeautyCareImg,
    SportFitnessImg,
    StansionaryImg,
    AutomativeToolImg,
  ];

  return (
    <>
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
                Shop by Category
              </h2>
              <p className="text-gray-500 text-sm mt-1">
                Explore our curated departments
              </p>
            </div>
            <a
              href="#"
              className="text-indigo-700 text-sm font-medium flex items-center gap-1 hover:underline"
            >
              View All
              <svg
                className="w-4 h-4"
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
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "Electronics",
              "Footwear",
              "Fashion",
              "Home & Living",
              "Beauty & Personal Care",
              "Sports & Fitness",
              "Books & Stationery",
              "Automotive & Tools",
            ].map((category, index) => (
              <div
                key={category}
                onClick={() => handleCategory(category)}
                className="text-center group cursor-pointer"
              >
                <div className="bg-gray-100 rounded-xl overflow-hidden mb-3 aspect-square">
                  <img
                    src={images[index]}
                    alt=""
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-semibold md:font-bold  text-sm md:text-md text-gray-800">
                  {category}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
