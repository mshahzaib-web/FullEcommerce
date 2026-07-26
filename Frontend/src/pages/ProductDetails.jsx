import { useQuery } from "@tanstack/react-query";
import { toast } from "sonner";
import { useParams } from "react-router-dom";
import productDetailsContext from "../context/productDetailsContext";

import ProductGallery from "../components/ProductDetails/ProductGallery";
import Navbar from "../components/Home/Navbar";
import Footer from "../components/Home/Footer";
import ProductInfo from "../components/ProductDetails/ProductInfo";
import ProductDescription from "../components/ProductDetails/ProductDescription";
import RelatedProducts from "../components/ProductDetails/RelatedProducts";
import LoadingCom from "../components/Loading/LoadingCom";

import { getProductDetails } from "../api/Product/product";

export default function ProductDetails() {
  const { id } = useParams();

  const { data, isPending, error } = useQuery({
    queryKey: ["products", id],
    queryFn: () => getProductDetails(id),
    retry: false,
  });

  if (isPending) return <LoadingCom />;
  if (error) return toast.error("Someting Wrong");

  return (
    <>
      <productDetailsContext.Provider value={data}>
        <Navbar />
        <div className="container mx-auto p-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <ProductGallery />
            <ProductInfo />
          </div>
          <ProductDescription />
          <RelatedProducts />
        </div>
        <Footer />
      </productDetailsContext.Provider>
    </>
  );
}
