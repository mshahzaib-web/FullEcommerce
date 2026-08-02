const Card = () => {
  return (
    <div className="transition duration-700  hover:scale-110 hover:cursor-pointer bg-white rounded-2xl p-6 shadow-sm border border-indigo-700 border-l-8">
      <p className="text-gray-600 text-sm mb-2">Low Stock Items</p>
      <p className="text-3xl font-bold text-gray-900">14</p>
    </div>
  );
};

export default Card;
