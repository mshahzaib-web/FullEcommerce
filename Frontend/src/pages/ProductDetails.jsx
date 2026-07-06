import ProductGallery from "../components/ProductDetails/ProductGallery";
import Navbar from "../components/Home/Navbar";
import Footer from "../components/Home/Footer";
import ProductInfo from "../components/ProductDetails/ProductInfo";
import ProductDescription from "../components/ProductDetails/ProductDescription";
import RelatedProducts from "../components/ProductDetails/RelatedProducts";

export default function ProductDetails() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto p-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <ProductGallery />
          <ProductInfo />
        </div>
        <ProductDescription />
        <RelatedProducts />
      </div>
      <Footer />
    </>
  );
}
