import Navbar from "../components/Home/Navbar";
import WishListCom from "../components/WishList/WishListCom";
import Footer from "../components/Home/Footer";

export default function WishList() {
  return (
    <>
      <Navbar />
      <div>
        <WishListCom />
      </div>
      <Footer />
    </>
  );
}
