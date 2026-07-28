import { useFormContext } from "react-hook-form";

const PaymentMethodCard = () => {
  const { register } = useFormContext();

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <h2 className="text-xl font-bold text-gray-900 mb-4">Payment Method</h2>

      <div className="space-y-3">
        {/* Option 1: Selected */}
        <div className="flex items-center justify-between p-3 border border-[#2e2bb8] rounded-xl cursor-pointer">
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 rounded-full border-4 border-[#2e2bb8] bg-white flex items-center justify-center">
              <div className="w-2 h-2 bg-[#2e2bb8] rounded-full"></div>
            </div>
            <span className="text-sm font-medium text-gray-900">COD</span>
          </div>
          <input
            {...register("paymentMethod")}
            defaultValue="COD"
            className="hidden text-sm font-bold text-[#2e2bb8] italic"
          />
        </div>

        {/* Option 2 */}
      </div>
    </div>
  );
};

export default PaymentMethodCard;
