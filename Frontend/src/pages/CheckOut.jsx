import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";

import Navbar from "../components/Home/Navbar";
import Footer from "../components/Home/Footer";
import SelectionCard from "../components/CheckOut/SelectionCard";
import PromoCard from "../components/CheckOut/PromoCard";
import CustomerInfoCard from "../components/CheckOut/CustomerInfoCard";
import ShippingAddressCard from "../components/CheckOut/ShippingAddressCard";
import ShippingMethodCard from "../components/CheckOut/ShippingMethodCard";
import PaymentMethodCard from "../components/CheckOut/PaymentMethodCard";
import { toast } from "sonner";

import { orderValidation } from "../validation/orderValidation";
import { productOrder } from "../api/User/user";

export default function CheckOut() {
  const methods = useForm({
    resolver: zodResolver(orderValidation),
  });

  const productOrderMutation = useMutation({
    mutationFn: productOrder,
    onSuccess: (data) => {
      toast.success(data.message);
    },

    onError: (error) => {
      toast.error(error.response.data.message);
    },
  });

  const onSubmit = (data) => {
    productOrderMutation.mutate(data);
  };

  const onError = (errors) => {
    const error = Object.values(errors)[0];
    toast.error(error.message);
  };

  return (
    <>
      <Navbar />
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit, onError)}>
          <div className="flex justify-center">
            <div className="w-full lg:w-3xl">
              <SelectionCard />
              <PromoCard />
              <CustomerInfoCard />
              <ShippingAddressCard />
              <ShippingMethodCard />
              <PaymentMethodCard />
              <button className="mt-5 w-full bg-[#3b36d6] hover:bg-indigo-800 text-white font-medium py-3 rounded-lg transition-colors shadow-sm hover:cursor-pointer">
                Place Order
              </button>
            </div>
          </div>
        </form>
      </FormProvider>
      <Footer />
    </>
  );
}
