import { useFormContext } from "react-hook-form";

const CustomerInfoCard = () => {
  const { register } = useFormContext();

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm mb-6">
      <h2 className="text-xl font-bold text-gray-900 mb-4">
        Customer Information
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-2.5">
          <label className="text-zinc-700 text-sm font-medium">
            First Name
          </label>
          <input
            {...register("firstName")}
            type="text"
            placeholder="John"
            className="w-full px-3.5 py-2.5 rounded-sm bg-zinc-50 border-2 border-zinc-300 text-zinc-600 placeholder:text-zinc-400 text-sm focus:outline-none focus:border-indigo-600 focus:borer-2 transition-colors"
          />
        </div>
        <div className="flex flex-col gap-2.5">
          <label className="text-zinc-700 text-sm font-medium">Last Name</label>
          <input
            {...register("lastName")}
            type="text"
            placeholder="Dav"
            className="w-full px-3.5 py-2.5 rounded-sm bg-zinc-50 border-2 border-zinc-300 text-zinc-600 placeholder:text-zinc-400 text-sm focus:outline-none focus:border-indigo-600 focus:borer-2  transition-colors"
          />
        </div>
        <div className="flex flex-col gap-2.5">
          <label className="text-zinc-700 text-sm font-medium">Email</label>
          <input
            {...register("email")}
            type="email"
            placeholder="johndav123@gmail.com"
            className="w-full px-3.5 py-2.5 rounded-sm bg-zinc-50 border-2 border-zinc-300 text-zinc-600 placeholder:text-zinc-400 text-sm focus:outline-none focus:border-indigo-600 focus:borer-2 transition-colors"
          />
        </div>
        <div className="flex flex-col gap-2.5">
          <label className="text-zinc-700 text-sm font-medium">Phone No</label>
          <input
            {...register("phoneNo")}
            type="text"
            placeholder="+92 301-1547302"
            className="w-full px-3.5 py-2.5 rounded-sm bg-zinc-50 border-2 border-zinc-300 text-zinc-600 placeholder:text-zinc-400 text-sm focus:outline-none focus:border-indigo-600 focus:borer-2 transition-colors"
          />
        </div>
      </div>
    </div>
  );
};

export default CustomerInfoCard;
