import { useState, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { toast } from "sonner";

const ShippingAddressCard = () => {
  const [countries, setCountries] = useState([]);

  const { register } = useFormContext();

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch(
          "https://countries.dev/countries?fields=name",
        );

        if (!response.ok) {
          toast.error("Failed to fetch Countries");
        }

        const data = await response.json();
        setCountries(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCountries();
  }, []);

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm mb-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-gray-900">Shipping Address</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs font-bold text-gray-800 mb-4">
            Country / Region
          </label>
          <div className="relative">
            <select
              {...register("country")}
              className="pl-2 max-h-screen border-zinc-300 border-2 rounded-sm py-2 w-full appearance-none bg-transparent text-gray-700 focus:outline-none focus:border-indigo-600 focus:border-2 cursor-pointer"
            >
              <option>Select Country</option>
              {countries.map((country) => (
                <option key={country.name}>{country.name}</option>
              ))}
            </select>
            <div className="absolute right-1 top-3 pointer-events-none text-gray-500">
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
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2.5">
          <label className="text-zinc-700 text-sm font-medium">Address</label>
          <input
            {...register("address")}
            type="text"
            placeholder="123,street-5,city"
            className="w-full px-3.5 py-2.5 rounded-sm bg-zinc-50 border-2 border-zinc-300 text-zinc-600 placeholder:text-zinc-400 text-sm focus:outline-none focus:border-indigo-600 focus:borer-2 transition-colors"
          />
        </div>
        <div className="flex flex-col gap-2.5">
          <label className="text-zinc-700 text-sm font-medium">City</label>
          <input
            {...register("city")}
            type="text"
            placeholder="RYK"
            className="w-full px-3.5 py-2.5 rounded-sm bg-zinc-50 border-2 border-zinc-300 text-zinc-600 placeholder:text-zinc-400 text-sm focus:outline-none focus:border-indigo-600 focus:borer-2 transition-colors"
          />
        </div>
        <div className="flex flex-col gap-2.5">
          <label className="text-zinc-700 text-sm font-medium">Zip Code</label>
          <input
            {...register("zipCode", { valueAsNumber: true })}
            type="text"
            placeholder="1234"
            className="w-full px-3.5 py-2.5 rounded-sm bg-zinc-50 border-2 border-zinc-300 text-zinc-600 placeholder:text-zinc-400 text-sm focus:outline-none focus:border-indigo-600 focus:borer-2 transition-colors"
          />
        </div>
      </div>
    </div>
  );
};

export default ShippingAddressCard;
