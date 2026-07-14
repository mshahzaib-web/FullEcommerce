import { useState } from "react";
import { useForm, FormProvider, Form } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";

import Heading from "../components/AddProduct/Heading";
import GeneralInformation from "../components/AddProduct/GeneralInformation";
import Media from "../components/AddProduct/Media";
import Pricing from "../components/AddProduct/Pricing";
import Header from "../components/AdminDashboard/Header";
import Sidebar from "../components/AdminDashboard/Sidebar";
import Inventory from "../components/AddProduct/Inventory";
import Variants from "../components/AddProduct/Variants";
import SubImages from "../components/AddProduct/SubImages";

export default function AddProduct() {
  const [mainImageData, setMainImageData] = useState({});
  const [subImageData, setSubImageData] = useState([]);

  const methods = useForm();

  // const addProductMutation = useMutation({
  //   mutationFn: addProduct,
  //   onSuccess: (data) => {
  //     alert(data.message);
  //   },
  // });

  return (
    <>
      <FormProvider {...methods}>
        <form>
          <div>
            <Header />
            <div className="grid grid-cols-12 gap-3 py-6">
              <div className="hidden md:block md:col-span-4 lg:col-span-3">
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
            <button className="w-full sm:w-auto px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors duration-200">
              Add Product
            </button>
          </div>
        </form>
      </FormProvider>
    </>
  );
}
