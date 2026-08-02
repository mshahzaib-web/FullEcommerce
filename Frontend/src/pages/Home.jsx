import AnnouncementBar from "../components/Home/AnnouncementBar";
import Navbar from "../components/Home/Navbar";
import HeroSection from "../components/Home/HeroSection";
import FeaturesBar from "../components/Home/FeaturesBar";
import ShopByCategory from "../components/Home/ShopByCategory";
import BestSellers from "../components/Home/BestSellers";
import CollectionBanners from "../components/Home/CollectionBanners";
import NewArrivals from "../components/Home/NewArrivals";
import SummerSale from "../components/Home/SummerSale";
import BrandLogos from "../components/Home/BrandLogos";
import CustomerStories from "../components/Home/CustomerStories";
import ShopTheLook from "../components/Home/ShopTheLook";
import Newsletter from "../components/Home/Newsletter";
import Footer from "../components/Home/Footer";

import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../api/Product/product";
import LoadingCom from "../components/Loading/LoadingCom";

import homeProductContext from "../context/homeProductContext";
export default function Home() {
  const { data, isPending } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  if (isPending) return <LoadingCom />;

  return (
    <>
      <homeProductContext.Provider value={data}>
        <div>
          <AnnouncementBar />
          <Navbar />
          <HeroSection />
          <FeaturesBar />
          <ShopByCategory />
          <BestSellers />
          <CollectionBanners />
          <NewArrivals />
          <SummerSale />
          <BrandLogos />
          <CustomerStories />
          <ShopTheLook />
          <Newsletter />
          <Footer />
        </div>
      </homeProductContext.Provider>
    </>
  );
}
