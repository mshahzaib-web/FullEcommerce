const CustomerInfoCard = () => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm mb-6">
      <h2 className="text-xl font-bold text-gray-900 mb-4">
        Customer Information
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-2.5">
          <label className="text-zinc-400 text-sm">First Name</label>
          <input
            type="text"
            placeholder="John"
            className="w-full px-3.5 py-2.5 rounded-sm bg-zinc-50 border border-zinc-300 text-zinc-600 placeholder:text-zinc-400 text-sm focus:outline-none focus:border-zinc-400 transition-colors"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-gray-800 mb-1">
            Email Address
          </label>
          <input
            type="email"
            defaultValue="john@example.com"
            className="w-full text-gray-500 focus:outline-none border-b border-transparent focus:border-gray-300 pb-1"
            readOnly
          />
        </div>
        <div className="md:col-span-2">
          <label className="block text-xs font-bold text-gray-800 mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            defaultValue="+1 (555) 000-0000"
            className="w-full text-gray-500 focus:outline-none border-b border-transparent focus:border-gray-300 pb-1"
            readOnly
          />
        </div>
      </div>
    </div>
  );
};

export default CustomerInfoCard;
