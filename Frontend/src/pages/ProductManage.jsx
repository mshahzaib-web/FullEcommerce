import Heading from "../components/ProductManage/Heading";
import SearchBar from "../components/ProductManage/SearchBar";
import ProductCard from "../components/ProductManage/ProductCard";
import Sidebar from "../components/AdminDashboard/Sidebar";
import Header from "../components/AdminDashboard/Header";

export default function ProductManage() {
  return (
    <>
      <div className="px-4">
        <Header />
      </div>
      <div className="p-3 md:pe-4 grid grid-cols-1 md:grid-cols-12">
        <div className="hidden md:block md:col-span-4">
          <Sidebar />
        </div>
        <div className="col-span-1 md:col-span-8">
          <Heading />
          <SearchBar />
          <ProductCard />
        </div>
      </div>
    </>
  );
}
