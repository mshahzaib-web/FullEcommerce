import Sidebar from "../components/AdminDashboard/Sidebar";
import Header from "../components/AdminDashboard/Header";
import Card from "../components/AdminDashboard/Card";

export default function AdminDashboard() {
  return (
    <>
      <div className="container mx-auto">
        <div className="flex">
          <div className="hidden md:block ">
            <Sidebar />
          </div>
          <div className="w-full">
            <div className="">
              <Header />
            </div>
            <div className="py-10 ps-5">
              <p>
                Here's what's happening with LuxeAura today, October 24, 2023.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6">
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
