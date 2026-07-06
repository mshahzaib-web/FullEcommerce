import Navbar from "../components/Home/Navbar";
import Footer from "../components/Home/Footer";
import HeroBanner from "../components/ShopPage/HeroBanner";
import PremiumCategories from "../components/Categories/PremiumCategories";
import SeasonSaleBanner from "../components/Categories/SeasonSaleBanner";
import Features from "../components/Categories/Features";
export default function Category() {
  return (
    <>
      <div>
        <Navbar />
        <HeroBanner />
        <PremiumCategories />
        <SeasonSaleBanner />
        <Features />
        <Footer />
      </div>
    </>
  );
}
