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
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className=" lg:col-span-3">
          <Sidebar />
        </div>
        <div className="mx-4 col-span-1 lg:col-span-8">
          <Heading />
          <SearchBar />
          <ProductCard />
        </div>
      </div>
    </>
  );
}
