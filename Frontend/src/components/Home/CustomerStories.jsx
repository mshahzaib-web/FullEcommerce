// components/CustomerStories.jsx

const stories = [
  {
    name: "Sarah Jenkins",
    role: "Fashion Blogger",
    text: '"The quality of the silk shirt I ordered exceeded all expectations. LuxeAura is my new destination for all things premium."',
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
  },
  {
    name: "David Chen",
    role: "Creative Director",
    text: '"Incredible service. The white-glove delivery experience was just as high-end as the designer watch I purchased. Truly impressive."',
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
  },
  {
    name: "Elena Rodriguez",
    role: "Interior Designer",
    text: '"Finally, a store that understands minimal luxury. Everything from the website to the packaging is perfectly curated."',
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
  },
];

const CustomerStories = () => {
  return (
    <section className="py-12 lg:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
            Customer Stories
          </h2>
          <p className="text-gray-500 text-sm mt-2">
            Hear from our community of style icons
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {stories.map((story, idx) => (
            <div key={idx} className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 text-sm mb-6 italic">{story.text}</p>
              <div className="flex items-center gap-3">
                <img
                  src={story.img}
                  alt={story.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-sm text-gray-800">
                    {story.name}
                  </p>
                  <p className="text-xs text-gray-400">{story.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerStories;
