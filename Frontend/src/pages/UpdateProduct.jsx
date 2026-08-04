import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { productValidation } from "../validation/productValidation";
import { useForm, FormProvider } from "react-hook-form";
import { useMutation, useQueryClient, useQuery } from "@tanstack/react-query";
import { toast } from "sonner";
import { useParams, useNavigate } from "react-router-dom";

import UpdateHeading from "../components/UpdateProduct/UpdateHeading";
import UpdateGenralInformation from "../components/UpdateProduct/UpdateGenralInformation";
import UpdateInventory from "../components/UpdateProduct/UpdateInventory";
import UpdateMedia from "../components/UpdateProduct/UpdateMedia";
import UpdatePricing from "../components/UpdateProduct/UpdatePricing";
import UpdateSubImages from "../components/UpdateProduct/UpdateSubImages";
import UpdateVariants from "../components/UpdateProduct/UpdateVariants";

import Header from "../components/AdminDashboard/Header";
import Sidebar from "../components/AdminDashboard/Sidebar";

import { updateProduct } from "../api/Admin/admin";
import { getProductDetails } from "../api/Product/product";
import LoadingCom from "../components/Loading/LoadingCom";

import updateProductContext from "../context/updateProductContext";

export default function UpdateProduct() {
  const queryClient = useQueryClient();
  const { id } = useParams();
  const navigate = useNavigate();

  const [mainImageData, setMainImageData] = useState({});
  const [subImageData, setSubImageData] = useState([]);
  const [colors, setColors] = useState([]);
  const [sizes, setSizes] = useState([]);

  const methods = useForm({
    resolver: zodResolver(productValidation),
  });
  const { handleSubmit } = methods;

  const updateProductMutation = useMutation({
    mutationFn: updateProduct,
    onSuccess: (data) => {
      toast.success(data.message);
      queryClient.invalidateQueries({ queryKey: ["adminproducts"] });
      navigate("/admin/products");
    },
    onError: (error) => {
      toast.error(error.response.data.message);
    },
  });

  const { data, isPending, error } = useQuery({
    queryKey: ["products", id],
    queryFn: () => getProductDetails(id),
    retry: false,
  });

  console.log(data);

  if (isPending) return <LoadingCom />;
  if (error) return toast.error("Someting Wrong");

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

      size: sizes,
      color: colors,
      sku: `SKU-${data.sku}`,
      brand: data.brand?.trim() || "No Brand",
      mainImage: mainImageData,
      subImages: subImageData,
    };

    updateProductMutation.mutate({ id, data: finalData });
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
            <div className="px-4">
              <Header />
            </div>
            <div className="grid grid-cols-12 gap-3 pb-6">
              <div className="col-span-12 lg:col-span-3">
                <Sidebar />
              </div>

              <updateProductContext.Provider value={data}>
                <div className="col-span-12 md:col-span-12 lg:col-span-9 grid grid-cols-1 md:grid-cols-12 gap-3">
                  <div className="col-span-1 md:col-span-12 lg:col-span-9 order-2 lg:order-1">
                    <UpdateHeading />
                    <UpdateGenralInformation />
                    <UpdatePricing />
                    <UpdateInventory />
                    <UpdateVariants setSizes={setSizes} setColors={setColors} />
                  </div>

                  <div className="col-span-1 md:col-span-12 lg:col-span-3 order-1 lg:order-2">
                    <UpdateMedia onSendData={setMainImageData} />
                    <UpdateSubImages sendData={setSubImageData} />
                  </div>
                </div>
              </updateProductContext.Provider>
            </div>
          </div>
          <div className="flex justify-center items-center pb-6">
            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors duration-200 hover:cursor-pointer"
            >
              Update
            </button>
          </div>
        </form>
      </FormProvider>
    </>
  );
}
