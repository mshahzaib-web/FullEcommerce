import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { productValidation } from "../validation/productValidation";
import { useForm, FormProvider } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

import Heading from "../components/AddProduct/Heading";
import GeneralInformation from "../components/AddProduct/GeneralInformation";
import Media from "../components/AddProduct/Media";
import Pricing from "../components/AddProduct/Pricing";
import Header from "../components/AdminDashboard/Header";
import Sidebar from "../components/AdminDashboard/Sidebar";
import Inventory from "../components/AddProduct/Inventory";
import Variants from "../components/AddProduct/Variants";
import SubImages from "../components/AddProduct/SubImages";

import { addProduct } from "../api/Admin/admin";

export default function AddProduct() {
  const queryClient = useQueryClient();

  const [mainImageData, setMainImageData] = useState({});
  const [subImageData, setSubImageData] = useState([]);

  const methods = useForm({
    resolver: zodResolver(productValidation),
  });
  const { handleSubmit } = methods;

  const addProductMutation = useMutation({
    mutationFn: addProduct,
    onSuccess: (data) => {
      toast.success(data.message);
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
    onError: (error) => {
      toast.error(error.response.data.message);
    },
  });

  const onSubmit = (data) => {
    if (mainImageData.url == null) {
      toast.error("Main image required");
      return;
    }

    if (subImageData.length === 0) {
      toast.error("At least one sub image required");
      return;
    }

    const finalData = {
      ...data,
      brand: data.brand?.trim() || "No Brand",
      mainImage: mainImageData,
      subImages: subImageData,
    };

    console.log("Final Data:", finalData);
    addProductMutation.mutate(finalData);
  };

  //Error
  const onError = (errors) => {
    console.log("Validation Errors:", errors);

    const firstError = Object.values(errors)[0];

    if (firstError) {
      toast.error(firstError.message);
    }
  };

  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit, onError)}>
          <div>
            <Header />
            <div className="grid grid-cols-12 gap-3 py-6">
              <div className="col-span-12 lg:col-span-3">
                <Sidebar />
              </div>

              <div className="col-span-12 md:col-span-8 lg:col-span-9 grid grid-cols-1 md:grid-cols-12 gap-3">
                <div className="col-span-1 md:col-span-12 lg:col-span-9 order-2 lg:order-1">
                  <Heading />
                  <GeneralInformation />
                  <Pricing />
                  <Inventory />
                  <Variants />
                </div>

                <div className="col-span-1 md:col-span-12 lg:col-span-3 order-1 lg:order-2">
                  <Media onSendData={setMainImageData} />
                  <SubImages sendData={setSubImageData} />
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center pb-6">
            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors duration-200 hover:cursor-pointer"
            >
              Add Product
            </button>
          </div>
        </form>
      </FormProvider>
    </>
  );
}
