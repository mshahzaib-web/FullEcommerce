import AnnouncementBar from "../components/Home/AnnouncementBar";
import Navbar from "../components/Home/Navbar";
import HeroSection from "../components/Home/HeroSection";
import FeaturesBar from "../components/Home/FeaturesBar";
import ShopByCategory from "../components/Home/ShopByCategory";
import FlashSale from "../components/Home/FlashSale";
import BestSellers from "../components/Home/BestSellers";
import CollectionBanners from "../components/Home/CollectionBanners";
import NewArrivals from "../components/Home/NewArrivals";
import SummerSale from "../components/Home/SummerSale";
import BrandLogos from "../components/Home/BrandLogos";
import CustomerStories from "../components/Home/CustomerStories";
import ShopTheLook from "../components/Home/ShopTheLook";
import Newsletter from "../components/Home/Newsletter";
import Footer from "../components/Home/Footer";
export default function Home() {
  return (
    <>
      <div>
        <AnnouncementBar />
        <Navbar />
        <HeroSection />
        <FeaturesBar />
        <ShopByCategory />
        <FlashSale />
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
    </>
  );
}
