import Heading from "../components/AddProduct/Heading";
import GeneralInformation from "../components/AddProduct/GeneralInformation";
import Media from "../components/AddProduct/Media";
import Pricing from "../components/AddProduct/Pricing";
import Header from "../components/AdminDashboard/Header";
import Sidebar from "../components/ShopPage/SidebarFilters";
import Inventory from "../components/AddProduct/Inventory";
import Variants from "../components/AddProduct/Variants";

export default function AddProduct() {
  return (
    <>
      <div>
        <Header />
        <div className="grid grid-cols-12 gap-3 py-6">
          <div className="col-span-3">
            <Sidebar />
          </div>
          <div className="grid grid-cols-12 col-span-9 gap-3">
            <div className="col-span-9">
              <Heading />
              <GeneralInformation />
              <Pricing />
              <Inventory />
              <Variants />
            </div>
            <div className="col-span-3">
              <Media />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
